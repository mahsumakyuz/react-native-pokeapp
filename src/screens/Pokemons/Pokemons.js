import React from 'react';
import {Text, FlatList} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import ListItem from './ListItem';
import Loading from '../../components/Loading';
import POKEMONS_QUERY from './queries';

const Pokemons = () => {
  const {error, loading, data} = useQuery(POKEMONS_QUERY);

  if (loading) return <Loading />;
  if (error) return <Text>Error.</Text>;

  return (
    <FlatList
      data={data.pokemons.results}
      renderItem={({item}) => <ListItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};
export default Pokemons;
