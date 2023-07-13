# Practice TypeScript React API

## Process
```
npm init -Y
npm install express cors mongodb
```

```
packages.json > type: module
```

```
npm install ts-node -D
```

```
packages.json
add underscript
"start": "nodemon --exec ts-node-esm ./src/*.ts"
```


```
tsc --init
```
```
tscofig.json
* "outDir": "./build", 
* "rootDir": "./src",
* "module": "ES6",  //Due to packages.json > type: module
```

## Compile
`tsc`