import React, { useState } from 'react';
import { Button, Modal, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Investir = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Animatable.View
          style={{ flexDirection: 'row', height: '93%' }}
          animation="slideInLeft"
          duration={500}
        >
          <View style={{
            flex: 2,
            elevation: 5,
            backgroundColor: 'white',
            marginTop: 5
          }}>
            <TouchableOpacity>
              <Text style={{ paddingHorizontal: 12, paddingVertical: 12, backgroundColor: 'rgba(52, 89, 209, 0.53)', margin: 10, borderRadius: 5 }}>Test</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
          </TouchableOpacity>
        </Animatable.View>
      </Modal>
    </View>
  );
};

export default Investir;
