import { gql } from "@apollo/client";

export const PHOTO_FRAGMENT = gql`
     fragment PhotoFragment on photo {
          id
          file
          likes
          commentNumber
          isLiked
     }
`;

export const COMMENT_FRAGMENT = gql`
     fragment CommentFragment on comment {
          id
          user {
               username
               avatar
          }
          payload
          isMine
          createdAt
     }
`;