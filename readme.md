# D3ify

A work in progress, but you can currently use it like:

```javascript
var fs    = require('fs');
var d3ify = require('d3ify');

d3ify(['svg/arc', 'scale/linear']).pipe(fs.createWriteStream('./d3.custom.js'));
```
