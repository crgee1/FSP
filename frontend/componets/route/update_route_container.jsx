import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import UpdateRoute from './update_route';
import { updateRoute } from '../../actions/route_actions';
import { createLocation, deleteLocation } from '../../actions/location_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteLocation: id => dispatch(deleteLocation(id)),
    createLocation: location => dispatch(createLocation(location)),
    updateRoute: route => dispatch(updateRoute(route)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(UpdateRoute);