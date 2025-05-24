import { doctors, specialityData } from '@/assets/assets_frontend/assets';
import TopDoctor from '@/components/TopDoctor';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const allDoctors = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterDoc, setFilterDoc] = useState(doctors);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  const handleFilter = (speciality: string) => {
    if (selectedSpeciality === speciality) {
      setSelectedSpeciality('');
      setFilterDoc(doctors);
    } else {
      setSelectedSpeciality(speciality);
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    }
  };
  return (
    <FlatList
      ListHeaderComponent={
        <View className='mt-6'>
          <Text className='text-lg'>
            Browse through the doctors specialist...
          </Text>

          <TouchableOpacity
            className='py-2 border rounded-lg w-20 mt-4'
            style={{
              backgroundColor:
                showFilter || selectedSpeciality ? '#5996ff' : '#f5f5f5',
              borderColor:
                showFilter || selectedSpeciality ? '#5996ff' : 'black',
            }}
            onPress={() => setShowFilter((prev) => !prev)}
          >
            <Text
              className='text-center text-lg'
              style={{
                color: showFilter || selectedSpeciality ? 'white' : 'black',
              }}
            >
              Filter
            </Text>
          </TouchableOpacity>
          {showFilter && (
            <View className='gap-4 mt-4'>
              {specialityData.map((item, index) => {
                const isSelected = selectedSpeciality === item.speciality;
                return (
                  <TouchableOpacity
                    key={index}
                    className={`py-3 px-3 border rounded-lg ${
                      isSelected ? 'bg-primary border-primary' : '#f5f5f5'
                    }`}
                    onPress={() => handleFilter(item.speciality)}
                  >
                    <Text
                      className={`text-center text-lg font-semibold ${
                        isSelected ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {item.speciality}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      }
      data={filterDoc}
      keyExtractor={(item) => item._id}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'center',
        gap: 8,
      }}
      contentContainerStyle={{
        padding: 8,
        paddingBottom: 90,
        gap: 10,
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TopDoctor
          itemId={item._id}
          Index={index}
          docImage={item.image}
          docName={item.name}
          docSpeciality={item.speciality}
        />
      )}
    />
  );
};

export default allDoctors;
