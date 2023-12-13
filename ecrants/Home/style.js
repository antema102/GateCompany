import { StyleSheet, Text, View } from 'react-native'
import { PADDING, MARGIN } from '../../outils/Constantes'
import { COLORS } from './../../outils/Constantes';


const DashBord = StyleSheet.create({
    navBar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
    },
    navBar_1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icone: {
        borderRadius: 50 / 2,
        marginRight: 10,
    },
    imageStyle: {
        width: 125,
        height: 75,
        borderRadius: 50 / 2,
    },
    swiperContainer: {
        height: 250, // Ajustez la hauteur du conteneur du Swiper selon vos besoins
       // Ajoutez des coins arrondis si nécessaire
        overflow: 'hidden', // Assure que le contenu du Swiper ne dépasse pas le conteneur
    },
    slide:
    {
        position: 'relative',
    }
    ,
    image:
    {
        width: '100%',
        height: '100%'
    },
    title: {
        position: 'absolute',
        bottom: 50, // Ajustez la position verticale du titre
        left: 10, // Ajustez la position horizontale du titre
        color: 'white', // Couleur du texte du titre
        fontSize: 20, // Taille de la police du titre
        fontWeight: 'bold', // Poids de la police du titre
        zIndex: 1, // Assure que le titre est au-dessus de l'image
        textDecorationLine:'underline'
    },
    secondary: {
        position: 'absolute',
        bottom: 25, // Ajustez la position verticale du texte secondaire
        left: 10, // Ajustez la position horizontale du texte secondaire
        color: 'white', // Couleur du texte secondaire
        fontSize: 16, // Taille de la police du texte secondaire
        zIndex: 1, // Assure que le texte secondaire est au-dessus de l'image
    },
    date:{
        position: 'absolute',
        bottom: 25, 
        zIndex: 1,
        left: 150,
        fontWeight:"bold",
        fontSize: 16, // Taille de la police du texte secondaire
        color: 'white',
    },
    scrollableList:{
        paddingVertical:PADDING.vertical,
        paddingHorizontal:PADDING.horizontal,

    },
    article:{
        height:180,
        flexDirection:'row',
        borderColor:'rgba(217, 199, 203, 0.48)',
        marginHorizontal:5,
        backgroundColor:'white',
        elevation:5,
        marginBottom:10,
    },
    articleItem:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:4,

    },
    ImgArticle:{
        height:'100%',
        width:'50%'
    },
    boxArticle:{
        flex:1,
        paddingHorizontal: 10,
        
    },
    titleArticle:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical:6

    },
    tagArticle:{
        flexDirection:'row',
     
    },
    textArticle:{
        color:'white',
        backgroundColor:'black',
        textDecorationLine:'underline',
        paddingVertical:5,
        paddingHorizontal:5,
        borderRadius:5
    },
    icones:{
        paddingHorizontal:5
    },
    articleAuteur:{
        paddingHorizontal:5
    },
    artcileDate:{
        color:'blue',
    },
    subtext:{
        fontSize:15,
        marginBottom:20
    }
})

export default DashBord;