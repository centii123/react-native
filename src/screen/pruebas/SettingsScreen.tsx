import { FC } from 'react';
import { Text, View } from 'react-native';


interface Props {
}

const SettingsScreen:FC <Props> = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}
export default SettingsScreen;