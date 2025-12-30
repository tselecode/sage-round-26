import { View , Button, Text} from "react-native";

export default function HomeScreen({navigation}){
return(
    <View>
        <Text>Home page</Text>
        <Button title="Details" onPress={()=>{
            navigation.navigate("Details")
        }}/>
        <Button title="scroll view" onPress={()=>{
            navigation.navigate("scrollView")
        }}/>
        <Button title="Flat list view" onPress={()=>{
            navigation.navigate("FlatListScroll")
        }}/>
        <Button title="Fetch Data from Api" onPress={()=>{
            navigation.navigate("FetchData")
        }}/>
        <Button title="Fetch photo" onPress={()=>{
            navigation.navigate("FetchPhoto")
        }}/>
    </View>
)
}