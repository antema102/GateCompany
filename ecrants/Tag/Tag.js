import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IconeFontAwesome from '../../composants/Icone/Icone'
import { PADDING } from './../../outils/Constantes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import { FakeArticle } from './../../FakeData/FakeArticle';

const Tag = ({ route }) => {
  return (
    <ScrollView style={{ marginHorizontal: 10}}>
      <View style={{elevation: 5,marginBottom:10}}>
        <Image source={require('../../assets/image1.jpg')}
          style={{ width: '100%' }}
        />
        <View style={{ backgroundColor: 'white', paddingHorizontal: 5, paddingVertical: 15 }}>
          <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: "center" }}>
            <Text style={{ padding: 5, backgroundColor: 'black', color: 'blue', textDecorationLine: 'underline', borderRadius: 5 }}>Tags</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', fontSize: 25, paddingVertical: 10 }}>Titre</Text>
          <TouchableOpacity>
            <Text style={{ color: 'blue', paddingBottom: 10 }}>Date</Text>
          </TouchableOpacity>
          <Text>Contenue ...</Text>
          {/* icone fontAwesome*/}
          <IconeFontAwesome />
          {/* Fin icone fontAwesome*/}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', borderBottomWidth: 5 }} >Read More</Text>
            </TouchableOpacity>
            <Text style={{ flex: 1 }}></Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={{borderBottomWidth:2}}>Article Recente</Text>
        <Text style={{flex:1}}></Text>
      </View>
    {FakeArticle.map((item)=>{return(
      <View style={{paddingVertical:5,backgroundColor:'white',marginBottom:10}} key={item.id}>
        <Text style={{paddingVertical:5}}>{item.title}</Text>
        <Text><Icon name="calendar" size={15} color="blue" /> {item.date}</Text>
      </View>
)})}
 

    </ScrollView>
  )
}

export default Tag