import { assets } from '@/assets/assets_frontend/assets';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  const ArrowIcon = assets.arrow_icon;
  return (
    <View className='flex-[2] bg-primary justify-center items-center p-4 rounded-lg gap-3 mb-5 pt-12'>
      <Text className='text-white text-2xl font-semibold text-center'>
        Book Appointement With Trusted Doctors..
      </Text>
      <Image className='w-30' source={assets.group_profiles} />
      <Text className='text-white'>
        Simply browse with our extensive list of trusted doctors, schedule your
        appointment hassle-free
      </Text>
      <Link href='/' asChild>
        <TouchableOpacity className='flex-row bg-white rounded-full py-3 px-6 mt-3 items-center space-x-2'>
          <Text className='mr-2'>Book Appointment</Text>
          <ArrowIcon width={15} height={15} />
        </TouchableOpacity>
      </Link>

      <Image
        className='size-96'
        resizeMode='contain'
        source={assets.header_img}
      />
    </View>
  );
};

export default Header;
