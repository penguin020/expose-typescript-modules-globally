import gammaAlias from "../scripts/gamma.js";

declare global {
    export type gamma = gammaAlias;
    export const gamma: typeof gammaAlias;
}

(window as any)["gamma"] = gammaAlias;
