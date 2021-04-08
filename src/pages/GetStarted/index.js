import React from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts, Colors} from '../../utils';
import {FB, Google, ImgBackground} from '../../assets';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.background}
          colors={['#6631FF', '#A431FF', '#EE89FF']}>
          <ImgBackground style={styles.ilustrasi} />
        </LinearGradient>
        <View style={styles.textContent}>
          <Text style={styles.title}>Let's Get Started</Text>
          <Text style={styles.subtitle}>Sign in to make a better</Text>
          <Text style={styles.subtitle}>experience</Text>
        </View>
        <View style={styles.wrapperBtn}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textBtn}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
            <Text style={[styles.textBtn, styles.textSecondary]}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.checkbox} />
          <View>
            <Text style={styles.textCheckbox}>
              
              By logging in or registering, I agree to the
            
            </Text>
            <Text style={styles.textCheckbox}>
              
              <Text style={styles.unique}>Terms & Conditions</Text> and{' '}
            {' '}
              <Text style={styles.unique}>Privacy Policy</Text>
            
            </Text>
          </View>
        </View>
        <View style={styles.wrapperLine}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.wrapperBtnOutline}>
          <TouchableOpacity style={styles.btnOutline}>
            <Google />
            <Text style={styles.textSignUp}>Sign up with google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSecondaryOutline}>
            <FB />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginBottom: 20
  },
  background: {
    width: 334,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    borderRadius: 20,
  },
  textContent: {
    marginLeft: 20,
    marginTop:  25,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 25,
    color: Colors.PrimaryColor,
    marginBottom: 10
  },
  subtitle:{
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.TintColor
  },
  wrapperBtn: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  btn: {
    height: 70,
    width: 334,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20
  },
  btnSecondary: {
    backgroundColor: Colors.Background
  },
  textBtn: {
    fontFamily: Fonts.Semibold,
    fontSize: 14,
    color: Colors.Other
  },
  textSecondary: {
    color: Colors.TintColor
  },
  checkbox: {
    width: 25,
    height: 25,
    backgroundColor: Colors.PrimaryColor,
    borderRadius: 5,
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    marginLeft: 40
  },
  textCheckbox: {
    fontFamily: Fonts.Light,
    color: '#B0B0B0',
    fontSize: 14
  },
  unique: {
    color: Colors.PrimaryColor,
    fontFamily: Fonts.Semibold
  },
  wrapperLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginVertical: 25
  },
  line: {
    width: 147,
    height: 1,
    backgroundColor: '#B0B0B0',
    // marginTop: 2
  },
  or: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: '#B0B0B0',
    marginHorizontal: 5
  },
  wrapperBtnOutline: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnOutline: {
    flexDirection: 'row',
    borderColor: Colors.PrimaryColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 33,
    marginRight: 20
  },
  textSignUp: {
    marginLeft: 20,
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.TintColor
  },
  btnSecondaryOutline: {
    borderColor: '#18aafd',
    borderWidth: 1,
    borderRadius: 15,
    padding: 18
  }
});
