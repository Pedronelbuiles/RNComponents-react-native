import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {
    const {theme: {colors, dividerColor}} = useContext(ThemeContext)

    const {isSubscribre, form, onChange} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribre: false
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInputs" />

                        <TextInput 
                            style={{...style.textInputStyle, borderColor: colors.text, color: colors.text}}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholderTextColor={dividerColor}
                        />

                        <TextInput 
                            style={{...style.textInputStyle, borderColor: colors.text, color: colors.text}}
                            placeholder="Ingrese su emial"
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType= 'email-address'
                            keyboardAppearance= "dark"
                            placeholderTextColor={dividerColor}
                        />

                        <View style={style.switchRow}>
                            <Text style={style.switchText}>Subscribe</Text>
                            <CustomSwitch isOn={isSubscribre} onChange={(value) => onChange(value, 'isSubscribre')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                                
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput 
                            style={{...style.textInputStyle, borderColor: colors.text, color: colors.text}}
                            placeholder="Ingrese su teléfono"
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType= 'phone-pad'
                            placeholderTextColor={dividerColor}
                        />

                        
                        <View style={{height: 100}} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 2,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
})