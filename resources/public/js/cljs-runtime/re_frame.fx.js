goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38965 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38966 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38966);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___39069 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___39069)){
var new_db_39070 = temp__5804__auto___39069;
var fexpr__38967_39071 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38967_39071.cljs$core$IFn$_invoke$arity$1 ? fexpr__38967_39071.cljs$core$IFn$_invoke$arity$1(new_db_39070) : fexpr__38967_39071.call(null,new_db_39070));
} else {
}

var seq__38972 = cljs.core.seq(effects_without_db);
var chunk__38973 = null;
var count__38974 = (0);
var i__38975 = (0);
while(true){
if((i__38975 < count__38974)){
var vec__38990 = chunk__38973.cljs$core$IIndexed$_nth$arity$2(null,i__38975);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38990,(1),null);
var temp__5802__auto___39072 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39072)){
var effect_fn_39073 = temp__5802__auto___39072;
(effect_fn_39073.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39073.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39073.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39074 = seq__38972;
var G__39075 = chunk__38973;
var G__39076 = count__38974;
var G__39077 = (i__38975 + (1));
seq__38972 = G__39074;
chunk__38973 = G__39075;
count__38974 = G__39076;
i__38975 = G__39077;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38972);
if(temp__5804__auto__){
var seq__38972__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38972__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38972__$1);
var G__39078 = cljs.core.chunk_rest(seq__38972__$1);
var G__39079 = c__5568__auto__;
var G__39080 = cljs.core.count(c__5568__auto__);
var G__39081 = (0);
seq__38972 = G__39078;
chunk__38973 = G__39079;
count__38974 = G__39080;
i__38975 = G__39081;
continue;
} else {
var vec__38993 = cljs.core.first(seq__38972__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38993,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38993,(1),null);
var temp__5802__auto___39082 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39082)){
var effect_fn_39083 = temp__5802__auto___39082;
(effect_fn_39083.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39083.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39083.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39084 = cljs.core.next(seq__38972__$1);
var G__39085 = null;
var G__39086 = (0);
var G__39087 = (0);
seq__38972 = G__39084;
chunk__38973 = G__39085;
count__38974 = G__39086;
i__38975 = G__39087;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38588__auto___39088 = re_frame.interop.now();
var duration__38589__auto___39089 = (end__38588__auto___39088 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38589__auto___39089,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38588__auto___39088);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38965);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___39090 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___39090)){
var new_db_39091 = temp__5804__auto___39090;
var fexpr__38996_39092 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__38996_39092.cljs$core$IFn$_invoke$arity$1 ? fexpr__38996_39092.cljs$core$IFn$_invoke$arity$1(new_db_39091) : fexpr__38996_39092.call(null,new_db_39091));
} else {
}

var seq__38997 = cljs.core.seq(effects_without_db);
var chunk__38998 = null;
var count__38999 = (0);
var i__39000 = (0);
while(true){
if((i__39000 < count__38999)){
var vec__39007 = chunk__38998.cljs$core$IIndexed$_nth$arity$2(null,i__39000);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39007,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39007,(1),null);
var temp__5802__auto___39093 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39093)){
var effect_fn_39094 = temp__5802__auto___39093;
(effect_fn_39094.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39094.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39094.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39095 = seq__38997;
var G__39096 = chunk__38998;
var G__39097 = count__38999;
var G__39098 = (i__39000 + (1));
seq__38997 = G__39095;
chunk__38998 = G__39096;
count__38999 = G__39097;
i__39000 = G__39098;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38997);
if(temp__5804__auto__){
var seq__38997__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38997__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38997__$1);
var G__39099 = cljs.core.chunk_rest(seq__38997__$1);
var G__39100 = c__5568__auto__;
var G__39101 = cljs.core.count(c__5568__auto__);
var G__39102 = (0);
seq__38997 = G__39099;
chunk__38998 = G__39100;
count__38999 = G__39101;
i__39000 = G__39102;
continue;
} else {
var vec__39014 = cljs.core.first(seq__38997__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39014,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39014,(1),null);
var temp__5802__auto___39103 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39103)){
var effect_fn_39104 = temp__5802__auto___39103;
(effect_fn_39104.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39104.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39104.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__39106 = cljs.core.next(seq__38997__$1);
var G__39107 = null;
var G__39108 = (0);
var G__39109 = (0);
seq__38997 = G__39106;
chunk__38998 = G__39107;
count__38999 = G__39108;
i__39000 = G__39109;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39021){
var map__39022 = p__39021;
var map__39022__$1 = cljs.core.__destructure_map(map__39022);
var effect = map__39022__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39022__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39022__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39026 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39027 = null;
var count__39028 = (0);
var i__39029 = (0);
while(true){
if((i__39029 < count__39028)){
var effect = chunk__39027.cljs$core$IIndexed$_nth$arity$2(null,i__39029);
re_frame.fx.dispatch_later(effect);


var G__39110 = seq__39026;
var G__39111 = chunk__39027;
var G__39112 = count__39028;
var G__39113 = (i__39029 + (1));
seq__39026 = G__39110;
chunk__39027 = G__39111;
count__39028 = G__39112;
i__39029 = G__39113;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39026);
if(temp__5804__auto__){
var seq__39026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39026__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39026__$1);
var G__39114 = cljs.core.chunk_rest(seq__39026__$1);
var G__39115 = c__5568__auto__;
var G__39116 = cljs.core.count(c__5568__auto__);
var G__39117 = (0);
seq__39026 = G__39114;
chunk__39027 = G__39115;
count__39028 = G__39116;
i__39029 = G__39117;
continue;
} else {
var effect = cljs.core.first(seq__39026__$1);
re_frame.fx.dispatch_later(effect);


var G__39118 = cljs.core.next(seq__39026__$1);
var G__39119 = null;
var G__39120 = (0);
var G__39121 = (0);
seq__39026 = G__39118;
chunk__39027 = G__39119;
count__39028 = G__39120;
i__39029 = G__39121;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39037 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39038 = null;
var count__39039 = (0);
var i__39040 = (0);
while(true){
if((i__39040 < count__39039)){
var vec__39047 = chunk__39038.cljs$core$IIndexed$_nth$arity$2(null,i__39040);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39047,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___39122 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39122)){
var effect_fn_39123 = temp__5802__auto___39122;
(effect_fn_39123.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39123.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39123.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39124 = seq__39037;
var G__39125 = chunk__39038;
var G__39126 = count__39039;
var G__39127 = (i__39040 + (1));
seq__39037 = G__39124;
chunk__39038 = G__39125;
count__39039 = G__39126;
i__39040 = G__39127;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39037);
if(temp__5804__auto__){
var seq__39037__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39037__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39037__$1);
var G__39128 = cljs.core.chunk_rest(seq__39037__$1);
var G__39129 = c__5568__auto__;
var G__39130 = cljs.core.count(c__5568__auto__);
var G__39131 = (0);
seq__39037 = G__39128;
chunk__39038 = G__39129;
count__39039 = G__39130;
i__39040 = G__39131;
continue;
} else {
var vec__39051 = cljs.core.first(seq__39037__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39051,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___39132 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___39132)){
var effect_fn_39133 = temp__5802__auto___39132;
(effect_fn_39133.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39133.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39133.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39134 = cljs.core.next(seq__39037__$1);
var G__39135 = null;
var G__39136 = (0);
var G__39137 = (0);
seq__39037 = G__39134;
chunk__39038 = G__39135;
count__39039 = G__39136;
i__39040 = G__39137;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39054 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39055 = null;
var count__39056 = (0);
var i__39057 = (0);
while(true){
if((i__39057 < count__39056)){
var event = chunk__39055.cljs$core$IIndexed$_nth$arity$2(null,i__39057);
re_frame.router.dispatch(event);


var G__39138 = seq__39054;
var G__39139 = chunk__39055;
var G__39140 = count__39056;
var G__39141 = (i__39057 + (1));
seq__39054 = G__39138;
chunk__39055 = G__39139;
count__39056 = G__39140;
i__39057 = G__39141;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39054);
if(temp__5804__auto__){
var seq__39054__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39054__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39054__$1);
var G__39142 = cljs.core.chunk_rest(seq__39054__$1);
var G__39143 = c__5568__auto__;
var G__39144 = cljs.core.count(c__5568__auto__);
var G__39145 = (0);
seq__39054 = G__39142;
chunk__39055 = G__39143;
count__39056 = G__39144;
i__39057 = G__39145;
continue;
} else {
var event = cljs.core.first(seq__39054__$1);
re_frame.router.dispatch(event);


var G__39146 = cljs.core.next(seq__39054__$1);
var G__39147 = null;
var G__39148 = (0);
var G__39149 = (0);
seq__39054 = G__39146;
chunk__39055 = G__39147;
count__39056 = G__39148;
i__39057 = G__39149;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39060 = cljs.core.seq(value);
var chunk__39061 = null;
var count__39062 = (0);
var i__39063 = (0);
while(true){
if((i__39063 < count__39062)){
var event = chunk__39061.cljs$core$IIndexed$_nth$arity$2(null,i__39063);
clear_event(event);


var G__39150 = seq__39060;
var G__39151 = chunk__39061;
var G__39152 = count__39062;
var G__39153 = (i__39063 + (1));
seq__39060 = G__39150;
chunk__39061 = G__39151;
count__39062 = G__39152;
i__39063 = G__39153;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39060);
if(temp__5804__auto__){
var seq__39060__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39060__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39060__$1);
var G__39154 = cljs.core.chunk_rest(seq__39060__$1);
var G__39155 = c__5568__auto__;
var G__39156 = cljs.core.count(c__5568__auto__);
var G__39157 = (0);
seq__39060 = G__39154;
chunk__39061 = G__39155;
count__39062 = G__39156;
i__39063 = G__39157;
continue;
} else {
var event = cljs.core.first(seq__39060__$1);
clear_event(event);


var G__39158 = cljs.core.next(seq__39060__$1);
var G__39159 = null;
var G__39160 = (0);
var G__39161 = (0);
seq__39060 = G__39158;
chunk__39061 = G__39159;
count__39062 = G__39160;
i__39063 = G__39161;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39065 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39066 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39066);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38588__auto___39162 = re_frame.interop.now();
var duration__38589__auto___39163 = (end__38588__auto___39162 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38589__auto___39163,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38588__auto___39162);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39065);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
