## myboilerplate-ts-webpack-babel


### Regex used
#### /\.(js|jsx)$/
#### /\.html$/
#### /\.(png|jpe?g|gif)$/i
#### /\.s[ac]ss$/i
#### /\.(js|jsx|ts|tsx)$/


### tsconfig.json file
```jsx
{
  "compilerOptions": {
    "target": "es5",
    "sourceMap": true,
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": false,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "jsx": "react",
    "removeComments": true
  }
}
```