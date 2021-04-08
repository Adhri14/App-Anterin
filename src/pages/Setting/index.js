import React from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BgBottom, BgTop, Bike, Car, LabelCard, Plane, Van } from '../../assets';
import { Colors, Fonts } from '../../utils';

const Setting = () => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={Colors.Other} barStyle='dark-content' translucent={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        <View style={styles.textContent}>
          <Text style={styles.welcome}>Setting</Text>
        </View>
        <View style={styles.profile}>
          <Text style={styles.init}>A</Text>
        </View>
      </View>
      <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.background}
          colors={['#6631FF', '#A431FF', '#EE89FF']}>
          <BgTop style={styles.top} />
          <BgBottom style={styles.bottom} />
          <LabelCard style={styles.labelCard} />
          <View style={styles.textContentCard}>
            <Text style={styles.cardName}>Balance</Text>
            <Text style={styles.total}>Rp. 2.560.000</Text>
          </View>
        </LinearGradient>
        <View style={styles.contentList}>
          <Text style={styles.textFeture}>Features</Text>
          <View style={styles.row}>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Bike />
              </TouchableOpacity>
              <Text style={styles.title}>Bike</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Car />
              </TouchableOpacity>
              <Text style={styles.title}>Car</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Van />
              </TouchableOpacity>
              <Text style={styles.title}>Van</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btn}>
                <Plane />
              </TouchableOpacity>
              <Text style={styles.title}>Plane</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.last}>Last History</Text>
            <Text style={styles.more}>See More</Text>
          </View>
          <View style={{paddingBottom: 120}}>
          <View style={styles.listHistory}>
            <Car />
            <View style={styles.wrapperText}>
              <Text style={styles.transportation}>Car</Text>
              <Text style={styles.address}>St. Sultan Mansyur - St. Letkol Iskandar</Text>
            </View>
          </View>
          <View style={styles.listHistory}>
            <Van />
            <View style={styles.wrapperText}>
              <Text style={styles.transportation}>Car</Text>
              <Text style={styles.address}>St. Sultan Mansyur - St. Letkol Iskandar</Text>
            </View>
          </View>
          <View style={styles.listHistory}>
            <Car />
            <View style={styles.wrapperText}>
              <Text style={styles.transportation}>Car</Text>
              <Text style={styles.address}>St. Sultan Mansyur - St. Letkol Iskandar</Text>
            </View>
          </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.Other
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20
  },
  name: {
    fontSize: 20,
    fontFamily: Fonts.Regular,
    color: Colors.Violet
  },
  welcome: {
    fontSize: 26,
    fontFamily: Fonts.Semibold,
    color: Colors.Violet
  },
  profile: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: Colors.Violet
  },
  init: {
    fontSize: 20,
    fontFamily: Fonts.Semibold,
    color: Colors.Other
  },
  background: {
    width: 334,
    height: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    marginTop: 20
  },
  top: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  labelCard: {
    position: 'absolute',
    top: 12,
    right: 14
  },
  textContentCard: {
    marginLeft: 30
  },
  cardName: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: Colors.Other
  },
  total: {
    fontSize: 25,
    fontFamily: Fonts.Semibold,
    color: Colors.Other
  },
  btn: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: Colors.Background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginTop: 10
  },
  textFeture: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
    fontFamily: Fonts.Semibold,
    color: Colors.TintColor
  },
  last: {
    fontSize: 16,
    fontFamily: Fonts.Semibold,
    color: Colors.TintColor
  },
  more: {
    fontSize: 14,
    fontFamily: Fonts.Light,
    color: Colors.Violet
  },
  listHistory: {
    flexDirection: 'row',
    width: 334,
    height: 70,
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.Background,
    borderRadius: 15,
    marginBottom: 14
  },
  wrapperText: {
    marginLeft: 20
  },
  transportation: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: Fonts.TintColor
  },
  address: {
    fontSize: 12,
    fontFamily: Fonts.Light,
    color: Colors.SecondaryColor
  }
});
