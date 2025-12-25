import { View, Text, Image, Button, TextInput, ScrollView, ActivityIndicator, Switch } from "react-native-web";
import { useState } from 'react'
import Card from "./Card";
export default function App() {
    const [x, setX] = useState(0)
    const [isOn, setIsOn] = useState(false)
    return <ScrollView>
        <View>
            <Text></Text>
            <Text>welcome</Text>
            <View>
                <Image
                    source={{ uri: "https://www.shutterstock.com/image-photo/kharkiv-ukraine-august-9-2023-600nw-2382844697.jpg" }}
                    style={{ width: 500, height: 500 }} />

            </View>
            <TextInput placeholder="enter your name"
                style={{
                    borderWidth: 2,
                    padding: 10,
                    margin: 10
                }} />
            <Button title="submit" onPress={() => {
                setX(12)
            }} />
            <ActivityIndicator size="small" color="blue" />
            <Switch size="medium"
                value={isOn} onValueChange={(v) => { setIsOn(v) }}
                trackColor={{ false: "aqua", true: "blue" }}

            />

            <Text style={{ color: "red", fontSize: 40, margin: 30 }}>styles text</Text>

            <Card/>
        </View>
    </ScrollView>
}