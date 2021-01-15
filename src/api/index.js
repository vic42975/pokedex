import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (pokemon) => {
	let changeableUrl = url;

	if (pokemon) {
		changeableUrl = `${url}/${pokemon}`;
	}

	try {
		const {
			data: { id, name, sprites, types },
		} = await axios.get(changeableUrl);

		return {
			id,
			name,
			sprites,
			types,
		};
	} catch (error) {
		return error;
	}
};

// change to 151 during real deployment
export const fetchPokedex = async () => {
	console.log('Fetching Kanto Pokemon');
	try {
		const {
			data: { results },
		} = await axios.get(`${url}?limit=151`);

		// the results returns the name and the url to the api
		return results.map((pokemon) => pokemon);
	} catch (error) {
		console.log(error);
	}
};
