import { useNavigation } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

const SpecialityList = ({ specialityData }: any) => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 15,
        paddingHorizontal: 10,
      }}
    >
      {specialityData.map((item: any, idx: any) => {
        const Icon = item.image;
        return (
          <TouchableOpacity
            className='items-center flex gap-5 mr-7'
            key={idx}
            onPress={() => navigation.navigate(`/doctors/${item.speciality}`)}
          >
            <Icon width={90} height={90} />
            <Text className='text-xl mt-6' style={{ fontSize: 12 }}>
              {item.speciality}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default SpecialityList;
