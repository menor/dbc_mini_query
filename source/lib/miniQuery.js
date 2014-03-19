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

EventDispatcher = (function(sweetSelector){
  return {
    on: function( selector, event, callback ) {
      elements = sweetSelector.select( selector )
      _.each( elements, function( element ) {
        element.addEventListener( event, callback )
      })
    },

    trigger: function( selector, event ) {
      our_event = new CustomEvent( event )
      elements = sweetSelector.select( selector )
      _.each( elements, function( element ) {
        !element.dispatchEvent( our_event )
      })
    }
  }
}(SweetSelector))

AjaxWrapper = (function(){
  return {
    request: function( options ) {
      sweetRequest = new XMLHttpRequest();
      sweetRequest.open(options.type, options.url, true);

      sweetRequest.onload = function() {
        debugger
        if (sweetRequest.status >= 200 && sweetRequest.status < 400){
          options.success();
        }
      };

      sweetRequest.onerror = function() {
        options.fail()
      };

      sweetRequest.send();
    }
  }
}(SweetSelector))

var miniQuery = (function(sweetselector, dom, eventor, ajaxer) {

  var MiniQueryTools = function(query){
    this.el = query;
  }

  MiniQueryTools.prototype = {
    show: function() {
      dom.show(this.el);
    },
    hide: function() {
      dom.hide(this.el);
    },
    addClass: function(klass) {
      dom.addClass(this.el, klass);
    },
    removeClass: function(klass) {
      dom.removeClass(this.el, klass);
    },
    on: function(event, callback) {
      eventor.on(this.el, event, callback);
    },
    trigger: function(event) {
      eventor.trigger(this.el, event)
    }
  }

  var Creator = function(query){
    return new MiniQueryTools(query)
  }

  Creator.ajax = function(options) {
    ajaxer.request(options);
  };

  return Creator

}(SweetSelector.select, DOM, EventDispatcher, AjaxWrapper));

var $ = miniQuery