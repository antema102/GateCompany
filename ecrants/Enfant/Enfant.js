import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdFouth = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third:ThirdRoute,
  fourth:ThirdFouth
});

export default function Enfant() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
    {key:'third',title:'Third'},
    {key:'fourth',title:'Fourth'}
  ]);

  return (
    <TabView

      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}