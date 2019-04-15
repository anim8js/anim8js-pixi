
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
