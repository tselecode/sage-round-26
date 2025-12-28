import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
export default function App() {
  const [gender, setGender] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 40,
      }}
    >
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ backgroundColor: "#253237" }}>
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={{ fontSize: 100, fontWeight: 700, color: "#e0fbfc" }}>
              Sign Up
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",

              marginTop: 10,

              margin: 10,
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#5c6b73",
            }}
          >
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#c2dfe3"
              style={{
                margin: 10,
                padding: 15,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#9db4c0",
                color: "#c2dfe3",
              }}
            />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#c2dfe3"
              style={{
                margin: 10,
                padding: 15,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#9db4c0",
                color: "#c2dfe3",
              }}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#c2dfe3"
              style={{
                margin: 10,
                padding: 15,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#9db4c0",
                color: "#c2dfe3",
              }}
              TextInputKeyboardType="email-address"
            />
            <View
              style={{
                margin: 10,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#9db4c0",
              }}
            >
              <View >
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => setGender(itemValue)}
                  style={{ padding: 1 }}
                  dropdownStyle={{backgroundColor:"#333a3dff"}}
                  dropdownIconColor="#333a3dff"
                  mode="dropdown"
                >
                  <Picker.Item
                    label=" Gender"
                    value=""
                    style={{ color: "#e0fbfc" ,backgroundColor: "#333a3dff" }}
                  />
                  <Picker.Item
                    label="Male"
                    value="male"
                    style={{ color: "#c2dfe3",backgroundColor: "#333a3dff" }}
                  />
                  <Picker.Item
                    label="Female"
                    value="female"
                    style={{ color: "#c2dfe3",backgroundColor: "#333a3dff" }}
                    />
                </Picker>
              </View>
                    </View>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#c2dfe3"
              style={{
                margin: 10,
                padding: 15,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#9db4c0",
                color: "#c2dfe3",
              }}
              secureTextEntry
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#c2dfe3"
              style={{
                margin: 10,
                padding: 15,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#9db4c0",
                color: "#c2dfe3",
              }}
              secureTextEntry
            />
            <View
              style={{
                display: "block",
                margin: 20,
                padding: 20,
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  margin: 10,
                  padding: 10,
                  backgroundColor: "red",
                  width: 100,
                  borderRadius: 5,
                  backgroundColor: "#253237",
                  
                }}
                onPress={()=>{
                  <ActivityIndicator size="medium" color="white"/>
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
