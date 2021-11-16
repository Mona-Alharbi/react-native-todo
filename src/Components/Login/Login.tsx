import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../Connect';
import { mapStateToProps } from '../Connect';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
const Login = ({ navigation, route, user, actions }: { navigation: any, route: any, user: {}, actions: any }) => {
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
    initialValues: { name: '', password: '' },
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
    <LinearGradient
      style={styles.container}
      colors={['#ffff', '#83a4d4', '#83a4d4']}
    >
      <Text style={styles.textStyle}> Welcome Todos app</Text>
      <Image style={styles.image} source={require('../../assets/task.png')} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}></KeyboardAvoidingView>
      <View style={styles.inputView1}>
        <View style={styles.inputView2}>
          <Icon name="person" size={15} color="gray" />
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
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
          <Icon name="key" size={15} color="gray" />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
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
        <Text>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
