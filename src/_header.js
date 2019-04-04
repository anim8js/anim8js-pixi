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
