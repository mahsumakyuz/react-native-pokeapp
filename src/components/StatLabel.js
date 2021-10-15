import React from 'react';
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native';
import Progressbar from './Progressbar';

const StatLabel = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {data.map((item, id) => (
          <Progressbar key={id} data={item} />
        ))}
      </View>
    </View>
  );
};

const progressStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 11,
  },
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
  },
  labelContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  label: {
    marginRight: 4,
    marginBottom: 4,
    padding: 5,
  },
});

export default StatLabel;
