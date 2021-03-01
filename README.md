# Veed

The Node Library for the [Veed](https://veed.io/api) API. 🔥

### Installation

For Yarn
```
yarn add @veedstudio/veed-node
```
For NPM
```
npm install @veedstudio/veed-node --save
```

### Usage

```js
// Require the library
var veed = require("@veedstudio/veed-node")("api_key");
```

#### Making calls

The resource methods promisified

Format → `veed.{resource}.{method}`

```js
// veed.{resource}.{method}
veed.render
  .create(renderOptions)
  .then(function(body) {
    console.log(body);
  })
  .catch(function(error) {
    console.log(error);
  });
```

All Resource methods parameters are provided as the only argument

```js
veed.assets
  .create({
    extension: "mp4",
    transcribe: {
      language: "en-US"
    }
  })
  .then(function(error, body) {
    console.log(error);
    console.log(body);
  });
```


### Resources

* assets
  * create
  * get
  * list
* render
   * create
   * get
   * list

### Contributing

* Please do 🧡

### TODO

* [X] Better typing for resources, methods and render object
