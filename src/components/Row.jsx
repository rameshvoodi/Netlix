import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

const Row = ({ title, fetchURL, rowID }) => {
	const [movies, setMovie] = useState([]);
	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovie(response.data.results);
		});
	}, [fetchURL]);
	// console.log(movies)

	const ScrollLeft = () => {
		var slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const ScrollRight = () => {
		var slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	return (
		<>
			<h1 className=' text-white font-bold md:text-xl p-4'>{title}</h1>
			<div className=' relative flex items-center group'>
				<MdChevronLeft
					onClick={ScrollLeft}
					className=' left-0 absolute opacity-50 bg-white rounded-full hover:opacity-100 z-10 cursor-pointer hidden group-hover:block'
					size={40}
				/>
				<div
					id={'slider' + rowID}
					className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
				>
					{movies.map((item, id) => (
						<Movie
							key={id}
							item={item}
						/>
					))}
				</div>
				<MdChevronRight
					onClick={ScrollRight}
					className=' right-0 absolute opacity-50 bg-white rounded-full hover:opacity-100 z-10 cursor-pointer hidden group-hover:block'
					size={40}
				/>
			</div>
		</>
	);
};

export default Row;
