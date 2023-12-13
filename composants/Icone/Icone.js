import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const IconeFontAwesome = () => {
  return (
    <View style={{ paddingVertical: 20 }}>
    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Partager avec :</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 25, paddingTop: 5 }}>
      <TouchableOpacity><Icon name="facebook-official" size={20} color="#1877F2" /></TouchableOpacity>
      <TouchableOpacity><Icon name="twitter-square" size={20} color="#1DA1F2" /></TouchableOpacity>
      <TouchableOpacity><Icon name="linkedin" size={20} color="#0A66C2" /></TouchableOpacity>
      <TouchableOpacity><Icon name="whatsapp" size={20} color="#25D366" /></TouchableOpacity>
    </View>
  </View>
  )
}

export default IconeFontAwesome