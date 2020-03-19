import gql from 'graphql-tag';
import { NOTE_FRAGMENT } from './fragments';

export const GET_NOTES = gql`
  {
    notes @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;

export const GET_NOTE = gql`
  query getNote($id: Int!) {
    note(id: $id) @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;

export const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
      id
    }
  }
  ${NOTE_FRAGMENT}
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($id: Int!, $titlt: String!, $content: String!) @client {
    updateNote(id: $id, title: $title, content: $content) {
      id
    }
  }
  ${NOTE_FRAGMENT}
`;
