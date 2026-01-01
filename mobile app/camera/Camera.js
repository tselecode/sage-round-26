import { useEffect, useRef, useState } from "react"
import { Camera, CameraView } from "expo-camera"
import { Button, Image, View, Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
export default function CameraApp() {
    const [hasPermission, setHasPermission] = useState()
    const [photo, setPhoto] = useState()
    const cameraRef = useRef()

    useEffect(() => {
        (async () => {

            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    async function takePhoto() {
        if (cameraRef.current) {
            const data = await cameraRef.current.takePictureAsync()
            setPhoto(data.uri)
        }
    }
    if (hasPermission == null) return <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>requesting permission</Text>
    if (hasPermission == false) return <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>permission denied</Text>

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1}}>
                <View style={{ flex: 1 }}>
                    <CameraView ref={cameraRef} style={{ flex: 1 }} />
                    <Image source={{ uri: photo }} style={{ height: 400 }} />
                    <Button title="take photo" onPress={takePhoto} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}