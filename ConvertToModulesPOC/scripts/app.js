System.register(["./utils.js", "./yMod.js"], function (exports_1, context_1) {
    "use strict";
    var utils_js_1, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (utils_js_1_1) {
                utils_js_1 = utils_js_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            //import {global} from "global";
            console.log("After importing utils");
            utils_js_1.default.alert("calling utils");
            console.log("after calling utils");
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
        }
    };
});
//# sourceMappingURL=app.js.map