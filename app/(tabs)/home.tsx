import { assets, specialityData } from '@/assets/assets_frontend/assets';
import SpecialityList from '@/components/SpecialityList';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const home = () => {
  const ArrowIcon = assets.arrow_icon;
  return (
    <View className='flex-1 p-1 mb-50'>
      <ScrollView>
        {/* top */}
        <View className='flex-[2] bg-primary justify-center items-center p-4 rounded-lg gap-1 mb-5'>
          <Text className='text-white text-2xl font-semibold text-center'>
            Book Appointement With Trusted Doctors..
          </Text>
          <Image className='w-30' source={assets.group_profiles} />
          <Text className='text-white'>
            Simply browse with our extensive list of trusted doctors, schedule
            your appointment hassle-free
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
        {/* bottom */}
        <View className='flex-[1] text-center justify-center '>
          <Text className='text-2xl font-medium'>Find by Speciality</Text>
          <Text className='sm:w-1/3 text-center text-sm'>
            Simply browse with our extensive list of trusted doctors,
          </Text>
          <SpecialityList specialityData={specialityData} />
        </View>
      </ScrollView>
    </View>
  );
};

export default home;
