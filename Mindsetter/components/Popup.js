import React from 'react';
import { Text, Button, View, Modal } from 'react-native';

class App extends React.Component {
constructor()
{
    super();
    this.state={
        show:false
    }
}
    render() {
        return(
          <View style={{ flex: 1, marginTop: 100}}>
            //masukin font box gitu
            <Text style={{ fontSize: 80}}>Normal</Text>
            <Modal
            transparent={true}
            visible={this.state.show}
            >
            <View style={{backgroundColor:'#000000aa', flex: 1}}>
                <View style={{backgroundColor:'#ffffff', margin: 50, padding: 40, borderRadius: 10, flex: 1}}> 
                    <Text style={{ fontSize: 50}}>Normal</Text>
            <Button title="shom" onPress={()=>{this.setState({show:false})}} />   
                </View>
            
            </View>
            </Modal>
          </View>
        )
    }
}
