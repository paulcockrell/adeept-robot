goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29832){
var map__29833 = p__29832;
var map__29833__$1 = cljs.core.__destructure_map(map__29833);
var runtime = map__29833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30021 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30021)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__29839 = runtime;
var G__29840 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30021);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__29839,G__29840) : shadow.remote.runtime.shared.process.call(null,G__29839,G__29840));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29843,res){
var map__29844 = p__29843;
var map__29844__$1 = cljs.core.__destructure_map(map__29844);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29844__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29844__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29845 = res;
var G__29845__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29845,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29845);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29845__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29845__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29857 = arguments.length;
switch (G__29857) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29862,msg,handlers,timeout_after_ms){
var map__29863 = p__29862;
var map__29863__$1 = cljs.core.__destructure_map(map__29863);
var runtime = map__29863__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30064 = arguments.length;
var i__5770__auto___30065 = (0);
while(true){
if((i__5770__auto___30065 < len__5769__auto___30064)){
args__5775__auto__.push((arguments[i__5770__auto___30065]));

var G__30070 = (i__5770__auto___30065 + (1));
i__5770__auto___30065 = G__30070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29882,ev,args){
var map__29883 = p__29882;
var map__29883__$1 = cljs.core.__destructure_map(map__29883);
var runtime = map__29883__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29883__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29885 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29888 = null;
var count__29889 = (0);
var i__29890 = (0);
while(true){
if((i__29890 < count__29889)){
var ext = chunk__29888.cljs$core$IIndexed$_nth$arity$2(null,i__29890);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30072 = seq__29885;
var G__30073 = chunk__29888;
var G__30074 = count__29889;
var G__30075 = (i__29890 + (1));
seq__29885 = G__30072;
chunk__29888 = G__30073;
count__29889 = G__30074;
i__29890 = G__30075;
continue;
} else {
var G__30077 = seq__29885;
var G__30078 = chunk__29888;
var G__30079 = count__29889;
var G__30080 = (i__29890 + (1));
seq__29885 = G__30077;
chunk__29888 = G__30078;
count__29889 = G__30079;
i__29890 = G__30080;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29885);
if(temp__5804__auto__){
var seq__29885__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29885__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29885__$1);
var G__30081 = cljs.core.chunk_rest(seq__29885__$1);
var G__30082 = c__5568__auto__;
var G__30083 = cljs.core.count(c__5568__auto__);
var G__30084 = (0);
seq__29885 = G__30081;
chunk__29888 = G__30082;
count__29889 = G__30083;
i__29890 = G__30084;
continue;
} else {
var ext = cljs.core.first(seq__29885__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30085 = cljs.core.next(seq__29885__$1);
var G__30086 = null;
var G__30087 = (0);
var G__30088 = (0);
seq__29885 = G__30085;
chunk__29888 = G__30086;
count__29889 = G__30087;
i__29890 = G__30088;
continue;
} else {
var G__30089 = cljs.core.next(seq__29885__$1);
var G__30090 = null;
var G__30091 = (0);
var G__30092 = (0);
seq__29885 = G__30089;
chunk__29888 = G__30090;
count__29889 = G__30091;
i__29890 = G__30092;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29873){
var G__29874 = cljs.core.first(seq29873);
var seq29873__$1 = cljs.core.next(seq29873);
var G__29875 = cljs.core.first(seq29873__$1);
var seq29873__$2 = cljs.core.next(seq29873__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29874,G__29875,seq29873__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29898,p__29899){
var map__29900 = p__29898;
var map__29900__$1 = cljs.core.__destructure_map(map__29900);
var runtime = map__29900__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29900__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29901 = p__29899;
var map__29901__$1 = cljs.core.__destructure_map(map__29901);
var msg = map__29901__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29901__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29902 = cljs.core.deref(state_ref);
var map__29902__$1 = cljs.core.__destructure_map(map__29902);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29902__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29902__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29907,msg){
var map__29908 = p__29907;
var map__29908__$1 = cljs.core.__destructure_map(map__29908);
var runtime = map__29908__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29908__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29915,key,p__29916){
var map__29917 = p__29915;
var map__29917__$1 = cljs.core.__destructure_map(map__29917);
var state = map__29917__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29917__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29918 = p__29916;
var map__29918__$1 = cljs.core.__destructure_map(map__29918);
var spec = map__29918__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29918__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29920,key,spec){
var map__29921 = p__29920;
var map__29921__$1 = cljs.core.__destructure_map(map__29921);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29924_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29924_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29925_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29925_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29926_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29926_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29927_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29927_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29928_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29928_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29944,key){
var map__29947 = p__29944;
var map__29947__$1 = cljs.core.__destructure_map(map__29947);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29962,msg){
var map__29963 = p__29962;
var map__29963__$1 = cljs.core.__destructure_map(map__29963);
var runtime = map__29963__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29963__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29971,p__29972){
var map__29976 = p__29971;
var map__29976__$1 = cljs.core.__destructure_map(map__29976);
var runtime = map__29976__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29976__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29977 = p__29972;
var map__29977__$1 = cljs.core.__destructure_map(map__29977);
var msg = map__29977__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29977__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29985 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29987 = null;
var count__29988 = (0);
var i__29989 = (0);
while(true){
if((i__29989 < count__29988)){
var map__29998 = chunk__29987.cljs$core$IIndexed$_nth$arity$2(null,i__29989);
var map__29998__$1 = cljs.core.__destructure_map(map__29998);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29998__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30152 = seq__29985;
var G__30153 = chunk__29987;
var G__30154 = count__29988;
var G__30155 = (i__29989 + (1));
seq__29985 = G__30152;
chunk__29987 = G__30153;
count__29988 = G__30154;
i__29989 = G__30155;
continue;
} else {
var G__30157 = seq__29985;
var G__30158 = chunk__29987;
var G__30159 = count__29988;
var G__30160 = (i__29989 + (1));
seq__29985 = G__30157;
chunk__29987 = G__30158;
count__29988 = G__30159;
i__29989 = G__30160;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29985);
if(temp__5804__auto__){
var seq__29985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29985__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29985__$1);
var G__30164 = cljs.core.chunk_rest(seq__29985__$1);
var G__30165 = c__5568__auto__;
var G__30166 = cljs.core.count(c__5568__auto__);
var G__30167 = (0);
seq__29985 = G__30164;
chunk__29987 = G__30165;
count__29988 = G__30166;
i__29989 = G__30167;
continue;
} else {
var map__30002 = cljs.core.first(seq__29985__$1);
var map__30002__$1 = cljs.core.__destructure_map(map__30002);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30002__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__30169 = cljs.core.next(seq__29985__$1);
var G__30170 = null;
var G__30171 = (0);
var G__30172 = (0);
seq__29985 = G__30169;
chunk__29987 = G__30170;
count__29988 = G__30171;
i__29989 = G__30172;
continue;
} else {
var G__30173 = cljs.core.next(seq__29985__$1);
var G__30174 = null;
var G__30175 = (0);
var G__30176 = (0);
seq__29985 = G__30173;
chunk__29987 = G__30174;
count__29988 = G__30175;
i__29989 = G__30176;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
