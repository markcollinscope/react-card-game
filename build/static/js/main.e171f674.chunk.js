(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(6),s=n.n(a),i=n(0),o=n.n(i),u=n(2),d=n(4),h=n(7),f=n(9),k=n(8),l=function(e){if(!e)throw new Error("Assertion Error: ",e);return e},p=function e(t){var n=this;Object(d.a)(this,e),this.image=function(){return n.image},this.value=function(){return n.value},this.suit=function(){return n.suit},this.code=function(){return n.code},this.numericValue=function(){return e.values[n.value]},this.image=l(t.image),this.value=l(t.value),this.suit=l(t.suit),this.code=l(t.code)};p.values={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:10,JACK:10,QUEEN:10,KING:10,ACE:11};var v=p,w=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://deckofcardsapi.com/api/deck/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:if((r=e.sent).success){e.next=8;break}throw new Error("Fetch API Error - Bye!");case 8:return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function e(){var t=this;Object(d.a)(this,e),this.deckId=void 0,this.lastCard=void 0,this.doChecks=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(void 0===t.deckId||e&&void 0===t.lastCard)throw new Error("DeckOfCard - must request newDeck() and draw()")},this.newDeck=Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("new/shuffle/?deck_count=1");case 2:return n=e.sent,t.deckId=n.deck_id,e.abrupt("return",t.deckId);case 5:case"end":return e.stop()}}),e)}))),this.drawCard=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.doChecks(!1),e.t0=v,e.next=4,w(t.deckId+"/draw/?count=1");case 4:return e.t1=e.sent,t.lastCard=new e.t0(e.t1),e.abrupt("return",t.lastcard);case 7:case"end":return e.stop()}}),e)})))},j=n(1),x=function(e){Object(f.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).deck=void 0,e.testDeck=Object(u.a)(o.a.mark((function t(){var n,r,c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=20,t.next=3,e.deck.newDeck();case 3:r=t.sent,console.log("dref: ",r),c=0;case 6:if(!(c<n)){t.next=14;break}return t.next=9,e.deck.drawCard();case 9:a=t.sent,console.log(a);case 11:c++,t.next=6;break;case 14:case"end":return t.stop()}}),t)}))),e.state={canRender:!1,deckId:void 0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.deck=new b,e.next=3,this.deck.newDeck();case 3:t=e.sent,this.setState({canRender:!0,deckId:t}),console.log("DID MOUNT: ",this.state.deckId);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="Nothing Here!";return console.log("Rendering - canRender: ",this.state.canRender),this.state.canRender&&(console.log("Updating MSG"),e=this.state.deckId),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("p",{children:"Hello World"}),e]})}}]),n}(c.a.Component);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e171f674.chunk.js.map