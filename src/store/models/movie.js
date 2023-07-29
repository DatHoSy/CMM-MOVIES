import axios from "axios";
import { URL } from "./evm";
export const movie = {
  state: {
    movies: [],
    filterData: [],
    reviews: [],
  },
  reducers: {
    setDataMovies(state, movies) {
      return {
        ...state,
        movies,
      };
    },
    setDataMoviesFilterData(state, filterData) {
      return {
        ...state,
        filterData,
      };
    },
    setDataReviews(state, reviews) {
      return {
        state,
        reviews,
      };
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
          URL + "movies",
          "",
          config
        );
        if (data.statusCode != 200) {
          return null;
        }
        const MOVIES = data.data;
        this.setDataMovies(MOVIES);
        this.setDataMoviesFilterData(MOVIES);
      } catch (error) {
        return null;
      }
    },
    async searchMoviesByNameAndActor(searchObj) {
      try {
        const data = await fetch(
          URL + "movies/search?name=" +
            searchObj.name +
            "&actor=" +
            searchObj.actor
        )
          .then((res) => res.json())
          .catch((error) =>
            console.log("Authorization failed: " + error.message)
          );
        const MOVIES = data.data;
        this.setDataMoviesFilterData(MOVIES);
      } catch (error) {
        return null;
      }
    },
    async getReviews(movieId) {
      try {
        const data = await fetch(
          URL + "review/review-movie?movieId=" + movieId
        )
          .then((res) => res.json())
          .catch((error) =>
            console.log("Authorization failed: " + error.message)
          );
        this.setDataReviews(data.data);
        return data.data;
      } catch (error) {
        return null;
      }
    },
    
    async reviewMovie(obj) {
      try {
          const formData = {
            content: obj.content,
            rating: 5
          }
          const config = {
            headers: {
              Authorization: `Bearer ${obj.token}`,
            },
          };
          const { data } = await axios.post(
            URL + `movies/${obj.movieId}/reviews`,
            formData,
            config
          );
          if (data.statusCode != 200) {
            return null;
          }
          this.setDataUser(data.data);
        } catch (error) {
          return null;
        }
    },
  }),
};
