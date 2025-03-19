import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  list: [],
};

const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //Yuklenme durumu
    case ActionTypes.LIST_LOADING:
      return { ...state, isLoading: true };
    //Hata durumu
    case ActionTypes.LIST_ERROR:
      return { ...state, isLoading: false, error: payload };
    //Veri gelme durumu
    case ActionTypes.LIST_SUCCESS:
      return { ...state, isLoading: false, error: null, list: payload };
    //Listeye ekleme
    case ActionTypes.ADD_TO_LIST:
      const updatedList = state.list.concat(payload);
      return { ...state, list: updatedList };
    //Listeden kaldirma
    case ActionTypes.REMOVE_FROM_LIST:
      const filtredList = state.list.filter((i) => i.id != payload.id);
      return { ...state, list: filtredList };
    //Varsayilan
    default:
      return state;
  }
};
export default listReducer;
