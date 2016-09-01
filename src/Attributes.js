
/**
 * =============================================================================
 * Attributes defined in Pixi.js:
 * =============================================================================
 * AbstractFilter:
 *    padding
 * AsciiFilter:
 *    size
 * DisplayObjectContainer:
 *    alpha, height, pivot(2d), position(2d), rotation, scale(2d), width, x, y
 * BlurFilter:
 *    blur, blurX, blurY
 * Circle:
 *    radius
 * ColorStepFilter:
 *    step
 * DisplacementFilter:
 *    offset(2d)
 * DotScreenFilter:
 *    angle
 * Graphics:
 *    blendMode, boundsPadding, fillAlpha, lineColor(rgba), lineWidth, tint(rgba)
 * GrayFilter:
 *    gray
 * InvertFilter:
 *    invert
 * Matrix:
 *    a, b, c, d, tx, ty
 * NoiseFilter:
 *    noise
 * PixelateFilter:
 *    size
 * SepiaFilter:
 *    sepia
 * SmartBlurFilter:
 *    blur
 * Sprite:
 *    anchor(2d)
 * Text.style:
 *    fill(rgba), stroke, strokeThickness, wordWrapWidth, dropShadowAngle, dropShadowDistance
 * TilingSprite:
 *    tilePosition, tileScale, tileScaleOffset
 * TiltShiftFilter:
 *    end, gradientBlur, start
 */

var Attributes = {};

// Attributes
Attributes['default']      = {defaultValue: 0};
Attributes.padding         = {defaultValue: 0};
Attributes.sizeScalar      = {defaultValue: 0, dynamic: 'sizeScalar'};
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
Attributes.width           = {defaultValue: 0};
Attributes.dimension       = {defaultValue: 0, calculator:'2d', dynamic: 'dimension'};
Attributes.x               = {defaultValue: 0};
Attributes.y               = {defaultValue: 0};
Attributes.blur            = {defaultValue: 2};
Attributes.blurX           = {defaultValue: 2};
Attributes.blurY           = {defaultValue: 2};
Attributes.radius          = {defaultValue: 0};
Attributes.step            = {defaultValue: 0};
Attributes.offset          = {defaultValue: 0, calculator: '2d'};
Attributes.offsetX         = {defaultValue: 0, dynamic: 'offsetX'};
Attributes.offsetY         = {defaultValue: 0, dynamic: 'offsetY'};
Attributes.angle           = {defaultValue: 0};
Attributes.blendMode       = {defaultValue: 0};
Attributes.boundsPadding   = {defaultValue: 0};
Attributes.fillAlpha       = {defaultValue: 1};
Attributes.lineColor       = {defaultValue: Color(), calculator: 'rgba', dynamic: 'lineColor'};
Attributes.lineWidth       = {defaultValue: 0};
Attributes.tint            = {defaultValue: Color(), calculator: 'rgb', dynamic: 'tint'};
Attributes.gray            = {defaultValue: 1};
Attributes.invert          = {defaultValue: 1};
Attributes.a               = {defaultValue: 1};
Attributes.b               = {defaultValue: 0};
Attributes.c               = {defaultValue: 0};
Attributes.d               = {defaultValue: 1};
Attributes.tx              = {defaultValue: 0};
Attributes.ty              = {defaultValue: 0};
Attributes.noise           = {defaultValue: 0.5};
Attributes.size            = {defaultValue: 10, calculator: '2d'};
Attributes.sepia           = {defaultValue: 1};
Attributes.anchor          = {defaultValue: 0, calculator: '2d'};
Attributes.fill            = {defaultValue: Color(), calculator: 'rgba', dynamic: 'fill'};
Attributes.stroke          = {defaultValue: Color(), calculator: 'rgba', dynamic: 'stroke'};
Attributes.strokeThickness = {defaultValue: 0};
Attributes.wordWrapWidth   = {defaultValue: 100};
Attributes.dropShadowAngle = {defaultValue: Math.PI / 4};
Attributes.dropShadowDistance = {defaultValue: 5};
Attributes.dropShadowColor = {defaultValue: Color(0,0,0), calculator:'rgba', dynamic: 'dropShadowColor'};
Attributes.tilePosition    = {defaultValue: 0, calculator: '2d'};
Attributes.tileScale       = {defaultValue: 1, calculator: '2d'};
Attributes.tileScaleOffset = {defaultValue: 1, calculator: '2d'};
Attributes.start           = {defaultValue: 0};
Attributes.end             = {defaultValue: 0};
Attributes.gradientBlur    = {defaultValue: 0};
