import React from 'react'
import { Text, View, Image } from 'react-native'
import style from '../components/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const MovieList = ( { img,name,date,desc,vote,id } ) => {

    const { navigate } = useNavigation()
    const descriptionLimit = 5
    const preUrl = 'https://image.tmdb.org/t/p/w92/'

    return(
        <TouchableOpacity onPress={() => { 
            navigate('MovieDetailPage', { 
                data : { img,name,vote,desc,date,id }})}}>
            <View style={style.cardList}>
                <Image style={style.imgList}
                    source={{ uri: `${preUrl}${img}` }}
                />
                <View style={style.textSide}>
                    <Text style={style.titleName}>{name}</Text>
                    <Text style={style.releaseDate}>{date}</Text>
                    <Text style={style.description}
                        numberOfLines={descriptionLimit}
                        ellipsizeMode="tail" >
                            {desc}
                    </Text>
                </View>
            </View>
            <View style={style.grayLine} />
        </TouchableOpacity>
    )
}

export default MovieList