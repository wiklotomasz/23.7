import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from '../Note/NoteActions';
import {createNoteRequest} from '../Note/NoteActions';


const mapDispatchToProps = {
  ...noteActions,
  createNote: createNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);