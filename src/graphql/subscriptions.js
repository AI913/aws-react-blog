/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
