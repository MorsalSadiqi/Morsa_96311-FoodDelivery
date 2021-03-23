import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ProfileItems from '../Components/ProfileItems';

export default function Profile() {
  return (
      <View style={styles.container}>
          <Image 
            style={{height: 200}}
            source={{uri: require("../assets/profile.jpg")}}
          />

          <ProfileItems name="Username" value="Morsal Sadiqi"/>
          <ProfileItems name="Gmail" value="morsalsdq@gmail.com"/>
          <ProfileItems name="Gender" value="Female"/>
          <ProfileItems name="Mobile" value="+93 799077456"/>
          <ProfileItems name="Address" value="Herat-Afghanistan"/>
      </View>
 
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});
