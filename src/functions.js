function getRGB(color)
{
  var r = clamp( Math.floor( color.r ), 0, 255 );
  var g = clamp( Math.floor( color.g ), 0, 255 );
  var b = clamp( Math.floor( color.b ), 0, 255 );

  return (r << 16) | (g << 8) | b;
}
