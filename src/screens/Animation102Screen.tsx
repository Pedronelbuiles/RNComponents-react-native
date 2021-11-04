import React, { useContext, useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'

export const Animation102Screen = () => {
    const {theme: {colors}} = useContext(ThemeContext)

    const pan = useRef(new Animated.ValueXY()).current

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y
            },
            
        ],{useNativeDriver:false}),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: {
                        x: 0,
                        y: 0
                    },
                    useNativeDriver: false
                }
            ).start()
        }
    })

    return (
        <View style={styles.container}>
            <Animated.View 
                {...panResponder.panHandlers}
                style={[pan.getLayout(), {...styles.purpleBox, backgroundColor: colors.text}]} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1
    },
    purpleBox:{
        width: 150,
        height: 150,
        borderRadius: 10
    }
})