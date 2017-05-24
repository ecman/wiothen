# wiothen

Promise, then, on all filepaths in a directory tree

This is BETA.

# Usage

```js
var wiothen = require('wiothen');

wiothen('.', function(filepath, next) {
    // Skip dotfiles, coverage, node_modules
    if (!/^(\.|coverage|node_modules)/
      .test(filepath))
      console.log('file:', filepath);
    next();
  })
  .then(function () {
    console.log('done');
  })
  .catch(function (err) {
    console.log('error:', err.message);
    return;
  })
```
