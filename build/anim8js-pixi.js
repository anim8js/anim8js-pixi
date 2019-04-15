/* anim8js-pixi 1.0.2 - anim8 PixiJS (http://www.pixijs.com/) by Philip Diffenderfer */
// UMD (Universal Module Definition)
(function (root, factory)
{
  if (typeof define === 'function' && define.amd) // jshint ignore:line
  {
    // AMD. Register as an anonymous module.
    define(['anim8js'], function(anim8) { // jshint ignore:line
      return factory(anim8, root);
    });
  }
  else if (typeof module === 'object' && module.exports)  // jshint ignore:line
  {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('anim8js'), global);  // jshint ignore:line
  }
  else
  {
    // Browser globals (root is window)
    factory(root.anim8, root);
  }
}(this, function(anim8, window)
{

  var FastMap = anim8.FastMap;
  var Animator = anim8.Animator;
  var Factory = anim8.Factory;
  var Class = anim8.Class;
  var Color = anim8.Color;
  var isObject = anim8.isObject;
  var isArray = anim8.isArray;
  var isString = anim8.isString;

  var $calculator = anim8.calculator;

  var clamp = anim8.clamp;

function getRGB(color)
{
  var r = clamp( Math.floor( color.r ), 0, 255 );
  var g = clamp( Math.floor( color.g ), 0, 255 );
  var b = clamp( Math.floor( color.b ), 0, 255 );

  return (r << 16) | (g << 8) | b;
}


/**
 * =============================================================================
 * Attributes defined in Pixi.js: (see index.d.ts)
 * =============================================================================
 */

var Attributes = {};

// Attributes
Attributes['default']      = {defaultValue: 0};
Attributes.maxX            = {defaultValue: 0};
Attributes.minX            = {defaultValue: 0};
Attributes.maxY            = {defaultValue: 0};
Attributes.minY            = {defaultValue: 0};
Attributes.padding         = {defaultValue: 0};
Attributes.resolution      = {defaultValue: 1};
Attributes.alpha           = {defaultValue: 1};
Attributes.height          = {defaultValue: 0};
Attributes.pivot           = {defaultValue: 0, calculator: '2d'};
Attributes.pivotX          = {defaultValue: 0, dynamic: 'pivotX'};
Attributes.pivotY          = {defaultValue: 0, dynamic: 'pivotY'};
Attributes.position        = {defaultValue: 0, calculator: '2d'};
Attributes.rotation        = {defaultValue: 0};
Attributes.scale           = {defaultValue: 1, calculator: '2d'};
Attributes.scaleX          = {defaultValue: 1, dynamic: 'scaleX'};
Attributes.scaleY          = {defaultValue: 1, dynamic: 'scaleY'};
Attributes.skew            = {defaultValue: 1, calculator: '2d'};
Attributes.skewX           = {defaultValue: 1, dynamic: 'skewX'};
Attributes.skewY           = {defaultValue: 1, dynamic: 'skewY'};
Attributes.anchor          = {defaultValue: 1, calculator: '2d'};
Attributes.anchorX         = {defaultValue: 1, dynamic: 'anchorX'};
Attributes.anchorY         = {defaultValue: 1, dynamic: 'anchorY'};
Attributes.width           = {defaultValue: 0};
Attributes.x               = {defaultValue: 0};
Attributes.y               = {defaultValue: 0};
Attributes.blur            = {defaultValue: 2};
Attributes.blurX           = {defaultValue: 2};
Attributes.blurY           = {defaultValue: 2};
Attributes.quality         = {defaultValue: 1};
Attributes.radius          = {defaultValue: 0};
Attributes.canvasPadding   = {defaultValue: 0};
Attributes.boundsPadding   = {defaultValue: 0};
Attributes.fillAlpha       = {defaultValue: 1};
Attributes.fill            = {defaultValue: Color(), calculator: 'rgba', dynamic: 'fill'};
Attributes.fillColor       = {defaultValue: Color(), calculator: 'rgba', dynamic: 'fill'};
Attributes.lineColor       = {defaultValue: Color(), calculator: 'rgba', dynamic: 'lineColor'};
Attributes.lineWidth       = {defaultValue: 0};
Attributes.lineAlignment   = {defaultValue: 0.5};
Attributes.tint            = {defaultValue: Color(), calculator: 'rgb', dynamic: 'tint'};
Attributes.noise           = {defaultValue: 0.5};
Attributes.seed            = {defaultValue: Math.random()};
Attributes.tilePosition    = {defaultValue: 0, calculator: '2d'};
Attributes.tileScale       = {defaultValue: 1, calculator: '2d'};
Attributes.cursor          = {defaultValue: 'inherit', calculator: 'string'};
Attributes.dropShadowAlpha = {defaultValue: 1};
Attributes.dropShadowAngle = {defaultValue: Math.PI / 4};
Attributes.dropShadowBlur  = {defaultValue: 1};
Attributes.dropShadowDistance = {defaultValue: 5};
Attributes.dropShadowColor = {defaultValue: Color(0,0,0), calculator:'rgba', dynamic: 'dropShadowColor'};
Attributes.animationSpeed  = {defaultValue: 1};
Attributes.text            = {defaultValue: '', calculator: 'string'};
Attributes.fontSize        = {defaultValue: 12};
Attributes.leading         = {defaultValue: 0};
Attributes.letterSpacing   = {defaultValue: 0};
Attributes.lineHeight      = {defaultValue: 0};
Attributes.lineJoin        = {defaultValue: 'miter', calculator: 'string'};
Attributes.miterLimit      = {defaultValue: 0};
Attributes.stroke          = {defaultValue: Color(), calculator: 'rgba', dynamic: 'stroke'};
Attributes.strokeThickness = {defaultValue: 0};
Attributes.wordWrapWidth   = {defaultValue: 100};


function $attribute(attr)
{
  if ( isString( attr ) && attr in Attributes )
  {
    return Attributes[ attr ];
  }

  return Attributes['default'];
}


/**
 * =============================================================================
 * Dynamic Attributes defined in anim8js
 * =============================================================================
 * number: scaleX, scaleY, pivotX, pivotY, offsetX, offsetY, anchorX, anchorY
 * 2d: dimension
 * rgba:
 */

var Dynamics = {};

Dynamics.scaleX = function(attr, subject)
{
  subject.scale.x = attr;
};

Dynamics.scaleY = function(attr, subject)
{
  subject.scale.y = attr;
};

Dynamics.pivotX = function(attr, subject)
{
  subject.pivot.x = attr;
};

Dynamics.pivotY = function(attr, subject)
{
  subject.pivot.y = attr;
};

Dynamics.skewX = function(attr, subject)
{
  subject.skew.x = attr;
};

Dynamics.skewX = function(attr, subject)
{
  subject.skew.y = attr;
};

Dynamics.anchorX = function(attr, subject)
{
  subject.anchor.x = attr;
};

Dynamics.anchorY = function(attr, subject)
{
  subject.anchor.y = attr;
};

Dynamics.color = function(attr, subject)
{
  subject.color = Color.format( attr );
};

Dynamics.lineColor = function(attr, subject)
{
  subject.lineColor = getRGB( attr );
};

Dynamics.fill = function(attr, subject)
{
  subject.fill = Color.format( attr );
};

Dynamics.stroke = function(attr, subject)
{
  subject.stroke = Color.format( attr );
};

Dynamics.dropShadowColor = function(attr, subject)
{
  subject.dropShadowColor = Color.format( attr );
};

Dynamics.tint = function(attr, subject)
{
  subject.tint = getRGB( attr );
};


function $dynamic(nm)
{
  if ( isString( nm ) && nm in Dynamics )
  {
    return Dynamics[ nm ];
  }

  return false;
}

function FactoryPixi()
{
  this.priority = 3;
  this.attributes = {};
}

Class.extend( FactoryPixi, Factory,
{

  is: function(subject)
  {
    return isObject( subject ) && !isArray( subject );
  },

  animatorFor: function(subject)
  {
    var animator = subject.$animator;

    if ( !animator )
    {
      animator = new AnimatorPixi( subject );
      animator.factory = this;

      subject.$animator = animator;
    }

    return animator;
  },

  destroy: function(animator)
  {
    delete animator.subject.$animator;
  },

  attribute: function(attr)
  {
    var attribute = this.attributes[ attr ];

    if ( !attribute )
    {
      attribute = this.attributes[ attr ] = $attribute( attr );

      var calculatorName = attribute.calculator;
      var calculator = $calculator( calculatorName );
      var defaultValue = calculator.parse( attribute.defaultValue, calculator.ZERO );
      var dynamicName = attribute.dynamic;
      var dynamic = $dynamic( dynamicName );

      attribute.calculatorName = calculatorName;
      attribute.calculator = calculator;
      attribute.defaultValue = defaultValue;
      attribute.name = attr;
      attribute.dynamicName = dynamicName;
      attribute.dynamic = dynamic;
      attribute.parse = function(value, ignoreRelative) {
        return this.calculator.parse( value, this.defaultValue, ignoreRelative );
      };
      attribute.cloneDefault = function() {
        return this.calculator.clone( this.defaultValue );
      };
    }

    return attribute;
  }
});


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



  // Register Factory
  anim8.Factories['pixi'] = new FactoryPixi();

  // Classes
  anim8.AnimatorPixi = AnimatorPixi;
  anim8.FactoryPixi = FactoryPixi;

  // Namespace
  anim8.pixi = {
    Attributes:           Attributes,
    attribute:            $attribute,
    Dynamics:             Dynamics,
    dynamic:              $dynamic,
    getRGB:               getRGB
  };

  return anim8;

}));
