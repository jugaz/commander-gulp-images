# Commander Gulp Images Dynamic

<p>This project is created to compile images</p>
 
![commander: version (tag)](https://img.shields.io/badge/commander-v3.0.2-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v3.9.1-orange?style=for-the-badge)
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v6.4.3-red?style=for-the-badge)
![node: version (tag](https://img.shields.io/badge/node-v8.16.0-green?style=for-the-badge) 


## Installation

```bash
$ npm install commander-gulp-images
```


#### Command to Compile

```bash
$ commander-gulp-images images 'entry' --im 'ouput' 
```

```bash
$ commander-gulp-images webp 'entry' --wb 'ouput' 
```

#### Example

```bash
"scripts": { 
    "images": "commander-gulp-images images \"frontend/src/static/images/**/*.png\" \"frontend/src/static/images/**/*.jpg\" --im \"docs/images\'"
    "webp": "commander-gulp-images webp \"docs/images/**/*.png\" \"docs/images/**/*.jpg\" --wb \"docs/images'"
  }
```
