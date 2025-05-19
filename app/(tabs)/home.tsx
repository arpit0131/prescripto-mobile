import { specialityData } from '@/assets/assets_frontend/assets';
import Header from '@/components/Header';
import SpecialityList from '@/components/SpecialityList';
import TopDoctors from '@/components/TopDoctors';
import React from 'react';
import { ScrollView, View } from 'react-native';

const home = () => {
  return (
    <View className='flex-1 p-0 mb-28'>
      <ScrollView>
        <Header />
        <SpecialityList specialityData={specialityData} />
        <TopDoctors />
      </ScrollView>
    </View>
  );
};

export default home;
