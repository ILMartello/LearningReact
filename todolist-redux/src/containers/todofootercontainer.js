import {connect} from 'react-redux';
import TodoFooterComponent from '../components/todofooter';
import {filterTodo} from '../actions/index';

const mapStateToProps = (state,ownprops) =>{
    return{
        activeFilter: state.activeFilter
    }
}
export default connect(mapStateToProps,{ filterTodo})(TodoFooterComponent);