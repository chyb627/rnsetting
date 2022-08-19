import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Alert, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNBPressable from '~ui/RNBPressable';
import TextInput from '~ui/CustomTextInput';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = (props) => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const createChangeTextHandler = (name) => (value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center bg-white mt-5">
      <KeyboardAwareScrollView className="flex h-full w-full px-5 bg-white rounded-lg">
        <View className="justify-center py-16">
          <View className="h-22 my-1">
            <Text className="text-5xl font-bold text-black pb-1">T.M.I, </Text>
            <Text className="text-5xl font-bold text-black">시작해 보세요.</Text>
          </View>

          <View className="h-6 w-full">
            <Text className="text-base text-black font-normal">TMI에서 다양한 정보를 만나보세요</Text>
          </View>
        </View>
        <View className="justify-center py-6">
          <View className="">
            <View>
              <TextInput
                icon={require('~assets/images/ico-id.png')}
                keyboardType="email-address"
                borderSquare
                className="h-14 my-1 rounded-lg bg-white pl-12"
                placeholder="이메일"
                value={form.email}
                onChangeText={createChangeTextHandler('email')}
              />
              <TextInput
                icon={require('~assets/images/ico-pw.png')}
                borderSquare
                className="h-14 my-1 rounded-lg bg-white pl-12"
                placeholder="비밀번호"
                secureTextEntry={true}
                value={form.password}
                onChangeText={createChangeTextHandler('password')}
              />
            </View>
            <RNBPressable
              onPress={() => {
                navigation.navigate('MainTab', { ...props });
              }}
              className="justify-center items-center h-14 rounded-lg bg-primary my-1">
              <Text className="text-lg text-white font-medium">로그인</Text>
            </RNBPressable>
            <View className="flex flex-row pt-3 ml-3 justify-center items-center">
              <RNBPressable
                className="h-10 px-2 bg-white items-center justify-center mx-1"
                onPress={() => {
                  // push('UseTerms');
                }}>
                <Text className="text-ag-gray-800 font-normal">회원가입</Text>
              </RNBPressable>
              <View className="bg-ag-gray-200 h-3" style={{ width: 1 }} />
              <RNBPressable
                className="h-10 px-2 bg-white items-center justify-center mx-1"
                onPress={async () => {
                  //   await requestChangeDisplayOrder();
                  Alert.alert('아이디찾기');
                }}>
                <Text className="text-ag-gray-800 font-normal">아이디찾기</Text>
              </RNBPressable>
              <View className="bg-ag-gray-200 h-3" style={{ width: 1 }} />
              <RNBPressable
                className="h-10 px-2 bg-white items-center justify-center mx-1"
                onPress={async () => {
                  //   await requestChangeDisplayOrder();
                  Alert.alert('비밀번호 재설정');
                }}>
                <Text className="text-ag-gray-800 font-normal">비밀번호 재설정</Text>
              </RNBPressable>
            </View>
          </View>
        </View>
        <View className="flex-1 justify-center">
          <View className="items-center px-4">
            <RNBPressable className="justify-center h-12 w-full rounded-lg bg-yellow-400 my-1">
              <View className="flex-row items-center justify-center">
                <View className="w-full absolute justify-center">
                  <Image className="h-5 w-5 ml-6" source={require('~assets/images/logo-kakao.png')} />
                </View>
                <Text
                  onPress={async () => {
                    // console.log('메인');
                    // await setRootBottomTabs();
                  }}
                  className="text-base text-black font-medium">
                  카카오톡 로그인
                </Text>
              </View>
            </RNBPressable>
            <RNBPressable className="justify-center h-12 w-full rounded-lg bg-green-500 my-1">
              <View className="flex-row items-center justify-center">
                <View className="w-full absolute justify-center">
                  <Image className="h-5 w-5 ml-6" source={require('~assets/images/logo-naver.png')} />
                </View>
                <Text
                  onPress={async () => {
                    // navigation.navigate('RootStack');
                  }}
                  className="text-base text-white font-medium">
                  네이버 로그인
                </Text>
              </View>
            </RNBPressable>
            <RNBPressable className="justify-center h-12 w-full rounded-lg bg-white border border-gray-400 mt-1 mb-5">
              <View className="flex-row items-center justify-center">
                <View className="w-full absolute justify-center">
                  <Image className="h-5 w-5 ml-6" source={require('~assets/images/logo-google.png')} />
                </View>
                <Text
                  onPress={async () => {
                    // console.log('메인');
                    // await setRootBottomTabs();
                  }}
                  className="text-base text-black font-medium">
                  구글 로그인
                </Text>
              </View>
            </RNBPressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
