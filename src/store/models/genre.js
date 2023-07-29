import { URL } from "./evm";
export const genre = {
    state: {
        genres: []
    },
    reducers: {
        setData(state, genres) {
            return {
                state,
                genres
            }
        },
    },
    effects: (dispatch) => ({
        async getAll() {
            try {
                const data = await fetch(URL + 'genres')
                    .then(res => res.json())
                    .catch(error => console.log('Authorization failed: ' + error.message));
                this.setData(data.data);
            } catch (error) {
                return null;
            }
        },
    }),
};