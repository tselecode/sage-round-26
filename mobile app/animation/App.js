import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Text, View, Animated, Button } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const moveX = useRef(new Animated.Value(0)).current
  const handlePress = () => {
    SpringAnimation()
    reverseAnimation()
  }
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true
    }).start()
  }, [])

  function SpringAnimation() {
    Animated.spring(moveX, {
      toValue: 200,
      useNativeDriver: true,
      friction:3,
      tension:10
    }).start()
  }
  function reverseAnimation() {
    Animated.spring(moveX, {
      toValue: 0,
      useNativeDriver: true
    }).start()
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={{ width: 300, height: 300, backgroundColor: "blue", opacity: fadeAnim }}>

      </Animated.View>
      <Animated.View style={{ width: 300, height: 300, backgroundColor: "green", margin: 20, transform: [{ translateX: moveX }] }}>

      </Animated.View>
      <View style={{ flex: 1, justifyContent: "space-between", gap: 0, margin: 0 }}>
        <Button title='Animate' onPress={() => {
          moveX._value < 100 ? reverseAnimation() : SpringAnimation()
        }} />
        {/* <Button title='reverse Animate' onPress={reverseAnimation} /> */}
      </View>
    </View>
  )
}