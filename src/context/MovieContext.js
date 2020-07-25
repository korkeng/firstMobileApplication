import React, {useReducer} from 'react';

const MovieContext = React.createContext();

const historyReducer = (histtoryState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      const newState = histtoryState.find(
        (data) => data.name === action.payload,
      );
      return newState
        ? histtoryState
        : [...histtoryState, {name: action.payload}];
    default:
      return histtoryState;
  }
};

const favouriteReducer = (favouriteState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      const newState = [
        ...favouriteState,
        {
          name: action.payload.name,
          desc: action.payload.desc,
          date: action.payload.date,
          img: action.payload.img,
          vote: action.payload.vote,
          id: action.payload.id,
        },
      ];
      return newState;
    case 'DEL_FAVOURITE':
      const filteredState = favouriteState.filter(
        (dat) => dat.id !== action.payload,
      );
      return filteredState;
    default:
      return favouriteState;
  }
};

export const MovieContextProvider = ({children}) => {
  const [histtoryState, historyDispatch] = useReducer(historyReducer, []);
  const [favouriteState, favouriteDispatch] = useReducer(favouriteReducer, []);

  const addSearchMovie = (text) => {
    historyDispatch({type: 'SEARCH_MOVIE', payload: text});
  };

  const addFavourite = (img, name, desc, vote, date, id) => {
    favouriteDispatch({
      type: 'ADD_FAVOURITE',
      payload: {img, name, desc, vote, date, id},
    });
  };
  const delFavourite = (id) => {
    favouriteDispatch({type: 'DEL_FAVOURITE', payload: id});
  };

  const value = {
    data: histtoryState,
    favouriteData: favouriteState,
    addSearchMovie: addSearchMovie,
    addFavourite: addFavourite,
    delFavourite: delFavourite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContext;
