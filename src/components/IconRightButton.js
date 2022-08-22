import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function IconRightButton(props) {
  const { name, color, onPress } = props;

  return (
    <View style={styles.block}>
      <Pressable
        style={({ pressed }) => [
          styles.circle,
          Platform.OS === 'ios' &&
            pressed && {
              opacity: 0.3,
            },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#eee' }}>
        <Icon name={name} color={color} size={24} />
      </Pressable>
    </View>
  );
}

IconRightButton.defaultProps = {
  color: '#6200ee',
};

const styles = StyleSheet.create({
  block: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconRightButton;
