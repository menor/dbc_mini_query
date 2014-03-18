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

var DOM = (function(sweetSelector){
    return {
      show: function(selector){
        elements = sweetSelector.select(selector)
        _.each(elements, function(element){
          element.style.display="block";
        })
      },

      hide: function(selector){
        elements = sweetSelector.select(selector)
        _.each(elements, function(element){
          element.style.display="none";
        })
      },

      addClass: function(selector, className){
        elements = sweetSelector.select(selector)
        _.each(elements, function(element){
          element.classList.add(className);
        })
      },

      removeClass: function(selector, className ){
        elements = sweetSelector.select(selector)
        _.each(elements, function(element){
          element.classList.remove(className);
        })
      }
    }
  }(SweetSelector))
// var miniQuery = (function(sweetSelector){
//   return {
//     select: function(selector){
//       var whatever = selector
//       return sweetSelector.select(whatever)
//     }
//   }
// }(SweetSelector))


var miniQuery = function(query) {
  return new MiniQueryTools(query);
}

// var miniQuery = function(query, selectorEngine) {
//   return selectorEngine.select(query)
// }

var MiniQueryTools = function(query) {
  this.show = function() {
    DOM.show(query);
  };
  this.hide = function() {
    DOM.hide(query);
  };
  this.addClass = function(klass) {
    DOM.addClass(query, klass);
  };
  this.removeClass = function(klass) {
    DOM.removeClass(query, klass);
  };
}
// miniQuery.prototype = {
//   select: function(){
//     console.log("hello")
//     // return SweetSelector.select(selector)
//   }
// }();


// miniQuery.prototype =
//   SweetSelector: {
//     select: function(selector){
//       var symbol = selector[0];
//       var element = selector.slice(1);
//       if(symbol == '#'){
//         return [document.getElementById(element)]
//       } else if (symbol == '.'){
//         return document.getElementsByClassName(element)
//       } else {
//         return document.getElementsByTagName(selector)
//       }
//     }
//   },


//   EventDispatcher = (function(sweetSelector){
//     return {
//       on: function( selector, event, callback ) {
//         elements = sweetSelector.select( selector )
//         _.each( elements, function( element ) {
//           element.addEventListener( event, callback )
//         })
//       },

//       trigger: function( selector, event ) {
//         our_event = new CustomEvent( event )
//         elements = sweetSelector.select( selector )
//         _.each( elements, function( element ) {
//           !element.dispatchEvent( our_event )
//         })
//       }
//     }
//   }(SweetSelector))

//   AjaxWrapper = (function(){
//     return {
//       request: function( options ) {
//         sweetRequest = new XMLHttpRequest();
//         sweetRequest.open(options.type, options.url, true);

//         sweetRequest.onload = function() {
//           if (sweetRequest.status >= 200 && sweetRequest.status < 400){
//             options.success();
//           }
//         };

//         sweetRequest.onerror = function() {
//           options.fail()
//         };

//         sweetRequest.send();
//       }
//     }
//   }())
// };
