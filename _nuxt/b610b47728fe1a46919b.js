(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(t,e,n){"use strict";n.r(e);n(33);var r=n(1),i=n.n(r),s={fetch:function(){var t=i()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=e.store).state.events.length){t.next=4;break}return t.next=4,n.dispatch("getUpcomingEvents");case 4:if(0!==n.state.locations.length){t.next=7;break}return t.next=7,n.dispatch("getLocations");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},a=n(14),o=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("events",{attrs:{filter:this.$route.query.filter,location:this.$route.query.location}})},[],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports}}]);