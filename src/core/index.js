import _ from 'lodash-fp';

import spawn from './spawn';

export default (() => {
  return {
    initialize,
    spawn
  };
})();

/**
 * Check worker support
 * @return {Bool} suppport
 */
function initialize() {
  return _.isFunction(window.Worker);
}
