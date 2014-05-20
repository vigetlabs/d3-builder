# D3 Builder

A work in progress, but you can currently use it like:

```javascript
var fs = require('fs');
var d3 = require('d3-builder');

d3(['svg/arc', 'scale/linear']).pipe(fs.createWriteStream('./d3.custom.js'));
```
