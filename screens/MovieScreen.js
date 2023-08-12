import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles } from '../theme'

const {width, height} = Dimensions.get('window')
const ios = Platform.OS === 'ios'
const topMargin = ios ? '' : 'mt-3'

export default function MovieScreen() {
    const navigation = useNavigation();
    const {params: item} = useRoute()
    useEffect(() => {
        //call the movie details api
    }, [item])

    const [like, setLike] = useState(false)
    const handlerLike = () => {
        setLike(!like)
    }

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20}}
            style={tw`flex-1 bg-neutral-900`}
        >
            <View style={tw`w-full`}>
                <SafeAreaView
                    style={tw`z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[ styles.background, tw`rounded-xl p-1`]}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlerLike}>
                        <HeartIcon size="35" color={like ? "red" : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>
  )
}