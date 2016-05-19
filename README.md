# Perform [![Build Status](https://travis-ci.org/DanH91/PerformJs.svg?branch=master)](https://travis-ci.org/DanH91/PerformJs)
*Reactive Web Worker mini library*

### Reason
Web worker is not a new technology in the web world. But so far there is a minimal
usage for a such great technology. The goal of this library is to provide a simple
API to the web developers community in order to lead them to use that power.

### Installation ###

To install the stable version:

```
npm install --save performJs
```

### Jump In

your js code

```js
import {spawn} from 'performJs';

const task = spawn('echo.js');

task.subscribe(
	echo => console.log(echo);
	error => console.log(error);
);

task.dispatch('Hello World!');
// => 'Hello World!'
```

echo.js task (worker) file content

```js 
self.onmessage = function(data) {
	self.postMessage(JSON.parse(data.data));
};
```
