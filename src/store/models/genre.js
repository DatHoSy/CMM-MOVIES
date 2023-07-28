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
            const data = await fetch('http://localhost:8080/genres')
                .then(res => res.json())
                .catch(error => console.log('Authorization failed: ' + error.message));
            this.setData(data.data);
        },
    }),
};