(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{189:function(e,t,n){"use strict";n.r(t);n(28);var r=n(1),s=n.n(r),a={computed:{pageObject:function(){return this.$store.getters.getContentBySlug(this.$route.params.slug)}},loading:!0,fetch:function(){var e=s()(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.route,r=t.store,r.getters.getContentBySlug(n.params.slug,"pages")){e.next=5;break}return e.next=5,r.dispatch("getContentBySlug",{type:"pages",params:{slug:n.params.slug}});case 5:if(0!==r.state.menu.length){e.next=8;break}return e.next=8,r.dispatch("getMenus");case 8:if(0!==r.state.locations.length){e.next=11;break}return e.next=11,r.dispatch("getLocations");case 11:if(0!==r.state.services.length){e.next=14;break}return e.next=14,r.dispatch("getServices");case 14:if(0!==r.state.events.length){e.next=17;break}return e.next=17,r.dispatch("getUpcomingEvents");case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},u=n(14),i=Object(u.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("Page",{attrs:{"page-object":this.pageObject}})},[],!1,null,null,null);i.options.__file="_slug.vue";t.default=i.exports}}]);