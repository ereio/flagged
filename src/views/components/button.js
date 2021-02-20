import React from 'react';
import { Button, TouchableOpacity, ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors, t } from 'react-native-tailwindcss';

const ButtonDefault = (props) => {
  const { loading } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        t.flex,
        t.textCenter,
        props.disabled ? t.bgBlue300 : t.bgBlue700,
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
    minWidth: 96,
  },
});

export default ButtonDefault;
