import { Button, Text, View } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/CounterSlice';

export default function Counter() {

    const counterFromStore = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: 100 }}>
            <Text style={{ textAlign: "center", fontSize: 100 }}>{counterFromStore}</Text>
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", gap: 1 }}>
                <Button title='count' onPress={() => {
                    dispatch(increment())
                }} />
                <Button title='minus' onPress={() => {
                    dispatch(decrement())
                }} />
                <Button title='reset' onPress={() => {
                    dispatch(reset())
                }} />
            </View>

        </View>
    )
}