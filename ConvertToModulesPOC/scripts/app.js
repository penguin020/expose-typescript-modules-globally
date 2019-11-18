"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_js_1 = require("./utils.js");
require("./yMod");
require("./global");
console.log("After importing utils");
utils_js_1.default.alert("calling utils");
console.log("after calling utils");
var app;
(function (app) {
    console.log("initial execution");
    function init() {
        initLogging();
        console.log("\n");
        console.log("----- INIT -----");
        (new alpha()).log();
        console.log("--- END INIT ---");
    }
    app.init = init;
    //////////////// HELPERS ///////////////////////////////////////////////////
    function initLogging() {
        var log = console.log;
        console.log = function () {
            var toLog = arguments[0].replace("\n", "<br />");
            appendToLog(toLog);
            log.apply(this, arguments);
        };
    }
    function appendToLog(s) {
        document.querySelector("#outText").innerHTML += "<div>" + s + "</div>";
    }
})(app || (app = {}));
;
if (document.readyState !== 'loading') {
    // document is already ready
    app.init();
}
else {
    document.addEventListener('DOMContentLoaded', function () {
        // document was not ready, but is now
        app.init();
    });
}
//# sourceMappingURL=app.js.map