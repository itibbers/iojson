# iojson
Import and export json file with pure javascript in browser.

## Install

```bash
npm install iojson
```

## Demo

```js
import iojson from 'iojson'

const data = {
  // your json data
}

// export a .json file
iojson.exportJSON(data, 'filename')

// import json from file
iojson.importJSON().then(data => {
  // some code
})
```
