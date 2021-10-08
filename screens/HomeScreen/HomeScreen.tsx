import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';


const firstCategory = categories.items[2];

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
     {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
        />
    </View>
  );
}

