import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import dayjs from 'dayjs'
import 'dayjs/locale/fr';
import relativeTime from 'dayjs/plugin/relativeTime'
import IconeFontAwesome from './../../composants/Icone/Icone';

dayjs.extend(relativeTime)
dayjs.locale('fr');

const ArticleDetails = ({ route }) => {
  const { article } = route.params;
  return (
    <ScrollView>

      {/* image de article */}
      <Image
        source={article.image}
        style={{
          width: '100%',
          height: 250,
          overflow: 'hidden',
        }}
      />
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        {/* Fin de image article */}
        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingVertical: 10, marginBottom: 5 }}>{article.title}</Text>

        {/* item de l'article */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 15 }}>
          <Text style={{ paddingRight: 5 }}><Icon name="calendar" size={20} style={{ color: 'blue' }} /></Text>
          <TouchableOpacity>
            <Text style={{ paddingRight: 40, textDecorationLine: 'underline', color: 'blue' }}>{dayjs(article.date).format('DD MMMM YYYY')}</Text>
          </TouchableOpacity>
          <Text style={{ paddingRight: 4 }}><Icon name="user" size={20} color="gray" /></Text>
          <TouchableOpacity>
            <Text style={{ color: 'gray' }}>{article.auter}</Text>
          </TouchableOpacity>
        </View>
        {/* fin item*/}

        <TouchableOpacity style={{ flexDirection: 'row', alignContent: 'center', paddingVertical: 5 }}>
          <Text style={{ backgroundColor: 'black', color: 'white', padding: 8, borderRadius: 10 }}>TAG</Text>
        </TouchableOpacity>

        {/* contenu de l'article*/}
        <View style={{ paddingVertical: 10 }}>
          <Text>{article.text}</Text>
        </View>
        {/* fin de l'article */}

        {/* item article partager avec  */}
        <IconeFontAwesome/>

        {/* fin de l'aritlce partager item*/}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ borderBottomWidth: 2 }}>A Lire egalement </Text>
          <Text style={{ flex: 1 }}></Text>
        </View>

        <View style={{ paddingVertical: 20 }}>
          <Image
            source={article.image}
            style={{ width: '100%', height: 150, paddingVertical: 100 }} // Largeur de 100% et hauteur de 500 pixels
          />
          <Text style={{ fontWeight: 'bold', fontSize: 25, paddingVertical: 10 }}>Titre de l'article</Text>
          <Text>Date de l'article</Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default ArticleDetails