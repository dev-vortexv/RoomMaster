"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[453],{92507:function(t,e,n){var r=n(81171),a=n(46417);e.Z=(0,r.Z)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},92599:function(t,e,n){n.d(e,{WU:function(){return at}});const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}const o={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const s={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function c(t){return function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?l(u,(t=>t.test(i))):d(u,(t=>t.test(i)));let c;c=t.valueCallback?t.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;const h=e.slice(i.length);return{value:c,rest:h}}}function d(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function l(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}const h={ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.match(m.matchPattern);if(!n)return null;const r=n[0],a=t.match(m.parsePattern);if(!a)return null;let o=m.valueCallback?m.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;const i=t.slice(r.length);return{value:o,rest:i}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var m;const f={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=r[t];return a="string"===typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:o,formatRelative:(t,e,n,r)=>i[t],localize:s,match:h,options:{weekStartsOn:0,firstWeekContainsDate:1}};let g={};function w(){return g}Math.pow(10,8);const b=6048e5;function y(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new t.constructor(+t):"number"===typeof t||"[object Number]"===e||"string"===typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function p(t){const e=y(t);return e.setHours(0,0,0,0),e}function M(t){const e=y(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function v(t,e){const n=p(t),r=p(e),a=+n-M(n),o=+r-M(r);return Math.round((a-o)/864e5)}function k(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function x(t){const e=y(t),n=k(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function P(t){const e=y(t);return v(e,x(e))+1}function S(t,e){const n=w(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=y(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function W(t){return S(t,{weekStartsOn:1})}function D(t){const e=y(t),n=e.getFullYear(),r=k(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=W(r),o=k(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=W(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function T(t){const e=D(t),n=k(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),W(n)}function C(t){const e=y(t),n=+W(e)-+T(e);return Math.round(n/b)+1}function Y(t,e){const n=y(t),r=n.getFullYear(),a=w(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=k(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const u=S(i,e),s=k(t,0);s.setFullYear(r,0,o),s.setHours(0,0,0,0);const c=S(s,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function O(t,e){const n=w(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=Y(t,e),o=k(t,0);o.setFullYear(a,0,r),o.setHours(0,0,0,0);return S(o,e)}function N(t,e){const n=y(t),r=+S(n,e)-+O(n,e);return Math.round(r/b)+1}function q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const H={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):q(n+1,2)},d(t,e){return q(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h(t,e){return q(t.getHours()%12||12,e.length)},H(t,e){return q(t.getHours(),e.length)},m(t,e){return q(t.getMinutes(),e.length)},s(t,e){return q(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds();return q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},F="midnight",j="noon",E="morning",z="afternoon",L="evening",A="night",Q={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return H.y(t,e)},Y:function(t,e,n,r){const a=Y(t,r),o=a>0?a:1-a;if("YY"===e){return q(o%100,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):q(o,e.length)},R:function(t,e){return q(D(t),e.length)},u:function(t,e){return q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return H.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=N(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):q(a,e.length)},I:function(t,e,n){const r=C(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):H.d(t,e)},D:function(t,e,n){const r=P(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?j:0===r?F:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?L:r>=12?z:r>=4?E:A,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return H.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):H.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):H.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):H.s(t,e)},S:function(t,e){return H.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return G(r);case"XXXX":case"XX":return X(r);default:return X(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return G(r);case"xxxx":case"xx":return X(r);default:return X(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+B(r,":");default:return"GMT"+X(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+B(r,":");default:return"GMT"+X(r,":")}},t:function(t,e,n){return q(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return q(t.getTime(),e.length)}};function B(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+q(o,2)}function G(t,e){if(t%60===0){return(t>0?"-":"+")+q(Math.abs(t)/60,2)}return X(t,e)}function X(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",r=Math.abs(t),a=q(Math.trunc(r/60),2),o=q(r%60,2);return n+a+e+o}const $=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},J=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},_={p:J,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return $(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",$(r,e)).replace("{{time}}",J(a,e))}},U=/^D+$/,I=/^Y+$/,R=["D","DD","YY","YYYY"];function V(t){return t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function Z(t){if(!V(t)&&"number"!==typeof t)return!1;const e=y(t);return!isNaN(Number(e))}const K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,tt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,et=/^'([^]*?)'?$/,nt=/''/g,rt=/[a-zA-Z]/;function at(t,e,n){const r=w(),a=n?.locale??r.locale??f,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,u=y(t);if(!Z(u))throw new RangeError("Invalid time value");let s=e.match(tt).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,_[e])(t,a.formatLong)}return t})).join("").match(K).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:ot(t)};if(Q[e])return{isToken:!0,value:t};if(e.match(rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(s=a.localize.preprocessor(u,s));const c={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return s.map((r=>{if(!r.isToken)return r.value;const o=r.value;(!n?.useAdditionalWeekYearTokens&&function(t){return I.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return U.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),R.includes(t))throw new RangeError(r)}(o,e,String(t));return(0,Q[o[0]])(u,o,a.localize,c)})).join("")}function ot(t){const e=t.match(et);return e?e[1].replace(nt,"'"):t}}}]);