import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {
    const {theme: {colors, dark}} = useContext(ThemeContext)
    const {top} = useSafeAreaInsets()
    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log("Terminado el refresh")
            setData("Holiii")
            setRefreshing(false)
        }, 1500);
    }

    return (
        <ScrollView 
            style={{marginTop : refreshing ? top : 0}}
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.background} //Android
                    colors={[colors.text, colors.primary]} //Android
                    // style={{backgroundColor: colors.background}} //IOS
                    // tintColor={colors.text}
                    // title="Refreshing" //IOS
                    // titleColor={dark ? 'white' : 'black'} //IOS

                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                {
                    data && <HeaderTitle title={data} />
                }
                
            </View>
        </ScrollView>
    )
}
