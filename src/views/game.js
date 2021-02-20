import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { Button, ButtonOutline } from './components';

import { useNavigation, StackActions } from '@react-navigation/native';
import { Routes } from '../global/values';
import { t } from 'react-native-tailwindcss';
import { useDispatch } from 'react-redux';

/**
 * Game Screen 
 */
const Game = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [guess, setGuess] = useState(null);

  const submitted = false;

  const answer = {
    "code": "AR",
    "emoji": "🇦🇷",
    "name": "Argentina"
  };

  const roundOptions = [{
    "code": "AR",
    "emoji": "🇦🇷",
    "name": "Argentina"
  },
  {
    "code": "AS",
    "emoji": "🇦🇸",
    "name": "American Samoa"
  },
  {
    "code": "AT",
    "emoji": "🇦🇹",
    "name": "Austria"
  },];

  const onStartRound = () => {
    navigation.replace(Routes.Game);
  }

  const onSelectCountry = useCallback((country) => {
    setGuess(country)
  }, [roundOptions]);

  const onSubmit = () => {

  }

  const onExit = () => {
    navigation.dispatch(StackActions.popToTop);
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
      <View style={[t.flex, t.flexRow, t.justifyEnd]}>
        <TouchableOpacity onPress={onExit}>
          <Text style={[t.fontBold, t.text2xl]}>{'Ⅹ'}</Text>
        </TouchableOpacity>
      </View>
      <View style={[t.flex, t.flexCol, t.flex1, t.justifyStart, t.itemsCenter]}>
        <Text style={[t.alignCenter, t.text2xl, t.textCenter, t.p4]}>
          {'Streak: 0'}
        </Text>
        <Text style={[t.alignCenter, t.text3xl, t.textCenter, t.p4]}>
          {'What Country\'s Flag\nis this?'}
        </Text>
        <Text style={styles.emoji}>
          {answer.emoji}
        </Text>
      </View>
      <View style={[t.flex, t.flexCol, t.justifyCenter, t.alignCenter, t.flex1]}>
        <View style={[t.flex, t.flexRow, t.justifyCenter, t.mB10]}>
          {roundOptions.map(option => (
            <View key={option.code} style={[t.flex, t.justifyCenter, t.flex1, t.pX2]}>
              <ButtonOutline onPress={() => onSelectCountry(option.name)} selected={guess === option.name}>
                <Text style={[t.textSm, guess === option.name ? t.textWhite : t.textBlack, t.textCenter,]}>{option.name}</Text>
              </ButtonOutline>
            </View>
          ))}
        </View>
        <View style={[t.flex, t.flexCol, t.justifyCenter,]}>
          <Button disabled={!guess} onPress={onStartRound}>
            <Text style={[t.textWhite]}>{'Submit Answer'}</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 128
  }
});

export default Game;
