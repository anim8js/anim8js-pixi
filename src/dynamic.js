
function $dynamic(nm)
{
  if ( isString( nm ) && nm in Dynamics )
  {
    return Dynamics[ nm ];
  }

  return false;
}
