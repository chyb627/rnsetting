import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

function HomeScreen() {
  return (
    <View style={styles.block}>
      <Button
        title="스크린 이동하기"
        onPress={() => {
          navigation.navigate('FourthScreen', { ...props });
        }}
      />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default HomeScreen;
