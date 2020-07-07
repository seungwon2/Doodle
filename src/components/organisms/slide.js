/** @format */

import React from "react";
import Flickity from "react-flickity-component";

export default function Slideshow() {
	const flickityOptions = {
		initialIndex: 3,
	};
	return (
		<Flickity
			className={"carousel"} // default ''
			elementType={"div"} // default 'div'
			options={flickityOptions} // takes flickity options {}
			disableImagesLoaded={false} // default false
			reloadOnUpdate // default false
			static // default false
		>
			<img src='/example.png' />
			<img src='/example.png' />
			<img src='/example.png' />
		</Flickity>
	);
}
