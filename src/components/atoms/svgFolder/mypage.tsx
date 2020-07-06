/** @format */

import * as React from "react";

function SvgComponent(props, { width, height, color }) {
	return (
		<svg width={width} height={height} viewBox='0 0 23.917 26.001' {...props}>
			<g data-name='\uADF8\uB8F9 13'>
				<path
					data-name='\uD328\uC2A4 9'
					d='M7.581 11.717a6.51 6.51 0 118.75 0l.3.144a11.374 11.374 0 016.876 10.445 6.972 6.972 0 01-.068 1.539 2.18 2.18 0 01-2.035 1.745 4.177 4.177 0 01-.274.008H2.807a2.248 2.248 0 01-2.386-2.111 14.067 14.067 0 01.013-1.752 11.4 11.4 0 015.928-9.41c.389-.226.809-.405 1.219-.608zm4.361 13.058h7.457c.641 0 1.283.014 1.924-.008a1.375 1.375 0 001.354-1.337 14.21 14.21 0 00-.084-2.365 10.575 10.575 0 00-7.059-8.756.874.874 0 01-.463-.385c-.113-.255.137-.393.318-.538a5.457 5.457 0 002.163-5.457 5.608 5.608 0 00-6.676-4.618 5.673 5.673 0 00-4.573 6.046 5.6 5.6 0 002.3 4.089c.19.143.358.314.239.538a.842.842 0 01-.441.328 10.663 10.663 0 00-5.51 4.39 11.017 11.017 0 00-1.663 6.413A1.482 1.482 0 002.9 24.776z'
					fill={color}
					stroke={color}
					strokeMiterlimit={10}
					strokeWidth={0.8}
				/>
			</g>
		</svg>
	);
}

export default SvgComponent;
