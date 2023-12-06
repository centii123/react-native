import { FC } from 'react'
import { View, Text } from 'react-native'

interface Props {
}

export const ClienteLista:FC <Props> = () => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ClienteLista</Text>
    </View>
    )
}

export default ClienteLista;