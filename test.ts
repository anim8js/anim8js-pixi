import * as PIXI from 'pixi.js';
import m8 from 'anim8js-pixi';

const s = new PIXI.Sprite();
const a = m8(s);

a.tween('alpha', 0, 1);