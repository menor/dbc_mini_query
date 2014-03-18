/*!
 * minQuery
 */

var SweetSelector = {
  select: function(selector){
    var symbol = selector[0];
    var element = selector.slice(1);
    if(symbol == '#'){
      return document.getElementById(element)
    } else if (symbol == '.'){
      return document.getElementsByClassName(element)
    } else {
      return document.getElementsByTagName(selector)
    }
  }
}