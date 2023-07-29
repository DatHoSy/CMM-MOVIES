import axios from "axios";
import { URL } from "./evm";
export const genre = {
    state: {
        genres: []
    },
    reducers: {
        setData(state, genres) {
            return {
                ...state,
                genres
            }
        },
    },
    effects: (dispatch) => ({
        async getAll() {
            try {
                const config = {
                    headers: {
                      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyM0BnbWFpbC5jb20ifQ.n-QyyCePf3p7FrKYbNqoFxHLvJ0e-LxY1-g1LOowmtc",
                    },
                  };
                  const { data } = await axios.get(
                    `${URL}genres`,
                    config
                  );
                  if (data.statusCode != 0) {
                    return null;
                  }
                this.setData(data.data);
            } catch (error) {
                return null;
            }
            
        },
    }),
};