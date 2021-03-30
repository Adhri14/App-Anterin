import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../utils';
import {ImgBackground} from '../../assets';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.background}
        colors={['#6631FF', '#A431FF', '#EE89FF']}>
        <ImgBackground />
      </LinearGradient>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: Fonts.Semibold,
  },
});
