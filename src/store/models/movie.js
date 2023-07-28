import axios from "axios";

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
      const data = await fetch("http://localhost:8080/movies")
        .then((res) => res.json())
        .catch((error) =>
          console.log("Authorization failed: " + error.message)
        );
      const MOVIES = data.data;
      this.setDataMovies(MOVIES);
      this.setDataMoviesFilterData(MOVIES);
    },
    async searchMoviesByNameAndActor(searchObj) {
      const data = await fetch(
        "http://localhost:8080/movies/search?name=" +
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
    },
    async getReviews(movieId) {
      const data = await fetch(
        "http://localhost:8080/review/review-movie?movieId=" + movieId
      )
        .then((res) => res.json())
        .catch((error) =>
          console.log("Authorization failed: " + error.message)
        );
      this.setDataReviews(data.data);
      return data.data;
    },
    
    async reviewMovie(obj) {
      try {
        console.log(obj.content + ";; " + obj.movieId + ";; " + obj.token );
        const formData = {
          content: obj.content,
          rating: 5
        }
        const config = {
          headers: {
            Authorization: `Bearer ${obj.token}`,
          },
        };

        console.log(obj.content + ";; " + obj.movieId + ";; " + obj.token );
        const { data } = await axios.post(
          `http://localhost:8080/movies/${obj.movieId}/reviews`,
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
