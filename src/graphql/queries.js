/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      user {
        id
        username
        email
        registered
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        file {
          bucket
          region
          key
        }
      }
      author
      comments {
        items {
          id
          content
          createdAt
          author
        }
        nextToken
      }
      createdAt
      likes {
        items {
          id
          liker
        }
        nextToken
      }
      file {
        bucket
        region
        key
      }
      tags
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        user {
          id
          username
          email
          registered
        }
        author
        comments {
          nextToken
        }
        createdAt
        likes {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        tags
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      createdAt
      user {
        id
        username
        email
        registered
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        file {
          bucket
          region
          key
        }
      }
      author
      post {
        id
        title
        content
        user {
          id
          username
          email
          registered
        }
        author
        comments {
          nextToken
        }
        createdAt
        likes {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        tags
      }
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        user {
          id
          username
          email
          registered
        }
        author
        post {
          id
          title
          content
          author
          createdAt
          tags
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      registered
      posts {
        items {
          id
          title
          content
          author
          createdAt
          tags
        }
        nextToken
      }
      comments {
        items {
          id
          content
          createdAt
          author
        }
        nextToken
      }
      file {
        bucket
        region
        key
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        registered
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        file {
          bucket
          region
          key
        }
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      liker
      user {
        id
        username
        email
        registered
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        file {
          bucket
          region
          key
        }
      }
      post {
        id
        title
        content
        user {
          id
          username
          email
          registered
        }
        author
        comments {
          nextToken
        }
        createdAt
        likes {
          nextToken
        }
        file {
          bucket
          region
          key
        }
        tags
      }
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        liker
        user {
          id
          username
          email
          registered
        }
        post {
          id
          title
          content
          author
          createdAt
          tags
        }
      }
      nextToken
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        user {
          id
          username
          email
          registered
        }
        author
        comments {
          items {
            id
            content
            createdAt
            author
          }
          nextToken
        }
        createdAt
        likes {
          items {
            id
          }
          nextToken
        }
        file {
          bucket
          region
          key
        }
        tags
      }
      nextToken
      total
    }
  }
`;
