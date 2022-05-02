import React from 'react'
import { View, Text } from 'react-native';

const CityList = () => (
  <View>
    <Text>City List</Text>
    {Array.from(Array(1000).keys()).map(e=><Text key={`city_${e}`}>City => {e}</Text>)}
  </View>
);

export default CityList;
