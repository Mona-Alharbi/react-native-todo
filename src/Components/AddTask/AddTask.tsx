import { connect } from "react-redux";
import React from "react";
// import { Appbar } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { mapDispatchToProps } from "../Connect";
import { mapStateToProps } from "../Connect";
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
const AddTask = ({ navigation, route, user, actions, tasklist }:{navigation:any, route:any, user:{}, actions:any ,tasklist:any}) => {
  const logOut = () => {
    actions.logOut(user);
    actions.deletTasks();
    navigation.navigate("Login");
  };
  const TaskSchema = Yup.object().shape({
    task: Yup.string().required("Required"),
  });
  return (
    <LinearGradient
    style={styles.container}
    colors={['#ffff', '#83a4d4', '#83a4d4']} 
  >
      {/* <Appbar.Header style={styles.AppbarHead}>
        <Appbar.Content title="" />
        <Appbar.Content  title="log out" onPress={logOut}/>
        {/* <Appbar.Action icon="power"  onPress={logOut} />  
      </Appbar.Header> */}

      <View style={styles.inputTask}>
        <Text style={styles.textStyle}>Hi add a task </Text>
        <Image style={styles.image} source={require("../../assets/task.png")} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Formik
            validationSchema={TaskSchema}
            initialValues={{ task: "" }}
            onSubmit={(values, { resetForm }) => {
              actions.addTask(values.task);
              resetForm({});
              navigation.navigate("TodoList");
            }}
          >
            {({ handleChange, handleSubmit, values, touched, errors }) => (
              <View>
                <TextInput
                  style={styles.input}
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
                <TouchableOpacity onPress={handleSubmit}>
                  <View style={styles.addWrapper}>
                    <Text>Add</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
