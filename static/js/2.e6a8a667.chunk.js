(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[2],{109:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"i",(function(){return b})),n.d(t,"k",(function(){return _})),n.d(t,"d",(function(){return y})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return E})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return O}));var a=n(106),r=n.n(a),o=n(107),i=n(116),c=n.n(i),u=(n(117),"https://api.sendchinatownlove.com/"),l=u+"sellers/",s=u+"charges",d=u+"gift_cards/",m=u+"participating_sellers/",p=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(l,{params:{locale:g(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(l+t,{params:{locale:g(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,i,u,l){var d,m,p,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=i.email,m=i.name,p=i.idempotency_key,f=i.is_subscribed,e.next=5,c.a.post(s,{is_square:!0,nonce:t,line_items:a,email:d,name:m,seller_id:n,idempotency_key:p,is_subscribed:f,is_distribution:u,campaign_id:l},{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw e}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r,o,i){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get(d+t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.put(d+t,{amount:n}).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get(l+t+"/gift_cards/"+n).then((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function g(e){switch(e){case"cn":return"zh-CN";case"en":default:return"en"}}var v=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://api.sendchinatownlove.com/campaigns/").then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(l+t+"/campaigns").then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://api.sendchinatownlove.com/distributors/"+t).then((function(e){return e})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get(m+t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.get(m+t+"/tickets/"+n).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},112:function(e,t,n){"use strict";var a=n(113);n.o(a,"getCampaigns")&&n.d(t,"getCampaigns",(function(){return a.getCampaigns})),n.o(a,"getCampaignsForMerchant")&&n.d(t,"getCampaignsForMerchant",(function(){return a.getCampaignsForMerchant})),n.o(a,"getDistributor")&&n.d(t,"getDistributor",(function(){return a.getDistributor})),n.o(a,"getSeller")&&n.d(t,"getSeller",(function(){return a.getSeller})),n.o(a,"getSellers")&&n.d(t,"getSellers",(function(){return a.getSellers}));n(121)},113:function(e,t,n){"use strict";var a=n(115);n.o(a,"getCampaigns")&&n.d(t,"getCampaigns",(function(){return a.getCampaigns})),n.o(a,"getCampaignsForMerchant")&&n.d(t,"getCampaignsForMerchant",(function(){return a.getCampaignsForMerchant})),n.o(a,"getDistributor")&&n.d(t,"getDistributor",(function(){return a.getDistributor})),n.o(a,"getSeller")&&n.d(t,"getSeller",(function(){return a.getSeller})),n.o(a,"getSellers")&&n.d(t,"getSellers",(function(){return a.getSellers})),n.o(a,"makeSquarePayment")&&n.d(t,"makeSquarePayment",(function(){return a.makeSquarePayment}));var r=n(109);n.d(t,"getCampaigns",(function(){return r.a})),n.d(t,"getCampaignsForMerchant",(function(){return r.b})),n.d(t,"getDistributor",(function(){return r.c})),n.d(t,"getSeller",(function(){return r.g})),n.d(t,"getSellers",(function(){return r.h})),n.d(t,"makeSquarePayment",(function(){return r.j}))},115:function(e,t){},118:function(e,t,n){e.exports={"button--filled":"styles_button--filled__WxP1d","button--red-filled":"styles_button--red-filled__16Aab","button--outlined":"styles_button--outlined__3j0Xk","button--redfilled":"styles_button--redfilled__2VqFG","modalButton--back":"styles_modalButton--back__2Eg0M","modalButton--outlined":"styles_modalButton--outlined__1_EnJ","modalButton--filled":"styles_modalButton--filled__3Rb0W","modalButton--nonfunctional":"styles_modalButton--nonfunctional__2Njrx","modalButton--selected":"styles_modalButton--selected__7SUUW","modalButton--outline":"styles_modalButton--outline__1OnDM","closeButton--close":"styles_closeButton--close__thSx0","modalForm--form":"styles_modalForm--form__2aHxH","modalInput--input":"styles_modalInput--input__7T1lZ","filterable-table-container":"styles_filterable-table-container__2hexw","header-row":"styles_header-row__3OSF9","filter-container":"styles_filter-container__27XLt","filter-input":"styles_filter-input__2qkxu","clear-filter":"styles_clear-filter__2h8SJ","record-count":"styles_record-count__1bHO0",fa:"styles_fa__3j6hl",active:"styles_active__3G6q6",disabled:"styles_disabled__31b70",amountContainer:"styles_amountContainer__3WST_",selectAmtContainer:"styles_selectAmtContainer__2MM7j",selectAmt:"styles_selectAmt__3faov",separator:"styles_separator__1DAdK",customAmt:"styles_customAmt__5bjih",costPerMeal:"styles_costPerMeal__2mVM9",nextBtn:"styles_nextBtn__2felb",total:"styles_total__3Vbzd",illustrationsContainer:"styles_illustrationsContainer__1Ied5",illustrationLeading:"styles_illustrationLeading__hFCKP",illustrationTrailing:"styles_illustrationTrailing__1K7HA",explantionContainer:"styles_explantionContainer__2rCgX",explanation:"styles_explanation__2yP6R",donationsContainer:"styles_donationsContainer__3fFDi",bold:"styles_bold__1hwij",uppercase:"styles_uppercase__1lbqw",link:"styles_link__aYO5H",description:"styles_description__1ouq5",modalBackground:"styles_modalBackground__iojBx",modalInstructionsGrid:"styles_modalInstructionsGrid__2bPZT",modalStepGrid:"styles_modalStepGrid__32dHO",modalStepText:"styles_modalStepText__2pQc_"}},121:function(e,t,n){"use strict";n(12),n(0)},124:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step1.c58f05a4.svg"},125:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step2.9a0ca5e8.svg"},126:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step3.ad0c5291.svg"},127:function(e,t,n){e.exports=n.p+"static/media/gam_icon_step4.b9832c02.svg"},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="max-width: 599px",r="max-width: 899px"},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return He}));var a=n(4),r=n(106),o=n.n(r),i=n(107),c=n(0),u=n.n(c),l=n(261),s=n(12),d=n(42),m=n(14),p=n(104),f=n(5),h=n(41),b=n.n(h);function _(){var e=Object(a.a)(["\n  font-family: 'Open Sans', sans-serif;\n  font-size: 30px;\n  font-weight: 600;\n"]);return _=function(){return e},e}function y(){var e=Object(a.a)(["\n  position: relative;\n  float: right;\n  right: 0px;\n  bottom: -25px;\n"]);return y=function(){return e},e}function g(){var e=Object(a.a)(["\n  color: red;\n  font-size: 13px;\n"]);return g=function(){return e},e}function v(){var e=Object(a.a)(["\n  width: 250px;\n  border: 1px solid #121212;\n  margin-top: 8px;\n  padding-left: 2em;\n\n  :invalid {\n    border: 1px solid red;\n  }\n\n  @media (max-width: 450px) {\n    width: 100%;\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(a.a)(["\n  position: relative;\n  display: inline;\n\n  :before {\n    content: '$';\n    position: absolute;\n    top: 0;\n    left: 8px;\n    z-index: 1;\n  }\n"]);return x=function(){return e},e}function E(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin: 15px 0px;\n"]);return E=function(){return e},e}function w(){var e=Object(a.a)(["\n  background-color: #f7f7f7;\n  padding: 25px 35px;\n  margin-top: 30px;\n"]);return w=function(){return e},e}function O(){var e=Object(a.a)(["\n  height: 360px;\n"]);return O=function(){return e},e}var C=function(e){var t,n=Object(p.a)().t,a=Object(d.c)().amount,r=Object(c.useState)(!0),o=Object(s.a)(r,2),i=o[0],l=o[1],f=Object(c.useState)(""),h=Object(s.a)(f,2),_=h[0],y=h[1],g=Object(d.b)(),v=function(e,t,n){y(n),l(t),g({type:m.d,payload:e})},x="donation"===e.purchaseType?n("purchase.donation"):n("purchase.voucher");return u.a.createElement(I,{id:"donation-form","data-testid":"Modal Amount"},u.a.createElement(P,null,x," ",e.sellerName),"send-chinatown-love"===e.sellerId&&u.a.createElement("p",null,n("donationPool.description2")),u.a.createElement("p",null,n("paymentProcessing.amount.header")),u.a.createElement(N,null,u.a.createElement("label",{htmlFor:"select-amount"},n("paymentProcessing.amount.label1")),u.a.createElement("br",null),u.a.createElement(j,null,[{value:"10",text:"$10"},{value:"25",text:"$25"},{value:"50",text:"$50"},{value:"100",text:"$100"}].map((function(e){return u.a.createElement("button",{key:e.text,type:"button",className:_===e.text?"modalButton--selected":"modalButton--outlined",onClick:function(t){v(e.value,!1,e.text)}},e.text)}))),u.a.createElement("label",{htmlFor:"custom-amount"},n("paymentProcessing.amount.label2")),u.a.createElement("br",null),u.a.createElement(k,null,u.a.createElement(S,{name:"custom-amount",type:"number",onFocus:function(e){return v("",!0,"")},className:"modalInput--input",onChange:function(e){v(e.target.value,!0,"")},onKeyDown:function(e){return("e"===e.key||"+"===e.key||"-"===e.key||"."===e.key)&&e.preventDefault()},value:i?a:"",min:"5",max:"10000"})),Number(a)<5&&i&&u.a.createElement(T,null,n("paymentProcessing.amount.minimum")," ","gift_card"===e.purchaseType?"voucher":"donation"," ",n("paymentProcessing.amount.amount"),": $5"),Number(a)>1e4&&i&&u.a.createElement(T,null,n("paymentProcessing.amount.maximum")," ","gift_card"===e.purchaseType?"voucher":"donation"," ",n("paymentProcessing.amount.amount"),": $10000")),u.a.createElement(A,{type:"button",className:"modalButton--filled",onClick:function(e){b.a.trackCustom("PaymentNextButtonClick",{amount:a}),e.preventDefault(),g({type:m.e,payload:1})},disabled:Number(a)<5||Number(a)>1e4||(t=a,!/^[0-9]+$/.test(t))},n("paymentProcessing.amount.submit")))},I=f.a.form(O()),N=f.a.div(w()),j=f.a.div(E()),k=f.a.div(x()),S=f.a.input(v()),T=f.a.div(g()),A=f.a.button(y()),P=f.a.div(_()),D=n(111),M=n.n(D),R=n(118),B=n.n(R),F=n(124),L=n.n(F),q=n(125),V=n.n(q),U=n(126),H=n.n(U),G=n(127),X=n.n(G),z=function(){var e=Object(p.a)().t;return u.a.createElement("div",{className:B.a.modalBackground},u.a.createElement("div",{className:B.a.modalInstructionsGrid},[["".concat(e("gamHome.subheading.step1")),"".concat(e("gamHome.subheading.step1Text")),L.a],["".concat(e("gamHome.subheading.step2")),"".concat(e("gamHome.subheading.step2Text")),V.a],["".concat(e("gamHome.subheading.step3")),"".concat(e("gamHome.subheading.step3Text")),H.a],["".concat(e("gamHome.subheading.step4")),"".concat(e("gamHome.subheading.step4Text")),X.a]].map((function(e,t){var n=Object(s.a)(e,3),a=n[0],r=n[1],o=n[2];return W(a,r,o,t)}))))},W=function(e,t,n,a){return u.a.createElement("div",{className:B.a.modalStepGrid,key:a},u.a.createElement("img",{src:n,alt:"icon"}),u.a.createElement("div",{className:B.a.modalStepText},u.a.createElement("p",{className:B.a.uppercase},e),u.a.createElement("p",{className:B.a.bold},t)))},$=function(e){var t=Object(p.a)().t,n=Object(d.b)(),a=Object(c.useState)(1),r=Object(s.a)(a,2),o=r[0],i=r[1],l=function(t,a,r){var o=parseInt(t,10);i(isNaN(o)?0:o);var c=o*e.costPerMeal;n({type:m.d,payload:String(c)})},f=o*e.costPerMeal,h={value:f,text:"$"+f};return Object(c.useEffect)((function(){n({type:m.d,payload:String(f)})}),[]),u.a.createElement("form",{"data-testid":"ModalBuyMeal"},u.a.createElement("div",null,u.a.createElement("h1",null,e.sellerId?t("buyMeal.header")+e.sellerName:t("buyMealPool.header"))),u.a.createElement("p",{className:B.a.description},t("buyMealPool.description.weAre"),u.a.createElement("a",{href:"https://www.apexforyouth.org/",target:"_blank",rel:"noopener noreferrer",className:B.a.link}," APEX for Youth"),",",u.a.createElement("a",{href:"http://www.lajornadany.org/",target:"_blank",rel:"noopener noreferrer",className:B.a.link}," La Jornada Food Pantry"),",",u.a.createElement("a",{href:"https://www.cpc-nyc.org/",target:"_blank",rel:"noopener noreferrer",className:B.a.link}," the Chinese-American Planning Council "),t("buyMealPool.description.andRestaurants"),u.a.createElement("span",{className:B.a.bold}," ",t("buyMealPool.description.allItTakes")," $",e.costPerMeal)),u.a.createElement(z,null),u.a.createElement("div",{className:B.a.amountContainer},u.a.createElement("label",{htmlFor:"select-amount"},t("buyMeal.prompt")),u.a.createElement("br",null),u.a.createElement("div",{className:B.a.selectAmtContainer},u.a.createElement("div",{className:B.a.selectAmt},u.a.createElement("input",{name:"custom-amount",type:"number",onFocus:function(e){return l("")},className:M()(B.a.customAmt,"modalInput--input"),onChange:function(e){l(e.target.value)},value:0===o?"":String(o),placeholder:"# of meals",min:"1"}),u.a.createElement("span",{className:B.a.separator},"\u2715"),u.a.createElement("button",{type:"button",className:M()(B.a.costPerMeal,"modalButton--nonfunctional"),disabled:!0},"$"+e.costPerMeal)),u.a.createElement("label",{className:B.a.total},t("buyMeal.totalLabel")," ",u.a.createElement("b",null,h.text))),u.a.createElement("br",null)),u.a.createElement("button",{type:"button",className:M()(B.a.nextBtn,"modalButton--filled"),onClick:function(e){b.a.trackCustom("GiftMealPaymentNextButtonClick",{numberOfMeals:o}),e.preventDefault(),n({type:m.e,payload:1})},disabled:o<1||o>1e4/e.costPerMeal},t("paymentProcessing.amount.submit")))},K=n(149),Y=n(255),J=n(114);n(128);function Q(){var e=Object(a.a)(["\n  width: 30% !important;\n"]);return Q=function(){return e},e}function Z(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100% !important;\n"]);return Z=function(){return e},e}var ee=function(e){return u.a.createElement("fieldset",{className:"sq-fieldset"},u.a.createElement(J.CreditCardNumberInput,null),u.a.createElement(te,null,u.a.createElement(ne,null,u.a.createElement(J.CreditCardExpirationDateInput,null)),u.a.createElement(ne,null,u.a.createElement(J.CreditCardCVVInput,null)),u.a.createElement(ne,null,u.a.createElement(J.CreditCardPostalCodeInput,null))))},te=f.a.div(Z()),ne=f.a.div(Q()),ae=function(e){var t=e.canSubmit,n=Object(c.useContext)(J.Context),a=Object(c.useState)(!1),r=Object(s.a)(a,1)[0];return r=t,u.a.createElement("button",{type:"button",className:"modalButton--filled",onClick:function(e){b.a.trackCustom("PaymentConfirmButtonClick",{}),e.preventDefault(),n.onCreateNonce()},disabled:!r},"Confirm")},re={ADDRESS_VERIFICATION_FAILURE:"The card issuer declined the request because the postal code is invalid.",ALLOWABLE_PIN_TRIES_EXCEEDED:"The card has exhausted its available pin entry retries set by the card issuer.",BAD_EXPIRATION:"The card expiration date is either missing or incorrectly formatted.",CARDHOLDER_INSUFFICIENT_PERMISSIONS:"The card issuer has declined the transaction due to restrictions on where the card can be used.",CARD_EXPIRED:"The card issuer declined the request because the card is expired.",CARD_PROCESSING_NOT_ENABLED:"The location provided in the API call is not enabled for credit card processing.",CARD_NOT_SUPPORTED:"The card is not supported in the geographic region.",CARD_TOKEN_EXPIRED:"The provided card token (nonce) has expired.",CARD_TOKEN_USED:"The provided card token (nonce) was already used to process payment.",CHIP_INSERTION_REQUIRED:"The card issuer requires reading the card using a chip reader.",CVV_FAILURE:"The card issuer declined the request because the CVV value is invalid.",EXPIRATION_FAILURE:"The card expiration date is either invalid or indicates that the card is expired.",GENERIC_DECLINE:"An unexpected error occurred.",GIFT_CARD_AVAILABLE_AMOUNT:"Voucher does not have sufficient balance for requested amount and tip.",INSUFFICIENT_FUNDS:"This payment source has insufficient funds to cover the payment.",INSUFFICIENT_PERMISSIONS:"This Square account does not have the permissions to accept this payment.",INVALID_ACCOUNT:"The card issuer was not able to locate account on record.",INVALID_CARD_DATA:"Generic error - the provided card data is invalid.",INVALID_EMAIL_ADDRESS:"The provided email address is invalid.",INVALID_EXPIRATION:"The expiration date for the payment card is invalid. For example, it indicates a date in the past.",INVALID_FEES:"The app_fee_money on a payment is too high.",INVALID_LOCATION:"This Square account cannot take payments in the specified region",INVALID_PIN:"The card issuer declined the request because the PIN is invalid.",INVALID_POSTAL_CODE:"The postal code is incorrectly formatted.",MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED:"The card must be swiped, tapped, or dipped.",PAN_FAILURE:"The specified card number is invalid.",PAYMENT_LIMIT_EXCEEDED:"Square declined the request because the payment amount exceeded the processing limit for this merchant.",TEMPORARY_ERROR:"A temporary internal error occurred.",TRANSACTION_LIMIT:"The card issuer has determined the payment amount is either too high or too low.",VOICE_FAILURE:"The card issuer declined the request because the issuer requires voice authorization from the cardholder.",CARD_DECLINED_VERIFICATION_REQUIRED:"This payment requires verification. For more information, see SCA Overview."};var oe=n(113);function ie(){var e=Object(a.a)(["\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  font-weight: 300;\n  padding: 0px 0px 0px 0px;\n  margin: 30px 0px 30px 0px;\n  opacity: 0.7;\n"]);return ie=function(){return e},e}function ce(){var e=Object(a.a)(["\n  font-family: 'Open Sans', sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 18px;\n"]);return ce=function(){return e},e}function ue(){var e=Object(a.a)(["\n  font-family: 'Open Sans', sans-serif;\n  font-size: 32px;\n  font-weight: 600;\n"]);return ue=function(){return e},e}function le(){var e=Object(a.a)(["\n  h3,\n  span,\n  p {\n    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 15px;\n  }\n\n  h3 {\n    font-size: 24px;\n  }\n"]);return le=function(){return e},e}function se(){var e=Object(a.a)(["\n  width: 75px;\n  font-size: 13px;\n  background-color: white;\n"]);return se=function(){return e},e}function de(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return de=function(){return e},e}function me(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  margin-bottom: 10px;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  > span {\n    padding: 9px 9px 9px 0px;\n  }\n"]);return me=function(){return e},e}function pe(){var e=Object(a.a)(["\n  font-size: 14px;\n  color: #373f4a;\n  border: 1px solid #dedede;\n  margin: 5px 0 15px;\n  padding: 27px 15px;\n  width: 100%;\n  border-radius: 5px;\n\n  ::placeholder {\n    color: #cdcdcd;\n  }\n\n  :invalid {\n    color: #fa755a;\n  }\n"]);return pe=function(){return e},e}function fe(){var e=Object(a.a)(["\n  color: #373f4a;\n"]);return fe=function(){return e},e}function he(){var e=Object(a.a)(["\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-transform: uppercase;\n"]);return he=function(){return e},e}function be(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n\n  div {\n    width: 100%;\n  }\n"]);return be=function(){return e},e}var _e=function(e){var t,n,a=e.purchaseType,r=e.sellerId,o=e.sellerName,i=e.idempotencyKey,l=e.costPerMeal,f=e.nonProfitLocationId,h=e.campaignId,b=Object(p.a)().t,_=Object(d.c)().amount,y=Object(d.b)(),g=Object(c.useState)(!1),v=Object(s.a)(g,2),x=v[0],E=v[1],w=Object(c.useState)(!0),O=Object(s.a)(w,2),C=O[0],I=O[1],N=Object(c.useState)(""),j=Object(s.a)(N,2),k=j[0],S=j[1],T=Object(c.useState)(""),A=Object(s.a)(T,2),P=A[0],D=A[1],M=Object(c.useState)([]),R=Object(s.a)(M,2),B=R[0],F=R[1],L=Object(c.useState)(!1),q=Object(s.a)(L,2),V=q[0],U=q[1],H=Number(_)/l,G=H>1?"meals":"meal",X="buy_meal"===a?"(".concat(H," ").concat(G,")"):"";"buy_meal"===a&&"1VHM457EG87XX"===f?(t=null!=="sandbox-sq0idb-2oi4YpjvfwBm6DUdsPtg6g"?"sandbox-sq0idb-2oi4YpjvfwBm6DUdsPtg6g":"",n=null!=="1VHM457EG87XX"?"1VHM457EG87XX":""):(t=null!=="sq0idp-7ElutjGrfi-QPUnXqkRt4w"?"sq0idp-7ElutjGrfi-QPUnXqkRt4w":"",n=null!=="3D0QAW4CSZJWZ"?"3D0QAW4CSZJWZ":"");var z=function(e){switch(a){case"donation":return e?"donation":"Donation";case"gift_card":return e?"voucher purchase":"Voucher purchase";case"buy_meal":return"Gift a Meal purchase";default:return"Donation"}};Object(c.useEffect)((function(){U(x&&k.length>0&&P.length>0&&m.c.test(P))}),[x,k,P]);return u.a.createElement("div",null,u.a.createElement(Ie,null,"Complete your ",z(!0)),u.a.createElement("p",null,"Please add your payment information below"),u.a.createElement(ye,null,u.a.createElement(Ne,null,"Payment Information"),u.a.createElement(ge,null,u.a.createElement(ve,{htmlFor:"name"},"Full Name"),u.a.createElement(xe,{name:"name",type:"text",className:"modalInput--input",onChange:function(e){return S(e.target.value)},value:k,placeholder:"Name"}),u.a.createElement(ve,{htmlFor:"email"},"Email"),u.a.createElement(xe,{name:"email",type:"email",className:"modalInput--input",onChange:function(e){return D(e.target.value)},value:P,placeholder:"Email",pattern:m.c.source,required:!0})),u.a.createElement(Ce,null,u.a.createElement(J.SquarePaymentForm,{sandbox:!1,applicationId:t,locationId:n,cardNonceResponseReceived:function(e,t){if(F([]),!(e&&e.length>0&&e[0])){var n="buy_meal"===a?Object(K.times)((function(){return{amount:100*Number(l),currency:"usd",item_type:"gift_card",quantity:1}}),H):[{amount:100*Number(_),currency:"usd",item_type:a,quantity:1}],o="buy_meal"===a,c={name:k,email:P,nonce:t,idempotency_key:i,is_subscribed:C};return U(!1),Object(oe.makeSquarePayment)(t,r,n,c,o,h).then((function(e){200===e.status&&y({type:m.e,payload:2})})).catch((function(e){if(e.response){var t=[];e.response.data.errors?t=e.response.data.errors:e.response.data.message&&(t=[{code:"GENERIC_DECLINE",detail:e.response.data.message}]);var n=t.length>0?t.map((function(e){return t=re,e.code in t?re[e.code]:e.detail;var t})):[];F(n)}}))}F(e.map((function(e){return e.message})))},formId:"SPF",apiWrapper:""},u.a.createElement(ee,null),u.a.createElement("div",{className:"sq-error-message"},B.map((function(e){return u.a.createElement("li",{key:"sq-error-".concat(e)},e)}))),u.a.createElement("br",null),u.a.createElement(Ne,null,"Checkout details"),u.a.createElement("span",null," ",z(!1)," of"," ",u.a.createElement("b",null,"$",_," ",X)," ","to ",o," "),u.a.createElement("p",null),u.a.createElement(Ee,null,u.a.createElement(Y.a,{value:"checkedA",inputProps:{"aria-label":"Checkbox A"},onClick:function(){return E(!x)},checked:x}),u.a.createElement("span",null,"I agree with the ",u.a.createElement("b",null,"Terms & Conditions"))),u.a.createElement(Ee,null,u.a.createElement(Y.a,{value:"checkedB",inputProps:{"aria-label":"Checkbox B"},onClick:function(){return I(!C)},checked:C}),u.a.createElement("span",null,"I'd like to receive email updates from Send Chinatown Love, such as when the merchant receives my donation/purchase or when a new merchant is onboarded")),u.a.createElement(je,null,function(e){switch("send-chinatown-love"===r&&(e="donation-pool"),e){case"donation":return b("By proceeding with your transaction, you understand that you are\n          making a donation to ".concat(o,". No goods or services were\n          exchanged for this donation."));case"donation-pool":return b("By proceeding with your transaction, you understand that\n          you are making a donation to all merchants partnered with Send Chinatown Love\n          Inc. The full donation pool will be split among these merchants. No goods or\n          services were exchanged for this donation.");case"gift_card":return b("By proceeding with your purchase, you understand that the voucher card\n          is not redeemable for cash and can only be used at ".concat(o,". All\n          purchases are final. In the event that the merchant is no longer open\n          at the time of redemption, Send Chinatown Love Inc. will not be able\n          to refund your purchase. Balance displayed in the voucher may or may not\n          represent the final balance. Final balance information is subject to\n          ").concat(o,"'s most recent records."))}}(a)),u.a.createElement(we,null,u.a.createElement(Oe,{type:"button",className:"modalButton--back",onClick:function(){return y({type:m.e,payload:0})}},"\u1438 Back"),u.a.createElement(ae,{canSubmit:V}))))))},ye=f.a.div(be()),ge=f.a.div(he()),ve=f.a.label(fe()),xe=f.a.input(pe()),Ee=f.a.label(me()),we=f.a.div(de()),Oe=f.a.button(se()),Ce=f.a.div(le()),Ie=f.a.div(ue()),Ne=f.a.div(ce()),je=f.a.div(ie()),ke=n(136),Se=n.n(ke);function Te(){var e=Object(a.a)(["\n  position: relative;\n  margin-top: 35px;\n  float: right;\n  right: 0px;\n"]);return Te=function(){return e},e}function Ae(){var e=Object(a.a)(["\n  position: relative;\n  width: 100%;\n"]);return Ae=function(){return e},e}function Pe(){var e=Object(a.a)(["\n  max-height: 80%;\n  margin-bottom: 25px;\n"]);return Pe=function(){return e},e}var De=function(e){return c.createElement(Me,{"data-testid":"Modal Confirmation"},c.createElement("h2",null,"Thank you!"),c.createElement("p",null,function(){switch(e.purchaseType){case"donation":return"We appreciate your support. We'll let you know when ".concat(e.sellerName," receives your donation!");case"gift_card":return"We appreciate your support. We'll email you your voucher when ".concat(e.sellerName," opens back up!");case"buy_meal":return"We appreciate your support for ".concat(e.sellerName," and for those in need! Please check your email for your receipt.");default:return"Unexpected occurrence."}}()),c.createElement(Re,{src:Se.a,alt:"Logo"}),c.createElement(Be,{className:"modalButton--filled",onClick:function(t){return e.closeModal(t)}},"Finish"))},Me=f.a.div(Pe()),Re=f.a.img(Ae()),Be=f.a.button(Te()),Fe=n(112);function Le(){var e=Object(a.a)(["\n  width: 40px;\n  font-weight: bold;\n  font-size: 30px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n"]);return Le=function(){return e},e}function qe(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"]);return qe=function(){return e},e}function Ve(){var e=Object(a.a)(["\n  overflow-y: scroll;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  padding: 0 50px;\n\n  @media only screen and (max-width: 450px) {\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n  }\n"]);return Ve=function(){return e},e}function Ue(){var e=Object(a.a)(["\n  display: ",";\n  flex-direction: column;\n  margin: 0 auto;\n\n  background-color: white;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 5;\n  padding-bottom: 40px;\n\n  max-height: 85vh;\n  width: 725px;\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);\n  height: 65%;\n\n  @media only screen and (max-width: 799px) {\n    width: 85%;\n  }\n\n  @media only screen and (max-width: 450px) {\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n  }\n"]);return Ue=function(){return e},e}var He=function(e){var t=Object(l.a)(),n=Object(d.c)().modalView,a=Object(d.b)(),r=function(){var t=Object(i.a)(o.a.mark((function t(r){var i,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b.a.trackCustom("ModalCloseButtonClick",{}),r.preventDefault(),2!==n){t.next=11;break}if(t.t0=e.sellerId,!t.t0){t.next=8;break}return t.next=7,Object(Fe.getSeller)(e.sellerId);case 7:t.t0=t.sent;case 8:i=t.t0,c=i.data,a({type:m.g,payload:c.amount_raised});case 11:a({type:m.b,payload:void 0});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement(Ge,{modalView:n},u.a.createElement(ze,null,u.a.createElement(We,{onClick:r},"\xd7")),u.a.createElement(Xe,null,0===n&&"buy_meal"!==e.purchaseType&&u.a.createElement(C,e),0===n&&"buy_meal"===e.purchaseType&&u.a.createElement($,e),1===n&&u.a.createElement(_e,Object.assign({},e,{idempotencyKey:t})),2===n&&u.a.createElement(De,Object.assign({},e,{closeModal:r}))))},Ge=f.a.div(Ue(),(function(e){return e.modalView>-1?"flex":"none"})),Xe=f.a.div(Ve()),ze=f.a.div(qe()),We=f.a.button(Le())},136:function(e,t,n){e.exports=n.p+"static/media/chinatown-logo.f9e716ba.png"}}]);
//# sourceMappingURL=2.e6a8a667.chunk.js.map