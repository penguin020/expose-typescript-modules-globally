class doNotLoad {
    static _constructor =(() => {
        throw new Error("Should not be called");
    })();
    log() {
        throw new Error("Should not be called");
    }
}
