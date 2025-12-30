import { Text, View , FlatList } from "react-native";
import { AfricanCountrys } from "./Data";


export default function FlatListScroll(){
    return(
        <FlatList 
        data = {AfricanCountrys}
        keyExtractor={(c)=>c.code}
        renderItem={({item})=>(
            <View style={{padding:10,borderBottomWidth:2,borderBottomColor:'#ccc'}}>
                <Text>{item.name}</Text>
                <Text>{item.capital}</Text>
                <Text>{item.isoCode}</Text>
            </View>
        )}
        />
    )

}