(this["webpackJsonpblockchain-explorer"]=this["webpackJsonpblockchain-explorer"]||[]).push([[12],{405:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"j",(function(){return i})),a.d(t,"i",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"g",(function(){return m})),a.d(t,"d",(function(){return b})),a.d(t,"a",(function(){return p}));var n="assets/tokenid/issuingBox",i="/dex/tokens/tokenid/unspentSellOrders",s="/dex/tokens/tokenid/unspentBuyOrders",l="/assets/issuingBoxes",c="/assets/issuingBoxes/total",r="assets/id:/issuingBoxes",o="/transactions/unconfirmed",m="/transactions/unconfirmed/:id",b="oracle/frontendData",p="addresses/balances"},410:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(106),i=a(42),s=a.n(i),l=function(e,t,a,i){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return e(Object(n.startStructFetch)(t)),s.a[a](i,l).then((function(e){return e.body||e.data})).then((function(a){if(!a)return e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a);var i=a.errors||a.error;return i?(e(Object(n.stopStructFetch)(t,new Error(i))),Promise.reject(new Error(i))):(e(Object(n.stopStructFetch)(t,a)),Promise.resolve(a))})).catch((function(a){return e(Object(n.stopStructFetch)(t,a)),Promise.reject(a)}))}},425:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(8),i=a(9),s=a(12),l=a(11),c=a(0),r=a.n(c),o=a(29),m=a(36),b=(a(426),a(14)),p=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=Math.ceil(this.props.total/this.props.limit);return e?r.a.createElement("div",{className:"bi-paginate-simple"},0===this.props.forcePage?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},r.a.createElement(b.o,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",to:this.props.getPageUrl(0)},r.a.createElement(b.o,{className:"bi-paginate-simple__btn-icon"})),0===this.props.forcePage?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn bi-btn--flat",disabled:!0},r.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--prev bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage-1)},r.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})),r.a.createElement("span",{className:"bi-paginate-simple__status"},r.a.createElement(o.a,{id:"components.paginate-simple.page-of",values:{current:this.props.forcePage+1,total:e}})),r.a.createElement("span",{className:"bi-paginate-simple__status bi-paginate-simple__status--mobile"},r.a.createElement(o.a,{id:"components.paginate-simple.page",values:{current:this.props.forcePage+1}})),this.props.forcePage===e-1?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},r.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(this.props.forcePage+1)},r.a.createElement(b.d,{className:"bi-paginate-simple__btn-icon"})),this.props.forcePage===e-1?r.a.createElement("button",{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn bi-btn--flat",disabled:!0},r.a.createElement(b.o,{className:"bi-paginate-simple__btn-icon"})):r.a.createElement(m.Link,{className:"bi-paginate-simple__btn bi-paginate-simple__btn--next bi-btn--flat",to:this.props.getPageUrl(e-1)},r.a.createElement(b.o,{className:"bi-paginate-simple__btn-icon"}))):null}}]),a}(r.a.Component)},426:function(e,t,a){},435:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(8),i=a(9),s=a(12),l=a(11),c=a(39),r=a.n(c),o=a(0),m=a.n(o),b=a(36),p=(a(436),function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"bi-limit-selector"},m.a.createElement("span",{className:"bi-limit-selector__label"},this.props.label),this.props.items.map((function(t,a){var n=r()({"bi-btn":!0,"bi-btn--flat":!0,"bi-limit-selector__item":!0,"bi-limit-selector__item--selected":t===e.props.selected});return m.a.createElement(b.Link,{className:n,key:a,to:e.props.getLimitLink(t)},t)})))}}]),a}(m.a.PureComponent))},436:function(e,t,a){},841:function(e,t,a){},842:function(e,t,a){},843:function(e,t,a){},871:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(8),s=a(9),l=a(17),c=a(12),r=a(11),o=a(61),m=a.n(o),b=a(0),p=a.n(b),u=a(107),_=a.n(u),d=a(29),f=a(30),g=a(20),k=(a(841),a(435)),h=a(425),v=a(16),E=a(410),N=a(405),y=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"getAllIssuedTokens",value:function(e,t){var a=t.limit,n=t.offset;return Object(E.a)(e,N.b,"get","https://api.ergoplatform.com/api/v1/assets",{params:{limit:a,offset:n}})}},{key:"getTotalIssuedTokens",value:function(e,t){var a=t.limit;return Object(E.a)(e,N.e,"get","https://api.ergoplatform.com/api/v1/assets",{params:{limit:a}})}},{key:"getIssuedTokensById",value:function(t,a){return Object(E.a)(t,N.c,"get","".concat(e.apiUrl,"/assets/").concat(a,"/issuingBox"))}},{key:"apiUrl",get:function(){return"".concat(v.a.apiUrl)}}]),e}(),O=a(167),j={getTokens:function(e){return function(t){return y.getAllIssuedTokens(t,e).then((function(a){t({payload:{offset:e.offset||0},type:O.c})}))}},getTokensById:function(e){return function(t){return y.getIssuedTokensById(t,e).then((function(e){t({payload:{tokensById:e},type:O.b})})).catch((function(){t({type:O.a})}))}}},x=a(106),P=function(e){return Object(x.getStruct)(N.b)(e)},L=a(57),T=a.n(L),U=a(6),F=(a(842),function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-blocks-table-header bi-blocks-table__row bi-table__row"},p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.id"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.name"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.amount"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.decimals"})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell"},p.a.createElement(d.a,{id:"common.token.description"})))}}]),a}(p.a.Component)),I=Object(U.o)(F),S=(a(843),function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"bi-blocks-table"},this.props.tokens?this.renderTable():null)}},{key:"renderTable",value:function(){return p.a.createElement("div",{className:"bi-blocks-table__body bi-table"},p.a.createElement(I,null),this.props.tokens.map((function(e){return p.a.createElement("div",{className:"bi-blocks-table__row bi-table__row",key:e.id},p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.id"})),p.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:e.id,readOnly:!0})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell  bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.name"})),e.name),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.amount"})),p.a.createElement("input",{className:"bi-tokens-table__input",type:"text",value:T()({integerSeparator:" "})(e.emissionAmount),readOnly:!0})),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.decimals"})),e.decimals),p.a.createElement("div",{className:"bi-blocks-table__cell bi-table__cell bi-tokens-table__cell"},p.a.createElement("div",{className:"bi-blocks-table__cell-name bi-tokens-table__cell-name"},p.a.createElement(d.a,{id:"common.token.description"})),e.description))})))}}]),a}(p.a.Component)),w=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).params=void 0,n.getPageUrl=n.getPageUrl.bind(Object(l.a)(n)),n.getLimitLink=n.getLimitLink.bind(Object(l.a)(n)),n.params=n.getParams(),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.reloadTokens(this.params)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.getParams();JSON.stringify(t)!==JSON.stringify(this.params)&&(this.params=t,this.reloadTokens(this.params))}},{key:"render",value:function(){return p.a.createElement("div",{className:"bi-data g-flex-column g-flex-column__item-fixed"},p.a.createElement(d.a,{id:"common.pages.issued-tokens.title"},(function(e){return p.a.createElement(_.a,null,p.a.createElement("title",null,e))})),p.a.createElement("div",{className:"bi-data__header g-flex-column__item-fixed g-flex"},p.a.createElement("div",{className:"bi-data__title g-flex__item"},p.a.createElement(d.a,{id:"components.issued-tokens.title"}))),this.props.tokens.isFetching&&p.a.createElement("p",{className:"base-text"},"Fetching Data..."),this.props.tokens.data&&0===this.props.tokens.data.total&&p.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},p.a.createElement(d.a,{id:"components.data.wrong-query"})),!this.props.tokens.isFetching&&null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&p.a.createElement("div",{className:"bi-data__body g-flex-column__item-fixed"},p.a.createElement(S,{tokens:this.props.tokens.data.items,isFetching:this.props.tokens.isFetching})),null!==this.props.tokens.data&&this.props.tokens.data.items.length>0&&p.a.createElement("div",{className:"bi-data__footer g-flex-column__item-fixed g-flex"},p.a.createElement("div",{className:"g-flex__item-fixed"},p.a.createElement(k.a,{items:[30,60,120],selected:this.params.limit,label:p.a.createElement(d.a,{id:"components.data.show"}),getLimitLink:this.getLimitLink})),p.a.createElement("div",{className:"g-flex__item-fixed"},p.a.createElement(h.a,{total:this.props.tokens.data.total,limit:this.params.limit,getPageUrl:this.getPageUrl,forcePage:Math.floor(this.props.offset/this.params.limit)}))))}},{key:"getPageUrl",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.offset=e*this.params.limit,"/issued-tokens?".concat(m.a.stringify(t))}},{key:"getLimitLink",value:function(e){var t=m.a.parse(this.props.history.location.search);return t.limit=e,"/issued-tokens?".concat(m.a.stringify(t))}},{key:"reloadTokens",value:function(e){e=Object(n.a)(Object(n.a)(Object(n.a)({},this.params),e),{},{limit:e.limit||30,offset:e.offset||0}),Object.keys(e).forEach((function(t){null===e[t]&&delete e[t]})),this.props.getTokens(e),0===e.offset&&delete e.offset,30===e.limit&&delete e.limit,this.props.history.push("/issued-tokens?".concat(m.a.stringify(e)))}},{key:"getParams",value:function(){var e=m.a.parse(this.props.history.location.search),t=e.offset,a=e.limit;return t=parseInt(t,10),{limit:a=parseInt(a,10)||30,offset:t||0}}}]),a}(p.a.PureComponent),B=Object(f.b)((function(e){return{tokens:P(e),offset:e.tokens.offset}}),(function(e){return Object(g.bindActionCreators)(Object(n.a)({},j),e)}))(w);t.default=B}}]);
//# sourceMappingURL=12.f4e2fe8b.chunk.js.map