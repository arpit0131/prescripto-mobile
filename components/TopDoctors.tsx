import { doctors } from '@/assets/assets_frontend/assets';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import TopDoctor from './TopDoctor';

const TopDoctors = () => {
  const navigation = useNavigation<any>();
  return (
    <View className='flex flex-col items-center gap-4  text-gray-900'>
      <Text className='text-3xl font-medium'>Top Doctors to Book</Text>
      <Text className='text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </Text>
      <FlatList
        data={doctors.slice(0, 4)}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <TopDoctor
            itemId={item._id}
            Index={index}
            docImage={item.image}
            docName={item.name}
            docSpeciality={item.speciality}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingTop: 12,
          paddingBottom: 20,
          gap: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('/doctors')}
        className='bg-white text-black border border-black mb-10 px-12 py-3 rounded-full'
      >
        <Text className='font-semibold'>More Doctors</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopDoctors;
