import React from "react";
import PaintingListItem from "./PaintingListItem";
import {connect} from 'react-redux'

const PaintingsList = props => props.loading ? <p>Loading...</p> : (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          key={painting.id}
          painting={painting}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (store) => ({
  paintings: store.paintings.filter(
    p =>
      p.title.toLowerCase().includes(store.searchText.toLowerCase()) ||
      p.artist.name
        .toLowerCase()
        .includes(store.searchText.toLowerCase())
  ),
  loading: store.loading
})

//read the searchText and the paintings from store
//do not write to store

export default connect(mapStateToProps)(PaintingsList);
