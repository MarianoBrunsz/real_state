import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'X-RapidAPI-Key': 'b9fd3c04e0mshee73e7fe125ea36p1b1034jsn59cb3bf367ca',
			'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
		},
	});

	return data;
};
