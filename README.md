# chai-strings

Tiny Chai.js Extension, it provides a set of string assertions

## Assertions

### `capitalized`

### `startWith`

### `endWith`

### `uppercase`

### `lowercase`


## Installation 

### Node

Do an `npm install` to get up and running. Then:

```javascript
var chai 		= require("chai");
var chaiStrings	= require("chai-strings");

chai.use(chaiStrings);
```

### `<script>` tag

If you include Chai Strings directly with a `<script>` tag, after the one for Chai itself, then it will automatically plug in to Chai and be ready for use:

```html
<script src="chai.js"></script>
<script src="chai-strings.js"></script>
```


## License

Copyright (c) 2013 Torbjorn Josefsson

MIT License (see the LICENSE file)

[chai]: http://chaijs.com/
[mocha]: http://visionmedia.github.com/mocha/
[amd]: https://github.com/amdjs/amdjs-api/wiki/AMD