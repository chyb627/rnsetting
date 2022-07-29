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
