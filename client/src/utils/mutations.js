import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($organiser: String!, $destination: String!, $startDate: Date!) {
    addTrip(organiser: $organiser, destination: $destination, startDate: $startDate) {
      trip {
        _id
        destination
      }
    }
  }
`