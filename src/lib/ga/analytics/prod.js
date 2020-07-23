/** @format */

import ReactGA from "react-ga";

// server / client 구분을 위한 변수
const IS_BROWSER = typeof window !== "undefined";

export function init(code) {
	// client-side에서만, GA가 initialize되지 않았을 때만 init
	if (IS_BROWSER && !window.GA_INITIALIZED && code) {
		ReactGA.initialize(code);
	}
}

export function pageview() {
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
}

export function event(category = "", action = "") {
	if (category && action) {
		ReactGA.event({ category, action });
	}
}

export function exception(description = "", fatal = false) {
	if (description) {
		ReactGA.exception({ description, fatal });
	}
}
