import {connect} from 'react-redux';
import TodoFooterComponent from '../components/todofooter';
import {filterTodo} from '../actions/index';


export default connect(null,{filterTodo})(TodoFooterComponent);