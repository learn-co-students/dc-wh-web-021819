//actionCreators

import {CHANGING_SEARCH_TEXT, VOTE_FOR_PAINTING, UPDATE_PAINTING} from './actionType'

function onSearch(searchText){
  return {type: CHANGING_SEARCH_TEXT, payload: searchText}
}

function voteForPainting(paintingId){
  return {type:VOTE_FOR_PAINTING, payload: paintingId}
}

function updatePaintingInfo(info){
  return {type:UPDATE_PAINTING, payload: info}
}

export {onSearch, voteForPainting, updatePaintingInfo}
