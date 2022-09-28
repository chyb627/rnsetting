import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import IconRightButton from '../components/IconRightButton';

import Profile from '../components/Profile';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

function MyProfileScreen() {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: user.displayName,
      headerRight: () => <IconRightButton name="settings" onPress={() => navigation.push('Setting')} />,
    });
  }, [navigation, user]);

  return <Profile userId={user.id} />;
}

export default MyProfileScreen;
