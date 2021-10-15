const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
}

type Auth {
    token: ID!
    user: User
}

type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    reviewCount: Int
    reviews: [Review]
}

type Review {
    _id: ID
    reviewBody: String
    createdAt: String
    name: String
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    allPosts: [Post]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addReview(postId: ID!, reviewBody: String!, name: String!): Post
}
`;

module.exports = typeDefs;