import {gql} from 'apollo-boost';
const POKEMONS_QUERY = gql`
  {
    pokemons(limit: 120) {
      count
      results {
        url
        name
        image
        artwork
        dreamworld
        id
      }
    }
  }
`;

export default POKEMONS_QUERY;
