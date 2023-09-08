import { gql } from '@apollo/client'

export const GET_TODOS = gql`
  query GetTodos {
    todo{
      id
      name
      created_at
    }
  }
`
