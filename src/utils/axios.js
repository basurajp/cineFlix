import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzc5M2UwZTVkYjlhZjM4MDdlODlhNTA0MWUxNjVlMyIsInN1YiI6IjY1YWE5ZDYxMGM0YzE2MDBjZTdiOTk1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SW6VmQWsiqYwCJ-79thnqpWtR11_WcFxsQE8UATFI34",
  },
});


export default instance