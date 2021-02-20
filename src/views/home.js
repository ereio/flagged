import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, } from 'react-native';

import { Button } from './components';

import { useNavigation } from '@react-navigation/native';
import { Routes } from '../global/values';
import { t } from 'react-native-tailwindcss';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { fetchCountries, } from '../store/countries/actions';
import { generateRound, } from '../store/game/actions';


/**
 * Home Screen
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const best = useSelector(state => state.game.best);
  const loading = useSelector(state => state.countries.loading);
  const hasCountries = useSelector(state => !!state.countries.length);

  const onStartGame = useCallback(async () => {
    if (!hasCountries) {
      await dispatch(fetchCountries());
    }
    await dispatch(generateRound())

    navigation.push(Routes.Game);
  }, [dispatch, hasCountries]);

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
      <View style={[t.flex, t.flexCol, t.flex1, t.justifyCenter, t.itemsCenter]}>
        <Text style={[t.text5xl]}>{'Flagged'}</Text>
        <Text style={[t.alignCenter, t.text2xl, t.p4]}>
          {'A Country Guessing Game'}
        </Text>
        <Text style={styles.emoji}>
          {'🗺️'}
        </Text>
        {
          !best || <Text style={[t.textXl]}>
            {`Best Streak: ${best}`}
          </Text>
        }
      </View>
      <View style={[t.flex, t.flexCol, t.justifyCenter, t.flex1]}>
        <Button disabled={loading} loading={loading} onPress={() => onStartGame()}>
          <Text style={[t.textWhite]}>{'Start Game'}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 128
  }
});

export default Home;
