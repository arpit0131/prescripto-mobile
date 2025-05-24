import { assets } from '@/assets/assets_frontend/assets';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const contact = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <View className='my-6 p-5 flex-1 gap-5'>
        <Text className='text-center text-3xl content-10 font-semibold text-gray-500'>
          Contact Us
        </Text>
        <View
          className='rounded-xl mx-auto'
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8, // Android shadow
            backgroundColor: '#fff', // Required for shadow to render on Android
            borderRadius: 12,
          }}
        >
          <Image
            source={assets.contact_image}
            resizeMode='contain'
            className='w-72 h-72 rounded-xl'
          />
        </View>
        <View className='gap-6 mt-9' style={{ alignItems: 'center' }}>
          <Text className='text-center text-xl content-10 font-semibold text-gray-500'>
            OUR OFFICE
          </Text>

          <View className='gap-6 w-72'>
            <View className='flex-row gap-3 border border-gray-300 p-6 rounded-xl justify-center items-center'>
              <Image
                source={assets.home}
                resizeMode='contain'
                className='size-6'
              />
              <Text className='text-left'>
                54709 near Shiv Temple Sector 62, Noida, Uttar Pradesh, INDIA
              </Text>
            </View>

            <View className='flex-row gap-3 border border-gray-300 p-6 rounded-xl justify-center items-center'>
              <Image
                source={assets.phone}
                resizeMode='contain'
                className='size-6'
              />
              <Text className='text-left'>+91 9867489276</Text>
            </View>

            <View className='flex-row gap-3 border border-gray-300 p-6 rounded-xl justify-center items-center'>
              <Image
                source={assets.email}
                resizeMode='contain'
                className='size-6'
              />
              <Text className='text-left'>abc@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default contact;
