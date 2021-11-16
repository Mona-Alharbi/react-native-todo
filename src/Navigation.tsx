import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './Components/Task/Task';
import Login from './Components/Login/Login';
import TodoList from './Components/ToddoList/TodoList';
import AddTask from './Components/AddTask/AddTask';
import React from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { mapDispatchToProps } from './Components/Connect';
import { mapStateToProps } from './Components/Connect';
const Stack = createStackNavigator();

const Navigation = ({ user, actions }: { user: {}, actions: any }) => {
    const logOut = () => {
        actions.logOut(user);
        actions.deletTasks();
    };
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0080ff',
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="TodoList"
                    component={TodoList}
                    options={({ navigation }) => ({
                        headerRight: () =>
                            <TouchableOpacity
                                onPress={() => {
                                    { logOut() }
                                    navigation.navigate("Login");
                                }}>
                                <Icon name="power" size={20} color="white" />
                            </TouchableOpacity>,
                        headerLeft: () =>
                            <TouchableOpacity
                                onPress={() => {
                                
                                    navigation.navigate("AddTask");
                                }}>
                                <Icon name="arrow-back-outline" size={20} color="white" />
                                <Text>Add Task</Text>

                            </TouchableOpacity>,
                    })}
                />
                <Stack.Screen
                    name="AddTask"
                    component={AddTask}
                    options={({ navigation }) => ({
                        headerRight: () =>
                            // <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            //     <Icon name="power" size={20} color="white"  />
                            // </TouchableOpacity>,
                            <TouchableOpacity
                                onPress={() => {
                                    { logOut() }
                                    navigation.navigate("Login");
                                }}>
                                <Icon name="power" size={20} color="white" />
                            </TouchableOpacity>,
                        headerLeft: () =>
                            <TouchableOpacity
                                onPress={() => {
                                    
                                    navigation.navigate("TodoList");
                                }}>
                                <Icon name="arrow-back-outline" size={20} color="white" />
                                <Text>My Tasks</Text>
                            </TouchableOpacity>,

                    })}
                />
                {/* <Stack.Screen
                    name="Task"
                    component={Task}
                    options={{
                        headerShown: false,
                    }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

