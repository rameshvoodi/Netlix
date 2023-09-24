import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../requests';
const Home = () => {
	return (
		<>
			<Main />
			<Row
				rowID='1'
				title='upcoming'
				fetchURL={requests.requestUpcoming}
			/>
			<Row
				rowID='2'
				title='toprated'
				fetchURL={requests.requestTopRated}
			/>
			<Row
				rowID='3'
				title='trending'
				fetchURL={requests.requestTrending}
			/>
			<Row
				rowID='4'
				title='horror'
				fetchURL={requests.requestHorror}
			/>
			<Row
				rowID='5'
				title='upcoming'
				fetchURL={requests.requestUpcoming}
			/>
		</>
	);
};

export default Home;
