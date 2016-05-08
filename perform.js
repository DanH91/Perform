System.registerDynamic("npm:lodash-fp@0.10.4/lib/listing.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.caps = ['1', '2', '3', '4'];
  return module.exports;
});

System.registerDynamic("npm:lodash-fp@0.10.4/lib/mapping.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    'aliasMap': {
      'assign': ['extend'],
      'callback': ['iteratee'],
      'every': ['all'],
      'filter': ['select'],
      'find': ['detect'],
      'first': ['head'],
      'forEach': ['each'],
      'forEachRight': ['eachRight'],
      'includes': ['contains', 'include'],
      'isEqual': ['eq'],
      'map': ['collect'],
      'reduce': ['foldl', 'inject'],
      'reduceRight': ['foldr'],
      'rest': ['tail'],
      'some': ['any'],
      'uniq': ['unique'],
      'zipObject': ['object']
    },
    'aryMethodMap': {
      1: ('attempt,clone,create,curry,flatten,invert,max,memoize,method,methodOf,min,' + 'restParam,sample,sum,template,trim,trimLeft,trimRight,uniq,words').split(','),
      2: ('add,after,ary,assign,at,before,bind,bindKey,chunk,countBy,curryN,debounce,' + 'defaults,defaultsDeep,delay,difference,drop,dropRight,dropRightWhile,' + 'dropWhile,endsWith,every,filter,find,findIndex,findKey,findLast,findLastIndex,' + 'findLastKey,findWhere,forEach,forEachRight,forIn,forInRight,forOwn,forOwnRight,' + 'get,groupBy,gt,gte,has,includes,indexBy,indexOf,intersection,invoke,isEqual,' + 'isMatch,lastIndexOf,lt,lte,map,mapKeys,mapValues,matchesProperty,maxBy,' + 'merge,minBy,omit,pad,padLeft,padRight,parseInt,partition,pick,pluck,pull,' + 'pullAt,random,range,rearg,reject,remove,repeat,result,set,some,sortBy,' + 'sortByAll,sortedIndex,sortedLastIndex,startsWith,sumBy,take,takeRight,' + 'takeRightWhile,takeWhile,throttle,times,trunc,union,uniqBy,uniqueId,' + 'unzipWith,where,without,wrap,xor,zip,zipObject').split(','),
      3: 'slice,sortByOrder,reduce,reduceRight,transform,zipWith'.split(','),
      4: ['fill', 'inRange']
    },
    'aryReargMap': {
      2: [1, 0],
      3: [2, 0, 1],
      4: [3, 2, 0, 1]
    },
    'keyMap': {
      'curryN': 'curry',
      'maxBy': 'max',
      'minBy': 'min',
      'sumBy': 'sum',
      'uniqBy': 'uniq'
    },
    'skipReargMap': {
      'difference': true,
      'range': true,
      'random': true,
      'zipObject': true
    }
  };
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/function/ary.js", ["npm:lodash-compat@3.10.2/internal/createWrapper.js", "npm:lodash-compat@3.10.2/internal/isIterateeCall.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createWrapper = $__require('npm:lodash-compat@3.10.2/internal/createWrapper.js'),
      isIterateeCall = $__require('npm:lodash-compat@3.10.2/internal/isIterateeCall.js');
  var ARY_FLAG = 128;
  var nativeMax = Math.max;
  function ary(func, n, guard) {
    if (guard && isIterateeCall(func, n, guard)) {
      n = undefined;
    }
    n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
    return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
  }
  module.exports = ary;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseCopy.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseCopy(source, props, object) {
    object || (object = {});
    var index = -1,
        length = props.length;
    while (++index < length) {
      var key = props[index];
      object[key] = source[key];
    }
    return object;
  }
  module.exports = baseCopy;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseAssign.js", ["npm:lodash-compat@3.10.2/internal/baseCopy.js", "npm:lodash-compat@3.10.2/object/keys.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCopy = $__require('npm:lodash-compat@3.10.2/internal/baseCopy.js'),
      keys = $__require('npm:lodash-compat@3.10.2/object/keys.js');
  function baseAssign(object, source) {
    return source == null ? object : baseCopy(source, keys(source), object);
  }
  module.exports = baseAssign;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseForOwn.js", ["npm:lodash-compat@3.10.2/internal/baseFor.js", "npm:lodash-compat@3.10.2/object/keys.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFor = $__require('npm:lodash-compat@3.10.2/internal/baseFor.js'),
      keys = $__require('npm:lodash-compat@3.10.2/object/keys.js');
  function baseForOwn(object, iteratee) {
    return baseFor(object, iteratee, keys);
  }
  module.exports = baseForOwn;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/initCloneArray.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  module.exports = initCloneArray;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/bufferClone.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ArrayBuffer = global.ArrayBuffer,
      Uint8Array = global.Uint8Array;
  function bufferClone(buffer) {
    var result = new ArrayBuffer(buffer.byteLength),
        view = new Uint8Array(result);
    view.set(new Uint8Array(buffer));
    return result;
  }
  module.exports = bufferClone;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/initCloneByTag.js", ["npm:lodash-compat@3.10.2/internal/bufferClone.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var bufferClone = $__require('npm:lodash-compat@3.10.2/internal/bufferClone.js');
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      stringTag = '[object String]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var reFlags = /\w*$/;
  var Uint8Array = global.Uint8Array;
  var ctorByTag = {};
  ctorByTag[float32Tag] = global.Float32Array;
  ctorByTag[float64Tag] = global.Float64Array;
  ctorByTag[int8Tag] = global.Int8Array;
  ctorByTag[int16Tag] = global.Int16Array;
  ctorByTag[int32Tag] = global.Int32Array;
  ctorByTag[uint8Tag] = Uint8Array;
  ctorByTag[uint8ClampedTag] = global.Uint8ClampedArray;
  ctorByTag[uint16Tag] = global.Uint16Array;
  ctorByTag[uint32Tag] = global.Uint32Array;
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return bufferClone(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        if (Ctor instanceof Ctor) {
          Ctor = ctorByTag[tag];
        }
        var buffer = object.buffer;
        return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        var result = new Ctor(object.source, reFlags.exec(object));
        result.lastIndex = object.lastIndex;
    }
    return result;
  }
  module.exports = initCloneByTag;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/initCloneObject.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function initCloneObject(object) {
    var Ctor = object.constructor;
    if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
      Ctor = Object;
    }
    return new Ctor;
  }
  module.exports = initCloneObject;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseClone.js", ["npm:lodash-compat@3.10.2/internal/arrayCopy.js", "npm:lodash-compat@3.10.2/internal/arrayEach.js", "npm:lodash-compat@3.10.2/internal/baseAssign.js", "npm:lodash-compat@3.10.2/internal/baseForOwn.js", "npm:lodash-compat@3.10.2/internal/initCloneArray.js", "npm:lodash-compat@3.10.2/internal/initCloneByTag.js", "npm:lodash-compat@3.10.2/internal/initCloneObject.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isHostObject.js", "npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayCopy = $__require('npm:lodash-compat@3.10.2/internal/arrayCopy.js'),
      arrayEach = $__require('npm:lodash-compat@3.10.2/internal/arrayEach.js'),
      baseAssign = $__require('npm:lodash-compat@3.10.2/internal/baseAssign.js'),
      baseForOwn = $__require('npm:lodash-compat@3.10.2/internal/baseForOwn.js'),
      initCloneArray = $__require('npm:lodash-compat@3.10.2/internal/initCloneArray.js'),
      initCloneByTag = $__require('npm:lodash-compat@3.10.2/internal/initCloneByTag.js'),
      initCloneObject = $__require('npm:lodash-compat@3.10.2/internal/initCloneObject.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isHostObject = $__require('npm:lodash-compat@3.10.2/internal/isHostObject.js'),
      isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return arrayCopy(value, result);
      }
    } else {
      var tag = objToString.call(value),
          isFunc = tag == funcTag;
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return baseAssign(result, value);
        }
      } else {
        return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : (object ? value : {});
      }
    }
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
      if (stackA[length] == value) {
        return stackB[length];
      }
    }
    stackA.push(value);
    stackB.push(result);
    (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
      result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
    });
    return result;
  }
  module.exports = baseClone;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/utility/matches.js", ["npm:lodash-compat@3.10.2/internal/baseClone.js", "npm:lodash-compat@3.10.2/internal/baseMatches.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseClone = $__require('npm:lodash-compat@3.10.2/internal/baseClone.js'),
      baseMatches = $__require('npm:lodash-compat@3.10.2/internal/baseMatches.js');
  function matches(source) {
    return baseMatches(baseClone(source, true));
  }
  module.exports = matches;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/utility/callback.js", ["npm:lodash-compat@3.10.2/internal/baseCallback.js", "npm:lodash-compat@3.10.2/internal/isIterateeCall.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js", "npm:lodash-compat@3.10.2/utility/matches.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCallback = $__require('npm:lodash-compat@3.10.2/internal/baseCallback.js'),
      isIterateeCall = $__require('npm:lodash-compat@3.10.2/internal/isIterateeCall.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js'),
      matches = $__require('npm:lodash-compat@3.10.2/utility/matches.js');
  function callback(func, thisArg, guard) {
    if (guard && isIterateeCall(func, thisArg, guard)) {
      thisArg = undefined;
    }
    return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
  }
  module.exports = callback;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createCurry.js", ["npm:lodash-compat@3.10.2/internal/createWrapper.js", "npm:lodash-compat@3.10.2/internal/isIterateeCall.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createWrapper = $__require('npm:lodash-compat@3.10.2/internal/createWrapper.js'),
      isIterateeCall = $__require('npm:lodash-compat@3.10.2/internal/isIterateeCall.js');
  function createCurry(flag) {
    function curryFunc(func, arity, guard) {
      if (guard && isIterateeCall(func, arity, guard)) {
        arity = undefined;
      }
      var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryFunc.placeholder;
      return result;
    }
    return curryFunc;
  }
  module.exports = createCurry;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/function/curry.js", ["npm:lodash-compat@3.10.2/internal/createCurry.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createCurry = $__require('npm:lodash-compat@3.10.2/internal/createCurry.js');
  var CURRY_FLAG = 8;
  var curry = createCurry(CURRY_FLAG);
  curry.placeholder = {};
  module.exports = curry;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createBindWrapper.js", ["npm:lodash-compat@3.10.2/internal/createCtorWrapper.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createCtorWrapper = $__require('npm:lodash-compat@3.10.2/internal/createCtorWrapper.js');
  function createBindWrapper(func, thisArg) {
    var Ctor = createCtorWrapper(func);
    function wrapper() {
      var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
      return fn.apply(thisArg, arguments);
    }
    return wrapper;
  }
  module.exports = createBindWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/realNames.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var realNames = {};
  module.exports = realNames;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/getFuncName.js", ["npm:lodash-compat@3.10.2/internal/realNames.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var realNames = $__require('npm:lodash-compat@3.10.2/internal/realNames.js');
  function getFuncName(func) {
    var result = (func.name + ''),
        array = realNames[result],
        length = array ? array.length : 0;
    while (length--) {
      var data = array[length],
          otherFunc = data.func;
      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }
    return result;
  }
  module.exports = getFuncName;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/LazyWrapper.js", ["npm:lodash-compat@3.10.2/internal/baseCreate.js", "npm:lodash-compat@3.10.2/internal/baseLodash.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCreate = $__require('npm:lodash-compat@3.10.2/internal/baseCreate.js'),
      baseLodash = $__require('npm:lodash-compat@3.10.2/internal/baseLodash.js');
  var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = POSITIVE_INFINITY;
    this.__views__ = [];
  }
  LazyWrapper.prototype = baseCreate(baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;
  module.exports = LazyWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseLodash.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseLodash() {}
  module.exports = baseLodash;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/LodashWrapper.js", ["npm:lodash-compat@3.10.2/internal/baseCreate.js", "npm:lodash-compat@3.10.2/internal/baseLodash.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCreate = $__require('npm:lodash-compat@3.10.2/internal/baseCreate.js'),
      baseLodash = $__require('npm:lodash-compat@3.10.2/internal/baseLodash.js');
  function LodashWrapper(value, chainAll, actions) {
    this.__wrapped__ = value;
    this.__actions__ = actions || [];
    this.__chain__ = !!chainAll;
  }
  LodashWrapper.prototype = baseCreate(baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;
  module.exports = LodashWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/wrapperClone.js", ["npm:lodash-compat@3.10.2/internal/LazyWrapper.js", "npm:lodash-compat@3.10.2/internal/LodashWrapper.js", "npm:lodash-compat@3.10.2/internal/arrayCopy.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LazyWrapper = $__require('npm:lodash-compat@3.10.2/internal/LazyWrapper.js'),
      LodashWrapper = $__require('npm:lodash-compat@3.10.2/internal/LodashWrapper.js'),
      arrayCopy = $__require('npm:lodash-compat@3.10.2/internal/arrayCopy.js');
  function wrapperClone(wrapper) {
    return wrapper instanceof LazyWrapper ? wrapper.clone() : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
  }
  module.exports = wrapperClone;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/chain/lodash.js", ["npm:lodash-compat@3.10.2/internal/LazyWrapper.js", "npm:lodash-compat@3.10.2/internal/LodashWrapper.js", "npm:lodash-compat@3.10.2/internal/baseLodash.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js", "npm:lodash-compat@3.10.2/internal/wrapperClone.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LazyWrapper = $__require('npm:lodash-compat@3.10.2/internal/LazyWrapper.js'),
      LodashWrapper = $__require('npm:lodash-compat@3.10.2/internal/LodashWrapper.js'),
      baseLodash = $__require('npm:lodash-compat@3.10.2/internal/baseLodash.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js'),
      wrapperClone = $__require('npm:lodash-compat@3.10.2/internal/wrapperClone.js');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function lodash(value) {
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
      if (value instanceof LodashWrapper) {
        return value;
      }
      if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
        return wrapperClone(value);
      }
    }
    return new LodashWrapper(value);
  }
  lodash.prototype = baseLodash.prototype;
  module.exports = lodash;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isLaziable.js", ["npm:lodash-compat@3.10.2/internal/LazyWrapper.js", "npm:lodash-compat@3.10.2/internal/getData.js", "npm:lodash-compat@3.10.2/internal/getFuncName.js", "npm:lodash-compat@3.10.2/chain/lodash.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LazyWrapper = $__require('npm:lodash-compat@3.10.2/internal/LazyWrapper.js'),
      getData = $__require('npm:lodash-compat@3.10.2/internal/getData.js'),
      getFuncName = $__require('npm:lodash-compat@3.10.2/internal/getFuncName.js'),
      lodash = $__require('npm:lodash-compat@3.10.2/chain/lodash.js');
  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];
    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }
  module.exports = isLaziable;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/reorder.js", ["npm:lodash-compat@3.10.2/internal/arrayCopy.js", "npm:lodash-compat@3.10.2/internal/isIndex.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayCopy = $__require('npm:lodash-compat@3.10.2/internal/arrayCopy.js'),
      isIndex = $__require('npm:lodash-compat@3.10.2/internal/isIndex.js');
  var nativeMin = Math.min;
  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = arrayCopy(array);
    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }
  module.exports = reorder;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createHybridWrapper.js", ["npm:lodash-compat@3.10.2/internal/arrayCopy.js", "npm:lodash-compat@3.10.2/internal/composeArgs.js", "npm:lodash-compat@3.10.2/internal/composeArgsRight.js", "npm:lodash-compat@3.10.2/internal/createCtorWrapper.js", "npm:lodash-compat@3.10.2/internal/isLaziable.js", "npm:lodash-compat@3.10.2/internal/reorder.js", "npm:lodash-compat@3.10.2/internal/replaceHolders.js", "npm:lodash-compat@3.10.2/internal/setData.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayCopy = $__require('npm:lodash-compat@3.10.2/internal/arrayCopy.js'),
      composeArgs = $__require('npm:lodash-compat@3.10.2/internal/composeArgs.js'),
      composeArgsRight = $__require('npm:lodash-compat@3.10.2/internal/composeArgsRight.js'),
      createCtorWrapper = $__require('npm:lodash-compat@3.10.2/internal/createCtorWrapper.js'),
      isLaziable = $__require('npm:lodash-compat@3.10.2/internal/isLaziable.js'),
      reorder = $__require('npm:lodash-compat@3.10.2/internal/reorder.js'),
      replaceHolders = $__require('npm:lodash-compat@3.10.2/internal/replaceHolders.js'),
      setData = $__require('npm:lodash-compat@3.10.2/internal/setData.js');
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 128;
  var nativeMax = Math.max;
  function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & ARY_FLAG,
        isBind = bitmask & BIND_FLAG,
        isBindKey = bitmask & BIND_KEY_FLAG,
        isCurry = bitmask & CURRY_FLAG,
        isCurryBound = bitmask & CURRY_BOUND_FLAG,
        isCurryRight = bitmask & CURRY_RIGHT_FLAG,
        Ctor = isBindKey ? undefined : createCtorWrapper(func);
    function wrapper() {
      var length = arguments.length,
          index = length,
          args = Array(length);
      while (index--) {
        args[index] = arguments[index];
      }
      if (partials) {
        args = composeArgs(args, partials, holders);
      }
      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight);
      }
      if (isCurry || isCurryRight) {
        var placeholder = wrapper.placeholder,
            argsHolders = replaceHolders(args, placeholder);
        length -= argsHolders.length;
        if (length < arity) {
          var newArgPos = argPos ? arrayCopy(argPos) : undefined,
              newArity = nativeMax(arity - length, 0),
              newsHolders = isCurry ? argsHolders : undefined,
              newHoldersRight = isCurry ? undefined : argsHolders,
              newPartials = isCurry ? args : undefined,
              newPartialsRight = isCurry ? undefined : args;
          bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
          bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
          if (!isCurryBound) {
            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
          }
          var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
              result = createHybridWrapper.apply(undefined, newData);
          if (isLaziable(func)) {
            setData(result, newData);
          }
          result.placeholder = placeholder;
          return result;
        }
      }
      var thisBinding = isBind ? thisArg : this,
          fn = isBindKey ? thisBinding[func] : func;
      if (argPos) {
        args = reorder(args, argPos);
      }
      if (isAry && ary < args.length) {
        args.length = ary;
      }
      if (this && this !== global && this instanceof wrapper) {
        fn = Ctor || createCtorWrapper(func);
      }
      return fn.apply(thisBinding, args);
    }
    return wrapper;
  }
  module.exports = createHybridWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseCreate.js", ["npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  var baseCreate = (function() {
    function object() {}
    return function(prototype) {
      if (isObject(prototype)) {
        object.prototype = prototype;
        var result = new object;
        object.prototype = undefined;
      }
      return result || {};
    };
  }());
  module.exports = baseCreate;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createCtorWrapper.js", ["npm:lodash-compat@3.10.2/internal/baseCreate.js", "npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCreate = $__require('npm:lodash-compat@3.10.2/internal/baseCreate.js'),
      isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  function createCtorWrapper(Ctor) {
    return function() {
      var args = arguments;
      switch (args.length) {
        case 0:
          return new Ctor;
        case 1:
          return new Ctor(args[0]);
        case 2:
          return new Ctor(args[0], args[1]);
        case 3:
          return new Ctor(args[0], args[1], args[2]);
        case 4:
          return new Ctor(args[0], args[1], args[2], args[3]);
        case 5:
          return new Ctor(args[0], args[1], args[2], args[3], args[4]);
        case 6:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      }
      var thisBinding = baseCreate(Ctor.prototype),
          result = Ctor.apply(thisBinding, args);
      return isObject(result) ? result : thisBinding;
    };
  }
  module.exports = createCtorWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createPartialWrapper.js", ["npm:lodash-compat@3.10.2/internal/createCtorWrapper.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createCtorWrapper = $__require('npm:lodash-compat@3.10.2/internal/createCtorWrapper.js');
  var BIND_FLAG = 1;
  function createPartialWrapper(func, bitmask, thisArg, partials) {
    var isBind = bitmask & BIND_FLAG,
        Ctor = createCtorWrapper(func);
    function wrapper() {
      var argsIndex = -1,
          argsLength = arguments.length,
          leftIndex = -1,
          leftLength = partials.length,
          args = Array(leftLength + argsLength);
      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }
      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }
      var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, args);
    }
    return wrapper;
  }
  module.exports = createPartialWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/utility/noop.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function noop() {}
  module.exports = noop;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/getData.js", ["npm:lodash-compat@3.10.2/internal/metaMap.js", "npm:lodash-compat@3.10.2/utility/noop.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var metaMap = $__require('npm:lodash-compat@3.10.2/internal/metaMap.js'),
      noop = $__require('npm:lodash-compat@3.10.2/utility/noop.js');
  var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
  };
  module.exports = getData;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/arrayCopy.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function arrayCopy(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  module.exports = arrayCopy;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/composeArgs.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeMax = Math.max;
  function composeArgs(args, partials, holders) {
    var holdersLength = holders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - holdersLength, 0),
        leftIndex = -1,
        leftLength = partials.length,
        result = Array(leftLength + argsLength);
    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
    while (argsLength--) {
      result[leftIndex++] = args[argsIndex++];
    }
    return result;
  }
  module.exports = composeArgs;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/composeArgsRight.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var nativeMax = Math.max;
  function composeArgsRight(args, partials, holders) {
    var holdersIndex = -1,
        holdersLength = holders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - holdersLength, 0),
        rightIndex = -1,
        rightLength = partials.length,
        result = Array(argsLength + rightLength);
    while (++argsIndex < argsLength) {
      result[argsIndex] = args[argsIndex];
    }
    var offset = argsIndex;
    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
    return result;
  }
  module.exports = composeArgsRight;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/replaceHolders.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var PLACEHOLDER = '__lodash_placeholder__';
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
    while (++index < length) {
      if (array[index] === placeholder) {
        array[index] = PLACEHOLDER;
        result[++resIndex] = index;
      }
    }
    return result;
  }
  module.exports = replaceHolders;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/mergeData.js", ["npm:lodash-compat@3.10.2/internal/arrayCopy.js", "npm:lodash-compat@3.10.2/internal/composeArgs.js", "npm:lodash-compat@3.10.2/internal/composeArgsRight.js", "npm:lodash-compat@3.10.2/internal/replaceHolders.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayCopy = $__require('npm:lodash-compat@3.10.2/internal/arrayCopy.js'),
      composeArgs = $__require('npm:lodash-compat@3.10.2/internal/composeArgs.js'),
      composeArgsRight = $__require('npm:lodash-compat@3.10.2/internal/composeArgsRight.js'),
      replaceHolders = $__require('npm:lodash-compat@3.10.2/internal/replaceHolders.js');
  var BIND_FLAG = 1,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      ARY_FLAG = 128,
      REARG_FLAG = 256;
  var PLACEHOLDER = '__lodash_placeholder__';
  var nativeMin = Math.min;
  function mergeData(data, source) {
    var bitmask = data[1],
        srcBitmask = source[1],
        newBitmask = bitmask | srcBitmask,
        isCommon = newBitmask < ARY_FLAG;
    var isCombo = (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) || (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) || (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
    if (!(isCommon || isCombo)) {
      return data;
    }
    if (srcBitmask & BIND_FLAG) {
      data[2] = source[2];
      newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
    }
    var value = source[3];
    if (value) {
      var partials = data[3];
      data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
      data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
    }
    value = source[5];
    if (value) {
      partials = data[5];
      data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
      data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
    }
    value = source[7];
    if (value) {
      data[7] = arrayCopy(value);
    }
    if (srcBitmask & ARY_FLAG) {
      data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
    }
    if (data[9] == null) {
      data[9] = source[9];
    }
    data[0] = source[0];
    data[1] = newBitmask;
    return data;
  }
  module.exports = mergeData;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/metaMap.js", ["npm:lodash-compat@3.10.2/internal/getNative.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('npm:lodash-compat@3.10.2/internal/getNative.js');
  var WeakMap = getNative(global, 'WeakMap');
  var metaMap = WeakMap && new WeakMap;
  module.exports = metaMap;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseSetData.js", ["npm:lodash-compat@3.10.2/utility/identity.js", "npm:lodash-compat@3.10.2/internal/metaMap.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var identity = $__require('npm:lodash-compat@3.10.2/utility/identity.js'),
      metaMap = $__require('npm:lodash-compat@3.10.2/internal/metaMap.js');
  var baseSetData = !metaMap ? identity : function(func, data) {
    metaMap.set(func, data);
    return func;
  };
  module.exports = baseSetData;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/date/now.js", ["npm:lodash-compat@3.10.2/internal/getNative.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('npm:lodash-compat@3.10.2/internal/getNative.js');
  var nativeNow = getNative(Date, 'now');
  var now = nativeNow || function() {
    return new Date().getTime();
  };
  module.exports = now;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/setData.js", ["npm:lodash-compat@3.10.2/internal/baseSetData.js", "npm:lodash-compat@3.10.2/date/now.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseSetData = $__require('npm:lodash-compat@3.10.2/internal/baseSetData.js'),
      now = $__require('npm:lodash-compat@3.10.2/date/now.js');
  var HOT_COUNT = 150,
      HOT_SPAN = 16;
  var setData = (function() {
    var count = 0,
        lastCalled = 0;
    return function(key, value) {
      var stamp = now(),
          remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return key;
        }
      } else {
        count = 0;
      }
      return baseSetData(key, value);
    };
  }());
  module.exports = setData;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createWrapper.js", ["npm:lodash-compat@3.10.2/internal/baseSetData.js", "npm:lodash-compat@3.10.2/internal/createBindWrapper.js", "npm:lodash-compat@3.10.2/internal/createHybridWrapper.js", "npm:lodash-compat@3.10.2/internal/createPartialWrapper.js", "npm:lodash-compat@3.10.2/internal/getData.js", "npm:lodash-compat@3.10.2/internal/mergeData.js", "npm:lodash-compat@3.10.2/internal/setData.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseSetData = $__require('npm:lodash-compat@3.10.2/internal/baseSetData.js'),
      createBindWrapper = $__require('npm:lodash-compat@3.10.2/internal/createBindWrapper.js'),
      createHybridWrapper = $__require('npm:lodash-compat@3.10.2/internal/createHybridWrapper.js'),
      createPartialWrapper = $__require('npm:lodash-compat@3.10.2/internal/createPartialWrapper.js'),
      getData = $__require('npm:lodash-compat@3.10.2/internal/getData.js'),
      mergeData = $__require('npm:lodash-compat@3.10.2/internal/mergeData.js'),
      setData = $__require('npm:lodash-compat@3.10.2/internal/setData.js');
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64;
  var FUNC_ERROR_TEXT = 'Expected a function';
  var nativeMax = Math.max;
  function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & BIND_KEY_FLAG;
    if (!isBindKey && typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var length = partials ? partials.length : 0;
    if (!length) {
      bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
      partials = holders = undefined;
    }
    length -= (holders ? holders.length : 0);
    if (bitmask & PARTIAL_RIGHT_FLAG) {
      var partialsRight = partials,
          holdersRight = holders;
      partials = holders = undefined;
    }
    var data = isBindKey ? undefined : getData(func),
        newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
    if (data) {
      mergeData(newData, data);
      bitmask = newData[1];
      arity = newData[9];
    }
    newData[9] = arity == null ? (isBindKey ? 0 : func.length) : (nativeMax(arity - length, 0) || 0);
    if (bitmask == BIND_FLAG) {
      var result = createBindWrapper(newData[0], newData[2]);
    } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
      result = createPartialWrapper.apply(undefined, newData);
    } else {
      result = createHybridWrapper.apply(undefined, newData);
    }
    var setter = data ? baseSetData : setData;
    return setter(result, newData);
  }
  module.exports = createWrapper;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/function/rearg.js", ["npm:lodash-compat@3.10.2/internal/baseFlatten.js", "npm:lodash-compat@3.10.2/internal/createWrapper.js", "npm:lodash-compat@3.10.2/function/restParam.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFlatten = $__require('npm:lodash-compat@3.10.2/internal/baseFlatten.js'),
      createWrapper = $__require('npm:lodash-compat@3.10.2/internal/createWrapper.js'),
      restParam = $__require('npm:lodash-compat@3.10.2/function/restParam.js');
  var REARG_FLAG = 256;
  var rearg = restParam(function(func, indexes) {
    return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
  });
  module.exports = rearg;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/difference.js", ["npm:lodash-compat@3.10.2/internal/baseDifference.js", "npm:lodash-compat@3.10.2/internal/baseFlatten.js", "npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js", "npm:lodash-compat@3.10.2/function/restParam.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseDifference = $__require('npm:lodash-compat@3.10.2/internal/baseDifference.js'),
      baseFlatten = $__require('npm:lodash-compat@3.10.2/internal/baseFlatten.js'),
      isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js'),
      restParam = $__require('npm:lodash-compat@3.10.2/function/restParam.js');
  var difference = restParam(function(array, values) {
    return (isObjectLike(array) && isArrayLike(array)) ? baseDifference(array, baseFlatten(values, false, true)) : [];
  });
  module.exports = difference;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseValues.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseValues(object, props) {
    var index = -1,
        length = props.length,
        result = Array(length);
    while (++index < length) {
      result[index] = object[props[index]];
    }
    return result;
  }
  module.exports = baseValues;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/object/values.js", ["npm:lodash-compat@3.10.2/internal/baseValues.js", "npm:lodash-compat@3.10.2/object/keys.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseValues = $__require('npm:lodash-compat@3.10.2/internal/baseValues.js'),
      keys = $__require('npm:lodash-compat@3.10.2/object/keys.js');
  function values(object) {
    return baseValues(object, keys(object));
  }
  module.exports = values;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/collection/includes.js", ["npm:lodash-compat@3.10.2/internal/baseIndexOf.js", "npm:lodash-compat@3.10.2/internal/getLength.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isIterateeCall.js", "npm:lodash-compat@3.10.2/internal/isLength.js", "npm:lodash-compat@3.10.2/lang/isString.js", "npm:lodash-compat@3.10.2/object/values.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIndexOf = $__require('npm:lodash-compat@3.10.2/internal/baseIndexOf.js'),
      getLength = $__require('npm:lodash-compat@3.10.2/internal/getLength.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isIterateeCall = $__require('npm:lodash-compat@3.10.2/internal/isIterateeCall.js'),
      isLength = $__require('npm:lodash-compat@3.10.2/internal/isLength.js'),
      isString = $__require('npm:lodash-compat@3.10.2/lang/isString.js'),
      values = $__require('npm:lodash-compat@3.10.2/object/values.js');
  var nativeMax = Math.max;
  function includes(collection, target, fromIndex, guard) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      collection = values(collection);
      length = collection.length;
    }
    if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
      fromIndex = 0;
    } else {
      fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
    }
    return (typeof collection == 'string' || !isArray(collection) && isString(collection)) ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1) : (!!length && baseIndexOf(collection, target, fromIndex) > -1);
  }
  module.exports = includes;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/intersection.js", ["npm:lodash-compat@3.10.2/internal/baseIndexOf.js", "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js", "npm:lodash-compat@3.10.2/internal/createCache.js", "npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/function/restParam.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIndexOf = $__require('npm:lodash-compat@3.10.2/internal/baseIndexOf.js'),
      cacheIndexOf = $__require('npm:lodash-compat@3.10.2/internal/cacheIndexOf.js'),
      createCache = $__require('npm:lodash-compat@3.10.2/internal/createCache.js'),
      isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      restParam = $__require('npm:lodash-compat@3.10.2/function/restParam.js');
  var intersection = restParam(function(arrays) {
    var othLength = arrays.length,
        othIndex = othLength,
        caches = Array(length),
        indexOf = baseIndexOf,
        isCommon = true,
        result = [];
    while (othIndex--) {
      var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
      caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
    }
    var array = arrays[0],
        index = -1,
        length = array ? array.length : 0,
        seen = caches[0];
    outer: while (++index < length) {
      value = array[index];
      if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
        var othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(value);
        }
        result.push(value);
      }
    }
    return result;
  });
  module.exports = intersection;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/arrayMap.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array.length,
        result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  module.exports = arrayMap;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/pickByArray.js", ["npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function pickByArray(object, props) {
    object = toObject(object);
    var index = -1,
        length = props.length,
        result = {};
    while (++index < length) {
      var key = props[index];
      if (key in object) {
        result[key] = object[key];
      }
    }
    return result;
  }
  module.exports = pickByArray;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createBaseFor.js", ["npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var iterable = toObject(object),
          props = keysFunc(object),
          length = props.length,
          index = fromRight ? length : -1;
      while ((fromRight ? index-- : ++index < length)) {
        var key = props[index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  module.exports = createBaseFor;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseFor.js", ["npm:lodash-compat@3.10.2/internal/createBaseFor.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var createBaseFor = $__require('npm:lodash-compat@3.10.2/internal/createBaseFor.js');
  var baseFor = createBaseFor();
  module.exports = baseFor;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseForIn.js", ["npm:lodash-compat@3.10.2/internal/baseFor.js", "npm:lodash-compat@3.10.2/object/keysIn.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFor = $__require('npm:lodash-compat@3.10.2/internal/baseFor.js'),
      keysIn = $__require('npm:lodash-compat@3.10.2/object/keysIn.js');
  function baseForIn(object, iteratee) {
    return baseFor(object, iteratee, keysIn);
  }
  module.exports = baseForIn;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/pickByCallback.js", ["npm:lodash-compat@3.10.2/internal/baseForIn.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseForIn = $__require('npm:lodash-compat@3.10.2/internal/baseForIn.js');
  function pickByCallback(object, predicate) {
    var result = {};
    baseForIn(object, function(value, key, object) {
      if (predicate(value, key, object)) {
        result[key] = value;
      }
    });
    return result;
  }
  module.exports = pickByCallback;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/object/omit.js", ["npm:lodash-compat@3.10.2/internal/arrayMap.js", "npm:lodash-compat@3.10.2/internal/baseDifference.js", "npm:lodash-compat@3.10.2/internal/baseFlatten.js", "npm:lodash-compat@3.10.2/internal/bindCallback.js", "npm:lodash-compat@3.10.2/object/keysIn.js", "npm:lodash-compat@3.10.2/internal/pickByArray.js", "npm:lodash-compat@3.10.2/internal/pickByCallback.js", "npm:lodash-compat@3.10.2/function/restParam.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayMap = $__require('npm:lodash-compat@3.10.2/internal/arrayMap.js'),
      baseDifference = $__require('npm:lodash-compat@3.10.2/internal/baseDifference.js'),
      baseFlatten = $__require('npm:lodash-compat@3.10.2/internal/baseFlatten.js'),
      bindCallback = $__require('npm:lodash-compat@3.10.2/internal/bindCallback.js'),
      keysIn = $__require('npm:lodash-compat@3.10.2/object/keysIn.js'),
      pickByArray = $__require('npm:lodash-compat@3.10.2/internal/pickByArray.js'),
      pickByCallback = $__require('npm:lodash-compat@3.10.2/internal/pickByCallback.js'),
      restParam = $__require('npm:lodash-compat@3.10.2/function/restParam.js');
  var omit = restParam(function(object, props) {
    if (object == null) {
      return {};
    }
    if (typeof props[0] != 'function') {
      var props = arrayMap(baseFlatten(props), String);
      return pickByArray(object, baseDifference(keysIn(object), props));
    }
    var predicate = bindCallback(props[0], props[1], 3);
    return pickByCallback(object, function(value, key, object) {
      return !predicate(value, key, object);
    });
  });
  module.exports = omit;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/pull.js", ["npm:lodash-compat@3.10.2/internal/baseIndexOf.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIndexOf = $__require('npm:lodash-compat@3.10.2/internal/baseIndexOf.js');
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function pull() {
    var args = arguments,
        array = args[0];
    if (!(array && array.length)) {
      return array;
    }
    var index = 0,
        indexOf = baseIndexOf,
        length = args.length;
    while (++index < length) {
      var fromIndex = 0,
          value = args[index];
      while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
        splice.call(array, fromIndex, 1);
      }
    }
    return array;
  }
  module.exports = pull;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseFlatten.js", ["npm:lodash-compat@3.10.2/internal/arrayPush.js", "npm:lodash-compat@3.10.2/lang/isArguments.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayPush = $__require('npm:lodash-compat@3.10.2/internal/arrayPush.js'),
      isArguments = $__require('npm:lodash-compat@3.10.2/lang/isArguments.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  function baseFlatten(array, isDeep, isStrict, result) {
    result || (result = []);
    var index = -1,
        length = array.length;
    while (++index < length) {
      var value = array[index];
      if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
        if (isDeep) {
          baseFlatten(value, isDeep, isStrict, result);
        } else {
          arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }
    return result;
  }
  module.exports = baseFlatten;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/union.js", ["npm:lodash-compat@3.10.2/internal/baseFlatten.js", "npm:lodash-compat@3.10.2/internal/baseUniq.js", "npm:lodash-compat@3.10.2/function/restParam.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseFlatten = $__require('npm:lodash-compat@3.10.2/internal/baseFlatten.js'),
      baseUniq = $__require('npm:lodash-compat@3.10.2/internal/baseUniq.js'),
      restParam = $__require('npm:lodash-compat@3.10.2/function/restParam.js');
  var union = restParam(function(arrays) {
    return baseUniq(baseFlatten(arrays, false, true));
  });
  module.exports = union;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseIsMatch.js", ["npm:lodash-compat@3.10.2/internal/baseIsEqual.js", "npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIsEqual = $__require('npm:lodash-compat@3.10.2/internal/baseIsEqual.js'),
      toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function baseIsMatch(object, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = toObject(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];
      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var result = customizer ? customizer(objValue, srcValue, key) : undefined;
        if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  module.exports = baseIsMatch;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/object/pairs.js", ["npm:lodash-compat@3.10.2/object/keys.js", "npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keys = $__require('npm:lodash-compat@3.10.2/object/keys.js'),
      toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function pairs(object) {
    object = toObject(object);
    var index = -1,
        props = keys(object),
        length = props.length,
        result = Array(length);
    while (++index < length) {
      var key = props[index];
      result[index] = [key, object[key]];
    }
    return result;
  }
  module.exports = pairs;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/getMatchData.js", ["npm:lodash-compat@3.10.2/internal/isStrictComparable.js", "npm:lodash-compat@3.10.2/object/pairs.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isStrictComparable = $__require('npm:lodash-compat@3.10.2/internal/isStrictComparable.js'),
      pairs = $__require('npm:lodash-compat@3.10.2/object/pairs.js');
  function getMatchData(object) {
    var result = pairs(object),
        length = result.length;
    while (length--) {
      result[length][2] = isStrictComparable(result[length][1]);
    }
    return result;
  }
  module.exports = getMatchData;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseMatches.js", ["npm:lodash-compat@3.10.2/internal/baseIsMatch.js", "npm:lodash-compat@3.10.2/internal/getMatchData.js", "npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIsMatch = $__require('npm:lodash-compat@3.10.2/internal/baseIsMatch.js'),
      getMatchData = $__require('npm:lodash-compat@3.10.2/internal/getMatchData.js'),
      toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      var key = matchData[0][0],
          value = matchData[0][1];
      return function(object) {
        if (object == null) {
          return false;
        }
        object = toObject(object);
        return object[key] === value && (value !== undefined || (key in object));
      };
    }
    return function(object) {
      return baseIsMatch(object, matchData);
    };
  }
  module.exports = baseMatches;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/arraySome.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function arraySome(array, predicate) {
    var index = -1,
        length = array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  module.exports = arraySome;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/equalArrays.js", ["npm:lodash-compat@3.10.2/internal/arraySome.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arraySome = $__require('npm:lodash-compat@3.10.2/internal/arraySome.js');
  function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var index = -1,
        arrLength = array.length,
        othLength = other.length;
    if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
      return false;
    }
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index],
          result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
      if (result !== undefined) {
        if (result) {
          continue;
        }
        return false;
      }
      if (isLoose) {
        if (!arraySome(other, function(othValue) {
          return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
        })) {
          return false;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
        return false;
      }
    }
    return true;
  }
  module.exports = equalArrays;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/equalByTag.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      numberTag = '[object Number]',
      regexpTag = '[object RegExp]',
      stringTag = '[object String]';
  function equalByTag(object, other, tag) {
    switch (tag) {
      case boolTag:
      case dateTag:
        return +object == +other;
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case numberTag:
        return (object != +object) ? other != +other : object == +other;
      case regexpTag:
      case stringTag:
        return object == (other + '');
    }
    return false;
  }
  module.exports = equalByTag;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/arrayEach.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  module.exports = arrayEach;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isArguments.js", ["npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  function isArguments(value) {
    return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  }
  module.exports = isArguments;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/object/keysIn.js", ["npm:lodash-compat@3.10.2/internal/arrayEach.js", "npm:lodash-compat@3.10.2/lang/isArguments.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/lang/isFunction.js", "npm:lodash-compat@3.10.2/internal/isIndex.js", "npm:lodash-compat@3.10.2/internal/isLength.js", "npm:lodash-compat@3.10.2/lang/isObject.js", "npm:lodash-compat@3.10.2/lang/isString.js", "npm:lodash-compat@3.10.2/support.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayEach = $__require('npm:lodash-compat@3.10.2/internal/arrayEach.js'),
      isArguments = $__require('npm:lodash-compat@3.10.2/lang/isArguments.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isFunction = $__require('npm:lodash-compat@3.10.2/lang/isFunction.js'),
      isIndex = $__require('npm:lodash-compat@3.10.2/internal/isIndex.js'),
      isLength = $__require('npm:lodash-compat@3.10.2/internal/isLength.js'),
      isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js'),
      isString = $__require('npm:lodash-compat@3.10.2/lang/isString.js'),
      support = $__require('npm:lodash-compat@3.10.2/support.js');
  var arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      stringTag = '[object String]';
  var shadowProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var errorProto = Error.prototype,
      objectProto = Object.prototype,
      stringProto = String.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  var nonEnumProps = {};
  nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = {
    'constructor': true,
    'toLocaleString': true,
    'toString': true,
    'valueOf': true
  };
  nonEnumProps[boolTag] = nonEnumProps[stringTag] = {
    'constructor': true,
    'toString': true,
    'valueOf': true
  };
  nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = {
    'constructor': true,
    'toString': true
  };
  nonEnumProps[objectTag] = {'constructor': true};
  arrayEach(shadowProps, function(key) {
    for (var tag in nonEnumProps) {
      if (hasOwnProperty.call(nonEnumProps, tag)) {
        var props = nonEnumProps[tag];
        props[key] = hasOwnProperty.call(props, key);
      }
    }
  });
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (length && isLength(length) && (isArray(object) || isArguments(object) || isString(object)) && length) || 0;
    var Ctor = object.constructor,
        index = -1,
        proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
        isProto = proto === object,
        result = Array(length),
        skipIndexes = length > 0,
        skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
        skipProto = support.enumPrototypes && isFunction(object);
    while (++index < length) {
      result[index] = (index + '');
    }
    for (var key in object) {
      if (!(skipProto && key == 'prototype') && !(skipErrorProps && (key == 'message' || key == 'name')) && !(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    if (support.nonEnumShadows && object !== objectProto) {
      var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
          nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];
      if (tag == objectTag) {
        proto = objectProto;
      }
      length = shadowProps.length;
      while (length--) {
        key = shadowProps[length];
        var nonEnum = nonEnums[key];
        if (!(isProto && nonEnum) && (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
          result.push(key);
        }
      }
    }
    return result;
  }
  module.exports = keysIn;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/shimKeys.js", ["npm:lodash-compat@3.10.2/lang/isArguments.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isIndex.js", "npm:lodash-compat@3.10.2/internal/isLength.js", "npm:lodash-compat@3.10.2/lang/isString.js", "npm:lodash-compat@3.10.2/object/keysIn.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArguments = $__require('npm:lodash-compat@3.10.2/lang/isArguments.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isIndex = $__require('npm:lodash-compat@3.10.2/internal/isIndex.js'),
      isLength = $__require('npm:lodash-compat@3.10.2/internal/isLength.js'),
      isString = $__require('npm:lodash-compat@3.10.2/lang/isString.js'),
      keysIn = $__require('npm:lodash-compat@3.10.2/object/keysIn.js');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;
    var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object) || isString(object));
    var index = -1,
        result = [];
    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = shimKeys;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/object/keys.js", ["npm:lodash-compat@3.10.2/internal/getNative.js", "npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/lang/isObject.js", "npm:lodash-compat@3.10.2/internal/shimKeys.js", "npm:lodash-compat@3.10.2/support.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('npm:lodash-compat@3.10.2/internal/getNative.js'),
      isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js'),
      shimKeys = $__require('npm:lodash-compat@3.10.2/internal/shimKeys.js'),
      support = $__require('npm:lodash-compat@3.10.2/support.js');
  var nativeKeys = getNative(Object, 'keys');
  var keys = !nativeKeys ? shimKeys : function(object) {
    var Ctor = object == null ? undefined : object.constructor;
    if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };
  module.exports = keys;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/equalObjects.js", ["npm:lodash-compat@3.10.2/object/keys.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var keys = $__require('npm:lodash-compat@3.10.2/object/keys.js');
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objProps = keys(object),
        objLength = objProps.length,
        othProps = keys(other),
        othLength = othProps.length;
    if (objLength != othLength && !isLoose) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    var skipCtor = isLoose;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key],
          result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
      if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
        return false;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (!skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;
      if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        return false;
      }
    }
    return true;
  }
  module.exports = equalObjects;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isTypedArray.js", ["npm:lodash-compat@3.10.2/internal/isLength.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isLength = $__require('npm:lodash-compat@3.10.2/internal/isLength.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
  }
  module.exports = isTypedArray;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js", ["npm:lodash-compat@3.10.2/internal/equalArrays.js", "npm:lodash-compat@3.10.2/internal/equalByTag.js", "npm:lodash-compat@3.10.2/internal/equalObjects.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isHostObject.js", "npm:lodash-compat@3.10.2/lang/isTypedArray.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var equalArrays = $__require('npm:lodash-compat@3.10.2/internal/equalArrays.js'),
      equalByTag = $__require('npm:lodash-compat@3.10.2/internal/equalByTag.js'),
      equalObjects = $__require('npm:lodash-compat@3.10.2/internal/equalObjects.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isHostObject = $__require('npm:lodash-compat@3.10.2/internal/isHostObject.js'),
      isTypedArray = $__require('npm:lodash-compat@3.10.2/lang/isTypedArray.js');
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;
    if (!objIsArr) {
      objTag = objToString.call(object);
      if (objTag == argsTag) {
        objTag = objectTag;
      } else if (objTag != objectTag) {
        objIsArr = isTypedArray(object);
      }
    }
    if (!othIsArr) {
      othTag = objToString.call(other);
      if (othTag == argsTag) {
        othTag = objectTag;
      } else if (othTag != objectTag) {
        othIsArr = isTypedArray(other);
      }
    }
    var objIsObj = objTag == objectTag && !isHostObject(object),
        othIsObj = othTag == objectTag && !isHostObject(other),
        isSameTag = objTag == othTag;
    if (isSameTag && !(objIsArr || objIsObj)) {
      return equalByTag(object, other, objTag);
    }
    if (!isLoose) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
      if (objIsWrapped || othIsWrapped) {
        return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stackA || (stackA = []);
    stackB || (stackB = []);
    var length = stackA.length;
    while (length--) {
      if (stackA[length] == object) {
        return stackB[length] == other;
      }
    }
    stackA.push(object);
    stackB.push(other);
    var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
    stackA.pop();
    stackB.pop();
    return result;
  }
  module.exports = baseIsEqualDeep;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseIsEqual.js", ["npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js", "npm:lodash-compat@3.10.2/lang/isObject.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIsEqualDeep = $__require('npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js'),
      isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
  }
  module.exports = baseIsEqual;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseSlice.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;
    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : (+end || 0);
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  module.exports = baseSlice;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isStrictComparable.js", ["npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }
  module.exports = isStrictComparable;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/last.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function last(array) {
    var length = array ? array.length : 0;
    return length ? array[length - 1] : undefined;
  }
  module.exports = last;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js", ["npm:lodash-compat@3.10.2/internal/baseGet.js", "npm:lodash-compat@3.10.2/internal/baseIsEqual.js", "npm:lodash-compat@3.10.2/internal/baseSlice.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/isKey.js", "npm:lodash-compat@3.10.2/internal/isStrictComparable.js", "npm:lodash-compat@3.10.2/array/last.js", "npm:lodash-compat@3.10.2/internal/toObject.js", "npm:lodash-compat@3.10.2/internal/toPath.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseGet = $__require('npm:lodash-compat@3.10.2/internal/baseGet.js'),
      baseIsEqual = $__require('npm:lodash-compat@3.10.2/internal/baseIsEqual.js'),
      baseSlice = $__require('npm:lodash-compat@3.10.2/internal/baseSlice.js'),
      isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      isKey = $__require('npm:lodash-compat@3.10.2/internal/isKey.js'),
      isStrictComparable = $__require('npm:lodash-compat@3.10.2/internal/isStrictComparable.js'),
      last = $__require('npm:lodash-compat@3.10.2/array/last.js'),
      toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js'),
      toPath = $__require('npm:lodash-compat@3.10.2/internal/toPath.js');
  function baseMatchesProperty(path, srcValue) {
    var isArr = isArray(path),
        isCommon = isKey(path) && isStrictComparable(srcValue),
        pathKey = (path + '');
    path = toPath(path);
    return function(object) {
      if (object == null) {
        return false;
      }
      var key = pathKey;
      object = toObject(object);
      if ((isArr || !isCommon) && !(key in object)) {
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
          return false;
        }
        key = last(path);
        object = toObject(object);
      }
      return object[key] === srcValue ? (srcValue !== undefined || (key in object)) : baseIsEqual(srcValue, object[key], undefined, true);
    };
  }
  module.exports = baseMatchesProperty;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/bindCallback.js", ["npm:lodash-compat@3.10.2/utility/identity.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var identity = $__require('npm:lodash-compat@3.10.2/utility/identity.js');
  function bindCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    if (thisArg === undefined) {
      return func;
    }
    switch (argCount) {
      case 1:
        return function(value) {
          return func.call(thisArg, value);
        };
      case 3:
        return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
      case 4:
        return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      case 5:
        return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
    }
    return function() {
      return func.apply(thisArg, arguments);
    };
  }
  module.exports = bindCallback;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/utility/identity.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function identity(value) {
    return value;
  }
  module.exports = identity;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseGet.js", ["npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function baseGet(object, path, pathKey) {
    if (object == null) {
      return;
    }
    object = toObject(object);
    if (pathKey !== undefined && pathKey in object) {
      path = [pathKey];
    }
    var index = 0,
        length = path.length;
    while (object != null && index < length) {
      object = toObject(object)[path[index++]];
    }
    return (index && index == length) ? object : undefined;
  }
  module.exports = baseGet;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseToString.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    function baseToString(value) {
      return value == null ? '' : (value + '');
    }
    module.exports = baseToString;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/toPath.js", ["npm:lodash-compat@3.10.2/internal/baseToString.js", "npm:lodash-compat@3.10.2/lang/isArray.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var baseToString = $__require('npm:lodash-compat@3.10.2/internal/baseToString.js'),
        isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js');
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var reEscapeChar = /\\(\\)?/g;
    function toPath(value) {
      if (isArray(value)) {
        return value;
      }
      var result = [];
      baseToString(value).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    }
    module.exports = toPath;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/basePropertyDeep.js", ["npm:lodash-compat@3.10.2/internal/baseGet.js", "npm:lodash-compat@3.10.2/internal/toPath.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseGet = $__require('npm:lodash-compat@3.10.2/internal/baseGet.js'),
      toPath = $__require('npm:lodash-compat@3.10.2/internal/toPath.js');
  function basePropertyDeep(path) {
    var pathKey = (path + '');
    path = toPath(path);
    return function(object) {
      return baseGet(object, path, pathKey);
    };
  }
  module.exports = basePropertyDeep;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isArray.js", ["npm:lodash-compat@3.10.2/internal/getNative.js", "npm:lodash-compat@3.10.2/internal/isLength.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('npm:lodash-compat@3.10.2/internal/getNative.js'),
      isLength = $__require('npm:lodash-compat@3.10.2/internal/isLength.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  var arrayTag = '[object Array]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  var nativeIsArray = getNative(Array, 'isArray');
  var isArray = nativeIsArray || function(value) {
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
  };
  module.exports = isArray;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isKey.js", ["npm:lodash-compat@3.10.2/lang/isArray.js", "npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArray = $__require('npm:lodash-compat@3.10.2/lang/isArray.js'),
      toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    var type = typeof value;
    if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
      return true;
    }
    if (isArray(value)) {
      return false;
    }
    var result = !reIsDeepProp.test(value);
    return result || (object != null && value in toObject(object));
  }
  module.exports = isKey;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/utility/property.js", ["npm:lodash-compat@3.10.2/internal/baseProperty.js", "npm:lodash-compat@3.10.2/internal/basePropertyDeep.js", "npm:lodash-compat@3.10.2/internal/isKey.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseProperty = $__require('npm:lodash-compat@3.10.2/internal/baseProperty.js'),
      basePropertyDeep = $__require('npm:lodash-compat@3.10.2/internal/basePropertyDeep.js'),
      isKey = $__require('npm:lodash-compat@3.10.2/internal/isKey.js');
  function property(path) {
    return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
  }
  module.exports = property;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseCallback.js", ["npm:lodash-compat@3.10.2/internal/baseMatches.js", "npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js", "npm:lodash-compat@3.10.2/internal/bindCallback.js", "npm:lodash-compat@3.10.2/utility/identity.js", "npm:lodash-compat@3.10.2/utility/property.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseMatches = $__require('npm:lodash-compat@3.10.2/internal/baseMatches.js'),
      baseMatchesProperty = $__require('npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js'),
      bindCallback = $__require('npm:lodash-compat@3.10.2/internal/bindCallback.js'),
      identity = $__require('npm:lodash-compat@3.10.2/utility/identity.js'),
      property = $__require('npm:lodash-compat@3.10.2/utility/property.js');
  function baseCallback(func, thisArg, argCount) {
    var type = typeof func;
    if (type == 'function') {
      return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
    }
    if (func == null) {
      return identity;
    }
    if (type == 'object') {
      return baseMatches(func);
    }
    return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
  }
  module.exports = baseCallback;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isIndex.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var reIsUint = /^\d+$/;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  module.exports = isIndex;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isIterateeCall.js", ["npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/internal/isIndex.js", "npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      isIndex = $__require('npm:lodash-compat@3.10.2/internal/isIndex.js'),
      isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
      var other = object[index];
      return value === value ? (value === other) : (other !== other);
    }
    return false;
  }
  module.exports = isIterateeCall;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/sortedUniq.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function sortedUniq(array, iteratee) {
    var seen,
        index = -1,
        length = array.length,
        resIndex = -1,
        result = [];
    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;
      if (!index || seen !== computed) {
        seen = computed;
        result[++resIndex] = value;
      }
    }
    return result;
  }
  module.exports = sortedUniq;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/uniq.js", ["npm:lodash-compat@3.10.2/internal/baseCallback.js", "npm:lodash-compat@3.10.2/internal/baseUniq.js", "npm:lodash-compat@3.10.2/internal/isIterateeCall.js", "npm:lodash-compat@3.10.2/internal/sortedUniq.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCallback = $__require('npm:lodash-compat@3.10.2/internal/baseCallback.js'),
      baseUniq = $__require('npm:lodash-compat@3.10.2/internal/baseUniq.js'),
      isIterateeCall = $__require('npm:lodash-compat@3.10.2/internal/isIterateeCall.js'),
      sortedUniq = $__require('npm:lodash-compat@3.10.2/internal/sortedUniq.js');
  function uniq(array, isSorted, iteratee, thisArg) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    if (isSorted != null && typeof isSorted != 'boolean') {
      thisArg = iteratee;
      iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
      isSorted = false;
    }
    iteratee = iteratee == null ? iteratee : baseCallback(iteratee, thisArg, 3);
    return (isSorted) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
  }
  module.exports = uniq;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/function/restParam.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FUNC_ERROR_TEXT = 'Expected a function';
  var nativeMax = Math.max;
  function restParam(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          rest = Array(length);
      while (++index < length) {
        rest[index] = args[start + index];
      }
      switch (start) {
        case 0:
          return func.call(this, rest);
        case 1:
          return func.call(this, args[0], rest);
        case 2:
          return func.call(this, args[0], args[1], rest);
      }
      var otherArgs = Array(start + 1);
      index = -1;
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = rest;
      return func.apply(this, otherArgs);
    };
  }
  module.exports = restParam;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/without.js", ["npm:lodash-compat@3.10.2/internal/baseDifference.js", "npm:lodash-compat@3.10.2/internal/isArrayLike.js", "npm:lodash-compat@3.10.2/function/restParam.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseDifference = $__require('npm:lodash-compat@3.10.2/internal/baseDifference.js'),
      isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js'),
      restParam = $__require('npm:lodash-compat@3.10.2/function/restParam.js');
  var without = restParam(function(array, values) {
    return isArrayLike(array) ? baseDifference(array, values) : [];
  });
  module.exports = without;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/arrayPush.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  module.exports = arrayPush;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseDifference.js", ["npm:lodash-compat@3.10.2/internal/baseIndexOf.js", "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js", "npm:lodash-compat@3.10.2/internal/createCache.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIndexOf = $__require('npm:lodash-compat@3.10.2/internal/baseIndexOf.js'),
      cacheIndexOf = $__require('npm:lodash-compat@3.10.2/internal/cacheIndexOf.js'),
      createCache = $__require('npm:lodash-compat@3.10.2/internal/createCache.js');
  var LARGE_ARRAY_SIZE = 200;
  function baseDifference(array, values) {
    var length = array ? array.length : 0,
        result = [];
    if (!length) {
      return result;
    }
    var index = -1,
        indexOf = baseIndexOf,
        isCommon = true,
        cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
        valuesLength = values.length;
    if (cache) {
      indexOf = cacheIndexOf;
      isCommon = false;
      values = cache;
    }
    outer: while (++index < length) {
      var value = array[index];
      if (isCommon && value === value) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === value) {
            continue outer;
          }
        }
        result.push(value);
      } else if (indexOf(values, value, 0) < 0) {
        result.push(value);
      }
    }
    return result;
  }
  module.exports = baseDifference;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/indexOfNaN.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);
    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }
  module.exports = indexOfNaN;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseIndexOf.js", ["npm:lodash-compat@3.10.2/internal/indexOfNaN.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var indexOfNaN = $__require('npm:lodash-compat@3.10.2/internal/indexOfNaN.js');
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  module.exports = baseIndexOf;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/cacheIndexOf.js", ["npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  function cacheIndexOf(cache, value) {
    var data = cache.data,
        result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
    return result ? 0 : -1;
  }
  module.exports = cacheIndexOf;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/cachePush.js", ["npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  function cachePush(value) {
    var data = this.data;
    if (typeof value == 'string' || isObject(value)) {
      data.set.add(value);
    } else {
      data.hash[value] = true;
    }
  }
  module.exports = cachePush;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/SetCache.js", ["npm:lodash-compat@3.10.2/internal/cachePush.js", "npm:lodash-compat@3.10.2/internal/getNative.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cachePush = $__require('npm:lodash-compat@3.10.2/internal/cachePush.js'),
      getNative = $__require('npm:lodash-compat@3.10.2/internal/getNative.js');
  var Set = getNative(global, 'Set');
  var nativeCreate = getNative(Object, 'create');
  function SetCache(values) {
    var length = values ? values.length : 0;
    this.data = {
      'hash': nativeCreate(null),
      'set': new Set
    };
    while (length--) {
      this.push(values[length]);
    }
  }
  SetCache.prototype.push = cachePush;
  module.exports = SetCache;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isFunction.js", ["npm:lodash-compat@3.10.2/lang/isObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js');
  var funcTag = '[object Function]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  module.exports = isFunction;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isHostObject.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isHostObject = (function() {
    try {
      Object({'toString': 0} + '');
    } catch (e) {
      return function() {
        return false;
      };
    }
    return function(value) {
      return typeof value.toString != 'function' && typeof(value + '') == 'string';
    };
  }());
  module.exports = isHostObject;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isNative.js", ["npm:lodash-compat@3.10.2/lang/isFunction.js", "npm:lodash-compat@3.10.2/internal/isHostObject.js", "npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isFunction = $__require('npm:lodash-compat@3.10.2/lang/isFunction.js'),
      isHostObject = $__require('npm:lodash-compat@3.10.2/internal/isHostObject.js'),
      isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
  }
  module.exports = isNative;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/getNative.js", ["npm:lodash-compat@3.10.2/lang/isNative.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isNative = $__require('npm:lodash-compat@3.10.2/lang/isNative.js');
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  module.exports = getNative;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/createCache.js", ["npm:lodash-compat@3.10.2/internal/SetCache.js", "npm:lodash-compat@3.10.2/internal/getNative.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SetCache = $__require('npm:lodash-compat@3.10.2/internal/SetCache.js'),
      getNative = $__require('npm:lodash-compat@3.10.2/internal/getNative.js');
  var Set = getNative(global, 'Set');
  var nativeCreate = getNative(Object, 'create');
  function createCache(values) {
    return (nativeCreate && Set) ? new SetCache(values) : null;
  }
  module.exports = createCache;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseUniq.js", ["npm:lodash-compat@3.10.2/internal/baseIndexOf.js", "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js", "npm:lodash-compat@3.10.2/internal/createCache.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseIndexOf = $__require('npm:lodash-compat@3.10.2/internal/baseIndexOf.js'),
      cacheIndexOf = $__require('npm:lodash-compat@3.10.2/internal/cacheIndexOf.js'),
      createCache = $__require('npm:lodash-compat@3.10.2/internal/createCache.js');
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee) {
    var index = -1,
        indexOf = baseIndexOf,
        length = array.length,
        isCommon = true,
        isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
        seen = isLarge ? createCache() : null,
        result = [];
    if (seen) {
      indexOf = cacheIndexOf;
      isCommon = false;
    } else {
      isLarge = false;
      seen = iteratee ? [] : result;
    }
    outer: while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;
      if (isCommon && value === value) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (indexOf(seen, computed, 0) < 0) {
        if (iteratee || isLarge) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }
  module.exports = baseUniq;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isObject.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = isObject;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isObjectLike.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isObjectLike;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/lang/isString.js", ["npm:lodash-compat@3.10.2/internal/isObjectLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObjectLike = $__require('npm:lodash-compat@3.10.2/internal/isObjectLike.js');
  var stringTag = '[object String]';
  var objectProto = Object.prototype;
  var objToString = objectProto.toString;
  function isString(value) {
    return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
  }
  module.exports = isString;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/support.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayProto = Array.prototype,
      errorProto = Error.prototype,
      objectProto = Object.prototype;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice;
  var support = {};
  (function(x) {
    var Ctor = function() {
      this.x = x;
    },
        object = {
          '0': x,
          'length': x
        },
        props = [];
    Ctor.prototype = {
      'valueOf': x,
      'y': x
    };
    for (var key in new Ctor) {
      props.push(key);
    }
    support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
    support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');
    support.nonEnumShadows = !/valueOf/.test(props);
    support.ownLast = props[0] != 'x';
    support.spliceObjects = (splice.call(object, 0, 1), !object[0]);
    support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
  }(1, 0));
  module.exports = support;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/toObject.js", ["npm:lodash-compat@3.10.2/lang/isObject.js", "npm:lodash-compat@3.10.2/lang/isString.js", "npm:lodash-compat@3.10.2/support.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var isObject = $__require('npm:lodash-compat@3.10.2/lang/isObject.js'),
        isString = $__require('npm:lodash-compat@3.10.2/lang/isString.js'),
        support = $__require('npm:lodash-compat@3.10.2/support.js');
    function toObject(value) {
      if (support.unindexedChars && isString(value)) {
        var index = -1,
            length = value.length,
            result = Object(value);
        while (++index < length) {
          result[index] = value.charAt(index);
        }
        return result;
      }
      return isObject(value) ? value : Object(value);
    }
    module.exports = toObject;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/baseProperty.js", ["npm:lodash-compat@3.10.2/internal/toObject.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('npm:lodash-compat@3.10.2/internal/toObject.js');
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : toObject(object)[key];
    };
  }
  module.exports = baseProperty;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/getLength.js", ["npm:lodash-compat@3.10.2/internal/baseProperty.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseProperty = $__require('npm:lodash-compat@3.10.2/internal/baseProperty.js');
  var getLength = baseProperty('length');
  module.exports = getLength;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isLength.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  module.exports = isLength;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/internal/isArrayLike.js", ["npm:lodash-compat@3.10.2/internal/getLength.js", "npm:lodash-compat@3.10.2/internal/isLength.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getLength = $__require('npm:lodash-compat@3.10.2/internal/getLength.js'),
      isLength = $__require('npm:lodash-compat@3.10.2/internal/isLength.js');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  module.exports = isArrayLike;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/array/xor.js", ["npm:lodash-compat@3.10.2/internal/arrayPush.js", "npm:lodash-compat@3.10.2/internal/baseDifference.js", "npm:lodash-compat@3.10.2/internal/baseUniq.js", "npm:lodash-compat@3.10.2/internal/isArrayLike.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayPush = $__require('npm:lodash-compat@3.10.2/internal/arrayPush.js'),
      baseDifference = $__require('npm:lodash-compat@3.10.2/internal/baseDifference.js'),
      baseUniq = $__require('npm:lodash-compat@3.10.2/internal/baseUniq.js'),
      isArrayLike = $__require('npm:lodash-compat@3.10.2/internal/isArrayLike.js');
  function xor() {
    var index = -1,
        length = arguments.length;
    while (++index < length) {
      var array = arguments[index];
      if (isArrayLike(array)) {
        var result = result ? arrayPush(baseDifference(result, array), baseDifference(array, result)) : array;
      }
    }
    return result ? baseUniq(result) : [];
  }
  module.exports = xor;
  return module.exports;
});

System.registerDynamic("npm:lodash-fp@0.10.4/convert.js", ["npm:lodash-fp@0.10.4/lib/listing.js", "npm:lodash-fp@0.10.4/lib/mapping.js", "npm:lodash-compat@3.10.2/function/ary.js", "npm:lodash-compat@3.10.2/utility/callback.js", "npm:lodash-compat@3.10.2/function/curry.js", "npm:lodash-compat@3.10.2/internal/arrayEach.js", "npm:lodash-compat@3.10.2/lang/isFunction.js", "npm:lodash-compat@3.10.2/object/keys.js", "npm:lodash-compat@3.10.2/function/rearg.js", "npm:lodash-compat@3.10.2/array/difference.js", "npm:lodash-compat@3.10.2/collection/includes.js", "npm:lodash-compat@3.10.2/array/intersection.js", "npm:lodash-compat@3.10.2/object/omit.js", "npm:lodash-compat@3.10.2/array/pull.js", "npm:lodash-compat@3.10.2/array/union.js", "npm:lodash-compat@3.10.2/array/uniq.js", "npm:lodash-compat@3.10.2/array/without.js", "npm:lodash-compat@3.10.2/array/xor.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var listing = $__require('npm:lodash-fp@0.10.4/lib/listing.js'),
      mapping = $__require('npm:lodash-fp@0.10.4/lib/mapping.js');
  function convert(name, func) {
    if (!func) {
      func = name;
      name = null;
    }
    if (func == null) {
      throw new TypeError;
    }
    var isLib = typeof func.VERSION == 'string';
    var _ = isLib ? func : {
      'ary': $__require('npm:lodash-compat@3.10.2/function/ary.js'),
      'callback': $__require('npm:lodash-compat@3.10.2/utility/callback.js'),
      'curry': $__require('npm:lodash-compat@3.10.2/function/curry.js'),
      'each': $__require('npm:lodash-compat@3.10.2/internal/arrayEach.js'),
      'isFunction': $__require('npm:lodash-compat@3.10.2/lang/isFunction.js'),
      'keys': $__require('npm:lodash-compat@3.10.2/object/keys.js'),
      'rearg': $__require('npm:lodash-compat@3.10.2/function/rearg.js')
    };
    var ary = _.ary,
        curry = _.curry,
        each = _.each,
        isFunction = _.isFunction,
        keys = _.keys,
        rearg = _.rearg;
    var baseAry = function(func, n) {
      return function() {
        var args = arguments,
            length = Math.min(args.length, n);
        switch (length) {
          case 1:
            return func(args[0]);
          case 2:
            return func(args[0], args[1]);
          case 0:
            return func();
        }
        args = Array(length);
        while (length--) {
          args[length] = arguments[length];
        }
        return func.apply(undefined, args);
      };
    };
    var wrappers = {
      'callback': function(callback) {
        return function(func, thisArg, argCount) {
          argCount = argCount > 2 ? (argCount - 2) : 1;
          func = callback(func, thisArg);
          var length = func.length;
          return (length && length <= argCount) ? func : baseAry(func, argCount);
        };
      },
      'mixin': function(mixin) {
        return function(source) {
          var func = this;
          if (!isFunction(func)) {
            return mixin(func, source);
          }
          var methods = [],
              methodNames = [];
          each(keys(source), function(key) {
            var value = source[key];
            if (isFunction(value)) {
              methodNames.push(key);
              methods.push(func.prototype[key]);
            }
          });
          mixin(func, source);
          each(methodNames, function(methodName, index) {
            var method = methods[index];
            if (isFunction(method)) {
              func.prototype[methodName] = method;
            } else {
              delete func.prototype[methodName];
            }
          });
          return func;
        };
      },
      'runInContext': function(runInContext) {
        return function(context) {
          return convert(runInContext(context));
        };
      }
    };
    var wrap = function(name, func) {
      var wrapper = wrappers[name];
      if (wrapper) {
        return wrapper(func);
      }
      var result;
      each(listing.caps, function(cap) {
        each(mapping.aryMethodMap[cap], function(otherName) {
          if (name == otherName) {
            result = ary(func, cap);
            if (cap > 1 && !mapping.skipReargMap[name]) {
              result = rearg(result, mapping.aryReargMap[cap]);
            }
            return !(result = curry(result, cap));
          }
        });
        return !result;
      });
      return result || func;
    };
    if (!isLib) {
      return wrap(name, func);
    }
    _.mixin({
      'difference': $__require('npm:lodash-compat@3.10.2/array/difference.js'),
      'includes': $__require('npm:lodash-compat@3.10.2/collection/includes.js'),
      'intersection': $__require('npm:lodash-compat@3.10.2/array/intersection.js'),
      'omit': $__require('npm:lodash-compat@3.10.2/object/omit.js'),
      'pull': $__require('npm:lodash-compat@3.10.2/array/pull.js'),
      'union': $__require('npm:lodash-compat@3.10.2/array/union.js'),
      'uniq': $__require('npm:lodash-compat@3.10.2/array/uniq.js'),
      'without': $__require('npm:lodash-compat@3.10.2/array/without.js'),
      'xor': $__require('npm:lodash-compat@3.10.2/array/xor.js')
    });
    var pairs = [];
    each(listing.caps, function(cap) {
      each(mapping.aryMethodMap[cap], function(name) {
        var func = _[mapping.keyMap[name] || name];
        if (func) {
          var wrapped = wrap(name, func);
          pairs.push([name, wrapped]);
          each(mapping.aliasMap[name], function(alias) {
            pairs.push([alias, wrapped]);
          });
        }
      });
    });
    _.callback = wrappers.callback(_.callback);
    _.iteratee = _.callback;
    _.mixin = wrappers.mixin(_.mixin);
    _.runInContext = wrappers.runInContext(_.runInContext);
    each(pairs, function(pair) {
      _[pair[0]] = pair[1];
    });
    return _;
  }
  module.exports = convert;
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2/index.js", ["github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(process) {
    ;
    (function() {
      var undefined;
      var VERSION = '3.10.2';
      var BIND_FLAG = 1,
          BIND_KEY_FLAG = 2,
          CURRY_BOUND_FLAG = 4,
          CURRY_FLAG = 8,
          CURRY_RIGHT_FLAG = 16,
          PARTIAL_FLAG = 32,
          PARTIAL_RIGHT_FLAG = 64,
          ARY_FLAG = 128,
          REARG_FLAG = 256;
      var DEFAULT_TRUNC_LENGTH = 30,
          DEFAULT_TRUNC_OMISSION = '...';
      var HOT_COUNT = 150,
          HOT_SPAN = 16;
      var LARGE_ARRAY_SIZE = 200;
      var LAZY_FILTER_FLAG = 1,
          LAZY_MAP_FLAG = 2;
      var FUNC_ERROR_TEXT = 'Expected a function';
      var PLACEHOLDER = '__lodash_placeholder__';
      var argsTag = '[object Arguments]',
          arrayTag = '[object Array]',
          boolTag = '[object Boolean]',
          dateTag = '[object Date]',
          errorTag = '[object Error]',
          funcTag = '[object Function]',
          mapTag = '[object Map]',
          numberTag = '[object Number]',
          objectTag = '[object Object]',
          regexpTag = '[object RegExp]',
          setTag = '[object Set]',
          stringTag = '[object String]',
          weakMapTag = '[object WeakMap]';
      var arrayBufferTag = '[object ArrayBuffer]',
          float32Tag = '[object Float32Array]',
          float64Tag = '[object Float64Array]',
          int8Tag = '[object Int8Array]',
          int16Tag = '[object Int16Array]',
          int32Tag = '[object Int32Array]',
          uint8Tag = '[object Uint8Array]',
          uint8ClampedTag = '[object Uint8ClampedArray]',
          uint16Tag = '[object Uint16Array]',
          uint32Tag = '[object Uint32Array]';
      var reEmptyStringLeading = /\b__p \+= '';/g,
          reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
          reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
          reUnescapedHtml = /[&<>"'`]/g,
          reHasEscapedHtml = RegExp(reEscapedHtml.source),
          reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g,
          reEvaluate = /<%([\s\S]+?)%>/g,
          reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
      var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
          reHasRegExpChars = RegExp(reRegExpChars.source);
      var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reHasHexPrefix = /^0[xX]/;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^\d+$/;
      var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var reWords = (function() {
        var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
            lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
        return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
      }());
      var contextProps = ['Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array', 'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number', 'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite', 'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'];
      var shadowProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        '\xc0': 'A',
        '\xc1': 'A',
        '\xc2': 'A',
        '\xc3': 'A',
        '\xc4': 'A',
        '\xc5': 'A',
        '\xe0': 'a',
        '\xe1': 'a',
        '\xe2': 'a',
        '\xe3': 'a',
        '\xe4': 'a',
        '\xe5': 'a',
        '\xc7': 'C',
        '\xe7': 'c',
        '\xd0': 'D',
        '\xf0': 'd',
        '\xc8': 'E',
        '\xc9': 'E',
        '\xca': 'E',
        '\xcb': 'E',
        '\xe8': 'e',
        '\xe9': 'e',
        '\xea': 'e',
        '\xeb': 'e',
        '\xcC': 'I',
        '\xcd': 'I',
        '\xce': 'I',
        '\xcf': 'I',
        '\xeC': 'i',
        '\xed': 'i',
        '\xee': 'i',
        '\xef': 'i',
        '\xd1': 'N',
        '\xf1': 'n',
        '\xd2': 'O',
        '\xd3': 'O',
        '\xd4': 'O',
        '\xd5': 'O',
        '\xd6': 'O',
        '\xd8': 'O',
        '\xf2': 'o',
        '\xf3': 'o',
        '\xf4': 'o',
        '\xf5': 'o',
        '\xf6': 'o',
        '\xf8': 'o',
        '\xd9': 'U',
        '\xda': 'U',
        '\xdb': 'U',
        '\xdc': 'U',
        '\xf9': 'u',
        '\xfa': 'u',
        '\xfb': 'u',
        '\xfc': 'u',
        '\xdd': 'Y',
        '\xfd': 'y',
        '\xff': 'y',
        '\xc6': 'Ae',
        '\xe6': 'ae',
        '\xde': 'Th',
        '\xfe': 'th',
        '\xdf': 'ss'
      };
      var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
      };
      var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`'
      };
      var objectTypes = {
        'function': true,
        'object': true
      };
      var regexpEscapes = {
        '0': 'x30',
        '1': 'x31',
        '2': 'x32',
        '3': 'x33',
        '4': 'x34',
        '5': 'x35',
        '6': 'x36',
        '7': 'x37',
        '8': 'x38',
        '9': 'x39',
        'A': 'x41',
        'B': 'x42',
        'C': 'x43',
        'D': 'x44',
        'E': 'x45',
        'F': 'x46',
        'a': 'x61',
        'b': 'x62',
        'c': 'x63',
        'd': 'x64',
        'e': 'x65',
        'f': 'x66',
        'n': 'x6e',
        'r': 'x72',
        't': 'x74',
        'u': 'x75',
        'v': 'x76',
        'x': 'x78'
      };
      var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
      };
      var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
      var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
      var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
      var freeSelf = objectTypes[typeof self] && self && self.Object && self;
      var freeWindow = objectTypes[typeof window] && window && window.Object && window;
      var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
      var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;
      function baseCompareAscending(value, other) {
        if (value !== other) {
          var valIsNull = value === null,
              valIsUndef = value === undefined,
              valIsReflexive = value === value;
          var othIsNull = other === null,
              othIsUndef = other === undefined,
              othIsReflexive = other === other;
          if ((value > other && !othIsNull) || !valIsReflexive || (valIsNull && !othIsUndef && othIsReflexive) || (valIsUndef && othIsReflexive)) {
            return 1;
          }
          if ((value < other && !valIsNull) || !othIsReflexive || (othIsNull && !valIsUndef && valIsReflexive) || (othIsUndef && valIsReflexive)) {
            return -1;
          }
        }
        return 0;
      }
      function baseFindIndex(array, predicate, fromRight) {
        var length = array.length,
            index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length)) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
          return indexOfNaN(array, fromIndex);
        }
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function baseIsFunction(value) {
        return typeof value == 'function' || false;
      }
      function baseToString(value) {
        return value == null ? '' : (value + '');
      }
      function charsLeftIndex(string, chars) {
        var index = -1,
            length = string.length;
        while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
        return index;
      }
      function charsRightIndex(string, chars) {
        var index = string.length;
        while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
        return index;
      }
      function compareAscending(object, other) {
        return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
      }
      function compareMultiple(object, other, orders) {
        var index = -1,
            objCriteria = object.criteria,
            othCriteria = other.criteria,
            length = objCriteria.length,
            ordersLength = orders.length;
        while (++index < length) {
          var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
          if (result) {
            if (index >= ordersLength) {
              return result;
            }
            var order = orders[index];
            return result * ((order === 'asc' || order === true) ? 1 : -1);
          }
        }
        return object.index - other.index;
      }
      function deburrLetter(letter) {
        return deburredLetters[letter];
      }
      function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
      }
      function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
        if (leadingChar) {
          chr = regexpEscapes[chr];
        } else if (whitespaceChar) {
          chr = stringEscapes[chr];
        }
        return '\\' + chr;
      }
      function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
      }
      function indexOfNaN(array, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 0 : -1);
        while ((fromRight ? index-- : ++index < length)) {
          var other = array[index];
          if (other !== other) {
            return index;
          }
        }
        return -1;
      }
      var isHostObject = (function() {
        try {
          Object({'toString': 0} + '');
        } catch (e) {
          return function() {
            return false;
          };
        }
        return function(value) {
          return typeof value.toString != 'function' && typeof(value + '') == 'string';
        };
      }());
      function isObjectLike(value) {
        return !!value && typeof value == 'object';
      }
      function isSpace(charCode) {
        return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 || (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
      }
      function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          if (array[index] === placeholder) {
            array[index] = PLACEHOLDER;
            result[++resIndex] = index;
          }
        }
        return result;
      }
      function sortedUniq(array, iteratee) {
        var seen,
            index = -1,
            length = array.length,
            resIndex = -1,
            result = [];
        while (++index < length) {
          var value = array[index],
              computed = iteratee ? iteratee(value, index, array) : value;
          if (!index || seen !== computed) {
            seen = computed;
            result[++resIndex] = value;
          }
        }
        return result;
      }
      function trimmedLeftIndex(string) {
        var index = -1,
            length = string.length;
        while (++index < length && isSpace(string.charCodeAt(index))) {}
        return index;
      }
      function trimmedRightIndex(string) {
        var index = string.length;
        while (index-- && isSpace(string.charCodeAt(index))) {}
        return index;
      }
      function unescapeHtmlChar(chr) {
        return htmlUnescapes[chr];
      }
      function runInContext(context) {
        context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
        var Array = context.Array,
            Date = context.Date,
            Error = context.Error,
            Function = context.Function,
            Math = context.Math,
            Number = context.Number,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;
        var arrayProto = Array.prototype,
            errorProto = Error.prototype,
            objectProto = Object.prototype,
            stringProto = String.prototype;
        var fnToString = Function.prototype.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var objToString = objectProto.toString;
        var oldDash = root._;
        var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var ArrayBuffer = context.ArrayBuffer,
            clearTimeout = context.clearTimeout,
            parseFloat = context.parseFloat,
            pow = Math.pow,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            Set = getNative(context, 'Set'),
            setTimeout = context.setTimeout,
            splice = arrayProto.splice,
            Uint8Array = context.Uint8Array,
            WeakMap = getNative(context, 'WeakMap');
        var nativeCeil = Math.ceil,
            nativeCreate = getNative(Object, 'create'),
            nativeFloor = Math.floor,
            nativeIsArray = getNative(Array, 'isArray'),
            nativeIsFinite = context.isFinite,
            nativeKeys = getNative(Object, 'keys'),
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeNow = getNative(Date, 'now'),
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random;
        var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
            POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        var MAX_ARRAY_LENGTH = 4294967295,
            MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
            HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var metaMap = WeakMap && new WeakMap;
        var realNames = {};
        var ctorByTag = {};
        ctorByTag[float32Tag] = context.Float32Array;
        ctorByTag[float64Tag] = context.Float64Array;
        ctorByTag[int8Tag] = context.Int8Array;
        ctorByTag[int16Tag] = context.Int16Array;
        ctorByTag[int32Tag] = context.Int32Array;
        ctorByTag[uint8Tag] = Uint8Array;
        ctorByTag[uint8ClampedTag] = context.Uint8ClampedArray;
        ctorByTag[uint16Tag] = context.Uint16Array;
        ctorByTag[uint32Tag] = context.Uint32Array;
        var nonEnumProps = {};
        nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = {
          'constructor': true,
          'toLocaleString': true,
          'toString': true,
          'valueOf': true
        };
        nonEnumProps[boolTag] = nonEnumProps[stringTag] = {
          'constructor': true,
          'toString': true,
          'valueOf': true
        };
        nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = {
          'constructor': true,
          'toString': true
        };
        nonEnumProps[objectTag] = {'constructor': true};
        arrayEach(shadowProps, function(key) {
          for (var tag in nonEnumProps) {
            if (hasOwnProperty.call(nonEnumProps, tag)) {
              var props = nonEnumProps[tag];
              props[key] = hasOwnProperty.call(props, key);
            }
          }
        });
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        function baseLodash() {}
        function LodashWrapper(value, chainAll, actions) {
          this.__wrapped__ = value;
          this.__actions__ = actions || [];
          this.__chain__ = !!chainAll;
        }
        var support = lodash.support = {};
        (function(x) {
          var Ctor = function() {
            this.x = x;
          },
              object = {
                '0': x,
                'length': x
              },
              props = [];
          Ctor.prototype = {
            'valueOf': x,
            'y': x
          };
          for (var key in new Ctor) {
            props.push(key);
          }
          support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') || propertyIsEnumerable.call(errorProto, 'name');
          support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');
          support.nonEnumShadows = !/valueOf/.test(props);
          support.ownLast = props[0] != 'x';
          support.spliceObjects = (splice.call(object, 0, 1), !object[0]);
          support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
        }(1, 0));
        lodash.templateSettings = {
          'escape': reEscape,
          'evaluate': reEvaluate,
          'interpolate': reInterpolate,
          'variable': '',
          'imports': {'_': lodash}
        };
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = POSITIVE_INFINITY;
          this.__views__ = [];
        }
        function lazyClone() {
          var result = new LazyWrapper(this.__wrapped__);
          result.__actions__ = arrayCopy(this.__actions__);
          result.__dir__ = this.__dir__;
          result.__filtered__ = this.__filtered__;
          result.__iteratees__ = arrayCopy(this.__iteratees__);
          result.__takeCount__ = this.__takeCount__;
          result.__views__ = arrayCopy(this.__views__);
          return result;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result = new LazyWrapper(this);
            result.__dir__ = -1;
            result.__filtered__ = true;
          } else {
            result = this.clone();
            result.__dir__ *= -1;
          }
          return result;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(),
              dir = this.__dir__,
              isArr = isArray(array),
              isRight = dir < 0,
              arrLength = isArr ? array.length : 0,
              view = getView(0, arrLength, this.__views__),
              start = view.start,
              end = view.end,
              length = end - start,
              index = isRight ? end : (start - 1),
              iteratees = this.__iteratees__,
              iterLength = iteratees.length,
              resIndex = 0,
              takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result = [];
          outer: while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1,
                value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex],
                  iteratee = data.iteratee,
                  type = data.type,
                  computed = iteratee(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result[resIndex++] = value;
          }
          return result;
        }
        function MapCache() {
          this.__data__ = {};
        }
        function mapDelete(key) {
          return this.has(key) && delete this.__data__[key];
        }
        function mapGet(key) {
          return key == '__proto__' ? undefined : this.__data__[key];
        }
        function mapHas(key) {
          return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
        }
        function mapSet(key, value) {
          if (key != '__proto__') {
            this.__data__[key] = value;
          }
          return this;
        }
        function SetCache(values) {
          var length = values ? values.length : 0;
          this.data = {
            'hash': nativeCreate(null),
            'set': new Set
          };
          while (length--) {
            this.push(values[length]);
          }
        }
        function cacheIndexOf(cache, value) {
          var data = cache.data,
              result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
          return result ? 0 : -1;
        }
        function cachePush(value) {
          var data = this.data;
          if (typeof value == 'string' || isObject(value)) {
            data.set.add(value);
          } else {
            data.hash[value] = true;
          }
        }
        function arrayConcat(array, other) {
          var index = -1,
              length = array.length,
              othIndex = -1,
              othLength = other.length,
              result = Array(length + othLength);
          while (++index < length) {
            result[index] = array[index];
          }
          while (++othIndex < othLength) {
            result[index++] = other[othIndex];
          }
          return result;
        }
        function arrayCopy(source, array) {
          var index = -1,
              length = source.length;
          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function arrayEach(array, iteratee) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayExtremum(array, iteratee, comparator, exValue) {
          var index = -1,
              length = array.length,
              computed = exValue,
              result = computed;
          while (++index < length) {
            var value = array[index],
                current = +iteratee(value);
            if (comparator(current, computed)) {
              computed = current;
              result = value;
            }
          }
          return result;
        }
        function arrayFilter(array, predicate) {
          var index = -1,
              length = array.length,
              resIndex = -1,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[++resIndex] = value;
            }
          }
          return result;
        }
        function arrayMap(array, iteratee) {
          var index = -1,
              length = array.length,
              result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1,
              length = values.length,
              offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initFromArray) {
          var index = -1,
              length = array.length;
          if (initFromArray && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
          var length = array.length;
          if (initFromArray && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1,
              length = array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        function arraySum(array, iteratee) {
          var length = array.length,
              result = 0;
          while (length--) {
            result += +iteratee(array[length]) || 0;
          }
          return result;
        }
        function assignDefaults(objectValue, sourceValue) {
          return objectValue === undefined ? sourceValue : objectValue;
        }
        function assignOwnDefaults(objectValue, sourceValue, key, object) {
          return (objectValue === undefined || !hasOwnProperty.call(object, key)) ? sourceValue : objectValue;
        }
        function assignWith(object, source, customizer) {
          var index = -1,
              props = keys(source),
              length = props.length;
          while (++index < length) {
            var key = props[index],
                value = object[key],
                result = customizer(value, source[key], key, object, source);
            if ((result === result ? (result !== value) : (value === value)) || (value === undefined && !(key in object))) {
              object[key] = result;
            }
          }
          return object;
        }
        function baseAssign(object, source) {
          return source == null ? object : baseCopy(source, keys(source), object);
        }
        function baseAt(collection, props) {
          var index = -1,
              isNil = collection == null,
              isArr = !isNil && isArrayLike(collection),
              length = isArr ? collection.length : 0,
              propsLength = props.length,
              result = Array(propsLength);
          while (++index < propsLength) {
            var key = props[index];
            if (isArr) {
              result[index] = isIndex(key, length) ? collection[key] : undefined;
            } else {
              result[index] = isNil ? undefined : collection[key];
            }
          }
          return result;
        }
        function baseCopy(source, props, object) {
          object || (object = {});
          var index = -1,
              length = props.length;
          while (++index < length) {
            var key = props[index];
            object[key] = source[key];
          }
          return object;
        }
        function baseCallback(func, thisArg, argCount) {
          var type = typeof func;
          if (type == 'function') {
            return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
          }
          if (func == null) {
            return identity;
          }
          if (type == 'object') {
            return baseMatches(func);
          }
          return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
        }
        function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
          var result;
          if (customizer) {
            result = object ? customizer(value, key, object) : customizer(value);
          }
          if (result !== undefined) {
            return result;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
              return arrayCopy(value, result);
            }
          } else {
            var tag = objToString.call(value),
                isFunc = tag == funcTag;
            if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
              if (isHostObject(value)) {
                return object ? value : {};
              }
              result = initCloneObject(isFunc ? {} : value);
              if (!isDeep) {
                return baseAssign(result, value);
              }
            } else {
              return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : (object ? value : {});
            }
          }
          stackA || (stackA = []);
          stackB || (stackB = []);
          var length = stackA.length;
          while (length--) {
            if (stackA[length] == value) {
              return stackB[length];
            }
          }
          stackA.push(value);
          stackB.push(result);
          (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
            result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
          });
          return result;
        }
        var baseCreate = (function() {
          function object() {}
          return function(prototype) {
            if (isObject(prototype)) {
              object.prototype = prototype;
              var result = new object;
              object.prototype = undefined;
            }
            return result || {};
          };
        }());
        function baseDelay(func, wait, args) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined, args);
          }, wait);
        }
        function baseDifference(array, values) {
          var length = array ? array.length : 0,
              result = [];
          if (!length) {
            return result;
          }
          var index = -1,
              indexOf = getIndexOf(),
              isCommon = indexOf === baseIndexOf,
              cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
              valuesLength = values.length;
          if (cache) {
            indexOf = cacheIndexOf;
            isCommon = false;
            values = cache;
          }
          outer: while (++index < length) {
            var value = array[index];
            if (isCommon && value === value) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values[valuesIndex] === value) {
                  continue outer;
                }
              }
              result.push(value);
            } else if (indexOf(values, value, 0) < 0) {
              result.push(value);
            }
          }
          return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result = true;
          baseEach(collection, function(value, index, collection) {
            result = !!predicate(value, index, collection);
            return result;
          });
          return result;
        }
        function baseExtremum(collection, iteratee, comparator, exValue) {
          var computed = exValue,
              result = computed;
          baseEach(collection, function(value, index, collection) {
            var current = +iteratee(value, index, collection);
            if (comparator(current, computed) || (current === exValue && current === result)) {
              computed = current;
              result = value;
            }
          });
          return result;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = start == null ? 0 : (+start || 0);
          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = (end === undefined || end > length) ? length : (+end || 0);
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : (end >>> 0);
          start >>>= 0;
          while (start < length) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result = [];
          baseEach(collection, function(value, index, collection) {
            if (predicate(value, index, collection)) {
              result.push(value);
            }
          });
          return result;
        }
        function baseFind(collection, predicate, eachFunc, retKey) {
          var result;
          eachFunc(collection, function(value, key, collection) {
            if (predicate(value, key, collection)) {
              result = retKey ? key : value;
              return false;
            }
          });
          return result;
        }
        function baseFlatten(array, isDeep, isStrict, result) {
          result || (result = []);
          var index = -1,
              length = array.length;
          while (++index < length) {
            var value = array[index];
            if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
              if (isDeep) {
                baseFlatten(value, isDeep, isStrict, result);
              } else {
                arrayPush(result, value);
              }
            } else if (!isStrict) {
              result[result.length] = value;
            }
          }
          return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForIn(object, iteratee) {
          return baseFor(object, iteratee, keysIn);
        }
        function baseForOwn(object, iteratee) {
          return baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
          return baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
          var index = -1,
              length = props.length,
              resIndex = -1,
              result = [];
          while (++index < length) {
            var key = props[index];
            if (isFunction(object[key])) {
              result[++resIndex] = key;
            }
          }
          return result;
        }
        function baseGet(object, path, pathKey) {
          if (object == null) {
            return;
          }
          object = toObject(object);
          if (pathKey !== undefined && pathKey in object) {
            path = [pathKey];
          }
          var index = 0,
              length = path.length;
          while (object != null && index < length) {
            object = toObject(object)[path[index++]];
          }
          return (index && index == length) ? object : undefined;
        }
        function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
        }
        function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
          var objIsArr = isArray(object),
              othIsArr = isArray(other),
              objTag = arrayTag,
              othTag = arrayTag;
          if (!objIsArr) {
            objTag = objToString.call(object);
            if (objTag == argsTag) {
              objTag = objectTag;
            } else if (objTag != objectTag) {
              objIsArr = isTypedArray(object);
            }
          }
          if (!othIsArr) {
            othTag = objToString.call(other);
            if (othTag == argsTag) {
              othTag = objectTag;
            } else if (othTag != objectTag) {
              othIsArr = isTypedArray(other);
            }
          }
          var objIsObj = objTag == objectTag && !isHostObject(object),
              othIsObj = othTag == objectTag && !isHostObject(other),
              isSameTag = objTag == othTag;
          if (isSameTag && !(objIsArr || objIsObj)) {
            return equalByTag(object, other, objTag);
          }
          if (!isLoose) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
            if (objIsWrapped || othIsWrapped) {
              return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stackA || (stackA = []);
          stackB || (stackB = []);
          var length = stackA.length;
          while (length--) {
            if (stackA[length] == object) {
              return stackB[length] == other;
            }
          }
          stackA.push(object);
          stackB.push(other);
          var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
          stackA.pop();
          stackB.pop();
          return result;
        }
        function baseIsMatch(object, matchData, customizer) {
          var index = matchData.length,
              length = index,
              noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = toObject(object);
          while (index--) {
            var data = matchData[index];
            if ((noCustomizer && data[2]) ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
                objValue = object[key],
                srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var result = customizer ? customizer(objValue, srcValue, key) : undefined;
              if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseMap(collection, iteratee) {
          var index = -1,
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function(value, key, collection) {
            result[++index] = iteratee(value, key, collection);
          });
          return result;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            var key = matchData[0][0],
                value = matchData[0][1];
            return function(object) {
              if (object == null) {
                return false;
              }
              object = toObject(object);
              return object[key] === value && (value !== undefined || (key in object));
            };
          }
          return function(object) {
            return baseIsMatch(object, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          var isArr = isArray(path),
              isCommon = isKey(path) && isStrictComparable(srcValue),
              pathKey = (path + '');
          path = toPath(path);
          return function(object) {
            if (object == null) {
              return false;
            }
            var key = pathKey;
            object = toObject(object);
            if ((isArr || !isCommon) && !(key in object)) {
              object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
              if (object == null) {
                return false;
              }
              key = last(path);
              object = toObject(object);
            }
            return object[key] === srcValue ? (srcValue !== undefined || (key in object)) : baseIsEqual(srcValue, object[key], undefined, true);
          };
        }
        function baseMerge(object, source, customizer, stackA, stackB) {
          if (!isObject(object)) {
            return object;
          }
          var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
              props = isSrcArr ? undefined : keys(source);
          arrayEach(props || source, function(srcValue, key) {
            if (props) {
              key = srcValue;
              srcValue = source[key];
            }
            if (isObjectLike(srcValue)) {
              stackA || (stackA = []);
              stackB || (stackB = []);
              baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
            } else {
              var value = object[key],
                  result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
                  isCommon = result === undefined;
              if (isCommon) {
                result = srcValue;
              }
              if ((result !== undefined || (isSrcArr && !(key in object))) && (isCommon || (result === result ? (result !== value) : (value === value)))) {
                object[key] = result;
              }
            }
          });
          return object;
        }
        function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
          var length = stackA.length,
              srcValue = source[key];
          while (length--) {
            if (stackA[length] == srcValue) {
              object[key] = stackB[length];
              return;
            }
          }
          var value = object[key],
              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
              isCommon = result === undefined;
          if (isCommon) {
            result = srcValue;
            if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
              result = isArray(value) ? value : (isArrayLike(value) ? arrayCopy(value) : []);
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              result = isArguments(value) ? toPlainObject(value) : (isPlainObject(value) ? value : {});
            } else {
              isCommon = false;
            }
          }
          stackA.push(srcValue);
          stackB.push(result);
          if (isCommon) {
            object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
          } else if (result === result ? (result !== value) : (value === value)) {
            object[key] = result;
          }
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : toObject(object)[key];
          };
        }
        function basePropertyDeep(path) {
          var pathKey = (path + '');
          path = toPath(path);
          return function(object) {
            return baseGet(object, path, pathKey);
          };
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0;
          while (length--) {
            var index = indexes[length];
            if (index != previous && isIndex(index)) {
              var previous = index;
              splice.call(array, index, 1);
            }
          }
          return array;
        }
        function baseRandom(min, max) {
          return min + nativeFloor(nativeRandom() * (max - min + 1));
        }
        function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
          eachFunc(collection, function(value, index, collection) {
            accumulator = initFromCollection ? (initFromCollection = false, value) : iteratee(accumulator, value, index, collection);
          });
          return accumulator;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        function baseSlice(array, start, end) {
          var index = -1,
              length = array.length;
          start = start == null ? 0 : (+start || 0);
          if (start < 0) {
            start = -start > length ? 0 : (length + start);
          }
          end = (end === undefined || end > length) ? length : (+end || 0);
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : ((end - start) >>> 0);
          start >>>= 0;
          var result = Array(length);
          while (++index < length) {
            result[index] = array[index + start];
          }
          return result;
        }
        function baseSome(collection, predicate) {
          var result;
          baseEach(collection, function(value, index, collection) {
            result = predicate(value, index, collection);
            return !result;
          });
          return !!result;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSortByOrder(collection, iteratees, orders) {
          var callback = getCallback(),
              index = -1;
          iteratees = arrayMap(iteratees, function(iteratee) {
            return callback(iteratee);
          });
          var result = baseMap(collection, function(value) {
            var criteria = arrayMap(iteratees, function(iteratee) {
              return iteratee(value);
            });
            return {
              'criteria': criteria,
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function baseSum(collection, iteratee) {
          var result = 0;
          baseEach(collection, function(value, index, collection) {
            result += +iteratee(value, index, collection) || 0;
          });
          return result;
        }
        function baseUniq(array, iteratee) {
          var index = -1,
              indexOf = getIndexOf(),
              length = array.length,
              isCommon = indexOf === baseIndexOf,
              isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
              seen = isLarge ? createCache() : null,
              result = [];
          if (seen) {
            indexOf = cacheIndexOf;
            isCommon = false;
          } else {
            isLarge = false;
            seen = iteratee ? [] : result;
          }
          outer: while (++index < length) {
            var value = array[index],
                computed = iteratee ? iteratee(value, index, array) : value;
            if (isCommon && value === value) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee) {
                seen.push(computed);
              }
              result.push(value);
            } else if (indexOf(seen, computed, 0) < 0) {
              if (iteratee || isLarge) {
                seen.push(computed);
              }
              result.push(value);
            }
          }
          return result;
        }
        function baseValues(object, props) {
          var index = -1,
              length = props.length,
              result = Array(length);
          while (++index < length) {
            result[index] = object[props[index]];
          }
          return result;
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length,
              index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
          return isDrop ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length)) : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
        }
        function baseWrapperValue(value, actions) {
          var result = value;
          if (result instanceof LazyWrapper) {
            result = result.value();
          }
          var index = -1,
              length = actions.length;
          while (++index < length) {
            var action = actions[index];
            result = action.func.apply(action.thisArg, arrayPush([result], action.args));
          }
          return result;
        }
        function binaryIndex(array, value, retHighest) {
          var low = 0,
              high = array ? array.length : low;
          if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = (low + high) >>> 1,
                  computed = array[mid];
              if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return binaryIndexBy(array, value, identity, retHighest);
        }
        function binaryIndexBy(array, value, iteratee, retHighest) {
          value = iteratee(value);
          var low = 0,
              high = array ? array.length : 0,
              valIsNaN = value !== value,
              valIsNull = value === null,
              valIsUndef = value === undefined;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2),
                computed = iteratee(array[mid]),
                isDef = computed !== undefined,
                isReflexive = computed === computed;
            if (valIsNaN) {
              var setLow = isReflexive || retHighest;
            } else if (valIsNull) {
              setLow = isReflexive && isDef && (retHighest || computed != null);
            } else if (valIsUndef) {
              setLow = isReflexive && (retHighest || isDef);
            } else if (computed == null) {
              setLow = false;
            } else {
              setLow = retHighest ? (computed <= value) : (computed < value);
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function bindCallback(func, thisArg, argCount) {
          if (typeof func != 'function') {
            return identity;
          }
          if (thisArg === undefined) {
            return func;
          }
          switch (argCount) {
            case 1:
              return function(value) {
                return func.call(thisArg, value);
              };
            case 3:
              return function(value, index, collection) {
                return func.call(thisArg, value, index, collection);
              };
            case 4:
              return function(accumulator, value, index, collection) {
                return func.call(thisArg, accumulator, value, index, collection);
              };
            case 5:
              return function(value, other, key, object, source) {
                return func.call(thisArg, value, other, key, object, source);
              };
          }
          return function() {
            return func.apply(thisArg, arguments);
          };
        }
        function bufferClone(buffer) {
          var result = new ArrayBuffer(buffer.byteLength),
              view = new Uint8Array(result);
          view.set(new Uint8Array(buffer));
          return result;
        }
        function composeArgs(args, partials, holders) {
          var holdersLength = holders.length,
              argsIndex = -1,
              argsLength = nativeMax(args.length - holdersLength, 0),
              leftIndex = -1,
              leftLength = partials.length,
              result = Array(leftLength + argsLength);
          while (++leftIndex < leftLength) {
            result[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            result[holders[argsIndex]] = args[argsIndex];
          }
          while (argsLength--) {
            result[leftIndex++] = args[argsIndex++];
          }
          return result;
        }
        function composeArgsRight(args, partials, holders) {
          var holdersIndex = -1,
              holdersLength = holders.length,
              argsIndex = -1,
              argsLength = nativeMax(args.length - holdersLength, 0),
              rightIndex = -1,
              rightLength = partials.length,
              result = Array(argsLength + rightLength);
          while (++argsIndex < argsLength) {
            result[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            result[offset + holders[holdersIndex]] = args[argsIndex++];
          }
          return result;
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee, thisArg) {
            var result = initializer ? initializer() : {};
            iteratee = getCallback(iteratee, thisArg, 3);
            if (isArray(collection)) {
              var index = -1,
                  length = collection.length;
              while (++index < length) {
                var value = collection[index];
                setter(result, value, iteratee(value, index, collection), collection);
              }
            } else {
              baseEach(collection, function(value, key, collection) {
                setter(result, value, iteratee(value, key, collection), collection);
              });
            }
            return result;
          };
        }
        function createAssigner(assigner) {
          return restParam(function(object, sources) {
            var index = -1,
                length = object == null ? 0 : sources.length,
                customizer = length > 2 ? sources[length - 2] : undefined,
                guard = length > 2 ? sources[2] : undefined,
                thisArg = length > 1 ? sources[length - 1] : undefined;
            if (typeof customizer == 'function') {
              customizer = bindCallback(customizer, thisArg, 5);
              length -= 2;
            } else {
              customizer = typeof thisArg == 'function' ? thisArg : undefined;
              length -= (customizer ? 1 : 0);
            }
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee) {
            var length = collection ? getLength(collection) : 0;
            if (!isLength(length)) {
              return eachFunc(collection, iteratee);
            }
            var index = fromRight ? length : -1,
                iterable = toObject(collection);
            while ((fromRight ? index-- : ++index < length)) {
              if (iteratee(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var iterable = toObject(object),
                props = keysFunc(object),
                length = props.length,
                index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length)) {
              var key = props[index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBindWrapper(func, thisArg) {
          var Ctor = createCtorWrapper(func);
          function wrapper() {
            var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            return fn.apply(thisArg, arguments);
          }
          return wrapper;
        }
        function createCache(values) {
          return (nativeCreate && Set) ? new SetCache(values) : null;
        }
        function createCompounder(callback) {
          return function(string) {
            var index = -1,
                array = words(deburr(string)),
                length = array.length,
                result = '';
            while (++index < length) {
              result = callback(result, array[index], index);
            }
            return result;
          };
        }
        function createCtorWrapper(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor;
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype),
                result = Ctor.apply(thisBinding, args);
            return isObject(result) ? result : thisBinding;
          };
        }
        function createCurry(flag) {
          function curryFunc(func, arity, guard) {
            if (guard && isIterateeCall(func, arity, guard)) {
              arity = undefined;
            }
            var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryFunc.placeholder;
            return result;
          }
          return curryFunc;
        }
        function createDefaults(assigner, customizer) {
          return restParam(function(args) {
            var object = args[0];
            if (object == null) {
              return object;
            }
            args.push(customizer);
            return assigner.apply(undefined, args);
          });
        }
        function createExtremum(comparator, exValue) {
          return function(collection, iteratee, thisArg) {
            if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
              iteratee = undefined;
            }
            iteratee = getCallback(iteratee, thisArg, 3);
            if (iteratee.length == 1) {
              collection = isArray(collection) ? collection : toIterable(collection);
              var result = arrayExtremum(collection, iteratee, comparator, exValue);
              if (!(collection.length && result === exValue)) {
                return result;
              }
            }
            return baseExtremum(collection, iteratee, comparator, exValue);
          };
        }
        function createFind(eachFunc, fromRight) {
          return function(collection, predicate, thisArg) {
            predicate = getCallback(predicate, thisArg, 3);
            if (isArray(collection)) {
              var index = baseFindIndex(collection, predicate, fromRight);
              return index > -1 ? collection[index] : undefined;
            }
            return baseFind(collection, predicate, eachFunc);
          };
        }
        function createFindIndex(fromRight) {
          return function(array, predicate, thisArg) {
            if (!(array && array.length)) {
              return -1;
            }
            predicate = getCallback(predicate, thisArg, 3);
            return baseFindIndex(array, predicate, fromRight);
          };
        }
        function createFindKey(objectFunc) {
          return function(object, predicate, thisArg) {
            predicate = getCallback(predicate, thisArg, 3);
            return baseFind(object, predicate, objectFunc, true);
          };
        }
        function createFlow(fromRight) {
          return function() {
            var wrapper,
                length = arguments.length,
                index = fromRight ? length : -1,
                leftIndex = 0,
                funcs = Array(length);
            while ((fromRight ? index-- : ++index < length)) {
              var func = funcs[leftIndex++] = arguments[index];
              if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
              }
              if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
                wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? -1 : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func),
                  data = funcName == 'wrapper' ? getData(func) : undefined;
              if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments,
                  value = args[0];
              if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                return wrapper.plant(value).value();
              }
              var index = 0,
                  result = length ? funcs[index].apply(this, args) : value;
              while (++index < length) {
                result = funcs[index].call(this, result);
              }
              return result;
            };
          };
        }
        function createForEach(arrayFunc, eachFunc) {
          return function(collection, iteratee, thisArg) {
            return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection)) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
          };
        }
        function createForIn(objectFunc) {
          return function(object, iteratee, thisArg) {
            if (typeof iteratee != 'function' || thisArg !== undefined) {
              iteratee = bindCallback(iteratee, thisArg, 3);
            }
            return objectFunc(object, iteratee, keysIn);
          };
        }
        function createForOwn(objectFunc) {
          return function(object, iteratee, thisArg) {
            if (typeof iteratee != 'function' || thisArg !== undefined) {
              iteratee = bindCallback(iteratee, thisArg, 3);
            }
            return objectFunc(object, iteratee);
          };
        }
        function createObjectMapper(isMapKeys) {
          return function(object, iteratee, thisArg) {
            var result = {};
            iteratee = getCallback(iteratee, thisArg, 3);
            baseForOwn(object, function(value, key, object) {
              var mapped = iteratee(value, key, object);
              key = isMapKeys ? mapped : key;
              value = isMapKeys ? value : mapped;
              result[key] = value;
            });
            return result;
          };
        }
        function createPadDir(fromRight) {
          return function(string, length, chars) {
            string = baseToString(string);
            return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
          };
        }
        function createPartial(flag) {
          var partialFunc = restParam(function(func, partials) {
            var holders = replaceHolders(partials, partialFunc.placeholder);
            return createWrapper(func, flag, undefined, partials, holders);
          });
          return partialFunc;
        }
        function createReduce(arrayFunc, eachFunc) {
          return function(collection, iteratee, accumulator, thisArg) {
            var initFromArray = arguments.length < 3;
            return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection)) ? arrayFunc(collection, iteratee, accumulator, initFromArray) : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
          };
        }
        function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
          var isAry = bitmask & ARY_FLAG,
              isBind = bitmask & BIND_FLAG,
              isBindKey = bitmask & BIND_KEY_FLAG,
              isCurry = bitmask & CURRY_FLAG,
              isCurryBound = bitmask & CURRY_BOUND_FLAG,
              isCurryRight = bitmask & CURRY_RIGHT_FLAG,
              Ctor = isBindKey ? undefined : createCtorWrapper(func);
          function wrapper() {
            var length = arguments.length,
                index = length,
                args = Array(length);
            while (index--) {
              args[index] = arguments[index];
            }
            if (partials) {
              args = composeArgs(args, partials, holders);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight);
            }
            if (isCurry || isCurryRight) {
              var placeholder = wrapper.placeholder,
                  argsHolders = replaceHolders(args, placeholder);
              length -= argsHolders.length;
              if (length < arity) {
                var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                    newArity = nativeMax(arity - length, 0),
                    newsHolders = isCurry ? argsHolders : undefined,
                    newHoldersRight = isCurry ? undefined : argsHolders,
                    newPartials = isCurry ? args : undefined,
                    newPartialsRight = isCurry ? undefined : args;
                bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
                bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
                if (!isCurryBound) {
                  bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
                }
                var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                    result = createHybridWrapper.apply(undefined, newData);
                if (isLaziable(func)) {
                  setData(result, newData);
                }
                result.placeholder = placeholder;
                return result;
              }
            }
            var thisBinding = isBind ? thisArg : this,
                fn = isBindKey ? thisBinding[func] : func;
            if (argPos) {
              args = reorder(args, argPos);
            }
            if (isAry && ary < args.length) {
              args.length = ary;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtorWrapper(func);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createPadding(string, length, chars) {
          var strLength = string.length;
          length = +length;
          if (strLength >= length || !nativeIsFinite(length)) {
            return '';
          }
          var padLength = length - strLength;
          chars = chars == null ? ' ' : (chars + '');
          return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
        }
        function createPartialWrapper(func, bitmask, thisArg, partials) {
          var isBind = bitmask & BIND_FLAG,
              Ctor = createCtorWrapper(func);
          function wrapper() {
            var argsIndex = -1,
                argsLength = arguments.length,
                leftIndex = -1,
                leftLength = partials.length,
                args = Array(leftLength + argsLength);
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRound(methodName) {
          var func = Math[methodName];
          return function(number, precision) {
            precision = precision === undefined ? 0 : (+precision || 0);
            if (precision) {
              precision = pow(10, precision);
              return func(number * precision) / precision;
            }
            return func(number);
          };
        }
        function createSortedIndex(retHighest) {
          return function(array, value, iteratee, thisArg) {
            var callback = getCallback(iteratee);
            return (iteratee == null && callback === baseCallback) ? binaryIndex(array, value, retHighest) : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
          };
        }
        function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
          var isBindKey = bitmask & BIND_KEY_FLAG;
          if (!isBindKey && typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
            partials = holders = undefined;
          }
          length -= (holders ? holders.length : 0);
          if (bitmask & PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials,
                holdersRight = holders;
            partials = holders = undefined;
          }
          var data = isBindKey ? undefined : getData(func),
              newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
          if (data) {
            mergeData(newData, data);
            bitmask = newData[1];
            arity = newData[9];
          }
          newData[9] = arity == null ? (isBindKey ? 0 : func.length) : (nativeMax(arity - length, 0) || 0);
          if (bitmask == BIND_FLAG) {
            var result = createBindWrapper(newData[0], newData[2]);
          } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
            result = createPartialWrapper.apply(undefined, newData);
          } else {
            result = createHybridWrapper.apply(undefined, newData);
          }
          var setter = data ? baseSetData : setData;
          return setter(result, newData);
        }
        function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
          var index = -1,
              arrLength = array.length,
              othLength = other.length;
          if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
            return false;
          }
          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index],
                result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
            if (result !== undefined) {
              if (result) {
                continue;
              }
              return false;
            }
            if (isLoose) {
              if (!arraySome(other, function(othValue) {
                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
              })) {
                return false;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
              return false;
            }
          }
          return true;
        }
        function equalByTag(object, other, tag) {
          switch (tag) {
            case boolTag:
            case dateTag:
              return +object == +other;
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case numberTag:
              return (object != +object) ? other != +other : object == +other;
            case regexpTag:
            case stringTag:
              return object == (other + '');
          }
          return false;
        }
        function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
          var objProps = keys(object),
              objLength = objProps.length,
              othProps = keys(other),
              othLength = othProps.length;
          if (objLength != othLength && !isLoose) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var skipCtor = isLoose;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key],
                result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
            if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
              return false;
            }
            skipCtor || (skipCtor = key == 'constructor');
          }
          if (!skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor;
            if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              return false;
            }
          }
          return true;
        }
        function getCallback(func, thisArg, argCount) {
          var result = lodash.callback || callback;
          result = result === callback ? baseCallback : result;
          return argCount ? result(func, thisArg, argCount) : result;
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result = (func.name + ''),
              array = realNames[result],
              length = array ? array.length : 0;
          while (length--) {
            var data = array[length],
                otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result;
        }
        function getIndexOf(collection, target, fromIndex) {
          var result = lodash.indexOf || indexOf;
          result = result === indexOf ? baseIndexOf : result;
          return collection ? result(collection, target, fromIndex) : result;
        }
        var getLength = baseProperty('length');
        function getMatchData(object) {
          var result = pairs(object),
              length = result.length;
          while (length--) {
            result[length][2] = isStrictComparable(result[length][1]);
          }
          return result;
        }
        function getNative(object, key) {
          var value = object == null ? undefined : object[key];
          return isNative(value) ? value : undefined;
        }
        function getView(start, end, transforms) {
          var index = -1,
              length = transforms.length;
          while (++index < length) {
            var data = transforms[index],
                size = data.size;
            switch (data.type) {
              case 'drop':
                start += size;
                break;
              case 'dropRight':
                end -= size;
                break;
              case 'take':
                end = nativeMin(end, start + size);
                break;
              case 'takeRight':
                start = nativeMax(start, end - size);
                break;
            }
          }
          return {
            'start': start,
            'end': end
          };
        }
        function initCloneArray(array) {
          var length = array.length,
              result = new array.constructor(length);
          if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
            result.index = array.index;
            result.input = array.input;
          }
          return result;
        }
        function initCloneObject(object) {
          var Ctor = object.constructor;
          if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
            Ctor = Object;
          }
          return new Ctor;
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return bufferClone(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              if (Ctor instanceof Ctor) {
                Ctor = ctorByTag[tag];
              }
              var buffer = object.buffer;
              return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              var result = new Ctor(object.source, reFlags.exec(object));
              result.lastIndex = object.lastIndex;
          }
          return result;
        }
        function invokePath(object, path, args) {
          if (object != null && !isKey(path, object)) {
            path = toPath(path);
            object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
            path = last(path);
          }
          var func = object == null ? object : object[path];
          return func == null ? undefined : func.apply(object, args);
        }
        function isArrayLike(value) {
          return value != null && isLength(getLength(value));
        }
        function isIndex(value, length) {
          value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
            var other = object[index];
            return value === value ? (value === other) : (other !== other);
          }
          return false;
        }
        function isKey(value, object) {
          var type = typeof value;
          if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
            return true;
          }
          if (isArray(value)) {
            return false;
          }
          var result = !reIsDeepProp.test(value);
          return result || (object != null && value in toObject(object));
        }
        function isLaziable(func) {
          var funcName = getFuncName(func),
              other = lodash[funcName];
          if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isLength(value) {
          return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function mergeData(data, source) {
          var bitmask = data[1],
              srcBitmask = source[1],
              newBitmask = bitmask | srcBitmask,
              isCommon = newBitmask < ARY_FLAG;
          var isCombo = (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) || (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) || (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
          }
          value = source[7];
          if (value) {
            data[7] = arrayCopy(value);
          }
          if (srcBitmask & ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function mergeDefaults(objectValue, sourceValue) {
          return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
        }
        function pickByArray(object, props) {
          object = toObject(object);
          var index = -1,
              length = props.length,
              result = {};
          while (++index < length) {
            var key = props[index];
            if (key in object) {
              result[key] = object[key];
            }
          }
          return result;
        }
        function pickByCallback(object, predicate) {
          var result = {};
          baseForIn(object, function(value, key, object) {
            if (predicate(value, key, object)) {
              result[key] = value;
            }
          });
          return result;
        }
        function reorder(array, indexes) {
          var arrLength = array.length,
              length = nativeMin(indexes.length, arrLength),
              oldArray = arrayCopy(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
          }
          return array;
        }
        var setData = (function() {
          var count = 0,
              lastCalled = 0;
          return function(key, value) {
            var stamp = now(),
                remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return key;
              }
            } else {
              count = 0;
            }
            return baseSetData(key, value);
          };
        }());
        function shimKeys(object) {
          var props = keysIn(object),
              propsLength = props.length,
              length = propsLength && object.length;
          var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object) || isString(object));
          var index = -1,
              result = [];
          while (++index < propsLength) {
            var key = props[index];
            if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
              result.push(key);
            }
          }
          return result;
        }
        function toIterable(value) {
          if (value == null) {
            return [];
          }
          if (!isArrayLike(value)) {
            return values(value);
          }
          if (lodash.support.unindexedChars && isString(value)) {
            return value.split('');
          }
          return isObject(value) ? value : Object(value);
        }
        function toObject(value) {
          if (lodash.support.unindexedChars && isString(value)) {
            var index = -1,
                length = value.length,
                result = Object(value);
            while (++index < length) {
              result[index] = value.charAt(index);
            }
            return result;
          }
          return isObject(value) ? value : Object(value);
        }
        function toPath(value) {
          if (isArray(value)) {
            return value;
          }
          var result = [];
          baseToString(value).replace(rePropName, function(match, number, quote, string) {
            result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
          });
          return result;
        }
        function wrapperClone(wrapper) {
          return wrapper instanceof LazyWrapper ? wrapper.clone() : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
        }
        function chunk(array, size, guard) {
          if (guard ? isIterateeCall(array, size, guard) : size == null) {
            size = 1;
          } else {
            size = nativeMax(nativeFloor(size) || 1, 1);
          }
          var index = 0,
              length = array ? array.length : 0,
              resIndex = -1,
              result = Array(nativeCeil(length / size));
          while (index < length) {
            result[++resIndex] = baseSlice(array, index, (index += size));
          }
          return result;
        }
        function compact(array) {
          var index = -1,
              length = array ? array.length : 0,
              resIndex = -1,
              result = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result[++resIndex] = value;
            }
          }
          return result;
        }
        var difference = restParam(function(array, values) {
          return (isObjectLike(array) && isArrayLike(array)) ? baseDifference(array, baseFlatten(values, false, true)) : [];
        });
        function drop(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (guard ? isIterateeCall(array, n, guard) : n == null) {
            n = 1;
          }
          return baseSlice(array, n < 0 ? 0 : n);
        }
        function dropRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (guard ? isIterateeCall(array, n, guard) : n == null) {
            n = 1;
          }
          n = length - (+n || 0);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate, thisArg) {
          return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true) : [];
        }
        function dropWhile(array, predicate, thisArg) {
          return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        var findIndex = createFindIndex();
        var findLastIndex = createFindIndex(true);
        function first(array) {
          return array ? array[0] : undefined;
        }
        function flatten(array, isDeep, guard) {
          var length = array ? array.length : 0;
          if (guard && isIterateeCall(array, isDeep, guard)) {
            isDeep = false;
          }
          return length ? baseFlatten(array, isDeep) : [];
        }
        function flattenDeep(array) {
          var length = array ? array.length : 0;
          return length ? baseFlatten(array, true) : [];
        }
        function indexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          if (typeof fromIndex == 'number') {
            fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
          } else if (fromIndex) {
            var index = binaryIndex(array, value);
            if (index < length && (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
              return index;
            }
            return -1;
          }
          return baseIndexOf(array, value, fromIndex || 0);
        }
        function initial(array) {
          return dropRight(array, 1);
        }
        var intersection = restParam(function(arrays) {
          var othLength = arrays.length,
              othIndex = othLength,
              caches = Array(length),
              indexOf = getIndexOf(),
              isCommon = indexOf === baseIndexOf,
              result = [];
          while (othIndex--) {
            var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
            caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
          }
          var array = arrays[0],
              index = -1,
              length = array ? array.length : 0,
              seen = caches[0];
          outer: while (++index < length) {
            value = array[index];
            if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
              var othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(value);
              }
              result.push(value);
            }
          }
          return result;
        });
        function last(array) {
          var length = array ? array.length : 0;
          return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array ? array.length : 0;
          if (!length) {
            return -1;
          }
          var index = length;
          if (typeof fromIndex == 'number') {
            index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
          } else if (fromIndex) {
            index = binaryIndex(array, value, true) - 1;
            var other = array[index];
            if (value === value ? (value === other) : (other !== other)) {
              return index;
            }
            return -1;
          }
          if (value !== value) {
            return indexOfNaN(array, index, true);
          }
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function pull() {
          var args = arguments,
              array = args[0];
          if (!(array && array.length)) {
            return array;
          }
          var index = 0,
              indexOf = getIndexOf(),
              length = args.length;
          while (++index < length) {
            var fromIndex = 0,
                value = args[index];
            while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        var pullAt = restParam(function(array, indexes) {
          indexes = baseFlatten(indexes);
          var result = baseAt(array, indexes);
          basePullAt(array, indexes.sort(baseCompareAscending));
          return result;
        });
        function remove(array, predicate, thisArg) {
          var result = [];
          if (!(array && array.length)) {
            return result;
          }
          var index = -1,
              indexes = [],
              length = array.length;
          predicate = getCallback(predicate, thisArg, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result;
        }
        function rest(array) {
          return drop(array, 1);
        }
        function slice(array, start, end) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          }
          return baseSlice(array, start, end);
        }
        var sortedIndex = createSortedIndex();
        var sortedLastIndex = createSortedIndex(true);
        function take(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (guard ? isIterateeCall(array, n, guard) : n == null) {
            n = 1;
          }
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (guard ? isIterateeCall(array, n, guard) : n == null) {
            n = 1;
          }
          n = length - (+n || 0);
          return baseSlice(array, n < 0 ? 0 : n);
        }
        function takeRightWhile(array, predicate, thisArg) {
          return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true) : [];
        }
        function takeWhile(array, predicate, thisArg) {
          return (array && array.length) ? baseWhile(array, getCallback(predicate, thisArg, 3)) : [];
        }
        var union = restParam(function(arrays) {
          return baseUniq(baseFlatten(arrays, false, true));
        });
        function uniq(array, isSorted, iteratee, thisArg) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          if (isSorted != null && typeof isSorted != 'boolean') {
            thisArg = iteratee;
            iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
            isSorted = false;
          }
          var callback = getCallback();
          if (!(iteratee == null && callback === baseCallback)) {
            iteratee = callback(iteratee, thisArg, 3);
          }
          return (isSorted && getIndexOf() === baseIndexOf) ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var index = -1,
              length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLike(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          var result = Array(length);
          while (++index < length) {
            result[index] = arrayMap(array, baseProperty(index));
          }
          return result;
        }
        function unzipWith(array, iteratee, thisArg) {
          var length = array ? array.length : 0;
          if (!length) {
            return [];
          }
          var result = unzip(array);
          if (iteratee == null) {
            return result;
          }
          iteratee = bindCallback(iteratee, thisArg, 4);
          return arrayMap(result, function(group) {
            return arrayReduce(group, iteratee, undefined, true);
          });
        }
        var without = restParam(function(array, values) {
          return isArrayLike(array) ? baseDifference(array, values) : [];
        });
        function xor() {
          var index = -1,
              length = arguments.length;
          while (++index < length) {
            var array = arguments[index];
            if (isArrayLike(array)) {
              var result = result ? arrayPush(baseDifference(result, array), baseDifference(array, result)) : array;
            }
          }
          return result ? baseUniq(result) : [];
        }
        var zip = restParam(unzip);
        function zipObject(props, values) {
          var index = -1,
              length = props ? props.length : 0,
              result = {};
          if (length && !values && !isArray(props[0])) {
            values = [];
          }
          while (++index < length) {
            var key = props[index];
            if (values) {
              result[key] = values[index];
            } else if (key) {
              result[key[0]] = key[1];
            }
          }
          return result;
        }
        var zipWith = restParam(function(arrays) {
          var length = arrays.length,
              iteratee = length > 2 ? arrays[length - 2] : undefined,
              thisArg = length > 1 ? arrays[length - 1] : undefined;
          if (length > 2 && typeof iteratee == 'function') {
            length -= 2;
          } else {
            iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
            thisArg = undefined;
          }
          arrays.length = length;
          return unzipWith(arrays, iteratee, thisArg);
        });
        function chain(value) {
          var result = lodash(value);
          result.__chain__ = true;
          return result;
        }
        function tap(value, interceptor, thisArg) {
          interceptor.call(thisArg, value);
          return value;
        }
        function thru(value, interceptor, thisArg) {
          return interceptor.call(thisArg, value);
        }
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        var wrapperConcat = restParam(function(values) {
          values = baseFlatten(values);
          return this.thru(function(array) {
            return arrayConcat(isArray(array) ? array : [toObject(array)], values);
          });
        });
        function wrapperPlant(value) {
          var result,
              parent = this;
          while (parent instanceof baseLodash) {
            var clone = wrapperClone(parent);
            if (result) {
              previous.__wrapped__ = clone;
            } else {
              result = clone;
            }
            var previous = clone;
            parent = parent.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          var interceptor = function(value) {
            return value.reverse();
          };
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              'func': thru,
              'args': [interceptor],
              'thisArg': undefined
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(interceptor);
        }
        function wrapperToString() {
          return (this.value() + '');
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var at = restParam(function(collection, props) {
          if (isArrayLike(collection)) {
            collection = toIterable(collection);
          }
          return baseAt(collection, baseFlatten(props));
        });
        var countBy = createAggregator(function(result, value, key) {
          hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
        });
        function every(collection, predicate, thisArg) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
            predicate = undefined;
          }
          if (typeof predicate != 'function' || thisArg !== undefined) {
            predicate = getCallback(predicate, thisArg, 3);
          }
          return func(collection, predicate);
        }
        function filter(collection, predicate, thisArg) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          predicate = getCallback(predicate, thisArg, 3);
          return func(collection, predicate);
        }
        var find = createFind(baseEach);
        var findLast = createFind(baseEachRight, true);
        function findWhere(collection, source) {
          return find(collection, baseMatches(source));
        }
        var forEach = createForEach(arrayEach, baseEach);
        var forEachRight = createForEach(arrayEachRight, baseEachRight);
        var groupBy = createAggregator(function(result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            result[key] = [value];
          }
        });
        function includes(collection, target, fromIndex, guard) {
          var length = collection ? getLength(collection) : 0;
          if (!isLength(length)) {
            collection = values(collection);
            length = collection.length;
          }
          if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
            fromIndex = 0;
          } else {
            fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
          }
          return (typeof collection == 'string' || !isArray(collection) && isString(collection)) ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1) : (!!length && getIndexOf(collection, target, fromIndex) > -1);
        }
        var indexBy = createAggregator(function(result, value, key) {
          result[key] = value;
        });
        var invoke = restParam(function(collection, path, args) {
          var index = -1,
              isFunc = typeof path == 'function',
              isProp = isKey(path),
              result = isArrayLike(collection) ? Array(collection.length) : [];
          baseEach(collection, function(value) {
            var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
            result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
          });
          return result;
        });
        function map(collection, iteratee, thisArg) {
          var func = isArray(collection) ? arrayMap : baseMap;
          iteratee = getCallback(iteratee, thisArg, 3);
          return func(collection, iteratee);
        }
        var partition = createAggregator(function(result, value, key) {
          result[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function pluck(collection, path) {
          return map(collection, property(path));
        }
        var reduce = createReduce(arrayReduce, baseEach);
        var reduceRight = createReduce(arrayReduceRight, baseEachRight);
        function reject(collection, predicate, thisArg) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          predicate = getCallback(predicate, thisArg, 3);
          return func(collection, function(value, index, collection) {
            return !predicate(value, index, collection);
          });
        }
        function sample(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n == null) {
            collection = toIterable(collection);
            var length = collection.length;
            return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
          }
          var index = -1,
              result = toArray(collection),
              length = result.length,
              lastIndex = length - 1;
          n = nativeMin(n < 0 ? 0 : (+n || 0), length);
          while (++index < n) {
            var rand = baseRandom(index, lastIndex),
                value = result[rand];
            result[rand] = result[index];
            result[index] = value;
          }
          result.length = n;
          return result;
        }
        function shuffle(collection) {
          return sample(collection, POSITIVE_INFINITY);
        }
        function size(collection) {
          var length = collection ? getLength(collection) : 0;
          return isLength(length) ? length : keys(collection).length;
        }
        function some(collection, predicate, thisArg) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
            predicate = undefined;
          }
          if (typeof predicate != 'function' || thisArg !== undefined) {
            predicate = getCallback(predicate, thisArg, 3);
          }
          return func(collection, predicate);
        }
        function sortBy(collection, iteratee, thisArg) {
          if (collection == null) {
            return [];
          }
          if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
            iteratee = undefined;
          }
          var index = -1;
          iteratee = getCallback(iteratee, thisArg, 3);
          var result = baseMap(collection, function(value, key, collection) {
            return {
              'criteria': iteratee(value, key, collection),
              'index': ++index,
              'value': value
            };
          });
          return baseSortBy(result, compareAscending);
        }
        var sortByAll = restParam(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var guard = iteratees[2];
          if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
            iteratees.length = 1;
          }
          return baseSortByOrder(collection, baseFlatten(iteratees), []);
        });
        function sortByOrder(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (guard && isIterateeCall(iteratees, orders, guard)) {
            orders = undefined;
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseSortByOrder(collection, iteratees, orders);
        }
        function where(collection, source) {
          return filter(collection, baseMatches(source));
        }
        var now = nativeNow || function() {
          return new Date().getTime();
        };
        function after(n, func) {
          if (typeof func != 'function') {
            if (typeof n == 'function') {
              var temp = n;
              n = func;
              func = temp;
            } else {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
          }
          n = nativeIsFinite(n = +n) ? n : 0;
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          if (guard && isIterateeCall(func, n, guard)) {
            n = undefined;
          }
          n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
          return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        function before(n, func) {
          var result;
          if (typeof func != 'function') {
            if (typeof n == 'function') {
              var temp = n;
              n = func;
              func = temp;
            } else {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
          }
          return function() {
            if (--n > 0) {
              result = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined;
            }
            return result;
          };
        }
        var bind = restParam(function(func, thisArg, partials) {
          var bitmask = BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, bind.placeholder);
            bitmask |= PARTIAL_FLAG;
          }
          return createWrapper(func, bitmask, thisArg, partials, holders);
        });
        var bindAll = restParam(function(object, methodNames) {
          methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
          var index = -1,
              length = methodNames.length;
          while (++index < length) {
            var key = methodNames[index];
            object[key] = createWrapper(object[key], BIND_FLAG, object);
          }
          return object;
        });
        var bindKey = restParam(function(object, key, partials) {
          var bitmask = BIND_FLAG | BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, bindKey.placeholder);
            bitmask |= PARTIAL_FLAG;
          }
          return createWrapper(key, bitmask, object, partials, holders);
        });
        var curry = createCurry(CURRY_FLAG);
        var curryRight = createCurry(CURRY_RIGHT_FLAG);
        function debounce(func, wait, options) {
          var args,
              maxTimeoutId,
              result,
              stamp,
              thisArg,
              timeoutId,
              trailingCall,
              lastCalled = 0,
              maxWait = false,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          wait = wait < 0 ? 0 : (+wait || 0);
          if (options === true) {
            var leading = true;
            trailing = false;
          } else if (isObject(options)) {
            leading = !!options.leading;
            maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          function cancel() {
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            if (maxTimeoutId) {
              clearTimeout(maxTimeoutId);
            }
            lastCalled = 0;
            maxTimeoutId = timeoutId = trailingCall = undefined;
          }
          function complete(isCalled, id) {
            if (id) {
              clearTimeout(id);
            }
            maxTimeoutId = timeoutId = trailingCall = undefined;
            if (isCalled) {
              lastCalled = now();
              result = func.apply(thisArg, args);
              if (!timeoutId && !maxTimeoutId) {
                args = thisArg = undefined;
              }
            }
          }
          function delayed() {
            var remaining = wait - (now() - stamp);
            if (remaining <= 0 || remaining > wait) {
              complete(trailingCall, maxTimeoutId);
            } else {
              timeoutId = setTimeout(delayed, remaining);
            }
          }
          function maxDelayed() {
            complete(trailing, timeoutId);
          }
          function debounced() {
            args = arguments;
            stamp = now();
            thisArg = this;
            trailingCall = trailing && (timeoutId || !leading);
            if (maxWait === false) {
              var leadingCall = leading && !timeoutId;
            } else {
              if (!maxTimeoutId && !leading) {
                lastCalled = stamp;
              }
              var remaining = maxWait - (stamp - lastCalled),
                  isCalled = remaining <= 0 || remaining > maxWait;
              if (isCalled) {
                if (maxTimeoutId) {
                  maxTimeoutId = clearTimeout(maxTimeoutId);
                }
                lastCalled = stamp;
                result = func.apply(thisArg, args);
              } else if (!maxTimeoutId) {
                maxTimeoutId = setTimeout(maxDelayed, remaining);
              }
            }
            if (isCalled && timeoutId) {
              timeoutId = clearTimeout(timeoutId);
            } else if (!timeoutId && wait !== maxWait) {
              timeoutId = setTimeout(delayed, wait);
            }
            if (leadingCall) {
              isCalled = true;
              result = func.apply(thisArg, args);
            }
            if (isCalled && !timeoutId && !maxTimeoutId) {
              args = thisArg = undefined;
            }
            return result;
          }
          debounced.cancel = cancel;
          return debounced;
        }
        var defer = restParam(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = restParam(function(func, wait, args) {
          return baseDelay(func, wait, args);
        });
        var flow = createFlow();
        var flowRight = createFlow(true);
        function memoize(func, resolver) {
          if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result);
            return result;
          };
          memoized.cache = new memoize.Cache;
          return memoized;
        }
        var modArgs = restParam(function(func, transforms) {
          transforms = baseFlatten(transforms);
          if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var length = transforms.length;
          return restParam(function(args) {
            var index = nativeMin(args.length, length);
            while (index--) {
              args[index] = transforms[index](args[index]);
            }
            return func.apply(this, args);
          });
        });
        function negate(predicate) {
          if (typeof predicate != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function() {
            return !predicate.apply(this, arguments);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var partial = createPartial(PARTIAL_FLAG);
        var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
        var rearg = restParam(function(func, indexes) {
          return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
        });
        function restParam(func, start) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
          return function() {
            var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                rest = Array(length);
            while (++index < length) {
              rest[index] = args[start + index];
            }
            switch (start) {
              case 0:
                return func.call(this, rest);
              case 1:
                return func.call(this, args[0], rest);
              case 2:
                return func.call(this, args[0], args[1], rest);
            }
            var otherArgs = Array(start + 1);
            index = -1;
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = rest;
            return func.apply(this, otherArgs);
          };
        }
        function spread(func) {
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          return function(array) {
            return func.apply(this, array);
          };
        }
        function throttle(func, wait, options) {
          var leading = true,
              trailing = true;
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (options === false) {
            leading = false;
          } else if (isObject(options)) {
            leading = 'leading' in options ? !!options.leading : leading;
            trailing = 'trailing' in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            'leading': leading,
            'maxWait': +wait,
            'trailing': trailing
          });
        }
        function wrap(value, wrapper) {
          wrapper = wrapper == null ? identity : wrapper;
          return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
        }
        function clone(value, isDeep, customizer, thisArg) {
          if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
            isDeep = false;
          } else if (typeof isDeep == 'function') {
            thisArg = customizer;
            customizer = isDeep;
            isDeep = false;
          }
          return typeof customizer == 'function' ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 3)) : baseClone(value, isDeep);
        }
        function cloneDeep(value, customizer, thisArg) {
          return typeof customizer == 'function' ? baseClone(value, true, bindCallback(customizer, thisArg, 3)) : baseClone(value, true);
        }
        function gt(value, other) {
          return value > other;
        }
        function gte(value, other) {
          return value >= other;
        }
        function isArguments(value) {
          return isObjectLike(value) && isArrayLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
        }
        var isArray = nativeIsArray || function(value) {
          return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
        };
        function isBoolean(value) {
          return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
        }
        function isDate(value) {
          return isObjectLike(value) && objToString.call(value) == dateTag;
        }
        function isElement(value) {
          return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) || (isObjectLike(value) && isFunction(value.splice)))) {
            return !value.length;
          }
          return !keys(value).length;
        }
        function isEqual(value, other, customizer, thisArg) {
          customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
        }
        function isError(value) {
          return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
        }
        function isFinite(value) {
          return typeof value == 'number' && nativeIsFinite(value);
        }
        function isFunction(value) {
          return isObject(value) && objToString.call(value) == funcTag;
        }
        function isObject(value) {
          var type = typeof value;
          return !!value && (type == 'object' || type == 'function');
        }
        function isMatch(object, source, customizer, thisArg) {
          customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
          return baseIsMatch(object, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (value == null) {
            return false;
          }
          if (isFunction(value)) {
            return reIsNative.test(fnToString.call(value));
          }
          return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNumber(value) {
          return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
        }
        function isPlainObject(value) {
          var Ctor;
          if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) || (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
            return false;
          }
          var result;
          if (lodash.support.ownLast) {
            baseForIn(value, function(subValue, key, object) {
              result = hasOwnProperty.call(object, key);
              return false;
            });
            return result !== false;
          }
          baseForIn(value, function(subValue, key) {
            result = key;
          });
          return result === undefined || hasOwnProperty.call(value, result);
        }
        function isRegExp(value) {
          return isObject(value) && objToString.call(value) == regexpTag;
        }
        function isString(value) {
          return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
        }
        function isTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
        }
        function isUndefined(value) {
          return value === undefined;
        }
        function lt(value, other) {
          return value < other;
        }
        function lte(value, other) {
          return value <= other;
        }
        function toArray(value) {
          var length = value ? getLength(value) : 0;
          if (!isLength(length)) {
            return values(value);
          }
          if (!length) {
            return [];
          }
          return (lodash.support.unindexedChars && isString(value)) ? value.split('') : arrayCopy(value);
        }
        function toPlainObject(value) {
          return baseCopy(value, keysIn(value));
        }
        var merge = createAssigner(baseMerge);
        var assign = createAssigner(function(object, source, customizer) {
          return customizer ? assignWith(object, source, customizer) : baseAssign(object, source);
        });
        function create(prototype, properties, guard) {
          var result = baseCreate(prototype);
          if (guard && isIterateeCall(prototype, properties, guard)) {
            properties = undefined;
          }
          return properties ? baseAssign(result, properties) : result;
        }
        var defaults = createDefaults(assign, assignDefaults);
        var defaultsDeep = createDefaults(merge, mergeDefaults);
        var findKey = createFindKey(baseForOwn);
        var findLastKey = createFindKey(baseForOwnRight);
        var forIn = createForIn(baseFor);
        var forInRight = createForIn(baseForRight);
        var forOwn = createForOwn(baseForOwn);
        var forOwnRight = createForOwn(baseForOwnRight);
        function functions(object) {
          return baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, toPath(path), (path + ''));
          return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
          if (object == null) {
            return false;
          }
          var result = hasOwnProperty.call(object, path);
          if (!result && !isKey(path)) {
            path = toPath(path);
            object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
            if (object == null) {
              return false;
            }
            path = last(path);
            result = hasOwnProperty.call(object, path);
          }
          return result || (isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object) || isString(object)));
        }
        function invert(object, multiValue, guard) {
          if (guard && isIterateeCall(object, multiValue, guard)) {
            multiValue = undefined;
          }
          var index = -1,
              props = keys(object),
              length = props.length,
              result = {};
          while (++index < length) {
            var key = props[index],
                value = object[key];
            if (multiValue) {
              if (hasOwnProperty.call(result, value)) {
                result[value].push(key);
              } else {
                result[value] = [key];
              }
            } else {
              result[value] = key;
            }
          }
          return result;
        }
        var keys = !nativeKeys ? shimKeys : function(object) {
          var Ctor = object == null ? undefined : object.constructor;
          if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object == 'function' ? lodash.support.enumPrototypes : isArrayLike(object))) {
            return shimKeys(object);
          }
          return isObject(object) ? nativeKeys(object) : [];
        };
        function keysIn(object) {
          if (object == null) {
            return [];
          }
          if (!isObject(object)) {
            object = Object(object);
          }
          var length = object.length,
              support = lodash.support;
          length = (length && isLength(length) && (isArray(object) || isArguments(object) || isString(object)) && length) || 0;
          var Ctor = object.constructor,
              index = -1,
              proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
              isProto = proto === object,
              result = Array(length),
              skipIndexes = length > 0,
              skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
              skipProto = support.enumPrototypes && isFunction(object);
          while (++index < length) {
            result[index] = (index + '');
          }
          for (var key in object) {
            if (!(skipProto && key == 'prototype') && !(skipErrorProps && (key == 'message' || key == 'name')) && !(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
              result.push(key);
            }
          }
          if (support.nonEnumShadows && object !== objectProto) {
            var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
                nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];
            if (tag == objectTag) {
              proto = objectProto;
            }
            length = shadowProps.length;
            while (length--) {
              key = shadowProps[length];
              var nonEnum = nonEnums[key];
              if (!(isProto && nonEnum) && (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
                result.push(key);
              }
            }
          }
          return result;
        }
        var mapKeys = createObjectMapper(true);
        var mapValues = createObjectMapper();
        var omit = restParam(function(object, props) {
          if (object == null) {
            return {};
          }
          if (typeof props[0] != 'function') {
            var props = arrayMap(baseFlatten(props), String);
            return pickByArray(object, baseDifference(keysIn(object), props));
          }
          var predicate = bindCallback(props[0], props[1], 3);
          return pickByCallback(object, function(value, key, object) {
            return !predicate(value, key, object);
          });
        });
        function pairs(object) {
          object = toObject(object);
          var index = -1,
              props = keys(object),
              length = props.length,
              result = Array(length);
          while (++index < length) {
            var key = props[index];
            result[index] = [key, object[key]];
          }
          return result;
        }
        var pick = restParam(function(object, props) {
          if (object == null) {
            return {};
          }
          return typeof props[0] == 'function' ? pickByCallback(object, bindCallback(props[0], props[1], 3)) : pickByArray(object, baseFlatten(props));
        });
        function result(object, path, defaultValue) {
          var result = object == null ? undefined : toObject(object)[path];
          if (result === undefined) {
            if (object != null && !isKey(path, object)) {
              path = toPath(path);
              object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
              result = object == null ? undefined : toObject(object)[last(path)];
            }
            result = result === undefined ? defaultValue : result;
          }
          return isFunction(result) ? result.call(object) : result;
        }
        function set(object, path, value) {
          if (object == null) {
            return object;
          }
          var pathKey = (path + '');
          path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
          var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;
          while (nested != null && ++index < length) {
            var key = path[index];
            if (isObject(nested)) {
              if (index == lastIndex) {
                nested[key] = value;
              } else if (nested[key] == null) {
                nested[key] = isIndex(path[index + 1]) ? [] : {};
              }
            }
            nested = nested[key];
          }
          return object;
        }
        function transform(object, iteratee, accumulator, thisArg) {
          var isArr = isArray(object) || isTypedArray(object);
          iteratee = getCallback(iteratee, thisArg, 4);
          if (accumulator == null) {
            if (isArr || isObject(object)) {
              var Ctor = object.constructor;
              if (isArr) {
                accumulator = isArray(object) ? new Ctor : [];
              } else {
                accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
              }
            } else {
              accumulator = {};
            }
          }
          (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
            return iteratee(accumulator, value, index, object);
          });
          return accumulator;
        }
        function values(object) {
          return baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return baseValues(object, keysIn(object));
        }
        function inRange(value, start, end) {
          start = +start || 0;
          if (end === undefined) {
            end = start;
            start = 0;
          } else {
            end = +end || 0;
          }
          return value >= nativeMin(start, end) && value < nativeMax(start, end);
        }
        function random(min, max, floating) {
          if (floating && isIterateeCall(min, max, floating)) {
            max = floating = undefined;
          }
          var noMin = min == null,
              noMax = max == null;
          if (floating == null) {
            if (noMax && typeof min == 'boolean') {
              floating = min;
              min = 1;
            } else if (typeof max == 'boolean') {
              floating = max;
              noMax = true;
            }
          }
          if (noMin && noMax) {
            max = 1;
            noMax = false;
          }
          min = +min || 0;
          if (noMax) {
            max = min;
            min = 0;
          } else {
            max = +max || 0;
          }
          if (floating || min % 1 || max % 1) {
            var rand = nativeRandom();
            return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
          }
          return baseRandom(min, max);
        }
        var camelCase = createCompounder(function(result, word, index) {
          word = word.toLowerCase();
          return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
        });
        function capitalize(string) {
          string = baseToString(string);
          return string && (string.charAt(0).toUpperCase() + string.slice(1));
        }
        function deburr(string) {
          string = baseToString(string);
          return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
          string = baseToString(string);
          target = (target + '');
          var length = string.length;
          position = position === undefined ? length : nativeMin(position < 0 ? 0 : (+position || 0), length);
          position -= target.length;
          return position >= 0 && string.indexOf(target, position) == position;
        }
        function escape(string) {
          string = baseToString(string);
          return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = baseToString(string);
          return (string && reHasRegExpChars.test(string)) ? string.replace(reRegExpChars, escapeRegExpChar) : (string || '(?:)');
        }
        var kebabCase = createCompounder(function(result, word, index) {
          return result + (index ? '-' : '') + word.toLowerCase();
        });
        function pad(string, length, chars) {
          string = baseToString(string);
          length = +length;
          var strLength = string.length;
          if (strLength >= length || !nativeIsFinite(length)) {
            return string;
          }
          var mid = (length - strLength) / 2,
              leftLength = nativeFloor(mid),
              rightLength = nativeCeil(mid);
          chars = createPadding('', rightLength, chars);
          return chars.slice(0, leftLength) + string + chars;
        }
        var padLeft = createPadDir();
        var padRight = createPadDir(true);
        function parseInt(string, radix, guard) {
          if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          string = trim(string);
          return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
        }
        function repeat(string, n) {
          var result = '';
          string = baseToString(string);
          n = +n;
          if (n < 1 || !string || !nativeIsFinite(n)) {
            return result;
          }
          do {
            if (n % 2) {
              result += string;
            }
            n = nativeFloor(n / 2);
            string += string;
          } while (n);
          return result;
        }
        var snakeCase = createCompounder(function(result, word, index) {
          return result + (index ? '_' : '') + word.toLowerCase();
        });
        var startCase = createCompounder(function(result, word, index) {
          return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
        });
        function startsWith(string, target, position) {
          string = baseToString(string);
          position = position == null ? 0 : nativeMin(position < 0 ? 0 : (+position || 0), string.length);
          return string.lastIndexOf(target, position) == position;
        }
        function template(string, options, otherOptions) {
          var settings = lodash.templateSettings;
          if (otherOptions && isIterateeCall(string, options, otherOptions)) {
            options = otherOptions = undefined;
          }
          string = baseToString(string);
          options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
          var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
              importsKeys = keys(imports),
              importsValues = baseValues(imports, importsKeys);
          var isEscaping,
              isEvaluating,
              index = 0,
              interpolate = options.interpolate || reNoMatch,
              source = "__p += '";
          var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
          var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = options.variable;
          if (!variable) {
            source = 'with (obj) {\n' + source + '\n}\n';
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
          source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
          var result = attempt(function() {
            return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
          });
          result.source = source;
          if (isError(result)) {
            throw result;
          }
          return result;
        }
        function trim(string, chars, guard) {
          var value = string;
          string = baseToString(string);
          if (!string) {
            return string;
          }
          if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
            return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
          }
          chars = (chars + '');
          return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
        }
        function trimLeft(string, chars, guard) {
          var value = string;
          string = baseToString(string);
          if (!string) {
            return string;
          }
          if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
            return string.slice(trimmedLeftIndex(string));
          }
          return string.slice(charsLeftIndex(string, (chars + '')));
        }
        function trimRight(string, chars, guard) {
          var value = string;
          string = baseToString(string);
          if (!string) {
            return string;
          }
          if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
            return string.slice(0, trimmedRightIndex(string) + 1);
          }
          return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
        }
        function trunc(string, options, guard) {
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined;
          }
          var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
          if (options != null) {
            if (isObject(options)) {
              var separator = 'separator' in options ? options.separator : separator;
              length = 'length' in options ? (+options.length || 0) : length;
              omission = 'omission' in options ? baseToString(options.omission) : omission;
            } else {
              length = +options || 0;
            }
          }
          string = baseToString(string);
          if (length >= string.length) {
            return string;
          }
          var end = length - omission.length;
          if (end < 1) {
            return omission;
          }
          var result = string.slice(0, end);
          if (separator == null) {
            return result + omission;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match,
                  newEnd,
                  substring = string.slice(0, end);
              if (!separator.global) {
                separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
              }
              separator.lastIndex = 0;
              while ((match = separator.exec(substring))) {
                newEnd = match.index;
              }
              result = result.slice(0, newEnd == null ? end : newEnd);
            }
          } else if (string.indexOf(separator, end) != end) {
            var index = result.lastIndexOf(separator);
            if (index > -1) {
              result = result.slice(0, index);
            }
          }
          return result + omission;
        }
        function unescape(string) {
          string = baseToString(string);
          return (string && reHasEscapedHtml.test(string)) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        function words(string, pattern, guard) {
          if (guard && isIterateeCall(string, pattern, guard)) {
            pattern = undefined;
          }
          string = baseToString(string);
          return string.match(pattern || reWords) || [];
        }
        var attempt = restParam(function(func, args) {
          try {
            return func.apply(undefined, args);
          } catch (e) {
            return isError(e) ? e : new Error(e);
          }
        });
        function callback(func, thisArg, guard) {
          if (guard && isIterateeCall(func, thisArg, guard)) {
            thisArg = undefined;
          }
          return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function identity(value) {
          return value;
        }
        function matches(source) {
          return baseMatches(baseClone(source, true));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, true));
        }
        var method = restParam(function(path, args) {
          return function(object) {
            return invokePath(object, path, args);
          };
        });
        var methodOf = restParam(function(object, args) {
          return function(path) {
            return invokePath(object, path, args);
          };
        });
        function mixin(object, source, options) {
          if (options == null) {
            var isObj = isObject(source),
                props = isObj ? keys(source) : undefined,
                methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;
            if (!(methodNames ? methodNames.length : isObj)) {
              methodNames = false;
              options = source;
              source = object;
              object = this;
            }
          }
          if (!methodNames) {
            methodNames = baseFunctions(source, keys(source));
          }
          var chain = true,
              index = -1,
              isFunc = isFunction(object),
              length = methodNames.length;
          if (options === false) {
            chain = false;
          } else if (isObject(options) && 'chain' in options) {
            chain = options.chain;
          }
          while (++index < length) {
            var methodName = methodNames[index],
                func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = (function(func) {
                return function() {
                  var chainAll = this.__chain__;
                  if (chain || chainAll) {
                    var result = object(this.__wrapped__),
                        actions = result.__actions__ = arrayCopy(this.__actions__);
                    actions.push({
                      'func': func,
                      'args': arguments,
                      'thisArg': object
                    });
                    result.__chain__ = chainAll;
                    return result;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }(func));
            }
          }
          return object;
        }
        function noConflict() {
          root._ = oldDash;
          return this;
        }
        function noop() {}
        function property(path) {
          return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return baseGet(object, toPath(path), (path + ''));
          };
        }
        function range(start, end, step) {
          if (step && isIterateeCall(start, end, step)) {
            end = step = undefined;
          }
          start = +start || 0;
          step = step == null ? 1 : (+step || 0);
          if (end == null) {
            end = start;
            start = 0;
          } else {
            end = +end || 0;
          }
          var index = -1,
              length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
              result = Array(length);
          while (++index < length) {
            result[index] = start;
            start += step;
          }
          return result;
        }
        function times(n, iteratee, thisArg) {
          n = nativeFloor(n);
          if (n < 1 || !nativeIsFinite(n)) {
            return [];
          }
          var index = -1,
              result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
          iteratee = bindCallback(iteratee, thisArg, 1);
          while (++index < n) {
            if (index < MAX_ARRAY_LENGTH) {
              result[index] = iteratee(index);
            } else {
              iteratee(index);
            }
          }
          return result;
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return baseToString(prefix) + id;
        }
        function add(augend, addend) {
          return (+augend || 0) + (+addend || 0);
        }
        var ceil = createRound('ceil');
        var floor = createRound('floor');
        var max = createExtremum(gt, NEGATIVE_INFINITY);
        var min = createExtremum(lt, POSITIVE_INFINITY);
        var round = createRound('round');
        function sum(collection, iteratee, thisArg) {
          if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
            iteratee = undefined;
          }
          iteratee = getCallback(iteratee, thisArg, 3);
          return iteratee.length == 1 ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee) : baseSum(collection, iteratee);
        }
        lodash.prototype = baseLodash.prototype;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        MapCache.prototype['delete'] = mapDelete;
        MapCache.prototype.get = mapGet;
        MapCache.prototype.has = mapHas;
        MapCache.prototype.set = mapSet;
        SetCache.prototype.push = cachePush;
        memoize.Cache = MapCache;
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.callback = callback;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.functions = functions;
        lodash.groupBy = groupBy;
        lodash.indexBy = indexBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.invert = invert;
        lodash.invoke = invoke;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.modArgs = modArgs;
        lodash.negate = negate;
        lodash.omit = omit;
        lodash.once = once;
        lodash.pairs = pairs;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pluck = pluck;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.restParam = restParam;
        lodash.set = set;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortByAll = sortByAll;
        lodash.sortByOrder = sortByOrder;
        lodash.spread = spread;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.times = times;
        lodash.toArray = toArray;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.union = union;
        lodash.uniq = uniq;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.where = where;
        lodash.without = without;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipWith = zipWith;
        lodash.backflow = flowRight;
        lodash.collect = map;
        lodash.compose = flowRight;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.extend = assign;
        lodash.iteratee = callback;
        lodash.methods = functions;
        lodash.object = zipObject;
        lodash.select = filter;
        lodash.tail = rest;
        lodash.unique = uniq;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.deburr = deburr;
        lodash.endsWith = endsWith;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.findWhere = findWhere;
        lodash.first = first;
        lodash.floor = floor;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isBoolean = isBoolean;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isMatch = isMatch;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isString = isString;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.min = min;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padLeft = padLeft;
        lodash.padRight = padRight;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.sum = sum;
        lodash.template = template;
        lodash.trim = trim;
        lodash.trimLeft = trimLeft;
        lodash.trimRight = trimRight;
        lodash.trunc = trunc;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.words = words;
        lodash.all = every;
        lodash.any = some;
        lodash.contains = includes;
        lodash.eq = isEqual;
        lodash.detect = find;
        lodash.foldl = reduce;
        lodash.foldr = reduceRight;
        lodash.head = first;
        lodash.include = includes;
        lodash.inject = reduce;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!lodash.prototype[methodName]) {
              source[methodName] = func;
            }
          });
          return source;
        }()), false);
        lodash.sample = sample;
        lodash.prototype.sample = function(n) {
          if (!this.__chain__ && n == null) {
            return sample(this.value());
          }
          return this.thru(function(value) {
            return sample(value, n);
          });
        };
        lodash.VERSION = VERSION;
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(['drop', 'take'], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            var filtered = this.__filtered__;
            if (filtered && !index) {
              return new LazyWrapper(this);
            }
            n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);
            var result = this.clone();
            if (filtered) {
              result.__takeCount__ = nativeMin(result.__takeCount__, n);
            } else {
              result.__views__.push({
                'size': n,
                'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
              });
            }
            return result;
          };
          LazyWrapper.prototype[methodName + 'Right'] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
          var type = index + 1,
              isFilter = type != LAZY_MAP_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
            var result = this.clone();
            result.__iteratees__.push({
              'iteratee': getCallback(iteratee, thisArg, 1),
              'type': type
            });
            result.__filtered__ = result.__filtered__ || isFilter;
            return result;
          };
        });
        arrayEach(['first', 'last'], function(methodName, index) {
          var takeName = 'take' + (index ? 'Right' : '');
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(['initial', 'rest'], function(methodName, index) {
          var dropName = 'drop' + (index ? '' : 'Right');
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        arrayEach(['pluck', 'where'], function(methodName, index) {
          var operationName = index ? 'filter' : 'map',
              createCallback = index ? baseMatches : property;
          LazyWrapper.prototype[methodName] = function(value) {
            return this[operationName](createCallback(value));
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.reject = function(predicate, thisArg) {
          predicate = getCallback(predicate, thisArg, 1);
          return this.filter(function(value) {
            return !predicate(value);
          });
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = start == null ? 0 : (+start || 0);
          var result = this;
          if (result.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result);
          }
          if (start < 0) {
            result = result.takeRight(-start);
          } else if (start) {
            result = result.drop(start);
          }
          if (end !== undefined) {
            end = (+end || 0);
            result = end < 0 ? result.dropRight(-end) : result.take(end - start);
          }
          return result;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
          return this.reverse().takeWhile(predicate, thisArg).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(POSITIVE_INFINITY);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
              retUnwrapped = /^(?:first|last)$/.test(methodName),
              lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var args = retUnwrapped ? [1] : arguments,
                chainAll = this.__chain__,
                value = this.__wrapped__,
                isHybrid = !!this.__actions__.length,
                isLazy = value instanceof LazyWrapper,
                iteratee = args[0],
                useLazy = isLazy || isArray(value);
            if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
              isLazy = useLazy = false;
            }
            var interceptor = function(value) {
              return (retUnwrapped && chainAll) ? lodashFunc(value, 1)[0] : lodashFunc.apply(undefined, arrayPush([value], args));
            };
            var action = {
              'func': thru,
              'args': [interceptor],
              'thisArg': undefined
            },
                onlyLazy = isLazy && !isHybrid;
            if (retUnwrapped && !chainAll) {
              if (onlyLazy) {
                value = value.clone();
                value.__actions__.push(action);
                return func.call(value);
              }
              return lodashFunc.call(undefined, this.value())[0];
            }
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result = func.apply(value, args);
              result.__actions__.push(action);
              return new LodashWrapper(result, chainAll);
            }
            return this.thru(interceptor);
          };
        });
        arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
          var protoFunc = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
              chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
              fixObjects = !support.spliceObjects && /^(?:pop|shift|splice)$/.test(methodName),
              retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
          var func = !fixObjects ? protoFunc : function() {
            var result = protoFunc.apply(this, arguments);
            if (this.length === 0) {
              delete this[0];
            }
            return result;
          };
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              return func.apply(this.value(), args);
            }
            return this[chainName](function(value) {
              return func.apply(value, args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = (lodashFunc.name + ''),
                names = realNames[key] || (realNames[key] = []);
            names.push({
              'name': methodName,
              'func': lodashFunc
            });
          }
        });
        realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{
          'name': 'wrapper',
          'func': undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.concat = wrapperConcat;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toString = wrapperToString;
        lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.collect = lodash.prototype.map;
        lodash.prototype.head = lodash.prototype.first;
        lodash.prototype.select = lodash.prototype.filter;
        lodash.prototype.tail = lodash.prototype.rest;
        return lodash;
      }
      var _ = runInContext();
      if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeExports && freeModule) {
        if (moduleExports) {
          (freeModule.exports = _)._ = _;
        } else {
          freeExports._ = _;
        }
      } else {
        root._ = _;
      }
    }.call(this));
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:lodash-compat@3.10.2.js", ["npm:lodash-compat@3.10.2/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:lodash-compat@3.10.2/index.js');
  return module.exports;
});

System.registerDynamic("npm:lodash-fp@0.10.4/index.js", ["npm:lodash-fp@0.10.4/convert.js", "npm:lodash-compat@3.10.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:lodash-fp@0.10.4/convert.js')($__require('npm:lodash-compat@3.10.2.js').runInContext());
  return module.exports;
});

System.registerDynamic("npm:lodash-fp@0.10.4.js", ["npm:lodash-fp@0.10.4/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:lodash-fp@0.10.4/index.js');
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/BoundCallbackObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/AsyncSubject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var AsyncSubject_1 = $__require('npm:rxjs@5.0.0-beta.7/AsyncSubject.js');
  var BoundCallbackObservable = (function(_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.scheduler = scheduler;
    }
    BoundCallbackObservable.create = function(func, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundCallbackObservable(func, selector, args, scheduler);
      };
    };
    BoundCallbackObservable.prototype._subscribe = function(subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          source: this,
          subscriber: subscriber
        });
      }
    };
    return BoundCallbackObservable;
  }(Observable_1.Observable));
  exports.BoundCallbackObservable = BoundCallbackObservable;
  function dispatch(state) {
    var self = this;
    var source = state.source,
        subscriber = state.subscriber;
    var callbackFunc = source.callbackFunc,
        args = source.args,
        scheduler = source.scheduler;
    var subject = source.subject;
    if (!subject) {
      subject = source.subject = new AsyncSubject_1.AsyncSubject();
      var handler = function handlerFn() {
        var innerArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          innerArgs[_i - 0] = arguments[_i];
        }
        var source = handlerFn.source;
        var selector = source.selector,
            subject = source.subject;
        if (selector) {
          var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
          if (result_2 === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, {
              err: errorObject_1.errorObject.e,
              subject: subject
            }));
          } else {
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: result_2,
              subject: subject
            }));
          }
        } else {
          var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
          self.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        }
      };
      handler.source = source;
      var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
      if (result === errorObject_1.errorObject) {
        subject.error(errorObject_1.errorObject.e);
      }
    }
    self.add(subject.subscribe(subscriber));
  }
  function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/bindCallback.js", ["npm:rxjs@5.0.0-beta.7/observable/BoundCallbackObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var BoundCallbackObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/BoundCallbackObservable.js');
  exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/bindCallback.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/bindCallback.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var bindCallback_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/bindCallback.js');
  Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/BoundNodeCallbackObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/AsyncSubject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var AsyncSubject_1 = $__require('npm:rxjs@5.0.0-beta.7/AsyncSubject.js');
  var BoundNodeCallbackObservable = (function(_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
      _super.call(this);
      this.callbackFunc = callbackFunc;
      this.selector = selector;
      this.args = args;
      this.scheduler = scheduler;
    }
    BoundNodeCallbackObservable.create = function(func, selector, scheduler) {
      if (selector === void 0) {
        selector = undefined;
      }
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i - 0] = arguments[_i];
        }
        return new BoundNodeCallbackObservable(func, selector, args, scheduler);
      };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function(subscriber) {
      var callbackFunc = this.callbackFunc;
      var args = this.args;
      var scheduler = this.scheduler;
      var subject = this.subject;
      if (!scheduler) {
        if (!subject) {
          subject = this.subject = new AsyncSubject_1.AsyncSubject();
          var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector,
                subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
              subject.error(err);
            } else if (selector) {
              var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
              if (result_1 === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
              } else {
                subject.next(result_1);
                subject.complete();
              }
            } else {
              subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
              subject.complete();
            }
          };
          handler.source = this;
          var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
          if (result === errorObject_1.errorObject) {
            subject.error(errorObject_1.errorObject.e);
          }
        }
        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          source: this,
          subscriber: subscriber
        });
      }
    };
    return BoundNodeCallbackObservable;
  }(Observable_1.Observable));
  exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
  function dispatch(state) {
    var self = this;
    var source = state.source,
        subscriber = state.subscriber;
    var callbackFunc = source.callbackFunc,
        args = source.args,
        scheduler = source.scheduler;
    var subject = source.subject;
    if (!subject) {
      subject = source.subject = new AsyncSubject_1.AsyncSubject();
      var handler = function handlerFn() {
        var innerArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          innerArgs[_i - 0] = arguments[_i];
        }
        var source = handlerFn.source;
        var selector = source.selector,
            subject = source.subject;
        var err = innerArgs.shift();
        if (err) {
          subject.error(err);
        } else if (selector) {
          var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
          if (result_2 === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, {
              err: errorObject_1.errorObject.e,
              subject: subject
            }));
          } else {
            self.add(scheduler.schedule(dispatchNext, 0, {
              value: result_2,
              subject: subject
            }));
          }
        } else {
          var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
          self.add(scheduler.schedule(dispatchNext, 0, {
            value: value,
            subject: subject
          }));
        }
      };
      handler.source = source;
      var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
      if (result === errorObject_1.errorObject) {
        subject.error(errorObject_1.errorObject.e);
      }
    }
    self.add(subject.subscribe(subscriber));
  }
  function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
  }
  function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/bindNodeCallback.js", ["npm:rxjs@5.0.0-beta.7/observable/BoundNodeCallbackObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var BoundNodeCallbackObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/BoundNodeCallbackObservable.js');
  exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/bindNodeCallback.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/bindNodeCallback.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var bindNodeCallback_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/bindNodeCallback.js');
  Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/combineLatest.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/combineLatest.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var combineLatest_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/combineLatest.js');
  Observable_1.Observable.combineLatest = combineLatest_1.combineLatestStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/concat.js", ["npm:rxjs@5.0.0-beta.7/operator/concat.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var concat_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/concat.js');
  exports.concat = concat_1.concatStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/concat.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/concat.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var concat_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/concat.js');
  Observable_1.Observable.concat = concat_1.concat;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/DeferObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var DeferObservable = (function(_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
      _super.call(this);
      this.observableFactory = observableFactory;
    }
    DeferObservable.create = function(observableFactory) {
      return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function(subscriber) {
      return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
  }(Observable_1.Observable));
  exports.DeferObservable = DeferObservable;
  var DeferSubscriber = (function(_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
      _super.call(this, destination);
      this.factory = factory;
      this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function() {
      try {
        this._callFactory();
      } catch (err) {
        this._error(err);
      }
    };
    DeferSubscriber.prototype._callFactory = function() {
      var result = this.factory();
      if (result) {
        this.add(subscribeToResult_1.subscribeToResult(this, result));
      }
    };
    return DeferSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/defer.js", ["npm:rxjs@5.0.0-beta.7/observable/DeferObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var DeferObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/DeferObservable.js');
  exports.defer = DeferObservable_1.DeferObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/defer.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/defer.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var defer_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/defer.js');
  Observable_1.Observable.defer = defer_1.defer;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/empty.js", ["npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  exports.empty = EmptyObservable_1.EmptyObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/empty.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/empty.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var empty_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/empty.js');
  Observable_1.Observable.empty = empty_1.empty;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/ForkJoinObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js", "npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var ForkJoinObservable = (function(_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
      _super.call(this);
      this.sources = sources;
      this.resultSelector = resultSelector;
    }
    ForkJoinObservable.create = function() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i - 0] = arguments[_i];
      }
      if (sources === null || arguments.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      var resultSelector = null;
      if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
      }
      if (sources.length === 1 && isArray_1.isArray(sources[0])) {
        sources = sources[0];
      }
      if (sources.length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      }
      return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function(subscriber) {
      return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
  }(Observable_1.Observable));
  exports.ForkJoinObservable = ForkJoinObservable;
  var ForkJoinSubscriber = (function(_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
      _super.call(this, destination);
      this.sources = sources;
      this.resultSelector = resultSelector;
      this.completed = 0;
      this.haveValues = 0;
      var len = sources.length;
      this.total = len;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        var source = sources[i];
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
        if (innerSubscription) {
          innerSubscription.outerIndex = i;
          this.add(innerSubscription);
        }
      }
    }
    ForkJoinSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      if (!innerSub._hasValue) {
        innerSub._hasValue = true;
        this.haveValues++;
      }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function(innerSub) {
      var destination = this.destination;
      var _a = this,
          haveValues = _a.haveValues,
          resultSelector = _a.resultSelector,
          values = _a.values;
      var len = values.length;
      if (!innerSub._hasValue) {
        destination.complete();
        return;
      }
      this.completed++;
      if (this.completed !== len) {
        return;
      }
      if (haveValues === len) {
        var value = resultSelector ? resultSelector.apply(this, values) : values;
        destination.next(value);
      }
      destination.complete();
    };
    return ForkJoinSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/forkJoin.js", ["npm:rxjs@5.0.0-beta.7/observable/ForkJoinObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ForkJoinObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ForkJoinObservable.js');
  exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/forkJoin.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/forkJoin.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var forkJoin_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/forkJoin.js');
  Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/IteratorObservable.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "npm:rxjs@5.0.0-beta.7/util/isObject.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/isFunction.js", "npm:rxjs@5.0.0-beta.7/symbol/iterator.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var isObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isObject.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var isFunction_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isFunction.js');
  var iterator_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/iterator.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var IteratorObservable = (function(_super) {
    __extends(IteratorObservable, _super);
    function IteratorObservable(iterator, project, thisArg, scheduler) {
      _super.call(this);
      if (iterator == null) {
        throw new Error('iterator cannot be null.');
      }
      if (isObject_1.isObject(project)) {
        this.thisArg = project;
        this.scheduler = thisArg;
      } else if (isFunction_1.isFunction(project)) {
        this.project = project;
        this.thisArg = thisArg;
        this.scheduler = scheduler;
      } else if (project != null) {
        throw new Error('When provided, `project` must be a function.');
      }
      this.iterator = getIterator(iterator);
    }
    IteratorObservable.create = function(iterator, project, thisArg, scheduler) {
      return new IteratorObservable(iterator, project, thisArg, scheduler);
    };
    IteratorObservable.dispatch = function(state) {
      var index = state.index,
          hasError = state.hasError,
          thisArg = state.thisArg,
          project = state.project,
          iterator = state.iterator,
          subscriber = state.subscriber;
      if (hasError) {
        subscriber.error(state.error);
        return;
      }
      var result = iterator.next();
      if (result.done) {
        subscriber.complete();
        return;
      }
      if (project) {
        result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
        if (result === errorObject_1.errorObject) {
          state.error = errorObject_1.errorObject.e;
          state.hasError = true;
        } else {
          subscriber.next(result);
          state.index = index + 1;
        }
      } else {
        subscriber.next(result.value);
        state.index = index + 1;
      }
      if (subscriber.isUnsubscribed) {
        return;
      }
      this.schedule(state);
    };
    IteratorObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          iterator = _a.iterator,
          project = _a.project,
          thisArg = _a.thisArg,
          scheduler = _a.scheduler;
      if (scheduler) {
        return scheduler.schedule(IteratorObservable.dispatch, 0, {
          index: index,
          thisArg: thisArg,
          project: project,
          iterator: iterator,
          subscriber: subscriber
        });
      } else {
        do {
          var result = iterator.next();
          if (result.done) {
            subscriber.complete();
            break;
          } else if (project) {
            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
            if (result === errorObject_1.errorObject) {
              subscriber.error(errorObject_1.errorObject.e);
              break;
            }
            subscriber.next(result);
          } else {
            subscriber.next(result.value);
          }
          if (subscriber.isUnsubscribed) {
            break;
          }
        } while (true);
      }
    };
    return IteratorObservable;
  }(Observable_1.Observable));
  exports.IteratorObservable = IteratorObservable;
  var StringIterator = (function() {
    function StringIterator(str, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = str.length;
      }
      this.str = str;
      this.idx = idx;
      this.len = len;
    }
    StringIterator.prototype[iterator_1.$$iterator] = function() {
      return (this);
    };
    StringIterator.prototype.next = function() {
      return this.idx < this.len ? {
        done: false,
        value: this.str.charAt(this.idx++)
      } : {
        done: true,
        value: undefined
      };
    };
    return StringIterator;
  }());
  var ArrayIterator = (function() {
    function ArrayIterator(arr, idx, len) {
      if (idx === void 0) {
        idx = 0;
      }
      if (len === void 0) {
        len = toLength(arr);
      }
      this.arr = arr;
      this.idx = idx;
      this.len = len;
    }
    ArrayIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    ArrayIterator.prototype.next = function() {
      return this.idx < this.len ? {
        done: false,
        value: this.arr[this.idx++]
      } : {
        done: true,
        value: undefined
      };
    };
    return ArrayIterator;
  }());
  function getIterator(obj) {
    var i = obj[iterator_1.$$iterator];
    if (!i && typeof obj === 'string') {
      return new StringIterator(obj);
    }
    if (!i && obj.length !== undefined) {
      return new ArrayIterator(obj);
    }
    if (!i) {
      throw new TypeError('Object is not iterable');
    }
    return obj[iterator_1.$$iterator]();
  }
  var maxSafeInteger = Math.pow(2, 53) - 1;
  function toLength(o) {
    var len = +o.length;
    if (isNaN(len)) {
      return 0;
    }
    if (len === 0 || !numberIsFinite(len)) {
      return len;
    }
    len = sign(len) * Math.floor(Math.abs(len));
    if (len <= 0) {
      return 0;
    }
    if (len > maxSafeInteger) {
      return maxSafeInteger;
    }
    return len;
  }
  function numberIsFinite(value) {
    return typeof value === 'number' && root_1.root.isFinite(value);
  }
  function sign(value) {
    var valueAsNumber = +value;
    if (valueAsNumber === 0) {
      return valueAsNumber;
    }
    if (isNaN(valueAsNumber)) {
      return valueAsNumber;
    }
    return valueAsNumber < 0 ? -1 : 1;
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/ArrayLikeObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var ScalarObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  var ArrayLikeObservable = (function(_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
      _super.call(this);
      this.arrayLike = arrayLike;
      this.scheduler = scheduler;
      if (!mapFn && !scheduler && arrayLike.length === 1) {
        this._isScalar = true;
        this.value = arrayLike[0];
      }
      if (mapFn) {
        this.mapFn = mapFn.bind(thisArg);
      }
    }
    ArrayLikeObservable.create = function(arrayLike, mapFn, thisArg, scheduler) {
      var length = arrayLike.length;
      if (length === 0) {
        return new EmptyObservable_1.EmptyObservable();
      } else if (length === 1 && !mapFn) {
        return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
      } else {
        return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
      }
    };
    ArrayLikeObservable.dispatch = function(state) {
      var arrayLike = state.arrayLike,
          index = state.index,
          length = state.length,
          mapFn = state.mapFn,
          subscriber = state.subscriber;
      if (subscriber.isUnsubscribed) {
        return;
      }
      if (index >= length) {
        subscriber.complete();
        return;
      }
      var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
      subscriber.next(result);
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          arrayLike = _a.arrayLike,
          mapFn = _a.mapFn,
          scheduler = _a.scheduler;
      var length = arrayLike.length;
      if (scheduler) {
        return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
          arrayLike: arrayLike,
          index: index,
          length: length,
          mapFn: mapFn,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
          var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
          subscriber.next(result);
        }
        subscriber.complete();
      }
    };
    return ArrayLikeObservable;
  }(Observable_1.Observable));
  exports.ArrayLikeObservable = ArrayLikeObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/FromObservable.js", ["npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/util/isFunction.js", "npm:rxjs@5.0.0-beta.7/util/isPromise.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js", "npm:rxjs@5.0.0-beta.7/observable/PromiseObservable.js", "npm:rxjs@5.0.0-beta.7/observable/IteratorObservable.js", "npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/observable/ArrayLikeObservable.js", "npm:rxjs@5.0.0-beta.7/symbol/iterator.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/observeOn.js", "npm:symbol-observable@0.2.4.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  var isFunction_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isFunction.js');
  var isPromise_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isPromise.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  var PromiseObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/PromiseObservable.js');
  var IteratorObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/IteratorObservable.js');
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var ArrayLikeObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayLikeObservable.js');
  var iterator_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/iterator.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var observeOn_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/observeOn.js');
  var $$observable = $__require('npm:symbol-observable@0.2.4.js');
  var isArrayLike = (function(x) {
    return x && typeof x.length === 'number';
  });
  var FromObservable = (function(_super) {
    __extends(FromObservable, _super);
    function FromObservable(ish, scheduler) {
      _super.call(this, null);
      this.ish = ish;
      this.scheduler = scheduler;
    }
    FromObservable.create = function(ish, mapFnOrScheduler, thisArg, lastScheduler) {
      var scheduler = null;
      var mapFn = null;
      if (isFunction_1.isFunction(mapFnOrScheduler)) {
        scheduler = lastScheduler || null;
        mapFn = mapFnOrScheduler;
      } else if (isScheduler_1.isScheduler(scheduler)) {
        scheduler = mapFnOrScheduler;
      }
      if (ish != null) {
        if (typeof ish[$$observable] === 'function') {
          if (ish instanceof Observable_1.Observable && !scheduler) {
            return ish;
          }
          return new FromObservable(ish, scheduler);
        } else if (isArray_1.isArray(ish)) {
          return new ArrayObservable_1.ArrayObservable(ish, scheduler);
        } else if (isPromise_1.isPromise(ish)) {
          return new PromiseObservable_1.PromiseObservable(ish, scheduler);
        } else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
          return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
        } else if (isArrayLike(ish)) {
          return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
        }
      }
      throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
    };
    FromObservable.prototype._subscribe = function(subscriber) {
      var ish = this.ish;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        return ish[$$observable]().subscribe(subscriber);
      } else {
        return ish[$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
      }
    };
    return FromObservable;
  }(Observable_1.Observable));
  exports.FromObservable = FromObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/from.js", ["npm:rxjs@5.0.0-beta.7/observable/FromObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FromObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/FromObservable.js');
  exports.from = FromObservable_1.FromObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/from.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/from.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var from_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/from.js');
  Observable_1.Observable.from = from_1.from;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/FromEventObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
    var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
    var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
    var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
    function isNodeStyleEventEmmitter(sourceObj) {
      return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }
    function isJQueryStyleEventEmitter(sourceObj) {
      return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }
    function isNodeList(sourceObj) {
      return !!sourceObj && sourceObj.toString() === '[object NodeList]';
    }
    function isHTMLCollection(sourceObj) {
      return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
    }
    function isEventTarget(sourceObj) {
      return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    }
    var FromEventObservable = (function(_super) {
      __extends(FromEventObservable, _super);
      function FromEventObservable(sourceObj, eventName, selector) {
        _super.call(this);
        this.sourceObj = sourceObj;
        this.eventName = eventName;
        this.selector = selector;
      }
      FromEventObservable.create = function(target, eventName, selector) {
        return new FromEventObservable(target, eventName, selector);
      };
      FromEventObservable.setupSubscription = function(sourceObj, eventName, handler, subscriber) {
        var unsubscribe;
        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
          for (var i = 0,
              len = sourceObj.length; i < len; i++) {
            FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
          }
        } else if (isEventTarget(sourceObj)) {
          sourceObj.addEventListener(eventName, handler);
          unsubscribe = function() {
            return sourceObj.removeEventListener(eventName, handler);
          };
        } else if (isJQueryStyleEventEmitter(sourceObj)) {
          sourceObj.on(eventName, handler);
          unsubscribe = function() {
            return sourceObj.off(eventName, handler);
          };
        } else if (isNodeStyleEventEmmitter(sourceObj)) {
          sourceObj.addListener(eventName, handler);
          unsubscribe = function() {
            return sourceObj.removeListener(eventName, handler);
          };
        }
        subscriber.add(new Subscription_1.Subscription(unsubscribe));
      };
      FromEventObservable.prototype._subscribe = function(subscriber) {
        var sourceObj = this.sourceObj;
        var eventName = this.eventName;
        var selector = this.selector;
        var handler = selector ? function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
          }
          var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
          if (result === errorObject_1.errorObject) {
            subscriber.error(errorObject_1.errorObject.e);
          } else {
            subscriber.next(result);
          }
        } : function(e) {
          return subscriber.next(e);
        };
        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
      };
      return FromEventObservable;
    }(Observable_1.Observable));
    exports.FromEventObservable = FromEventObservable;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/fromEvent.js", ["npm:rxjs@5.0.0-beta.7/observable/FromEventObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FromEventObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/FromEventObservable.js');
  exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/fromEvent.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/fromEvent.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var fromEvent_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/fromEvent.js');
  Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/FromEventPatternObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
    var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
    var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
    var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
    var FromEventPatternObservable = (function(_super) {
      __extends(FromEventPatternObservable, _super);
      function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
      }
      FromEventPatternObservable.create = function(addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
      };
      FromEventPatternObservable.prototype._subscribe = function(subscriber) {
        var addHandler = this.addHandler;
        var removeHandler = this.removeHandler;
        var selector = this.selector;
        var handler = selector ? function(e) {
          var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
          if (result === errorObject_1.errorObject) {
            subscriber.error(result.e);
          } else {
            subscriber.next(result);
          }
        } : function(e) {
          subscriber.next(e);
        };
        var result = tryCatch_1.tryCatch(addHandler)(handler);
        if (result === errorObject_1.errorObject) {
          subscriber.error(result.e);
        }
        subscriber.add(new Subscription_1.Subscription(function() {
          removeHandler(handler);
        }));
      };
      return FromEventPatternObservable;
    }(Observable_1.Observable));
    exports.FromEventPatternObservable = FromEventPatternObservable;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/fromEventPattern.js", ["npm:rxjs@5.0.0-beta.7/observable/FromEventPatternObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FromEventPatternObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/FromEventPatternObservable.js');
  exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/fromEventPattern.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/fromEventPattern.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var fromEventPattern_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/fromEventPattern.js');
  Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/PromiseObservable.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "npm:rxjs@5.0.0-beta.7/Observable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var PromiseObservable = (function(_super) {
    __extends(PromiseObservable, _super);
    function PromiseObservable(promise, scheduler) {
      if (scheduler === void 0) {
        scheduler = null;
      }
      _super.call(this);
      this.promise = promise;
      this.scheduler = scheduler;
    }
    PromiseObservable.create = function(promise, scheduler) {
      if (scheduler === void 0) {
        scheduler = null;
      }
      return new PromiseObservable(promise, scheduler);
    };
    PromiseObservable.prototype._subscribe = function(subscriber) {
      var _this = this;
      var promise = this.promise;
      var scheduler = this.scheduler;
      if (scheduler == null) {
        if (this._isScalar) {
          if (!subscriber.isUnsubscribed) {
            subscriber.next(this.value);
            subscriber.complete();
          }
        } else {
          promise.then(function(value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.isUnsubscribed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function(err) {
            if (!subscriber.isUnsubscribed) {
              subscriber.error(err);
            }
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
        }
      } else {
        if (this._isScalar) {
          if (!subscriber.isUnsubscribed) {
            return scheduler.schedule(dispatchNext, 0, {
              value: this.value,
              subscriber: subscriber
            });
          }
        } else {
          promise.then(function(value) {
            _this.value = value;
            _this._isScalar = true;
            if (!subscriber.isUnsubscribed) {
              subscriber.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subscriber: subscriber
              }));
            }
          }, function(err) {
            if (!subscriber.isUnsubscribed) {
              subscriber.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subscriber: subscriber
              }));
            }
          }).then(null, function(err) {
            root_1.root.setTimeout(function() {
              throw err;
            });
          });
        }
      }
    };
    return PromiseObservable;
  }(Observable_1.Observable));
  exports.PromiseObservable = PromiseObservable;
  function dispatchNext(arg) {
    var value = arg.value,
        subscriber = arg.subscriber;
    if (!subscriber.isUnsubscribed) {
      subscriber.next(value);
      subscriber.complete();
    }
  }
  function dispatchError(arg) {
    var err = arg.err,
        subscriber = arg.subscriber;
    if (!subscriber.isUnsubscribed) {
      subscriber.error(err);
    }
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/fromPromise.js", ["npm:rxjs@5.0.0-beta.7/observable/PromiseObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var PromiseObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/PromiseObservable.js');
  exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/fromPromise.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/fromPromise.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var fromPromise_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/fromPromise.js');
  Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/GenerateObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  var selfSelector = function(value) {
    return value;
  };
  var GenerateObservable = (function(_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
      _super.call(this);
      this.initialState = initialState;
      this.condition = condition;
      this.iterate = iterate;
      this.resultSelector = resultSelector;
      this.scheduler = scheduler;
    }
    GenerateObservable.create = function(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
      if (arguments.length == 1) {
        return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
      }
      if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
        return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
      }
      return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function(subscriber) {
      var state = this.initialState;
      if (this.scheduler) {
        return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
          subscriber: subscriber,
          iterate: this.iterate,
          condition: this.condition,
          resultSelector: this.resultSelector,
          state: state
        });
      }
      var _a = this,
          condition = _a.condition,
          resultSelector = _a.resultSelector,
          iterate = _a.iterate;
      do {
        if (condition) {
          var conditionResult = void 0;
          try {
            conditionResult = condition(state);
          } catch (err) {
            subscriber.error(err);
            return;
          }
          if (!conditionResult) {
            subscriber.complete();
            break;
          }
        }
        var value = void 0;
        try {
          value = resultSelector(state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        subscriber.next(value);
        if (subscriber.isUnsubscribed) {
          break;
        }
        try {
          state = iterate(state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
      } while (true);
    };
    GenerateObservable.dispatch = function(state) {
      var subscriber = state.subscriber,
          condition = state.condition;
      if (subscriber.isUnsubscribed) {
        return;
      }
      if (state.needIterate) {
        try {
          state.state = state.iterate(state.state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
      } else {
        state.needIterate = true;
      }
      if (condition) {
        var conditionResult = void 0;
        try {
          conditionResult = condition(state.state);
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (!conditionResult) {
          subscriber.complete();
          return;
        }
        if (subscriber.isUnsubscribed) {
          return;
        }
      }
      var value;
      try {
        value = state.resultSelector(state.state);
      } catch (err) {
        subscriber.error(err);
        return;
      }
      if (subscriber.isUnsubscribed) {
        return;
      }
      subscriber.next(value);
      if (subscriber.isUnsubscribed) {
        return;
      }
      return this.schedule(state);
    };
    return GenerateObservable;
  }(Observable_1.Observable));
  exports.GenerateObservable = GenerateObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/generate.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/GenerateObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var GenerateObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/GenerateObservable.js');
  Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/IntervalObservable.js", ["npm:rxjs@5.0.0-beta.7/util/isNumeric.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isNumeric.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  var IntervalObservable = (function(_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      _super.call(this);
      this.period = period;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(period) || period < 0) {
        this.period = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = async_1.async;
      }
    }
    IntervalObservable.create = function(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function(state) {
      var index = state.index,
          subscriber = state.subscriber,
          period = state.period;
      subscriber.next(index);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.index += 1;
      this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var period = this.period;
      var scheduler = this.scheduler;
      subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
        index: index,
        subscriber: subscriber,
        period: period
      }));
    };
    return IntervalObservable;
  }(Observable_1.Observable));
  exports.IntervalObservable = IntervalObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/interval.js", ["npm:rxjs@5.0.0-beta.7/observable/IntervalObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IntervalObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/IntervalObservable.js');
  exports.interval = IntervalObservable_1.IntervalObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/interval.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/interval.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var interval_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/interval.js');
  Observable_1.Observable.interval = interval_1.interval;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/merge.js", ["npm:rxjs@5.0.0-beta.7/operator/merge.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var merge_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/merge.js');
  exports.merge = merge_1.mergeStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/merge.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/merge.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var merge_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/merge.js');
  Observable_1.Observable.merge = merge_1.merge;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/race.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/race.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var race_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/race.js');
  Observable_1.Observable.race = race_1.raceStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/NeverObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/util/noop.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var noop_1 = $__require('npm:rxjs@5.0.0-beta.7/util/noop.js');
  var NeverObservable = (function(_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
      _super.call(this);
    }
    NeverObservable.create = function() {
      return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function(subscriber) {
      noop_1.noop();
    };
    return NeverObservable;
  }(Observable_1.Observable));
  exports.NeverObservable = NeverObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/never.js", ["npm:rxjs@5.0.0-beta.7/observable/NeverObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var NeverObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/NeverObservable.js');
  exports.never = NeverObservable_1.NeverObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/never.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/never.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var never_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/never.js');
  Observable_1.Observable.never = never_1.never;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/of.js", ["npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  exports.of = ArrayObservable_1.ArrayObservable.of;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/of.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/of.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var of_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/of.js');
  Observable_1.Observable.of = of_1.of;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/RangeObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var RangeObservable = (function(_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
      _super.call(this);
      this.start = start;
      this._count = count;
      this.scheduler = scheduler;
    }
    RangeObservable.create = function(start, count, scheduler) {
      if (start === void 0) {
        start = 0;
      }
      if (count === void 0) {
        count = 0;
      }
      return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function(state) {
      var start = state.start,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(start);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.index = index + 1;
      state.start = start + 1;
      this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var start = this.start;
      var count = this._count;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(RangeObservable.dispatch, 0, {
          index: index,
          count: count,
          start: start,
          subscriber: subscriber
        });
      } else {
        do {
          if (index++ >= count) {
            subscriber.complete();
            break;
          }
          subscriber.next(start++);
          if (subscriber.isUnsubscribed) {
            break;
          }
        } while (true);
      }
    };
    return RangeObservable;
  }(Observable_1.Observable));
  exports.RangeObservable = RangeObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/range.js", ["npm:rxjs@5.0.0-beta.7/observable/RangeObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var RangeObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/RangeObservable.js');
  exports.range = RangeObservable_1.RangeObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/range.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/range.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var range_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/range.js');
  Observable_1.Observable.range = range_1.range;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/ErrorObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var ErrorObservable = (function(_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
      _super.call(this);
      this.error = error;
      this.scheduler = scheduler;
    }
    ErrorObservable.create = function(error, scheduler) {
      return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function(arg) {
      var error = arg.error,
          subscriber = arg.subscriber;
      subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function(subscriber) {
      var error = this.error;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ErrorObservable.dispatch, 0, {
          error: error,
          subscriber: subscriber
        });
      } else {
        subscriber.error(error);
      }
    };
    return ErrorObservable;
  }(Observable_1.Observable));
  exports.ErrorObservable = ErrorObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/throw.js", ["npm:rxjs@5.0.0-beta.7/observable/ErrorObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ErrorObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ErrorObservable.js');
  exports._throw = ErrorObservable_1.ErrorObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/throw.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/throw.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var throw_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/throw.js');
  Observable_1.Observable.throw = throw_1._throw;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/TimerObservable.js", ["npm:rxjs@5.0.0-beta.7/util/isNumeric.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js", "npm:rxjs@5.0.0-beta.7/util/isDate.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isNumeric_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isNumeric.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  var isDate_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isDate.js');
  var TimerObservable = (function(_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      _super.call(this);
      this.period = -1;
      this.dueTime = 0;
      if (isNumeric_1.isNumeric(period)) {
        this.period = Number(period) < 1 && 1 || Number(period);
      } else if (isScheduler_1.isScheduler(period)) {
        scheduler = period;
      }
      if (!isScheduler_1.isScheduler(scheduler)) {
        scheduler = async_1.async;
      }
      this.scheduler = scheduler;
      this.dueTime = isDate_1.isDate(dueTime) ? (+dueTime - this.scheduler.now()) : dueTime;
    }
    TimerObservable.create = function(initialDelay, period, scheduler) {
      if (initialDelay === void 0) {
        initialDelay = 0;
      }
      return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function(state) {
      var index = state.index,
          period = state.period,
          subscriber = state.subscriber;
      var action = this;
      subscriber.next(index);
      if (subscriber.isUnsubscribed) {
        return;
      } else if (period === -1) {
        return subscriber.complete();
      }
      state.index = index + 1;
      action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var _a = this,
          period = _a.period,
          dueTime = _a.dueTime,
          scheduler = _a.scheduler;
      return scheduler.schedule(TimerObservable.dispatch, dueTime, {
        index: index,
        period: period,
        subscriber: subscriber
      });
    };
    return TimerObservable;
  }(Observable_1.Observable));
  exports.TimerObservable = TimerObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/timer.js", ["npm:rxjs@5.0.0-beta.7/observable/TimerObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var TimerObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/TimerObservable.js');
  exports.timer = TimerObservable_1.TimerObservable.create;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/timer.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/timer.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var timer_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/timer.js');
  Observable_1.Observable.timer = timer_1.timer;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/zip.js", ["npm:rxjs@5.0.0-beta.7/operator/zip.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var zip_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/zip.js');
  exports.zip = zip_1.zipStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/observable/zip.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/zip.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var zip_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/zip.js');
  Observable_1.Observable.zip = zip_1.zip;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/buffer.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "github:jspm/nodelibs-buffer@0.1.0.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
    var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
    function buffer(closingNotifier) {
      return this.lift(new BufferOperator(closingNotifier));
    }
    exports.buffer = buffer;
    var BufferOperator = (function() {
      function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
      }
      BufferOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
      };
      return BufferOperator;
    }());
    var BufferSubscriber = (function(_super) {
      __extends(BufferSubscriber, _super);
      function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
      }
      BufferSubscriber.prototype._next = function(value) {
        this.buffer.push(value);
      };
      BufferSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
      };
      return BufferSubscriber;
    }(OuterSubscriber_1.OuterSubscriber));
  })($__require('github:jspm/nodelibs-buffer@0.1.0.js').Buffer);
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/buffer.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/buffer.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var buffer_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/buffer.js');
  Observable_1.Observable.prototype.buffer = buffer_1.buffer;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/bufferCount.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "github:jspm/nodelibs-buffer@0.1.0.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
    function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) {
        startBufferEvery = null;
      }
      return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    }
    exports.bufferCount = bufferCount;
    var BufferCountOperator = (function() {
      function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
      }
      BufferCountOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
      };
      return BufferCountOperator;
    }());
    var BufferCountSubscriber = (function(_super) {
      __extends(BufferCountSubscriber, _super);
      function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [[]];
        this.count = 0;
      }
      BufferCountSubscriber.prototype._next = function(value) {
        var count = (this.count += 1);
        var destination = this.destination;
        var bufferSize = this.bufferSize;
        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
        var buffers = this.buffers;
        var len = buffers.length;
        var remove = -1;
        if (count % startBufferEvery === 0) {
          buffers.push([]);
        }
        for (var i = 0; i < len; i++) {
          var buffer = buffers[i];
          buffer.push(value);
          if (buffer.length === bufferSize) {
            remove = i;
            destination.next(buffer);
          }
        }
        if (remove !== -1) {
          buffers.splice(remove, 1);
        }
      };
      BufferCountSubscriber.prototype._complete = function() {
        var destination = this.destination;
        var buffers = this.buffers;
        while (buffers.length > 0) {
          var buffer = buffers.shift();
          if (buffer.length > 0) {
            destination.next(buffer);
          }
        }
        _super.prototype._complete.call(this);
      };
      return BufferCountSubscriber;
    }(Subscriber_1.Subscriber));
  })($__require('github:jspm/nodelibs-buffer@0.1.0.js').Buffer);
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/bufferCount.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/bufferCount.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var bufferCount_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/bufferCount.js');
  Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/bufferTime.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js", "github:jspm/nodelibs-buffer@0.1.0.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
    var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
    function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
      if (bufferCreationInterval === void 0) {
        bufferCreationInterval = null;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
    }
    exports.bufferTime = bufferTime;
    var BufferTimeOperator = (function() {
      function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.scheduler = scheduler;
      }
      BufferTimeOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler));
      };
      return BufferTimeOperator;
    }());
    var BufferTimeSubscriber = (function(_super) {
      __extends(BufferTimeSubscriber, _super);
      function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.scheduler = scheduler;
        this.buffers = [];
        var buffer = this.openBuffer();
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
          var closeState = {
            subscriber: this,
            buffer: buffer
          };
          var creationState = {
            bufferTimeSpan: bufferTimeSpan,
            bufferCreationInterval: bufferCreationInterval,
            subscriber: this,
            scheduler: scheduler
          };
          this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
          this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        } else {
          var timeSpanOnlyState = {
            subscriber: this,
            buffer: buffer,
            bufferTimeSpan: bufferTimeSpan
          };
          this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
      }
      BufferTimeSubscriber.prototype._next = function(value) {
        var buffers = this.buffers;
        var len = buffers.length;
        for (var i = 0; i < len; i++) {
          buffers[i].push(value);
        }
      };
      BufferTimeSubscriber.prototype._error = function(err) {
        this.buffers.length = 0;
        _super.prototype._error.call(this, err);
      };
      BufferTimeSubscriber.prototype._complete = function() {
        var _a = this,
            buffers = _a.buffers,
            destination = _a.destination;
        while (buffers.length > 0) {
          destination.next(buffers.shift());
        }
        _super.prototype._complete.call(this);
      };
      BufferTimeSubscriber.prototype._unsubscribe = function() {
        this.buffers = null;
      };
      BufferTimeSubscriber.prototype.openBuffer = function() {
        var buffer = [];
        this.buffers.push(buffer);
        return buffer;
      };
      BufferTimeSubscriber.prototype.closeBuffer = function(buffer) {
        this.destination.next(buffer);
        var buffers = this.buffers;
        buffers.splice(buffers.indexOf(buffer), 1);
      };
      return BufferTimeSubscriber;
    }(Subscriber_1.Subscriber));
    function dispatchBufferTimeSpanOnly(state) {
      var subscriber = state.subscriber;
      var prevBuffer = state.buffer;
      if (prevBuffer) {
        subscriber.closeBuffer(prevBuffer);
      }
      state.buffer = subscriber.openBuffer();
      if (!subscriber.isUnsubscribed) {
        this.schedule(state, state.bufferTimeSpan);
      }
    }
    function dispatchBufferCreation(state) {
      var bufferCreationInterval = state.bufferCreationInterval,
          bufferTimeSpan = state.bufferTimeSpan,
          subscriber = state.subscriber,
          scheduler = state.scheduler;
      var buffer = subscriber.openBuffer();
      var action = this;
      if (!subscriber.isUnsubscribed) {
        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
          subscriber: subscriber,
          buffer: buffer
        }));
        action.schedule(state, bufferCreationInterval);
      }
    }
    function dispatchBufferClose(arg) {
      var subscriber = arg.subscriber,
          buffer = arg.buffer;
      subscriber.closeBuffer(buffer);
    }
  })($__require('github:jspm/nodelibs-buffer@0.1.0.js').Buffer);
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/bufferTime.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/bufferTime.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var bufferTime_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/bufferTime.js');
  Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/bufferToggle.js", ["npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "github:jspm/nodelibs-buffer@0.1.0.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
    var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
    var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
    function bufferToggle(openings, closingSelector) {
      return this.lift(new BufferToggleOperator(openings, closingSelector));
    }
    exports.bufferToggle = bufferToggle;
    var BufferToggleOperator = (function() {
      function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
      }
      BufferToggleOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
      };
      return BufferToggleOperator;
    }());
    var BufferToggleSubscriber = (function(_super) {
      __extends(BufferToggleSubscriber, _super);
      function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
      }
      BufferToggleSubscriber.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].buffer.push(value);
        }
      };
      BufferToggleSubscriber.prototype._error = function(err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
          var context = contexts.shift();
          context.subscription.unsubscribe();
          context.buffer = null;
          context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
      };
      BufferToggleSubscriber.prototype._complete = function() {
        var contexts = this.contexts;
        while (contexts.length > 0) {
          var context = contexts.shift();
          this.destination.next(context.buffer);
          context.subscription.unsubscribe();
          context.buffer = null;
          context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
      };
      BufferToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
      };
      BufferToggleSubscriber.prototype.notifyComplete = function(innerSub) {
        this.closeBuffer(innerSub.context);
      };
      BufferToggleSubscriber.prototype.openBuffer = function(value) {
        try {
          var closingSelector = this.closingSelector;
          var closingNotifier = closingSelector.call(this, value);
          if (closingNotifier) {
            this.trySubscribe(closingNotifier);
          }
        } catch (err) {
          this._error(err);
        }
      };
      BufferToggleSubscriber.prototype.closeBuffer = function(context) {
        var contexts = this.contexts;
        if (contexts && context) {
          var buffer = context.buffer,
              subscription = context.subscription;
          this.destination.next(buffer);
          contexts.splice(contexts.indexOf(context), 1);
          this.remove(subscription);
          subscription.unsubscribe();
        }
      };
      BufferToggleSubscriber.prototype.trySubscribe = function(closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = {
          buffer: buffer,
          subscription: subscription
        };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.isUnsubscribed) {
          this.closeBuffer(context);
        } else {
          innerSubscription.context = context;
          this.add(innerSubscription);
          subscription.add(innerSubscription);
        }
      };
      return BufferToggleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber));
  })($__require('github:jspm/nodelibs-buffer@0.1.0.js').Buffer);
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/bufferToggle.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/bufferToggle.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var bufferToggle_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/bufferToggle.js');
  Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
  return module.exports;
});

System.registerDynamic("npm:base64-js@0.0.8/lib/b64.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  ;
  (function(exports) {
    'use strict';
    var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);
    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
      if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
      if (code < NUMBER)
        return -1;
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
      if (code < UPPER + 26)
        return code - UPPER;
      if (code < LOWER + 26)
        return code - LOWER + 26;
    }
    function b64ToByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var len = b64.length;
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;
      function push(v) {
        arr[L++] = v;
      }
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    }
    function uint8ToBase64(uint8) {
      var i,
          extraBytes = uint8.length % 3,
          output = "",
          temp,
          length;
      function encode(num) {
        return lookup.charAt(num);
      }
      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      }
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output += tripletToBase64(temp);
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += '==';
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += '=';
          break;
      }
      return output;
    }
    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
  return module.exports;
});

System.registerDynamic("npm:base64-js@0.0.8.js", ["npm:base64-js@0.0.8/lib/b64.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:base64-js@0.0.8/lib/b64.js');
  return module.exports;
});

System.registerDynamic("npm:ieee754@1.1.6/index.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity);
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };
  return module.exports;
});

System.registerDynamic("npm:ieee754@1.1.6.js", ["npm:ieee754@1.1.6/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:ieee754@1.1.6/index.js');
  return module.exports;
});

System.registerDynamic("npm:isarray@1.0.0/index.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
  };
  return module.exports;
});

System.registerDynamic("npm:isarray@1.0.0.js", ["npm:isarray@1.0.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:isarray@1.0.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:buffer@3.6.0/index.js", ["npm:base64-js@0.0.8.js", "npm:ieee754@1.1.6.js", "npm:isarray@1.0.0.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var base64 = $__require('npm:base64-js@0.0.8.js');
  var ieee754 = $__require('npm:ieee754@1.1.6.js');
  var isArray = $__require('npm:isarray@1.0.0.js');
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192;
  var rootParent = {};
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function() {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
    } catch (e) {
      return false;
    }
  }
  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      if (arguments.length > 1)
        return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }
    return fromObject(this, arg);
  }
  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '')
      encoding = 'utf8';
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);
    that.write(string, encoding);
    return that;
  }
  function fromObject(that, object) {
    if (Buffer.isBuffer(object))
      return fromBuffer(that, object);
    if (isArray(object))
      return fromArray(that, object);
    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }
    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }
    if (object.length)
      return fromArrayLike(that, object);
    return fromJsonObject(that, object);
  }
  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }
  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromJsonObject(that, object) {
    var array;
    var length = 0;
    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  } else {
    Buffer.prototype.length = undefined;
    Buffer.prototype.parent = undefined;
  }
  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      that.length = length;
      that._isBuffer = true;
    }
    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool)
      that.parent = rootParent;
    return that;
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer))
      return new SlowBuffer(subject, encoding);
    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }
  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };
  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
      return 0;
    var x = a.length;
    var y = b.length;
    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i])
        break;
      ++i;
    }
    if (i !== len) {
      x = a[i];
      y = b[i];
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!isArray(list))
      throw new TypeError('list argument must be an Array of Buffers.');
    if (list.length === 0) {
      return new Buffer(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }
    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };
  function byteLength(string, encoding) {
    if (typeof string !== 'string')
      string = '' + string;
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;
    if (!encoding)
      encoding = 'utf8';
    if (start < 0)
      start = 0;
    if (end > this.length)
      end = this.length;
    if (end <= start)
      return '';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'binary':
          return binarySlice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0)
      return '';
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max)
        str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return 0;
    return Buffer.compare(this, b);
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff)
      byteOffset = 0x7fffffff;
    else if (byteOffset < -0x80000000)
      byteOffset = -0x80000000;
    byteOffset >>= 0;
    if (this.length === 0)
      return -1;
    if (byteOffset >= this.length)
      return -1;
    if (byteOffset < 0)
      byteOffset = Math.max(this.length + byteOffset, 0);
    if (typeof val === 'string') {
      if (val.length === 0)
        return -1;
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }
    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === val.length)
            return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }
    throw new TypeError('val must be string, number or Buffer');
  };
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new Error('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined)
          encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
      length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }
    if (!encoding)
      encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'binary':
          return binaryWrite(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte,
            thirdByte,
            fourthByte,
            tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }
    if (newBuf.length)
      newBuf.parent = this.parent || this;
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0)
      throw new RangeError('offset is not uint');
    if (offset + ext > length)
      throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8);
  };
  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1];
  };
  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
  };
  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
  };
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80))
      return (this[offset]);
    return ((0xff - this[offset] + 1) * -1);
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
  };
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
  }
  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffffffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }
  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    if (value < 0)
      value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0)
      value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
    if (offset < 0)
      throw new RangeError('index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
      throw new RangeError('sourceStart out of bounds');
    if (end < 0)
      throw new RangeError('sourceEnd out of bounds');
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value)
      value = 0;
    if (!start)
      start = 0;
    if (!end)
      end = this.length;
    if (end < start)
      throw new RangeError('end < start');
    if (end === start)
      return;
    if (this.length === 0)
      return;
    if (start < 0 || start >= this.length)
      throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length)
      throw new RangeError('end out of bounds');
    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }
    return this;
  };
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return (new Buffer(this)).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0,
            len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };
  var BP = Buffer.prototype;
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;
    arr._set = arr.set;
    arr.get = BP.get;
    arr.set = BP.set;
    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;
    return arr;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2)
      return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16)
      return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1)
            bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c,
        hi,
        lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if ((i + offset >= dst.length) || (i >= src.length))
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  return module.exports;
});

System.registerDynamic("npm:buffer@3.6.0.js", ["npm:buffer@3.6.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:buffer@3.6.0/index.js');
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-buffer@0.1.0/index.js", ["npm:buffer@3.6.0.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = System._nodeRequire ? System._nodeRequire('buffer') : $__require('npm:buffer@3.6.0.js');
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-buffer@0.1.0.js", ["github:jspm/nodelibs-buffer@0.1.0/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('github:jspm/nodelibs-buffer@0.1.0/index.js');
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/bufferWhen.js", ["npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "github:jspm/nodelibs-buffer@0.1.0.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
    var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
    var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
    var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
    var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
    function bufferWhen(closingSelector) {
      return this.lift(new BufferWhenOperator(closingSelector));
    }
    exports.bufferWhen = bufferWhen;
    var BufferWhenOperator = (function() {
      function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
      }
      BufferWhenOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
      };
      return BufferWhenOperator;
    }());
    var BufferWhenSubscriber = (function(_super) {
      __extends(BufferWhenSubscriber, _super);
      function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
      }
      BufferWhenSubscriber.prototype._next = function(value) {
        this.buffer.push(value);
      };
      BufferWhenSubscriber.prototype._complete = function() {
        var buffer = this.buffer;
        if (buffer) {
          this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
      };
      BufferWhenSubscriber.prototype._unsubscribe = function() {
        this.buffer = null;
        this.subscribing = false;
      };
      BufferWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
      };
      BufferWhenSubscriber.prototype.notifyComplete = function() {
        if (this.subscribing) {
          this.complete();
        } else {
          this.openBuffer();
        }
      };
      BufferWhenSubscriber.prototype.openBuffer = function() {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
          this.remove(closingSubscription);
          closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
          this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
          this.error(errorObject_1.errorObject.e);
        } else {
          closingSubscription = new Subscription_1.Subscription();
          this.closingSubscription = closingSubscription;
          this.add(closingSubscription);
          this.subscribing = true;
          closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
          this.subscribing = false;
        }
      };
      return BufferWhenSubscriber;
    }(OuterSubscriber_1.OuterSubscriber));
  })($__require('github:jspm/nodelibs-buffer@0.1.0.js').Buffer, $__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/bufferWhen.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/bufferWhen.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var bufferWhen_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/bufferWhen.js');
  Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/cache.js", ["npm:rxjs@5.0.0-beta.7/operator/publishReplay.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var publishReplay_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/publishReplay.js');
  function cache(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    return publishReplay_1.publishReplay.call(this, bufferSize, windowTime, scheduler).refCount();
  }
  exports.cache = cache;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/cache.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/cache.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var cache_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/cache.js');
  Observable_1.Observable.prototype.cache = cache_1.cache;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/catch.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function _catch(selector) {
    var operator = new CatchOperator(selector);
    var caught = this.lift(operator);
    return (operator.caught = caught);
  }
  exports._catch = _catch;
  var CatchOperator = (function() {
    function CatchOperator(selector) {
      this.selector = selector;
    }
    CatchOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
  }());
  var CatchSubscriber = (function(_super) {
    __extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
      _super.call(this, destination);
      this.selector = selector;
      this.caught = caught;
    }
    CatchSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var result = void 0;
        try {
          result = this.selector(err, this.caught);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this._innerSub(result);
      }
    };
    CatchSubscriber.prototype._innerSub = function(result) {
      this.unsubscribe();
      this.destination.remove(this);
      result.subscribe(this.destination);
    };
    return CatchSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/catch.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/catch.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var catch_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/catch.js');
  Observable_1.Observable.prototype.catch = catch_1._catch;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/combineAll.js", ["npm:rxjs@5.0.0-beta.7/operator/combineLatest.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var combineLatest_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/combineLatest.js');
  function combineAll(project) {
    return this.lift(new combineLatest_1.CombineLatestOperator(project));
  }
  exports.combineAll = combineAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/combineAll.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/combineAll.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var combineAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/combineAll.js');
  Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/combineLatest.js", ["npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    observables.unshift(this);
    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
  }
  exports.combineLatest = combineLatest;
  function combineLatestStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
      scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
      project = observables.pop();
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
  }
  exports.combineLatestStatic = combineLatestStatic;
  var CombineLatestOperator = (function() {
    function CombineLatestOperator(project) {
      this.project = project;
    }
    CombineLatestOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
  }());
  exports.CombineLatestOperator = CombineLatestOperator;
  var CombineLatestSubscriber = (function(_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
      _super.call(this, destination);
      this.project = project;
      this.active = 0;
      this.values = [];
      this.observables = [];
      this.toRespond = [];
    }
    CombineLatestSubscriber.prototype._next = function(observable) {
      var toRespond = this.toRespond;
      toRespond.push(toRespond.length);
      this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function() {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        this.active = len;
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
        }
      }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
      if ((this.active -= 1) === 0) {
        this.destination.complete();
      }
    };
    CombineLatestSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var values = this.values;
      values[outerIndex] = innerValue;
      var toRespond = this.toRespond;
      if (toRespond.length > 0) {
        var found = toRespond.indexOf(outerIndex);
        if (found !== -1) {
          toRespond.splice(found, 1);
        }
      }
      if (toRespond.length === 0) {
        if (this.project) {
          this._tryProject(values);
        } else {
          this.destination.next(values);
        }
      }
    };
    CombineLatestSubscriber.prototype._tryProject = function(values) {
      var result;
      try {
        result = this.project.apply(this, values);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return CombineLatestSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.CombineLatestSubscriber = CombineLatestSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/combineLatest.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/combineLatest.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var combineLatest_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/combineLatest.js');
  Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/concat.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/concat.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var concat_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/concat.js');
  Observable_1.Observable.prototype.concat = concat_1.concat;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/concatAll.js", ["npm:rxjs@5.0.0-beta.7/operator/mergeAll.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var mergeAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeAll.js');
  function concatAll() {
    return this.lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatAll = concatAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/concatAll.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/concatAll.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var concatAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/concatAll.js');
  Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/concatMap.js", ["npm:rxjs@5.0.0-beta.7/operator/mergeMap.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var mergeMap_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeMap.js');
  function concatMap(project, resultSelector) {
    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
  }
  exports.concatMap = concatMap;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/concatMap.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/concatMap.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var concatMap_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/concatMap.js');
  Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/concatMapTo.js", ["npm:rxjs@5.0.0-beta.7/operator/mergeMapTo.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var mergeMapTo_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeMapTo.js');
  function concatMapTo(innerObservable, resultSelector) {
    return this.lift(new mergeMapTo_1.MergeMapToOperator(innerObservable, resultSelector, 1));
  }
  exports.concatMapTo = concatMapTo;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/concatMapTo.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/concatMapTo.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var concatMapTo_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/concatMapTo.js');
  Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/count.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function count(predicate) {
    return this.lift(new CountOperator(predicate, this));
  }
  exports.count = count;
  var CountOperator = (function() {
    function CountOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    CountOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
  }());
  var CountSubscriber = (function(_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.count = 0;
      this.index = 0;
    }
    CountSubscriber.prototype._next = function(value) {
      if (this.predicate) {
        this._tryPredicate(value);
      } else {
        this.count++;
      }
    };
    CountSubscriber.prototype._tryPredicate = function(value) {
      var result;
      try {
        result = this.predicate(value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.count++;
      }
    };
    CountSubscriber.prototype._complete = function() {
      this.destination.next(this.count);
      this.destination.complete();
    };
    return CountSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/count.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/count.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var count_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/count.js');
  Observable_1.Observable.prototype.count = count_1.count;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/dematerialize.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function dematerialize() {
    return this.lift(new DeMaterializeOperator());
  }
  exports.dematerialize = dematerialize;
  var DeMaterializeOperator = (function() {
    function DeMaterializeOperator() {}
    DeMaterializeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
  }());
  var DeMaterializeSubscriber = (function(_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function(value) {
      value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/dematerialize.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/dematerialize.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var dematerialize_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/dematerialize.js');
  Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/debounce.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function debounce(durationSelector) {
    return this.lift(new DebounceOperator(durationSelector));
  }
  exports.debounce = debounce;
  var DebounceOperator = (function() {
    function DebounceOperator(durationSelector) {
      this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
  }());
  var DebounceSubscriber = (function(_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
      _super.call(this, destination);
      this.durationSelector = durationSelector;
      this.hasValue = false;
      this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function(value) {
      try {
        var result = this.durationSelector.call(this, value);
        if (result) {
          this._tryNext(value, result);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DebounceSubscriber.prototype._complete = function() {
      this.emitValue();
      this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function(value, duration) {
      var subscription = this.durationSubscription;
      this.value = value;
      this.hasValue = true;
      if (subscription) {
        subscription.unsubscribe();
        this.remove(subscription);
      }
      subscription = subscribeToResult_1.subscribeToResult(this, duration);
      if (!subscription.isUnsubscribed) {
        this.add(this.durationSubscription = subscription);
      }
    };
    DebounceSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function() {
      this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function() {
      if (this.hasValue) {
        var value = this.value;
        var subscription = this.durationSubscription;
        if (subscription) {
          this.durationSubscription = null;
          subscription.unsubscribe();
          this.remove(subscription);
        }
        this.value = null;
        this.hasValue = false;
        _super.prototype._next.call(this, value);
      }
    };
    return DebounceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/debounce.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/debounce.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var debounce_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/debounce.js');
  Observable_1.Observable.prototype.debounce = debounce_1.debounce;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/debounceTime.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
  }
  exports.debounceTime = debounceTime;
  var DebounceTimeOperator = (function() {
    function DebounceTimeOperator(dueTime, scheduler) {
      this.dueTime = dueTime;
      this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
  }());
  var DebounceTimeSubscriber = (function(_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
      _super.call(this, destination);
      this.dueTime = dueTime;
      this.scheduler = scheduler;
      this.debouncedSubscription = null;
      this.lastValue = null;
      this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function(value) {
      this.clearDebounce();
      this.lastValue = value;
      this.hasValue = true;
      this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function() {
      this.debouncedNext();
      this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function() {
      this.clearDebounce();
      if (this.hasValue) {
        this.destination.next(this.lastValue);
        this.lastValue = null;
        this.hasValue = false;
      }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function() {
      var debouncedSubscription = this.debouncedSubscription;
      if (debouncedSubscription !== null) {
        this.remove(debouncedSubscription);
        debouncedSubscription.unsubscribe();
        this.debouncedSubscription = null;
      }
    };
    return DebounceTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNext(subscriber) {
    subscriber.debouncedNext();
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/debounceTime.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/debounceTime.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var debounceTime_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/debounceTime.js');
  Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/defaultIfEmpty.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = null;
    }
    return this.lift(new DefaultIfEmptyOperator(defaultValue));
  }
  exports.defaultIfEmpty = defaultIfEmpty;
  var DefaultIfEmptyOperator = (function() {
    function DefaultIfEmptyOperator(defaultValue) {
      this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
  }());
  var DefaultIfEmptySubscriber = (function(_super) {
    __extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
      _super.call(this, destination);
      this.defaultValue = defaultValue;
      this.isEmpty = true;
    }
    DefaultIfEmptySubscriber.prototype._next = function(value) {
      this.isEmpty = false;
      this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function() {
      if (this.isEmpty) {
        this.destination.next(this.defaultValue);
      }
      this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/defaultIfEmpty.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/defaultIfEmpty.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var defaultIfEmpty_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/defaultIfEmpty.js');
  Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/delay.js", ["npm:rxjs@5.0.0-beta.7/scheduler/async.js", "npm:rxjs@5.0.0-beta.7/util/isDate.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Notification.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  var isDate_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isDate.js');
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Notification_1 = $__require('npm:rxjs@5.0.0-beta.7/Notification.js');
  function delay(delay, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteDelay = isDate_1.isDate(delay);
    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
    return this.lift(new DelayOperator(delayFor, scheduler));
  }
  exports.delay = delay;
  var DelayOperator = (function() {
    function DelayOperator(delay, scheduler) {
      this.delay = delay;
      this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
  }());
  var DelaySubscriber = (function(_super) {
    __extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
      _super.call(this, destination);
      this.delay = delay;
      this.scheduler = scheduler;
      this.queue = [];
      this.active = false;
      this.errored = false;
    }
    DelaySubscriber.dispatch = function(state) {
      var source = state.source;
      var queue = source.queue;
      var scheduler = state.scheduler;
      var destination = state.destination;
      while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
        queue.shift().notification.observe(destination);
      }
      if (queue.length > 0) {
        var delay_1 = Math.max(0, queue[0].time - scheduler.now());
        this.schedule(state, delay_1);
      } else {
        source.active = false;
      }
    };
    DelaySubscriber.prototype._schedule = function(scheduler) {
      this.active = true;
      this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
        source: this,
        destination: this.destination,
        scheduler: scheduler
      }));
    };
    DelaySubscriber.prototype.scheduleNotification = function(notification) {
      if (this.errored === true) {
        return;
      }
      var scheduler = this.scheduler;
      var message = new DelayMessage(scheduler.now() + this.delay, notification);
      this.queue.push(message);
      if (this.active === false) {
        this._schedule(scheduler);
      }
    };
    DelaySubscriber.prototype._next = function(value) {
      this.scheduleNotification(Notification_1.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function(err) {
      this.errored = true;
      this.queue = [];
      this.destination.error(err);
    };
    DelaySubscriber.prototype._complete = function() {
      this.scheduleNotification(Notification_1.Notification.createComplete());
    };
    return DelaySubscriber;
  }(Subscriber_1.Subscriber));
  var DelayMessage = (function() {
    function DelayMessage(time, notification) {
      this.time = time;
      this.notification = notification;
    }
    return DelayMessage;
  }());
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/delay.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/delay.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var delay_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/delay.js');
  Observable_1.Observable.prototype.delay = delay_1.delay;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/delayWhen.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
      return new SubscriptionDelayObservable(this, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    }
    return this.lift(new DelayWhenOperator(delayDurationSelector));
  }
  exports.delayWhen = delayWhen;
  var DelayWhenOperator = (function() {
    function DelayWhenOperator(delayDurationSelector) {
      this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
  }());
  var DelayWhenSubscriber = (function(_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
      _super.call(this, destination);
      this.delayDurationSelector = delayDurationSelector;
      this.completed = false;
      this.delayNotifierSubscriptions = [];
      this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(outerValue);
      this.removeSubscription(innerSub);
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function(innerSub) {
      var value = this.removeSubscription(innerSub);
      if (value) {
        this.destination.next(value);
      }
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function(value) {
      try {
        var delayNotifier = this.delayDurationSelector(value);
        if (delayNotifier) {
          this.tryDelay(delayNotifier, value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    DelayWhenSubscriber.prototype._complete = function() {
      this.completed = true;
      this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function(subscription) {
      subscription.unsubscribe();
      var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
      var value = null;
      if (subscriptionIdx !== -1) {
        value = this.values[subscriptionIdx];
        this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        this.values.splice(subscriptionIdx, 1);
      }
      return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function(delayNotifier, value) {
      var notifierSubscription = subscribeToResult_1.subscribeToResult(this, delayNotifier, value);
      this.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
      this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function() {
      if (this.completed && this.delayNotifierSubscriptions.length === 0) {
        this.destination.complete();
      }
    };
    return DelayWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  var SubscriptionDelayObservable = (function(_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
      _super.call(this);
      this.source = source;
      this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function(subscriber) {
      this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
  }(Observable_1.Observable));
  var SubscriptionDelaySubscriber = (function(_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
      _super.call(this);
      this.parent = parent;
      this.source = source;
      this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function(unused) {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function(err) {
      this.unsubscribe();
      this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function() {
      this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function() {
      if (!this.sourceSubscribed) {
        this.sourceSubscribed = true;
        this.unsubscribe();
        this.source.subscribe(this.parent);
      }
    };
    return SubscriptionDelaySubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/delayWhen.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/delayWhen.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var delayWhen_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/delayWhen.js');
  Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/distinctUntilChanged.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  function distinctUntilChanged(compare, keySelector) {
    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
  }
  exports.distinctUntilChanged = distinctUntilChanged;
  var DistinctUntilChangedOperator = (function() {
    function DistinctUntilChangedOperator(compare, keySelector) {
      this.compare = compare;
      this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
  }());
  var DistinctUntilChangedSubscriber = (function(_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
      _super.call(this, destination);
      this.keySelector = keySelector;
      this.hasKey = false;
      if (typeof compare === 'function') {
        this.compare = compare;
      }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function(x, y) {
      return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function(value) {
      var keySelector = this.keySelector;
      var key = value;
      if (keySelector) {
        key = tryCatch_1.tryCatch(this.keySelector)(value);
        if (key === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      }
      var result = false;
      if (this.hasKey) {
        result = tryCatch_1.tryCatch(this.compare)(this.key, key);
        if (result === errorObject_1.errorObject) {
          return this.destination.error(errorObject_1.errorObject.e);
        }
      } else {
        this.hasKey = true;
      }
      if (Boolean(result) === false) {
        this.key = key;
        this.destination.next(value);
      }
    };
    return DistinctUntilChangedSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/distinctUntilChanged.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/distinctUntilChanged.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var distinctUntilChanged_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/distinctUntilChanged.js');
  Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/do.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function _do(nextOrObserver, error, complete) {
    return this.lift(new DoOperator(nextOrObserver, error, complete));
  }
  exports._do = _do;
  var DoOperator = (function() {
    function DoOperator(nextOrObserver, error, complete) {
      this.nextOrObserver = nextOrObserver;
      this.error = error;
      this.complete = complete;
    }
    DoOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
  }());
  var DoSubscriber = (function(_super) {
    __extends(DoSubscriber, _super);
    function DoSubscriber(destination, nextOrObserver, error, complete) {
      _super.call(this, destination);
      var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      safeSubscriber.syncErrorThrowable = true;
      this.add(safeSubscriber);
      this.safeSubscriber = safeSubscriber;
    }
    DoSubscriber.prototype._next = function(value) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.next(value);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.next(value);
      }
    };
    DoSubscriber.prototype._error = function(err) {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.error(err);
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.error(err);
      }
    };
    DoSubscriber.prototype._complete = function() {
      var safeSubscriber = this.safeSubscriber;
      safeSubscriber.complete();
      if (safeSubscriber.syncErrorThrown) {
        this.destination.error(safeSubscriber.syncErrorValue);
      } else {
        this.destination.complete();
      }
    };
    return DoSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/do.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/do.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var do_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/do.js');
  Observable_1.Observable.prototype.do = do_1._do;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/expand.js", ["npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
      scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return this.lift(new ExpandOperator(project, concurrent, scheduler));
  }
  exports.expand = expand;
  var ExpandOperator = (function() {
    function ExpandOperator(project, concurrent, scheduler) {
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
  }());
  exports.ExpandOperator = ExpandOperator;
  var ExpandSubscriber = (function(_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
      _super.call(this, destination);
      this.project = project;
      this.concurrent = concurrent;
      this.scheduler = scheduler;
      this.index = 0;
      this.active = 0;
      this.hasCompleted = false;
      if (concurrent < Number.POSITIVE_INFINITY) {
        this.buffer = [];
      }
    }
    ExpandSubscriber.dispatch = function(arg) {
      var subscriber = arg.subscriber,
          result = arg.result,
          value = arg.value,
          index = arg.index;
      subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (destination.isUnsubscribed) {
        this._complete();
        return;
      }
      var index = this.index++;
      if (this.active < this.concurrent) {
        destination.next(value);
        var result = tryCatch_1.tryCatch(this.project)(value, index);
        if (result === errorObject_1.errorObject) {
          destination.error(errorObject_1.errorObject.e);
        } else if (!this.scheduler) {
          this.subscribeToProjection(result, value, index);
        } else {
          var state = {
            subscriber: this,
            result: result,
            value: value,
            index: index
          };
          this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
        }
      } else {
        this.buffer.push(value);
      }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function(result, value, index) {
      this.active++;
      this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    ExpandSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer && buffer.length > 0) {
        this._next(buffer.shift());
      }
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return ExpandSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.ExpandSubscriber = ExpandSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/expand.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/expand.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var expand_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/expand.js');
  Observable_1.Observable.prototype.expand = expand_1.expand;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/filter.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/filter.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var filter_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/filter.js');
  Observable_1.Observable.prototype.filter = filter_1.filter;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/finally.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Subscription.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  function _finally(finallySelector) {
    return this.lift(new FinallyOperator(finallySelector));
  }
  exports._finally = _finally;
  var FinallyOperator = (function() {
    function FinallyOperator(finallySelector) {
      this.finallySelector = finallySelector;
    }
    FinallyOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
    };
    return FinallyOperator;
  }());
  var FinallySubscriber = (function(_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, finallySelector) {
      _super.call(this, destination);
      this.add(new Subscription_1.Subscription(finallySelector));
    }
    return FinallySubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/finally.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/finally.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var finally_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/finally.js');
  Observable_1.Observable.prototype.finally = finally_1._finally;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/first.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/EmptyError.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var EmptyError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/EmptyError.js');
  function first(predicate, resultSelector, defaultValue) {
    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.first = first;
  var FirstOperator = (function() {
    function FirstOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    FirstOperator.prototype.call = function(observer, source) {
      return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return FirstOperator;
  }());
  var FirstSubscriber = (function(_super) {
    __extends(FirstSubscriber, _super);
    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.index = 0;
      this.hasCompleted = false;
    }
    FirstSubscriber.prototype._next = function(value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._tryPredicate = function(value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this._emit(value, index);
      }
    };
    FirstSubscriber.prototype._emit = function(value, index) {
      if (this.resultSelector) {
        this._tryResultSelector(value, index);
        return;
      }
      this._emitFinal(value);
    };
    FirstSubscriber.prototype._tryResultSelector = function(value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this._emitFinal(result);
    };
    FirstSubscriber.prototype._emitFinal = function(value) {
      var destination = this.destination;
      destination.next(value);
      destination.complete();
      this.hasCompleted = true;
    };
    FirstSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
        destination.next(this.defaultValue);
        destination.complete();
      } else if (!this.hasCompleted) {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return FirstSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/first.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/first.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var first_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/first.js');
  Observable_1.Observable.prototype.first = first_1.first;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/MapPolyfill.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MapPolyfill = (function() {
    function MapPolyfill() {
      this.size = 0;
      this._values = [];
      this._keys = [];
    }
    MapPolyfill.prototype.get = function(key) {
      var i = this._keys.indexOf(key);
      return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function(key, value) {
      var i = this._keys.indexOf(key);
      if (i === -1) {
        this._keys.push(key);
        this._values.push(value);
        this.size++;
      } else {
        this._values[i] = value;
      }
      return this;
    };
    MapPolyfill.prototype.delete = function(key) {
      var i = this._keys.indexOf(key);
      if (i === -1) {
        return false;
      }
      this._values.splice(i, 1);
      this._keys.splice(i, 1);
      this.size--;
      return true;
    };
    MapPolyfill.prototype.clear = function() {
      this._keys.length = 0;
      this._values.length = 0;
      this.size = 0;
    };
    MapPolyfill.prototype.forEach = function(cb, thisArg) {
      for (var i = 0; i < this.size; i++) {
        cb.call(thisArg, this._values[i], this._keys[i]);
      }
    };
    return MapPolyfill;
  }());
  exports.MapPolyfill = MapPolyfill;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/Map.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "npm:rxjs@5.0.0-beta.7/util/MapPolyfill.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var MapPolyfill_1 = $__require('npm:rxjs@5.0.0-beta.7/util/MapPolyfill.js');
  exports.Map = root_1.root.Map || (function() {
    return MapPolyfill_1.MapPolyfill;
  })();
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/FastMap.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FastMap = (function() {
    function FastMap() {
      this.values = {};
    }
    FastMap.prototype.delete = function(key) {
      this.values[key] = null;
      return true;
    };
    FastMap.prototype.set = function(key, value) {
      this.values[key] = value;
      return this;
    };
    FastMap.prototype.get = function(key) {
      return this.values[key];
    };
    FastMap.prototype.forEach = function(cb, thisArg) {
      var values = this.values;
      for (var key in values) {
        if (values.hasOwnProperty(key) && values[key] !== null) {
          cb.call(thisArg, values[key], key);
        }
      }
    };
    FastMap.prototype.clear = function() {
      this.values = {};
    };
    return FastMap;
  }());
  exports.FastMap = FastMap;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/groupBy.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/util/Map.js", "npm:rxjs@5.0.0-beta.7/util/FastMap.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var Map_1 = $__require('npm:rxjs@5.0.0-beta.7/util/Map.js');
  var FastMap_1 = $__require('npm:rxjs@5.0.0-beta.7/util/FastMap.js');
  function groupBy(keySelector, elementSelector, durationSelector) {
    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
  }
  exports.groupBy = groupBy;
  var GroupByOperator = (function() {
    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
      this.source = source;
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
    }
    GroupByOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
    };
    return GroupByOperator;
  }());
  var GroupBySubscriber = (function(_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
      _super.call(this);
      this.keySelector = keySelector;
      this.elementSelector = elementSelector;
      this.durationSelector = durationSelector;
      this.groups = null;
      this.attemptedToUnsubscribe = false;
      this.count = 0;
      this.destination = destination;
      this.add(destination);
    }
    GroupBySubscriber.prototype._next = function(value) {
      var key;
      try {
        key = this.keySelector(value);
      } catch (err) {
        this.error(err);
        return;
      }
      this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function(value, key) {
      var groups = this.groups;
      if (!groups) {
        groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
      }
      var group = groups.get(key);
      if (!group) {
        groups.set(key, group = new Subject_1.Subject());
        var groupedObservable = new GroupedObservable(key, group, this);
        if (this.durationSelector) {
          this._selectDuration(key, group);
        }
        this.destination.next(groupedObservable);
      }
      if (this.elementSelector) {
        this._selectElement(value, group);
      } else {
        this.tryGroupNext(value, group);
      }
    };
    GroupBySubscriber.prototype._selectElement = function(value, group) {
      var result;
      try {
        result = this.elementSelector(value);
      } catch (err) {
        this.error(err);
        return;
      }
      this.tryGroupNext(result, group);
    };
    GroupBySubscriber.prototype._selectDuration = function(key, group) {
      var duration;
      try {
        duration = this.durationSelector(new GroupedObservable(key, group));
      } catch (err) {
        this.error(err);
        return;
      }
      this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
    };
    GroupBySubscriber.prototype.tryGroupNext = function(value, group) {
      if (!group.isUnsubscribed) {
        group.next(value);
      }
    };
    GroupBySubscriber.prototype._error = function(err) {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function(group, key) {
          group.error(err);
        });
        groups.clear();
      }
      this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function() {
      var groups = this.groups;
      if (groups) {
        groups.forEach(function(group, key) {
          group.complete();
        });
        groups.clear();
      }
      this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function(key) {
      this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function() {
      if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
        this.attemptedToUnsubscribe = true;
        if (this.count === 0) {
          _super.prototype.unsubscribe.call(this);
        }
      }
    };
    return GroupBySubscriber;
  }(Subscriber_1.Subscriber));
  var GroupDurationSubscriber = (function(_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
      _super.call(this);
      this.key = key;
      this.group = group;
      this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function(value) {
      this.tryComplete();
    };
    GroupDurationSubscriber.prototype._error = function(err) {
      this.tryError(err);
    };
    GroupDurationSubscriber.prototype._complete = function() {
      this.tryComplete();
    };
    GroupDurationSubscriber.prototype.tryError = function(err) {
      var group = this.group;
      if (!group.isUnsubscribed) {
        group.error(err);
      }
      this.parent.removeGroup(this.key);
    };
    GroupDurationSubscriber.prototype.tryComplete = function() {
      var group = this.group;
      if (!group.isUnsubscribed) {
        group.complete();
      }
      this.parent.removeGroup(this.key);
    };
    return GroupDurationSubscriber;
  }(Subscriber_1.Subscriber));
  var GroupedObservable = (function(_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
      _super.call(this);
      this.key = key;
      this.groupSubject = groupSubject;
      this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function(subscriber) {
      var subscription = new Subscription_1.Subscription();
      var _a = this,
          refCountSubscription = _a.refCountSubscription,
          groupSubject = _a.groupSubject;
      if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
        subscription.add(new InnerRefCountSubscription(refCountSubscription));
      }
      subscription.add(groupSubject.subscribe(subscriber));
      return subscription;
    };
    return GroupedObservable;
  }(Observable_1.Observable));
  exports.GroupedObservable = GroupedObservable;
  var InnerRefCountSubscription = (function(_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
      _super.call(this);
      this.parent = parent;
      parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function() {
      var parent = this.parent;
      if (!parent.isUnsubscribed && !this.isUnsubscribed) {
        _super.prototype.unsubscribe.call(this);
        parent.count -= 1;
        if (parent.count === 0 && parent.attemptedToUnsubscribe) {
          parent.unsubscribe();
        }
      }
    };
    return InnerRefCountSubscription;
  }(Subscription_1.Subscription));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/groupBy.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/groupBy.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var groupBy_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/groupBy.js');
  Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/noop.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function noop() {}
  exports.noop = noop;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/ignoreElements.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/noop.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var noop_1 = $__require('npm:rxjs@5.0.0-beta.7/util/noop.js');
  function ignoreElements() {
    return this.lift(new IgnoreElementsOperator());
  }
  exports.ignoreElements = ignoreElements;
  ;
  var IgnoreElementsOperator = (function() {
    function IgnoreElementsOperator() {}
    IgnoreElementsOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
  }());
  var IgnoreElementsSubscriber = (function(_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
      _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function(unused) {
      noop_1.noop();
    };
    return IgnoreElementsSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/ignoreElements.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/ignoreElements.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var ignoreElements_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/ignoreElements.js');
  Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/audit.js", ["npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
    var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
    var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
    var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
    function audit(durationSelector) {
      return this.lift(new AuditOperator(durationSelector));
    }
    exports.audit = audit;
    var AuditOperator = (function() {
      function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
      }
      AuditOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
      };
      return AuditOperator;
    }());
    var AuditSubscriber = (function(_super) {
      __extends(AuditSubscriber, _super);
      function AuditSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
      }
      AuditSubscriber.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
          var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
          if (duration === errorObject_1.errorObject) {
            this.destination.error(errorObject_1.errorObject.e);
          } else {
            this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
          }
        }
      };
      AuditSubscriber.prototype.clearThrottle = function() {
        var _a = this,
            value = _a.value,
            hasValue = _a.hasValue,
            throttled = _a.throttled;
        if (throttled) {
          this.remove(throttled);
          this.throttled = null;
          throttled.unsubscribe();
        }
        if (hasValue) {
          this.value = null;
          this.hasValue = false;
          this.destination.next(value);
        }
      };
      AuditSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
        this.clearThrottle();
      };
      AuditSubscriber.prototype.notifyComplete = function() {
        this.clearThrottle();
      };
      return AuditSubscriber;
    }(OuterSubscriber_1.OuterSubscriber));
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/audit.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/audit.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var audit_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/audit.js');
  Observable_1.Observable.prototype.audit = audit_1.audit;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/auditTime.js", ["npm:rxjs@5.0.0-beta.7/scheduler/async.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
    var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
    function auditTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return this.lift(new AuditTimeOperator(duration, scheduler));
    }
    exports.auditTime = auditTime;
    var AuditTimeOperator = (function() {
      function AuditTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
      }
      AuditTimeOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
      };
      return AuditTimeOperator;
    }());
    var AuditTimeSubscriber = (function(_super) {
      __extends(AuditTimeSubscriber, _super);
      function AuditTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.hasValue = false;
      }
      AuditTimeSubscriber.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
          this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
        }
      };
      AuditTimeSubscriber.prototype.clearThrottle = function() {
        var _a = this,
            value = _a.value,
            hasValue = _a.hasValue,
            throttled = _a.throttled;
        if (throttled) {
          this.remove(throttled);
          this.throttled = null;
          throttled.unsubscribe();
        }
        if (hasValue) {
          this.value = null;
          this.hasValue = false;
          this.destination.next(value);
        }
      };
      return AuditTimeSubscriber;
    }(Subscriber_1.Subscriber));
    function dispatchNext(subscriber) {
      subscriber.clearThrottle();
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/auditTime.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/auditTime.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var auditTime_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/auditTime.js');
  Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/last.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/EmptyError.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var EmptyError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/EmptyError.js');
  function last(predicate, resultSelector, defaultValue) {
    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
  }
  exports.last = last;
  var LastOperator = (function() {
    function LastOperator(predicate, resultSelector, defaultValue, source) {
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
    }
    LastOperator.prototype.call = function(observer, source) {
      return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
    };
    return LastOperator;
  }());
  var LastSubscriber = (function(_super) {
    __extends(LastSubscriber, _super);
    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.resultSelector = resultSelector;
      this.defaultValue = defaultValue;
      this.source = source;
      this.hasValue = false;
      this.index = 0;
      if (typeof defaultValue !== 'undefined') {
        this.lastValue = defaultValue;
        this.hasValue = true;
      }
    }
    LastSubscriber.prototype._next = function(value) {
      var index = this.index++;
      if (this.predicate) {
        this._tryPredicate(value, index);
      } else {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryPredicate = function(value, index) {
      var result;
      try {
        result = this.predicate(value, index, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        if (this.resultSelector) {
          this._tryResultSelector(value, index);
          return;
        }
        this.lastValue = value;
        this.hasValue = true;
      }
    };
    LastSubscriber.prototype._tryResultSelector = function(value, index) {
      var result;
      try {
        result = this.resultSelector(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.lastValue = result;
      this.hasValue = true;
    };
    LastSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.hasValue) {
        destination.next(this.lastValue);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return LastSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/last.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/last.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var last_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/last.js');
  Observable_1.Observable.prototype.last = last_1.last;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/let.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function letProto(func) {
    return func(this);
  }
  exports.letProto = letProto;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/let.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/let.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var let_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/let.js');
  Observable_1.Observable.prototype.let = let_1.letProto;
  Observable_1.Observable.prototype.letBind = let_1.letProto;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/every.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function every(predicate, thisArg) {
    return this.lift(new EveryOperator(predicate, thisArg, this));
  }
  exports.every = every;
  var EveryOperator = (function() {
    function EveryOperator(predicate, thisArg, source) {
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
    }
    EveryOperator.prototype.call = function(observer, source) {
      return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
  }());
  var EverySubscriber = (function(_super) {
    __extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.source = source;
      this.index = 0;
      this.thisArg = thisArg || this;
    }
    EverySubscriber.prototype.notifyComplete = function(everyValueMatch) {
      this.destination.next(everyValueMatch);
      this.destination.complete();
    };
    EverySubscriber.prototype._next = function(value) {
      var result = false;
      try {
        result = this.predicate.call(this.thisArg, value, this.index++, this.source);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (!result) {
        this.notifyComplete(false);
      }
    };
    EverySubscriber.prototype._complete = function() {
      this.notifyComplete(true);
    };
    return EverySubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/every.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/every.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var every_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/every.js');
  Observable_1.Observable.prototype.every = every_1.every;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/map.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/map.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var map_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/map.js');
  Observable_1.Observable.prototype.map = map_1.map;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/mapTo.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function mapTo(value) {
    return this.lift(new MapToOperator(value));
  }
  exports.mapTo = mapTo;
  var MapToOperator = (function() {
    function MapToOperator(value) {
      this.value = value;
    }
    MapToOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
  }());
  var MapToSubscriber = (function(_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
      _super.call(this, destination);
      this.value = value;
    }
    MapToSubscriber.prototype._next = function(x) {
      this.destination.next(this.value);
    };
    return MapToSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/mapTo.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/mapTo.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var mapTo_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mapTo.js');
  Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/materialize.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Notification.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Notification_1 = $__require('npm:rxjs@5.0.0-beta.7/Notification.js');
  function materialize() {
    return this.lift(new MaterializeOperator());
  }
  exports.materialize = materialize;
  var MaterializeOperator = (function() {
    function MaterializeOperator() {}
    MaterializeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
  }());
  var MaterializeSubscriber = (function(_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
      _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function(value) {
      this.destination.next(Notification_1.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function(err) {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createError(err));
      destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function() {
      var destination = this.destination;
      destination.next(Notification_1.Notification.createComplete());
      destination.complete();
    };
    return MaterializeSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/materialize.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/materialize.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var materialize_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/materialize.js');
  Observable_1.Observable.prototype.materialize = materialize_1.materialize;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/merge.js", ["npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/operator/mergeAll.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var mergeAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeAll.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return mergeStatic.apply(this, observables);
  }
  exports.merge = merge;
  function mergeStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
      scheduler = observables.pop();
      if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
        concurrent = observables.pop();
      }
    } else if (typeof last === 'number') {
      concurrent = observables.pop();
    }
    if (observables.length === 1) {
      return observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
  }
  exports.mergeStatic = mergeStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/merge.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/merge.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var merge_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/merge.js');
  Observable_1.Observable.prototype.merge = merge_1.merge;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/mergeAll.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/mergeAll.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var mergeAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeAll.js');
  Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/mergeMap.js", ["npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
      concurrent = resultSelector;
      resultSelector = null;
    }
    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
  }
  exports.mergeMap = mergeMap;
  var MergeMapOperator = (function() {
    function MergeMapOperator(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function(observer, source) {
      return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
    };
    return MergeMapOperator;
  }());
  exports.MergeMapOperator = MergeMapOperator;
  var MergeMapSubscriber = (function(_super) {
    __extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        this._tryNext(value);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapSubscriber.prototype._tryNext = function(value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.active++;
      this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function(ish, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    MergeMapSubscriber.prototype._notifyResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    MergeMapSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeMapSubscriber = MergeMapSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/mergeMap.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/mergeMap.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var mergeMap_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeMap.js');
  Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
  Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/mergeMapTo.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
      concurrent = resultSelector;
      resultSelector = null;
    }
    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
  }
  exports.mergeMapTo = mergeMapTo;
  var MergeMapToOperator = (function() {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function(observer, source) {
      return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
  }());
  exports.MergeMapToOperator = MergeMapToOperator;
  var MergeMapToSubscriber = (function(_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
      }
      _super.call(this, destination);
      this.ish = ish;
      this.resultSelector = resultSelector;
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
      this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function(value) {
      if (this.active < this.concurrent) {
        var resultSelector = this.resultSelector;
        var index = this.index++;
        var ish = this.ish;
        var destination = this.destination;
        this.active++;
        this._innerSub(ish, destination, resultSelector, value, index);
      } else {
        this.buffer.push(value);
      }
    };
    MergeMapToSubscriber.prototype._innerSub = function(ish, destination, resultSelector, value, index) {
      this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeMapToSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeMapToSubscriber = MergeMapToSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/mergeMapTo.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/mergeMapTo.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var mergeMapTo_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeMapTo.js');
  Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
  Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/multicast.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/multicast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var multicast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/multicast.js');
  Observable_1.Observable.prototype.multicast = multicast_1.multicast;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/observeOn.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/observeOn.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var observeOn_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/observeOn.js');
  Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/not.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function not(pred, thisArg) {
    function notPred() {
      return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
  }
  exports.not = not;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/filter.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function filter(predicate, thisArg) {
    return this.lift(new FilterOperator(predicate, thisArg));
  }
  exports.filter = filter;
  var FilterOperator = (function() {
    function FilterOperator(predicate, thisArg) {
      this.predicate = predicate;
      this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
  }());
  var FilterSubscriber = (function(_super) {
    __extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.thisArg = thisArg;
      this.count = 0;
      this.predicate = predicate;
    }
    FilterSubscriber.prototype._next = function(value) {
      var result;
      try {
        result = this.predicate.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      if (result) {
        this.destination.next(value);
      }
    };
    return FilterSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/partition.js", ["npm:rxjs@5.0.0-beta.7/util/not.js", "npm:rxjs@5.0.0-beta.7/operator/filter.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var not_1 = $__require('npm:rxjs@5.0.0-beta.7/util/not.js');
  var filter_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/filter.js');
  function partition(predicate, thisArg) {
    return [filter_1.filter.call(this, predicate), filter_1.filter.call(this, not_1.not(predicate, thisArg))];
  }
  exports.partition = partition;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/partition.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/partition.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var partition_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/partition.js');
  Observable_1.Observable.prototype.partition = partition_1.partition;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/map.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function map(project, thisArg) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return this.lift(new MapOperator(project, thisArg));
  }
  exports.map = map;
  var MapOperator = (function() {
    function MapOperator(project, thisArg) {
      this.project = project;
      this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
  }());
  var MapSubscriber = (function(_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
      _super.call(this, destination);
      this.project = project;
      this.count = 0;
      this.thisArg = thisArg || this;
    }
    MapSubscriber.prototype._next = function(value) {
      var result;
      try {
        result = this.project.call(this.thisArg, value, this.count++);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return MapSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/pluck.js", ["npm:rxjs@5.0.0-beta.7/operator/map.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var map_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/map.js');
  function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
      throw new Error('List of properties cannot be empty.');
    }
    return map_1.map.call(this, plucker(properties, length));
  }
  exports.pluck = pluck;
  function plucker(props, length) {
    var mapper = function(x) {
      var currentProp = x;
      for (var i = 0; i < length; i++) {
        var p = currentProp[props[i]];
        if (typeof p !== 'undefined') {
          currentProp = p;
        } else {
          return undefined;
        }
      }
      return currentProp;
    };
    return mapper;
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/pluck.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/pluck.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var pluck_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/pluck.js');
  Observable_1.Observable.prototype.pluck = pluck_1.pluck;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/publish.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/operator/multicast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var multicast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/multicast.js');
  function publish() {
    return multicast_1.multicast.call(this, new Subject_1.Subject());
  }
  exports.publish = publish;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/publish.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/publish.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var publish_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/publish.js');
  Observable_1.Observable.prototype.publish = publish_1.publish;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/publishBehavior.js", ["npm:rxjs@5.0.0-beta.7/BehaviorSubject.js", "npm:rxjs@5.0.0-beta.7/operator/multicast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var BehaviorSubject_1 = $__require('npm:rxjs@5.0.0-beta.7/BehaviorSubject.js');
  var multicast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/multicast.js');
  function publishBehavior(value) {
    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
  }
  exports.publishBehavior = publishBehavior;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/publishBehavior.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/publishBehavior.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var publishBehavior_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/publishBehavior.js');
  Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/publishReplay.js", ["npm:rxjs@5.0.0-beta.7/ReplaySubject.js", "npm:rxjs@5.0.0-beta.7/operator/multicast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ReplaySubject_1 = $__require('npm:rxjs@5.0.0-beta.7/ReplaySubject.js');
  var multicast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/multicast.js');
  function publishReplay(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }
    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }
    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
  }
  exports.publishReplay = publishReplay;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/publishReplay.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/publishReplay.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var publishReplay_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/publishReplay.js');
  Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/publishLast.js", ["npm:rxjs@5.0.0-beta.7/AsyncSubject.js", "npm:rxjs@5.0.0-beta.7/operator/multicast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var AsyncSubject_1 = $__require('npm:rxjs@5.0.0-beta.7/AsyncSubject.js');
  var multicast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/multicast.js');
  function publishLast() {
    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
  }
  exports.publishLast = publishLast;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/publishLast.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/publishLast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var publishLast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/publishLast.js');
  Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/race.js", ["npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
      observables = observables[0];
    }
    observables.unshift(this);
    return raceStatic.apply(this, observables);
  }
  exports.race = race;
  function raceStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    if (observables.length === 1) {
      if (isArray_1.isArray(observables[0])) {
        observables = observables[0];
      } else {
        return observables[0];
      }
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new RaceOperator());
  }
  exports.raceStatic = raceStatic;
  var RaceOperator = (function() {
    function RaceOperator() {}
    RaceOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
  }());
  exports.RaceOperator = RaceOperator;
  var RaceSubscriber = (function(_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
      _super.call(this, destination);
      this.hasFirst = false;
      this.observables = [];
      this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function(observable) {
      this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function() {
      var observables = this.observables;
      var len = observables.length;
      if (len === 0) {
        this.destination.complete();
      } else {
        for (var i = 0; i < len; i++) {
          var observable = observables[i];
          var subscription = subscribeToResult_1.subscribeToResult(this, observable, observable, i);
          if (this.subscriptions) {
            this.subscriptions.push(subscription);
            this.add(subscription);
          }
        }
        this.observables = null;
      }
    };
    RaceSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (!this.hasFirst) {
        this.hasFirst = true;
        for (var i = 0; i < this.subscriptions.length; i++) {
          if (i !== outerIndex) {
            var subscription = this.subscriptions[i];
            subscription.unsubscribe();
            this.remove(subscription);
          }
        }
        this.subscriptions = null;
      }
      this.destination.next(innerValue);
    };
    return RaceSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.RaceSubscriber = RaceSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/race.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/race.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var race_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/race.js');
  Observable_1.Observable.prototype.race = race_1.race;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/reduce.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function reduce(project, seed) {
    return this.lift(new ReduceOperator(project, seed));
  }
  exports.reduce = reduce;
  var ReduceOperator = (function() {
    function ReduceOperator(project, seed) {
      this.project = project;
      this.seed = seed;
    }
    ReduceOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ReduceSubscriber(subscriber, this.project, this.seed));
    };
    return ReduceOperator;
  }());
  exports.ReduceOperator = ReduceOperator;
  var ReduceSubscriber = (function(_super) {
    __extends(ReduceSubscriber, _super);
    function ReduceSubscriber(destination, project, seed) {
      _super.call(this, destination);
      this.hasValue = false;
      this.acc = seed;
      this.project = project;
      this.hasSeed = typeof seed !== 'undefined';
    }
    ReduceSubscriber.prototype._next = function(value) {
      if (this.hasValue || (this.hasValue = this.hasSeed)) {
        this._tryReduce(value);
      } else {
        this.acc = value;
        this.hasValue = true;
      }
    };
    ReduceSubscriber.prototype._tryReduce = function(value) {
      var result;
      try {
        result = this.project(this.acc, value);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.acc = result;
    };
    ReduceSubscriber.prototype._complete = function() {
      if (this.hasValue || this.hasSeed) {
        this.destination.next(this.acc);
      }
      this.destination.complete();
    };
    return ReduceSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ReduceSubscriber = ReduceSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/reduce.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/reduce.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var reduce_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/reduce.js');
  Observable_1.Observable.prototype.reduce = reduce_1.reduce;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/repeat.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  function repeat(count) {
    if (count === void 0) {
      count = -1;
    }
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else if (count < 0) {
      return this.lift(new RepeatOperator(-1, this));
    } else {
      return this.lift(new RepeatOperator(count - 1, this));
    }
  }
  exports.repeat = repeat;
  var RepeatOperator = (function() {
    function RepeatOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RepeatOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
  }());
  var RepeatSubscriber = (function(_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RepeatSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.complete.call(this);
        } else if (count > -1) {
          this.count = count - 1;
        }
        this.unsubscribe();
        this.isStopped = false;
        this.isUnsubscribed = false;
        source.subscribe(this);
      }
    };
    return RepeatSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/repeat.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/repeat.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var repeat_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/repeat.js');
  Observable_1.Observable.prototype.repeat = repeat_1.repeat;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/retry.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function retry(count) {
    if (count === void 0) {
      count = -1;
    }
    return this.lift(new RetryOperator(count, this));
  }
  exports.retry = retry;
  var RetryOperator = (function() {
    function RetryOperator(count, source) {
      this.count = count;
      this.source = source;
    }
    RetryOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
  }());
  var RetrySubscriber = (function(_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
      _super.call(this, destination);
      this.count = count;
      this.source = source;
    }
    RetrySubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var _a = this,
            source = _a.source,
            count = _a.count;
        if (count === 0) {
          return _super.prototype.error.call(this, err);
        } else if (count > -1) {
          this.count = count - 1;
        }
        this.unsubscribe();
        this.isStopped = false;
        this.isUnsubscribed = false;
        source.subscribe(this);
      }
    };
    return RetrySubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/retry.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/retry.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var retry_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/retry.js');
  Observable_1.Observable.prototype.retry = retry_1.retry;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/retryWhen.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function retryWhen(notifier) {
    return this.lift(new RetryWhenOperator(notifier, this));
  }
  exports.retryWhen = retryWhen;
  var RetryWhenOperator = (function() {
    function RetryWhenOperator(notifier, source) {
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
  }());
  var RetryWhenSubscriber = (function(_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var errors = this.errors;
        var retries = this.retries;
        var retriesSubscription = this.retriesSubscription;
        if (!retries) {
          errors = new Subject_1.Subject();
          retries = tryCatch_1.tryCatch(this.notifier)(errors);
          if (retries === errorObject_1.errorObject) {
            return _super.prototype.error.call(this, errorObject_1.errorObject.e);
          }
          retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
        } else {
          this.errors = null;
          this.retriesSubscription = null;
        }
        this.unsubscribe();
        this.isUnsubscribed = false;
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        errors.next(err);
      }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function() {
      var _a = this,
          errors = _a.errors,
          retriesSubscription = _a.retriesSubscription;
      if (errors) {
        errors.unsubscribe();
        this.errors = null;
      }
      if (retriesSubscription) {
        retriesSubscription.unsubscribe();
        this.retriesSubscription = null;
      }
      this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          errors = _a.errors,
          retries = _a.retries,
          retriesSubscription = _a.retriesSubscription;
      this.errors = null;
      this.retries = null;
      this.retriesSubscription = null;
      this.unsubscribe();
      this.isStopped = false;
      this.isUnsubscribed = false;
      this.errors = errors;
      this.retries = retries;
      this.retriesSubscription = retriesSubscription;
      this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/retryWhen.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/retryWhen.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var retryWhen_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/retryWhen.js');
  Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/sample.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function sample(notifier) {
    return this.lift(new SampleOperator(notifier));
  }
  exports.sample = sample;
  var SampleOperator = (function() {
    function SampleOperator(notifier) {
      this.notifier = notifier;
    }
    SampleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
    };
    return SampleOperator;
  }());
  var SampleSubscriber = (function(_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SampleSubscriber.prototype._next = function(value) {
      this.value = value;
      this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function() {
      this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function() {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.value);
      }
    };
    return SampleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/sample.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/sample.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var sample_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/sample.js');
  Observable_1.Observable.prototype.sample = sample_1.sample;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/sampleTime.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new SampleTimeOperator(period, scheduler));
  }
  exports.sampleTime = sampleTime;
  var SampleTimeOperator = (function() {
    function SampleTimeOperator(period, scheduler) {
      this.period = period;
      this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
  }());
  var SampleTimeSubscriber = (function(_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
      _super.call(this, destination);
      this.period = period;
      this.scheduler = scheduler;
      this.hasValue = false;
      this.add(scheduler.schedule(dispatchNotification, period, {
        subscriber: this,
        period: period
      }));
    }
    SampleTimeSubscriber.prototype._next = function(value) {
      this.lastValue = value;
      this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function() {
      if (this.hasValue) {
        this.hasValue = false;
        this.destination.next(this.lastValue);
      }
    };
    return SampleTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchNotification(state) {
    var subscriber = state.subscriber,
        period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/sampleTime.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/sampleTime.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var sampleTime_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/sampleTime.js');
  Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/scan.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function scan(accumulator, seed) {
    return this.lift(new ScanOperator(accumulator, seed));
  }
  exports.scan = scan;
  var ScanOperator = (function() {
    function ScanOperator(accumulator, seed) {
      this.accumulator = accumulator;
      this.seed = seed;
    }
    ScanOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
    };
    return ScanOperator;
  }());
  var ScanSubscriber = (function(_super) {
    __extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, seed) {
      _super.call(this, destination);
      this.accumulator = accumulator;
      this.index = 0;
      this.accumulatorSet = false;
      this.seed = seed;
      this.accumulatorSet = typeof seed !== 'undefined';
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
      get: function() {
        return this._seed;
      },
      set: function(value) {
        this.accumulatorSet = true;
        this._seed = value;
      },
      enumerable: true,
      configurable: true
    });
    ScanSubscriber.prototype._next = function(value) {
      if (!this.accumulatorSet) {
        this.seed = value;
        this.destination.next(value);
      } else {
        return this._tryNext(value);
      }
    };
    ScanSubscriber.prototype._tryNext = function(value) {
      var index = this.index++;
      var result;
      try {
        result = this.accumulator(this.seed, value, index);
      } catch (err) {
        this.destination.error(err);
      }
      this.seed = result;
      this.destination.next(result);
    };
    return ScanSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/scan.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/scan.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var scan_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/scan.js');
  Observable_1.Observable.prototype.scan = scan_1.scan;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/multicast.js", ["npm:rxjs@5.0.0-beta.7/observable/ConnectableObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ConnectableObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ConnectableObservable.js');
  function multicast(subjectOrSubjectFactory) {
    var subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }
    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
  }
  exports.multicast = multicast;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/share.js", ["npm:rxjs@5.0.0-beta.7/operator/multicast.js", "npm:rxjs@5.0.0-beta.7/Subject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var multicast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/multicast.js');
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  function shareSubjectFactory() {
    return new Subject_1.Subject();
  }
  function share() {
    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
  }
  exports.share = share;
  ;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/share.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/share.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var share_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/share.js');
  Observable_1.Observable.prototype.share = share_1.share;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/single.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/EmptyError.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var EmptyError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/EmptyError.js');
  function single(predicate) {
    return this.lift(new SingleOperator(predicate, this));
  }
  exports.single = single;
  var SingleOperator = (function() {
    function SingleOperator(predicate, source) {
      this.predicate = predicate;
      this.source = source;
    }
    SingleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
  }());
  var SingleSubscriber = (function(_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.source = source;
      this.seenValue = false;
      this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function(value) {
      if (this.seenValue) {
        this.destination.error('Sequence contains more than one element');
      } else {
        this.seenValue = true;
        this.singleValue = value;
      }
    };
    SingleSubscriber.prototype._next = function(value) {
      var predicate = this.predicate;
      this.index++;
      if (predicate) {
        this.tryNext(value);
      } else {
        this.applySingleValue(value);
      }
    };
    SingleSubscriber.prototype.tryNext = function(value) {
      try {
        var result = this.predicate(value, this.index, this.source);
        if (result) {
          this.applySingleValue(value);
        }
      } catch (err) {
        this.destination.error(err);
      }
    };
    SingleSubscriber.prototype._complete = function() {
      var destination = this.destination;
      if (this.index > 0) {
        destination.next(this.seenValue ? this.singleValue : undefined);
        destination.complete();
      } else {
        destination.error(new EmptyError_1.EmptyError);
      }
    };
    return SingleSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/single.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/single.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var single_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/single.js');
  Observable_1.Observable.prototype.single = single_1.single;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/skip.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function skip(total) {
    return this.lift(new SkipOperator(total));
  }
  exports.skip = skip;
  var SkipOperator = (function() {
    function SkipOperator(total) {
      this.total = total;
    }
    SkipOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
  }());
  var SkipSubscriber = (function(_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    SkipSubscriber.prototype._next = function(x) {
      if (++this.count > this.total) {
        this.destination.next(x);
      }
    };
    return SkipSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/skip.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/skip.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var skip_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/skip.js');
  Observable_1.Observable.prototype.skip = skip_1.skip;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/skipUntil.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function skipUntil(notifier) {
    return this.lift(new SkipUntilOperator(notifier));
  }
  exports.skipUntil = skipUntil;
  var SkipUntilOperator = (function() {
    function SkipUntilOperator(notifier) {
      this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
  }());
  var SkipUntilSubscriber = (function(_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.hasValue = false;
      this.isInnerStopped = false;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function(value) {
      if (this.hasValue) {
        _super.prototype._next.call(this, value);
      }
    };
    SkipUntilSubscriber.prototype._complete = function() {
      if (this.isInnerStopped) {
        _super.prototype._complete.call(this);
      } else {
        this.unsubscribe();
      }
    };
    SkipUntilSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function() {
      this.isInnerStopped = true;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    return SkipUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/skipUntil.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/skipUntil.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var skipUntil_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/skipUntil.js');
  Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/skipWhile.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function skipWhile(predicate) {
    return this.lift(new SkipWhileOperator(predicate));
  }
  exports.skipWhile = skipWhile;
  var SkipWhileOperator = (function() {
    function SkipWhileOperator(predicate) {
      this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
  }());
  var SkipWhileSubscriber = (function(_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.skipping = true;
      this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      if (this.skipping) {
        this.tryCallPredicate(value);
      }
      if (!this.skipping) {
        destination.next(value);
      }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function(value) {
      try {
        var result = this.predicate(value, this.index++);
        this.skipping = Boolean(result);
      } catch (err) {
        this.destination.error(err);
      }
    };
    return SkipWhileSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/skipWhile.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/skipWhile.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var skipWhile_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/skipWhile.js');
  Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/mergeAll.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }
    return this.lift(new MergeAllOperator(concurrent));
  }
  exports.mergeAll = mergeAll;
  var MergeAllOperator = (function() {
    function MergeAllOperator(concurrent) {
      this.concurrent = concurrent;
    }
    MergeAllOperator.prototype.call = function(observer, source) {
      return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
    };
    return MergeAllOperator;
  }());
  exports.MergeAllOperator = MergeAllOperator;
  var MergeAllSubscriber = (function(_super) {
    __extends(MergeAllSubscriber, _super);
    function MergeAllSubscriber(destination, concurrent) {
      _super.call(this, destination);
      this.concurrent = concurrent;
      this.hasCompleted = false;
      this.buffer = [];
      this.active = 0;
    }
    MergeAllSubscriber.prototype._next = function(observable) {
      if (this.active < this.concurrent) {
        this.active++;
        this.add(subscribeToResult_1.subscribeToResult(this, observable));
      } else {
        this.buffer.push(observable);
      }
    };
    MergeAllSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0 && this.buffer.length === 0) {
        this.destination.complete();
      }
    };
    MergeAllSubscriber.prototype.notifyComplete = function(innerSub) {
      var buffer = this.buffer;
      this.remove(innerSub);
      this.active--;
      if (buffer.length > 0) {
        this._next(buffer.shift());
      } else if (this.active === 0 && this.hasCompleted) {
        this.destination.complete();
      }
    };
    return MergeAllSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  exports.MergeAllSubscriber = MergeAllSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/concat.js", ["npm:rxjs@5.0.0-beta.7/util/isScheduler.js", "npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/operator/mergeAll.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var mergeAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/mergeAll.js');
  function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    return concatStatic.apply(void 0, [this].concat(observables));
  }
  exports.concat = concat;
  function concatStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var scheduler = null;
    var args = observables;
    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
      scheduler = args.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
  }
  exports.concatStatic = concatStatic;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/startWith.js", ["npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js", "npm:rxjs@5.0.0-beta.7/operator/concat.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var ScalarObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  var concat_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/concat.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i - 0] = arguments[_i];
    }
    var scheduler = array[array.length - 1];
    if (isScheduler_1.isScheduler(scheduler)) {
      array.pop();
    } else {
      scheduler = null;
    }
    var len = array.length;
    if (len === 1) {
      return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
    } else if (len > 1) {
      return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
    } else {
      return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
    }
  }
  exports.startWith = startWith;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/startWith.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/startWith.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var startWith_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/startWith.js');
  Observable_1.Observable.prototype.startWith = startWith_1.startWith;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isNumeric.js", ["npm:rxjs@5.0.0-beta.7/util/isArray.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  function isNumeric(val) {
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
  }
  exports.isNumeric = isNumeric;
  ;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/SubscribeOnObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/scheduler/asap.js", "npm:rxjs@5.0.0-beta.7/util/isNumeric.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var asap_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/asap.js');
  var isNumeric_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isNumeric.js');
  var SubscribeOnObservable = (function(_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
      if (delayTime === void 0) {
        delayTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      _super.call(this);
      this.source = source;
      this.delayTime = delayTime;
      this.scheduler = scheduler;
      if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
        this.delayTime = 0;
      }
      if (!scheduler || typeof scheduler.schedule !== 'function') {
        this.scheduler = asap_1.asap;
      }
    }
    SubscribeOnObservable.create = function(source, delay, scheduler) {
      if (delay === void 0) {
        delay = 0;
      }
      if (scheduler === void 0) {
        scheduler = asap_1.asap;
      }
      return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function(arg) {
      var source = arg.source,
          subscriber = arg.subscriber;
      return source.subscribe(subscriber);
    };
    SubscribeOnObservable.prototype._subscribe = function(subscriber) {
      var delay = this.delayTime;
      var source = this.source;
      var scheduler = this.scheduler;
      return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
        source: source,
        subscriber: subscriber
      });
    };
    return SubscribeOnObservable;
  }(Observable_1.Observable));
  exports.SubscribeOnObservable = SubscribeOnObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/subscribeOn.js", ["npm:rxjs@5.0.0-beta.7/observable/SubscribeOnObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var SubscribeOnObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/SubscribeOnObservable.js');
  function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
  }
  exports.subscribeOn = subscribeOn;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/subscribeOn.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/subscribeOn.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var subscribeOn_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/subscribeOn.js');
  Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/switch.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function _switch() {
    return this.lift(new SwitchOperator());
  }
  exports._switch = _switch;
  var SwitchOperator = (function() {
    function SwitchOperator() {}
    SwitchOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchSubscriber(subscriber));
    };
    return SwitchOperator;
  }());
  var SwitchSubscriber = (function(_super) {
    __extends(SwitchSubscriber, _super);
    function SwitchSubscriber(destination) {
      _super.call(this, destination);
      this.active = 0;
      this.hasCompleted = false;
    }
    SwitchSubscriber.prototype._next = function(value) {
      this.unsubscribeInner();
      this.active++;
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
    };
    SwitchSubscriber.prototype._complete = function() {
      this.hasCompleted = true;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    SwitchSubscriber.prototype.unsubscribeInner = function() {
      this.active = this.active > 0 ? this.active - 1 : 0;
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
        this.remove(innerSubscription);
      }
    };
    SwitchSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    SwitchSubscriber.prototype.notifyError = function(err) {
      this.destination.error(err);
    };
    SwitchSubscriber.prototype.notifyComplete = function() {
      this.unsubscribeInner();
      if (this.hasCompleted && this.active === 0) {
        this.destination.complete();
      }
    };
    return SwitchSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/switch.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/switch.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var switch_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/switch.js');
  Observable_1.Observable.prototype.switch = switch_1._switch;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/switchMap.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
  }
  exports.switchMap = switchMap;
  var SwitchMapOperator = (function() {
    function SwitchMapOperator(project, resultSelector) {
      this.project = project;
      this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
  }());
  var SwitchMapSubscriber = (function(_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
      _super.call(this, destination);
      this.project = project;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function(value) {
      var result;
      var index = this.index++;
      try {
        result = this.project(value, index);
      } catch (error) {
        this.destination.error(error);
        return;
      }
      this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function(result, value, index) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function() {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.isUnsubscribed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function() {
      this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (this.resultSelector) {
        this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        this.destination.next(innerValue);
      }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function(outerValue, innerValue, outerIndex, innerIndex) {
      var result;
      try {
        result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return SwitchMapSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/switchMap.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/switchMap.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var switchMap_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/switchMap.js');
  Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/switchMapTo.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function switchMapTo(innerObservable, resultSelector) {
    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
  }
  exports.switchMapTo = switchMapTo;
  var SwitchMapToOperator = (function() {
    function SwitchMapToOperator(observable, resultSelector) {
      this.observable = observable;
      this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
  }());
  var SwitchMapToSubscriber = (function(_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
      _super.call(this, destination);
      this.inner = inner;
      this.resultSelector = resultSelector;
      this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function(value) {
      var innerSubscription = this.innerSubscription;
      if (innerSubscription) {
        innerSubscription.unsubscribe();
      }
      this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function() {
      var innerSubscription = this.innerSubscription;
      if (!innerSubscription || innerSubscription.isUnsubscribed) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function() {
      this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function(innerSub) {
      this.remove(innerSub);
      this.innerSubscription = null;
      if (this.isStopped) {
        _super.prototype._complete.call(this);
      }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      if (resultSelector) {
        this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } else {
        destination.next(innerValue);
      }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function(outerValue, innerValue, outerIndex, innerIndex) {
      var _a = this,
          resultSelector = _a.resultSelector,
          destination = _a.destination;
      var result;
      try {
        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
      } catch (err) {
        destination.error(err);
        return;
      }
      destination.next(result);
    };
    return SwitchMapToSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/switchMapTo.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/switchMapTo.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var switchMapTo_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/switchMapTo.js');
  Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/take.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var ArgumentOutOfRangeError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  function take(count) {
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeOperator(count));
    }
  }
  exports.take = take;
  var TakeOperator = (function() {
    function TakeOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    TakeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
  }());
  var TakeSubscriber = (function(_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.count = 0;
    }
    TakeSubscriber.prototype._next = function(value) {
      var total = this.total;
      if (++this.count <= total) {
        this.destination.next(value);
        if (this.count === total) {
          this.destination.complete();
          this.unsubscribe();
        }
      }
    };
    return TakeSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/take.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/take.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var take_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/take.js');
  Observable_1.Observable.prototype.take = take_1.take;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/takeLast.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var ArgumentOutOfRangeError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  function takeLast(count) {
    if (count === 0) {
      return new EmptyObservable_1.EmptyObservable();
    } else {
      return this.lift(new TakeLastOperator(count));
    }
  }
  exports.takeLast = takeLast;
  var TakeLastOperator = (function() {
    function TakeLastOperator(total) {
      this.total = total;
      if (this.total < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    }
    TakeLastOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator;
  }());
  var TakeLastSubscriber = (function(_super) {
    __extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
      _super.call(this, destination);
      this.total = total;
      this.ring = new Array();
      this.count = 0;
    }
    TakeLastSubscriber.prototype._next = function(value) {
      var ring = this.ring;
      var total = this.total;
      var count = this.count++;
      if (ring.length < total) {
        ring.push(value);
      } else {
        var index = count % total;
        ring[index] = value;
      }
    };
    TakeLastSubscriber.prototype._complete = function() {
      var destination = this.destination;
      var count = this.count;
      if (count > 0) {
        var total = this.count >= this.total ? this.total : this.count;
        var ring = this.ring;
        for (var i = 0; i < total; i++) {
          var idx = (count++) % total;
          destination.next(ring[idx]);
        }
      }
      destination.complete();
    };
    return TakeLastSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/takeLast.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/takeLast.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var takeLast_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/takeLast.js');
  Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/takeUntil.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function takeUntil(notifier) {
    return this.lift(new TakeUntilOperator(notifier));
  }
  exports.takeUntil = takeUntil;
  var TakeUntilOperator = (function() {
    function TakeUntilOperator(notifier) {
      this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
    };
    return TakeUntilOperator;
  }());
  var TakeUntilSubscriber = (function(_super) {
    __extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination, notifier) {
      _super.call(this, destination);
      this.notifier = notifier;
      this.add(subscribeToResult_1.subscribeToResult(this, notifier));
    }
    TakeUntilSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function() {};
    return TakeUntilSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/takeUntil.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/takeUntil.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var takeUntil_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/takeUntil.js');
  Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/takeWhile.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
  }
  exports.takeWhile = takeWhile;
  var TakeWhileOperator = (function() {
    function TakeWhileOperator(predicate) {
      this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
  }());
  var TakeWhileSubscriber = (function(_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
      _super.call(this, destination);
      this.predicate = predicate;
      this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function(value) {
      var destination = this.destination;
      var result;
      try {
        result = this.predicate(value, this.index++);
      } catch (err) {
        destination.error(err);
        return;
      }
      this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function(value, predicateResult) {
      var destination = this.destination;
      if (Boolean(predicateResult)) {
        destination.next(value);
      } else {
        destination.complete();
      }
    };
    return TakeWhileSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/takeWhile.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/takeWhile.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var takeWhile_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/takeWhile.js');
  Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/throttle.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
    var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
    function throttle(durationSelector) {
      return this.lift(new ThrottleOperator(durationSelector));
    }
    exports.throttle = throttle;
    var ThrottleOperator = (function() {
      function ThrottleOperator(durationSelector) {
        this.durationSelector = durationSelector;
      }
      ThrottleOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
      };
      return ThrottleOperator;
    }());
    var ThrottleSubscriber = (function(_super) {
      __extends(ThrottleSubscriber, _super);
      function ThrottleSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
      }
      ThrottleSubscriber.prototype._next = function(value) {
        if (!this.throttled) {
          this.tryDurationSelector(value);
        }
      };
      ThrottleSubscriber.prototype.tryDurationSelector = function(value) {
        var duration = null;
        try {
          duration = this.durationSelector(value);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.emitAndThrottle(value, duration);
      };
      ThrottleSubscriber.prototype.emitAndThrottle = function(value, duration) {
        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
        this.destination.next(value);
      };
      ThrottleSubscriber.prototype._unsubscribe = function() {
        var throttled = this.throttled;
        if (throttled) {
          this.remove(throttled);
          this.throttled = null;
          throttled.unsubscribe();
        }
      };
      ThrottleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._unsubscribe();
      };
      ThrottleSubscriber.prototype.notifyComplete = function() {
        this._unsubscribe();
      };
      return ThrottleSubscriber;
    }(OuterSubscriber_1.OuterSubscriber));
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/throttle.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/throttle.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var throttle_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/throttle.js');
  Observable_1.Observable.prototype.throttle = throttle_1.throttle;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/throttleTime.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var __extends = (this && this.__extends) || function(d, b) {
      for (var p in b)
        if (b.hasOwnProperty(p))
          d[p] = b[p];
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
    var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
    function throttleTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      return this.lift(new ThrottleTimeOperator(duration, scheduler));
    }
    exports.throttleTime = throttleTime;
    var ThrottleTimeOperator = (function() {
      function ThrottleTimeOperator(duration, scheduler) {
        this.duration = duration;
        this.scheduler = scheduler;
      }
      ThrottleTimeOperator.prototype.call = function(subscriber, source) {
        return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler));
      };
      return ThrottleTimeOperator;
    }());
    var ThrottleTimeSubscriber = (function(_super) {
      __extends(ThrottleTimeSubscriber, _super);
      function ThrottleTimeSubscriber(destination, duration, scheduler) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
      }
      ThrottleTimeSubscriber.prototype._next = function(value) {
        if (!this.throttled) {
          this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {subscriber: this}));
          this.destination.next(value);
        }
      };
      ThrottleTimeSubscriber.prototype.clearThrottle = function() {
        var throttled = this.throttled;
        if (throttled) {
          throttled.unsubscribe();
          this.remove(throttled);
          this.throttled = null;
        }
      };
      return ThrottleTimeSubscriber;
    }(Subscriber_1.Subscriber));
    function dispatchNext(arg) {
      var subscriber = arg.subscriber;
      subscriber.clearThrottle();
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/throttleTime.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/throttleTime.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var throttleTime_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/throttleTime.js');
  Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/timeout.js", ["npm:rxjs@5.0.0-beta.7/scheduler/async.js", "npm:rxjs@5.0.0-beta.7/util/isDate.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  var isDate_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isDate.js');
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function timeout(due, errorToSend, scheduler) {
    if (errorToSend === void 0) {
      errorToSend = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
  }
  exports.timeout = timeout;
  var TimeoutOperator = (function() {
    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.errorToSend = errorToSend;
      this.scheduler = scheduler;
    }
    TimeoutOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
    };
    return TimeoutOperator;
  }());
  var TimeoutSubscriber = (function(_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
      _super.call(this, destination);
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.errorToSend = errorToSend;
      this.scheduler = scheduler;
      this.index = 0;
      this._previousIndex = 0;
      this._hasCompleted = false;
      this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
      get: function() {
        return this._previousIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
      get: function() {
        return this._hasCompleted;
      },
      enumerable: true,
      configurable: true
    });
    TimeoutSubscriber.dispatchTimeout = function(state) {
      var source = state.subscriber;
      var currentIndex = state.index;
      if (!source.hasCompleted && source.previousIndex === currentIndex) {
        source.notifyTimeout();
      }
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function() {
      var currentIndex = this.index;
      this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, {
        subscriber: this,
        index: currentIndex
      });
      this.index++;
      this._previousIndex = currentIndex;
    };
    TimeoutSubscriber.prototype._next = function(value) {
      this.destination.next(value);
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
    };
    TimeoutSubscriber.prototype._error = function(err) {
      this.destination.error(err);
      this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype._complete = function() {
      this.destination.complete();
      this._hasCompleted = true;
    };
    TimeoutSubscriber.prototype.notifyTimeout = function() {
      this.error(this.errorToSend || new Error('timeout'));
    };
    return TimeoutSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/timeout.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/timeout.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var timeout_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/timeout.js');
  Observable_1.Observable.prototype.timeout = timeout_1.timeout;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isDate.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isDate(value) {
    return value instanceof Date && !isNaN(+value);
  }
  exports.isDate = isDate;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/timeoutWith.js", ["npm:rxjs@5.0.0-beta.7/scheduler/async.js", "npm:rxjs@5.0.0-beta.7/util/isDate.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  var isDate_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isDate.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    var absoluteTimeout = isDate_1.isDate(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
  }
  exports.timeoutWith = timeoutWith;
  var TimeoutWithOperator = (function() {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
      this.waitFor = waitFor;
      this.absoluteTimeout = absoluteTimeout;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
  }());
  var TimeoutWithSubscriber = (function(_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
      _super.call(this);
      this.destination = destination;
      this.absoluteTimeout = absoluteTimeout;
      this.waitFor = waitFor;
      this.withObservable = withObservable;
      this.scheduler = scheduler;
      this.timeoutSubscription = undefined;
      this.index = 0;
      this._previousIndex = 0;
      this._hasCompleted = false;
      destination.add(this);
      this.scheduleTimeout();
    }
    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
      get: function() {
        return this._previousIndex;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
      get: function() {
        return this._hasCompleted;
      },
      enumerable: true,
      configurable: true
    });
    TimeoutWithSubscriber.dispatchTimeout = function(state) {
      var source = state.subscriber;
      var currentIndex = state.index;
      if (!source.hasCompleted && source.previousIndex === currentIndex) {
        source.handleTimeout();
      }
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function() {
      var currentIndex = this.index;
      var timeoutState = {
        subscriber: this,
        index: currentIndex
      };
      this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
      this.index++;
      this._previousIndex = currentIndex;
    };
    TimeoutWithSubscriber.prototype._next = function(value) {
      this.destination.next(value);
      if (!this.absoluteTimeout) {
        this.scheduleTimeout();
      }
    };
    TimeoutWithSubscriber.prototype._error = function(err) {
      this.destination.error(err);
      this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype._complete = function() {
      this.destination.complete();
      this._hasCompleted = true;
    };
    TimeoutWithSubscriber.prototype.handleTimeout = function() {
      if (!this.isUnsubscribed) {
        var withObservable = this.withObservable;
        this.unsubscribe();
        this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
      }
    };
    return TimeoutWithSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/timeoutWith.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/timeoutWith.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var timeoutWith_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/timeoutWith.js');
  Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/toArray.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  function toArray() {
    return this.lift(new ToArrayOperator());
  }
  exports.toArray = toArray;
  var ToArrayOperator = (function() {
    function ToArrayOperator() {}
    ToArrayOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ToArraySubscriber(subscriber));
    };
    return ToArrayOperator;
  }());
  var ToArraySubscriber = (function(_super) {
    __extends(ToArraySubscriber, _super);
    function ToArraySubscriber(destination) {
      _super.call(this, destination);
      this.array = [];
    }
    ToArraySubscriber.prototype._next = function(x) {
      this.array.push(x);
    };
    ToArraySubscriber.prototype._complete = function() {
      this.destination.next(this.array);
      this.destination.complete();
    };
    return ToArraySubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/toArray.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/toArray.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var toArray_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/toArray.js');
  Observable_1.Observable.prototype.toArray = toArray_1.toArray;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/toPromise.js", ["npm:rxjs@5.0.0-beta.7/util/root.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
      if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
        PromiseCtor = root_1.root.Rx.config.Promise;
      } else if (root_1.root.Promise) {
        PromiseCtor = root_1.root.Promise;
      }
    }
    if (!PromiseCtor) {
      throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  }
  exports.toPromise = toPromise;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/toPromise.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/toPromise.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var toPromise_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/toPromise.js');
  Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/window.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function window(windowBoundaries) {
    return this.lift(new WindowOperator(windowBoundaries));
  }
  exports.window = window;
  var WindowOperator = (function() {
    function WindowOperator(windowBoundaries) {
      this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowSubscriber(subscriber, this.windowBoundaries));
    };
    return WindowOperator;
  }());
  var WindowSubscriber = (function(_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, windowBoundaries) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowBoundaries = windowBoundaries;
      this.add(subscribeToResult_1.subscribeToResult(this, windowBoundaries));
      this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
      this._complete();
    };
    WindowSubscriber.prototype._next = function(value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
      this.window.error(err);
      this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function() {
      this.window.complete();
      this.destination.complete();
    };
    WindowSubscriber.prototype.openWindow = function() {
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var destination = this.destination;
      var newWindow = this.window = new Subject_1.Subject();
      destination.add(newWindow);
      destination.next(newWindow);
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/window.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/window.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var window_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/window.js');
  Observable_1.Observable.prototype.window = window_1.window;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/windowCount.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Subject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
      startWindowEvery = 0;
    }
    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
  }
  exports.windowCount = windowCount;
  var WindowCountOperator = (function() {
    function WindowCountOperator(windowSize, startWindowEvery) {
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
  }());
  var WindowCountSubscriber = (function(_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowSize = windowSize;
      this.startWindowEvery = startWindowEvery;
      this.windows = [new Subject_1.Subject()];
      this.count = 0;
      var firstWindow = this.windows[0];
      destination.add(firstWindow);
      destination.next(firstWindow);
    }
    WindowCountSubscriber.prototype._next = function(value) {
      var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
      var destination = this.destination;
      var windowSize = this.windowSize;
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len; i++) {
        windows[i].next(value);
      }
      var c = this.count - windowSize + 1;
      if (c >= 0 && c % startWindowEvery === 0) {
        windows.shift().complete();
      }
      if (++this.count % startWindowEvery === 0) {
        var window_1 = new Subject_1.Subject();
        windows.push(window_1);
        destination.add(window_1);
        destination.next(window_1);
      }
    };
    WindowCountSubscriber.prototype._error = function(err) {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().error(err);
      }
      this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function() {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().complete();
      }
      this.destination.complete();
    };
    return WindowCountSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/windowCount.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/windowCount.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var windowCount_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/windowCount.js');
  Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/windowTime.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
  function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
    if (windowCreationInterval === void 0) {
      windowCreationInterval = null;
    }
    if (scheduler === void 0) {
      scheduler = async_1.async;
    }
    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
  }
  exports.windowTime = windowTime;
  var WindowTimeOperator = (function() {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
    };
    return WindowTimeOperator;
  }());
  var WindowTimeSubscriber = (function(_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
      _super.call(this, destination);
      this.destination = destination;
      this.windowTimeSpan = windowTimeSpan;
      this.windowCreationInterval = windowCreationInterval;
      this.scheduler = scheduler;
      this.windows = [];
      if (windowCreationInterval !== null && windowCreationInterval >= 0) {
        var window_1 = this.openWindow();
        var closeState = {
          subscriber: this,
          window: window_1,
          context: null
        };
        var creationState = {
          windowTimeSpan: windowTimeSpan,
          windowCreationInterval: windowCreationInterval,
          subscriber: this,
          scheduler: scheduler
        };
        this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
        this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
      } else {
        var window_2 = this.openWindow();
        var timeSpanOnlyState = {
          subscriber: this,
          window: window_2,
          windowTimeSpan: windowTimeSpan
        };
        this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
      }
    }
    WindowTimeSubscriber.prototype._next = function(value) {
      var windows = this.windows;
      var len = windows.length;
      for (var i = 0; i < len; i++) {
        var window_3 = windows[i];
        if (!window_3.isUnsubscribed) {
          window_3.next(value);
        }
      }
    };
    WindowTimeSubscriber.prototype._error = function(err) {
      var windows = this.windows;
      while (windows.length > 0) {
        windows.shift().error(err);
      }
      this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function() {
      var windows = this.windows;
      while (windows.length > 0) {
        var window_4 = windows.shift();
        if (!window_4.isUnsubscribed) {
          window_4.complete();
        }
      }
      this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function() {
      var window = new Subject_1.Subject();
      this.windows.push(window);
      var destination = this.destination;
      destination.add(window);
      destination.next(window);
      return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function(window) {
      window.complete();
      var windows = this.windows;
      windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
  }(Subscriber_1.Subscriber));
  function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber,
        windowTimeSpan = state.windowTimeSpan,
        window = state.window;
    if (window) {
      window.complete();
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
  }
  function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan,
        subscriber = state.subscriber,
        scheduler = state.scheduler,
        windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = {
      action: action,
      subscription: null
    };
    var timeSpanState = {
      subscriber: subscriber,
      window: window,
      context: context
    };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
  }
  function dispatchWindowClose(arg) {
    var subscriber = arg.subscriber,
        window = arg.window,
        context = arg.context;
    if (context && context.action && context.subscription) {
      context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/windowTime.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/windowTime.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var windowTime_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/windowTime.js');
  Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/windowToggle.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function windowToggle(openings, closingSelector) {
    return this.lift(new WindowToggleOperator(openings, closingSelector));
  }
  exports.windowToggle = windowToggle;
  var WindowToggleOperator = (function() {
    function WindowToggleOperator(openings, closingSelector) {
      this.openings = openings;
      this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
  }());
  var WindowToggleSubscriber = (function(_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
      _super.call(this, destination);
      this.openings = openings;
      this.closingSelector = closingSelector;
      this.contexts = [];
      this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function(value) {
      var contexts = this.contexts;
      if (contexts) {
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
          contexts[i].window.next(value);
        }
      }
    };
    WindowToggleSubscriber.prototype._error = function(err) {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.error(err);
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function() {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.complete();
          context.subscription.unsubscribe();
        }
      }
      _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function() {
      var contexts = this.contexts;
      this.contexts = null;
      if (contexts) {
        var len = contexts.length;
        var index = -1;
        while (++index < len) {
          var context = contexts[index];
          context.window.unsubscribe();
          context.subscription.unsubscribe();
        }
      }
    };
    WindowToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      if (outerValue === this.openings) {
        var closingSelector = this.closingSelector;
        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
        if (closingNotifier === errorObject_1.errorObject) {
          return this.error(errorObject_1.errorObject.e);
        } else {
          var window_1 = new Subject_1.Subject();
          var subscription = new Subscription_1.Subscription();
          var context = {
            window: window_1,
            subscription: subscription
          };
          this.contexts.push(context);
          var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
          if (innerSubscription.isUnsubscribed) {
            this.closeWindow(this.contexts.length - 1);
          } else {
            innerSubscription.context = context;
            subscription.add(innerSubscription);
          }
          this.destination.next(window_1);
        }
      } else {
        this.closeWindow(this.contexts.indexOf(outerValue));
      }
    };
    WindowToggleSubscriber.prototype.notifyError = function(err) {
      this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function(inner) {
      if (inner !== this.openSubscription) {
        this.closeWindow(this.contexts.indexOf(inner.context));
      }
    };
    WindowToggleSubscriber.prototype.closeWindow = function(index) {
      if (index === -1) {
        return;
      }
      var contexts = this.contexts;
      var context = contexts[index];
      var window = context.window,
          subscription = context.subscription;
      contexts.splice(index, 1);
      window.complete();
      subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/windowToggle.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/windowToggle.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var windowToggle_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/windowToggle.js');
  Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/windowWhen.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function windowWhen(closingSelector) {
    return this.lift(new WindowOperator(closingSelector));
  }
  exports.windowWhen = windowWhen;
  var WindowOperator = (function() {
    function WindowOperator(closingSelector) {
      this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
  }());
  var WindowSubscriber = (function(_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
      _super.call(this, destination);
      this.destination = destination;
      this.closingSelector = closingSelector;
      this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function(error, innerSub) {
      this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
      this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function(value) {
      this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
      this.window.error(err);
      this.destination.error(err);
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function() {
      this.window.complete();
      this.destination.complete();
      this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function() {
      if (this.closingNotification) {
        this.closingNotification.unsubscribe();
      }
    };
    WindowSubscriber.prototype.openWindow = function(innerSub) {
      if (innerSub === void 0) {
        innerSub = null;
      }
      if (innerSub) {
        this.remove(innerSub);
        innerSub.unsubscribe();
      }
      var prevWindow = this.window;
      if (prevWindow) {
        prevWindow.complete();
      }
      var window = this.window = new Subject_1.Subject();
      this.destination.next(window);
      var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
      if (closingNotifier === errorObject_1.errorObject) {
        var err = errorObject_1.errorObject.e;
        this.destination.error(err);
        this.window.error(err);
      } else {
        this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
        this.add(window);
      }
    };
    return WindowSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/windowWhen.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/windowWhen.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var windowWhen_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/windowWhen.js');
  Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/withLatestFrom.js", ["npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i - 0] = arguments[_i];
    }
    var project;
    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }
    var observables = args;
    return this.lift(new WithLatestFromOperator(observables, project));
  }
  exports.withLatestFrom = withLatestFrom;
  var WithLatestFromOperator = (function() {
    function WithLatestFromOperator(observables, project) {
      this.observables = observables;
      this.project = project;
    }
    WithLatestFromOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
  }());
  var WithLatestFromSubscriber = (function(_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
      _super.call(this, destination);
      this.observables = observables;
      this.project = project;
      this.toRespond = [];
      var len = observables.length;
      this.values = new Array(len);
      for (var i = 0; i < len; i++) {
        this.toRespond.push(i);
      }
      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
      }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.values[outerIndex] = innerValue;
      var toRespond = this.toRespond;
      if (toRespond.length > 0) {
        var found = toRespond.indexOf(outerIndex);
        if (found !== -1) {
          toRespond.splice(found, 1);
        }
      }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function() {};
    WithLatestFromSubscriber.prototype._next = function(value) {
      if (this.toRespond.length === 0) {
        var args = [value].concat(this.values);
        if (this.project) {
          this._tryProject(args);
        } else {
          this.destination.next(args);
        }
      }
    };
    WithLatestFromSubscriber.prototype._tryProject = function(args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return WithLatestFromSubscriber;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/withLatestFrom.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/withLatestFrom.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var withLatestFrom_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/withLatestFrom.js');
  Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/zip.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/zip.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var zip_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/zip.js');
  Observable_1.Observable.prototype.zip = zip_1.zipProto;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var ScalarObservable = (function(_super) {
    __extends(ScalarObservable, _super);
    function ScalarObservable(value, scheduler) {
      _super.call(this);
      this.value = value;
      this.scheduler = scheduler;
      this._isScalar = true;
    }
    ScalarObservable.create = function(value, scheduler) {
      return new ScalarObservable(value, scheduler);
    };
    ScalarObservable.dispatch = function(state) {
      var done = state.done,
          value = state.value,
          subscriber = state.subscriber;
      if (done) {
        subscriber.complete();
        return;
      }
      subscriber.next(value);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.done = true;
      this.schedule(state);
    };
    ScalarObservable.prototype._subscribe = function(subscriber) {
      var value = this.value;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ScalarObservable.dispatch, 0, {
          done: false,
          value: value,
          subscriber: subscriber
        });
      } else {
        subscriber.next(value);
        if (!subscriber.isUnsubscribed) {
          subscriber.complete();
        }
      }
    };
    return ScalarObservable;
  }(Observable_1.Observable));
  exports.ScalarObservable = ScalarObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var EmptyObservable = (function(_super) {
    __extends(EmptyObservable, _super);
    function EmptyObservable(scheduler) {
      _super.call(this);
      this.scheduler = scheduler;
    }
    EmptyObservable.create = function(scheduler) {
      return new EmptyObservable(scheduler);
    };
    EmptyObservable.dispatch = function(arg) {
      var subscriber = arg.subscriber;
      subscriber.complete();
    };
    EmptyObservable.prototype._subscribe = function(subscriber) {
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(EmptyObservable.dispatch, 0, {subscriber: subscriber});
      } else {
        subscriber.complete();
      }
    };
    return EmptyObservable;
  }(Observable_1.Observable));
  exports.EmptyObservable = EmptyObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isScheduler.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isScheduler(value) {
    return value && typeof value.schedule === 'function';
  }
  exports.isScheduler = isScheduler;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js", "npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js", "npm:rxjs@5.0.0-beta.7/util/isScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var ScalarObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ScalarObservable.js');
  var EmptyObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/EmptyObservable.js');
  var isScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isScheduler.js');
  var ArrayObservable = (function(_super) {
    __extends(ArrayObservable, _super);
    function ArrayObservable(array, scheduler) {
      _super.call(this);
      this.array = array;
      this.scheduler = scheduler;
      if (!scheduler && array.length === 1) {
        this._isScalar = true;
        this.value = array[0];
      }
    }
    ArrayObservable.create = function(array, scheduler) {
      return new ArrayObservable(array, scheduler);
    };
    ArrayObservable.of = function() {
      var array = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
      }
      var scheduler = array[array.length - 1];
      if (isScheduler_1.isScheduler(scheduler)) {
        array.pop();
      } else {
        scheduler = null;
      }
      var len = array.length;
      if (len > 1) {
        return new ArrayObservable(array, scheduler);
      } else if (len === 1) {
        return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
      } else {
        return new EmptyObservable_1.EmptyObservable(scheduler);
      }
    };
    ArrayObservable.dispatch = function(state) {
      var array = state.array,
          index = state.index,
          count = state.count,
          subscriber = state.subscriber;
      if (index >= count) {
        subscriber.complete();
        return;
      }
      subscriber.next(array[index]);
      if (subscriber.isUnsubscribed) {
        return;
      }
      state.index = index + 1;
      this.schedule(state);
    };
    ArrayObservable.prototype._subscribe = function(subscriber) {
      var index = 0;
      var array = this.array;
      var count = array.length;
      var scheduler = this.scheduler;
      if (scheduler) {
        return scheduler.schedule(ArrayObservable.dispatch, 0, {
          array: array,
          index: index,
          count: count,
          subscriber: subscriber
        });
      } else {
        for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      }
    };
    return ArrayObservable;
  }(Observable_1.Observable));
  exports.ArrayObservable = ArrayObservable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var OuterSubscriber = (function(_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
      _super.apply(this, arguments);
    }
    OuterSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function(error, innerSub) {
      this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function(innerSub) {
      this.destination.complete();
    };
    return OuterSubscriber;
  }(Subscriber_1.Subscriber));
  exports.OuterSubscriber = OuterSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isPromise.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
  }
  exports.isPromise = isPromise;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/InnerSubscriber.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var InnerSubscriber = (function(_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
      _super.call(this);
      this.parent = parent;
      this.outerValue = outerValue;
      this.outerIndex = outerIndex;
      this.index = 0;
    }
    InnerSubscriber.prototype._next = function(value) {
      this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function(error) {
      this.parent.notifyError(error, this);
      this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function() {
      this.parent.notifyComplete(this);
      this.unsubscribe();
    };
    return InnerSubscriber;
  }(Subscriber_1.Subscriber));
  exports.InnerSubscriber = InnerSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/util/isPromise.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/symbol/iterator.js", "npm:rxjs@5.0.0-beta.7/InnerSubscriber.js", "npm:symbol-observable@0.2.4.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  var isPromise_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isPromise.js');
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var iterator_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/iterator.js');
  var InnerSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/InnerSubscriber.js');
  var $$observable = $__require('npm:symbol-observable@0.2.4.js');
  function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (destination.isUnsubscribed) {
      return;
    }
    if (result instanceof Observable_1.Observable) {
      if (result._isScalar) {
        destination.next(result.value);
        destination.complete();
        return;
      } else {
        return result.subscribe(destination);
      }
    }
    if (isArray_1.isArray(result)) {
      for (var i = 0,
          len = result.length; i < len && !destination.isUnsubscribed; i++) {
        destination.next(result[i]);
      }
      if (!destination.isUnsubscribed) {
        destination.complete();
      }
    } else if (isPromise_1.isPromise(result)) {
      result.then(function(value) {
        if (!destination.isUnsubscribed) {
          destination.next(value);
          destination.complete();
        }
      }, function(err) {
        return destination.error(err);
      }).then(null, function(err) {
        root_1.root.setTimeout(function() {
          throw err;
        });
      });
      return destination;
    } else if (typeof result[iterator_1.$$iterator] === 'function') {
      for (var _i = 0,
          _a = result; _i < _a.length; _i++) {
        var item = _a[_i];
        destination.next(item);
        if (destination.isUnsubscribed) {
          break;
        }
      }
      if (!destination.isUnsubscribed) {
        destination.complete();
      }
    } else if (typeof result[$$observable] === 'function') {
      var obs = result[$$observable]();
      if (typeof obs.subscribe !== 'function') {
        destination.error('invalid observable');
      } else {
        return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
      }
    } else {
      destination.error(new TypeError('unknown type returned'));
    }
  }
  exports.subscribeToResult = subscribeToResult;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/zip.js", ["npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js", "npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/OuterSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js", "npm:rxjs@5.0.0-beta.7/symbol/iterator.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArrayObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ArrayObservable.js');
  var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var OuterSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/OuterSubscriber.js');
  var subscribeToResult_1 = $__require('npm:rxjs@5.0.0-beta.7/util/subscribeToResult.js');
  var iterator_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/iterator.js');
  function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    observables.unshift(this);
    return zipStatic.apply(this, observables);
  }
  exports.zipProto = zipProto;
  function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
      observables.pop();
    }
    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
  }
  exports.zipStatic = zipStatic;
  var ZipOperator = (function() {
    function ZipOperator(project) {
      this.project = project;
    }
    ZipOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
  }());
  exports.ZipOperator = ZipOperator;
  var ZipSubscriber = (function(_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
      if (values === void 0) {
        values = Object.create(null);
      }
      _super.call(this, destination);
      this.index = 0;
      this.iterators = [];
      this.active = 0;
      this.project = (typeof project === 'function') ? project : null;
      this.values = values;
    }
    ZipSubscriber.prototype._next = function(value) {
      var iterators = this.iterators;
      var index = this.index++;
      if (isArray_1.isArray(value)) {
        iterators.push(new StaticArrayIterator(value));
      } else if (typeof value[iterator_1.$$iterator] === 'function') {
        iterators.push(new StaticIterator(value[iterator_1.$$iterator]()));
      } else {
        iterators.push(new ZipBufferIterator(this.destination, this, value, index));
      }
    };
    ZipSubscriber.prototype._complete = function() {
      var iterators = this.iterators;
      var len = iterators.length;
      this.active = len;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (iterator.stillUnsubscribed) {
          this.add(iterator.subscribe(iterator, i));
        } else {
          this.active--;
        }
      }
    };
    ZipSubscriber.prototype.notifyInactive = function() {
      this.active--;
      if (this.active === 0) {
        this.destination.complete();
      }
    };
    ZipSubscriber.prototype.checkIterators = function() {
      var iterators = this.iterators;
      var len = iterators.length;
      var destination = this.destination;
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
          return;
        }
      }
      var shouldComplete = false;
      var args = [];
      for (var i = 0; i < len; i++) {
        var iterator = iterators[i];
        var result = iterator.next();
        if (iterator.hasCompleted()) {
          shouldComplete = true;
        }
        if (result.done) {
          destination.complete();
          return;
        }
        args.push(result.value);
      }
      if (this.project) {
        this._tryProject(args);
      } else {
        destination.next(args);
      }
      if (shouldComplete) {
        destination.complete();
      }
    };
    ZipSubscriber.prototype._tryProject = function(args) {
      var result;
      try {
        result = this.project.apply(this, args);
      } catch (err) {
        this.destination.error(err);
        return;
      }
      this.destination.next(result);
    };
    return ZipSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ZipSubscriber = ZipSubscriber;
  var StaticIterator = (function() {
    function StaticIterator(iterator) {
      this.iterator = iterator;
      this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function() {
      return true;
    };
    StaticIterator.prototype.next = function() {
      var result = this.nextResult;
      this.nextResult = this.iterator.next();
      return result;
    };
    StaticIterator.prototype.hasCompleted = function() {
      var nextResult = this.nextResult;
      return nextResult && nextResult.done;
    };
    return StaticIterator;
  }());
  var StaticArrayIterator = (function() {
    function StaticArrayIterator(array) {
      this.array = array;
      this.index = 0;
      this.length = 0;
      this.length = array.length;
    }
    StaticArrayIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    StaticArrayIterator.prototype.next = function(value) {
      var i = this.index++;
      var array = this.array;
      return i < this.length ? {
        value: array[i],
        done: false
      } : {done: true};
    };
    StaticArrayIterator.prototype.hasValue = function() {
      return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function() {
      return this.array.length === this.index;
    };
    return StaticArrayIterator;
  }());
  var ZipBufferIterator = (function(_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable, index) {
      _super.call(this, destination);
      this.parent = parent;
      this.observable = observable;
      this.index = index;
      this.stillUnsubscribed = true;
      this.buffer = [];
      this.isComplete = false;
    }
    ZipBufferIterator.prototype[iterator_1.$$iterator] = function() {
      return this;
    };
    ZipBufferIterator.prototype.next = function() {
      var buffer = this.buffer;
      if (buffer.length === 0 && this.isComplete) {
        return {done: true};
      } else {
        return {
          value: buffer.shift(),
          done: false
        };
      }
    };
    ZipBufferIterator.prototype.hasValue = function() {
      return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function() {
      return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function() {
      if (this.buffer.length > 0) {
        this.isComplete = true;
        this.parent.notifyInactive();
      } else {
        this.destination.complete();
      }
    };
    ZipBufferIterator.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
      this.buffer.push(innerValue);
      this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function(value, index) {
      return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
    };
    return ZipBufferIterator;
  }(OuterSubscriber_1.OuterSubscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/zipAll.js", ["npm:rxjs@5.0.0-beta.7/operator/zip.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var zip_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/zip.js');
  function zipAll(project) {
    return this.lift(new zip_1.ZipOperator(project));
  }
  exports.zipAll = zipAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/add/operator/zipAll.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/operator/zipAll.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var zipAll_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/zipAll.js');
  Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Operator.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Operator = (function() {
    function Operator() {}
    Operator.prototype.call = function(subscriber, source) {
      return source._subscribe(new Subscriber_1.Subscriber(subscriber));
    };
    return Operator;
  }());
  exports.Operator = Operator;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/AsyncSubject.js", ["npm:rxjs@5.0.0-beta.7/Subject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var AsyncSubject = (function(_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
      _super.apply(this, arguments);
      this.value = null;
      this.hasNext = false;
    }
    AsyncSubject.prototype._subscribe = function(subscriber) {
      if (this.hasCompleted && this.hasNext) {
        subscriber.next(this.value);
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype._next = function(value) {
      this.value = value;
      this.hasNext = true;
    };
    AsyncSubject.prototype._complete = function() {
      var index = -1;
      var observers = this.observers;
      var len = observers.length;
      this.isUnsubscribed = true;
      if (this.hasNext) {
        while (++index < len) {
          var o = observers[index];
          o.next(this.value);
          o.complete();
        }
      } else {
        while (++index < len) {
          observers[index].complete();
        }
      }
      this.isUnsubscribed = false;
      this.unsubscribe();
    };
    return AsyncSubject;
  }(Subject_1.Subject));
  exports.AsyncSubject = AsyncSubject;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/operator/observeOn.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Notification.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Notification_1 = $__require('npm:rxjs@5.0.0-beta.7/Notification.js');
  function observeOn(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this.lift(new ObserveOnOperator(scheduler, delay));
  }
  exports.observeOn = observeOn;
  var ObserveOnOperator = (function() {
    function ObserveOnOperator(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function(subscriber, source) {
      return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
  }());
  exports.ObserveOnOperator = ObserveOnOperator;
  var ObserveOnSubscriber = (function(_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      _super.call(this, destination);
      this.scheduler = scheduler;
      this.delay = delay;
    }
    ObserveOnSubscriber.dispatch = function(arg) {
      var notification = arg.notification,
          destination = arg.destination;
      notification.observe(destination);
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function(notification) {
      this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function(value) {
      this.scheduleMessage(Notification_1.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function(err) {
      this.scheduleMessage(Notification_1.Notification.createError(err));
    };
    ObserveOnSubscriber.prototype._complete = function() {
      this.scheduleMessage(Notification_1.Notification.createComplete());
    };
    return ObserveOnSubscriber;
  }(Subscriber_1.Subscriber));
  exports.ObserveOnSubscriber = ObserveOnSubscriber;
  var ObserveOnMessage = (function() {
    function ObserveOnMessage(notification, destination) {
      this.notification = notification;
      this.destination = destination;
    }
    return ObserveOnMessage;
  }());
  exports.ObserveOnMessage = ObserveOnMessage;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/ReplaySubject.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/scheduler/queue.js", "npm:rxjs@5.0.0-beta.7/operator/observeOn.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var queue_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/queue.js');
  var observeOn_1 = $__require('npm:rxjs@5.0.0-beta.7/operator/observeOn.js');
  var ReplaySubject = (function(_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
      if (bufferSize === void 0) {
        bufferSize = Number.POSITIVE_INFINITY;
      }
      if (windowTime === void 0) {
        windowTime = Number.POSITIVE_INFINITY;
      }
      _super.call(this);
      this.events = [];
      this.scheduler = scheduler;
      this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
      this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype._next = function(value) {
      var now = this._getNow();
      this.events.push(new ReplayEvent(now, value));
      this._trimBufferThenGetEvents(now);
      _super.prototype._next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
      var events = this._trimBufferThenGetEvents(this._getNow());
      var scheduler = this.scheduler;
      if (scheduler) {
        subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
      }
      var index = -1;
      var len = events.length;
      while (++index < len && !subscriber.isUnsubscribed) {
        subscriber.next(events[index].value);
      }
      return _super.prototype._subscribe.call(this, subscriber);
    };
    ReplaySubject.prototype._getNow = function() {
      return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function(now) {
      var bufferSize = this.bufferSize;
      var _windowTime = this._windowTime;
      var events = this.events;
      var eventsCount = events.length;
      var spliceCount = 0;
      while (spliceCount < eventsCount) {
        if ((now - events[spliceCount].time) < _windowTime) {
          break;
        }
        spliceCount += 1;
      }
      if (eventsCount > bufferSize) {
        spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
      }
      if (spliceCount > 0) {
        events.splice(0, spliceCount);
      }
      return events;
    };
    return ReplaySubject;
  }(Subject_1.Subject));
  exports.ReplaySubject = ReplaySubject;
  var ReplayEvent = (function() {
    function ReplayEvent(time, value) {
      this.time = time;
      this.value = value;
    }
    return ReplayEvent;
  }());
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/SubjectSubscription.js", ["npm:rxjs@5.0.0-beta.7/Subscription.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var SubjectSubscription = (function(_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, observer) {
      _super.call(this);
      this.subject = subject;
      this.observer = observer;
      this.isUnsubscribed = false;
    }
    SubjectSubscription.prototype.unsubscribe = function() {
      if (this.isUnsubscribed) {
        return;
      }
      this.isUnsubscribed = true;
      var subject = this.subject;
      var observers = subject.observers;
      this.subject = null;
      if (!observers || observers.length === 0 || subject.isUnsubscribed) {
        return;
      }
      var subscriberIndex = observers.indexOf(this.observer);
      if (subscriberIndex !== -1) {
        observers.splice(subscriberIndex, 1);
      }
    };
    return SubjectSubscription;
  }(Subscription_1.Subscription));
  exports.SubjectSubscription = SubjectSubscription;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Subject.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/SubjectSubscription.js", "npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js", "npm:rxjs@5.0.0-beta.7/util/throwError.js", "npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var SubjectSubscription_1 = $__require('npm:rxjs@5.0.0-beta.7/SubjectSubscription.js');
  var rxSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js');
  var throwError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/throwError.js');
  var ObjectUnsubscribedError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js');
  var Subject = (function(_super) {
    __extends(Subject, _super);
    function Subject(destination, source) {
      _super.call(this);
      this.destination = destination;
      this.source = source;
      this.observers = [];
      this.isUnsubscribed = false;
      this.isStopped = false;
      this.hasErrored = false;
      this.dispatching = false;
      this.hasCompleted = false;
      this.source = source;
    }
    Subject.prototype.lift = function(operator) {
      var subject = new Subject(this.destination || this, this);
      subject.operator = operator;
      return subject;
    };
    Subject.prototype.add = function(subscription) {
      return Subscription_1.Subscription.prototype.add.call(this, subscription);
    };
    Subject.prototype.remove = function(subscription) {
      Subscription_1.Subscription.prototype.remove.call(this, subscription);
    };
    Subject.prototype.unsubscribe = function() {
      Subscription_1.Subscription.prototype.unsubscribe.call(this);
    };
    Subject.prototype._subscribe = function(subscriber) {
      if (this.source) {
        return this.source.subscribe(subscriber);
      } else {
        if (subscriber.isUnsubscribed) {
          return;
        } else if (this.hasErrored) {
          return subscriber.error(this.errorValue);
        } else if (this.hasCompleted) {
          return subscriber.complete();
        }
        this.throwIfUnsubscribed();
        var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        this.observers.push(subscriber);
        return subscription;
      }
    };
    Subject.prototype._unsubscribe = function() {
      this.source = null;
      this.isStopped = true;
      this.observers = null;
      this.destination = null;
    };
    Subject.prototype.next = function(value) {
      this.throwIfUnsubscribed();
      if (this.isStopped) {
        return;
      }
      this.dispatching = true;
      this._next(value);
      this.dispatching = false;
      if (this.hasErrored) {
        this._error(this.errorValue);
      } else if (this.hasCompleted) {
        this._complete();
      }
    };
    Subject.prototype.error = function(err) {
      this.throwIfUnsubscribed();
      if (this.isStopped) {
        return;
      }
      this.isStopped = true;
      this.hasErrored = true;
      this.errorValue = err;
      if (this.dispatching) {
        return;
      }
      this._error(err);
    };
    Subject.prototype.complete = function() {
      this.throwIfUnsubscribed();
      if (this.isStopped) {
        return;
      }
      this.isStopped = true;
      this.hasCompleted = true;
      if (this.dispatching) {
        return;
      }
      this._complete();
    };
    Subject.prototype.asObservable = function() {
      var observable = new SubjectObservable(this);
      return observable;
    };
    Subject.prototype._next = function(value) {
      if (this.destination) {
        this.destination.next(value);
      } else {
        this._finalNext(value);
      }
    };
    Subject.prototype._finalNext = function(value) {
      var index = -1;
      var observers = this.observers.slice(0);
      var len = observers.length;
      while (++index < len) {
        observers[index].next(value);
      }
    };
    Subject.prototype._error = function(err) {
      if (this.destination) {
        this.destination.error(err);
      } else {
        this._finalError(err);
      }
    };
    Subject.prototype._finalError = function(err) {
      var index = -1;
      var observers = this.observers;
      this.observers = null;
      this.isUnsubscribed = true;
      if (observers) {
        var len = observers.length;
        while (++index < len) {
          observers[index].error(err);
        }
      }
      this.isUnsubscribed = false;
      this.unsubscribe();
    };
    Subject.prototype._complete = function() {
      if (this.destination) {
        this.destination.complete();
      } else {
        this._finalComplete();
      }
    };
    Subject.prototype._finalComplete = function() {
      var index = -1;
      var observers = this.observers;
      this.observers = null;
      this.isUnsubscribed = true;
      if (observers) {
        var len = observers.length;
        while (++index < len) {
          observers[index].complete();
        }
      }
      this.isUnsubscribed = false;
      this.unsubscribe();
    };
    Subject.prototype.throwIfUnsubscribed = function() {
      if (this.isUnsubscribed) {
        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
      }
    };
    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function() {
      return new Subscriber_1.Subscriber(this);
    };
    Subject.create = function(destination, source) {
      return new Subject(destination, source);
    };
    return Subject;
  }(Observable_1.Observable));
  exports.Subject = Subject;
  var SubjectObservable = (function(_super) {
    __extends(SubjectObservable, _super);
    function SubjectObservable(source) {
      _super.call(this);
      this.source = source;
    }
    return SubjectObservable;
  }(Observable_1.Observable));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/throwError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function throwError(e) {
    throw e;
  }
  exports.throwError = throwError;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/BehaviorSubject.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/util/throwError.js", "npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
  var throwError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/throwError.js');
  var ObjectUnsubscribedError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js');
  var BehaviorSubject = (function(_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
      _super.call(this);
      this._value = _value;
    }
    BehaviorSubject.prototype.getValue = function() {
      if (this.hasErrored) {
        throwError_1.throwError(this.errorValue);
      } else if (this.isUnsubscribed) {
        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
      } else {
        return this._value;
      }
    };
    Object.defineProperty(BehaviorSubject.prototype, "value", {
      get: function() {
        return this.getValue();
      },
      enumerable: true,
      configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
      var subscription = _super.prototype._subscribe.call(this, subscriber);
      if (subscription && !subscription.isUnsubscribed) {
        subscriber.next(this._value);
      }
      return subscription;
    };
    BehaviorSubject.prototype._next = function(value) {
      _super.prototype._next.call(this, this._value = value);
    };
    BehaviorSubject.prototype._error = function(err) {
      this.hasErrored = true;
      _super.prototype._error.call(this, this.errorValue = err);
    };
    return BehaviorSubject;
  }(Subject_1.Subject));
  exports.BehaviorSubject = BehaviorSubject;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/observable/ConnectableObservable.js", ["npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/Subscription.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var ConnectableObservable = (function(_super) {
    __extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
      _super.call(this);
      this.source = source;
      this.subjectFactory = subjectFactory;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
      return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
      var subject = this.subject;
      if (subject && !subject.isUnsubscribed) {
        return subject;
      }
      return (this.subject = this.subjectFactory());
    };
    ConnectableObservable.prototype.connect = function() {
      var source = this.source;
      var subscription = this.subscription;
      if (subscription && !subscription.isUnsubscribed) {
        return subscription;
      }
      subscription = source.subscribe(this.getSubject());
      subscription.add(new ConnectableSubscription(this));
      return (this.subscription = subscription);
    };
    ConnectableObservable.prototype.refCount = function() {
      return new RefCountObservable(this);
    };
    ConnectableObservable.prototype._closeSubscription = function() {
      this.subject = null;
      this.subscription = null;
    };
    return ConnectableObservable;
  }(Observable_1.Observable));
  exports.ConnectableObservable = ConnectableObservable;
  var ConnectableSubscription = (function(_super) {
    __extends(ConnectableSubscription, _super);
    function ConnectableSubscription(connectable) {
      _super.call(this);
      this.connectable = connectable;
    }
    ConnectableSubscription.prototype._unsubscribe = function() {
      var connectable = this.connectable;
      connectable._closeSubscription();
      this.connectable = null;
    };
    return ConnectableSubscription;
  }(Subscription_1.Subscription));
  var RefCountObservable = (function(_super) {
    __extends(RefCountObservable, _super);
    function RefCountObservable(connectable, refCount) {
      if (refCount === void 0) {
        refCount = 0;
      }
      _super.call(this);
      this.connectable = connectable;
      this.refCount = refCount;
    }
    RefCountObservable.prototype._subscribe = function(subscriber) {
      var connectable = this.connectable;
      var refCountSubscriber = new RefCountSubscriber(subscriber, this);
      var subscription = connectable.subscribe(refCountSubscriber);
      if (!subscription.isUnsubscribed && ++this.refCount === 1) {
        refCountSubscriber.connection = this.connection = connectable.connect();
      }
      return subscription;
    };
    return RefCountObservable;
  }(Observable_1.Observable));
  var RefCountSubscriber = (function(_super) {
    __extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, refCountObservable) {
      _super.call(this, null);
      this.destination = destination;
      this.refCountObservable = refCountObservable;
      this.connection = refCountObservable.connection;
      destination.add(this);
    }
    RefCountSubscriber.prototype._next = function(value) {
      this.destination.next(value);
    };
    RefCountSubscriber.prototype._error = function(err) {
      this._resetConnectable();
      this.destination.error(err);
    };
    RefCountSubscriber.prototype._complete = function() {
      this._resetConnectable();
      this.destination.complete();
    };
    RefCountSubscriber.prototype._resetConnectable = function() {
      var observable = this.refCountObservable;
      var obsConnection = observable.connection;
      var subConnection = this.connection;
      if (subConnection && subConnection === obsConnection) {
        observable.refCount = 0;
        obsConnection.unsubscribe();
        observable.connection = null;
        this.unsubscribe();
      }
    };
    RefCountSubscriber.prototype._unsubscribe = function() {
      var observable = this.refCountObservable;
      if (observable.refCount === 0) {
        return;
      }
      if (--observable.refCount === 0) {
        var obsConnection = observable.connection;
        var subConnection = this.connection;
        if (subConnection && subConnection === obsConnection) {
          obsConnection.unsubscribe();
          observable.connection = null;
        }
      }
    };
    return RefCountSubscriber;
  }(Subscriber_1.Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Observer.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.empty = {
    isUnsubscribed: true,
    next: function(value) {},
    error: function(err) {
      throw err;
    },
    complete: function() {}
  };
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Subscriber.js", ["npm:rxjs@5.0.0-beta.7/util/isFunction.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js", "npm:rxjs@5.0.0-beta.7/Observer.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var isFunction_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isFunction.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var rxSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js');
  var Observer_1 = $__require('npm:rxjs@5.0.0-beta.7/Observer.js');
  var Subscriber = (function(_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
      _super.call(this);
      this.syncErrorValue = null;
      this.syncErrorThrown = false;
      this.syncErrorThrowable = false;
      this.isStopped = false;
      switch (arguments.length) {
        case 0:
          this.destination = Observer_1.empty;
          break;
        case 1:
          if (!destinationOrNext) {
            this.destination = Observer_1.empty;
            break;
          }
          if (typeof destinationOrNext === 'object') {
            if (destinationOrNext instanceof Subscriber) {
              this.destination = destinationOrNext;
              this.destination.add(this);
            } else {
              this.syncErrorThrowable = true;
              this.destination = new SafeSubscriber(this, destinationOrNext);
            }
            break;
          }
        default:
          this.syncErrorThrowable = true;
          this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
          break;
      }
    }
    Subscriber.create = function(next, error, complete) {
      var subscriber = new Subscriber(next, error, complete);
      subscriber.syncErrorThrowable = false;
      return subscriber;
    };
    Subscriber.prototype.next = function(value) {
      if (!this.isStopped) {
        this._next(value);
      }
    };
    Subscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber.prototype.complete = function() {
      if (!this.isStopped) {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber.prototype.unsubscribe = function() {
      if (this.isUnsubscribed) {
        return;
      }
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
      this.destination.error(err);
      this.unsubscribe();
    };
    Subscriber.prototype._complete = function() {
      this.destination.complete();
      this.unsubscribe();
    };
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function() {
      return this;
    };
    return Subscriber;
  }(Subscription_1.Subscription));
  exports.Subscriber = Subscriber;
  var SafeSubscriber = (function(_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
      _super.call(this);
      this._parent = _parent;
      var next;
      var context = this;
      if (isFunction_1.isFunction(observerOrNext)) {
        next = observerOrNext;
      } else if (observerOrNext) {
        context = observerOrNext;
        next = observerOrNext.next;
        error = observerOrNext.error;
        complete = observerOrNext.complete;
        if (isFunction_1.isFunction(context.unsubscribe)) {
          this.add(context.unsubscribe.bind(context));
        }
        context.unsubscribe = this.unsubscribe.bind(this);
      }
      this._context = context;
      this._next = next;
      this._error = error;
      this._complete = complete;
    }
    SafeSubscriber.prototype.next = function(value) {
      if (!this.isStopped && this._next) {
        var _parent = this._parent;
        if (!_parent.syncErrorThrowable) {
          this.__tryOrUnsub(this._next, value);
        } else if (this.__tryOrSetError(_parent, this._next, value)) {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.error = function(err) {
      if (!this.isStopped) {
        var _parent = this._parent;
        if (this._error) {
          if (!_parent.syncErrorThrowable) {
            this.__tryOrUnsub(this._error, err);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parent, this._error, err);
            this.unsubscribe();
          }
        } else if (!_parent.syncErrorThrowable) {
          this.unsubscribe();
          throw err;
        } else {
          _parent.syncErrorValue = err;
          _parent.syncErrorThrown = true;
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.complete = function() {
      if (!this.isStopped) {
        var _parent = this._parent;
        if (this._complete) {
          if (!_parent.syncErrorThrowable) {
            this.__tryOrUnsub(this._complete);
            this.unsubscribe();
          } else {
            this.__tryOrSetError(_parent, this._complete);
            this.unsubscribe();
          }
        } else {
          this.unsubscribe();
        }
      }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function(fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        this.unsubscribe();
        throw err;
      }
    };
    SafeSubscriber.prototype.__tryOrSetError = function(parent, fn, value) {
      try {
        fn.call(this._context, value);
      } catch (err) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      }
      return false;
    };
    SafeSubscriber.prototype._unsubscribe = function() {
      var _parent = this._parent;
      this._context = null;
      this._parent = null;
      _parent.unsubscribe();
    };
    return SafeSubscriber;
  }(Subscriber));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/toSubscriber.js", ["npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
  var rxSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js');
  function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver === 'object') {
      if (nextOrObserver instanceof Subscriber_1.Subscriber) {
        return nextOrObserver;
      } else if (typeof nextOrObserver[rxSubscriber_1.$$rxSubscriber] === 'function') {
        return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
      }
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
  }
  exports.toSubscriber = toSubscriber;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Observable.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "npm:rxjs@5.0.0-beta.7/util/toSubscriber.js", "npm:symbol-observable@0.2.4.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var toSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/util/toSubscriber.js');
  var $$observable = $__require('npm:symbol-observable@0.2.4.js');
  var Observable = (function() {
    function Observable(subscribe) {
      this._isScalar = false;
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable.prototype.lift = function(operator) {
      var observable = new Observable();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
      var operator = this.operator;
      var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
      sink.add(operator ? operator.call(sink, this) : this._subscribe(sink));
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;
        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
      return sink;
    };
    Observable.prototype.forEach = function(next, PromiseCtor) {
      var _this = this;
      if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
          PromiseCtor = root_1.root.Rx.config.Promise;
        } else if (root_1.root.Promise) {
          PromiseCtor = root_1.root.Promise;
        }
      }
      if (!PromiseCtor) {
        throw new Error('no Promise impl found');
      }
      return new PromiseCtor(function(resolve, reject) {
        var subscription = _this.subscribe(function(value) {
          if (subscription) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscription.unsubscribe();
            }
          } else {
            next(value);
          }
        }, reject, resolve);
      });
    };
    Observable.prototype._subscribe = function(subscriber) {
      return this.source.subscribe(subscriber);
    };
    Observable.prototype[$$observable] = function() {
      return this;
    };
    Observable.create = function(subscribe) {
      return new Observable(subscribe);
    };
    return Observable;
  }());
  exports.Observable = Observable;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Notification.js", ["npm:rxjs@5.0.0-beta.7/Observable.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
  var Notification = (function() {
    function Notification(kind, value, exception) {
      this.kind = kind;
      this.value = value;
      this.exception = exception;
      this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function(observer) {
      switch (this.kind) {
        case 'N':
          return observer.next && observer.next(this.value);
        case 'E':
          return observer.error && observer.error(this.exception);
        case 'C':
          return observer.complete && observer.complete();
      }
    };
    Notification.prototype.do = function(next, error, complete) {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return next && next(this.value);
        case 'E':
          return error && error(this.exception);
        case 'C':
          return complete && complete();
      }
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
      if (nextOrObserver && typeof nextOrObserver.next === 'function') {
        return this.observe(nextOrObserver);
      } else {
        return this.do(nextOrObserver, error, complete);
      }
    };
    Notification.prototype.toObservable = function() {
      var kind = this.kind;
      switch (kind) {
        case 'N':
          return Observable_1.Observable.of(this.value);
        case 'E':
          return Observable_1.Observable.throw(this.exception);
        case 'C':
          return Observable_1.Observable.empty();
      }
    };
    Notification.createNext = function(value) {
      if (typeof value !== 'undefined') {
        return new Notification('N', value);
      }
      return this.undefinedValueNotification;
    };
    Notification.createError = function(err) {
      return new Notification('E', undefined, err);
    };
    Notification.createComplete = function() {
      return this.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
  }());
  exports.Notification = Notification;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/EmptyError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var EmptyError = (function(_super) {
    __extends(EmptyError, _super);
    function EmptyError() {
      _super.call(this, 'no elements in sequence');
      this.name = 'EmptyError';
    }
    return EmptyError;
  }(Error));
  exports.EmptyError = EmptyError;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ArgumentOutOfRangeError = (function(_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
      _super.call(this, 'argument out of range');
      this.name = 'ArgumentOutOfRangeError';
    }
    return ArgumentOutOfRangeError;
  }(Error));
  exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var ObjectUnsubscribedError = (function(_super) {
    __extends(ObjectUnsubscribedError, _super);
    function ObjectUnsubscribedError() {
      _super.call(this, 'object unsubscribed');
      this.name = 'ObjectUnsubscribedError';
    }
    return ObjectUnsubscribedError;
  }(Error));
  exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/Immediate.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
    var ImmediateDefinition = (function() {
      function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
          this.setImmediate = root.setImmediate.bind(root);
          this.clearImmediate = root.clearImmediate.bind(root);
        } else {
          this.nextHandle = 1;
          this.tasksByHandle = {};
          this.currentlyRunningATask = false;
          if (this.canUseProcessNextTick()) {
            this.setImmediate = this.createProcessNextTickSetImmediate();
          } else if (this.canUsePostMessage()) {
            this.setImmediate = this.createPostMessageSetImmediate();
          } else if (this.canUseMessageChannel()) {
            this.setImmediate = this.createMessageChannelSetImmediate();
          } else if (this.canUseReadyStateChange()) {
            this.setImmediate = this.createReadyStateChangeSetImmediate();
          } else {
            this.setImmediate = this.createSetTimeoutSetImmediate();
          }
          var ci = function clearImmediate(handle) {
            delete clearImmediate.instance.tasksByHandle[handle];
          };
          ci.instance = this;
          this.clearImmediate = ci;
        }
      }
      ImmediateDefinition.prototype.identify = function(o) {
        return this.root.Object.prototype.toString.call(o);
      };
      ImmediateDefinition.prototype.canUseProcessNextTick = function() {
        return this.identify(this.root.process) === '[object process]';
      };
      ImmediateDefinition.prototype.canUseMessageChannel = function() {
        return Boolean(this.root.MessageChannel);
      };
      ImmediateDefinition.prototype.canUseReadyStateChange = function() {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
      };
      ImmediateDefinition.prototype.canUsePostMessage = function() {
        var root = this.root;
        if (root.postMessage && !root.importScripts) {
          var postMessageIsAsynchronous_1 = true;
          var oldOnMessage = root.onmessage;
          root.onmessage = function() {
            postMessageIsAsynchronous_1 = false;
          };
          root.postMessage('', '*');
          root.onmessage = oldOnMessage;
          return postMessageIsAsynchronous_1;
        }
        return false;
      };
      ImmediateDefinition.prototype.partiallyApplied = function(handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
          var _a = result,
              handler = _a.handler,
              args = _a.args;
          if (typeof handler === 'function') {
            handler.apply(undefined, args);
          } else {
            (new Function('' + handler))();
          }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
      };
      ImmediateDefinition.prototype.addFromSetImmediateArguments = function(args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
      };
      ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function() {
        var fn = function setImmediate() {
          var instance = setImmediate.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
          return handle;
        };
        fn.instance = this;
        return fn;
      };
      ImmediateDefinition.prototype.createPostMessageSetImmediate = function() {
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
          var instance = globalMessageHandler.instance;
          if (event.source === root && typeof event.data === 'string' && event.data.indexOf(messagePrefix) === 0) {
            instance.runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
          var _a = setImmediate,
              messagePrefix = _a.messagePrefix,
              instance = _a.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          instance.root.postMessage(messagePrefix + handle, '*');
          return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
      };
      ImmediateDefinition.prototype.runIfPresent = function(handle) {
        if (this.currentlyRunningATask) {
          this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        } else {
          var task = this.tasksByHandle[handle];
          if (task) {
            this.currentlyRunningATask = true;
            try {
              task();
            } finally {
              this.clearImmediate(handle);
              this.currentlyRunningATask = false;
            }
          }
        }
      };
      ImmediateDefinition.prototype.createMessageChannelSetImmediate = function() {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function(event) {
          var handle = event.data;
          _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
          var _a = setImmediate,
              channel = _a.channel,
              instance = _a.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          channel.port2.postMessage(handle);
          return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
      };
      ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function() {
        var fn = function setImmediate() {
          var instance = setImmediate.instance;
          var root = instance.root;
          var doc = root.document;
          var html = doc.documentElement;
          var handle = instance.addFromSetImmediateArguments(arguments);
          var script = doc.createElement('script');
          script.onreadystatechange = function() {
            instance.runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
          return handle;
        };
        fn.instance = this;
        return fn;
      };
      ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function() {
        var fn = function setImmediate() {
          var instance = setImmediate.instance;
          var handle = instance.addFromSetImmediateArguments(arguments);
          instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
          return handle;
        };
        fn.instance = this;
        return fn;
      };
      return ImmediateDefinition;
    }());
    exports.ImmediateDefinition = ImmediateDefinition;
    exports.Immediate = new ImmediateDefinition(root_1.root);
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/AsapAction.js", ["npm:rxjs@5.0.0-beta.7/util/Immediate.js", "npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var Immediate_1 = $__require('npm:rxjs@5.0.0-beta.7/util/Immediate.js');
  var FutureAction_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js');
  var AsapAction = (function(_super) {
    __extends(AsapAction, _super);
    function AsapAction() {
      _super.apply(this, arguments);
    }
    AsapAction.prototype._schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype._schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      var scheduler = this.scheduler;
      scheduler.actions.push(this);
      if (!scheduler.scheduledId) {
        scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function() {
          scheduler.scheduledId = null;
          scheduler.flush();
        });
      }
      return this;
    };
    AsapAction.prototype._unsubscribe = function() {
      var scheduler = this.scheduler;
      var scheduledId = scheduler.scheduledId,
          actions = scheduler.actions;
      _super.prototype._unsubscribe.call(this);
      if (actions.length === 0) {
        scheduler.active = false;
        if (scheduledId != null) {
          scheduler.scheduledId = null;
          Immediate_1.Immediate.clearImmediate(scheduledId);
        }
      }
    };
    return AsapAction;
  }(FutureAction_1.FutureAction));
  exports.AsapAction = AsapAction;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/AsapScheduler.js", ["npm:rxjs@5.0.0-beta.7/scheduler/AsapAction.js", "npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var AsapAction_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/AsapAction.js');
  var QueueScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js');
  var AsapScheduler = (function(_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
      _super.apply(this, arguments);
    }
    AsapScheduler.prototype.scheduleNow = function(work, state) {
      return new AsapAction_1.AsapAction(this, work).schedule(state);
    };
    return AsapScheduler;
  }(QueueScheduler_1.QueueScheduler));
  exports.AsapScheduler = AsapScheduler;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/asap.js", ["npm:rxjs@5.0.0-beta.7/scheduler/AsapScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var AsapScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/AsapScheduler.js');
  exports.asap = new AsapScheduler_1.AsapScheduler();
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/AsyncScheduler.js", ["npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js", "npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var FutureAction_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js');
  var QueueScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js');
  var AsyncScheduler = (function(_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
      _super.apply(this, arguments);
    }
    AsyncScheduler.prototype.scheduleNow = function(work, state) {
      return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
    };
    return AsyncScheduler;
  }(QueueScheduler_1.QueueScheduler));
  exports.AsyncScheduler = AsyncScheduler;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/async.js", ["npm:rxjs@5.0.0-beta.7/scheduler/AsyncScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var AsyncScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/AsyncScheduler.js');
  exports.async = new AsyncScheduler_1.AsyncScheduler();
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/QueueAction.js", ["npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var FutureAction_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js');
  var QueueAction = (function(_super) {
    __extends(QueueAction, _super);
    function QueueAction() {
      _super.apply(this, arguments);
    }
    QueueAction.prototype._schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (delay > 0) {
        return _super.prototype._schedule.call(this, state, delay);
      }
      this.delay = delay;
      this.state = state;
      var scheduler = this.scheduler;
      scheduler.actions.push(this);
      scheduler.flush();
      return this;
    };
    return QueueAction;
  }(FutureAction_1.FutureAction));
  exports.QueueAction = QueueAction;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isArray.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.isArray = Array.isArray || (function(x) {
    return x && typeof x.length === 'number';
  });
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isObject.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isObject(x) {
    return x != null && typeof x === 'object';
  }
  exports.isObject = isObject;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/isFunction.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function isFunction(x) {
    return typeof x === 'function';
  }
  exports.isFunction = isFunction;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/tryCatch.js", ["npm:rxjs@5.0.0-beta.7/util/errorObject.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
  var tryCatchTarget;
  function tryCatcher() {
    try {
      return tryCatchTarget.apply(this, arguments);
    } catch (e) {
      errorObject_1.errorObject.e = e;
      return errorObject_1.errorObject;
    }
  }
  function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
  }
  exports.tryCatch = tryCatch;
  ;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/errorObject.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.errorObject = {e: {}};
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/UnsubscriptionError.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var UnsubscriptionError = (function(_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
      _super.call(this);
      this.errors = errors;
      this.name = 'UnsubscriptionError';
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return ((i + 1) + ") " + err.toString());
      }).join('\n') : '';
    }
    return UnsubscriptionError;
  }(Error));
  exports.UnsubscriptionError = UnsubscriptionError;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Subscription.js", ["npm:rxjs@5.0.0-beta.7/util/isArray.js", "npm:rxjs@5.0.0-beta.7/util/isObject.js", "npm:rxjs@5.0.0-beta.7/util/isFunction.js", "npm:rxjs@5.0.0-beta.7/util/tryCatch.js", "npm:rxjs@5.0.0-beta.7/util/errorObject.js", "npm:rxjs@5.0.0-beta.7/util/UnsubscriptionError.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var isArray_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isArray.js');
    var isObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isObject.js');
    var isFunction_1 = $__require('npm:rxjs@5.0.0-beta.7/util/isFunction.js');
    var tryCatch_1 = $__require('npm:rxjs@5.0.0-beta.7/util/tryCatch.js');
    var errorObject_1 = $__require('npm:rxjs@5.0.0-beta.7/util/errorObject.js');
    var UnsubscriptionError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/UnsubscriptionError.js');
    var Subscription = (function() {
      function Subscription(unsubscribe) {
        this.isUnsubscribed = false;
        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription.prototype.unsubscribe = function() {
        var hasErrors = false;
        var errors;
        if (this.isUnsubscribed) {
          return;
        }
        this.isUnsubscribed = true;
        var _a = this,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
          var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
          if (trial === errorObject_1.errorObject) {
            hasErrors = true;
            (errors = errors || []).push(errorObject_1.errorObject.e);
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject_1.isObject(sub)) {
              var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
              if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || [];
                var err = errorObject_1.errorObject.e;
                if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(err.errors);
                } else {
                  errors.push(err);
                }
              }
            }
          }
        }
        if (hasErrors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };
      Subscription.prototype.add = function(teardown) {
        if (!teardown || (teardown === this) || (teardown === Subscription.EMPTY)) {
          return;
        }
        var sub = teardown;
        switch (typeof teardown) {
          case 'function':
            sub = new Subscription(teardown);
          case 'object':
            if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
              break;
            } else if (this.isUnsubscribed) {
              sub.unsubscribe();
            } else {
              (this._subscriptions || (this._subscriptions = [])).push(sub);
            }
            break;
          default:
            throw new Error('Unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        return sub;
      };
      Subscription.prototype.remove = function(subscription) {
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
          return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription.EMPTY = (function(empty) {
        empty.isUnsubscribed = true;
        return empty;
      }(new Subscription()));
      return Subscription;
    }());
    exports.Subscription = Subscription;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js", ["npm:rxjs@5.0.0-beta.7/util/root.js", "npm:rxjs@5.0.0-beta.7/Subscription.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
  var FutureAction = (function(_super) {
    __extends(FutureAction, _super);
    function FutureAction(scheduler, work) {
      _super.call(this);
      this.scheduler = scheduler;
      this.work = work;
      this.pending = false;
    }
    FutureAction.prototype.execute = function() {
      if (this.isUnsubscribed) {
        this.error = new Error('executing a cancelled action');
      } else {
        try {
          this.work(this.state);
        } catch (e) {
          this.unsubscribe();
          this.error = e;
        }
      }
    };
    FutureAction.prototype.schedule = function(state, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      if (this.isUnsubscribed) {
        return this;
      }
      return this._schedule(state, delay);
    };
    FutureAction.prototype._schedule = function(state, delay) {
      var _this = this;
      if (delay === void 0) {
        delay = 0;
      }
      this.state = state;
      this.pending = true;
      var id = this.id;
      if (id != null && this.delay === delay) {
        return this;
      }
      this.delay = delay;
      if (id != null) {
        this.id = null;
        root_1.root.clearInterval(id);
      }
      this.id = root_1.root.setInterval(function() {
        _this.pending = false;
        var _a = _this,
            id = _a.id,
            scheduler = _a.scheduler;
        scheduler.actions.push(_this);
        scheduler.flush();
        if (_this.pending === false && id != null) {
          _this.id = null;
          root_1.root.clearInterval(id);
        }
      }, delay);
      return this;
    };
    FutureAction.prototype._unsubscribe = function() {
      this.pending = false;
      var _a = this,
          id = _a.id,
          scheduler = _a.scheduler;
      var actions = scheduler.actions;
      var index = actions.indexOf(this);
      if (id != null) {
        this.id = null;
        root_1.root.clearInterval(id);
      }
      if (index !== -1) {
        actions.splice(index, 1);
      }
      this.work = null;
      this.state = null;
      this.scheduler = null;
    };
    return FutureAction;
  }(Subscription_1.Subscription));
  exports.FutureAction = FutureAction;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js", ["npm:rxjs@5.0.0-beta.7/scheduler/QueueAction.js", "npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var QueueAction_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/QueueAction.js');
  var FutureAction_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/FutureAction.js');
  var QueueScheduler = (function() {
    function QueueScheduler() {
      this.active = false;
      this.actions = [];
      this.scheduledId = null;
    }
    QueueScheduler.prototype.now = function() {
      return Date.now();
    };
    QueueScheduler.prototype.flush = function() {
      if (this.active || this.scheduledId) {
        return;
      }
      this.active = true;
      var actions = this.actions;
      for (var action = null; action = actions.shift(); ) {
        action.execute();
        if (action.error) {
          this.active = false;
          throw action.error;
        }
      }
      this.active = false;
    };
    QueueScheduler.prototype.schedule = function(work, delay, state) {
      if (delay === void 0) {
        delay = 0;
      }
      return (delay <= 0) ? this.scheduleNow(work, state) : this.scheduleLater(work, delay, state);
    };
    QueueScheduler.prototype.scheduleNow = function(work, state) {
      return new QueueAction_1.QueueAction(this, work).schedule(state);
    };
    QueueScheduler.prototype.scheduleLater = function(work, delay, state) {
      return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
    };
    return QueueScheduler;
  }());
  exports.QueueScheduler = QueueScheduler;
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/scheduler/queue.js", ["npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var QueueScheduler_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/QueueScheduler.js');
  exports.queue = new QueueScheduler_1.QueueScheduler();
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js", ["npm:rxjs@5.0.0-beta.7/util/root.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var Symbol = root_1.root.Symbol;
  exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ? Symbol.for('rxSubscriber') : '@@rxSubscriber';
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/util/root.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };
  exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    exports.root = freeGlobal;
  }
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/symbol/iterator.js", ["npm:rxjs@5.0.0-beta.7/util/root.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var root_1 = $__require('npm:rxjs@5.0.0-beta.7/util/root.js');
  var Symbol = root_1.root.Symbol;
  if (typeof Symbol === 'function') {
    if (Symbol.iterator) {
      exports.$$iterator = Symbol.iterator;
    } else if (typeof Symbol.for === 'function') {
      exports.$$iterator = Symbol.for('iterator');
    }
  } else {
    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
      exports.$$iterator = '@@iterator';
    } else if (root_1.root.Map) {
      var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
          exports.$$iterator = key;
          break;
        }
      }
    } else {
      exports.$$iterator = '@@iterator';
    }
  }
  return module.exports;
});

System.registerDynamic("npm:symbol-observable@0.2.4/ponyfill.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function symbolObservablePonyfill(root) {
    var result;
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
      if (Symbol.observable) {
        result = Symbol.observable;
      } else {
        result = Symbol('observable');
        Symbol.observable = result;
      }
    } else {
      result = '@@observable';
    }
    return result;
  };
  return module.exports;
});

System.registerDynamic("npm:symbol-observable@0.2.4/index.js", ["npm:symbol-observable@0.2.4/ponyfill.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:symbol-observable@0.2.4/ponyfill.js')(global || window || this);
  return module.exports;
});

System.registerDynamic("npm:symbol-observable@0.2.4.js", ["npm:symbol-observable@0.2.4/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:symbol-observable@0.2.4/index.js');
  return module.exports;
});

System.registerDynamic("npm:process@0.11.3/browser.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

System.registerDynamic("npm:process@0.11.3.js", ["npm:process@0.11.3/browser.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:process@0.11.3/browser.js');
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2/index.js", ["npm:process@0.11.3.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.3.js');
  return module.exports;
});

System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('github:jspm/nodelibs-process@0.1.2/index.js');
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7/Rx.js", ["npm:rxjs@5.0.0-beta.7/Subject.js", "npm:rxjs@5.0.0-beta.7/Observable.js", "npm:rxjs@5.0.0-beta.7/add/observable/bindCallback.js", "npm:rxjs@5.0.0-beta.7/add/observable/bindNodeCallback.js", "npm:rxjs@5.0.0-beta.7/add/observable/combineLatest.js", "npm:rxjs@5.0.0-beta.7/add/observable/concat.js", "npm:rxjs@5.0.0-beta.7/add/observable/defer.js", "npm:rxjs@5.0.0-beta.7/add/observable/empty.js", "npm:rxjs@5.0.0-beta.7/add/observable/forkJoin.js", "npm:rxjs@5.0.0-beta.7/add/observable/from.js", "npm:rxjs@5.0.0-beta.7/add/observable/fromEvent.js", "npm:rxjs@5.0.0-beta.7/add/observable/fromEventPattern.js", "npm:rxjs@5.0.0-beta.7/add/observable/fromPromise.js", "npm:rxjs@5.0.0-beta.7/add/observable/generate.js", "npm:rxjs@5.0.0-beta.7/add/observable/interval.js", "npm:rxjs@5.0.0-beta.7/add/observable/merge.js", "npm:rxjs@5.0.0-beta.7/add/observable/race.js", "npm:rxjs@5.0.0-beta.7/add/observable/never.js", "npm:rxjs@5.0.0-beta.7/add/observable/of.js", "npm:rxjs@5.0.0-beta.7/add/observable/range.js", "npm:rxjs@5.0.0-beta.7/add/observable/throw.js", "npm:rxjs@5.0.0-beta.7/add/observable/timer.js", "npm:rxjs@5.0.0-beta.7/add/observable/zip.js", "npm:rxjs@5.0.0-beta.7/add/operator/buffer.js", "npm:rxjs@5.0.0-beta.7/add/operator/bufferCount.js", "npm:rxjs@5.0.0-beta.7/add/operator/bufferTime.js", "npm:rxjs@5.0.0-beta.7/add/operator/bufferToggle.js", "npm:rxjs@5.0.0-beta.7/add/operator/bufferWhen.js", "npm:rxjs@5.0.0-beta.7/add/operator/cache.js", "npm:rxjs@5.0.0-beta.7/add/operator/catch.js", "npm:rxjs@5.0.0-beta.7/add/operator/combineAll.js", "npm:rxjs@5.0.0-beta.7/add/operator/combineLatest.js", "npm:rxjs@5.0.0-beta.7/add/operator/concat.js", "npm:rxjs@5.0.0-beta.7/add/operator/concatAll.js", "npm:rxjs@5.0.0-beta.7/add/operator/concatMap.js", "npm:rxjs@5.0.0-beta.7/add/operator/concatMapTo.js", "npm:rxjs@5.0.0-beta.7/add/operator/count.js", "npm:rxjs@5.0.0-beta.7/add/operator/dematerialize.js", "npm:rxjs@5.0.0-beta.7/add/operator/debounce.js", "npm:rxjs@5.0.0-beta.7/add/operator/debounceTime.js", "npm:rxjs@5.0.0-beta.7/add/operator/defaultIfEmpty.js", "npm:rxjs@5.0.0-beta.7/add/operator/delay.js", "npm:rxjs@5.0.0-beta.7/add/operator/delayWhen.js", "npm:rxjs@5.0.0-beta.7/add/operator/distinctUntilChanged.js", "npm:rxjs@5.0.0-beta.7/add/operator/do.js", "npm:rxjs@5.0.0-beta.7/add/operator/expand.js", "npm:rxjs@5.0.0-beta.7/add/operator/filter.js", "npm:rxjs@5.0.0-beta.7/add/operator/finally.js", "npm:rxjs@5.0.0-beta.7/add/operator/first.js", "npm:rxjs@5.0.0-beta.7/add/operator/groupBy.js", "npm:rxjs@5.0.0-beta.7/add/operator/ignoreElements.js", "npm:rxjs@5.0.0-beta.7/add/operator/audit.js", "npm:rxjs@5.0.0-beta.7/add/operator/auditTime.js", "npm:rxjs@5.0.0-beta.7/add/operator/last.js", "npm:rxjs@5.0.0-beta.7/add/operator/let.js", "npm:rxjs@5.0.0-beta.7/add/operator/every.js", "npm:rxjs@5.0.0-beta.7/add/operator/map.js", "npm:rxjs@5.0.0-beta.7/add/operator/mapTo.js", "npm:rxjs@5.0.0-beta.7/add/operator/materialize.js", "npm:rxjs@5.0.0-beta.7/add/operator/merge.js", "npm:rxjs@5.0.0-beta.7/add/operator/mergeAll.js", "npm:rxjs@5.0.0-beta.7/add/operator/mergeMap.js", "npm:rxjs@5.0.0-beta.7/add/operator/mergeMapTo.js", "npm:rxjs@5.0.0-beta.7/add/operator/multicast.js", "npm:rxjs@5.0.0-beta.7/add/operator/observeOn.js", "npm:rxjs@5.0.0-beta.7/add/operator/partition.js", "npm:rxjs@5.0.0-beta.7/add/operator/pluck.js", "npm:rxjs@5.0.0-beta.7/add/operator/publish.js", "npm:rxjs@5.0.0-beta.7/add/operator/publishBehavior.js", "npm:rxjs@5.0.0-beta.7/add/operator/publishReplay.js", "npm:rxjs@5.0.0-beta.7/add/operator/publishLast.js", "npm:rxjs@5.0.0-beta.7/add/operator/race.js", "npm:rxjs@5.0.0-beta.7/add/operator/reduce.js", "npm:rxjs@5.0.0-beta.7/add/operator/repeat.js", "npm:rxjs@5.0.0-beta.7/add/operator/retry.js", "npm:rxjs@5.0.0-beta.7/add/operator/retryWhen.js", "npm:rxjs@5.0.0-beta.7/add/operator/sample.js", "npm:rxjs@5.0.0-beta.7/add/operator/sampleTime.js", "npm:rxjs@5.0.0-beta.7/add/operator/scan.js", "npm:rxjs@5.0.0-beta.7/add/operator/share.js", "npm:rxjs@5.0.0-beta.7/add/operator/single.js", "npm:rxjs@5.0.0-beta.7/add/operator/skip.js", "npm:rxjs@5.0.0-beta.7/add/operator/skipUntil.js", "npm:rxjs@5.0.0-beta.7/add/operator/skipWhile.js", "npm:rxjs@5.0.0-beta.7/add/operator/startWith.js", "npm:rxjs@5.0.0-beta.7/add/operator/subscribeOn.js", "npm:rxjs@5.0.0-beta.7/add/operator/switch.js", "npm:rxjs@5.0.0-beta.7/add/operator/switchMap.js", "npm:rxjs@5.0.0-beta.7/add/operator/switchMapTo.js", "npm:rxjs@5.0.0-beta.7/add/operator/take.js", "npm:rxjs@5.0.0-beta.7/add/operator/takeLast.js", "npm:rxjs@5.0.0-beta.7/add/operator/takeUntil.js", "npm:rxjs@5.0.0-beta.7/add/operator/takeWhile.js", "npm:rxjs@5.0.0-beta.7/add/operator/throttle.js", "npm:rxjs@5.0.0-beta.7/add/operator/throttleTime.js", "npm:rxjs@5.0.0-beta.7/add/operator/timeout.js", "npm:rxjs@5.0.0-beta.7/add/operator/timeoutWith.js", "npm:rxjs@5.0.0-beta.7/add/operator/toArray.js", "npm:rxjs@5.0.0-beta.7/add/operator/toPromise.js", "npm:rxjs@5.0.0-beta.7/add/operator/window.js", "npm:rxjs@5.0.0-beta.7/add/operator/windowCount.js", "npm:rxjs@5.0.0-beta.7/add/operator/windowTime.js", "npm:rxjs@5.0.0-beta.7/add/operator/windowToggle.js", "npm:rxjs@5.0.0-beta.7/add/operator/windowWhen.js", "npm:rxjs@5.0.0-beta.7/add/operator/withLatestFrom.js", "npm:rxjs@5.0.0-beta.7/add/operator/zip.js", "npm:rxjs@5.0.0-beta.7/add/operator/zipAll.js", "npm:rxjs@5.0.0-beta.7/Operator.js", "npm:rxjs@5.0.0-beta.7/Subscription.js", "npm:rxjs@5.0.0-beta.7/Subscriber.js", "npm:rxjs@5.0.0-beta.7/AsyncSubject.js", "npm:rxjs@5.0.0-beta.7/ReplaySubject.js", "npm:rxjs@5.0.0-beta.7/BehaviorSubject.js", "npm:rxjs@5.0.0-beta.7/observable/ConnectableObservable.js", "npm:rxjs@5.0.0-beta.7/Notification.js", "npm:rxjs@5.0.0-beta.7/util/EmptyError.js", "npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js", "npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js", "npm:rxjs@5.0.0-beta.7/util/UnsubscriptionError.js", "npm:rxjs@5.0.0-beta.7/scheduler/asap.js", "npm:rxjs@5.0.0-beta.7/scheduler/async.js", "npm:rxjs@5.0.0-beta.7/scheduler/queue.js", "npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js", "npm:rxjs@5.0.0-beta.7/symbol/iterator.js", "npm:symbol-observable@0.2.4.js", "github:jspm/nodelibs-process@0.1.2.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    "use strict";
    var Subject_1 = $__require('npm:rxjs@5.0.0-beta.7/Subject.js');
    exports.Subject = Subject_1.Subject;
    var Observable_1 = $__require('npm:rxjs@5.0.0-beta.7/Observable.js');
    exports.Observable = Observable_1.Observable;
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/bindCallback.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/bindNodeCallback.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/combineLatest.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/concat.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/defer.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/empty.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/forkJoin.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/from.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/fromEvent.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/fromEventPattern.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/fromPromise.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/generate.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/interval.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/merge.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/race.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/never.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/of.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/range.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/throw.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/timer.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/observable/zip.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/buffer.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/bufferCount.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/bufferTime.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/bufferToggle.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/bufferWhen.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/cache.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/catch.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/combineAll.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/combineLatest.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/concat.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/concatAll.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/concatMap.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/concatMapTo.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/count.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/dematerialize.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/debounce.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/debounceTime.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/defaultIfEmpty.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/delay.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/delayWhen.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/distinctUntilChanged.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/do.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/expand.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/filter.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/finally.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/first.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/groupBy.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/ignoreElements.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/audit.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/auditTime.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/last.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/let.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/every.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/map.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/mapTo.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/materialize.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/merge.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/mergeAll.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/mergeMap.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/mergeMapTo.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/multicast.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/observeOn.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/partition.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/pluck.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/publish.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/publishBehavior.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/publishReplay.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/publishLast.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/race.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/reduce.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/repeat.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/retry.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/retryWhen.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/sample.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/sampleTime.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/scan.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/share.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/single.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/skip.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/skipUntil.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/skipWhile.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/startWith.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/subscribeOn.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/switch.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/switchMap.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/switchMapTo.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/take.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/takeLast.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/takeUntil.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/takeWhile.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/throttle.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/throttleTime.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/timeout.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/timeoutWith.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/toArray.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/toPromise.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/window.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/windowCount.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/windowTime.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/windowToggle.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/windowWhen.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/withLatestFrom.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/zip.js');
    $__require('npm:rxjs@5.0.0-beta.7/add/operator/zipAll.js');
    var Operator_1 = $__require('npm:rxjs@5.0.0-beta.7/Operator.js');
    exports.Operator = Operator_1.Operator;
    var Subscription_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscription.js');
    exports.Subscription = Subscription_1.Subscription;
    var Subscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/Subscriber.js');
    exports.Subscriber = Subscriber_1.Subscriber;
    var AsyncSubject_1 = $__require('npm:rxjs@5.0.0-beta.7/AsyncSubject.js');
    exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
    var ReplaySubject_1 = $__require('npm:rxjs@5.0.0-beta.7/ReplaySubject.js');
    exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
    var BehaviorSubject_1 = $__require('npm:rxjs@5.0.0-beta.7/BehaviorSubject.js');
    exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
    var ConnectableObservable_1 = $__require('npm:rxjs@5.0.0-beta.7/observable/ConnectableObservable.js');
    exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
    var Notification_1 = $__require('npm:rxjs@5.0.0-beta.7/Notification.js');
    exports.Notification = Notification_1.Notification;
    var EmptyError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/EmptyError.js');
    exports.EmptyError = EmptyError_1.EmptyError;
    var ArgumentOutOfRangeError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/ArgumentOutOfRangeError.js');
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    var ObjectUnsubscribedError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/ObjectUnsubscribedError.js');
    exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    var UnsubscriptionError_1 = $__require('npm:rxjs@5.0.0-beta.7/util/UnsubscriptionError.js');
    exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
    var asap_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/asap.js');
    var async_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/async.js');
    var queue_1 = $__require('npm:rxjs@5.0.0-beta.7/scheduler/queue.js');
    var rxSubscriber_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/rxSubscriber.js');
    var iterator_1 = $__require('npm:rxjs@5.0.0-beta.7/symbol/iterator.js');
    var observable = $__require('npm:symbol-observable@0.2.4.js');
    var Scheduler = {
      asap: asap_1.asap,
      async: async_1.async,
      queue: queue_1.queue
    };
    exports.Scheduler = Scheduler;
    var Symbol = {
      rxSubscriber: rxSubscriber_1.$$rxSubscriber,
      observable: observable,
      iterator: iterator_1.$$iterator
    };
    exports.Symbol = Symbol;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
  return module.exports;
});

System.registerDynamic("npm:rxjs@5.0.0-beta.7.js", ["npm:rxjs@5.0.0-beta.7/Rx.js"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('npm:rxjs@5.0.0-beta.7/Rx.js');
  return module.exports;
});

System.register('src/core/index.js', ['npm:lodash-fp@0.10.4.js', 'npm:rxjs@5.0.0-beta.7.js'], function (_export) {
  'use strict';

  var _, Rx;

  /**
   * Check worker support
   * @return {Bool} suppport
   */
  function initialize() {
    return _.isFunction(window.Worker);
  }

  /**
    * Spawn a dedicated worker.
    * @param  {string} script - worker script.
    * @return {object} worker wrapper  -  worker wrapper object.
    */
  function spawn(script) {
    var w = new window.Worker(script);
    var observer = new Rx.ReplaySubject(1);
    w.onmessage = _Next;
    w.onerror = _Error;
    var ctx = {
      subscribe: subscribe,
      stop: stop
    };
    return ctx;

    /**
     * Terminate worker and complete observable.
     */
    function stop() {
      w.terminate();
      observer.complete();
    }

    /**
     * Map over stream of worker event data.
     * @param  {function} onNext - on next value callback.
     * @param  {function} onError - on error value callback.
     * @param  {function} onComplete - on complete value callback.
     * @return {object} token - subscription token.
     */
    function subscribe(onNext, onError, onComplete) {
      return observer.subscribe(onNext, onError, onComplete);
    }

    /**
     * Worker message event callback.
     * @param  {object} event .
     */
    function _Next(event) {
      observer.next(event.data);
    }

    /**
     * Worker error event callback.
     * @param {object} event .
     */
    function _Error(event) {
      observer.error(event.data);
    }
  }
  return {
    setters: [function (_npmLodashFp0104Js) {
      _ = _npmLodashFp0104Js['default'];
    }, function (_npmRxjs500Beta7Js) {
      Rx = _npmRxjs500Beta7Js['default'];
    }],
    execute: function () {
      _export('default', (function () {
        return {
          initialize: initialize,
          spawn: spawn
        };
      })());
    }
  };
});

System.registerDynamic("package.json!github:systemjs/plugin-json@0.1.2.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "name": "perform",
    "version": "0.0.1",
    "description": "reactive web worker library",
    "main": "perform.js",
    "directories": {"test": "test"},
    "scripts": {
      "test": "eslint ./src && eslint ./test && karma start",
      "doc": "jsdoc ./src/**/*.js",
      "build": "npm run bundle && npm run bundle_min",
      "bundle": "jspm bundle src/index.js perform.js --skip-source-maps --inject",
      "bundle_min": "jspm bundle src/index.js perform.min.js --skip-source-maps --inject --minify"
    },
    "jspm": {
      "directories": {"test": "test"},
      "dependencies": {
        "json": "github:systemjs/plugin-json@^0.1.2",
        "lodash-fp": "npm:lodash-fp@^0.10.4",
        "mocha": "npm:mocha@^2.4.5",
        "rxjs": "npm:rxjs@^5.0.0-beta.7",
        "sinon": "npm:sinon@^1.17.4"
      },
      "devDependencies": {
        "babel": "npm:babel-core@^5.8.24",
        "babel-runtime": "npm:babel-runtime@^5.8.24",
        "chai": "npm:chai@^3.4.0",
        "core-js": "npm:core-js@^1.1.4"
      }
    },
    "devDependencies": {
      "chai": "^3.4.0",
      "eslint": "^2.9.0",
      "eslint-config-google": "^0.5.0",
      "jspm": "^0.16.13",
      "karma": "^0.13.14",
      "karma-chrome-launcher": "^0.2.1",
      "karma-jspm": "^2.0.2",
      "karma-mocha": "^0.2.0",
      "karma-mocha-reporter": "^2.0.3",
      "mocha": "^2.3.3",
      "sinon": "^1.17.4"
    },
    "dependencies": {},
    "repository": {
      "type": "git",
      "url": "git+https://github.com/DanH91/Perform.git"
    },
    "keywords": ["task", "async", "reactive"],
    "author": "DanH91",
    "license": "MIT",
    "bugs": {"url": "https://github.com/DanH91/Perform/issues"},
    "homepage": "https://github.com/DanH91/Perform#readme"
  };
  return module.exports;
});

System.register('src/index.js', ['npm:lodash-fp@0.10.4.js', 'src/core/index.js', 'package.json!github:systemjs/plugin-json@0.1.2.js'], function (_export) {
  'use strict';

  var _, Core, config, Perform;

  return {
    setters: [function (_npmLodashFp0104Js) {
      _ = _npmLodashFp0104Js['default'];
    }, function (_srcCoreIndexJs) {
      Core = _srcCoreIndexJs['default'];
    }, function (_packageJsonGithubSystemjsPluginJson012Js) {
      config = _packageJsonGithubSystemjsPluginJson012Js['default'];
    }],
    execute: function () {
      Perform = _.assign({
        version: config.version,
        author: config.author
      }, Core);

      _export('Perform', Perform);
    }
  };
});
