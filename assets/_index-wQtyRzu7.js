import{r as e,t}from"./rolldown-runtime-QTnfLwEv.js";import{A as n,j as r,n as i}from"./chunk-62JRHF6Z-Dq1aAwXd.js";import{u as a}from"./context-DbbUniqJ.js";import{n as o}from"./emotion-react.browser.esm-D66BJTCW.js";import{a as s,c,d as l,f as u,i as d,m as f,o as p,s as m,u as h}from"./esm-9dG-0604.js";var g=t(((e,t)=>{t.exports=`SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED`})),ee=t(((e,t)=>{var n=g();function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name=`Invariant Violation`,s}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}})),_=t(((e,t)=>{t.exports=ee()()})),v=t(((e,t)=>{function n(e){return e&&typeof e==`object`&&`default`in e?e.default:e}var i=r(),a=n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c=!!(typeof window<`u`&&window.document&&window.document.createElement);function l(e,t,n){if(typeof e!=`function`)throw Error(`Expected reducePropsToState to be a function.`);if(typeof t!=`function`)throw Error(`Expected handleStateChangeOnClient to be a function.`);if(n!==void 0&&typeof n!=`function`)throw Error(`Expected mapStateOnServer to either be undefined or a function.`);function r(e){return e.displayName||e.name||`Component`}return function(l){if(typeof l!=`function`)throw Error(`Expected WrappedComponent to be a React component.`);var u=[],d;function f(){d=e(u.map(function(e){return e.props})),p.canUseDOM?t(d):n&&(d=n(d))}var p=function(e){s(t,e);function t(){return e.apply(this,arguments)||this}t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw Error(`You may only call rewind() on the server. Call peek() to read the current state.`);var e=d;return d=void 0,u=[],e};var n=t.prototype;return n.UNSAFE_componentWillMount=function(){u.push(this),f()},n.componentDidUpdate=function(){f()},n.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},n.render=function(){return a.createElement(l,this.props)},t}(i.PureComponent);return o(p,`displayName`,`SideEffect(`+r(l)+`)`),o(p,`canUseDOM`,c),p}}t.exports=l})),y=t(((e,t)=>{var n=typeof Element<`u`,r=typeof Map==`function`,i=typeof Set==`function`,a=typeof ArrayBuffer==`function`&&!!ArrayBuffer.isView;function o(e,t){if(e===t)return!0;if(e&&t&&typeof e==`object`&&typeof t==`object`){if(e.constructor!==t.constructor)return!1;var s,c,l;if(Array.isArray(e)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(!o(e[c],t[c]))return!1;return!0}var u;if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],t.get(c.value[0])))return!1;return!0}if(i&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(s=e.length,s!=t.length)return!1;for(c=s;c--!==0;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf==`function`&&typeof t.valueOf==`function`)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString==`function`&&typeof t.toString==`function`)return e.toString()===t.toString();if(l=Object.keys(e),s=l.length,s!==Object.keys(t).length)return!1;for(c=s;c--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(n&&e instanceof Element)return!1;for(c=s;c--!==0;)if(!((l[c]===`_owner`||l[c]===`__v`||l[c]===`__o`)&&e.$$typeof)&&!o(e[l[c]],t[l[c]]))return!1;return!0}return e!==e&&t!==t}t.exports=function(e,t){try{return o(e,t)}catch(e){if((e.message||``).match(/stack|recursion/i))return console.warn(`react-fast-compare cannot handle circular refs`),!1;throw e}}})),b=t(((e,t)=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(e==null)throw TypeError(`Object.assign cannot be called with null or undefined`);return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String(`abc`);if(e[5]=`de`,Object.getOwnPropertyNames(e)[0]===`5`)return!1;for(var t={},n=0;n<10;n++)t[`_`+String.fromCharCode(n)]=n;if(Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(``)!==`0123456789`)return!1;var r={};return`abcdefghijklmnopqrst`.split(``).forEach(function(e){r[e]=e}),Object.keys(Object.assign({},r)).join(``)===`abcdefghijklmnopqrst`}catch{return!1}}t.exports=o()?Object.assign:function(e,t){for(var o,s=a(e),c,l=1;l<arguments.length;l++){for(var u in o=Object(arguments[l]),o)r.call(o,u)&&(s[u]=o[u]);if(n){c=n(o);for(var d=0;d<c.length;d++)i.call(o,c[d])&&(s[c[d]]=o[c[d]])}}return s}})),x=e(_()),te=e(v()),ne=e(y()),S=e(r()),re=e(b()),C={BODY:`bodyAttributes`,HTML:`htmlAttributes`,TITLE:`titleAttributes`},w={BASE:`base`,BODY:`body`,HEAD:`head`,HTML:`html`,LINK:`link`,META:`meta`,NOSCRIPT:`noscript`,SCRIPT:`script`,STYLE:`style`,TITLE:`title`};Object.keys(w).map(function(e){return w[e]});var T={CHARSET:`charset`,CSS_TEXT:`cssText`,HREF:`href`,HTTPEQUIV:`http-equiv`,INNER_HTML:`innerHTML`,ITEM_PROP:`itemprop`,NAME:`name`,PROPERTY:`property`,REL:`rel`,SRC:`src`,TARGET:`target`},E={accesskey:`accessKey`,charset:`charSet`,class:`className`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,"http-equiv":`httpEquiv`,itemprop:`itemProp`,tabindex:`tabIndex`},D={DEFAULT_TITLE:`defaultTitle`,DEFER:`defer`,ENCODE_SPECIAL_CHARACTERS:`encodeSpecialCharacters`,ON_CHANGE_CLIENT_STATE:`onChangeClientState`,TITLE_TEMPLATE:`titleTemplate`},ie=Object.keys(E).reduce(function(e,t){return e[E[t]]=t,e},{}),ae=[w.NOSCRIPT,w.SCRIPT,w.STYLE],O=`data-react-helmet`,oe=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},se=function(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)},ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le=function(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Super expression must either be null or a function, not `+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},A=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ue=function(e,t){if(!e)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return t&&(typeof t==`object`||typeof t==`function`)?t:e},j=function(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)===!1?String(e):String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#x27;`)},M=function(e){var t=L(e,w.TITLE),n=L(e,D.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(``):t});var r=L(e,D.DEFAULT_TITLE);return t||r||void 0},N=function(e){return L(e,D.ON_CHANGE_CLIENT_STATE)||function(){}},P=function(e,t){return t.filter(function(t){return t[e]!==void 0}).map(function(t){return t[e]}).reduce(function(e,t){return k({},e,t)},{})},F=function(e,t){return t.filter(function(e){return e[w.BASE]!==void 0}).map(function(e){return e[w.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},I=function(e,t,n){var r={};return n.filter(function(t){return Array.isArray(t[e])?!0:(t[e]!==void 0&&de(`Helmet: `+e+` should be of type "Array". Instead found type "`+oe(t[e])+`"`),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var i={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],c=s.toLowerCase();t.indexOf(c)!==-1&&!(n===T.REL&&e[n].toLowerCase()===`canonical`)&&!(c===T.REL&&e[c].toLowerCase()===`stylesheet`)&&(n=c),t.indexOf(s)!==-1&&(s===T.INNER_HTML||s===T.CSS_TEXT||s===T.ITEM_PROP)&&(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),r[n][l]?!1:(i[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o];r[s]=(0,re.default)({},r[s],i[s])}return e},[]).reverse()},L=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},R=function(e){return{baseTag:F([T.HREF,T.TARGET],e),bodyAttributes:P(C.BODY,e),defer:L(e,D.DEFER),encode:L(e,D.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:P(C.HTML,e),linkTags:I(w.LINK,[T.REL,T.HREF],e),metaTags:I(w.META,[T.NAME,T.CHARSET,T.HTTPEQUIV,T.PROPERTY,T.ITEM_PROP],e),noscriptTags:I(w.NOSCRIPT,[T.INNER_HTML],e),onChangeClientState:N(e),scriptTags:I(w.SCRIPT,[T.SRC,T.INNER_HTML],e),styleTags:I(w.STYLE,[T.CSS_TEXT],e),title:M(e),titleAttributes:P(C.TITLE,e)}},z=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){z(t)},0)}}(),B=function(e){return clearTimeout(e)},V=typeof window<`u`?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||z:global.requestAnimationFrame||z,H=typeof window<`u`?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||B:global.cancelAnimationFrame||B,de=function(e){return console&&typeof console.warn==`function`&&console.warn(e)},U=null,fe=function(e){U&&H(U),e.defer?U=V(function(){W(e,function(){U=null})}):(W(e),U=null)},W=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;K(w.BODY,r),K(w.HTML,i),pe(d,f);var p={baseTag:q(w.BASE,n),linkTags:q(w.LINK,a),metaTags:q(w.META,o),noscriptTags:q(w.NOSCRIPT,s),scriptTags:q(w.SCRIPT,l),styleTags:q(w.STYLE,u)},m={},h={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)}),t&&t(),c(e,m,h)},G=function(e){return Array.isArray(e)?e.join(``):e},pe=function(e,t){e!==void 0&&document.title!==e&&(document.title=G(e)),K(w.TITLE,t)},K=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(O),i=r?r.split(`,`):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||``;n.getAttribute(c)!==l&&n.setAttribute(c,l),i.indexOf(c)===-1&&i.push(c);var u=a.indexOf(c);u!==-1&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)n.removeAttribute(a[d]);i.length===a.length?n.removeAttribute(O):n.getAttribute(O)!==o.join(`,`)&&n.setAttribute(O,o.join(`,`))}},q=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+`[`+O+`]`),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===T.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=t[r]===void 0?``:t[r];n.setAttribute(r,s)}n.setAttribute(O,`true`),i.some(function(e,t){return o=t,n.isEqualNode(e)})?i.splice(o,1):a.push(n)}),i.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:i,newTags:a}},J=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]===void 0?``+n:n+`="`+e[n]+`"`;return t?t+` `+r:r},``)},me=function(e,t,n,r){var i=J(n),a=G(t);return i?`<`+e+` `+O+`="true" `+i+`>`+j(a,r)+`</`+e+`>`:`<`+e+` `+O+`="true">`+j(a,r)+`</`+e+`>`},he=function(e,t,n){return t.reduce(function(t,r){var i=Object.keys(r).filter(function(e){return!(e===T.INNER_HTML||e===T.CSS_TEXT)}).reduce(function(e,t){var i=r[t]===void 0?t:t+`="`+j(r[t],n)+`"`;return e?e+` `+i:i},``),a=r.innerHTML||r.cssText||``,o=ae.indexOf(e)===-1;return t+`<`+e+` `+O+`="true" `+i+(o?`/>`:`>`+a+`</`+e+`>`)},``)},Y=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[E[n]||n]=e[n],t},t)},ge=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[ie[n]||n]=e[n],t},t)},X=function(e,t,n){var r,i=Y(n,(r={key:t},r[O]=!0,r));return[S.createElement(w.TITLE,i,t)]},_e=function(e,t){return t.map(function(t,n){var r,i=(r={key:n},r[O]=!0,r);return Object.keys(t).forEach(function(e){var n=E[e]||e;n===T.INNER_HTML||n===T.CSS_TEXT?i.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:i[n]=t[e]}),S.createElement(e,i)})},Z=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return X(e,t.title,t.titleAttributes,n)},toString:function(){return me(e,t.title,t.titleAttributes,n)}};case C.BODY:case C.HTML:return{toComponent:function(){return Y(t)},toString:function(){return J(t)}};default:return{toComponent:function(){return _e(e,t)},toString:function(){return he(e,t,n)}}}},Q=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=u===void 0?``:u,f=e.titleAttributes;return{base:Z(w.BASE,t,r),bodyAttributes:Z(C.BODY,n,r),htmlAttributes:Z(C.HTML,i,r),link:Z(w.LINK,a,r),meta:Z(w.META,o,r),noscript:Z(w.NOSCRIPT,s,r),script:Z(w.SCRIPT,c,r),style:Z(w.STYLE,l,r),title:Z(w.TITLE,{title:d,titleAttributes:f},r)}},$=function(e){var t,n;return n=t=function(t){le(n,t);function n(){return se(this,n),ue(this,t.apply(this,arguments))}return n.prototype.shouldComponentUpdate=function(e){return!(0,ne.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw Error(`<`+e.type+` /> elements are self-closing and can not contain children. Refer to our API for more information.`)},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return k({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[k({},i,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case w.TITLE:return k({},i,(t={},t[r.type]=o,t.titleAttributes=k({},a),t));case w.BODY:return k({},i,{bodyAttributes:k({},a)});case w.HTML:return k({},i,{htmlAttributes:k({},a)})}return k({},i,(n={},n[r.type]=k({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=k({},t);return Object.keys(e).forEach(function(t){var r;n=k({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return S.Children.forEach(e,function(e){if(!(!e||!e.props)){var i=e.props,a=i.children,o=ge(A(i,[`children`]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a});break}}}),t=this.mapArrayTypeChildrenToProps(r,t),t},n.prototype.render=function(){var t=this.props,n=t.children,r=k({},A(t,[`children`]));return n&&(r=this.mapChildrenToProps(n,r)),S.createElement(e,r)},ce(n,null,[{key:`canUseDOM`,set:function(t){e.canUseDOM=t}}]),n}(S.Component),t.propTypes={base:x.default.object,bodyAttributes:x.default.object,children:x.default.oneOfType([x.default.arrayOf(x.default.node),x.default.node]),defaultTitle:x.default.string,defer:x.default.bool,encodeSpecialCharacters:x.default.bool,htmlAttributes:x.default.object,link:x.default.arrayOf(x.default.object),meta:x.default.arrayOf(x.default.object),noscript:x.default.arrayOf(x.default.object),onChangeClientState:x.default.func,script:x.default.arrayOf(x.default.object),style:x.default.arrayOf(x.default.object),title:x.default.string,titleAttributes:x.default.object,titleTemplate:x.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||=Q({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:``,titleAttributes:{}}),t},n}((0,te.default)(R,fe,Q)(function(){return null}));$.renderStatic=$.rewind;var ve=n(function(){let e=(0,S.useRef)(null);return a.ref_lambdaBackground=e,o(S.Fragment,{},o(u,{css:{background:`transparent`,color:`white`,fontFamily:`Inter, sans-serif`,"--default-font-family":`Inter, sans-serif`}},o(u,{css:{position:`fixed`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-1`,background:`radial-gradient(ellipse at top, #15151a, #050505), radial-gradient(ellipse at bottom, #0a0a0f, #000000)`}}),o(l,{align:`start`,className:`rx-Stack`,css:{minHeight:`100vh`,width:`100%`},direction:`column`,gap:`0`},o(l,{align:`start`,className:`rx-Stack`,css:{width:`100%`,paddingInlineStart:`12`,paddingInlineEnd:`12`,height:`100px`,alignItems:`center`,justifyContent:`space-evenly`,position:`fixed`,top:`0`,borderBottom:`1px solid rgba(255, 255, 255, 0.05)`,background:`rgba(0, 0, 0, 0.6)`,backdropFilter:`blur(24px)`,zIndex:`50`},direction:`row`,gap:`3`},o(l,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`},direction:`row`,gap:`4`},o(`img`,{css:{width:`48px`,height:`48px`,transition:`transform 0.3s ease`,"&:hover":{transform:`rotate(90deg)`}},src:`/logo.svg`}),o(s,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},o(i,{to:`/`},o(f,{as:`p`,css:{fontWeight:`800`,fontSize:`1.5rem`,letterSpacing:`0.02em`,color:`white`}},`ChromaLabs`)))),o(m,{},o(c,{},o(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`CAPABILITIES`))),o(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/capabilities`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Optical Routing`)))),o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/capabilities`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Geometric Inferencing`)))))),o(m,{},o(c,{},o(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`RESEARCH`))),o(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/research`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Beyond Binary`)))),o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/research`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Volumetric Logic`)))))),o(m,{},o(c,{},o(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`COMPANY`))),o(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/company/mission`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Mission`)))),o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/company/careers`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Careers`)))),o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/company/mission`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Staff Directory`)))),o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/contact`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`Contact Us`)))))),o(m,{},o(c,{},o(h,{css:{background:`transparent`,border:`1px solid transparent`,padding:`8px 16px`,borderRadius:`6px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`,border:`1px solid rgba(255, 255, 255, 0.1)`,boxShadow:`0 0 15px rgba(255, 255, 255, 0.05)`,color:`white`},height:`auto`}},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`0.9rem`,fontWeight:`500`,letterSpacing:`0.05em`,transition:`color 0.2s ease`}},`DEVELOPER PORTAL`))),o(p,{css:{background:`rgba(5, 5, 5, 0.95)`,border:`1px solid rgba(255, 255, 255, 0.08)`,backdropFilter:`blur(24px)`,padding:`6px`,borderRadius:`8px`,boxShadow:`0 10px 40px rgba(0,0,0,0.5)`,minWidth:`220px`}},o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/developer`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`API Documentation`)))),o(u,{css:{background:`transparent`,"&:hover":{background:`rgba(255, 255, 255, 0.05)`},paddingTop:`16px`,paddingBottom:`16px`,paddingInlineStart:`20px`,paddingInlineEnd:`20px`,cursor:`pointer`,transition:`background 0.2s ease`,borderRadius:`4px`}},o(s,{asChild:!0,css:{width:`100%`,display:`block`,"&:hover":{textDecoration:`none`}}},o(i,{to:`/developer`},o(f,{as:`p`,css:{color:`slate.11`,fontSize:`1.1rem`,transition:`color 0.2s ease`,"&:hover":{color:`white`}}},`SDK Access`))))))),o(u,{css:{flexGrow:`1`,width:`100%`,position:`relative`,zIndex:`10`,display:`flex`,flexDirection:`column`,paddingTop:`100px`}},o(u,{css:{sx:{"& a":{pointerEvents:`auto`}},width:`100%`,height:`100%`,position:`relative`,overflow:`hidden`}},o(`canvas`,{css:{position:`absolute`,top:`0`,left:`0`,width:`100vw`,height:`100vh`,zIndex:`-2`,pointerEvents:`none`},id:`lambdaBackground`,ref:e}),o($,{},o(`script`,{},`
setTimeout(() => {
    const canvas = document.getElementById("lambdaBackground");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    // --- Lambda Calculus AST & Evaluator ---
    function Var(idx) { return { t: 0, idx: idx }; }
    function Abs(body) { return { t: 1, body: body }; }
    function App(left, right) { return { t: 2, left: left, right: right }; }

    function shift(term, inc, depth) {
        if (term.t === 0) {
            return term.idx >= depth ? Var(term.idx + inc) : Var(term.idx);
        } else if (term.t === 1) {
            return Abs(shift(term.body, inc, depth + 1));
        } else {
            return App(shift(term.left, inc, depth), shift(term.right, inc, depth));
        }
    }

    function substitute(term, arg, depth) {
        if (term.t === 0) {
            if (term.idx === depth) return shift(arg, depth, 0);
            if (term.idx > depth) return Var(term.idx - 1);
            return Var(term.idx);
        } else if (term.t === 1) {
            return Abs(substitute(term.body, arg, depth + 1));
        } else {
            return App(substitute(term.left, arg, depth), substitute(term.right, arg, depth));
        }
    }

    function reduce(term) {
        if (term.t === 2) {
            if (term.left.t === 1) {
                return { changed: true, term: substitute(term.left.body, term.right, 0) };
            }
            let l_res = reduce(term.left);
            if (l_res.changed) return { changed: true, term: App(l_res.term, term.right) };
            let r_res = reduce(term.right);
            if (r_res.changed) return { changed: true, term: App(term.left, r_res.term) };
        } else if (term.t === 1) {
            let b_res = reduce(term.body);
            if (b_res.changed) return { changed: true, term: Abs(b_res.term) };
        }
        return { changed: false, term: term };
    }

    function countNodes(term) {
        if (term.t === 0) return 1;
        if (term.t === 1) return 1 + countNodes(term.body);
        return 1 + countNodes(term.left) + countNodes(term.right);
    }

    // --- Tromp Diagram Layout Engine ---
    let current_x = 0;
    let max_y = 0;
    function layout(term, depth) {
        term.y = depth * 40;
        if (term.y > max_y) max_y = term.y;
        
        if (term.t === 0) {
            term.x = current_x;
            current_x += 40;
            term.min_x = term.x;
            term.max_x = term.x;
        } else if (term.t === 1) {
            layout(term.body, depth + 1);
            term.min_x = term.body.min_x - 15;
            term.max_x = term.body.max_x + 15;
            term.x = (term.min_x + term.max_x) / 2;
        } else if (term.t === 2) {
            layout(term.left, depth + 1);
            layout(term.right, depth + 1);
            term.min_x = term.left.min_x;
            term.max_x = term.right.max_x;
            term.x = (term.left.x + term.right.x) / 2;
        }
    }

    function drawTerm(term, binders) {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
        ctx.lineWidth = 2;
        
        if (term.t === 0) {
            let binder = binders[binders.length - 1 - term.idx];
            if (binder) {
                ctx.beginPath();
                ctx.moveTo(term.x, term.y);
                ctx.lineTo(term.x, binder.y);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.arc(term.x, term.y, 3, 0, 2*Math.PI);
                ctx.fillStyle = "rgba(212, 175, 55, 0.8)";
                ctx.fill();
            }
        } else if (term.t === 1) {
            ctx.beginPath();
            ctx.moveTo(term.min_x, term.y);
            ctx.lineTo(term.max_x, term.y);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(term.x, term.y);
            ctx.lineTo(term.x, term.body.y);
            ctx.stroke();
            
            let new_binders = [...binders, term];
            drawTerm(term.body, new_binders);
        } else if (term.t === 2) {
            // Application bridge
            ctx.beginPath();
            ctx.moveTo(term.left.x, term.y);
            ctx.lineTo(term.right.x, term.y);
            ctx.strokeStyle = "rgba(255, 100, 55, 0.5)"; // Slight red tint for bridges
            ctx.stroke();
            
            ctx.beginPath();
            ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
            ctx.moveTo(term.left.x, term.y);
            ctx.lineTo(term.left.x, term.left.y);
            ctx.moveTo(term.right.x, term.y);
            ctx.lineTo(term.right.x, term.right.y);
            ctx.stroke();
            
            drawTerm(term.left, binders);
            drawTerm(term.right, binders);
        }
    }

    // Initialize with the 'Grow' combinator: (λx. x x x)(λx. x x x)
    // This expands continuously upon beta-reduction.
    function getSeed() {
        let M = Abs(App(App(Var(0), Var(0)), Var(0)));
        return App(M, M);
    }
    
    let current_term = getSeed();
    
    // Evaluation Loop
    setInterval(() => {
        let nodes = countNodes(current_term);
        if (nodes > 400) {
            current_term = getSeed(); // Reset when it gets too large
        } else {
            let res = reduce(current_term);
            if (res.changed) {
                current_term = res.term;
            } else {
                current_term = getSeed();
            }
        }
    }, 1000); // 1 evaluation per second

    // Rendering Loop
    let displayScale = 1.0;
    
    function animate() {
        ctx.fillStyle = "#0A0A0C";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        current_x = 0;
        max_y = 0;
        layout(current_term, 0);
        
        const term_width = current_term.max_x - current_term.min_x;
        const term_height = max_y;
        
        // Calculate target scale to fit the tree on screen, with padding
        const padding = 100;
        const targetScaleX = (canvas.width - padding) / Math.max(term_width, 1);
        const targetScaleY = (canvas.height - padding) / Math.max(term_height, 1);
        const targetScale = Math.min(targetScaleX, targetScaleY, 2.0); // Cap max zoom
        
        // Smoothly interpolate the camera scale for the zoom out effect
        displayScale += (targetScale - displayScale) * 0.05;
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Tilt
        ctx.rotate(-0.08);
        
        ctx.scale(displayScale, displayScale);
        
        // Center the drawing
        const cx = (current_term.min_x + current_term.max_x) / 2;
        const cy = max_y / 2;
        ctx.translate(-cx, -cy);
        
        drawTerm(current_term, []);
        
        ctx.restore();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}, 500);
`)),o(u,{css:{position:`absolute`,top:`20%`,left:`50%`,transform:`translateX(-50%)`,width:`50vw`,height:`50vw`,background:`radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)`,zIndex:`-3`,filter:`blur(100px)`,borderRadius:`50%`}}),o(l,{align:`start`,className:`rx-Stack`,css:{alignItems:`center`,justifyContent:`center`,width:`100%`,"@media screen and (min-width: 0)":{paddingInlineStart:`4`,paddingInlineEnd:`4`},"@media screen and (min-width: 30em)":{paddingInlineStart:`8`,paddingInlineEnd:`8`},"@media screen and (min-width: 48em)":{paddingInlineStart:`12`,paddingInlineEnd:`12`},height:`calc(100vh - 200px)`,pointerEvents:`none`},direction:`column`,gap:`3`},o(f,{as:`p`,className:`animate-fade-up`,css:{"@media screen and (min-width: 0)":{fontSize:`2.5rem`},"@media screen and (min-width: 30em)":{fontSize:`3.5rem`},"@media screen and (min-width: 48em)":{fontSize:`4.5rem`},"@media screen and (min-width: 62em)":{fontSize:`5.5rem`},letterSpacing:`-0.02em`,lineHeight:`1.1`,color:`white`,textAlign:`center`,marginTop:`12`,fontFamily:`'EB Garamond', 'Playfair Display', serif`,"--default-font-family":`'EB Garamond', 'Playfair Display', serif`,textShadow:`0 4px 12px rgba(0, 0, 0, 0.5)`},weight:`bold`},`Higher Dimensional HPC & Defense Research Lab`),o(l,{align:`start`,className:`rx-Stack animate-fade-up delay-200`,css:{flexWrap:`wrap`,justifyContent:`center`,marginTop:`16`},direction:`row`,gap:`6`},o(s,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},o(i,{to:`/developer`},o(h,{css:{background:`white`,color:`black`,borderRadius:`4px`,fontSize:`1rem`,fontWeight:`600`,padding:`24px 36px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`#e0e0e0`}}},`Request Beta Access`))),o(s,{asChild:!0,css:{"&:hover":{textDecoration:`none`}}},o(i,{to:`/capabilities`},o(h,{css:{background:`transparent`,border:`1px solid rgba(212, 175, 55, 0.4)`,color:`white`,borderRadius:`4px`,fontSize:`1rem`,fontWeight:`600`,padding:`24px 36px`,cursor:`pointer`,transition:`all 0.2s ease`,"&:hover":{background:`rgba(212, 175, 55, 0.1)`}}},`Explore Capabilities`))))))),o(u,{css:{background:`transparent`,width:`100%`,position:`relative`,zIndex:`10`}},o(d,{css:{borderColor:`rgba(255,255,255,0.05)`},size:`4`}),o(l,{css:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:`100%`,paddingTop:`35px`,paddingBottom:`35px`}},o(f,{as:`p`,css:{color:`slate.8`,fontFamily:`JetBrains Mono, monospace`,"--default-font-family":`JetBrains Mono, monospace`,fontSize:`0.75rem`,letterSpacing:`0.2em`}},`Chroma Labs, Inc. ™`))))),o(`title`,{},`Higher Dimensional HPC | Chroma Labs`),o(`meta`,{content:`/logo.svg`,property:`og:image`}))});export{ve as default};