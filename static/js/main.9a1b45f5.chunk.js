(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{100:function(e,t,a){},105:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(100),a(17)),l=a(18),s=a(20),m=a(19),u=a(21),d=a(32),h=a(77),p=a.n(h),f=(a(105),a(37)),E=a.n(f),v=a(43),g=a(12),w=a(94),b=a(81),k=a.n(b),y=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).state={show:e.show,isPlaying:!0},n.handleVolumeSliderChange=n.handleVolumeSliderChange.bind(Object(v.a)(n)),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.id,t="http://api.soundcloud.com/tracks/"+this.props.trackId+"/stream?client_id=3c1222aaa64b9dc73bc257260a5497cb";g.soundManager.setup({url:"../swf/",useHTML5Audio:!0,ignoreMobileRestrictions:!0,onready:function(){g.soundManager.createSound({id:e,url:t,loops:2,onbufferchange:function(t){var a=document.getElementById(e);1===t?a.classList.add("buffering"):a.classList.remove("buffering")}})},ontimeout:function(){console.log("ERROR ERROR ERROR")}})}},{key:"handleClickSoundCard",value:function(){var e=this.props.id;g.soundManager.togglePause(e),g.soundManager.getSoundById(e).paused?this.setState({isPlaying:!0}):this.setState({isPlaying:!1}),d.a.event({category:"Sounds",action:"Play",label:e})}},{key:"handleVolumeSliderChange",value:function(e){var t=this.props.id;g.soundManager.setVolume(t,e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:this.props.id,className:"sound-card-container"},r.a.createElement("div",{class:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:"sound-card ".concat(this.state.isPlaying?"paused":"playing"),onClick:function(){return e.handleClickSoundCard()}},r.a.createElement("img",{className:"icon-drop",src:this.props.icon,alt:this.props.id}),r.a.createElement("img",{className:"icon-drop pauseicon",src:k.a,alt:"Pause"}),r.a.createElement("p",{className:"sound-name"},this.props.id)),r.a.createElement(w.a,{className:"sound-volume-slider",min:0,max:100,defaultValue:100,onChange:this.handleVolumeSliderChange}))}}]),t}(n.Component),N=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).state={visible:!0},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClickSplash",value:function(){this.setState({visible:!1})}},{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setTimer",value:function(){null!=this._timer&&clearTimeout(this._timer),this._timer=setTimeout(function(){this.setState({visible:!1}),this._timer=null}.bind(this),this.props.delay)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){var e=this;return this.state.visible?r.a.createElement("div",{className:"splash-container",onClick:function(){return e.handleClickSplash()}},r.a.createElement("div",{className:"splash-content"},r.a.createElement("div",{className:"splash-logo-block"},r.a.createElement("p",{className:"splash-logo"},"SOUNDROWN")),r.a.createElement("p",{className:"splash-text"},"relax. focus. escape."))):""}}]),t}(n.Component),S=a(82),_=a.n(S),O=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).state={muteAll:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClickMuteAll",value:function(){this.state.muteAll?(g.soundManager.unmute(),this.setState({muteAll:!1})):(g.soundManager.mute(),this.setState({muteAll:!0}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mute-frame"},r.a.createElement("div",{className:"mute ".concat(this.state.muteAll?"muted":""),onClick:function(){return e.handleClickMuteAll()}},r.a.createElement("img",{src:_.a,alt:"Mute Button"}),r.a.createElement("span",null,"mute all")))}}]),t}(n.Component),j=a(83),C=a.n(j),x=a(84),M=a.n(x),T=a(85),R=a.n(T),I=a(86),D=a.n(I),A=a(87),V=a.n(A),W=a(88),U=a.n(W),F=a(89),H=a.n(F),B=a(90),P=a.n(B),L=a(91),Y=a.n(L),J=a(92),G=a.n(J),Q=a(93),Z=a.n(Q),q=a(38),z=a.n(q),X=a(61),$=a.n(X),K=a(33),ee=a.n(K),te=function(e){function t(e,a){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e,a))).state={},d.a.initialize("UA-35477640-1"),d.a.pageview(window.location.pathname+window.location.search),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.beforeunload.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.beforeunload.bind(this))}},{key:"beforeunload",value:function(){d.a.event({category:"Exits",action:"LeavesPage"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{delay:"5000"}),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"mainlogo"},r.a.createElement("img",{src:Z.a,alt:"SOUNDROWN"})),r.a.createElement("div",{className:"timer-container"},r.a.createElement(E.a,null,r.a.createElement(E.a.Hours,{formatValue:function(e){return"".concat(e<10?"0".concat(e,"h "):"".concat(e,"h "))}}),r.a.createElement(E.a.Minutes,{formatValue:function(e){return"".concat(e<10?"0".concat(e,"m "):"".concat(e,"m "))}}),r.a.createElement(E.a.Seconds,{formatValue:function(e){return"".concat(e<10?"0".concat(e,"s "):"".concat(e,"s "))}}))),r.a.createElement(O,null)),r.a.createElement("div",{className:"sounds-container"},r.a.createElement(y,{id:"coffee",trackId:"133634507",icon:M.a}),r.a.createElement(y,{id:"rain",trackId:"133634506",icon:H.a}),r.a.createElement(y,{id:"waves",trackId:"133634513",icon:Y.a}),r.a.createElement(y,{id:"fire",trackId:"133634510",icon:R.a}),r.a.createElement(y,{id:"birds",trackId:"133634508",icon:C.a}),r.a.createElement(y,{id:"night",trackId:"133634511",icon:V.a}),r.a.createElement(y,{id:"train",trackId:"133634504",icon:P.a}),r.a.createElement(y,{id:"fountain",trackId:"415247925",icon:D.a}),r.a.createElement(y,{id:"whitenoise",trackId:"133634509",icon:G.a}),r.a.createElement(y,{id:"playground",trackId:"415247904",icon:U.a})),r.a.createElement("div",{className:"ad-container"},r.a.createElement(p.a.Google,{client:"ca-pub-5739077933952279",slot:"1030414388",style:{display:"block"},format:"auto",responsive:"true"})),r.a.createElement("section",{className:"about section"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Soundrown was created to help individuals like you, relax and focus while you work on your daily tasks or creative aspirations.  Brought to you by a small and passionate group, interested in creating an experience for everyone to enjoy.")),r.a.createElement("section",{className:"knowledge section"},r.a.createElement("h2",null,"Why sounds?"),r.a.createElement("a",{href:"http://www.theatlantic.com/health/archive/2012/06/study-of-the-day-why-crowded-coffee-shops-fire-up-your-creativity/258742/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"STUDY OF THE DAY: Why Crowded Coffee Shops Fire Up Your Creativity")),r.a.createElement("a",{href:"http://lifehacker.com/5365012/the-best-sounds-for-getting-work-done",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"THE BEST SOUNDS: For Getting Work Done")),r.a.createElement("a",{href:"http://www.mdpi.com/1660-4601/7/3/1036",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"STRESS RECOVERY: During Exposure to Nature Sound and Environmental Noise")),r.a.createElement("a",{href:"http://www.apartmenttherapy.com/sleep-better-the-science-of-sound-machines-168208",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"WHITE NOISE AND YOUR BRAIN: The Science of Sound Machines"))),r.a.createElement("section",{className:"team section"},r.a.createElement("h2",null,"Team"),r.a.createElement("div",{className:"team-grid"},r.a.createElement("div",{className:"team-card"},r.a.createElement("div",null,r.a.createElement("h3",null,"Rishi Agrawal"),r.a.createElement("p",{className:"role"},"Founder")),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:rishi@soundrown.com",title:"rishi@soundrown.com"},r.a.createElement("img",{src:z.a,alt:"Email"})),r.a.createElement("a",{href:"https://twitter.com/rishim3",target:"_blank",rel:"noopener noreferrer",title:"@rishim3"},r.a.createElement("img",{src:ee.a,alt:"Twitter"})))),r.a.createElement("div",{className:"team-card"},r.a.createElement("div",null,r.a.createElement("h3",null,"Joseph Decker"),r.a.createElement("p",{className:"role"},"Creative")),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:joseph@soundrown.com",title:"joseph@soundrown.com"},r.a.createElement("img",{src:z.a,alt:"Email"})),r.a.createElement("a",{href:"https://twitter.com/_josephdecker",target:"_blank",rel:"noopener noreferrer",title:"@_josephdecker"},r.a.createElement("img",{src:ee.a,alt:"Twitter"})),r.a.createElement("a",{href:"http://www.josephdecker.com/",target:"_blank",rel:"noopener noreferrer",title:"www.josephdecker.com"},r.a.createElement("img",{src:$.a,alt:"Homepage"})))),r.a.createElement("div",{className:"team-card"},r.a.createElement("div",null,r.a.createElement("h3",null,"Daniel Lin"),r.a.createElement("p",{className:"role"},"Designer / Developer")),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:daniel@soundrown.com",title:"daniel@soundrown.com"},r.a.createElement("img",{src:z.a,alt:"Email"})),r.a.createElement("a",{href:"https://twitter.com/daniellinp",target:"_blank",rel:"noopener noreferrer",title:"@daniellinp"},r.a.createElement("img",{src:ee.a,alt:"Twitter"})),r.a.createElement("a",{href:"http://www.daniel-lin.net",target:"_blank",rel:"noopener noreferrer",title:"www.daniel-lin.net"},r.a.createElement("img",{src:$.a,alt:"Homepage"})))),r.a.createElement("div",{className:"team-card"},r.a.createElement("div",null,r.a.createElement("h3",null,"Nathan SooHoo"),r.a.createElement("p",{className:"role"},"Marketing")),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:nathan@soundrown.com",title:"nathan@soundrown.com"},r.a.createElement("img",{src:z.a,alt:"Email"})),r.a.createElement("a",{href:"https://twitter.com/nsoohoo",target:"_blank",rel:"noopener noreferrer",title:"@nsoohoo"},r.a.createElement("img",{src:ee.a,alt:"Twitter"})))))),r.a.createElement("footer",null,r.a.createElement("a",{href:"https://twitter.com/soundrown",target:"_blank",rel:"noopener noreferrer",title:"@soundrown"},r.a.createElement("img",{src:ee.a,alt:"@soundrown Twitter"}),"Tweet at us!"),r.a.createElement("a",{href:"https://docs.google.com/spreadsheet/viewform?formkey=dFdqd3VUQnZXSFFMZFYyTWl5NFUtWVE6MQ",target:"_blank",rel:"noopener noreferrer"},"Have some feedback?"),r.a.createElement("div",{id:"copyrights"},r.a.createElement("p",null,"Made with \u2665 in San Francisco.\xa0\xa0Copyright \xa92020 soundrown"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){e.exports=a.p+"static/media/icon_twitter.5aa04881.svg"},38:function(e,t,a){e.exports=a.p+"static/media/icon_mail.15ee0e5a.svg"},61:function(e,t,a){e.exports=a.p+"static/media/icon_home.3156def1.svg"},81:function(e,t,a){e.exports=a.p+"static/media/icon_pause.7d460a70.svg"},82:function(e,t,a){e.exports=a.p+"static/media/icon_mute.0131c6c1.svg"},83:function(e,t,a){e.exports=a.p+"static/media/icon_bird.a97af0b0.svg"},84:function(e,t,a){e.exports=a.p+"static/media/icon_coffee.7b165ffe.svg"},85:function(e,t,a){e.exports=a.p+"static/media/icon_fire.637af23d.svg"},86:function(e,t,a){e.exports=a.p+"static/media/icon_fountain.e098483a.svg"},87:function(e,t,a){e.exports=a.p+"static/media/icon_night.0b4b630b.svg"},88:function(e,t,a){e.exports=a.p+"static/media/icon_playground2.653ea04e.svg"},89:function(e,t,a){e.exports=a.p+"static/media/icon_rain.1f80a2cb.svg"},90:function(e,t,a){e.exports=a.p+"static/media/icon_train.2314fa10.svg"},91:function(e,t,a){e.exports=a.p+"static/media/icon_waves.d582c251.svg"},92:function(e,t,a){e.exports=a.p+"static/media/icon_whitenoise.5a511b9d.svg"},93:function(e,t,a){e.exports=a.p+"static/media/logo_soundrown.ad01f220.svg"},95:function(e,t,a){e.exports=a(165)}},[[95,1,2]]]);
//# sourceMappingURL=main.9a1b45f5.chunk.js.map