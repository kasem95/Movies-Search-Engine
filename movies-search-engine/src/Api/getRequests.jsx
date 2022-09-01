import axios, { AxiosError } from "axios";

const MoviesDB = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "6f7971921emshcebd84feb1d306fp19a85fjsnc7d279dccdf9",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
});

const searchTitlesByTitle = (title, limit, page) => {
  return MoviesDB.get(`/titles/search/title/${title}`, {
    params: { limit, page },
  })
    .then((res) => {
      return {
        data: res.data,
        status: res.status,
        message: "ok",
      };
    })
    .catch((err) => {
      if (err instanceof AxiosError) {
        console.error(err);
        return {
          data: err.response.data,
          status: err.response.status,
          message: err.message,
        };
      }
      return {
        data: null,
        status: 500,
        message: "Something went wrong",
      };
    });
};

const getNextPage = (url) => {
  return MoviesDB.get(url)
    .then((res) => {
      return {
        data: res.data,
        status: res.status,
        message: "ok",
      };
    })
    .catch((err) => {
      if (err instanceof AxiosError) {
        console.error(err);
        return {
          data: err.response.data,
          status: err.response.status,
          message: err.message,
        };
      }
      return {
        data: null,
        status: 500,
        message: "Something went wrong",
      };
    });
};

const getMoviesByUrl = (url ,limit, page, year) => {
  return MoviesDB.get(url, {
    params: { limit, page, year },
  })
    .then((res) => {
      return {
        data: res.data,
        status: res.status,
        message: "ok",
      };
    })
    .catch((err) => {
      if (err instanceof AxiosError) {
        console.error(err);
        return {
          data: err.response.data,
          status: err.response.status,
          message: err.message,
        };
      }
      return {
        data: null,
        status: 500,
        message: "Something went wrong",
      };
    });
}

export { searchTitlesByTitle, getNextPage, getMoviesByUrl };
