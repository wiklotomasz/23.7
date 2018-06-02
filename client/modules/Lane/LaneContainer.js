import { connect } from 'react-redux';
import Lane from './Lane';
import Lanes from './Lanes';
import * as laneActions from './LaneActions';
import { updateLane, editLane, deleteLaneRequest, createLaneRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
/*import { createNote } from '../Note/NoteActions';*/


const mapStateToProps = (state, ownProps) => {
return {
  	laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
  };
};

const mapDispatchToProps = {
	editLane,
	deleteLane: deleteLaneRequest,
	updateLane,
	createLane: createLaneRequest,
	addNote: createNoteRequest,
	createNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);