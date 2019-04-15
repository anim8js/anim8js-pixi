
export * from 'anim8js';
import { FactoryPixi, SubjectPixi, AnimatorPixi, AttributesPixi, AnimatorsPixi, AttributesPixiBounds, AttributesPixiCircle, AttributesPixiEllipse, AttributesPixiAlphaFilter, AttributesPixiBlurFilter, AttributesPixiBlurXFilter, AttributesPixiBlurYFilter, AttributesPixiColorMatrixFilter, AttributesPixiNoiseFilter, AttributesPixiGraphics, AttributesPixiGraphicsData, AttributesPixiFilter, AttributesPixiMesh, AttributesPixiParticleContainer, AttributesPixiPoint, AttributesPixiRectangle, AttributesPixiRoundedRectangle, AttributesPixiSprite, AttributesPixiText, AttributesPixiTransform, AttributesPixiTextStyle, AttributesPixiContainer, AttributesPixiDisplayObject } from 'anim8js-pixi';

declare module 'anim8js'
{

  export interface Factories
  {
    'pixi': FactoryPixi;
  }

  export function anim8(subject: PIXI.Bounds): Animator<AttributesPixiBounds, PIXI.Bounds>;
  export function anim8(subject: PIXI.Circle): Animator<AttributesPixiCircle, PIXI.Circle>;
  export function anim8(subject: PIXI.Ellipse): Animator<AttributesPixiEllipse, PIXI.Ellipse>;
  export function anim8(subject: PIXI.filters.AlphaFilter): Animator<AttributesPixiAlphaFilter, PIXI.filters.AlphaFilter>;
  export function anim8(subject: PIXI.filters.BlurFilter): Animator<AttributesPixiBlurFilter, PIXI.filters.BlurFilter>;
  export function anim8(subject: PIXI.filters.BlurXFilter): Animator<AttributesPixiBlurXFilter, PIXI.filters.BlurXFilter>;
  export function anim8(subject: PIXI.filters.BlurYFilter): Animator<AttributesPixiBlurYFilter, PIXI.filters.BlurYFilter>;
  export function anim8(subject: PIXI.filters.ColorMatrixFilter): Animator<AttributesPixiColorMatrixFilter, PIXI.filters.ColorMatrixFilter>;
  export function anim8(subject: PIXI.filters.NoiseFilter): Animator<AttributesPixiNoiseFilter, PIXI.filters.NoiseFilter>;
  export function anim8(subject: PIXI.Graphics): Animator<AttributesPixiGraphics, PIXI.Graphics>;
  export function anim8(subject: PIXI.GraphicsData): Animator<AttributesPixiGraphicsData, PIXI.GraphicsData>;
  export function anim8(subject: PIXI.Filter<any>): Animator<AttributesPixiFilter, PIXI.Filter<any>>;
  export function anim8(subject: PIXI.mesh.Mesh): Animator<AttributesPixiMesh, PIXI.mesh.Mesh>;
  export function anim8(subject: PIXI.particles.ParticleContainer): Animator<AttributesPixiParticleContainer, PIXI.particles.ParticleContainer>;
  export function anim8(subject: PIXI.Point): Animator<AttributesPixiPoint, PIXI.Point>;
  export function anim8(subject: PIXI.Rectangle): Animator<AttributesPixiRectangle, PIXI.Rectangle>;
  export function anim8(subject: PIXI.RoundedRectangle): Animator<AttributesPixiRoundedRectangle, PIXI.RoundedRectangle>;
  export function anim8(subject: PIXI.Sprite): Animator<AttributesPixiSprite, PIXI.Sprite>;
  export function anim8(subject: PIXI.Text): Animator<AttributesPixiText, PIXI.Text>;
  export function anim8(subject: PIXI.Transform): Animator<AttributesPixiTransform, PIXI.Transform>;
  export function anim8(subject: PIXI.TextStyle): Animator<AttributesPixiTextStyle, PIXI.TextStyle>;
  export function anim8(subject: PIXI.Container): Animator<AttributesPixiContainer, PIXI.Container>;
  export function anim8(subject: PIXI.DisplayObject): Animator<AttributesPixiDisplayObject, PIXI.DisplayObject>;

  export function anim8s (subject: SubjectPixi[]): AnimatorsPixi;


  export function m8(subject: PIXI.Bounds): Animator<AttributesPixiBounds, PIXI.Bounds>;
  export function m8(subject: PIXI.Circle): Animator<AttributesPixiCircle, PIXI.Circle>;
  export function m8(subject: PIXI.Ellipse): Animator<AttributesPixiEllipse, PIXI.Ellipse>;
  export function m8(subject: PIXI.filters.AlphaFilter): Animator<AttributesPixiAlphaFilter, PIXI.filters.AlphaFilter>;
  export function m8(subject: PIXI.filters.BlurFilter): Animator<AttributesPixiBlurFilter, PIXI.filters.BlurFilter>;
  export function m8(subject: PIXI.filters.BlurXFilter): Animator<AttributesPixiBlurXFilter, PIXI.filters.BlurXFilter>;
  export function m8(subject: PIXI.filters.BlurYFilter): Animator<AttributesPixiBlurYFilter, PIXI.filters.BlurYFilter>;
  export function m8(subject: PIXI.filters.ColorMatrixFilter): Animator<AttributesPixiColorMatrixFilter, PIXI.filters.ColorMatrixFilter>;
  export function m8(subject: PIXI.filters.NoiseFilter): Animator<AttributesPixiNoiseFilter, PIXI.filters.NoiseFilter>;
  export function m8(subject: PIXI.Graphics): Animator<AttributesPixiGraphics, PIXI.Graphics>;
  export function m8(subject: PIXI.GraphicsData): Animator<AttributesPixiGraphicsData, PIXI.GraphicsData>;
  export function m8(subject: PIXI.Filter<any>): Animator<AttributesPixiFilter, PIXI.Filter<any>>;
  export function m8(subject: PIXI.mesh.Mesh): Animator<AttributesPixiMesh, PIXI.mesh.Mesh>;
  export function m8(subject: PIXI.particles.ParticleContainer): Animator<AttributesPixiParticleContainer, PIXI.particles.ParticleContainer>;
  export function m8(subject: PIXI.Point): Animator<AttributesPixiPoint, PIXI.Point>;
  export function m8(subject: PIXI.Rectangle): Animator<AttributesPixiRectangle, PIXI.Rectangle>;
  export function m8(subject: PIXI.RoundedRectangle): Animator<AttributesPixiRoundedRectangle, PIXI.RoundedRectangle>;
  export function m8(subject: PIXI.Sprite): Animator<AttributesPixiSprite, PIXI.Sprite>;
  export function m8(subject: PIXI.Text): Animator<AttributesPixiText, PIXI.Text>;
  export function m8(subject: PIXI.Transform): Animator<AttributesPixiTransform, PIXI.Transform>;
  export function m8(subject: PIXI.TextStyle): Animator<AttributesPixiTextStyle, PIXI.TextStyle>;
  export function m8(subject: PIXI.Container): Animator<AttributesPixiContainer, PIXI.Container>;
  export function m8(subject: PIXI.DisplayObject): Animator<AttributesPixiDisplayObject, PIXI.DisplayObject>;

  export function m8s (subject: SubjectPixi[]): AnimatorsPixi;


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
  export default function (subject: PIXI.Sprite): Animator<AttributesPixiSprite, PIXI.Sprite>;
  export default function (subject: PIXI.Text): Animator<AttributesPixiText, PIXI.Text>;
  export default function (subject: PIXI.Transform): Animator<AttributesPixiTransform, PIXI.Transform>;
  export default function (subject: PIXI.TextStyle): Animator<AttributesPixiTextStyle, PIXI.TextStyle>;
  export default function (subject: PIXI.Container): Animator<AttributesPixiContainer, PIXI.Container>;
  export default function (subject: PIXI.DisplayObject): Animator<AttributesPixiDisplayObject, PIXI.DisplayObject>;

  export default function (subject: SubjectPixi[]): AnimatorsPixi;
  
}