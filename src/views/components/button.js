/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, TouchableOpacity, StyleSheet, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

const ButtonDefault = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        t.flex,
        t.textCenter,
        props.disabled ? t.bgBlue400 : t.bgBlue700,
        t.alignCenter,
        t.justifyCenter,
        t.itemsCenter,
        t.roundedFull,
        styles.buttonDefauts,
      ]}>
      {props.children}
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
