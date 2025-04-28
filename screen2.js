import react, { useState } from "react";
import {View,Text,StyleSheet} from "react-native";
import  {Button}  from "react-native-paper";
import { useNavigation,useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import Modal from "react-native-modal";



export default function Screen2 ({navigation}){
    const [Look,SetLook] =useState(false);

    return(
        <SafeAreaView>
        <View>
            
            {/* <Text>Screen1</Text> */}
            {/* <Button mode="contained" onPress={()=> navigation.navigate('Visited')}>Move to screen3</Button> */}
             {/* <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITYt0lTeubyMKuFRcnr8lYMA44QE-exzDdQ&s"}} style={{width:500,height:400}}/> */}
             
        </View>
        <View>
            <Image source={{uri:"https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg"}} style={{width:800,height:400,paddingTop:50,paddingLeft:50}}/>
    <Modal
                    isVisible={Look}
                    onBackdropPress={()=>SetLook(false)}
                    animationIn="bounceIn"
                    animationInTiming={1000}
                    animationOut="bounceOut"
                    animationOutTiming={1000}
                    backdropColor="black"
                    backdropOpacity={0.8}
                    >
                        <View >
                            <Text >hello</Text>
                            <Button mode="contained" onPress={()=>SetLook(false)}>Visited</Button>
                        </View>
                    </Modal>
                    <Button mode="contained-tonal" onPress={()=>SetLook(!Look)}>Set as Visited</Button>

        </View>
        </SafeAreaView>
    )
};

// const  Screen2= ()=>{
//     const navigation =useNavigation();
//     // const route=useRoute();
//     // console.log(route);
//     // const Fun =()=>{
//     //     navigation.navigate('Screen3');
//     // }
//     return(
//         <SafeAreaView style={Styles.main}>
//         <View>
//             <Text style={{fontSize:24}}>Screen2</Text>
//         </View>
//         </SafeAreaView>
//     )
// }

// export default Screen2;

// const Styles= StyleSheet.create({
//     main:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",
//     }
// })