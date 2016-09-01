
function $attribute(attr)
{
  if ( isString( attr ) && attr in Attributes )
  {
    return Attributes[ attr ];
  }

  return Attributes['default'];
}
