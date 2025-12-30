import { Text, View, ScrollView } from "react-native";
import { carBrands } from "./Data";


export default function ScrollViewExample() {
    return (
        <ScrollView>
            {
                carBrands.map((c) => (
                    <View>
                        <Text>{c.name}</Text>
                        <Text>{c.country}</Text>
                    </View>
                ))
            }
        </ScrollView>
    )
}