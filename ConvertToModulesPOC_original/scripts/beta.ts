class beta {
    static _constructor =(() => {
        console.log("beta static constructor");
    })();
    log() {
        const caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("beta.log called by " + caller);
        (new gamma()).log();
    }
}
