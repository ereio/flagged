import React from 'react';
import { Button, TouchableOpacity, ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors, t } from 'react-native-tailwindcss';

export const ButtonDefault = (props) => {
  const { loading, disabled } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        disabled ? t.bgBlue300 : t.bgBlue700,
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
    flex: 0,
    alignItems: 'center',
    alignContent: "center",
    justifyContent: 'center',
    textAlign: 'center',
    minWidth: 144,
    minHeight: 48,
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
    borderBottomLeftRadius: 9999,
    borderBottomRightRadius: 9999,
  },
}); 
