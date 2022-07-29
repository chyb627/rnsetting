import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function BorderedInput(props, ref) {
  // const { hasMarginBottom, onChangeText, value, placeholder } = props;
  const { hasMarginBottom, ...rest } = props;

  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.margin]}
      // onChangeText={onChangeText}
      // value={value}
      // placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export default React.forwardRef(BorderedInput);
