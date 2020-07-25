import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import style from '../components/styles';
import {FlatList} from 'react-native-gesture-handler';
import MovieList from '../components/MovieList';
import MovieContext from '../context/MovieContext';

const SeachPage = ({route}) => {
  const {data} = route.params;

  const {addSearchMovie} = useContext(MovieContext);

  useEffect(() => {
    addSearchMovie(data.searchText);
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        data={data.movieData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <MovieList
              img={item.poster_path}
              name={item.original_title}
              date={item.release_date}
              desc={item.overview}
              vote={item.vote_average}
              id={item.id}
            />
          );
        }}
      />
    </View>
  );
};

export default SeachPage;
