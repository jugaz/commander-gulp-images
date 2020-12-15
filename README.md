# Commander Gulp Images Dynamic

<p>Compilación de imagenes dinámicamente</p>
 
![commander: version (tag)](https://img.shields.io/badge/commander-v3.0.2-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v4.0.2-orange?style=for-the-badge)
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v7.4.15-red?style=for-the-badge)
![node: version (tag](https://img.shields.io/badge/node-v15.4.0-green?style=for-the-badge) 

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

```bash
$ commander-gulp-images svg 'entry' --sv 'ouput' 
```

```bash
$ commander-gulp-images prod:images 'entry' --im 'ouput' 
```

#### Example

```bash
"scripts": { 
    "images": "commander-gulp-images images \"frontend/src/static/images/**/*.png\" \"frontend/src/static/images/**/*.jpg\" --im \"docs/images\"",
    "prod:images": "commander-gulp-images prod:images \"frontend/src/static/images/**/*.png\" \"frontend/src/static/images/**/*.jpg\" --im \"docs/images\"",
    "webp": "commander-gulp-images webp \"docs/images/**/*.png\" \"docs/images/**/*.jpg\" --wb \"docs/images\"",
    "svg": "commander-gulp-images svg \"frontend/src/static/images/**/*.svg\" --sv \"docs/images/\"",
  }
```
