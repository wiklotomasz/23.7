import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/*import Lane from './Lane';*/
import Lane from './LaneContainer.js';


const Lanes = ({ lanes }) => {
  return (
<div className="lanes">{lanes.map((lane)=>{
	return (<Lane className="lane" key={lane.id} lane={lane} />)
})}</div>
  );
};

Lanes.propTypes = {
  lanes: PropTypes.array,
};

const mapStateToProps = state => ({
  lane: state.lane,
});


/*export default connect(mapStateToProps)(Lane);*/
export default Lanes;