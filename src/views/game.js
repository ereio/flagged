import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { Button, ButtonOutline } from './components';

import { useNavigation, StackActions } from '@react-navigation/native';
import { Routes } from '../global/values';
import { t } from 'react-native-tailwindcss';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswer, generateRound } from '../store/game/actions';

/**
 * Game Screen 
 */
const Game = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [guess, setGuess] = useState(null);

  const streak = useSelector(state => state.game.streak)
  const answer = useSelector(state => state.game.answer)
  const options = useSelector(state => state.game.options)
  const submitted = useSelector(state => state.game.submitted)

  // if guess is truthy, return if guess was correct
  const correct = !guess || answer.name == guess;

  const onSubmitAnswer = () => dispatch(
    submitAnswer(guess)
  )

  const onExit = useCallback(() => {
    navigation.dispatch(StackActions.popToTop);
  }, [navigation])

  const onStartRound = useCallback(() => dispatch(
    generateRound()
  ), [dispatch])

  const onSelectCountry = useCallback((country) => {
    setGuess(country)
  }, [options]);

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
          {`Streak: ${streak}`}
        </Text>
        <Text style={[t.alignCenter, t.text3xl, t.textCenter, t.p4]}>
          {'What Country\'s Flag\nis this?'}
        </Text>
        <Text style={styles.emoji}>
          {answer.emoji}
        </Text>
        <View>
          {!submitted || (
            correct ?
              <Text style={[t.text3xl, t.textGreen600, t.textCenter]}>
                {'Correct!'}
              </Text> :
              <Text style={[t.text3xl, t.textGreen600, t.textCenter, t.textRed600]}>
                {'Wrong Country :('}
              </Text>
          )}
        </View>
      </View>
      <View style={[t.flex, t.flexCol, t.justifyCenter, t.alignCenter, t.flex1]}>
        <View style={[t.flex, t.flexRow, t.justifyCenter, t.mB10]}>
          {options.map(option => (
            <View key={option.code} style={[t.flex, t.justifyCenter, t.flex1, t.pX2]}>
              <ButtonOutline disabled={submitted} onPress={() => onSelectCountry(option.name)} selected={guess === option.name}>
                <Text style={[t.textSm, guess === option.name ? t.textWhite : t.textBlack, t.textCenter,]}>{option.name}</Text>
              </ButtonOutline>
            </View>
          ))}
        </View>
        <View style={[t.flex, t.flexCol, t.justifyCenter,]}>
          {!submitted ?
            <Button disabled={!guess} onPress={onSubmitAnswer}>
              <Text style={[t.textWhite]}>{'Submit Answer'}</Text>
            </Button>
            : <Button onPress={onStartRound}>
              <Text style={[t.textWhite]}>{'Next Round'}</Text>
            </Button>}
        </View>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 128
  }
});

export default Game;
