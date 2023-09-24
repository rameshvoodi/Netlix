import React from 'react';
import requests from '../requests';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Main = () => {
	const [movies, setMovies] = useState([]);
	const movie = movies[Math.floor(Math.random() * movies.length)];
	useEffect(() => {
		axios.get(requests.requestPopular).then((response) => {
			setMovies(response.data.results);
		});
	}, []);
	// console.log(movie);

	const shortScripy = (str, size) => {
		if (str?.length > size) {
			return str.slice(0, size) + '...';
		} else {
			return str;
		}
	};
	return (
		<div className=' w-full h-[550px] text-white'>
			<div className=' w-full h-full'>
				<div className=' w-full h-[550px] bg-gradient-to-r from-black absolute'></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className=' absolute w-full top-[20%] p-4 md:p-8'>
				<h1 className=' text-3xl md:text-5xl font-bold'>
					{movie?.title}
				</h1>
				<div className=' my-4'>
					<button className=' border text-black bg-gray-300 border-gray-300 py-2 px-5 '>
						Play
					</button>
					<button className=' border text-white border-gray-300 py-2 px-5 ml-4'>
						Watch later
					</button>
				</div>
				<p className=' text-gray-400 text-sm'>
					Released: {movie?.release_date}
				</p>
				<p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
					{shortScripy(movie?.overview, 150)}
				</p>
			</div>
		</div>
	);
};

export default Main;
