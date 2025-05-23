import { assets } from '@/assets/assets_frontend/assets';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const about = () => {
  const chooseItemList = [
    {
      label: 'Efficiency:',
      content:
        'Streamlined appointment scheduling that fits into your busy lifestyle.',
    },
    {
      label: 'Convenience:',
      content:
        'Access to a network of trusted healthcare professionals in your area.',
    },
    {
      label: 'Personalization:',
      content:
        'Tailored recommendations and reminders to help you stay on top of your health',
    },
  ];
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <View className='flex-1 my-6 gap-4 mb-20'>
        <Text className='text-center text-3xl content-10 font-semibold text-gray-500'>
          About us
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
            source={assets.about_image}
            className='w-72 h-72 rounded-xl'
            resizeMode='contain'
          />
        </View>
        <View className='flex flex-col gap-5 p-5'>
          <Text className='text-justify'>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </Text>
          <Text className='text-justify'>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </Text>
          <Text className='text-center text-2xl content-10 font-semibold text-gray-500'>
            Our Vision
          </Text>
          <Text>
            {' '}
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </Text>
          <Text className='text-center text-2xl content-10 font-semibold text-gray-500'>
            Why Choose US?
          </Text>
          <View className='gap-3'>
            {chooseItemList.map((item, index) => (
              <View
                key={index}
                className='border border-gray-300 rounded-lg p-4'
              >
                <Text className='text-left font-bold text-lg'>
                  {item.label}
                </Text>
                <Text className='text-left'>{item.content}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default about;
