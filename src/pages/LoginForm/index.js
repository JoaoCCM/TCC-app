import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import googleIcon from "../../assets/logar-google.png";
import faceIcon from "../../assets/logar-facebook.png";


export default function LoginForm() {
    return (
        <View style={styles.loginFormContainer}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={() => { }}
            >

                {formikProps => (
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.emailInput}
                            placeholder='E-mail'
                            value={formikProps.values.email}
                            onChangeText={formikProps.handleChange('email')}
                            onBlur={formikProps.handleBlur('email')}
                        />
                        <TouchableOpacity onPress={() => console.log('eye clicked')}>
                            <Feather name='eye-off' size={18} style={styles.eye} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder='Senha'
                            value={formikProps.values.password}
                            onChangeText={formikProps.handleChange('password')}
                            onBlur={formikProps.handleBlur('password')}
                            secureTextEntry={true}
                        />

                        <View style={styles.submitContainer}>
                            <TouchableOpacity style={styles.btnSubmit}>
                                <Text style={styles.btnText}>Entre</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={googleIcon} style={styles.googleIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={faceIcon} style={styles.faceIcon} />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}

            </Formik>
        </View>
    )
}
