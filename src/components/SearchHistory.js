import React from 'react'
import { Text, View } from 'react-native'
import style from '../components/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import getMovieApi from '../backendAPI/api'
import { useNavigation } from '@react-navigation/native'

const SearchHistory = ({ name }) => {

    const { navigate } = useNavigation();

    return (
        <TouchableOpacity onPress={ async () => { 
            const sendData = await getMovieApi(name, '1')
            const movieData = sendData.data.results
            const searchText = name
            navigate('SearchPage', { data: { movieData, searchText } })}}>
            <View style={style.inLineStyle}>
                <View style={style.historyContainer}>
                    <Text style={style.historyText}>{name}</Text>
                </View>
                
            </View>
            <View style={style.grayLine} />
        </TouchableOpacity>
    )
}


export default SearchHistory