import React, { useState } from "react";
import { View , Text, Pressable, FlatList, ActivityIndicator , StyleSheet, TextInput, Button, Alert} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListPage = ({navigation}) => {
    let initialData = [
        {
            name : 'ahmed',
            age : 20
        },
        {
            name : 'ahmed2',
            age : 21
        },
        {
            name : 'ahmed3',
            age : 22
        },
    ]
    const [Data , setData] = useState(initialData)
    const [getText , setText] = useState('')

    const makeAlert = () =>{
        return (
            Alert.alert('empty value' , 'please enter value' , 
            [
                {
                    text:'ok' ,
                    onPress: () => console.log('pressed')
                }
            ] , 
            {
                cancelable: true
            })
        )
    }

    const onSubmitHandler = () => {
        if(getText == '') return makeAlert()
        setData([...Data , {name : getText , age : 23}])
        setText('')
    }

    return (
        <View style={{flex:1 , alignItems:'center'}}>
            <Pressable onPress={() => {navigation.navigate('MainPage')}} >
                <Text style={{fontSize:30 , backgroundColor:'dodgerblue' , color:'white' , padding:10 , borderRadius:10}}>go to home</Text>
            </Pressable>

            <TextInput 
                style={{width:200 , height:50 , padding:5 , borderWidth:2 , borderRadius:10 , marginVertical:10 }}
                onChange={(ele)=> {setText(ele.target.value)}}
                value={getText}
                />
            <Button title="submit" color='tomato' onPress={() => onSubmitHandler()}/>

            <ActivityIndicator size="small" color="#0000ff" style={{marginVertical:20}}/>

            <FlatList style={{width:'100%' , display:'flex'}}
                data={Data}
                renderItem={({item , index}) => (
                    <View style={styles.itemContainer} index={index}>
                        <Text style={{fontSize:20}}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ListPage;

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'#ddd',
        paddingVertical:10,
        width:'80%',
        alignSelf:'center',
        alignItems:'center',
        marginVertical:10
    },
    button: {
        alignItems: "center",
        backgroundColor: "tomato",
        padding: 10,
        marginVertical: 50,
    },
})