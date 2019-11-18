import gammaAlias from "../scripts/gamma";
export as namespace NS_Global;

declare global {
    var qqq: {n:string};
    namespace ZZZ {
       export var gamma: gammaAlias;
    }
    //var gamma: gammaAlias;
}
