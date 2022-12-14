##

[앱아이콘]
[참고]
https://velog.io/@dody_/React-Native-%EC%95%B1-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B0%94%EA%BE%B8%EA%B8%B0

1.  https://www.iloveimg.com/ko/download/fzw5w0y6lqvpzft298g0tfmsv8y1r188d34j3yh2A6079Agqn3vmx1cqjqbbbcA3r1hf96f7gAkwh9k7q60502dd2dkhyAglvmc8d3fAr0ppq8dpnzj664qm1l9j1sx58qstphxprA7dsgz7mttt4wxzwtppx4wlp3y2Amxrxj1jqyjkrjcq/4

2.  https://appicon.co/

3.  http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=image&foreground.space.trim=1&foreground.space.pad=0.05&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(255%2C%20255%2C%20255)&crop=0&backgroundShape=circle&effects=none&name=ic_launcher_round

[스플래시스크린]
[참고]
https://velog.io/@hojin9622/React-Native-Splash-Screen-%EC%A0%9C%EC%9E%91IOS

[디버그 서명 인증서 SHA-1]

keytool -J-Duser.language=en -list -v -alias androiddebugkey -keystore ./android/app/debug.keystore

SHA1: ~~~~~~~~~

[Firebase]

yarn add @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore @react-native-firebase/storage

@react-native-firebase/app 은 Firebase 적용할때 반드시 필요한 라이브러리
@react-native-firebase/auth 은 회원 인증을 위해 사용,
@react-native-firebase/firestore 은 실시간 데이터베이스를 위해 필요,
@react-native-firebase/storage은 추후 이미지를 업로드할 때 필요한 라이브러리

#### 폴더 구조

RootStack
MainTab
HomeStack
FeedScreen
PostScreen
ProfileScreen
MyProfileStack
MyProfileScreen
UploadScreen
ModifyScreen
SettingScreen
SignInScreen
WelcomeScreen

RootStack : 프로젝트 최상위 스택
MainTab : 로그인하면 보일 화면
-HomeStack : 첫번째 탭인 홈의 스택
FeedScreen : 포스트들의 목록을 볼 수 있는 화면
PostScreen : 하나의 포스트를 볼 수 있는 화면
ProfileScreen : 특정 사용자의 프로필을 볼 수 있는 화면
-MyProfileStack : 두번째 탭인 프로필의 스택
MyProfileScreen : 자신의 프로필을 볼 수 있는 화면
PostScreen : 하나의 포스트를 볼 수 있는 화면. HomeStack과 컴포넌트 공유
-UploadScreen : 사진을 업로드하는 화면
-ModifyScreen : 포스트의 문구를 수정하는 화면
-SettingScreen : 설정 화면
-SignInScreen : 로그인 화면
-WelcomeScreen : 회원가입 후 프로필 사진과 이름을 설정하는 화면

## useEffext async/await

useEffect 내부에서 async/await를 사용하고 적용하기.

```javascript
useEffect(() => {
  const fn = async () => {
    const _posts = await getPosts();
    setPosts(_posts);
  };
  fn();
}, []);
```

useEffect에 등록하는 함수 자체를 async로 만들면 안 되기 때문에 내부에서 async 함수를 선언하고 호출하는 방식으로 구현.

## firebase storage 오류

오류 내용
The server has terminated the upload session

원인을 찾아보니 Storage의 Rules를 수정해주어야한다.
기본 설정은 allow read, write: if false; 라고 되어있을 것이다.
이 부분에서 false를 true로 변경시켜주면 모든 사용자에게 권한을 주는 것이고 request.auth != null; 이렇게 변경시켜주면 로그인 한 사용자에게 권한을 주는 것이다.

## 타입스크립트

yarn add -D typescript @types/jest @types/react-native @types/react-native-push-notification @types/react-native-vector-icons @types/react-test-renderer @typescript-eslint/eslint-plugin @typescript-eslint/parser

옵셔널 파라미터 : 옵셔널 파라미터는 생략해도 되는 파라미터를 의미함. (isDouble?: boolean)

interface : 타입스크립트에서 객체나 클래스를 위한 타입을 정할 때 사용한다.

```typescript
interface Profile {
  id: nember;
  username: string;
  displayName: string;
}
```

- interface 상속하기

```typescript
interface Acocount extends Profile {
  email: string;
  password: string;
}

const account: Account = {
  id: 1,
  username: 'cha';
  displayName: 'chabiri';
  email: 'cha@email.com';
  password: '123123';
}

```
## react-native-vector-icons 에러

링크
[https://hanarotg.medium.com/rn-ios-react-native-vector-icons-%EC%97%90%EC%84%9C-%EC%95%A0%EB%A8%B9%EB%8A%94-%EC%A4%91%EC%83%9D%EB%93%A4%EC%97%90%EA%B2%8C-e80e1f4aaf89]

에러내용
[error React Native CLI uses autolinking for native dependencies, but the following modules are linked manually:
- react-native-vector-icons (to unlink run: "react-native unlink react-native-vector-icons")
This is likely happening when upgrading React Native from below 0.60 to 0.60 or above. Going forward, you can unlink this dependency via "react-native unlink <dependency>" and it will be included in your app automatically. If a library isn't compatible with autolinking, disregard this message and notify the library maintainers.]

이유
RN는 npm에서 설치한 모듈들을 자동으로 연결해주는데, Cocoapod을 이용하였기에 autolinking이 아닌 수동 연결로 간주하기 때문이다.

해결방법
npx react-native unlink react-native-vector-icons

## Redux

yarn add @reduxjs/toolkit react-redux redux-flipper react-native-flipper

## DismissKeyboardView

DismissKeyboardView 컴포넌트 추가. 
DismissKeyboardView를 사용하면 인풋아닌곳을 누르면 키보드가 내려감. 키보드 화면가림방지 기능이 있음.