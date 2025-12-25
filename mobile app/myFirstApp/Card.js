import { View, Text, Image,Button } from "react-native"

export default function Card() {
    return <View style={{flex:1,flexDirection:'row',justifyContent:'spaceBetween'}}>
        <View style={{ flex: 1, justifyContent: 'space-between',padding:20,border:2,borderColor:"black" }}>
            <Image
                source={{ uri: "https://www.topgear.com/sites/default/files/cars-car/inline-gallery/2025/05/Original-49014-mercedes-e53-amg-saloon-0002_0.jpg" }}
                style={{ width: 300, height: 300 }} />
            <Text style={{fontSize:20,fontWeight:500}}>marcedes benz</Text>
            <Button title="Buy now" style={{borderWidth:1}}/>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image
                source={{ uri: "https://images.hgmsites.net/med/2025-audi-a7-2-9-tfsi-premium-plus-angular-front-exterior-view_100966185_m.webp" }}
                style={{ width: 300, height: 300 }} />
            <Text style={{fontSize:20,fontWeight:500}}>audi</Text>
             <Button title="Buy now" style={{width:10}}/>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image
                source={{ uri: "https://www.topgear.com/sites/default/files/2024/10/1-BMW-M4-review-2024-UK.jpg" }}
                style={{ width: 300, height: 300 }} />
            <Text style={{fontSize:20,fontWeight:500}}>bmw m4</Text>
             <Button title="Buy now" style={{width:10}}/>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image
                source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/dg020-105cl-1574257068.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1200:*" }}
                style={{ width: 300, height: 300 }} />
            <Text style={{fontSize:20,fontWeight:500}}>dodge challenger</Text>
             <Button title="Buy now" style={{width:10}}/>
        </View>
    </View>


}