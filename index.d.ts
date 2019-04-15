
import * as PIXI from 'pixi.js';
import { ValueNumber, Animator, Animators, Value2d, ValueRGBA, ValueString, Factory, Attribute, Movie, Sequence, MovieTimeline, MoviePlayer } from './types/anim8js';

declare module 'anim8js-pixi'
{

  export interface AttributesPixiBounds
  {
    maxX: ValueNumber;
    minX: ValueNumber;
    maxY: ValueNumber;
    minY: ValueNumber;
  }

  export interface AttributesPixiCircle
  {
    radius: ValueNumber;
    x: ValueNumber;
    y: ValueNumber;
  }

  export interface AttributesPixiContainer extends AttributesPixiDisplayObject
  {
    height: ValueNumber;
    width: ValueNumber;
  }

  export interface AttributesPixiDisplayObject
  {
    alpha: ValueNumber;
    cursor: ValueString;
    pivot: Value2d;
    pivotX: ValueNumber;
    pivotY: ValueNumber;
    position: Value2d;
    rotation: ValueNumber;
    scale: Value2d;
    scaleX: ValueNumber;
    scaleY: ValueNumber;
    x: ValueNumber;
    y: ValueNumber;
  }

  export interface AttributesPixiEllipse
  {
    height: ValueNumber;
    width: ValueNumber;
    x: ValueNumber;
    y: ValueNumber;
  }

  export interface AttributesPixiAlphaFilter extends AttributesPixiFilter
  {
    alpha: ValueNumber;
  }

  export interface AttributesPixiBlurFilter extends AttributesPixiFilter
  {
    blur: ValueNumber;
    blurX: ValueNumber;
    blurY: ValueNumber;
    quality: ValueNumber;
  }

  export interface AttributesPixiBlurXFilter extends AttributesPixiFilter
  {
    blur: ValueNumber;
    quality: ValueNumber;
  }

  export interface AttributesPixiBlurYFilter extends AttributesPixiFilter
  {
    blur: ValueNumber;
    quality: ValueNumber;
  }

  export interface AttributesPixiColorMatrixFilter extends AttributesPixiFilter
  {
    alpha: ValueNumber;
  }
  
  export interface AttributesPixiNoiseFilter extends AttributesPixiFilter
  {
    noise: ValueNumber;
    seed: ValueNumber;
  }

  export interface AttributesPixiGraphics extends AttributesPixiContainer
  {
    boundsPadding: ValueNumber;
    fillAlpha: ValueNumber;
    lineAlignment: ValueNumber;
    lineColor: ValueRGBA;
    lineWidth: ValueNumber;
    tint: ValueRGBA;
  }

  export interface AttributesPixiGraphicsData
  {
    fillAlpha: ValueNumber;
    fillColor: ValueRGBA;
    lineAlignment: ValueNumber;
    lineAlpha: ValueNumber;
    lineColor: ValueRGBA;
    lineWidth: ValueNumber;
  }

  export interface AttributesPixiFilter
  {
    padding: ValueNumber;
    resolution: ValueNumber;
  }

  export interface AttributesPixiMesh
  {
    canvasPadding: ValueNumber;
    tint: ValueRGBA;
  }

  export interface AttributesPixiParticleContainer
  {
    tint: ValueRGBA;
  }

  export interface AttributesPixiPoint
  {
    x: ValueNumber;
    y: ValueNumber;
  }

  export interface AttributesPixiRectangle
  {
    x: ValueNumber;
    y: ValueNumber;
    width: ValueNumber;
    height: ValueNumber;
  }

  export interface AttributesPixiRoundedRectangle
  {
    x: ValueNumber;
    y: ValueNumber;
    width: ValueNumber;
    height: ValueNumber;
    radius: ValueNumber;
  }

  export interface AttributesPixiSprite extends AttributesPixiContainer
  {
    anchor: Value2d;
    tint: ValueRGBA;
  }

  export interface AttributesPixiTilingSprite extends AttributesPixiSprite
  {
    tilePosition: Value2d;
    tileScale: Value2d;
  }

  export interface AttributesPixiAnimatedSprite extends AttributesPixiSprite
  {
    animationSpeed: ValueNumber;
  }

  export interface AttributesPixiText extends AttributesPixiSprite
  {
    text: ValueString;
    resolution: ValueNumber;
  }

  export interface AttributesPixiTransform
  {
    pivot: Value2d;
    pivotX: ValueNumber;
    pivotY: ValueNumber;
    position: Value2d;
    rotation: Value2d;
    scale: Value2d;
    scaleX: ValueNumber;
    scaleY: ValueNumber;
    skew: Value2d;
    skewX: ValueNumber;
    skewY: ValueNumber;
  }

  export interface AttributesPixiTextStyle
  {
    dropShadowAlpha: ValueNumber;
    dropShadowAngle: ValueNumber;
    dropShadowBlur: ValueNumber;
    dropShadowColor: ValueRGBA;
    dropShadowDistance: ValueNumber;
    fill: ValueRGBA;
    fontSize: ValueNumber;
    leading: ValueNumber;
    letterSpacing: ValueNumber;
    lineHeight: ValueNumber;
    lineJoin: ValueString;
    miterLimit: ValueNumber;
    padding: ValueNumber;
    stroke: ValueRGBA;
    strokeThickness: ValueNumber;
    wordWrapWidth: ValueNumber;
  }

  export type AttributesPixi = 
    AttributesPixiBounds &
    AttributesPixiCircle &
    AttributesPixiContainer &
    AttributesPixiDisplayObject &
    AttributesPixiEllipse &
    AttributesPixiAlphaFilter &
    AttributesPixiBlurFilter &
    AttributesPixiBlurXFilter &
    AttributesPixiBlurYFilter &
    AttributesPixiColorMatrixFilter &
    AttributesPixiNoiseFilter &
    AttributesPixiGraphics &
    AttributesPixiGraphicsData &
    AttributesPixiFilter &
    AttributesPixiMesh &
    AttributesPixiParticleContainer &
    AttributesPixiPoint &
    AttributesPixiRectangle &
    AttributesPixiRoundedRectangle &
    AttributesPixiSprite &
    AttributesPixiTilingSprite &
    AttributesPixiAnimatedSprite & 
    AttributesPixiText &
    AttributesPixiTransform &
    AttributesPixiTextStyle;

  export type SubjectPixi = 
    PIXI.Bounds | 
    PIXI.Circle | 
    PIXI.Container | 
    PIXI.DisplayObject | 
    PIXI.Ellipse | 
    PIXI.filters.AlphaFilter |
    PIXI.filters.BlurFilter |
    PIXI.filters.BlurXFilter | 
    PIXI.filters.BlurYFilter |
    PIXI.filters.ColorMatrixFilter | 
    PIXI.filters.NoiseFilter | 
    PIXI.Graphics | 
    PIXI.GraphicsData | 
    PIXI.Filter<any> | 
    PIXI.mesh.Mesh |
    PIXI.particles.ParticleContainer |
    PIXI.Point | 
    PIXI.Rectangle | 
    PIXI.RoundedRectangle | 
    PIXI.Sprite | 
    PIXI.extras.TilingSprite | 
    PIXI.extras.AnimatedSprite | 
    PIXI.Text | 
    PIXI.Transform | 
    PIXI.TextStyle; 
  
  export type Dynamic = (value: any, subject: SubjectPixi) => void;

  export class AnimatorPixi<A = AttributesPixi, S = SubjectPixi> extends Animator<A, S>
  {
    public dynamics: { [P in keyof AttributesPixi]?: Dynamic };
  }

  export type AnimatorsPixi = Animators<AttributesPixi, SubjectPixi>;

  export type SequencePixi = Sequence<AttributesPixi, SubjectPixi>;

  export type MoviePixi = Movie<AttributesPixi>;

  export type MovieTimelinePixi = MovieTimeline<AttributesPixi>;

  export type MoviePlayerPixi = MoviePlayer<AttributesPixi>;

  export class FactoryPixi<A = AttributesPixi, S = SubjectPixi> extends Factory<A, S>
  {
    public priority: 3;
  }

  export const pixi:
  {
    Attributes: { 
      [P in keyof AttributesPixi]: Partial<Attribute<AttributesPixi, P>> 
    };

    attribute<K extends keyof AttributesPixi> (attr: string | Partial<Attribute<AttributesPixi, K>> ): Partial<Attribute<AttributesPixi, K>>;

    Dynamics: {
      scaleX: Dynamic;
      scaleY: Dynamic;
      pivotX: Dynamic;
      pivotY: Dynamic;
      skewX: Dynamic;
      skewY: Dynamic;
      anchorX: Dynamic;
      anchorY: Dynamic;
      color: Dynamic;
      lineColor: Dynamic;
      fill: Dynamic;
      stroke: Dynamic;
      dropShadowColor: Dynamic;
      tint: Dynamic;
    };

    dynamic (nm: string): Dynamic | false;
  }

  export default function (subject: PIXI.Bounds): Animator<AttributesPixiBounds, PIXI.Bounds>;
  export default function (subject: PIXI.Circle): Animator<AttributesPixiCircle, PIXI.Circle>;
  export default function (subject: PIXI.Ellipse): Animator<AttributesPixiEllipse, PIXI.Ellipse>;
  export default function (subject: PIXI.filters.AlphaFilter): Animator<AttributesPixiAlphaFilter, PIXI.filters.AlphaFilter>;
  export default function (subject: PIXI.filters.BlurFilter): Animator<AttributesPixiBlurFilter, PIXI.filters.BlurFilter>;
  export default function (subject: PIXI.filters.BlurXFilter): Animator<AttributesPixiBlurXFilter, PIXI.filters.BlurXFilter>;
  export default function (subject: PIXI.filters.BlurYFilter): Animator<AttributesPixiBlurYFilter, PIXI.filters.BlurYFilter>;
  export default function (subject: PIXI.filters.ColorMatrixFilter): Animator<AttributesPixiColorMatrixFilter, PIXI.filters.ColorMatrixFilter>;
  export default function (subject: PIXI.filters.NoiseFilter): Animator<AttributesPixiNoiseFilter, PIXI.filters.NoiseFilter>;
  export default function (subject: PIXI.Graphics): Animator<AttributesPixiGraphics, PIXI.Graphics>;
  export default function (subject: PIXI.GraphicsData): Animator<AttributesPixiGraphicsData, PIXI.GraphicsData>;
  export default function (subject: PIXI.Filter<any>): Animator<AttributesPixiFilter, PIXI.Filter<any>>;
  export default function (subject: PIXI.mesh.Mesh): Animator<AttributesPixiMesh, PIXI.mesh.Mesh>;
  export default function (subject: PIXI.particles.ParticleContainer): Animator<AttributesPixiParticleContainer, PIXI.particles.ParticleContainer>;
  export default function (subject: PIXI.Point): Animator<AttributesPixiPoint, PIXI.Point>;
  export default function (subject: PIXI.Rectangle): Animator<AttributesPixiRectangle, PIXI.Rectangle>;
  export default function (subject: PIXI.RoundedRectangle): Animator<AttributesPixiRoundedRectangle, PIXI.RoundedRectangle>;
  export default function (subject: PIXI.extras.TilingSprite): Animator<AttributesPixiTilingSprite, PIXI.extras.TilingSprite>;
  export default function (subject: PIXI.extras.AnimatedSprite): Animator<AttributesPixiAnimatedSprite, PIXI.extras.AnimatedSprite>;
  export default function (subject: PIXI.Sprite): Animator<AttributesPixiSprite, PIXI.Sprite>;
  export default function (subject: PIXI.Text): Animator<AttributesPixiText, PIXI.Text>;
  export default function (subject: PIXI.Transform): Animator<AttributesPixiTransform, PIXI.Transform>;
  export default function (subject: PIXI.TextStyle): Animator<AttributesPixiTextStyle, PIXI.TextStyle>;
  export default function (subject: PIXI.Container): Animator<AttributesPixiContainer, PIXI.Container>;
  export default function (subject: PIXI.DisplayObject): Animator<AttributesPixiDisplayObject, PIXI.DisplayObject>;

  export default function (subject: SubjectPixi[]): AnimatorsPixi;
  
}
