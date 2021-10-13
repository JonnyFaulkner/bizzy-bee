import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      reviewCount
      reviews {
        _id
        reviewBody
        createdAt
        name
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($postId: ID!, $reviewBody: String!, $name: String!) {
    addReview(postId: $postId, reviewBody: $reviewBody, name: $name) {
      _id
      postText
      createdAt
      username
      reviewCount
      reviews {
        _id
        reviewBody
        createdAt
        name
      }
    }
  }
`;
