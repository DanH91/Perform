import _ from 'lodash-fp';
export * from './spawn';
export * from './exec';

/**
 * Check worker support
 * @return {Bool} suppport
 */
export function initialize() {
  return _.isFunction(window.Worker);
}
