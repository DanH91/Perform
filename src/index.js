import {assign} from 'lodash-fp';
import * as Core from './core/index';

export let Perform = assign({
  version: "0.0.20",
  author: "Danh91"
}, Core);

var root = typeof self === 'object' && self.self === self && self;

if (root) {
  root.$P = Perform;
  root.Perform = Perform;
}
