!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,f=setTimeout(w,t),s?p(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=b();if(h(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,v&&i?p(e):(i=r=void 0,u)}function T(){var e=b(),n=h(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?u:S(b())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};var O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(){var e=O.elements,t=e.email,n=e.message,i=JSON.stringify({email:t.value,message:n.value});localStorage.setItem("feedback-form-state",i),console.log("email: ".concat(t.value,",message: ").concat(n.value))}),500));var h=localStorage.getItem("feedback-form-state");if(h){var w=JSON.parse(h),S=O.elements,T=S.email,x=S.message;T.value=w.email,x.value=w.message}O.addEventListener("submit",(function(e){e.preventDefault();var t=O.elements,n=t.email,i=t.message;""!==n.value&&""!==i.value&&(localStorage.removeItem("feedback-form-state"),O.reset())}))}();
//# sourceMappingURL=03-feedback.1f3ac671.js.map
