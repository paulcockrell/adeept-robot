goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34729 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34729(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34746 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34746(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33238 = coll;
var G__33239 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33238,G__33239) : shadow.dom.lazy_native_coll_seq.call(null,G__33238,G__33239));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33325 = arguments.length;
switch (G__33325) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33330 = arguments.length;
switch (G__33330) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33342 = arguments.length;
switch (G__33342) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33347 = arguments.length;
switch (G__33347) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33359 = arguments.length;
switch (G__33359) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33371 = arguments.length;
switch (G__33371) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33381){if((e33381 instanceof Object)){
var e = e33381;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33381;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33404 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33405 = null;
var count__33406 = (0);
var i__33408 = (0);
while(true){
if((i__33408 < count__33406)){
var el = chunk__33405.cljs$core$IIndexed$_nth$arity$2(null,i__33408);
var handler_34818__$1 = ((function (seq__33404,chunk__33405,count__33406,i__33408,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33404,chunk__33405,count__33406,i__33408,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34818__$1);


var G__34820 = seq__33404;
var G__34821 = chunk__33405;
var G__34822 = count__33406;
var G__34823 = (i__33408 + (1));
seq__33404 = G__34820;
chunk__33405 = G__34821;
count__33406 = G__34822;
i__33408 = G__34823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33404);
if(temp__5804__auto__){
var seq__33404__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33404__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33404__$1);
var G__34829 = cljs.core.chunk_rest(seq__33404__$1);
var G__34830 = c__5568__auto__;
var G__34831 = cljs.core.count(c__5568__auto__);
var G__34832 = (0);
seq__33404 = G__34829;
chunk__33405 = G__34830;
count__33406 = G__34831;
i__33408 = G__34832;
continue;
} else {
var el = cljs.core.first(seq__33404__$1);
var handler_34834__$1 = ((function (seq__33404,chunk__33405,count__33406,i__33408,el,seq__33404__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33404,chunk__33405,count__33406,i__33408,el,seq__33404__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34834__$1);


var G__34840 = cljs.core.next(seq__33404__$1);
var G__34841 = null;
var G__34842 = (0);
var G__34843 = (0);
seq__33404 = G__34840;
chunk__33405 = G__34841;
count__33406 = G__34842;
i__33408 = G__34843;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33468 = arguments.length;
switch (G__33468) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33497 = cljs.core.seq(events);
var chunk__33498 = null;
var count__33499 = (0);
var i__33500 = (0);
while(true){
if((i__33500 < count__33499)){
var vec__33527 = chunk__33498.cljs$core$IIndexed$_nth$arity$2(null,i__33500);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33527,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34863 = seq__33497;
var G__34864 = chunk__33498;
var G__34865 = count__33499;
var G__34866 = (i__33500 + (1));
seq__33497 = G__34863;
chunk__33498 = G__34864;
count__33499 = G__34865;
i__33500 = G__34866;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33497);
if(temp__5804__auto__){
var seq__33497__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33497__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33497__$1);
var G__34869 = cljs.core.chunk_rest(seq__33497__$1);
var G__34870 = c__5568__auto__;
var G__34871 = cljs.core.count(c__5568__auto__);
var G__34872 = (0);
seq__33497 = G__34869;
chunk__33498 = G__34870;
count__33499 = G__34871;
i__33500 = G__34872;
continue;
} else {
var vec__33536 = cljs.core.first(seq__33497__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33536,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34879 = cljs.core.next(seq__33497__$1);
var G__34880 = null;
var G__34881 = (0);
var G__34882 = (0);
seq__33497 = G__34879;
chunk__33498 = G__34880;
count__33499 = G__34881;
i__33500 = G__34882;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33551 = cljs.core.seq(styles);
var chunk__33552 = null;
var count__33553 = (0);
var i__33554 = (0);
while(true){
if((i__33554 < count__33553)){
var vec__33574 = chunk__33552.cljs$core$IIndexed$_nth$arity$2(null,i__33554);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34888 = seq__33551;
var G__34889 = chunk__33552;
var G__34890 = count__33553;
var G__34891 = (i__33554 + (1));
seq__33551 = G__34888;
chunk__33552 = G__34889;
count__33553 = G__34890;
i__33554 = G__34891;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33551);
if(temp__5804__auto__){
var seq__33551__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33551__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33551__$1);
var G__34896 = cljs.core.chunk_rest(seq__33551__$1);
var G__34897 = c__5568__auto__;
var G__34898 = cljs.core.count(c__5568__auto__);
var G__34899 = (0);
seq__33551 = G__34896;
chunk__33552 = G__34897;
count__33553 = G__34898;
i__33554 = G__34899;
continue;
} else {
var vec__33585 = cljs.core.first(seq__33551__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34901 = cljs.core.next(seq__33551__$1);
var G__34902 = null;
var G__34903 = (0);
var G__34904 = (0);
seq__33551 = G__34901;
chunk__33552 = G__34902;
count__33553 = G__34903;
i__33554 = G__34904;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33593_34906 = key;
var G__33593_34907__$1 = (((G__33593_34906 instanceof cljs.core.Keyword))?G__33593_34906.fqn:null);
switch (G__33593_34907__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34918 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_34918,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_34918,"aria-");
}
})())){
el.setAttribute(ks_34918,value);
} else {
(el[ks_34918] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33611){
var map__33613 = p__33611;
var map__33613__$1 = cljs.core.__destructure_map(map__33613);
var props = map__33613__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33613__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33614 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33625 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33625,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33625;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33627 = arguments.length;
switch (G__33627) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33644){
var vec__33645 = p__33644;
var seq__33646 = cljs.core.seq(vec__33645);
var first__33647 = cljs.core.first(seq__33646);
var seq__33646__$1 = cljs.core.next(seq__33646);
var nn = first__33647;
var first__33647__$1 = cljs.core.first(seq__33646__$1);
var seq__33646__$2 = cljs.core.next(seq__33646__$1);
var np = first__33647__$1;
var nc = seq__33646__$2;
var node = vec__33645;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33654 = nn;
var G__33655 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33654,G__33655) : create_fn.call(null,G__33654,G__33655));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33656 = nn;
var G__33657 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33656,G__33657) : create_fn.call(null,G__33656,G__33657));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33664 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33664,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33664,(1),null);
var seq__33673_34994 = cljs.core.seq(node_children);
var chunk__33674_34995 = null;
var count__33675_34996 = (0);
var i__33676_34997 = (0);
while(true){
if((i__33676_34997 < count__33675_34996)){
var child_struct_34999 = chunk__33674_34995.cljs$core$IIndexed$_nth$arity$2(null,i__33676_34997);
var children_35000 = shadow.dom.dom_node(child_struct_34999);
if(cljs.core.seq_QMARK_(children_35000)){
var seq__33733_35002 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35000));
var chunk__33735_35003 = null;
var count__33736_35004 = (0);
var i__33737_35005 = (0);
while(true){
if((i__33737_35005 < count__33736_35004)){
var child_35006 = chunk__33735_35003.cljs$core$IIndexed$_nth$arity$2(null,i__33737_35005);
if(cljs.core.truth_(child_35006)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35006);


var G__35008 = seq__33733_35002;
var G__35009 = chunk__33735_35003;
var G__35010 = count__33736_35004;
var G__35011 = (i__33737_35005 + (1));
seq__33733_35002 = G__35008;
chunk__33735_35003 = G__35009;
count__33736_35004 = G__35010;
i__33737_35005 = G__35011;
continue;
} else {
var G__35012 = seq__33733_35002;
var G__35013 = chunk__33735_35003;
var G__35014 = count__33736_35004;
var G__35015 = (i__33737_35005 + (1));
seq__33733_35002 = G__35012;
chunk__33735_35003 = G__35013;
count__33736_35004 = G__35014;
i__33737_35005 = G__35015;
continue;
}
} else {
var temp__5804__auto___35017 = cljs.core.seq(seq__33733_35002);
if(temp__5804__auto___35017){
var seq__33733_35018__$1 = temp__5804__auto___35017;
if(cljs.core.chunked_seq_QMARK_(seq__33733_35018__$1)){
var c__5568__auto___35019 = cljs.core.chunk_first(seq__33733_35018__$1);
var G__35020 = cljs.core.chunk_rest(seq__33733_35018__$1);
var G__35021 = c__5568__auto___35019;
var G__35022 = cljs.core.count(c__5568__auto___35019);
var G__35023 = (0);
seq__33733_35002 = G__35020;
chunk__33735_35003 = G__35021;
count__33736_35004 = G__35022;
i__33737_35005 = G__35023;
continue;
} else {
var child_35028 = cljs.core.first(seq__33733_35018__$1);
if(cljs.core.truth_(child_35028)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35028);


var G__35029 = cljs.core.next(seq__33733_35018__$1);
var G__35030 = null;
var G__35031 = (0);
var G__35032 = (0);
seq__33733_35002 = G__35029;
chunk__33735_35003 = G__35030;
count__33736_35004 = G__35031;
i__33737_35005 = G__35032;
continue;
} else {
var G__35033 = cljs.core.next(seq__33733_35018__$1);
var G__35034 = null;
var G__35035 = (0);
var G__35036 = (0);
seq__33733_35002 = G__35033;
chunk__33735_35003 = G__35034;
count__33736_35004 = G__35035;
i__33737_35005 = G__35036;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35000);
}


var G__35037 = seq__33673_34994;
var G__35038 = chunk__33674_34995;
var G__35039 = count__33675_34996;
var G__35040 = (i__33676_34997 + (1));
seq__33673_34994 = G__35037;
chunk__33674_34995 = G__35038;
count__33675_34996 = G__35039;
i__33676_34997 = G__35040;
continue;
} else {
var temp__5804__auto___35041 = cljs.core.seq(seq__33673_34994);
if(temp__5804__auto___35041){
var seq__33673_35042__$1 = temp__5804__auto___35041;
if(cljs.core.chunked_seq_QMARK_(seq__33673_35042__$1)){
var c__5568__auto___35043 = cljs.core.chunk_first(seq__33673_35042__$1);
var G__35045 = cljs.core.chunk_rest(seq__33673_35042__$1);
var G__35046 = c__5568__auto___35043;
var G__35047 = cljs.core.count(c__5568__auto___35043);
var G__35048 = (0);
seq__33673_34994 = G__35045;
chunk__33674_34995 = G__35046;
count__33675_34996 = G__35047;
i__33676_34997 = G__35048;
continue;
} else {
var child_struct_35050 = cljs.core.first(seq__33673_35042__$1);
var children_35051 = shadow.dom.dom_node(child_struct_35050);
if(cljs.core.seq_QMARK_(children_35051)){
var seq__33752_35053 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35051));
var chunk__33754_35054 = null;
var count__33755_35055 = (0);
var i__33756_35056 = (0);
while(true){
if((i__33756_35056 < count__33755_35055)){
var child_35060 = chunk__33754_35054.cljs$core$IIndexed$_nth$arity$2(null,i__33756_35056);
if(cljs.core.truth_(child_35060)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35060);


var G__35061 = seq__33752_35053;
var G__35062 = chunk__33754_35054;
var G__35064 = count__33755_35055;
var G__35065 = (i__33756_35056 + (1));
seq__33752_35053 = G__35061;
chunk__33754_35054 = G__35062;
count__33755_35055 = G__35064;
i__33756_35056 = G__35065;
continue;
} else {
var G__35066 = seq__33752_35053;
var G__35067 = chunk__33754_35054;
var G__35068 = count__33755_35055;
var G__35069 = (i__33756_35056 + (1));
seq__33752_35053 = G__35066;
chunk__33754_35054 = G__35067;
count__33755_35055 = G__35068;
i__33756_35056 = G__35069;
continue;
}
} else {
var temp__5804__auto___35070__$1 = cljs.core.seq(seq__33752_35053);
if(temp__5804__auto___35070__$1){
var seq__33752_35072__$1 = temp__5804__auto___35070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33752_35072__$1)){
var c__5568__auto___35075 = cljs.core.chunk_first(seq__33752_35072__$1);
var G__35076 = cljs.core.chunk_rest(seq__33752_35072__$1);
var G__35077 = c__5568__auto___35075;
var G__35078 = cljs.core.count(c__5568__auto___35075);
var G__35079 = (0);
seq__33752_35053 = G__35076;
chunk__33754_35054 = G__35077;
count__33755_35055 = G__35078;
i__33756_35056 = G__35079;
continue;
} else {
var child_35080 = cljs.core.first(seq__33752_35072__$1);
if(cljs.core.truth_(child_35080)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35080);


var G__35081 = cljs.core.next(seq__33752_35072__$1);
var G__35082 = null;
var G__35083 = (0);
var G__35084 = (0);
seq__33752_35053 = G__35081;
chunk__33754_35054 = G__35082;
count__33755_35055 = G__35083;
i__33756_35056 = G__35084;
continue;
} else {
var G__35087 = cljs.core.next(seq__33752_35072__$1);
var G__35088 = null;
var G__35089 = (0);
var G__35090 = (0);
seq__33752_35053 = G__35087;
chunk__33754_35054 = G__35088;
count__33755_35055 = G__35089;
i__33756_35056 = G__35090;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35051);
}


var G__35094 = cljs.core.next(seq__33673_35042__$1);
var G__35095 = null;
var G__35096 = (0);
var G__35097 = (0);
seq__33673_34994 = G__35094;
chunk__33674_34995 = G__35095;
count__33675_34996 = G__35096;
i__33676_34997 = G__35097;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33819 = cljs.core.seq(node);
var chunk__33820 = null;
var count__33821 = (0);
var i__33822 = (0);
while(true){
if((i__33822 < count__33821)){
var n = chunk__33820.cljs$core$IIndexed$_nth$arity$2(null,i__33822);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35112 = seq__33819;
var G__35113 = chunk__33820;
var G__35114 = count__33821;
var G__35115 = (i__33822 + (1));
seq__33819 = G__35112;
chunk__33820 = G__35113;
count__33821 = G__35114;
i__33822 = G__35115;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33819);
if(temp__5804__auto__){
var seq__33819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33819__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33819__$1);
var G__35117 = cljs.core.chunk_rest(seq__33819__$1);
var G__35118 = c__5568__auto__;
var G__35119 = cljs.core.count(c__5568__auto__);
var G__35120 = (0);
seq__33819 = G__35117;
chunk__33820 = G__35118;
count__33821 = G__35119;
i__33822 = G__35120;
continue;
} else {
var n = cljs.core.first(seq__33819__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35124 = cljs.core.next(seq__33819__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__33819 = G__35124;
chunk__33820 = G__35126;
count__33821 = G__35127;
i__33822 = G__35128;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33844 = arguments.length;
switch (G__33844) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33846 = arguments.length;
switch (G__33846) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33857 = arguments.length;
switch (G__33857) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35189 = arguments.length;
var i__5770__auto___35190 = (0);
while(true){
if((i__5770__auto___35190 < len__5769__auto___35189)){
args__5775__auto__.push((arguments[i__5770__auto___35190]));

var G__35191 = (i__5770__auto___35190 + (1));
i__5770__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33879_35202 = cljs.core.seq(nodes);
var chunk__33880_35203 = null;
var count__33881_35204 = (0);
var i__33882_35205 = (0);
while(true){
if((i__33882_35205 < count__33881_35204)){
var node_35209 = chunk__33880_35203.cljs$core$IIndexed$_nth$arity$2(null,i__33882_35205);
fragment.appendChild(shadow.dom._to_dom(node_35209));


var G__35215 = seq__33879_35202;
var G__35216 = chunk__33880_35203;
var G__35217 = count__33881_35204;
var G__35218 = (i__33882_35205 + (1));
seq__33879_35202 = G__35215;
chunk__33880_35203 = G__35216;
count__33881_35204 = G__35217;
i__33882_35205 = G__35218;
continue;
} else {
var temp__5804__auto___35219 = cljs.core.seq(seq__33879_35202);
if(temp__5804__auto___35219){
var seq__33879_35221__$1 = temp__5804__auto___35219;
if(cljs.core.chunked_seq_QMARK_(seq__33879_35221__$1)){
var c__5568__auto___35223 = cljs.core.chunk_first(seq__33879_35221__$1);
var G__35224 = cljs.core.chunk_rest(seq__33879_35221__$1);
var G__35225 = c__5568__auto___35223;
var G__35226 = cljs.core.count(c__5568__auto___35223);
var G__35227 = (0);
seq__33879_35202 = G__35224;
chunk__33880_35203 = G__35225;
count__33881_35204 = G__35226;
i__33882_35205 = G__35227;
continue;
} else {
var node_35230 = cljs.core.first(seq__33879_35221__$1);
fragment.appendChild(shadow.dom._to_dom(node_35230));


var G__35232 = cljs.core.next(seq__33879_35221__$1);
var G__35233 = null;
var G__35234 = (0);
var G__35235 = (0);
seq__33879_35202 = G__35232;
chunk__33880_35203 = G__35233;
count__33881_35204 = G__35234;
i__33882_35205 = G__35235;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33872){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33872));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33893_35247 = cljs.core.seq(scripts);
var chunk__33894_35248 = null;
var count__33895_35249 = (0);
var i__33896_35250 = (0);
while(true){
if((i__33896_35250 < count__33895_35249)){
var vec__33905_35255 = chunk__33894_35248.cljs$core$IIndexed$_nth$arity$2(null,i__33896_35250);
var script_tag_35256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33905_35255,(0),null);
var script_body_35257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33905_35255,(1),null);
eval(script_body_35257);


var G__35271 = seq__33893_35247;
var G__35272 = chunk__33894_35248;
var G__35273 = count__33895_35249;
var G__35274 = (i__33896_35250 + (1));
seq__33893_35247 = G__35271;
chunk__33894_35248 = G__35272;
count__33895_35249 = G__35273;
i__33896_35250 = G__35274;
continue;
} else {
var temp__5804__auto___35275 = cljs.core.seq(seq__33893_35247);
if(temp__5804__auto___35275){
var seq__33893_35279__$1 = temp__5804__auto___35275;
if(cljs.core.chunked_seq_QMARK_(seq__33893_35279__$1)){
var c__5568__auto___35280 = cljs.core.chunk_first(seq__33893_35279__$1);
var G__35281 = cljs.core.chunk_rest(seq__33893_35279__$1);
var G__35282 = c__5568__auto___35280;
var G__35283 = cljs.core.count(c__5568__auto___35280);
var G__35284 = (0);
seq__33893_35247 = G__35281;
chunk__33894_35248 = G__35282;
count__33895_35249 = G__35283;
i__33896_35250 = G__35284;
continue;
} else {
var vec__33915_35286 = cljs.core.first(seq__33893_35279__$1);
var script_tag_35287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33915_35286,(0),null);
var script_body_35288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33915_35286,(1),null);
eval(script_body_35288);


var G__35289 = cljs.core.next(seq__33893_35279__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__33893_35247 = G__35289;
chunk__33894_35248 = G__35290;
count__33895_35249 = G__35291;
i__33896_35250 = G__35292;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33924){
var vec__33925 = p__33924;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33925,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33925,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33935 = arguments.length;
switch (G__33935) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33941 = cljs.core.seq(style_keys);
var chunk__33942 = null;
var count__33943 = (0);
var i__33944 = (0);
while(true){
if((i__33944 < count__33943)){
var it = chunk__33942.cljs$core$IIndexed$_nth$arity$2(null,i__33944);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35317 = seq__33941;
var G__35318 = chunk__33942;
var G__35319 = count__33943;
var G__35320 = (i__33944 + (1));
seq__33941 = G__35317;
chunk__33942 = G__35318;
count__33943 = G__35319;
i__33944 = G__35320;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33941);
if(temp__5804__auto__){
var seq__33941__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33941__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33941__$1);
var G__35321 = cljs.core.chunk_rest(seq__33941__$1);
var G__35322 = c__5568__auto__;
var G__35323 = cljs.core.count(c__5568__auto__);
var G__35324 = (0);
seq__33941 = G__35321;
chunk__33942 = G__35322;
count__33943 = G__35323;
i__33944 = G__35324;
continue;
} else {
var it = cljs.core.first(seq__33941__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35325 = cljs.core.next(seq__33941__$1);
var G__35326 = null;
var G__35327 = (0);
var G__35328 = (0);
seq__33941 = G__35325;
chunk__33942 = G__35326;
count__33943 = G__35327;
i__33944 = G__35328;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k33950,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__33981 = k33950;
var G__33981__$1 = (((G__33981 instanceof cljs.core.Keyword))?G__33981.fqn:null);
switch (G__33981__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33950,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__33990){
var vec__33992 = p__33990;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33992,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33949){
var self__ = this;
var G__33949__$1 = this;
return (new cljs.core.RecordIter((0),G__33949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33951,other33952){
var self__ = this;
var this33951__$1 = this;
return (((!((other33952 == null)))) && ((((this33951__$1.constructor === other33952.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33951__$1.x,other33952.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33951__$1.y,other33952.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33951__$1.__extmap,other33952.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k33950){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34061 = k33950;
var G__34061__$1 = (((G__34061 instanceof cljs.core.Keyword))?G__34061.fqn:null);
switch (G__34061__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33950);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__33949){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34062 = cljs.core.keyword_identical_QMARK_;
var expr__34063 = k__5352__auto__;
if(cljs.core.truth_((pred__34062.cljs$core$IFn$_invoke$arity$2 ? pred__34062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34063) : pred__34062.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34063)))){
return (new shadow.dom.Coordinate(G__33949,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34062.cljs$core$IFn$_invoke$arity$2 ? pred__34062.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34063) : pred__34062.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34063)))){
return (new shadow.dom.Coordinate(self__.x,G__33949,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__33949),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__33949){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33949,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33959){
var extmap__5385__auto__ = (function (){var G__34093 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33959,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33959)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34093);
} else {
return G__34093;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33959),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33959),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34106,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34117 = k34106;
var G__34117__$1 = (((G__34117 instanceof cljs.core.Keyword))?G__34117.fqn:null);
switch (G__34117__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34106,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34124){
var vec__34125 = p__34124;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34105){
var self__ = this;
var G__34105__$1 = this;
return (new cljs.core.RecordIter((0),G__34105__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34107,other34108){
var self__ = this;
var this34107__$1 = this;
return (((!((other34108 == null)))) && ((((this34107__$1.constructor === other34108.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34107__$1.w,other34108.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34107__$1.h,other34108.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34107__$1.__extmap,other34108.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34106){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34149 = k34106;
var G__34149__$1 = (((G__34149 instanceof cljs.core.Keyword))?G__34149.fqn:null);
switch (G__34149__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34106);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34105){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34151 = cljs.core.keyword_identical_QMARK_;
var expr__34152 = k__5352__auto__;
if(cljs.core.truth_((pred__34151.cljs$core$IFn$_invoke$arity$2 ? pred__34151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34152) : pred__34151.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34152)))){
return (new shadow.dom.Size(G__34105,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34151.cljs$core$IFn$_invoke$arity$2 ? pred__34151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34152) : pred__34151.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34152)))){
return (new shadow.dom.Size(self__.w,G__34105,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34105),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34105){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34105,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34111){
var extmap__5385__auto__ = (function (){var G__34157 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34111,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34111)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34157);
} else {
return G__34157;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34111),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34111),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__35409 = (i + (1));
var G__35410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35409;
ret = G__35410;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34188){
var vec__34189 = p__34188;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34189,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34198 = arguments.length;
switch (G__34198) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35429 = ps;
var G__35430 = (i + (1));
el__$1 = G__35429;
i = G__35430;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34236 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34236,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34245_35441 = cljs.core.seq(props);
var chunk__34246_35442 = null;
var count__34247_35443 = (0);
var i__34248_35444 = (0);
while(true){
if((i__34248_35444 < count__34247_35443)){
var vec__34266_35448 = chunk__34246_35442.cljs$core$IIndexed$_nth$arity$2(null,i__34248_35444);
var k_35449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266_35448,(0),null);
var v_35450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266_35448,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35449);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35449),v_35450);


var G__35455 = seq__34245_35441;
var G__35456 = chunk__34246_35442;
var G__35457 = count__34247_35443;
var G__35458 = (i__34248_35444 + (1));
seq__34245_35441 = G__35455;
chunk__34246_35442 = G__35456;
count__34247_35443 = G__35457;
i__34248_35444 = G__35458;
continue;
} else {
var temp__5804__auto___35459 = cljs.core.seq(seq__34245_35441);
if(temp__5804__auto___35459){
var seq__34245_35463__$1 = temp__5804__auto___35459;
if(cljs.core.chunked_seq_QMARK_(seq__34245_35463__$1)){
var c__5568__auto___35466 = cljs.core.chunk_first(seq__34245_35463__$1);
var G__35470 = cljs.core.chunk_rest(seq__34245_35463__$1);
var G__35471 = c__5568__auto___35466;
var G__35472 = cljs.core.count(c__5568__auto___35466);
var G__35473 = (0);
seq__34245_35441 = G__35470;
chunk__34246_35442 = G__35471;
count__34247_35443 = G__35472;
i__34248_35444 = G__35473;
continue;
} else {
var vec__34273_35474 = cljs.core.first(seq__34245_35463__$1);
var k_35475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34273_35474,(0),null);
var v_35476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34273_35474,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35475);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35475),v_35476);


var G__35478 = cljs.core.next(seq__34245_35463__$1);
var G__35479 = null;
var G__35480 = (0);
var G__35481 = (0);
seq__34245_35441 = G__35478;
chunk__34246_35442 = G__35479;
count__34247_35443 = G__35480;
i__34248_35444 = G__35481;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34292 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34292,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34292,(1),null);
var seq__34295_35482 = cljs.core.seq(node_children);
var chunk__34297_35483 = null;
var count__34298_35484 = (0);
var i__34299_35485 = (0);
while(true){
if((i__34299_35485 < count__34298_35484)){
var child_struct_35486 = chunk__34297_35483.cljs$core$IIndexed$_nth$arity$2(null,i__34299_35485);
if((!((child_struct_35486 == null)))){
if(typeof child_struct_35486 === 'string'){
var text_35488 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35488),child_struct_35486].join(''));
} else {
var children_35489 = shadow.dom.svg_node(child_struct_35486);
if(cljs.core.seq_QMARK_(children_35489)){
var seq__34424_35491 = cljs.core.seq(children_35489);
var chunk__34426_35492 = null;
var count__34427_35493 = (0);
var i__34428_35494 = (0);
while(true){
if((i__34428_35494 < count__34427_35493)){
var child_35496 = chunk__34426_35492.cljs$core$IIndexed$_nth$arity$2(null,i__34428_35494);
if(cljs.core.truth_(child_35496)){
node.appendChild(child_35496);


var G__35497 = seq__34424_35491;
var G__35498 = chunk__34426_35492;
var G__35499 = count__34427_35493;
var G__35500 = (i__34428_35494 + (1));
seq__34424_35491 = G__35497;
chunk__34426_35492 = G__35498;
count__34427_35493 = G__35499;
i__34428_35494 = G__35500;
continue;
} else {
var G__35501 = seq__34424_35491;
var G__35502 = chunk__34426_35492;
var G__35503 = count__34427_35493;
var G__35504 = (i__34428_35494 + (1));
seq__34424_35491 = G__35501;
chunk__34426_35492 = G__35502;
count__34427_35493 = G__35503;
i__34428_35494 = G__35504;
continue;
}
} else {
var temp__5804__auto___35505 = cljs.core.seq(seq__34424_35491);
if(temp__5804__auto___35505){
var seq__34424_35507__$1 = temp__5804__auto___35505;
if(cljs.core.chunked_seq_QMARK_(seq__34424_35507__$1)){
var c__5568__auto___35508 = cljs.core.chunk_first(seq__34424_35507__$1);
var G__35509 = cljs.core.chunk_rest(seq__34424_35507__$1);
var G__35510 = c__5568__auto___35508;
var G__35511 = cljs.core.count(c__5568__auto___35508);
var G__35512 = (0);
seq__34424_35491 = G__35509;
chunk__34426_35492 = G__35510;
count__34427_35493 = G__35511;
i__34428_35494 = G__35512;
continue;
} else {
var child_35513 = cljs.core.first(seq__34424_35507__$1);
if(cljs.core.truth_(child_35513)){
node.appendChild(child_35513);


var G__35514 = cljs.core.next(seq__34424_35507__$1);
var G__35515 = null;
var G__35516 = (0);
var G__35517 = (0);
seq__34424_35491 = G__35514;
chunk__34426_35492 = G__35515;
count__34427_35493 = G__35516;
i__34428_35494 = G__35517;
continue;
} else {
var G__35518 = cljs.core.next(seq__34424_35507__$1);
var G__35519 = null;
var G__35520 = (0);
var G__35521 = (0);
seq__34424_35491 = G__35518;
chunk__34426_35492 = G__35519;
count__34427_35493 = G__35520;
i__34428_35494 = G__35521;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35489);
}
}


var G__35522 = seq__34295_35482;
var G__35523 = chunk__34297_35483;
var G__35524 = count__34298_35484;
var G__35525 = (i__34299_35485 + (1));
seq__34295_35482 = G__35522;
chunk__34297_35483 = G__35523;
count__34298_35484 = G__35524;
i__34299_35485 = G__35525;
continue;
} else {
var G__35526 = seq__34295_35482;
var G__35527 = chunk__34297_35483;
var G__35528 = count__34298_35484;
var G__35529 = (i__34299_35485 + (1));
seq__34295_35482 = G__35526;
chunk__34297_35483 = G__35527;
count__34298_35484 = G__35528;
i__34299_35485 = G__35529;
continue;
}
} else {
var temp__5804__auto___35531 = cljs.core.seq(seq__34295_35482);
if(temp__5804__auto___35531){
var seq__34295_35533__$1 = temp__5804__auto___35531;
if(cljs.core.chunked_seq_QMARK_(seq__34295_35533__$1)){
var c__5568__auto___35534 = cljs.core.chunk_first(seq__34295_35533__$1);
var G__35535 = cljs.core.chunk_rest(seq__34295_35533__$1);
var G__35536 = c__5568__auto___35534;
var G__35537 = cljs.core.count(c__5568__auto___35534);
var G__35538 = (0);
seq__34295_35482 = G__35535;
chunk__34297_35483 = G__35536;
count__34298_35484 = G__35537;
i__34299_35485 = G__35538;
continue;
} else {
var child_struct_35539 = cljs.core.first(seq__34295_35533__$1);
if((!((child_struct_35539 == null)))){
if(typeof child_struct_35539 === 'string'){
var text_35543 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35543),child_struct_35539].join(''));
} else {
var children_35545 = shadow.dom.svg_node(child_struct_35539);
if(cljs.core.seq_QMARK_(children_35545)){
var seq__34529_35546 = cljs.core.seq(children_35545);
var chunk__34535_35547 = null;
var count__34536_35548 = (0);
var i__34537_35549 = (0);
while(true){
if((i__34537_35549 < count__34536_35548)){
var child_35553 = chunk__34535_35547.cljs$core$IIndexed$_nth$arity$2(null,i__34537_35549);
if(cljs.core.truth_(child_35553)){
node.appendChild(child_35553);


var G__35557 = seq__34529_35546;
var G__35558 = chunk__34535_35547;
var G__35559 = count__34536_35548;
var G__35560 = (i__34537_35549 + (1));
seq__34529_35546 = G__35557;
chunk__34535_35547 = G__35558;
count__34536_35548 = G__35559;
i__34537_35549 = G__35560;
continue;
} else {
var G__35564 = seq__34529_35546;
var G__35565 = chunk__34535_35547;
var G__35566 = count__34536_35548;
var G__35567 = (i__34537_35549 + (1));
seq__34529_35546 = G__35564;
chunk__34535_35547 = G__35565;
count__34536_35548 = G__35566;
i__34537_35549 = G__35567;
continue;
}
} else {
var temp__5804__auto___35568__$1 = cljs.core.seq(seq__34529_35546);
if(temp__5804__auto___35568__$1){
var seq__34529_35569__$1 = temp__5804__auto___35568__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34529_35569__$1)){
var c__5568__auto___35570 = cljs.core.chunk_first(seq__34529_35569__$1);
var G__35571 = cljs.core.chunk_rest(seq__34529_35569__$1);
var G__35572 = c__5568__auto___35570;
var G__35573 = cljs.core.count(c__5568__auto___35570);
var G__35574 = (0);
seq__34529_35546 = G__35571;
chunk__34535_35547 = G__35572;
count__34536_35548 = G__35573;
i__34537_35549 = G__35574;
continue;
} else {
var child_35578 = cljs.core.first(seq__34529_35569__$1);
if(cljs.core.truth_(child_35578)){
node.appendChild(child_35578);


var G__35579 = cljs.core.next(seq__34529_35569__$1);
var G__35580 = null;
var G__35581 = (0);
var G__35582 = (0);
seq__34529_35546 = G__35579;
chunk__34535_35547 = G__35580;
count__34536_35548 = G__35581;
i__34537_35549 = G__35582;
continue;
} else {
var G__35583 = cljs.core.next(seq__34529_35569__$1);
var G__35584 = null;
var G__35585 = (0);
var G__35586 = (0);
seq__34529_35546 = G__35583;
chunk__34535_35547 = G__35584;
count__34536_35548 = G__35585;
i__34537_35549 = G__35586;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35545);
}
}


var G__35588 = cljs.core.next(seq__34295_35533__$1);
var G__35589 = null;
var G__35590 = (0);
var G__35591 = (0);
seq__34295_35482 = G__35588;
chunk__34297_35483 = G__35589;
count__34298_35484 = G__35590;
i__34299_35485 = G__35591;
continue;
} else {
var G__35592 = cljs.core.next(seq__34295_35533__$1);
var G__35593 = null;
var G__35594 = (0);
var G__35595 = (0);
seq__34295_35482 = G__35592;
chunk__34297_35483 = G__35593;
count__34298_35484 = G__35594;
i__34299_35485 = G__35595;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35601 = arguments.length;
var i__5770__auto___35602 = (0);
while(true){
if((i__5770__auto___35602 < len__5769__auto___35601)){
args__5775__auto__.push((arguments[i__5770__auto___35602]));

var G__35603 = (i__5770__auto___35602 + (1));
i__5770__auto___35602 = G__35603;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34645){
var G__34646 = cljs.core.first(seq34645);
var seq34645__$1 = cljs.core.next(seq34645);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34646,seq34645__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34672 = arguments.length;
switch (G__34672) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__29727__auto___35625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_34699){
var state_val_34701 = (state_34699[(1)]);
if((state_val_34701 === (1))){
var state_34699__$1 = state_34699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34699__$1,(2),once_or_cleanup);
} else {
if((state_val_34701 === (2))){
var inst_34696 = (state_34699[(2)]);
var inst_34697 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34699__$1 = (function (){var statearr_34704 = state_34699;
(statearr_34704[(7)] = inst_34696);

return statearr_34704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34699__$1,inst_34697);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29474__auto__ = null;
var shadow$dom$state_machine__29474__auto____0 = (function (){
var statearr_34708 = [null,null,null,null,null,null,null,null];
(statearr_34708[(0)] = shadow$dom$state_machine__29474__auto__);

(statearr_34708[(1)] = (1));

return statearr_34708;
});
var shadow$dom$state_machine__29474__auto____1 = (function (state_34699){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_34699);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e34711){var ex__29477__auto__ = e34711;
var statearr_34712_35637 = state_34699;
(statearr_34712_35637[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_34699[(4)]))){
var statearr_34713_35641 = state_34699;
(statearr_34713_35641[(1)] = cljs.core.first((state_34699[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35642 = state_34699;
state_34699 = G__35642;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
shadow$dom$state_machine__29474__auto__ = function(state_34699){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29474__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29474__auto____1.call(this,state_34699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29474__auto____0;
shadow$dom$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29474__auto____1;
return shadow$dom$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_34715 = f__29728__auto__();
(statearr_34715[(6)] = c__29727__auto___35625);

return statearr_34715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
