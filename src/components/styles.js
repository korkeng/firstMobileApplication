import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container : {
        flex: 1,
    },
    middleScreen : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigSize : {
        fontSize: 20
    },
    inLineStyle : {
        flexDirection: 'row'
    },
    searchBoxContainer : {
        width: '100%',  
        height: 50, 
        backgroundColor: '#D1D1D1',  
        justifyContent: 'center'
    },
    searchBar : {
        width: '75%', 
        marginTop: 4, 
        marginLeft: 10, 
        height: 30, 
        backgroundColor: 'white', 
        borderRadius: 10, 
        justifyContent: 'center',
    },
    searchBarInput : {
        marginLeft: '5%', fontSize: 15
    },
    cardList : { 
        flexDirection: 'row', 
        marginLeft: '5%', 
        marginTop: '1%' 
    },
    imgList : { 
        width: 90, 
        height: 125, 
        marginTop: '2%' 
    },
    textSide : { 
        flexDirection: 'column', 
        flex: 1, 
        justifyContent: 'center', 
        marginLeft: '3%',
        marginRight: '2%',
    },
    titleName : { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    releaseDate : { 
        color: 'gray', 
    },
    description : { 
        fontSize: 13,
    },
    imgDetail : { 
        marginTop: '5%', 
        width: '40%', 
        height: '30%',
    },
    imageMiddle : {
        flex: 1,
        alignItems: 'center',
    },
    detailName : {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    content : {
        marginTop: 15, 
        fontSize: 15,
        marginRight: '2%'
    },
    contentContainer : {
        alignSelf: 'flex-start', 
        marginTop: 15, 
        marginLeft: 15
    },
    grayLine : { 
        marginTop: '3%', 
        marginLeft: '3%', 
        width: '100%', 
        height: 1, 
        backgroundColor: '#DFDFDF' 
    },
    buttonPosition : {
        marginTop: '20%',
    },
    favButton : {
        width: 250, 
        height: 50, 
        backgroundColor: '#F48F16', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10,
    },
    textInsideButton : {
        fontSize: 18,
    },
    historyText : {
        marginLeft: '5%', 
        fontSize: 20,
    },
    historyContainer : {
        marginTop: '2%', 
        height: 30, 
        width: '100%',  
        justifyContent: 'center',
    },searchButton : {
        marginLeft: '2%',
    },
})