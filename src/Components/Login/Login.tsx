import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Button,
} from 'react-native';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { logIn } from '../../Action';
import LinearGradient from 'react-native-linear-gradient';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';

const Login = ({ navigation, actions }: { navigation: any, actions: any }) => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Too Short!').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    isValid,
    resetForm,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { name: '', password: '', state: 'TodoList' },
    onSubmit: () => {
      if (Object.keys(errors).length === 0) {
        {
          actions.logIn(values);
        }
        console.log(touched.password);
        resetForm({});
        navigation.navigate('AddTask');
      }
    },
  });

  return (
    <View
      style={styles.container}
    >
      <Image style={styles.image} source={require('../../assets/daily-tasks.png')} />
       <Text style={styles.textStyle_title}> Welcome to Todo </Text>
       <Text style={styles.textStyle_text}>Todo help you stay organized and perform your task much faster </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}></KeyboardAvoidingView>
      <View style={styles.inputView1}>
        <View style={styles.inputView2}>
          <Icon name="person" size={18} color="white" />
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#a09da799"
            onChangeText={handleChange('name')}
            value={values.name}
          />
        </View>
        {touched.name && errors.name && (
          <Text
            style={{
              fontSize: 13,
              color: 'red',
              marginLeft: 35,
            }}>
            {errors.name}
          </Text>
        )}
      </View>
      <View style={styles.inputView1}>
        <View style={styles.inputView2}>
          <Icon name="key" size={18} color="white" />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#a09da799"
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            value={values.password}
          />
        </View>
        {touched.password && errors.password && (
          <Text
            style={{
              fontSize: 13,
              color: 'red',
              marginLeft: 35,
            }}>
            {errors.password}
          </Text>
        )}
      </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
      <LinearGradient   style={styles.loginBtn}colors={['#42a3f4', '#6663ed', '#9637fc']} >
          <Text style={{color:'white'}}>Login</Text>
      </LinearGradient>
        </TouchableOpacity>
    </View>
  );
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    actions: bindActionCreators(
      { logIn },
      dispatch,
    ),
  };
}
export default connect(null, mapDispatchToProps)(Login);
