import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Styles from './style';

const NavBarComposant = ({ item, onSelectCategorie,selectCategorie  }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => {
                if (selectCategorie !== item.nomCategorie) {
                    onSelectCategorie(item.nomCategorie);
                }
            }}
        >
            <Text style={[
                Styles.navBar_2, // Style de base à appliquer
                { backgroundColor: selectCategorie === item.nomCategorie ? 'gray' : 'white',
                color: selectCategorie === item.nomCategorie ? 'white' : 'black',
            }, // Style conditionnel basé sur isActive
            ]}>{item.nomNavBar}</Text>
        </TouchableOpacity>
    );
};

export default NavBarComposant;
