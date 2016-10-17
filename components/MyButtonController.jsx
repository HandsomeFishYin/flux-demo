var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
  getInitialState: function () {
    return {
      items: ListStore.getAll(),
      inputText:""
    };
  },

  componentDidMount: function() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  createNewItem: function (event) {
    ButtonActions.addNewItem('new item');
  },

  deleteItem:function(){
    ButtonActions.deleteItem();
  },

  //删除选中的item
  deleteSelectedItem:function(index){
    ButtonActions.deleteSelected(index);
  },

  //获取输入框 Input里面的内容
  _getInputValue: function(value){
    this.setState({
      inputText:value
    })
  },

  render: function() {

    //console.log("this.state.items",this.state.items);

    return <MyButton
      items={this.state.items}
      onClick={this.createNewItem}
      onDelete = {this.deleteItem}
      deleteSelectedItem = {this.deleteSelectedItem}
      getInputValue = {this._getInputValue}
    />;
  }

});

module.exports = MyButtonController;
