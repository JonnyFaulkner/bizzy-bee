import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
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
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      username
      posts {
        _id
        postText
        createdAt
        reviewCount
        reviews {
          _id
          reviewBody
          createdAt
          name
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      posts {
        _id
        postText
        createdAt
        reviewCount
        reviews {
          _id
          reviewBody
          createdAt
          name
        }
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
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

export const QUERY_ALL_POSTS = gql`
  query allPosts {
    allPosts {
      _id
      postText
      createdAt
      reviewCount
      reviews {
        _id
        reviewBody
        createdAt
        name
      }
    }
  }
`