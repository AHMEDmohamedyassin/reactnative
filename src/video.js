import React, { useRef } from "react";
import { View, StyleSheet, Button} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";

const VideoComp = ({ navigation }) => {
    const Separator = () => <View style={{marginVertical:10}} />;
    const video = useRef(null)
    return (
        <View style={{ alignItems: "center" }}>
            <Video
                style={{
                    width: "80%",
                    aspectRatio: 1.333333,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                ref={video}
                videoStyle={{
                    width:'100%'
                }}
                // posterSource={require('../assets/imageA.png')}
                source={require("../../a.mp4")}
                useNativeControls={false}
                // usePoster={true}
                resizeMode="contain"
                // isLooping={true}
                onPlaybackStatusUpdate={(status) => console.log(status)}
            />

            <Separator />
            <Button
            onPress={()=>video.current.playAsync()}
            title="play"
            color="#841584"/>

            <Separator />
            <Button
            onPress={()=>video.current.pauseAsync()}
            title="pause"
            color="dodgerblue"/>

            <Separator />
            <Button
            onPress={()=>video.current.setStatusAsync({rate:2})}
            title="rate 2"
            color="tomato"/>

            <Separator />
            <Button
            onPress={()=>video.current.setStatusAsync({volume:0.5})}
            title="volume 0.5"
            color="green"/>

            <Separator />
            <Button
            onPress={()=>video.current.setStatusAsync({positionMillis:100000})}
            title="playback position"
            color="#333"/>
        </View>
    );
};

export default VideoComp;
