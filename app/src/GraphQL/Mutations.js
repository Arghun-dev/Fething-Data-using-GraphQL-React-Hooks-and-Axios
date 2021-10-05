import { gql } from '@apollo/client';

export const UPDATE_TODO = gql`
  mutation updateTodo($id: String! $done: Boolean) {
    updateTodo(id: $id, done: $done) {
      id
    }
  }
`