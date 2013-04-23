# chai-strings

 > string assertions for chai.js / use it as a template for your own domain specific assertions

## Assertions

### `capitalizedFirstLetter`

### `startWith`

### `endWith`

### `uppercase`

### `lowercase`


## Installation 

### Node
Use this plugin as you would all other Chai plugins.
Do an `npm install` to get up and running. Then:

```javascript
var chai 		= require("chai");
var chaiStrings	= require("chai-strings");

chai.use(chaiStrings);
```

### `<script>` tag

If you include Chai Strings directly with a `<script>` tag, after the one for Chai itself, then it will automatically plug in to Chai.

```html
<script src="chai.js"></script>
<script src="chai-strings.js"></script>
```

## License

Copyright (c) 2013 Torbjorn Josefsson

MIT License (see the LICENSE file)
