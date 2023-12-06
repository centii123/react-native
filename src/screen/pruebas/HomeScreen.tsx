import { FC } from 'react';
import { Text, View } from 'react-native';


interface Props {
}

const HomeScreen:FC <Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is Home!</Text>
    </View>
  )
}
export default HomeScreen;