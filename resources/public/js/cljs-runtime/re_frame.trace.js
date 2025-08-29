goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38608){
var map__38609 = p__38608;
var map__38609__$1 = cljs.core.__destructure_map(map__38609);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38609__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38610_38637 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38611_38638 = null;
var count__38612_38639 = (0);
var i__38613_38640 = (0);
while(true){
if((i__38613_38640 < count__38612_38639)){
var vec__38624_38641 = chunk__38611_38638.cljs$core$IIndexed$_nth$arity$2(null,i__38613_38640);
var k_38642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38624_38641,(0),null);
var cb_38643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38624_38641,(1),null);
try{var G__38628_38644 = cljs.core.deref(re_frame.trace.traces);
(cb_38643.cljs$core$IFn$_invoke$arity$1 ? cb_38643.cljs$core$IFn$_invoke$arity$1(G__38628_38644) : cb_38643.call(null,G__38628_38644));
}catch (e38627){var e_38645 = e38627;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38642,"while storing",cljs.core.deref(re_frame.trace.traces),e_38645], 0));
}

var G__38646 = seq__38610_38637;
var G__38647 = chunk__38611_38638;
var G__38648 = count__38612_38639;
var G__38649 = (i__38613_38640 + (1));
seq__38610_38637 = G__38646;
chunk__38611_38638 = G__38647;
count__38612_38639 = G__38648;
i__38613_38640 = G__38649;
continue;
} else {
var temp__5804__auto___38650 = cljs.core.seq(seq__38610_38637);
if(temp__5804__auto___38650){
var seq__38610_38651__$1 = temp__5804__auto___38650;
if(cljs.core.chunked_seq_QMARK_(seq__38610_38651__$1)){
var c__5568__auto___38652 = cljs.core.chunk_first(seq__38610_38651__$1);
var G__38653 = cljs.core.chunk_rest(seq__38610_38651__$1);
var G__38654 = c__5568__auto___38652;
var G__38655 = cljs.core.count(c__5568__auto___38652);
var G__38656 = (0);
seq__38610_38637 = G__38653;
chunk__38611_38638 = G__38654;
count__38612_38639 = G__38655;
i__38613_38640 = G__38656;
continue;
} else {
var vec__38629_38657 = cljs.core.first(seq__38610_38651__$1);
var k_38658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38629_38657,(0),null);
var cb_38659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38629_38657,(1),null);
try{var G__38633_38660 = cljs.core.deref(re_frame.trace.traces);
(cb_38659.cljs$core$IFn$_invoke$arity$1 ? cb_38659.cljs$core$IFn$_invoke$arity$1(G__38633_38660) : cb_38659.call(null,G__38633_38660));
}catch (e38632){var e_38661 = e38632;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38658,"while storing",cljs.core.deref(re_frame.trace.traces),e_38661], 0));
}

var G__38662 = cljs.core.next(seq__38610_38651__$1);
var G__38663 = null;
var G__38664 = (0);
var G__38665 = (0);
seq__38610_38637 = G__38662;
chunk__38611_38638 = G__38663;
count__38612_38639 = G__38664;
i__38613_38640 = G__38665;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
