import gql from 'graphql-tag';

//for 중복제거 (= reusable)
export const NOTE_FRAGMENT = gql`
  fragment NoteParts on Note {
    id
    title
    content
  }
`;
