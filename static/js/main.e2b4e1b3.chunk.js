(this.webpackJsonpmodular=this.webpackJsonpmodular||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/image2.6a9a9171.jpg"},function(e,t,a){e.exports=a.p+"static/media/video3.187e0161.mp4"},,function(e,t,a){e.exports=a.p+"static/media/video.6521032f.mp4"},function(e,t,a){e.exports=a.p+"static/media/video2.cf3aa221.mp4"},,function(e,t,a){e.exports=a.p+"static/media/logo1.1452c037.svg"},function(e,t,a){e.exports=a.p+"static/media/logo2.c4b088fa.svg"},function(e,t,a){e.exports=a.p+"static/media/storelocator.4fa696b0.svg"},function(e,t,a){e.exports=a.p+"static/media/account.a3397d15.svg"},function(e,t,a){e.exports=a.p+"static/media/search.a4d8def7.svg"},function(e,t,a){e.exports=a.p+"static/media/bag.2c6dad0e.svg"},function(e,t,a){e.exports=a.p+"static/media/burger.34d26c7e.svg"},function(e,t,a){e.exports=a.p+"static/media/image1.9dd4d32d.jpg"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),s=a.n(c),l=(a(25),a(26),a(12)),r=a.n(l),o=a(13),m=a.n(o),u=a(14),d=a.n(u),f=a(15),g=a.n(f),v=a(16),p=a.n(v),h=a(17),E=a.n(h),b=a(18),N=a.n(b);var w=function(){return i.a.createElement("nav",{className:"row navbar"},i.a.createElement("div",{className:"offset-1 col-3 offset-m-0 col-m-19 col-s-16 main"},i.a.createElement("a",{href:"#",className:"logo"},i.a.createElement("img",{src:r.a,className:"logo1",alt:"logo"}),i.a.createElement("img",{src:m.a,className:"logo2",alt:"logo"}))),i.a.createElement("div",{id:"main-menu",className:"offset-4 col-8 offset-m-3 col-m-10 main-menu"},i.a.createElement("ul",{className:"navigation"},i.a.createElement("li",{className:"navlink"},i.a.createElement("a",{href:"#"},"Men")),i.a.createElement("li",{className:"navlink"},i.a.createElement("a",{href:"#"},"Women")),i.a.createElement("li",{className:"navlink"},i.a.createElement("a",{href:"#"},"Kids")),i.a.createElement("li",{className:"navlink"},i.a.createElement("a",{href:"#"},"Customise")),i.a.createElement("li",{className:"navlink"},i.a.createElement("a",{href:"#"},"Lacoste inside")))),i.a.createElement("div",{className:"col-1 offset-m-1 col-m-2 col-s-3 search"},i.a.createElement("img",{src:p.a,className:"icon",alt:"search"})),i.a.createElement("div",{id:"account",className:"offset-4 col-2 offset-m-3 col-m-2 account"},i.a.createElement("img",{src:d.a,className:"icon",alt:"storelocator"}),i.a.createElement("img",{src:g.a,className:"icon",alt:"account"})),i.a.createElement("div",{className:"col-1 col-s-2 basket"},i.a.createElement("img",{src:E.a,className:"icon",alt:"bag"})),i.a.createElement("div",{id:"menu",className:"col-1 col-s-2 menu"},i.a.createElement("img",{src:N.a,className:"icon",alt:"burger"})))},j=a(2),k=a(3),x=a(1),y=a(5),O=a(4),L=(a(9),a(10),a(7)),C=a.n(L),M=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).state={fade:"op100"},e.fadeIn=e.fadeIn.bind(Object(x.a)(e)),e}return Object(k.a)(a,[{key:"fadeIn",value:function(){"op100"===this.state.fade&&this.setState({fade:"op0"})}},{key:"render",value:function(){var e=this.state.fade,t="title-bloc ".concat(e," offset-15 col-9 offset-s-1 col-s-23 flex-col");return i.a.createElement("div",{className:"col-25 head align-end"},i.a.createElement("div",{className:"col-14 col-s-25 video-container",dangerouslySetInnerHTML:{__html:'<video class="video" autoplay loop muted playsinline> <source src='.concat(this.props.url,' alt="video" type="video/mp4"/></video>')}}),i.a.createElement("div",{className:t,onLoad:this.fadeIn},i.a.createElement("p",{className:"text-s light mgbt-text-30"},"Lacoste gift guide"),i.a.createElement("h1",{className:"big-title light"},this.props.title),i.a.createElement("p",{className:"text-s light"},"Lorem ipsum Nam Donec malesuada leo, vehicula commodo Morbi tincidunt lacus aliquet ultrices tempor scelerisque neque Cras sed vitae eget Morbi rhoncus feugiat ultricies eget lectus erat Sed elit. Erat, a Nam sagittis nisi vitae arcu. Turpis lorem, Donec ac eget metus risus. Justo, sollicitudin lectus tempor lacinia.")))}}]),a}(i.a.Component),S=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).wrapper=i.a.createRef(),e.state={height:"",position:0},e.fixed=e.fixed.bind(Object(x.a)(e)),e}return Object(k.a)(a,[{key:"fixed",value:function(){this.state.position;var e=this.wrapper.current,t=(e.getBoundingClientRect(),e.offsetTop);window.scrollY>=t?this.setState({height:"navtop"}):this.setState({height:""})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.fixed)}},{key:"render",value:function(){var e=this.state.height,t="row bgred ".concat(e);return i.a.createElement("div",{ref:this.wrapper,className:t},i.a.createElement("div",{className:"offset-9 col-7 offset-s-3 col-s-19 align-center justify-between"},i.a.createElement("a",{className:"navigation-link light",href:"#"},"For him"),i.a.createElement("a",{className:"navigation-link light",href:"#"},"For her"),i.a.createElement("a",{className:"navigation-link light",href:"#"},"For kids")))}}]),a}(i.a.Component),T=a(19),I=a.n(T),R=a(6),B=a.n(R),D=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).wrapper=i.a.createRef(),e.state={visible:""},e.reveal=e.reveal.bind(Object(x.a)(e)),e}return Object(k.a)(a,[{key:"reveal",value:function(){var e=this.wrapper.current,t=e.getBoundingClientRect().top;t<window.innerHeight?setTimeout((function(){return e.classList.remove("invisible")}),500):setTimeout((function(){return e.classList.add("invisible")}),0),console.log(window.innerHeight),console.log(t)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.reveal)}},{key:"render",value:function(){var e=this.props,t=e.img,a=e.alt,n=e.classy;return i.a.createElement("div",{ref:this.wrapper,className:n},i.a.createElement("div",{className:"row tile"},i.a.createElement("img",{className:"tileimg",src:t,alt:a}),i.a.createElement("div",{className:"inner-bottom mgbt-1 mgbt-m-2"},i.a.createElement("h3",{className:"inner-title light mgbt-text-10"},"For him"),i.a.createElement("a",{className:"text-s light",href:"#"},"all products"))))}}]),a}(i.a.Component),F=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).wrapper=i.a.createRef(),e.state={visible:""},e.reveal=e.reveal.bind(Object(x.a)(e)),e}return Object(k.a)(a,[{key:"reveal",value:function(){var e=this.wrapper.current,t=e.getBoundingClientRect().top;t<window.innerHeight?setTimeout((function(){return e.classList.remove("invisible")}),500):setTimeout((function(){return e.classList.add("invisible")}),0),console.log(window.innerHeight),console.log(t)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.reveal)}},{key:"render",value:function(){var e=this.props,t=e.img,a=e.alt,n=e.classy;e.visible;return i.a.createElement("div",{ref:this.wrapper,className:n},i.a.createElement("div",{className:"row tile"},i.a.createElement("img",{className:"tileimg",src:t,alt:a})),i.a.createElement("a",{className:"text-s dark mgt-text-10",href:"#"},"See product"))}}]),a}(i.a.Component),H=function(e){Object(y.a)(a,e);var t=Object(O.a)(a);function a(){return Object(j.a)(this,a),t.call(this)}return Object(k.a)(a,[{key:"render",value:function(){var e="offset-1 col-7 col-s-23 mgbt-1 mgbt-m-2 flex-col full",t="offset-1 col-7 col-s-11 mgbt-1 mgbt-m-2 flex-col mid";return i.a.createElement("div",{className:"row mgt-2 mgt-m-4 mgbt-2 mgbt-m-6"},i.a.createElement(D,{classy:e,img:I.a,alt:"image"}),i.a.createElement(F,{classy:t,img:B.a,alt:"image"}),i.a.createElement(F,{classy:t,img:B.a,alt:"image"}),i.a.createElement(F,{classy:e,img:B.a,alt:"image"}),i.a.createElement(F,{classy:t,img:B.a,alt:"image"}),i.a.createElement(F,{classy:t,img:B.a,alt:"image"}))}}]),a}(i.a.Component);var q=function(){return i.a.createElement(i.a.Fragment,null," ",i.a.createElement(w,null)," ",i.a.createElement(M,{url:C.a,title:"Christmas gift guide"})," ",i.a.createElement(S,null)," ",i.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.e2b4e1b3.chunk.js.map