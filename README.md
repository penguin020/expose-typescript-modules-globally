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

## Initial Answer
I found an answer here in "[TypeScript: exposing module types in the global context and why to avoid it][1]";

I have updated the github repo.

The most salient changes I found were:

in tsconfig:
"module": "system",

in a yMod.ts

    import gammaAlias from "../scripts/gamma.js";
    
    declare global {
        export type gamma = gammaAlias;
        export const gamma: typeof gammaAlias;
    }
    
    (window as any).gamma = gammaAlias;

note: You *could* have the global ambient declaration in another file, even a *.d.ts file.

The link above breaks down the reasons very well for having three entries for the class in the file, so I will not expand on them, but summarize.

1. Expose the class **type** to the TypeScript compiler (no code generated)
2. Expose the class **object** to the TypeScript compiler (so there is an object to call **new** on; no code generated)
3. Extend the window object to expose the class in the global namespace (generates code).

  [1]: https://designprincipia.com/typescript-exposing-module-types-in-the-global-context-and-why-to-avoid-it/


## notes
- I am using TypeScript 3.5.1
