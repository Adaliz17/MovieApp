import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { styles } from '../theme'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'

const ios = Platform.OS === 'ios'
const topMargin = ios ? '' : 'mt-3'

export default function HomeScreen() {
    const [trending, setTrendig] = useState([1,2,3])
    const [upcoming, setUpcoming] = useState([1,2,3])
    const [topRate, setTopRate] = useState([1,2,3])
    
    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className="mb-3">
                <StatusBar style='light' />
                <View className={`flex-row justify-between items-center mx-4 ${topMargin}`}>
                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text
                    className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}
            >
                {/* Movies */}
                <TrendingMovies data={trending} />
                {/* Upcoming movies row */}
                <MovieList title="Upcoming" data={upcoming} />
                {/* Top Rated movies row */}
                <MovieList title="Top Rated" hideSeeAll={false} data={topRate} />
            </ScrollView>
        </View>
    )
}