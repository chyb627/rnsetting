import React, { useState } from 'react';
import { Alert, Platform, View, Text, StyleSheet, Keyboard, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignButtons from '../components/SignButtons';
import SignInForm from '../components/SignForm';
import { signIn, signUp } from '../lib/auth';
import { getUser } from '../lib/users';
import { useAppDispatch } from '../store';
import userSlice from '../slice/user';

function SignInScreen(props) {
  const { navigation, route } = props;
  const { isSignUp } = route.params || {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState();
  const dispatch = useAppDispatch();

  const createChangeTextHandler = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };
  const onSubmit = async () => {
    Keyboard.dismiss();

    const { email, password, confirmPassword } = form;

    if (isSignUp && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true);
    const info = { email, password };

    try {
      const { user } = isSignUp ? await signUp(info) : await signIn(info);
      // console.log('user :::', user);
      const profile = await getUser(user.uid);
      if (!profile) {
        navigation.navigate('Welcome', { uid: user.uid });
      } else {
        dispatch(
          userSlice.actions.setUser({
            ...profile,
          }),
        );
      }
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
      };
      const msg = messages[e.code] || `${isSignUp ? '가입' : '로그인'} 실패`;
      Alert.alert('실패 ::: ', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.select({ ios: 'padding' })}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}> T.M.I </Text>
        <View style={styles.form}>
          <SignInForm isSignUp={isSignUp} onSubmit={onSubmit} form={form} createChangeTextHandler={createChangeTextHandler} />
          <SignButtons isSignUp={isSignUp} onSubmit={onSubmit} loading={loading} />
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
