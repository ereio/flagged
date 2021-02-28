import React from 'react';
import { Button, TouchableOpacity, ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors, t } from 'react-native-tailwindcss';

export const ButtonOutline = (props) => {
  const { loading, selected, disabled } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        selected ? (disabled ? t.bgBlue300 : t.bgBlue700) : undefined,
        disabled ? t.borderBlue100 : t.borderBlue700,
        styles.buttonDefauts,
      ]}>
      {!loading ? props.children : (
        <View>
          <ActivityIndicator size="small" color={colors.blue800} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDefauts: {
    flex: 1,
    alignItems: 'center',
    alignContent: "center",
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 48,
    borderWidth: 2,
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
    borderBottomLeftRadius: 9999,
    borderBottomRightRadius: 9999,
  },
}); 
