import React, {useState} from 'react';
import {View, Text, StyleSheet, ProgressBarAndroid} from 'react-native';

const Progressbar = ({data}) => {
  var ProgressBarColor = '#10ac84';
  const stat = Number(data.base_stat);
  if (stat <= 85 && stat > 50) {
    ProgressBarColor = '#1dd1a1';
  } else if (stat <= 50 && stat > 30) {
    ProgressBarColor = '#ff9f43';
  } else if (stat <= 35 && stat > 20) {
    ProgressBarColor = '#feca57';
  } else if (stat <= 20 && stat > 0) {
    ProgressBarColor = '#ee5253';
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textGroup}>
          <Text style={styles.name}>{data.stat.name.toUpperCase()}</Text>
          <Text style={styles.value}>{data.base_stat}</Text>
        </View>

        <ProgressBarAndroid
          style={styles.progressbar}
          styleAttr="Horizontal"
          color={ProgressBarColor}
          indeterminate={false}
          progress={stat / 100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
  textGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  name: {
    fontSize: 15,
    fontWeight:"bold"
  },
  progressbar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    flex: 1,
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontSize: 15,
    fontWeight:"bold"
  },
});

export default Progressbar;
