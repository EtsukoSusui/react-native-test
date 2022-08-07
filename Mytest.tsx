import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import { DraggableGrid } from 'react-native-draggable-grid';
import LinearGradient from 'react-native-linear-gradient';
interface MyTestProps {
    setscrollable: (flag:boolean)=>void
}

interface MyTestState {
  data:{key:string, name:string, colors:string[], radius:number}[];
}
export class MyTest extends React.Component<MyTestProps, MyTestState>{
  constructor(props:MyTestProps) {
    super(props);
    this.state = {
      data:[
        {name:'1',key:'1', colors:['#64170b',"#e4a17f"], radius:150},
        {name:'2',key:'2', colors:['#66236c',"#f0bdd9"], radius:200},
        {name:'3',key:'3', colors:['#044a3c',"#6fecc3"], radius:180},
        {name:'4',key:'4', colors:['#2d1062',"#ddc4f1"], radius:190},
        {name:'3',key:'5', colors:['#044a3c',"#6fecc3"], radius:180},
        {name:'4',key:'6', colors:['#2d1062',"#ddc4f1"], radius:190}
      ]
    };
  }
  public render_item(item:{key:string, name:string, colors:string[], radius:number}) {
    return (
        <LinearGradient key={item.key} colors={item.colors} 
        style={{
            width:item.radius,
            height:item.radius,
            borderRadius:item.radius / 2,
            justifyContent:'center',
            alignItems:'center',
           
        }}>
            <Text style={styles.item_text}>{item.name}</Text>
        </LinearGradient>
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <DraggableGrid
          numColumns={2}
          renderItem={this.render_item}
          data={this.state.data}
          onItemPress = {()=>this.props.setscrollable(true)}
          onDragStart={() => this.props.setscrollable(true)}
          onDragging={() => this.props.setscrollable(true)}
          onDragRelease={(data) => {
            this.setState({data});
            this.props.setscrollable(false)
          }}
        />
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