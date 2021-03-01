import React, { useCallback } from 'react';
import { StyleSheet, View, Text, SafeAreaView, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'react-native-tailwindcss';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../components';
import { Routes } from '../../global/values';
import { fetchCountries, } from '../../store/countries/actions';
import { generateRound, } from '../../store/game/actions';

import { subtitle, appTitle } from '../../global/langs/en';

/**
 * Home Screen
 * 
 * Example of using average StyleSheet patterns
 * for pre-defined declaration of styles 
 */
export const Home = (props) => {
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{appTitle}</Text>
        <Text style={styles.subtitleText}>
          {subtitle}
        </Text>
        <Text style={styles.emoji}>
          {'🗺️'}
        </Text>
        {
          !best || <Text style={styles.streakText}>
            {`Best Streak: ${best}`}
          </Text>
        }
      </View>
      <View style={styles.optionsContainer}>
        <Button disabled={loading} loading={loading} onPress={() => onStartGame()}>
          <Text style={styles.optionText}>{'Start Game'}</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 24,
    marginVertical: 24,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
  },
  titleText: {
    fontSize: 48,
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    alignItems: 'center',
    padding: 4
  },
  streakText: {
    fontSize: 20,
  },
  optionText: {
    color: '#ffffff'
  },
  optionsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 128
  }
});
