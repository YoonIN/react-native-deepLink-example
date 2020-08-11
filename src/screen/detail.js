import React from 'react';
import {View, Text} from 'react-native';

const App = ({route, navigation}) => {
  const {itemId} = route.params;
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail Screen</Text>
        <Text>itemId: {itemId}</Text>
      </View>
    </>
  );
};

export default App;
