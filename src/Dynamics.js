
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

Dynamics.offsetX = function(attr, subject)
{
  subject.offset.x = attr;
};

Dynamics.offsetY = function(attr, subject)
{
  subject.offset.y = attr;
};

Dynamics.dimension = function(attr, subject)
{
  subject.width = attr.x;
  subject.height = attr.y;
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

Dynamics.sizeScalar = function(attr, subject)
{
  subject.size = attr;
};
