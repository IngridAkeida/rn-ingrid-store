import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return( 
    <Tabs screenOptions={
      {tabBarActiveTintColor: '#124e85'}}>
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Home', 
          tabBarIcon: ({color}) => <FontAwesome name="home" size={28} color={color} />
        }}/>
      <Tabs.Screen 
        name="category"  
        options={{
          title: 'Category', 
          tabBarIcon: ({color}) => <FontAwesome name="archive" size={28} color={color} />
        }}/>
      <Tabs.Screen 
        name="about"
        options={{
          title: 'About Us', 
          tabBarIcon: ({color}) => <FontAwesome name="book" size={28} color={color} />
        }}/>
    </Tabs>
  )
}