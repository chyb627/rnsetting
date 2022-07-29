import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignInButton from '../components/SignButtons';
import SignForm from '../components/SignForm';

function SignInScreen(props) {
  const { navigation, route } = props;
  const { isSignUp } = route.params || {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const createChangeTextHandler = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };
  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}> T.M.I </Text>
        <View style={styles.form}>
          <SignForm isSignUp={isSignUp} onSubmit={onSubmit} form={form} createChangeTextHandler={createChangeTextHandler} />
          <SignInButton isSignUp={isSignUp} onSubmit={onSubmit} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default SignInScreen;
