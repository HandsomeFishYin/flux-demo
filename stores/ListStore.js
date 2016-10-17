var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  //delete
  deleteItemHandler: function () {
    this.items.pop();
  },

  //删除选中的节点
  deleteSelectItem: function(index){
    //this.items.push('aaa');
    this.items.splice(index,1)
  }
});

module.exports = ListStore;
