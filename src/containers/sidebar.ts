import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SidebarModule from '../modules/sidebar';
import SidebarComponent from '../components/sidebar';

const mapStateToProps = (state: any) => {
  return {
    sidebar: state.sidebar
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators(SidebarModule, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
