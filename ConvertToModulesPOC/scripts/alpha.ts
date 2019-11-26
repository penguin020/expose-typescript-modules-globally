class alpha {
    static _constructor =(() => {
        console.log("alpha static constructor");
    })();

    log() {
        const caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("alpha.log called by " + caller);
        (new beta()).log();
        //qqq.n = "";
        (new gamma()).log();
    }
}
