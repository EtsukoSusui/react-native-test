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
   TouchableOpacity,
   Button
 } from 'react-native';
 import { MyTest } from './Mytest';

 let colors:string[][] = [['#64170b',"#e4a17f"], ['#66236c',"#f0bdd9"],['#044a3c',"#6fecc3"],['#2d1062',"#ddc4f1"]]
 type Data = {key:string, name:string, colors:string[], radius:number}[] | null
 
 const App = () => {
   const values=["Topics","Maps"]
   const backgroundStyle = {
     backgroundColor:"#000000"
   };
   const [selectedValue, setSelectedValue] = useState("Topics");
   const [draggable, setscrollable] = useState(false);
   const [data, setData] = useState<Data>(null);

   const handleAddnew = () =>{
    let radius:number = 80 + Math.random() * 120;
    if(data)
    {
      setData([{name:(data?.length + 1).toString(),key:(data?.length + 1).toString(), colors:colors[data?.length % 4],radius:radius}, ...data])
    }
    else{
      setData([{name:"1",key:"1", colors:colors[0],radius:radius}])
    }
    
   }

   return (
    <View style={styles.main}>
      <SafeAreaView style={backgroundStyle}>
        <Button
            onPress={handleAddnew}
            title="Add new topic"
          />
          <Text style={styles.label}>My Last Summer</Text>
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
            <ScrollView
                scrollEnabled={!draggable}
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View style={styles.container}>
                    {data && <MyTest setscrollable={setscrollable} data={data} setData={setData}/>}
                </View>
            </ScrollView>
      </SafeAreaView>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   main:{
     backgroundColor:"#000000",
     flex:0,
     minHeight:"100%"
   },
   container: {
     backgroundColor: "#000000",
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
 
 
 