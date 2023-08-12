import { Image, TouchableWithoutFeedback ,Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const {width, height} = Dimensions.get('window')

export const MovieCard = ({item, handleClick}) => {
    const customStyle = {
        width: width * 0.6,
        height: height * 0.4,
      };

    return (
        <TouchableWithoutFeedback onPress={() =>handleClick(item)}>
            <Image
                source={require("../assets/images/moviePoster1.png")}
                style={[customStyle, tw`rounded-3xl`]} 
            />
        </TouchableWithoutFeedback>
    )
}