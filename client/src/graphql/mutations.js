import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password){
            userId
            token
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, password: $password){
            userId
            token
        }
    }
`;