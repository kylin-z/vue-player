webpackJsonp([1],{3:function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=u[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(A(n.parts[a],e))}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(A(n.parts[a],e));u[n.id]={id:n.id,refs:1,parts:o}}}}function r(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],a=r[0],o=r[1],s=r[2],A=r[3],l={css:o,media:s,sourceMap:A};i[a]?i[a].parts.push(l):e.push(i[a]={id:a,parts:[l]})}return e}function a(t,e){var i=f(),n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function A(t,e){var i,n,r;if(e.singleton){var a=m++;i=h||(h=s(e)),n=l.bind(null,i,a,!1),r=l.bind(null,i,a,!0)}else i=s(e),n=d.bind(null,i),r=function(){o(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function l(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function d(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var u={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},c=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=c()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=r(t);return n(i,e),function(t){for(var a=[],o=0;o<i.length;o++){var s=i[o],A=u[s.id];A.refs--,a.push(A)}if(t){var l=r(t);n(l,e)}for(var o=0;o<a.length;o++){var A=a[o];if(0===A.refs){for(var d=0;d<A.parts.length;d++)A.parts[d]();delete u[A.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{name:"音频哦",isPlay:!1,isTimeShow:!0,isDrag:!1,audio:null,duration:0,currentTime:0,bufferedTime:0,playBarPosLeft:0,barWidth:0,btnWidth:15}},methods:{play:function(){this.isPlay=!this.isPlay,this.isPlay?this.audio.play():this.audio.pause()},stop:function(){this.isPlay&&(this.isPlay=!1)},changePlayTime:function(t){var e=t||window.event,i=e.clientX-this.playBarPosLeft;this.currentTime=i/this.barWidth*this.duration,this.audio.currentTime=this.currentTime},canplay:function(){setInterval(this.getBufferedTime.bind(this),5e3)},getCurrentTime:function(){this.currentTime=this.audio.currentTime},getBufferedTime:function(){if(!(this.duration<=0)){var t=this.audio.buffered.start(0),e=this.audio.buffered.end(0);this.bufferedTime=e-t}},getDuration:function(){this.duration=this.audio.duration},dragStart:function(t){this.isDrag=!0,this.isPlay&&(this.isPlay=!1,this.audio.pause())},dragDur:function(t){if(0!=this.isDrag){var e=t||window.event;if("touchmove"===e.type)if(e.targetTouches[0].clientX>=this.playBarPosLeft&&e.targetTouches[0].clientX<=this.playBarPosLeft+this.barWidth){var i=e.targetTouches[0].clientX-this.playBarPosLeft;this.currentTime=i/this.barWidth*this.duration}else this.dragEnd();else if(e.clientX>=this.playBarPosLeft&&e.clientX<=this.playBarPosLeft+this.barWidth){var n=e.clientX-this.playBarPosLeft;this.currentTime=n/this.barWidth*this.duration}else this.dragEnd()}},dragEnd:function(t){this.isDrag&&(this.isDrag=!1,this.isPlay=!0,this.audio.play(),this.audio.currentTime=this.currentTime)}},ready:function(){this.audio=document.getElementById("audio"),this.playBarPosLeft=document.getElementById("play_bar").getBoundingClientRect().left,this.barWidth=document.getElementById("play_bar").offsetWidth}}},19:function(t,e,i){e=t.exports=i(2)(),e.push([t.id,"@-webkit-keyframes circle{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.play_time_bar{position:relative;margin-top:13px;width:330px;height:20px}.play_bar{height:5px;top:0;bottom:0;position:absolute;margin:auto;border-radius:5px}.play_duration_bar{width:100%;border:1px solid #e9e7e8;z-index:1}.play_buffer_bar{background-color:#e9e7e8;z-index:2;cursor:pointer}.play_cur_bar{background-color:#ee5245;border:1px solid #ee5245;z-index:3;cursor:pointer}.play_circle_btn{width:14px;height:14px;top:0;bottom:0;position:absolute;margin:auto;border-radius:50%;background-color:#fff;z-index:4;border:1px solid #ffe6e4;cursor:pointer;margin-left:-7px}.music_box{width:400px;height:200px}.play_box{position:absolute;width:400px;height:400px;top:0;left:0;right:0;bottom:0;margin:auto}.play_btn{float:left;width:50px;height:50px;border-radius:50%;cursor:pointer;background-image:url(http://7xs1hq.com1.z0.glb.clouddn.com/play.gif);background-size:contain;background-repeat:no-repeat}.play_info_box{margin-left:70px}.play_info_box label{font-size:12px}.play_info_playTiem{float:right}.on{background-image:url(http://7xs1hq.com1.z0.glb.clouddn.com/stop.gif);-webkit-animation:circle 10s infinite linear;animation:circle 10s infinite linear}","",{version:3,sources:["/./src/App.vue"],names:[],mappings:"AACA,0BACI,GAAI,+BAA+B,AAAC,sBAAuB,CAAE,AAC7D,GAAM,gCAAiC,AAAC,uBAAyB,CAAE,CACtE,AACD,eACI,kBAAmB,AACnB,gBAAiB,AACjB,YAAa,AACb,WAAa,CAChB,AACD,UACI,WAAY,AACZ,MAAO,SAAU,AACjB,kBAAmB,AACnB,YAAa,AACb,iBAAmB,CACtB,AACD,mBACI,WAAY,AACZ,yBAA0B,AAC1B,SAAW,CACd,AACD,iBACI,yBAA0B,AAC1B,UAAW,AACX,cAAgB,CACnB,AACD,cACI,yBAA0B,AAC1B,yBAA0B,AAC1B,UAAW,AACX,cAAgB,CACnB,AACD,iBACI,WAAY,AACZ,YAAa,AACb,MAAO,SAAU,AACjB,kBAAmB,AACnB,YAAa,AACb,kBAAmB,AACnB,sBAAuB,AACvB,UAAW,AACX,yBAA0B,AAC1B,eAAgB,AAChB,gBAAkB,CACrB,AACD,WACI,YAAa,AACb,YAAc,CACjB,AACD,UACI,kBAAmB,AACnB,YAAa,AACb,aAAc,AACd,MAAO,OAAQ,QAAS,SAAU,AAClC,WAAa,CAChB,AACD,UACI,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,eAAgB,AAChB,qEAAsE,AACtE,wBAAyB,AACzB,2BAA6B,CAChC,AACD,eACI,gBAAkB,CACrB,AACD,qBACI,cAAgB,CACnB,AACD,oBACI,WAAa,CAChB,AACD,IACI,qEAAsE,AACtE,6CAA6C,AAC7C,oCAAqC,CACxC",file:"App.vue",sourcesContent:["\n@-webkit-keyframes circle{\n    0%{ -webkit-transform:rotate(0deg); transform:rotate(0deg); }\n    100%{ -webkit-transform:rotate(360deg); transform:rotate(360deg); }\n}\n.play_time_bar{\n    position: relative;\n    margin-top: 13px;\n    width: 330px;\n    height: 20px;\n}\n.play_bar{\n    height: 5px;\n    top: 0;bottom: 0;\n    position: absolute;\n    margin: auto;\n    border-radius: 5px;\n}\n.play_duration_bar{\n    width: 100%;\n    border: 1px solid #e9e7e8;\n    z-index: 1;\n}\n.play_buffer_bar{\n    background-color: #e9e7e8;\n    z-index: 2;\n    cursor: pointer;\n}\n.play_cur_bar{\n    background-color: #ee5245;\n    border: 1px solid #ee5245;\n    z-index: 3;\n    cursor: pointer;\n}\n.play_circle_btn{\n    width: 14px;\n    height: 14px;\n    top: 0;bottom: 0;\n    position: absolute;\n    margin: auto;\n    border-radius: 50%;\n    background-color: #fff;\n    z-index: 4;\n    border: 1px solid #ffe6e4;\n    cursor: pointer;\n    margin-left: -7px;\n}\n.music_box{\n    width: 400px;\n    height: 200px;\n}\n.play_box{\n    position: absolute;\n    width: 400px;\n    height: 400px;\n    top: 0;left: 0;right: 0;bottom: 0;\n    margin: auto;\n}\n.play_btn{\n    float: left;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    cursor: pointer;\n    background-image: url(http://7xs1hq.com1.z0.glb.clouddn.com/play.gif);\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n.play_info_box{\n    margin-left: 70px;\n}\n.play_info_box label{\n    font-size: 12px;\n}\n.play_info_playTiem{\n    float: right;\n}\n.on{\n    background-image: url(http://7xs1hq.com1.z0.glb.clouddn.com/stop.gif);\n    -webkit-animation:circle 10s infinite linear;\n    animation:circle 10s infinite linear;\n}\n"],sourceRoot:"webpack://"}])},21:function(t,e,i){var n=i(19);"string"==typeof n&&(n=[[t.id,n,""]]);i(3)(n,{});n.locals&&(t.exports=n.locals)},25:function(t,e){t.exports="<div class=play_box @mousemove=dragDur @mouseup=dragEnd @touchmove=dragDur @touchend=dragEnd> <audio id=audio @loadedmetadata=getDuration @progress=getBufferedTime @timeupdate=getCurrentTime @ended=stop @canplay=canplay src=http://7xs1hq.com1.z0.glb.clouddn.com/audio.mp3> 您的浏览器不支持 audio 标签。 </audio> <div class=music_box> <div class=play_btn :class={on:isPlay} @click=play></div> <div class=play_info_box> <label class=play_name>{{name}}</label> <label class=play_info_playTiem><span>{{currentTime | formatTime 'notHasHour'}}</span><span>/</span><span>{{duration | formatTime 'notHasHour'}}</span></label> <div class=play_time_bar @click=changePlayTime> <div class=\"play_bar play_duration_bar\" id=play_bar></div> <div class=\"play_bar play_buffer_bar\" :style=\"{'width':bufferedTime/duration*100+'%'}\"></div> <div class=\"play_bar play_cur_bar\" :style=\"{'width':currentTime/duration*100+'%'}\"></div> <div class=play_circle_btn @mousedown=dragStart @touchstart=dragStart :style=\"{'left':currentTime/duration*100+'%'}\"> </div> </div> </div> </div> </div>"},28:function(t,e,i){var n,r;i(21),n=i(5),r=i(25),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}});
//# sourceMappingURL=1.1b901b0fbc67d06096ff.js.map