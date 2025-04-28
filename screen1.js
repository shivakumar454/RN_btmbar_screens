import react from "react";
import {View,Text,StyleSheet} from "react-native"
import  {Button}  from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image } from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";




export default function Screen1 ({navigation}){
 
    return(
        <View>
            {/* <Text>Screen1</Text> */}
            {/* <Button mode="contained" onPress={()=> navigation.navigate('Places')}>Move to screen2</Button> */}
            {/* <Image source={require('./assets/shiva.png')}/> */}
            {/* <Image source={{uri:"https://transforms.stlzoo.org/production/animals/amur-tiger-01-01.jpg?w=1200&h=630&q=82&auto=format&fit=clip&dm=1658935145&s=3f977c2779afe21880458218dd6e16ba"}} style={{width:200,height:200}}/> */}
            <Image source={{uri:"https://img.pikbest.com/origin/10/06/44/83WpIkbEsTJhK.jpg!w700wp"}} style={{width:800,height:400}}/>

             
        </View>
    )
};





// const Screen1 =()=>{
//     return (    
//         <SafeAreaView style={MYstyles.container}>
//             <Text style={MYstyles.text}>Screen1</Text>
//         </SafeAreaView>
//     )
// }

// export default Screen1;

// const MYstyles =StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",
//     },
//     text:{
//         fontSize:40,
//         fontWeight:"bold"
//     }

// })

//    const Screen1= ()=>{
//         const navigation =useNavigation();
//         const Top=createMaterialTopTabNavigator();
//         return(
//            <Top.Navigator>
//                 <Top.Screen name="Screen2" component={Screen2}/>
//                 <Top.Screen name="Screen2" component={Screen3}/>
//                 <Top.Screen name="Screen4" component={Screen4}/>
//                 </Top.Navigator>
//         )
//     };
// export default Screen1;

