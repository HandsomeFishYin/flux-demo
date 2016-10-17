var React = require('react');


//var MyButton = React.createClass({
//
//      items = this.props.items,
//
//    //var itemHtml = items.map(function (listItem, i) {
//    //  return <li key={i} onClick={props.deleteSelectedItem.bind(this,i)}>{i+1},{listItem}</li>;
//    //});
//
//    itemHtml: function(){
//  items.map(function (listItem, i) {
//    return <li key={i} onClick={props.deleteSelectedItem.bind(this,i)}>{i+1},{listItem}</li>;
//  })
//},
//
//
//
//render: function(){
//  return (<div>
//
//        <input type="text"  placeholder="请输入内容" />
//
//        <ul>{itemHtml}</ul>
//        <button onClick={props.onClick}>New Item</button>
//        <button onClick={props.onDelete}>Delete Last Item</button>
//      </div>
//  )
//},
//
//}) ;


var MyButton = React.createClass({

  getInitialState: function () {
    return ({
      items : this.props.items
    })
  },

  itemHtml: function(){

    var items = this.props.items;
    var temp = this.props.deleteSelectedItem;
    var str =items.map(function (listItem, i) {
      return <li key={i} onClick={this.props.deleteSelectedItem.bind(this,i)}>{listItem}</li> ;
    }.bind(this));
    return str;

  },

  render: function(){

    return (<div>

          <input type="text"  placeholder="请输入内容" />

          <ul>{this.itemHtml()}</ul>

          <button onClick={this.props.onClick}>New Item</button>
          <button onClick={this.props.onDelete}>Delete Last Item</button>
        </div>
    )
  }


});






module.exports = MyButton;
