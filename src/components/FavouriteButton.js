import React, { useState, useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import MovieContext from '../context/MovieContext'
import style from './styles'

const FavouriteButton = ( {img, name, desc, vote, date, id} ) => {

    const { addFavourite } = useContext(MovieContext)
    const { delFavourite } = useContext(MovieContext)
    const { favouriteData } = useContext(MovieContext)

    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        setIsFavourite(favouriteData.find(data => data.name === name && data.id === id))
    },[]);

    const clickButton = () => {
        setIsFavourite(!isFavourite)
        !isFavourite ? addFavourite(img,name,desc,vote,date,id) : delFavourite(id)
    }

    return (
        <TouchableOpacity onPress={() => clickButton()}>
            <View style={style.favButton}>
                <Text style={style.textInsideButton}>
                    { isFavourite ? 'Unfavourite' : 'Favourite' }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FavouriteButton