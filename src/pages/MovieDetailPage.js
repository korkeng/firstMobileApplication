import React from 'react';
import {View, Text, Image} from 'react-native';
import style from '../components/styles';
import FavouriteButton from '../components/FavouriteButton';

const MovieDetailPage = ({route}) => {
  const {data} = route.params;
  const preUrl = 'https://image.tmdb.org/t/p/w92/';

  return (
    <View style={style.container}>
      <View style={style.imageMiddle}>
        <Image style={style.imgDetail} source={{uri: `${preUrl}${data.img}`}} />
        <View style={style.contentContainer}>
          <Text style={style.detailName}>{data.name}</Text>
          <Text style={style.content}>Average votes: {data.vote}</Text>
          <Text style={style.content}>{data.desc}</Text>
        </View>
        <View style={style.buttonPosition}>
          <FavouriteButton
            img={data.img}
            name={data.name}
            desc={data.desc}
            vote={data.vote}
            date={data.date}
            id={data.id}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieDetailPage;
