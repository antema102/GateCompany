import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import DashBord from './style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { FakeArticle } from '../../FakeData/FakeArticle.js'
import { FakeNavBar } from '../../FakeData/FakeNavBar';
import NavBarComposant from '../../composants/NavBarComposant/NavBarComposant';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Entreprenaria from '../Entreprenaria/Entreprenaria';

import 'dayjs/locale/fr'; // Importez le module de langue française
dayjs.extend(relativeTime)
dayjs.locale('fr');

const Home = ({navigation}) => {
    const [selectCategorie, setSelectCategorie] = useState('Actualite')
    const [activeTab, setActiveTab] = useState('Actualite');
    return (
        < ScrollView >
            {/*Debut navBar */}
            <View style={DashBord.navBar}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="menu" color={'black'} size={50} />
                </TouchableOpacity>

                <View style={DashBord.navBar_1}>
                    <TouchableOpacity>
                        <Icon name="search" size={30} color="black" style={DashBord.icone} />
                    </TouchableOpacity>
                    <Image
                        style={DashBord.imageStyle}
                        source={require('../../assets/gateNewsLogo.png')}
                    />
                </View>
            </View>
            {/*Fin navBar */}

            <View style={DashBord.swiperContainer} >
                {/* Début Carosel */}
                <Swiper
                    autoplay={true}
                    style={DashBord.wrapper}
                    showsPagination={false}
                >
                    {FakeArticle.map((article) => {
                        return (
                            <TouchableOpacity key={article.id} style={DashBord.slide} onPress={()=>navigation.navigate('ArticleDetails',{article})}>
                                <Image
                                    source={article.image}
                                    style={DashBord.image}
                                />
                                <Text style={DashBord.title}>{article.title}</Text>
                                <Text style={DashBord.secondary}><Icon name="user" size={20} color="white" /> {article.auter}</Text>
                                <Text style={DashBord.date}> <Icon name="calendar" size={20} color="white" /> {dayjs(article.date).format('DD MMMM YYYY')}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </Swiper>
                {/* Fin Carosel */}
            </View>


            <View>
                {/*Debut de flatList */}
                <FlatList
                    data={FakeNavBar}
                    style={DashBord.scrollableList}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <NavBarComposant item={item} 
                            onSelectCategorie={((nomCategorie) => setSelectCategorie(nomCategorie))}
                            selectCategorie={selectCategorie}
                            />
                        )
                    }}
                />
                {/* Fin de flatList */}
            </View>
            {/* Debut de Article */}


            {
                selectCategorie === 'Actualite' ? (
                    FakeArticle.map((article) => (
                        
                        <TouchableOpacity style={DashBord.article} key={article.id}  onPress={()=>navigation.navigate('ArticleDetails',{article})}>
                            <Image
                                source={article.image} style={DashBord.ImgArticle} 
                            />
                            <View style={DashBord.boxArticle}>
                                <View style={DashBord.articleItem}>
                                    <Text> <Icon name="user-o" size={15} color="black" style={DashBord.icones} /></Text>
                                    <Text style={DashBord.articleAuteur}>{article.auter}</Text>
                                    <Text style={DashBord.artcileDate}>Il y a {dayjs(article.date).fromNow(true)}</Text>
                                </View>
                                <Text style={DashBord.titleArticle}>{article.title}</Text>
                                <Text style={DashBord.subtext}>{(article.text).substring(0,50)} ....</Text>
                                <TouchableOpacity style={DashBord.tagArticle} onPress={ ()=>navigation.navigate('Tag')}>
                                    <Text style={DashBord.textArticle}>{article.categorie}</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    FakeArticle.filter((article) => article.categorie === selectCategorie).map((article) => (
                        <TouchableOpacity style={DashBord.article} key={article.id} onPress={()=>navigation.navigate('ArticleDetails',{article})}>
                            <Image
                                source={article.image} style={DashBord.ImgArticle} 
                            />
                            <View style={DashBord.boxArticle}>
                                <View style={DashBord.articleItem}>
                                    <Text> <Icon name="user-o" size={15} color="black" style={DashBord.icones} /></Text>
                                    <Text style={DashBord.articleAuteur}>{article.auter}</Text>
                                    <Text style={DashBord.artcileDate}>Il y a {dayjs(article.date).fromNow(true)}</Text>
                                </View>
                                <Text style={DashBord.titleArticle}>{article.title}</Text>
                                <Text style={DashBord.subtext}>{(article.text).substring(0,50)} ....</Text>
                                <TouchableOpacity style={DashBord.tagArticle} onPress={ ()=>navigation.navigate('Tag')}>
                                    <Text style={DashBord.textArticle}>{article.categorie}</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))
                )
            }


            {/* Fin de Article */}

        </ScrollView >
    )
}

export default Home