import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast'
import MovieList from '../components/movieList'

const {width, height} = Dimensions.get('window')
const ios = Platform.OS === 'ios'
const topMargin = ios ? '' : 'mt-3'

export default function MovieScreen() {
    let movieName = 'Avengers EndGame'
    const navigation = useNavigation();
    const {params: item} = useRoute()
    useEffect(() => {
        //call the movie details api
    }, [item])

    const [cast, setCast] = useState([1, 2, 3, 4, 5])
    const [like, setLike] = useState(false)
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5])
    const sizes = {
        width: width,
        height: height * 0.40
    }

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20}}
            className="flex-1 bg-neutral-900"
        >
            <View className="w-full">
                <SafeAreaView
                    className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLike(!like)}>
                        <HeartIcon size="35" color={like ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                    source={require('../assets/images/moviePoster2.png')}
                    style={{width, height: height * 0.55}}
                    />
                    <LinearGradient
                    colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                    style={sizes}
                    className="absolute bottom-0" 
                    start={{x: 0.5, y: 0}}
                    end={{ x: 0.5, y: 1 }}
                    />
                </View>
            </View>
            <View style={{marginTop: -(height* 0.09)}} className="space-y-3">
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                     {
                        movieName
                     }
                </Text>
                {/* status - released - runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                     Released - 2020 - 170 min
                </Text>
                {/* genres */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Actions -
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        SuperHero -
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy
                    </Text>
                </View>
                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    The epic conclusion to the Infinity Saga that became a critically acclaimed worldwide phenomenon, this dramatic showdown pits the Avengers against Thanos. After devastating events wiped out half the world’s population and fractured their ranks, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back.
                </Text>
            </View>
            
            {/* Cast */}
            <Cast cast={cast} navigation={navigation} />
            
            {/* Similar movies */}
            <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies} />
        </ScrollView>
  )
}