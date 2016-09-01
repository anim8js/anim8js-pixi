
function AnimatorPixi( subject )
{
  this.reset( subject );
  this.dynamics = new FastMap();
}

Class.extend( AnimatorPixi, Animator,
{

  placeAttrimator: function( attrimator )
  {
    this._placeAttrimator( attrimator );

    // Place any dynamic function on this animator.
    var attr = attrimator.attribute;
    var attribute = this.getAttribute( attr );
    var dynamic = attribute.dynamic;

    if ( dynamic )
    {
      this.dynamics.put( attr, dynamic );
    }

    return this;
  },

  preupdate: function(now)
  {
    // If there are attribute placed on the animator since the last preupdate
    // that has computed values we need to replace the path on the event with
    // a copy containing the computed values. This is where current value &
    // relative values are injected from the animator into the attribute.
    var aa = this.attrimatorsAdded;
    if ( aa.length )
    {
      for (var i = 0; i < aa.length; i++)
      {
        var attrimator = aa[ i ];
        var attr = attrimator.attribute;
        var dynamic = this.dynamics.get( attr );

        if ( attr in this.subject )
        {
          if ( dynamic )
          {
            this.setDefault( attr ); // TODO
          }
          else
          {
            this.frame[ attr ] = this.subject[ attr ];
          }
        }
        else
        {
          this.setDefault( attr );
        }

        attrimator.start( now, this );
      }

      aa.length = 0;
    }

    this.trigger('preupdate');

    return this;
  },

  apply: function()
  {
    // If a dynamic attribute has been updated, call the dynamic function and
    // mark the attribute as not needing to be updated.
    for (var attr in this.frame)
    {
      var dynamic = this.dynamics.get( attr );

      if ( this.updated[ attr ] && dynamic )
      {
        dynamic( this.frame[ attr ], this.subject );

        this.updated[ attr ] = false;
      }
    }

    // Call the parent apply
    this._apply();

    return this;
  }

});
