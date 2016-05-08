import _ from 'lodash-fp';
import Core from './core/index';
import config from '../package.json!json';

export let Perform = _.assign({
  version: config.version,
  author: config.author
}, Core);
