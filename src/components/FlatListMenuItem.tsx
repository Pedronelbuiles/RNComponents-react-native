import { useNavigation } from '@react-navigation/core'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}: Props) => {

    const navigation = useNavigation()
    const {theme: {colors}} = useContext(ThemeContext)
    // const {colors} = useTheme()

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component as any)}
        >
            <View style={styles.container}>
                <Icon 
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text 
                    style={{
                    ...styles.itemText,
                    color: colors.text
                    }}>
                        {menuItem.name}
                </Text>
                <Icon 
                    name="chevron-forward-outline"
                    color={colors.primary}
                    size={23}
                    style={{position: 'absolute', right: 0}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize:19
    }
})