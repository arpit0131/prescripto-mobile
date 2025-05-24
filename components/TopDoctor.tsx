import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const TopDoctor = ({
  itemId,
  Index,
  docImage,
  docName,
  docSpeciality,
}: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      key={Index}
      style={{ width: '48%', height: '100%' }}
      onPress={() => navigation.navigate(`/appointment/${itemId}`)}
      className='border border-primary rounded-xl overflow-hidden mb-4 active:scale-95 transition-all duration-300'
    >
      <Image
        source={docImage}
        className='w-full h-52 bg-primary'
        resizeMode='cover'
      />
      <View className='p-4'>
        <View className='flex-row items-center gap-2 mb-1'>
          <View className='w-2 h-2 bg-green-700 rounded-full' />
          <Text className='text-green-700 font-medium text-sm'>Available</Text>
        </View>
        <Text className='text-gray-900 font-medium'>{docName}</Text>
        <Text className='text-gray-600 text-sm'>{docSpeciality}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopDoctor;
