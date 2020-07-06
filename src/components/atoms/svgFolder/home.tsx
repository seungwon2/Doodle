/** @format */

import * as React from "react";

function SvgComponent(props) {
	return (
		<svg width={22.801} height={24.246} viewBox='0 0 22.801 24.246' {...props}>
			<defs>
				<style>{".prefix__cls-1{fill:#ff9045}"}</style>
			</defs>
			<path
				data-name='\uD328\uC2A4 10'
				d='M22.146 23.596h-6.1v-6.89c.006-.076-9.354-.066-9.293-.025V23.6h-6.1v-.254V8.899a.437.437 0 01.2-.4Q6.024 4.63 11.186.748a.3.3 0 01.429 0q5.161 3.883 10.332 7.753a.391.391 0 01.205.346q-.01 7.272-.005 14.544z'
				fill='none'
				stroke={props.color}
				strokeLinecap='round'
				strokeMiterlimit={10}
				strokeWidth={1.3}
			/>
		</svg>
	);
}

export default SvgComponent;
