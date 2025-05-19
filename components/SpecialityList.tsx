import { useNavigation } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'; // ✅ Fixed: Added View

interface SpecialityItem {
  image: React.ElementType;
  speciality: string;
}

interface Props {
  specialityData: SpecialityItem[];
}

const SpecialityList: React.FC<Props> = ({ specialityData }) => {
  const navigation = useNavigation<any>();

  return (
    <View className='flex-1 p-1 justify-center my-16'>
      <Text className='text-2xl font-medium text-center'>
        Find by Speciality
      </Text>
      <Text className='text-center text-sm'>
        Simply browse with our extensive list of trusted doctors,
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
      >
        {specialityData.map((item, idx) => {
          const Icon = item.image;
          return (
            <TouchableOpacity
              key={idx}
              className='items-center gap-2 mr-7'
              onPress={() => navigation.navigate(`/doctors/${item.speciality}`)}
            >
              <Icon width={90} height={90} />
              <Text className='text-xs'>{item.speciality}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SpecialityList;
