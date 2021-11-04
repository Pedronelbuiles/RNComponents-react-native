import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {
    const [isVisible, setisVisible] = useState(false)
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />

            <Button 
                title="Abrir Modal"
                onPress={() => {setisVisible(true)}}
            />

            <Modal 
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >
                {/* Background negro */}
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* Cuerpo del modal */}
                    <View style={{
                        backgroundColor: 'white',
                        height: 200,
                        width: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity:0.25,
                        elevation: 10,
                        borderRadius: 10
                    }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
                        <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>Cuerpo del modal</Text>
                        <Button 
                            title="Cerrar"
                            onPress={() => setisVisible(false)}
                        />
                    </View>

                </View>
            </Modal>
        </View>
    )
}
