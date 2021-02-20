import React from 'react';
import { Button, TouchableOpacity, ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors, t } from 'react-native-tailwindcss';

const ButtonOutline = (props) => {
  const { loading, selected } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        t.flex,
        t.textCenter,
        t.border2,
        selected ? t.bgBlue700 : undefined,
        props.disabled ? t.borderBlue100 : t.borderBlue700,
        t.alignCenter,
        t.justifyCenter,
        t.itemsCenter,
        t.roundedFull,
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
    minHeight: 48,
  },
});

export default ButtonOutline;
