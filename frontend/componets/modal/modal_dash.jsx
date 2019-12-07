import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SaveRouteContainer from '../route/save_route_container';
import UpdateRouteContainer from '../route/update_route_container';
import CommentModalContainer from '../dashboard/comment_modal_container';
import DashboardModal from '../dashboard/dashboard_modal';


class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { routeInfo, prevRoute, prevLocations, comments, likes, liked, handleDeleteComment, currentUser, workout, createComment, turnOffModal } = this.props;
    if (!this.props.modal) {
      return null;
    }

    switch (this.props.modal) {
      case 'commentModal':
        this.component = <DashboardModal comments={comments} likes={likes} liked={liked} handleDeleteComment={handleDeleteComment} currentUser={currentUser} workout={workout} createComment={createComment} turnOffModal={turnOffModal}/>;
        break;
      default:
        return null;
    }
    
    return (
      <div className="modal-background" >
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { this.component }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
