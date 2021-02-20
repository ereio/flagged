import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { Button } from './components';

import { useNavigation } from '@react-navigation/native';
import { Routes } from '../global/values';
import { t } from 'react-native-tailwindcss';
import { useDispatch } from 'react-redux';

/**
 * Home Screen
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onStartGame = () => {
    navigation.replace(Routes.Game);
  }

  return (
    <SafeAreaView
      style={[
        t.flex,
        t.flexCol,
        t.flexGrow,
        t.alignCenter,
        t.justifyAround,
        t.m6,
      ]}>
      <View style={[t.flex, t.flexCol, t.flex1, t.justifyStart, t.itemsCenter]}>
        <Text style={[t.alignCenter, t.text3xl, t.textCenter, t.p4]}>
          {'Streak: 0'}
        </Text>
        <Text style={[t.alignCenter, t.text3xl, t.textCenter, t.p4]}>
          {'What Country\'s Flag\nis this?'}
        </Text>
      </View>
      <View style={[t.flex, t.flexCol, t.justifyCenter, t.flex1]}>
        <Button onPress={() => onStartGame()}>
          <Text style={[t.textWhite]}>{'Submit Answer'}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  defaults: {},
  title: {},
});

export default Home;
