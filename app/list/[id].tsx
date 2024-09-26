import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Product id : ${id}` }} />

      <Text>Detail for: {id}</Text>

    </View>
  );
};

export default DetailsPage;

