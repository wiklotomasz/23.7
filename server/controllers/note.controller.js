import Note from '../models/note';
import Lane from '../models/lane';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function addNote(req,res) {
	const { note, laneId } = req.body;

	if(!note || !note.task || !laneId) {
		res.status(400).end();
	}

	const newNote = new Note ({
		task: note.task,
	});

	newNote.id = uuid();
	newNote.save((err,saved) => {
		if(err) {
			res.status(500).send(err);
		}
		Lane.findOne({id: laneId})
			.then(lane=>{
				lane.notes.push(saved);
				return lane.save();
			})
			.then(()=>{
				res.json(saved);
			});
	});
}

export function removeNote(req,res) {
	const { note, laneId } = req.body;
	Lane.findOne({id: laneId}).exec((err,lane) => {
		if(err) {
			res.status(500).send(err);
		}
		lane.notes.map((e,i)=> {
			if(e.id === note.id) {
				lane.notes.pull(e);
			}
			lane.save();
		})
		res.status(200).send(note);
	});
}

export function changeNoteName(req,res) {
	const { note, laneId} = req.body;
	if(!note || !note.task || !laneId) {
		res.status(400).end();
	}
	Lane.findOne({id: laneId}).exec((err,lane) => {
		if(err) {
			res.status(500).send(err);
		}
		lane.notes.map((e,i)=> {
			if(e.id === note.taskId) {
				lane.notes[i].task = note.task;	
			}
			lane.save();
		})
		res.status(200).send(lane);
	});
}


