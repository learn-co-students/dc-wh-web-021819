import React from "react";
import {connect} from 'react-redux'
import {onSearch} from '../redux/actionCreators'

const Searchbar = props => (
  <div className="ui container">
    <div className="ui very large fluid input">
      <input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </div>
    <div className="ui clearing section divider" />
  </div>
);

//props: some value in the store
const mapStateToProps = (store) => ({
  value: store.searchText
})

//props: some process/function
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearch: (searchText) => {dispatch(  onSearch(searchText)  )}
//   }
// }

//needs to read store.searchText
//nedes to write to store.searchText
export default connect(mapStateToProps, {onSearch})(Searchbar);
