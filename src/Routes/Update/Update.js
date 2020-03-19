import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_NOTE, UPDATE_NOTE } from '../../queries';
import Editor from '../../Components/Editor';

class Update extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data?.note ? (
            <Mutation mutation={UPDATE_NOTE}>
              {updateNote => {
                this.updateNote = updateNote;
                return (
                  <Editor
                    title={data.note.title}
                    content={data.note.content}
                    id={data.note.id}
                    onSave={this._onSave}
                  />
                );
              }}
            </Mutation>
          ) : null
        }
      </Query>
    );
  }
  _onSave = (title, content, id) => {
    const {
      history: { push }
    } = this.props;
    if (title !== '' && content !== '' && id) {
      this.updateNote({ variables: { title, content, id } });
      push(`/note/${id}`);
    }
  };
}
export default Update;
