import {combineReducers} from "redux";

import {
  CREATE_ITEM,
  PURCHASE_ITEM,
  UPDATE_ITEM,
  SHOW_ALL,
  SHOW_AVAILABLE,
  SHOW_NOT_AVAILABLE,
  SORT_BY_NAME
} from "./actions";

function items(state = state || [], action) {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            available: false
          };
        }
        return item;
      });
    case UPDATE_ITEM:
      return state.map(item => {
        if (item.id === action.data.id) {
          return action.data;
        }
        return item;
      });
    case SORT_BY_NAME:
      return state.splice(0).sort((a, b) => {});
    case SORT_BY_DESCRIPTION:
      return state.splice(0).sort((a, b) => {});
    default:
      return state;
  }
}

function itemFilters(state = state || [], action) {
  switch (action.type) {
    case SHOW_ALL:
      return action.data;
    case SHOW_AVAILABLE:
      return action.data.filter(item => {
        return item.available;
      });
    case SHOW_NOT_AVAILABLE:
      return action.data.filter(item => {
        return !item.available;
      });
    // case SHOW_CATEGORY:
    //   return action.data.filter(item => {
    //     if
    //   });
    default:
      return state;
  }
}

export const itemsApp = combineReducers({items, itemFilters});
