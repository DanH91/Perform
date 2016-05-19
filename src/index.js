/**
 * @fileOverview
 * @name index.js<src>
 * @author DanH91
 * @license MIT
 */
import * as Core from './core/index';

export let Perform = Object.assign({
  version: "0.0.21",
  author: "Danh91"
}, Core);

var root = typeof self === 'object' && self.self === self && self;

if (root) {
  root.$P = Perform;
  root.Perform = Perform;
}
