var AppDispatcher = require('../dispatcher/AppDispatcher');


var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  deleteItem: function(){
    AppDispatcher.dispatch({
      actionType: 'DELETE_ITEM',
    });
  },

  deleteSelected:function(index){
    console.log("index",index);
    AppDispatcher.dispatch({
      actionType:'DELETE_SELECT_ITEM',
      index:index
    })
  }

};

module.exports = ButtonActions;
