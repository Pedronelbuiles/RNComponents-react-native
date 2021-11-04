import React, { useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { ButtonP } from '../components/ButtonP'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation101Screen = () => {

    const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation()
    const {theme: {colors}} = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                opacity,
                transform: [{translateY: position}]
            }} />

            <View style={styles.containerButtons}>
                <ButtonP 
                    action={() => {
                        fadeIn()
                        startMovingPosition(100)
                    }}
                    texto="FadeIn"
                />
                <ButtonP 
                    action={fadeOut}
                    texto="FadeOut"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    purpleBox:{
        width: 150,
        height: 150,
        marginBottom: 20
    },
    containerButtons: {
        flexDirection: 'row',
        padding: 10
    }
})