/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
