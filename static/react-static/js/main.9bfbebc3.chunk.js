(this.webpackJsonptweetme_reactjs=this.webpackJsonptweetme_reactjs||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),l=n(2),i=n(1);var s=function(e,t,n,a){console.log("look up called");var c=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);c.responseType="json";var r,l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");c.open(e,o),c.setRequestHeader("Content-Type","application/json"),l&&c.setRequestHeader("X-CSRFToken",l),"POST"===e&&c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.onload=function(){n(c.response,c.status)},c.onerror=function(e){console.log(e),n({msg:"error on request"},400)},a&&(r=JSON.stringify(a)),c.send(r)},u=function(e){var t=c.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):console.log(t,e)};return c.a.createElement("div",{className:"col-8 my-4"},c.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault();var n=t.current.value;s("POST","/create/",a,{content:n}),t.current.value=""}},c.a.createElement("textarea",{required:!0,ref:t,className:"form-control",placeholder:"tweet it..."}),c.a.createElement("button",{type:"submit",className:"btn btn-secondary mt-2"},"tweet")))},d=function(e){var t=e.newTweets,n=Object(a.useState)([]),o=Object(i.a)(n,2),r=o[0],u=o[1],d=Object(a.useState)([]),m=Object(i.a)(d,2),f=m[0],p=m[1],b=Object(a.useState)(!1),v=Object(i.a)(b,2),E=v[0],g=v[1];Object(a.useEffect)((function(){var e=Object(l.a)(t).concat(r);e.length!==f.length&&(p(e),console.log("final tweets Updated"))}),[t,r,f]),Object(a.useEffect)((function(){if(!1===E){console.log("tweetsLoadApi called");!function(e,t){var n="/";e&&(n="/?username=".concat(e)),s("GET",n,t)}(e.username,(function(e,t){200===t?(u(e),g(!0)):console.log("There is an error;probably the django server is not running")}))}}),[r,E,g,e.username]);var y=function(e){var t=Object(l.a)(r);t.unshift(e),u(t);var n=Object(l.a)(f);n.unshift(e),u(n)};return c.a.createElement("div",null,f.map((function(e,t){return c.a.createElement(w,{key:t,didRetweet:y,tweet:e})})))},m=function(e){var t=e.tweet,n=e.action,a=e.didPerformAction,o=t.likes?t.likes:0,r="btn btn-primary mt-2 mx-2";"retweet"===n.type&&(r="btn mt-2 mx-2 btn-outline-info");var l=n.display?n.display:"action",i=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)},u="like"===n.type?"".concat(o," ").concat(l):l;return c.a.createElement("button",{className:r,onClick:function(e){var a,c;e.preventDefault(),a=t.id,c=n.type,s("POST","/action",i,{id:a,action:c})}},u)},f=n(7),p=function(e){var t=e.tweet;return t.parent?c.a.createElement("div",{className:"bg-warning"},c.a.createElement("p",{className:"px-2"},"retweet"),c.a.createElement(w,{hideActions:!0,tweet:t.parent})):null},w=function(e){var t=e.tweet,n=e.didRetweet,o=e.hideActions,r=window.location.pathname,l=Object(f.a)(/([0-9]+)/,{tweetId:1}),s=r.match(l),u=s?s.groups.tweetId:-1,d="".concat(t.id)==="".concat(u),w=Object(a.useState)(t||null),b=Object(i.a)(w,2),v=b[0],E=b[1],g=function(e,t){200===t?E(e):201===t&&n&&(n(e),console.log("retweeted"))};return c.a.createElement("div",{className:"card mx-4 my-2"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,c.a.createElement("p",{className:"py-2 my-2 text text-dark bg-white border text-center"},t.id,"- ",t.content),c.a.createElement(p,{tweet:t})),v&&!0!==o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m,{tweet:v,didPerformAction:g,action:{type:"like",display:"Likes"}}),c.a.createElement(m,{tweet:v,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(m,{tweet:v,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})),!0===d?null:c.a.createElement("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}}," View")))},b=function(e){var t=e.tweetid;console.log(t);var n=Object(a.useState)(!1),o=Object(i.a)(n,2),r=o[0],l=o[1],u=Object(a.useState)(null),d=Object(i.a)(u,2),m=d[0],f=d[1],p=function(e,t){200===t?(f(e),console.log("tweet set")):alert("There was an error finding your tweet")};return Object(a.useEffect)((function(){var e;console.log("use effect called"),!1===r&&(e=p,s("GET","/".concat(t),e),l(!0))}),[t,r,l]),null===m?null:c.a.createElement(w,{tweet:m})},v=document.getElementById("tweetme-2"),E=c.a.createElement;if(v){console.log(v.dataset);var g=E((function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),o=n[0],r=n[1],s="false"!==e.canTweet;return c.a.createElement("div",{className:""},!0===s&&c.a.createElement(u,{didTweet:function(e){var t=Object(l.a)(o);t.unshift(e),r(t)},className:"mx-2 my-4"}),c.a.createElement(d,Object.assign({newTweets:o},e)))}),v.dataset);r.a.render(g,v)}document.querySelectorAll(".tweetme-detail").forEach((function(e){r.a.render(E(b,e.dataset),e)}))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.9bfbebc3.chunk.js.map