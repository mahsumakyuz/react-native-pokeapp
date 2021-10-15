import React from 'react';
import {ScrollView, Text, StyleSheet, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import Loading from '../../components/Loading';
import POKEMON_QUERY from './queries';
import AbilityLabel from '../../components/AbilityLabel';
import StatLabel from '../../components/StatLabel';

const Detail = ({route}) => {
  const {item} = route.params;
  const {error, loading, data} = useQuery(POKEMON_QUERY, {
    variables: {
      name: item.name,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Text>Error.</Text>;
  const {id, name, abilities, stats} = data.pokemon;
  return (
    <ScrollView>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{uri: `${item.artwork}`}}
      />
      <Text style={styles.name}>{name.toUpperCase()}</Text>
      <StatLabel data={stats} />
      <AbilityLabel title="Ability" data={abilities} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Detail;
