import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './Components/Task/Task';
import Login from './Components/Login/Login';
import TodoList from './Components/ToddoList/TodoList';
import AddTodo from './Components/AddTodo/AddTodo';
import React, { useState } from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { logOut, deleteTasks } from './Action';
const Stack = createStackNavigator();

const Navigation = ({ user, actions }: { user: {}, actions: any }) => {
    const logOut = () => {
        actions.logOut(user);
        actions.deleteTasks();
    };
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName={user.state}
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#170e2e',
                        borderColor: '#170e2e'
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontSize: 18,
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
                        title: "",
                        headerRight: () =>
                            <TouchableOpacity
                                onPress={() => {
                                    { logOut() }
                                    navigation.navigate("Login");
                                }}>
                                <Icon name="power" size={20} color="white" style={{ marginRight: 10 }} />
                            </TouchableOpacity>,
                        headerLeft: () =>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("AddTodo");
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                    <Icon name="arrow-back-outline" size={22} color="white" style={{}} />
                                    <Text style={{ color: 'white' }}>Add Todo</Text>
                                </View>
                            </TouchableOpacity>,
                    })}
                />
                <Stack.Screen
                    name="AddTodo"
                    component={AddTodo}
                    options={({ navigation }) => ({
                        title: "",
                        headerRight: () =>
                            <TouchableOpacity
                                onPress={() => {
                                    { logOut() }
                                    navigation.navigate("Login");
                                }}>
                                <Icon name="power" size={21} color="white" style={{ marginRight: 10 }} />
                            </TouchableOpacity>,
                        headerLeft: () =>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("TodoList");
                                }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                                    <Icon name="arrow-back-outline" size={22} color="white" style={{}} />
                                    <Text style={{ color: 'white' }}>My Todos</Text>
                                </View>
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

const mapStateToProps = (state: { user: {}; }) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        actions: bindActionCreators(
            { logOut, deleteTasks },
            dispatch,
        ),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

