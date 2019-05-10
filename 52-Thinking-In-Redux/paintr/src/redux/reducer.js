import paintingsDataObj from '../paintings.json'
import {combineReducers} from 'redux'
import {CHANGING_SEARCH_TEXT, VOTE_FOR_PAINTING, UPDATE_PAINTING} from './actionType'

// let initialState = {
//   paintings: paintingsDataObj.paintings,
//   searchText: ""
// }

const searchTextReducer = (oldState="", action) => {
  switch(action.type){
    case CHANGING_SEARCH_TEXT:
      return action.payload
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=paintingsDataObj.paintings, action) => {
  switch(action.type){
    case VOTE_FOR_PAINTING:
      return oldState.map(painting => {
        if(painting.id !== action.payload){
          return painting
        }else{
          return {...painting, votes: painting.votes + 1}
        }
      })
    case UPDATE_PAINTING:
      return oldState.map(painting => {
        if(painting.id !== action.payload.paintingId){
          return painting
        }else{
          return {
            ...painting,
            title: action.payload.title,
            artist: {
              ...painting.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          }
        }
      })
    default:
      return oldState
  }
}

//map the key: reducer
const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
})

export default rootReducer
