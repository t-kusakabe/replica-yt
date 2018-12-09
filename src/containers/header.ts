import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderModule from '../modules/header';
import HeaderComponent from '../components/header';

const mapStateToProps = (state: any) => {
  return {
    header: state.header
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(HeaderModule, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
