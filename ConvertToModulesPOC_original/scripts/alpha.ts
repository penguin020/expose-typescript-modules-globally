class alpha {
    static _constructor =(() => {
				console.log("alpha static constructor");
				(new gamma()).log()
    })();

    log() {
        const caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("alpha.log called by " + caller);
        (new beta()).log();
        (new gamma()).log();
    }
}
