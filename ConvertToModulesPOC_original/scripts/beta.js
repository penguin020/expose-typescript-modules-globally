var beta = /** @class */ (function () {
    function beta() {
    }
    beta.prototype.log = function () {
        var caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("beta.log called by " + caller);
        (new gamma()).log();
    };
    beta._constructor = (function () {
        console.log("beta static constructor");
        (new gamma()).log();
    })();
    return beta;
}());
//# sourceMappingURL=beta.js.map