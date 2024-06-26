const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // TRẠNG THÁI XOÁ
    case "DELETE_MOVIES_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MOVIES_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_MOVIES_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    // TRẠNG THÁI THÊM
    case "CREATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MOVIE_SUCCESS":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // TRẠNG THÁI CẬP NHẬT
    case "UPLOAD_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_MOVIE_SUCCESS":
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // Trạng thái xoá nhiều
    case "DELETE_MANY_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MANY_SUCCESS":
      return {
        movies: state.movies.filter(
          (movie) => !action.payload.includes(movie._id)
        ),
        isFetching: false,
        error: false,
      };
    case "DELETE_MANY_FAILURE":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
