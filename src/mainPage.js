import { StatusBar } from "expo-status-bar";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    ScrollView,
} from "react-native";

export default function MainPage({ navigation }) {
    return (
        <ScrollView>
            <ImageBackground
                source={require("../assets/imageA.png")}
                style={styles.container}
                resizeMode="cover"
            >
                <View style={[styles.container, styles.backgroundView]}>
                    <Image
                        source={require("../assets/imageB.png")}
                        style={styles.logoImage}
                    />
                    <Text
                        style={{ fontSize: 25, color: "#000", fontWeight: 900 }}
                    >
                        frist react native project
                    </Text>
                    <TextInput
                        style={{
                            width: 200,
                            height: 50,
                            marginVertical: 10,
                            borderWidth: 2,
                            borderRadius: 10,
                        }}
                        keyboardType={"numeric"}
                    />

                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? "tomato" : "#fff",
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                minWidth: 200,
                                textAlign: "center",
                            },
                        ]}
                        onPress={() => navigation.navigate('VideoComp')}
                    >
                        {({ pressed }) => (
                            <Text style={{ fontSize: 20 }}>
                                {pressed ? "Pressed!" : "Press Me"}
                            </Text>
                        )}
                    </Pressable>

                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            navigation.navigate("ListPage");
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={{ fontSize: 30 }}>
                                go to list page
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Button
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={() => navigation.navigate('ReduxListPage')}
                    />

                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundView: {
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: "rgba(255 , 255 , 255 , 0.9)",
    },
    logoImage: {
        width: 100,
        height: 100,
        marginVertical: 100,
    },
    button: {
        alignItems: "center",
        backgroundColor: "tomato",
        padding: 10,
        marginVertical: 50,
    },
    cameraBTN:{
        backgroundColor: 'dodgerblue',
        fontSize:20,
        color : '#fff',
        padding: 10
    }
});
