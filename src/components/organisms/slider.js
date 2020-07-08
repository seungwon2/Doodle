/** @format */

import React from "react";
import styled from "styled-components";

export default function Slider() {
	const handlePreviousClick = () => {
		const previous = state.current - 1;

		setState({
			current: previous < 0 ? props.slides.length - 1 : previous,
		});
	};

	const handleNextClick = () => {
		const next = state.current + 1;

		setState({
			current: next === props.slides.length ? 0 : next,
		});
	};

	const handleSlideClick = (index) => {
		if (state.current !== index) {
			setState({
				current: index,
			});
		}
	};

	const { current, direction } = state;
	const { slides, heading } = props;
	const headingId = `slider-heading__${heading
		.replace(/\s+/g, "-")
		.toLowerCase()}`;
	const wrapperTransform = {
		transform: `translateX(-${current * (100 / slides.length)}%)`,
	};

	return (
		<div className='slider' aria-labelledby={headingId}>
			<ul className='slider__wrapper' style={wrapperTransform}>
				<h3 id={headingId} class='visuallyhidden'>
					{heading}
				</h3>

				{slides.map((slide) => {
					return (
						<Slide
							key={slide.index}
							slide={slide}
							current={current}
							handleSlideClick={handleSlideClick}
						/>
					);
				})}
			</ul>

			<div className='slider__controls'>
				<SliderControl
					type='previous'
					title='Go to previous slide'
					handleClick={handlePreviousClick}
				/>

				<SliderControl
					type='next'
					title='Go to next slide'
					handleClick={handleNextClick}
				/>
			</div>
		</div>
	);
}

const Wrapper = styled.div`
	z-index: 5;
	max-width: 38rem;
	width: 100%;
	padding: 1.38rem 3.6rem 1.8rem 3.6rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	bottom: 0px;
	background-color: white;
	height: 10.5rem;
	box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.11);
`;
