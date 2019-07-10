import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout, signUp } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    signUp: (user) => dispatch(signUp(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);