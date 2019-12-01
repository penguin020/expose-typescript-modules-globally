import gamma from "./gamma";

module app {

	//////////////// INIT ///////////////////////////////////////////////////
	export function init() {
		initLogging();
		console.log("\n----- INIT -----");

		(new alpha()).log();

		console.log("\n--- END INIT ---");
	}

	//////////////// HELPERS ///////////////////////////////////////////////////
	function initLogging() {
		var log = console.log;
		console.log = function () {
			const toLog = arguments[0].replace("\n", "<br />");
			appendToLog(toLog);
			log.apply(this, arguments);
		};
	}
	function appendToLog(s:string) {
		document.querySelector("#outText").innerHTML += `<div>${s}</div>`;
	}
};


//////////////// ON LOAD ///////////////////////////////////////////////////

if( document.readyState !== 'loading' ) {
    // document is already ready
    app.init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        // document was not ready, but is now
        app.init();
    });
}

let g = new gamma();
(window as any).gamma = g