var alpha = /** @class */ (function () {
    function alpha() {
    }
    alpha.prototype.log = function () {
        var caller = (new Error()).stack.split("\n")[2].trim().split(" ")[1];
        console.log("alpha.log called by " + caller);
        (new beta()).log();
        qqq.n = "";
        var t;
        (new gamma()).log();
    };
    alpha._constructor = (function () {
        console.log("alpha static constructor");
    })();
    return alpha;
}());
//# sourceMappingURL=alpha.js.map