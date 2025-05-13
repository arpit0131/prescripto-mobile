import { assets } from '@/assets/assets_frontend/assets.js';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }: any) => {
  if (focused) {
    return (
      <View
        className='flex flex-row w-full 
                flex-1 min-w-[112px] 
                min-h-16 mt-4 justify-center 
                items-center rounded-full 
                overflow-hidden bg-gray-100 border border-black'
      >
        <Image source={icon} tintColor='#151312' className='size-5' />
        <Text className='text-base font-semibold ml-2'>{title}</Text>
      </View>
    );
  } else {
    return (
      <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image source={icon} tintColor='#A8B5DB' className='size-5' />
      </View>
    );
  }
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          height: 52,
          marginHorizontal: 20,
          marginBottom: 36,
          position: 'absolute',
          borderWidth: 1,
          borderColor: '#0f0D23',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assets.home} title='Home' />
          ),
        }}
      />
      <Tabs.Screen
        name='allDoctors'
        options={{
          title: 'Doctors',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assets.doctor} title='Doctors' />
          ),
        }}
      />
      <Tabs.Screen
        name='contact'
        options={{
          title: 'Contact',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assets.phone} title='Contact' />
          ),
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={assets.about} title='About' />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
