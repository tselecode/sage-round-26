import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function FetchData() {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((responce) => responce.json())
            .then(data => setData(data))
            .catch(() => {
                setError(true)
            })
    },[])

    if (data == undefined) {
        return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            {error? <Text>Error</Text> : <ActivityIndicator size='large' />}


        </View>
    } else {
        return <FlatList
            data={data}
            keyExtractor={(post) => post.id}
            renderItem={({ item }) => (
                <View style={{ padding: 10, borderBottomWidth: 2, borderBottomColor: '#ccc' }}>
                    <Text>id:{item.id}</Text>
                    <Text>title:{item.title}</Text>
                    <Text>{item.body}</Text>
                </View>
            )}
        />
    }


}