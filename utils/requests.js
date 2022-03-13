const API_KEY = process.env.API_KEY

export default {
	fetchTrending: {
		title: 'Trending',
		url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchTopRated: {
		title: 'Top Rated',
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	fetchActionMovies: {
		title: 'Action',
		url: `/discover/movie?api_key=${API_KEY}&with_genere=28`,
	},
	fetchCommedyMovies: {
		title: 'Action',
		url: `/discover/movie?api_key=${API_KEY}&with_genere=35`,
	},
	fetchHorrorMovies: {
		title: 'Horror',
		url: `/discover/movie?api_key=${API_KEY}&with_genere=27`,
	},
	fetchRomanceMovies: {
		title: 'Romanace',
		url: `/discover/movie?api_key=${API_KEY}&with_genere=10748`,
	},
}
