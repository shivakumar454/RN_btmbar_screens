 

import react from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

import Icon from 'react-native-vector-icons/Ionicons'

const BottomBar =()=>{
    const Bottom = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Bottom.Navigator
            screenOptions={({route})=>({
                headerShown:false,
                tabBarActiveTintColor:"red",
                tabBarInactiveTintColor:"green",

                tabBarIcon:({focused,color})=>{
                    let IconStar;

                    if(route.name === 'Shiva'){
                        IconStar = focused ? 'home' : 'home-outline';
                    }
                    else if(route.name === 'Kumar'){
                        IconStar = focused ? 'call' : 'call-outline';
                    }
                    else if(route.name === 'Developer'){
                        IconStar =focused ? 'brush' : 'brush-outline';
                    }
                    return <Icon name={IconStar} color={color} size={26}/>
                }
            })}
            >
                <Bottom.Screen name="Home" component={Screen1}/>
                <Bottom.Screen name="Shows" component={Screen2}/>
                <Bottom.Screen name="Movies" component={Screen3}/>

            </Bottom.Navigator>
        </NavigationContainer>
    )
}

export default BottomBar;