import utils from "./utils.js";
import "./yMod.js";
//import {global} from "global";

console.log("After importing utils");

utils.alert(`calling utils`);

console.log("after calling utils");


module app {
	console.log("initial execution");
	export function init() {
		initLogging();
		console.log("\n");
		console.log("----- INIT -----");


		(new alpha()).log();


		console.log("--- END INIT ---");
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


if( document.readyState !== 'loading' ) {
    // document is already ready
    app.init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        // document was not ready, but is now
        app.init();
    });
}

