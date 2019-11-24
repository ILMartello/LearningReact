import React from 'react';
import {connect} from 'react-redux';
import Lists from '../components/lists';
import {addList, removeList } from '../actions/lists'


  const mapStateToProps =  (state) => {
    return {
        ...state,
        lists: state.lists
    }
}
export default connect(mapStateToProps, {addList, removeList})(Lists);