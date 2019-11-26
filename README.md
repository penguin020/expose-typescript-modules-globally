# expose-typescript-modules-globally
A repo containing multiple POC projects attempting to expose typescript modules globally

I am attempting to convert a large TypeScript project to use modules.

It currently has some module files (mostly Angular), but most of the app (1000 files) are straight ts in the global namespace.

This repo is intended as a series of POC projects to explore how to do this.

## ConvertToModulesPOC_original
This is the original project that compiles clean.  It uses systemjs to load **app.js**, which is a module.

**alpha.js**, **beta.js**, and **gamma.js** are not modules and are loaded by script tags.

## ConvertToModulesPOC
This project will currently not compile.

I have made gamma.ts into a module exporting the `gamma` class by `default`.

I have added **global.d.ts** to try to expose the `gamma` class from the module in the global namespace (on `window`).

**! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !**  
**Fixing this is the point of this repo**  
**! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !**  

## notes
- I am using TypeScript 3.5.1
