export default class gamma {
    static _constructor =(() => {
        console.log("gamma static constructor");
    })();
    log() {
        const caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("gamma.log called by " + caller);
    }
}