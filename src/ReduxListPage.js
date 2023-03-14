import React, { useState } from "react";
import { View , Text, Pressable, FlatList, ActivityIndicator , StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Add_Item_Action, Delete_Item_Action } from "./redux/action/MainAction";

const ReduxListPage = ({navigation}) => {
    const Data = useSelector(state => state.MainReducer)
    const dispatch = useDispatch()
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
        dispatch(Add_Item_Action({name : getText , id : Data.length +1}))
        setText('')
    }

    const deleteItemHandler = (id) => {
        dispatch(Delete_Item_Action(id))
    }

    return (
        <View style={{flex:1 , alignItems:'center' , marginTop : 25}}>
            <Pressable onPress={() => {navigation.navigate('MainPage')}} >
                <Text style={{fontSize:30 , backgroundColor:'dodgerblue' , color:'white' , padding:10 , borderRadius:10}}>go to home</Text>
            </Pressable>

            <TextInput 
                style={{width:200 , height:50 , padding:5 , borderWidth:2 , borderRadius:10 , marginVertical:10 }}
                onChangeText={(value)=> setText(value)}
                value={getText}
                />
            <Button title="submit" color='tomato' onPress={() => onSubmitHandler()}/>

            <FlatList style={{width:'100%' , display:'flex'}}
                data={Data}
                renderItem={({item , index}) => (
                    <TouchableOpacity  
                        style={styles.itemContainer}
                        index={index}
                        onPress={() => deleteItemHandler(item.id)}
                        >
                        <Text style={{fontSize:20}}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ReduxListPage;

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