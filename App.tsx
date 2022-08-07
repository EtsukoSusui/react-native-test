/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   View,
   Text,
   StyleSheet,
   TouchableOpacity
 } from 'react-native';
 
import { MyTest } from './Mytest';

 const App = () => {
   const values=["Topics","Maps"]
   const backgroundStyle = {
     backgroundColor:"#000000"
   };
   const [selectedValue, setSelectedValue] = useState("Topics");
   const [draggable, setscrollable] = useState(false);
   return (
     <SafeAreaView style={backgroundStyle}>
       <ScrollView
          scrollEnabled={!draggable}
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
           <View style={{ padding: 10, flex: 1 }}>
           <Text style={styles.label}>{draggable?"Yes":"No"}</Text>
           <View style={[styles.row]}>
             {values.map((value) => (
               <TouchableOpacity
                 key={value}
                 onPress={() => setSelectedValue(value)}
                 style={[
                   styles.button,
                   selectedValue === value && styles.selected,
                 ]}
               >
                 <Text
                   style={[
                     styles.buttonLabel,
                     selectedValue === value &&
                       styles.selectedLabel,
                   ]}
                 >
                   {value}
                 </Text>
               </TouchableOpacity>
             ))}
           </View>
           <View style={styles.container}>
              <MyTest setscrollable={setscrollable}/>
           </View>
         </View>
         
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
  
   container: {
     flex: 1,
     marginTop: 8,
     backgroundColor: "#000000",
     minHeight: 200,
   },
   box: {
     width: 50,
     height: 50,
   },
   row: {
     flexDirection: "row",
     flexWrap: "wrap",
   },
   button: {
     paddingHorizontal: 8,
     paddingVertical: 6,
     borderRadius: 4,
     alignSelf: "flex-start",
     marginHorizontal: "1%",
     marginBottom: 6,
     minWidth: "48%",
     textAlign: "center",
   },
   selected: {
     borderWidth: 0,
     borderBottomWidth:2,
     borderBottomColor:"red",    
   },
   buttonLabel: {
     fontSize: 12,
     fontWeight: "500",
     color: "#767676",
   },
   selectedLabel: {
     color: "white",
   },
   label: {
     textAlign: "center",
     marginBottom: 10,
     fontSize: 30,
     color:"white"
   },
 });
 
 export default App;
 
 
 