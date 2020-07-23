import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
import style from './styles'
import { useNavigation } from '@react-navigation/native'
import getMovieApi from '../backendAPI/api'

const SearchBox = () => {

    const { navigate } = useNavigation()
    const [searchText, setSearchText] = useState('')
    

    return (
        <View style={style.searchBoxContainer}>
            <View style={style.inLineStyle}>
                <View style={style.searchBar} >
                    <TextInput style={style.searchBarInput}
                        onChangeText={(text) => {
                            setSearchText(text)
                        }}
                    />
                </View>
                <View style={style.searchButton}>
                    <Button  title="Search" onPress={async () => {
                        const sendData = await getMovieApi(searchText, '1')
                        const movieData = sendData.data.results
                        navigate('SearchPage', { data: { movieData, searchText } })
                    }} />
                </View>
            </View>
        </View>
    )
}

export default SearchBox