Pasos:
* generar carpeta raiz (sesion08)
* dentro de sesion08 armar esta estructura
    sesion08
    |- /src
        |- index.html
        |- js
            |- index.js
* en sesion08 correr (inicializa proyecto node)
    npm init -y
* ya con el archivo package.json, ejecutar
    npm i -D webpack webpack-cli html-webpack-plugin
* modificar package.json para agregar script de ejecución
     "build": "webpack --mode production"
* en la consola, estando en la carpeta raiz, ejecutar script
    npm run build

*** sonreir y dar un trago a su bebida 😎🍻
