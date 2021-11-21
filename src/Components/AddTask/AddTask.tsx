import { connect } from "react-redux";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import LinearGradient from 'react-native-linear-gradient';
import { Platform } from 'react-native';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./styles";
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {addTask} from '../../Action';
const AddTask = ({ navigation, user, actions }:{navigation:any, user:{}, actions:any }) => {

  const TaskSchema = Yup.object().shape({
    task: Yup.string().required("Required"),
  });
  return (
    <View
    style={styles.container}
  >
      <View style={styles.inputTask}>
        <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <Text style={styles.textStyle}>What's up {"\n"} {user.name}{"\n"} </Text>
        
        <Image style={styles.image} source={require("../../assets/ability.png")} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Formik
            validationSchema={TaskSchema}
            initialValues={{task: "" }}
            onSubmit={(values, { resetForm }) => {
              actions.addTask(values.task);
              resetForm({});
              navigation.navigate("TodoList");
            }}
          >
            {({ handleChange, handleSubmit, values, touched, errors }) => (
              <View>
                <TextInput
                  multiline
                  style={styles.input}
                  placeholderTextColor="#a09da799"
                  onChangeText={handleChange("task")}
                  placeholder={"Write a task"}
                  value={values.task}
                />
                {touched.task && errors.task && (
                  <Text
                    style={{
                      fontSize: 13,
                      color: "red",
                      marginLeft: 35,
                    }}
                  >
                    {errors.task}
                  </Text>
                )}
                <TouchableOpacity  style={styles.addWrapper} onPress={handleSubmit}>
                <LinearGradient   style={styles.addWrapper}colors={['#42a3f4', '#6663ed', '#9637fc']} >
          <Text style={{color:'white' ,fontSize: 45}}>+</Text>
      </LinearGradient>
                  
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
const mapStateToProps = (state: { user: {}; }) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    actions: bindActionCreators(
      { addTask},
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
