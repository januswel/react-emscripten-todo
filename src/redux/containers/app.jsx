import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../../components/app.jsx'

import * as actionCreators from '../modules/todos.js'

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
