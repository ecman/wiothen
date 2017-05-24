# wiothen

Promise, then, on filepaths in a directory tree

This is BETA.

# Usage

```js
var wiothen = require('wiothen');

wiothen('.', function(filepath, next) {
  // Skip dotfiles, coverage, node_modules
  if (!/^(\.|coverage|node_modules)/
    .test(filepath))
    console.log('got filepath:', filepath);
  next();
})
.then(function () {
  console.log('no more filepaths');
})
.catch(function (err) {
  console.log('got error:', err.message);
  return;
});
```

Output:

```text
got filepath: package.json
got filepath: out.txt
got filepath: index.js
got filepath: check_2.js
got filepath: README.md
no more filepaths
```
