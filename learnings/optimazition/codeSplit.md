# Code splitting

## dynamic import :

    import the code when we use it not when it is used

For eg:

````js
syntax:
 import("filepath") // it will return a promise
onClick = { () => {
import ("./sum.ts").then(module) => {
    module.sum(2,5) //for normal export
    // module.default // if there is default export
}
}}
    ```
````
