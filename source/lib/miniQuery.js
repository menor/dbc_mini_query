/*!
 * minQuery
 */

var SweetSelector = {
  select: function(selector){
    var symbol = selector[0];
    var element = selector.slice(1);
    if(symbol == '#'){
      return [document.getElementById(element)]
    } else if (symbol == '.'){
      return document.getElementsByClassName(element)
    } else {
      return document.getElementsByTagName(selector)
    }
  }
}

var DOM = {
  show: function(selector){
    elements = SweetSelector.select(selector)
    _.each(elements, function(element){
      element.style.display="block";
    })
  },

  hide: function(selector){
    elements = SweetSelector.select(selector)
    _.each(elements, function(element){
      element.style.display="none";
    })
  },

  addclass: function(selector){

  },

  removeClass: function(selector){

  }
}