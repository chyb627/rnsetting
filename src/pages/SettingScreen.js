import React from 'react';
import { StyleSheet, View, Text, Pressable, Platform } from 'react-native';
import { useAppDispatch } from '../store';
import userSlice from '../slice/user';
import { signOut } from '../lib/auth';

function SettingScreen() {
  const dispatch = useAppDispatch();
  const onLogout = async () => {
    await signOut();
    dispatch(userSlice.actions.setUser(null));
  };

  return (
    <View style={styles.block}>
      <Pressable
        onPress={onLogout}
        style={({ pressed }) => [
          styles.item,
          pressed &&
            Platform.select({
              ios: { opacity: 0.5 },
            }),
        ]}
        android_ripple={{
          color: '#eee',
        }}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1, paddingTop: 32 },
  item: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  itemText: { fontSize: 16 },
});

export default SettingScreen;
