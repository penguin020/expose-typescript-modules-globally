var app;
(function (app) {
    //////////////// INIT ///////////////////////////////////////////////////
    function init() {
        initLogging();
        console.log("\n----- INIT -----");
        (new alpha()).log();
        console.log("\n--- END INIT ---");
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
//////////////// ON LOAD ///////////////////////////////////////////////////
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