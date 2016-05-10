import _ from 'lodash-fp';
import * as Core from './core/index';

export let Perform = _.assign({
  version: "0.0.19",
  author: "Danh91"
}, Core);

var root = typeof self === 'object' && self.self === self && self;

if (root) {
  root.Perform = Perform;
}
