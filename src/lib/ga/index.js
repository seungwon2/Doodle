/** @format */

import * as prodLytics from "./analytics/prod";
import * as devLytics from "./analytics/dev";

const isLocal = () => {
	return location.hostname === "localhost";
};

const isDev = () => {
	return process.env.NODE_ENV !== "production";
};

const initGA = (code, Router) => {
	// local이거나 development 환경일 땐 ga를 실행하지 않습니다.
	const shouldNotTrack = isLocal() || isDev();
	// production or dev analytics
	const analytics = shouldNotTrack ? devLytics : prodLytics;

	// init
	analytics.init(code);
	// log page
	analytics.pageview();

	// previouseCallback을 저장합니다.
	const previousCallback = Router.onRouteChangeComplete;
	// Router.onRouteChangeComplete는 라우팅 주소 변경시 트래킹을 하기 위해 필요합니다.
	Router.onRouteChangeComplete = () => {
		// previouseCallback function이 정의되어 있었으면 실행시켜 줍니다.
		if (typeof previousCallback === "function") {
			previousCallback();
		}
		// log page
		analytics.pageview();
	};
};

export default initGA;
