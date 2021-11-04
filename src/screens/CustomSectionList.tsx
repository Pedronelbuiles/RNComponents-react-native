import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman",]
    },
    {
      casa: "Anime",
      data: ["Bakugou", "Makishima", "Saitama", "Bakugou", "Makishima", "Saitama","Bakugou", "Makishima", "Saitama","Bakugou", "Makishima", "Saitama","Bakugou", "Makishima", "Saitama",]
    }
];

export const CustomSectionList = () => {
    const {theme: {colors}} = useContext(ThemeContext)

    return (
        <View style={{ ...styles.globalMargin, flex: 1}}>
            <SectionList 
                sections={casas}
                keyExtractor={(item, index) => item+index}
                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{marginBottom: 70}}>
                        <HeaderTitle title={`Total casas ${casas.length}`} />
                    </View>
                )}
                renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
                stickySectionHeadersEnabled
                renderSectionHeader={({section: {casa}}) => 
                <View style={{backgroundColor: colors.background}}>
                    <HeaderTitle title={casa} />
                </View>
                }
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={`Total: ${section.data.length}`}/>
                )}
                SectionSeparatorComponent={ItemSeparator}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
