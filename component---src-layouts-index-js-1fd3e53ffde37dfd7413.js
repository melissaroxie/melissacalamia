webpackJsonp([0x67ef26645b2a,60335399758886],{105:function(t,e){t.exports={layoutContext:{}}},207:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=n(4),i=o(r),l=n(210),u=o(l),c=n(105),f=o(c);e.default=function(t){return i.default.createElement(u.default,a({},t,f.default))},t.exports=e.default},214:function(t,e,n){t.exports={default:n(224),__esModule:!0}},216:function(t,e,n){t.exports={default:n(226),__esModule:!0}},220:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(214),r=o(a);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},221:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},224:function(t,e,n){n(249),t.exports=n(16).Object.assign},226:function(t,e,n){n(251),t.exports=n(16).Object.keys},239:function(t,e,n){"use strict";var o=n(42),a=n(82),r=n(56),i=n(87),l=n(136),u=Object.assign;t.exports=!u||n(26)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=o})?function(t,e){for(var n=i(t),u=arguments.length,c=1,f=a.f,s=r.f;u>c;)for(var d,p=l(arguments[c++]),v=f?o(p).concat(f(p)):o(p),h=v.length,m=0;h>m;)s.call(p,d=v[m++])&&(n[d]=p[d]);return n}:u},243:function(t,e,n){var o=n(25),a=n(16),r=n(26);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),o(o.S+o.F*r(function(){n(1)}),"Object",i)}},249:function(t,e,n){var o=n(25);o(o.S+o.F,"Object",{assign:n(239)})},251:function(t,e,n){var o=n(87),a=n(42);n(243)("keys",function(){return function(t){return a(o(t))}})},310:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return r(x+t)}function r(t){return t.replace(/^\/\//g,"/")}function i(t,e){var n=(0,k.createLocation)(t,null,null,e.location);return n.pathname=a(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var l=n(220),u=o(l),c=n(216),f=o(c),s=n(221),d=o(s),p=n(40),v=o(p),h=n(55),m=o(h),_=n(54),b=o(_);e.withPrefix=a;var y=n(4),w=o(y),g=n(74),O=n(7),j=o(O),k=n(104),x="/",E={activeClassName:j.default.string,activeStyle:j.default.object,exact:j.default.bool,strict:j.default.bool,isActive:j.default.func,location:j.default.object},M=function(t,e){var n=new window.IntersectionObserver(function(o){o.forEach(function(o){t===o.target&&(o.isIntersecting||o.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},R=function(t){function e(n,o){(0,v.default)(this,e);var a=(0,m.default)(this,t.call(this)),r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var l=o.router.history,u=i(n.to,l);return a.state={path:(0,k.createPath)(u),to:u,IOSupported:r},a.handleRef=a.handleRef.bind(a),a}return(0,b.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=i(t.to,history);this.setState({path:(0,k.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.to.pathname)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to.pathname)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&M(t,function(){___loader.enqueue(e.state.to.pathname)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,o=(0,d.default)(e,["onClick"]),a=void 0;return a=(0,f.default)(E).some(function(e){return t.props[e]})?g.NavLink:g.Link,w.default.createElement(a,(0,u.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var o=t.state.path;if(o.split("#").length>1&&(o=o.split("#").slice(0,-1).join("")),o===window.location.pathname){var a=t.state.path.split("#").slice(1).join("#"),r=document.getElementById(a);return null!==r?(r.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.to)}return!0}},o,{to:this.state.to,innerRef:this.handleRef}))},e}(w.default.Component);R.propTypes=(0,u.default)({},E,{innerRef:j.default.func,onClick:j.default.func,to:j.default.oneOfType([j.default.string,j.default.object]).isRequired}),R.contextTypes={router:j.default.object},e.default=R;e.navigateTo=function(t){window.___navigateTo(t)}},210:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(4),r=o(a),i=n(310),l=o(i),u=function(t){var e=t.children;return r.default.createElement("div",null,r.default.createElement("div",{className:"mw9 center relative ph3"},r.default.createElement("nav",{className:"db dt-l w-100 border-box pa3 ph5-l"},r.default.createElement("div",{className:"db dtc-l v-mid w-100 w-75-l tc tr-l"},r.default.createElement(l.default,{className:"avenir link dim dark-gray f6 f5-l dib mr3 mr4-l",to:"/",title:"Home"},"Home"),r.default.createElement(l.default,{className:"avenir link dim dark-gray f6 f5-l dib mr3 mr4-l",to:"/portfolio",title:"Portfolio"},"Portfolio"),r.default.createElement("a",{className:"avenir link dim dark-gray f6 f5-l dib",href:"mailto:melissa@melissacalamia.com",title:"Contact"},"Contact")))),r.default.createElement("main",{role:"main"},e()))};e.default=u,t.exports=e.default}});
//# sourceMappingURL=component---src-layouts-index-js-1fd3e53ffde37dfd7413.js.map