import React, { useContext } from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'

interface Props {
    action: (event: GestureResponderEvent) => void;
    texto: string;
}

export const ButtonP = ({action, texto}: Props) => {
    const {theme: {colors}} = useContext(ThemeContext)
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{...styles.button, backgroundColor: colors.primary}} onPress={action}>
                <Text style={styles.texto}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginHorizontal: 10,
    },
    texto:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    }
})
