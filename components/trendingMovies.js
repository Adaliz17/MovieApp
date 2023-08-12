import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Carousel from "react-native-snap-carousel"
import { MovieCard } from './MovieCard'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

export default function TrendingMovies({data}) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }

    return (
        <View>
        <Text style={tw`text-white text-xl mx-4 mb-5`}>Trending</Text>
        <Carousel
            data={data}
            renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}/>}
            firstItem={1}
            sliderWidth={width}
            slideStyle={{display: 'flex', alignItems: 'center'}}
            inactiveSlideOpacity={0.60}
            itemWidth={width*0.62}
        ></Carousel>
        </View>
    )
}