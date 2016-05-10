import _ from 'lodash-fp';
export {spawn} from './spawn';

/**
 * Check worker support
 * @return {Bool} suppport
 */
export function initialize() {
  return _.isFunction(window.Worker);
}
