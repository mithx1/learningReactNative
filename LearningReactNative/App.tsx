import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const App = () => {
  const loginWithGoogle = () => {
    console.log('Button pressed');
  };
  const {container} = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  });
  return (
    <View style={container}>
      <Button title="Sign in with google" onPress={loginWithGoogle}></Button>
    </View>
  );
};

export default App;
