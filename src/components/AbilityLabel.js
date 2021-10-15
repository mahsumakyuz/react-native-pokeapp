import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const AbilityLabel = ({title, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.labelContainer}>
        {data.map((item, id) => {
          const {name} = item.ability;
          return (
            <Text key={id} style={styles.label}>
              {name}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  label: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#2c2c54',
    borderColor: '#40407a',
    marginRight: 4,
    marginBottom: 4,
    padding: 5,
    color:'#fff'
  },
});

export default AbilityLabel;
