import {gql} from '@apollo/client';

export const LOAD_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`

export const TODOS = gql`
  query {
    todos {
      id
      description
      done
    }
  }
`