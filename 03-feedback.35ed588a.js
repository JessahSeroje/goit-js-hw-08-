!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function O(e){return l=e,f=setTimeout(T,t),s?j(e):u}function S(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function T(){var e=b();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function h(e){return f=void 0,p&&o?j(e):(o=i=void 0,u)}function w(){var e=b(),n=S(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(d)return f=setTimeout(T,t),j(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=y(t)||0,g(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function g(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=g(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=a.test(e);return c||u.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),O=localStorage.getItem("feedback-form-state");if(null!==O){var S=JSON.parse(O),T=j.email,h=j.message;T.value=S.email,h.value=S.message}j.addEventListener("input",(function(e){var t=e.currentTarget,n=t.email,r=t.message,o={email:n.value,message:r.value};localStorage.setItem("feedback-form-state",JSON.stringify(o))})),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.35ed588a.js.map