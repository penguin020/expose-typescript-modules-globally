import gammaAlias from "../scripts/gamma.js";
export as namespace NS_Global;

declare global {
    var qqq: {n:string};
    namespace ZZZ {
       export var gamma: gammaAlias;
    }
    export type gamma = gammaAlias;
    export const gamma: typeof gammaAlias;
}
