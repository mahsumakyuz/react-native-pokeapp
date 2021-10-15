import {gql} from 'apollo-boost';

const POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      stats {
        effort
        base_stat
        stat {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
    }
  }
`;

export default POKEMON_QUERY;
