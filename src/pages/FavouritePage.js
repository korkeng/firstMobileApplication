import React, {useContext} from 'react';
import style from '../components/styles';
import {FlatList} from 'react-native-gesture-handler';
import MovieContext from '../context/MovieContext';
import MovieList from '../components/MovieList';

const FavouritePage = () => {
  const {favouriteData} = useContext(MovieContext);

  return (
    <FlatList
      style={style.container}
      data={favouriteData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <MovieList
            img={item.img}
            name={item.name}
            date={item.date}
            desc={item.desc}
            vote={item.vote}
            id={item.id}
          />
        );
      }}
    />
  );
};

export default FavouritePage;
