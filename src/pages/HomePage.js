import React, {useContext} from 'react';
import {View} from 'react-native';
import style from '../components/styles';
import SearchBox from '../components/SearchBox';
import {FlatList} from 'react-native-gesture-handler';
import MovieContext from '../context/MovieContext';
import SearchHistory from '../components/SearchHistory';

const HomePage = () => {
  const {data} = useContext(MovieContext);

  return (
    <View style={style.container}>
      {/* Search Component */}
      <SearchBox />

      {/* History Component */}
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <SearchHistory name={item.name} />;
        }}
      />
    </View>
  );
};

export default HomePage;
