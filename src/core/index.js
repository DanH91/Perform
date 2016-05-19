import isFunction from 'lodash.isfunction';
export * from './spawn';
export * from './exec';

/**
 * Check worker support
 * @return {Bool} suppport
 */
export function initialize() {
  return isFunction(window.Worker);
}
