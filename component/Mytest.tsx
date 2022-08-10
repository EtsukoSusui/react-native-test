import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground
} from 'react-native';

import { DraggableGrid } from './dragable';
import LinearGradient from 'react-native-linear-gradient';
type Data = {key:string, name:string, colors:string[], radius:number, image:any}[] | null

interface MyTestProps {
    setscrollable: (flag:boolean)=>void,
    setData:(data:Data)=>void
    data:{key:string, name:string, colors:string[], radius:number, image:any}[] | null
}

interface MyTestState {}
export class MyTest extends React.Component<MyTestProps, MyTestState>{
  constructor(props:MyTestProps) {
    super(props);
  }
  public render_item(item:{key:string, name:string, colors:string[], radius:number, image:any}) {
    // var icon = item.image ? require('image!item.image) : require('image!my-icon-inactive');
    return (
        <LinearGradient key={item.key} colors={item.colors} 
        style={{
            width:item.radius,
            height:item.radius,
            borderRadius:item.radius / 2,
            justifyContent:'center',
            alignItems:'center',
           
        }}>
          <ImageBackground source={item.image} style={{
              width:item.radius,
              height:item.radius,
              borderRadius:item.radius / 2,
              justifyContent:'center',
              alignItems:'center',
              overflow: "hidden",
          }}>
            <Text style={styles.item_text}>{item.name}</Text>
          </ImageBackground>
         </LinearGradient>
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.data &&
        <DraggableGrid
          numColumns={3}
          renderItem={this.render_item}
          data={this.props.data}
          onDragStart={() => this.props.setscrollable(true)}
          
          onDragRelease={(data) => {
            this.props.setData(data);
            this.props.setscrollable(false);
          }}
        />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    width:150,
    height:100,
    backgroundColor:'blue',
  },
  wrapper:{
    paddingTop:100,
    minWidth:'100%',
    minHeight:'100%',
    justifyContent:'center',
  },
  item:{
    width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
  },
  item_text:{
    fontSize:40,
    color:'#FFFFFF',
  },
});