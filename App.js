import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, Switch, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', ratio: '2.6', gas: '', oil: '', result: '', reverse: false, ratioLabel: 9};

    Items = ["16:1", "20:1", "25:1", "30:1", "32:1", "35:1", "37:1", "40:1", "45:1", "50:1", "55:1", "60:1"];
  }
  buttonPress() {
    this.setState({result: 'Oil: ' + this.state.gas * this.state.ratio});
  }
  render() {
    let result = [];
    if (this.state.reverse) {
      gasOilLabel = 'Oil/Gas Mixture Ratio';
      textLabel = 'Oil (US Ounces)';
      textInput = <TextInput
          style={{marginLeft: 'auto', marginRight: 'auto', width: 100, height: 40, padding: 5, color: '#FFF', borderColor: 'rgba(256, 256, 256, .4)', backgroundColor: 'rgba(256, 256, 256, .2)', borderWidth: 1}}
          onChangeText={(oil) => this.setState({oil})}
          value={this.state.oil}
        />
      if (this.state.ratio.length > 0 && this.state.oil.length > 0) {
        calculated = (this.state.oil / this.state.ratio);
        result = +calculated.toFixed(2) + ' gallons of gas for ' + this.state.oil + ' ounces of oil at ' + Items[this.state.ratioLabel];
      }
    } else {

      gasOilLabel = 'Gas/Oil Mixture Ratio';
      textLabel = 'Gas (US Gallons)';
      textInput = <TextInput
          style={{marginLeft: 'auto', marginRight: 'auto', width: 100, height: 40, padding: 5, color: '#FFF', borderColor: 'rgba(256, 256, 256, .4)', backgroundColor: 'rgba(256, 256, 256, .2)', borderWidth: 1}}
          onChangeText={(gas) => this.setState({gas})}
          value={this.state.gas}
        />
      if (this.state.ratio.length > 0 && this.state.gas.length > 0) {
        calculated = (this.state.ratio * this.state.gas);
        result = +calculated.toFixed(2) + ' ounces of oil for ' + this.state.gas + ' gallons of gas at ' + Items[this.state.ratioLabel];
      }
    }
    return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 30}}>
          <Text style={{textAlign: 'right', color: '#fff', flex: 1, marginRight: 15, marginTop: 7}}>Reverse</Text>
          <Switch
            onValueChange={(value) => this.setState({reverse: value})}
            style={{marginBottom: 10, flex: 0, alignSelf: 'flex-end', marginRight: 15}}
            value={this.state.reverse}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 24, color: '#FFF', paddingTop: 30, textAlign: 'center'}}>{gasOilLabel}</Text>
          <Picker
            itemStyle={{color: '#FFF'}}
            style={{width: 100, marginLeft: 'auto', marginRight: 'auto'}}
            selectedValue={this.state.ratio}
            onValueChange={(itemValue, itemIndex) => this.setState({ratioLabel: itemIndex, ratio: itemValue})}>
            <Picker.Item label="16:1" value="8" />
            <Picker.Item label="20:1" value="6.4" />
            <Picker.Item label="25:1" value="5.1" />
            <Picker.Item label="30:1" value="4.3" />
            <Picker.Item label="32:1" value="4" />
            <Picker.Item label="35:1" value="3.7" />
            <Picker.Item label="37:1" value="3.5" />
            <Picker.Item label="40:1" value="3.2" />
            <Picker.Item label="45:1" value="2.8" />
            <Picker.Item label="50:1" value="2.6" />
            <Picker.Item label="55:1" value="2.3" />
            <Picker.Item label="60:1" value="2.1" />
          </Picker>
           <Text style={{color: '#FFF', textAlign: 'center', fontSize: 18, marginBottom: 10}}>{textLabel}</Text>
           {textInput}
          <Text style={{textAlign: 'center', color: '#FFF', marginTop: 10, marginLeft: 30, marginRight: 30}}>{result}</Text>
        </View>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E29822',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
