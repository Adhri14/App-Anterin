import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Back, FB, Google} from '../../assets/icons';
import {Fonts, Colors} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
    <View sytle={styles.page}>
      <TouchableOpacity style={styles.btnBack}>
        <Back />
      </TouchableOpacity>
      <View style={styles.textContent}>
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>Create an account to better</Text>
        <Text style={styles.subtitle}>experience</Text>
      </View>
      {/* input component */}
      <View style={styles.wrapperInput}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.checkbox} />
        <View>
          <Text style={styles.textCheckbox}>
            
            I agree to the <Text style={styles.unique}>Terms & Conditions</Text>
          
          </Text>
          <Text style={styles.textCheckbox}>
            
             and <Text style={styles.unique}>Privacy Policy</Text>
          
          </Text>
        </View>
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.textBtn}>Create account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.question}>
          Already have an account? <Text style={styles.unique}>Login</Text>
        </Text>
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
    </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  btnBack: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.Background,
    marginLeft: 40,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    marginLeft: 40,
    marginTop: 25,
  },
  title: {
    fontFamily: Fonts.Semibold,
    fontSize: 25,
    color: Colors.PrimaryColor,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.TintColor,
  },
  wrapperInput: {
    marginHorizontal: 40,
  },
  input: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: Colors.Background,
    marginBottom: 20,
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
  wrapperBtn: {
    marginTop: 20,
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
  textBtn: {
    fontFamily: Fonts.Semibold,
    fontSize: 14,
    color: Colors.Other
  },
  question: {
    fontFamily: Fonts.Light,
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center'
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
