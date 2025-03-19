import api from "../../utils";
import ActionTypes from "../actionTypes";

// api'dan izleme listesindeki elemanları alıp reducer'a ileten fonks.
const getWatchList = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LIST_LOADING });

    api
      .get(`/account/21861021/watchlist/movies`)
      .then((res) => {
        dispatch({
          type: ActionTypes.LIST_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        // ✅ API Çağrısından Sonra Kullan!
        dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message });
      });
  };
};

// film izleme listesine film ekleme çıkarma işlemi yap
const toggleList = (movie, isAdd) => {
  return (dispatch) => {
    // Eklenecek filme ait verileri hazırla

    const body = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: isAdd,
    };
    // api isteği at

    api
      .post(`/account/21861021/watchlist`, body)
      .then(() =>
        isAdd
          ? dispatch({ type: ActionTypes.ADD_TO_LIST, payload: movie })
          : dispatch({ type: ActionTypes.REMOVE_FROM_LIST, payload: movie })
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export { getWatchList, toggleList };
