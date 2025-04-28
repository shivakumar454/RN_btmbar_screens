import react from "react";
import {View,Text,StyleSheet, FlatList,ScrollView} from "react-native";
import  {Button}  from "react-native-paper";
import { useNavigation,useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

const  Screen3= ({navigation})=>{
    // const navigation =useNavigation();
    // const route=useRoute();
    // console.log(route);
    // const Fun =()=>{
    //     navigation.navigate('Screen3');
    // }
    return(
        <SafeAreaView style={Styles.main}>
        <ScrollView>
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            {/* <Text style={{fontSize:24}}>Screen3</Text> */}
            <Image source={{uri:"https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg"}} style={{width:800,height:400,marginBottom:20}}/>
            <Image source={{uri:"https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2014/02/delhi.jpg"}} style={{width:800,height:400,paddingBottom:60}}/>
            {/* <Button mode="contained" onPress={()=>navigation.navigate('Home')}>Move to Home</Button> */}


           

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Screen3;

const Styles= StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})

// import React from "react";
// import { View, Text } from "react-native";
// import { Button } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Screen3() {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Profile</Text>
//         <Button mode="contained" onPress={() => navigation.navigate("Screen4Stack")}>
//           Move to Screen4
//         </Button>
//       </View>
//     </SafeAreaView>
//   );
// }


// import React from "react";
// import { View, Text } from "react-native";
// import { Button } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Screen3() {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>Profile</Text>
//         <Button mode="contained" onPress={() => navigation.navigate("Screen4")}>
//           Move to Screen4
//         </Button>
//       </View>
//     </SafeAreaView>
//   );
// }



//  import React from "react";
// import {View,Text} from "react-native"
// import  {Button}  from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import Screen4 from "./screen4";

// export default function Screen3 (){

//     const navigation =useNavigation();
//     const Fun =()=>{
//         navigation.navigate('Screen4');
//     }

//     return(
//         <SafeAreaView>
//         <View>
//             <Text>Profile</Text>
//             <Button mode="contained" onPress={Fun} >Move to Screen4</Button>
//         </View>
//         </SafeAreaView>
//     )
// }