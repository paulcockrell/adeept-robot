goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37423 = arguments.length;
var i__5770__auto___37424 = (0);
while(true){
if((i__5770__auto___37424 < len__5769__auto___37423)){
args__5775__auto__.push((arguments[i__5770__auto___37424]));

var G__37425 = (i__5770__auto___37424 + (1));
i__5770__auto___37424 = G__37425;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36784){
var G__36785 = cljs.core.first(seq36784);
var seq36784__$1 = cljs.core.next(seq36784);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36785,seq36784__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36787 = cljs.core.seq(sources);
var chunk__36788 = null;
var count__36789 = (0);
var i__36790 = (0);
while(true){
if((i__36790 < count__36789)){
var map__36796 = chunk__36788.cljs$core$IIndexed$_nth$arity$2(null,i__36790);
var map__36796__$1 = cljs.core.__destructure_map(map__36796);
var src = map__36796__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36796__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36797){var e_37426 = e36797;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37426);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37426.message)].join('')));
}

var G__37427 = seq__36787;
var G__37428 = chunk__36788;
var G__37429 = count__36789;
var G__37430 = (i__36790 + (1));
seq__36787 = G__37427;
chunk__36788 = G__37428;
count__36789 = G__37429;
i__36790 = G__37430;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36787);
if(temp__5804__auto__){
var seq__36787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36787__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36787__$1);
var G__37431 = cljs.core.chunk_rest(seq__36787__$1);
var G__37432 = c__5568__auto__;
var G__37433 = cljs.core.count(c__5568__auto__);
var G__37434 = (0);
seq__36787 = G__37431;
chunk__36788 = G__37432;
count__36789 = G__37433;
i__36790 = G__37434;
continue;
} else {
var map__36798 = cljs.core.first(seq__36787__$1);
var map__36798__$1 = cljs.core.__destructure_map(map__36798);
var src = map__36798__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36798__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36798__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36798__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36798__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36799){var e_37435 = e36799;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37435);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37435.message)].join('')));
}

var G__37436 = cljs.core.next(seq__36787__$1);
var G__37437 = null;
var G__37438 = (0);
var G__37439 = (0);
seq__36787 = G__37436;
chunk__36788 = G__37437;
count__36789 = G__37438;
i__36790 = G__37439;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36807 = cljs.core.seq(js_requires);
var chunk__36808 = null;
var count__36809 = (0);
var i__36810 = (0);
while(true){
if((i__36810 < count__36809)){
var js_ns = chunk__36808.cljs$core$IIndexed$_nth$arity$2(null,i__36810);
var require_str_37440 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37440);


var G__37441 = seq__36807;
var G__37442 = chunk__36808;
var G__37443 = count__36809;
var G__37444 = (i__36810 + (1));
seq__36807 = G__37441;
chunk__36808 = G__37442;
count__36809 = G__37443;
i__36810 = G__37444;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36807);
if(temp__5804__auto__){
var seq__36807__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36807__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36807__$1);
var G__37445 = cljs.core.chunk_rest(seq__36807__$1);
var G__37446 = c__5568__auto__;
var G__37447 = cljs.core.count(c__5568__auto__);
var G__37448 = (0);
seq__36807 = G__37445;
chunk__36808 = G__37446;
count__36809 = G__37447;
i__36810 = G__37448;
continue;
} else {
var js_ns = cljs.core.first(seq__36807__$1);
var require_str_37449 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37449);


var G__37450 = cljs.core.next(seq__36807__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__36807 = G__37450;
chunk__36808 = G__37451;
count__36809 = G__37452;
i__36810 = G__37453;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36823){
var map__36824 = p__36823;
var map__36824__$1 = cljs.core.__destructure_map(map__36824);
var msg = map__36824__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36824__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36824__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36825(s__36826){
return (new cljs.core.LazySeq(null,(function (){
var s__36826__$1 = s__36826;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36826__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36831 = cljs.core.first(xs__6360__auto__);
var map__36831__$1 = cljs.core.__destructure_map(map__36831);
var src = map__36831__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36831__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36831__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36826__$1,map__36831,map__36831__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36824,map__36824__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36825_$_iter__36827(s__36828){
return (new cljs.core.LazySeq(null,((function (s__36826__$1,map__36831,map__36831__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36824,map__36824__$1,msg,info,reload_info){
return (function (){
var s__36828__$1 = s__36828;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36828__$1);
if(temp__5804__auto____$1){
var s__36828__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36828__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36828__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36830 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36829 = (0);
while(true){
if((i__36829 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36829);
cljs.core.chunk_append(b__36830,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37457 = (i__36829 + (1));
i__36829 = G__37457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36830),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36825_$_iter__36827(cljs.core.chunk_rest(s__36828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36830),null);
}
} else {
var warning = cljs.core.first(s__36828__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36825_$_iter__36827(cljs.core.rest(s__36828__$2)));
}
} else {
return null;
}
break;
}
});})(s__36826__$1,map__36831,map__36831__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36824,map__36824__$1,msg,info,reload_info))
,null,null));
});})(s__36826__$1,map__36831,map__36831__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36824,map__36824__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36825(cljs.core.rest(s__36826__$1)));
} else {
var G__37460 = cljs.core.rest(s__36826__$1);
s__36826__$1 = G__37460;
continue;
}
} else {
var G__37461 = cljs.core.rest(s__36826__$1);
s__36826__$1 = G__37461;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36835_37462 = cljs.core.seq(warnings);
var chunk__36836_37463 = null;
var count__36837_37464 = (0);
var i__36838_37465 = (0);
while(true){
if((i__36838_37465 < count__36837_37464)){
var map__36855_37466 = chunk__36836_37463.cljs$core$IIndexed$_nth$arity$2(null,i__36838_37465);
var map__36855_37467__$1 = cljs.core.__destructure_map(map__36855_37466);
var w_37468 = map__36855_37467__$1;
var msg_37469__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855_37467__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855_37467__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855_37467__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36855_37467__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37472)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37470),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37471),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37469__$1)].join(''));


var G__37473 = seq__36835_37462;
var G__37474 = chunk__36836_37463;
var G__37475 = count__36837_37464;
var G__37476 = (i__36838_37465 + (1));
seq__36835_37462 = G__37473;
chunk__36836_37463 = G__37474;
count__36837_37464 = G__37475;
i__36838_37465 = G__37476;
continue;
} else {
var temp__5804__auto___37477 = cljs.core.seq(seq__36835_37462);
if(temp__5804__auto___37477){
var seq__36835_37478__$1 = temp__5804__auto___37477;
if(cljs.core.chunked_seq_QMARK_(seq__36835_37478__$1)){
var c__5568__auto___37479 = cljs.core.chunk_first(seq__36835_37478__$1);
var G__37480 = cljs.core.chunk_rest(seq__36835_37478__$1);
var G__37481 = c__5568__auto___37479;
var G__37482 = cljs.core.count(c__5568__auto___37479);
var G__37483 = (0);
seq__36835_37462 = G__37480;
chunk__36836_37463 = G__37481;
count__36837_37464 = G__37482;
i__36838_37465 = G__37483;
continue;
} else {
var map__36860_37484 = cljs.core.first(seq__36835_37478__$1);
var map__36860_37485__$1 = cljs.core.__destructure_map(map__36860_37484);
var w_37486 = map__36860_37485__$1;
var msg_37487__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860_37485__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860_37485__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860_37485__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860_37485__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37490)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37488),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37489),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37487__$1)].join(''));


var G__37491 = cljs.core.next(seq__36835_37478__$1);
var G__37492 = null;
var G__37493 = (0);
var G__37494 = (0);
seq__36835_37462 = G__37491;
chunk__36836_37463 = G__37492;
count__36837_37464 = G__37493;
i__36838_37465 = G__37494;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36822_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36822_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36861){
var map__36862 = p__36861;
var map__36862__$1 = cljs.core.__destructure_map(map__36862);
var msg = map__36862__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36862__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36863 = cljs.core.seq(updates);
var chunk__36865 = null;
var count__36866 = (0);
var i__36867 = (0);
while(true){
if((i__36867 < count__36866)){
var path = chunk__36865.cljs$core$IIndexed$_nth$arity$2(null,i__36867);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37058_37497 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37062_37498 = null;
var count__37063_37499 = (0);
var i__37064_37500 = (0);
while(true){
if((i__37064_37500 < count__37063_37499)){
var node_37501 = chunk__37062_37498.cljs$core$IIndexed$_nth$arity$2(null,i__37064_37500);
if(cljs.core.not(node_37501.shadow$old)){
var path_match_37502 = shadow.cljs.devtools.client.browser.match_paths(node_37501.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37502)){
var new_link_37503 = (function (){var G__37120 = node_37501.cloneNode(true);
G__37120.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37502),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37120;
})();
(node_37501.shadow$old = true);

(new_link_37503.onload = ((function (seq__37058_37497,chunk__37062_37498,count__37063_37499,i__37064_37500,seq__36863,chunk__36865,count__36866,i__36867,new_link_37503,path_match_37502,node_37501,path,map__36862,map__36862__$1,msg,updates,reload_info){
return (function (e){
var seq__37123_37504 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37125_37505 = null;
var count__37126_37506 = (0);
var i__37127_37507 = (0);
while(true){
if((i__37127_37507 < count__37126_37506)){
var map__37137_37508 = chunk__37125_37505.cljs$core$IIndexed$_nth$arity$2(null,i__37127_37507);
var map__37137_37509__$1 = cljs.core.__destructure_map(map__37137_37508);
var task_37510 = map__37137_37509__$1;
var fn_str_37511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137_37509__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137_37509__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37513 = goog.getObjectByName(fn_str_37511,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37512)].join(''));

(fn_obj_37513.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37513.cljs$core$IFn$_invoke$arity$2(path,new_link_37503) : fn_obj_37513.call(null,path,new_link_37503));


var G__37514 = seq__37123_37504;
var G__37515 = chunk__37125_37505;
var G__37516 = count__37126_37506;
var G__37517 = (i__37127_37507 + (1));
seq__37123_37504 = G__37514;
chunk__37125_37505 = G__37515;
count__37126_37506 = G__37516;
i__37127_37507 = G__37517;
continue;
} else {
var temp__5804__auto___37518 = cljs.core.seq(seq__37123_37504);
if(temp__5804__auto___37518){
var seq__37123_37519__$1 = temp__5804__auto___37518;
if(cljs.core.chunked_seq_QMARK_(seq__37123_37519__$1)){
var c__5568__auto___37520 = cljs.core.chunk_first(seq__37123_37519__$1);
var G__37521 = cljs.core.chunk_rest(seq__37123_37519__$1);
var G__37522 = c__5568__auto___37520;
var G__37523 = cljs.core.count(c__5568__auto___37520);
var G__37524 = (0);
seq__37123_37504 = G__37521;
chunk__37125_37505 = G__37522;
count__37126_37506 = G__37523;
i__37127_37507 = G__37524;
continue;
} else {
var map__37150_37525 = cljs.core.first(seq__37123_37519__$1);
var map__37150_37526__$1 = cljs.core.__destructure_map(map__37150_37525);
var task_37527 = map__37150_37526__$1;
var fn_str_37528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150_37526__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37150_37526__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37530 = goog.getObjectByName(fn_str_37528,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37529)].join(''));

(fn_obj_37530.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37530.cljs$core$IFn$_invoke$arity$2(path,new_link_37503) : fn_obj_37530.call(null,path,new_link_37503));


var G__37531 = cljs.core.next(seq__37123_37519__$1);
var G__37532 = null;
var G__37533 = (0);
var G__37534 = (0);
seq__37123_37504 = G__37531;
chunk__37125_37505 = G__37532;
count__37126_37506 = G__37533;
i__37127_37507 = G__37534;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37501);
});})(seq__37058_37497,chunk__37062_37498,count__37063_37499,i__37064_37500,seq__36863,chunk__36865,count__36866,i__36867,new_link_37503,path_match_37502,node_37501,path,map__36862,map__36862__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37502], 0));

goog.dom.insertSiblingAfter(new_link_37503,node_37501);


var G__37535 = seq__37058_37497;
var G__37536 = chunk__37062_37498;
var G__37537 = count__37063_37499;
var G__37538 = (i__37064_37500 + (1));
seq__37058_37497 = G__37535;
chunk__37062_37498 = G__37536;
count__37063_37499 = G__37537;
i__37064_37500 = G__37538;
continue;
} else {
var G__37539 = seq__37058_37497;
var G__37540 = chunk__37062_37498;
var G__37541 = count__37063_37499;
var G__37542 = (i__37064_37500 + (1));
seq__37058_37497 = G__37539;
chunk__37062_37498 = G__37540;
count__37063_37499 = G__37541;
i__37064_37500 = G__37542;
continue;
}
} else {
var G__37543 = seq__37058_37497;
var G__37544 = chunk__37062_37498;
var G__37545 = count__37063_37499;
var G__37546 = (i__37064_37500 + (1));
seq__37058_37497 = G__37543;
chunk__37062_37498 = G__37544;
count__37063_37499 = G__37545;
i__37064_37500 = G__37546;
continue;
}
} else {
var temp__5804__auto___37547 = cljs.core.seq(seq__37058_37497);
if(temp__5804__auto___37547){
var seq__37058_37548__$1 = temp__5804__auto___37547;
if(cljs.core.chunked_seq_QMARK_(seq__37058_37548__$1)){
var c__5568__auto___37551 = cljs.core.chunk_first(seq__37058_37548__$1);
var G__37552 = cljs.core.chunk_rest(seq__37058_37548__$1);
var G__37553 = c__5568__auto___37551;
var G__37554 = cljs.core.count(c__5568__auto___37551);
var G__37555 = (0);
seq__37058_37497 = G__37552;
chunk__37062_37498 = G__37553;
count__37063_37499 = G__37554;
i__37064_37500 = G__37555;
continue;
} else {
var node_37556 = cljs.core.first(seq__37058_37548__$1);
if(cljs.core.not(node_37556.shadow$old)){
var path_match_37557 = shadow.cljs.devtools.client.browser.match_paths(node_37556.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37557)){
var new_link_37558 = (function (){var G__37160 = node_37556.cloneNode(true);
G__37160.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37557),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37160;
})();
(node_37556.shadow$old = true);

(new_link_37558.onload = ((function (seq__37058_37497,chunk__37062_37498,count__37063_37499,i__37064_37500,seq__36863,chunk__36865,count__36866,i__36867,new_link_37558,path_match_37557,node_37556,seq__37058_37548__$1,temp__5804__auto___37547,path,map__36862,map__36862__$1,msg,updates,reload_info){
return (function (e){
var seq__37169_37559 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37171_37560 = null;
var count__37172_37561 = (0);
var i__37173_37562 = (0);
while(true){
if((i__37173_37562 < count__37172_37561)){
var map__37203_37563 = chunk__37171_37560.cljs$core$IIndexed$_nth$arity$2(null,i__37173_37562);
var map__37203_37564__$1 = cljs.core.__destructure_map(map__37203_37563);
var task_37565 = map__37203_37564__$1;
var fn_str_37566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203_37564__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203_37564__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37568 = goog.getObjectByName(fn_str_37566,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37567)].join(''));

(fn_obj_37568.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37568.cljs$core$IFn$_invoke$arity$2(path,new_link_37558) : fn_obj_37568.call(null,path,new_link_37558));


var G__37569 = seq__37169_37559;
var G__37570 = chunk__37171_37560;
var G__37571 = count__37172_37561;
var G__37572 = (i__37173_37562 + (1));
seq__37169_37559 = G__37569;
chunk__37171_37560 = G__37570;
count__37172_37561 = G__37571;
i__37173_37562 = G__37572;
continue;
} else {
var temp__5804__auto___37573__$1 = cljs.core.seq(seq__37169_37559);
if(temp__5804__auto___37573__$1){
var seq__37169_37574__$1 = temp__5804__auto___37573__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37169_37574__$1)){
var c__5568__auto___37575 = cljs.core.chunk_first(seq__37169_37574__$1);
var G__37576 = cljs.core.chunk_rest(seq__37169_37574__$1);
var G__37577 = c__5568__auto___37575;
var G__37578 = cljs.core.count(c__5568__auto___37575);
var G__37579 = (0);
seq__37169_37559 = G__37576;
chunk__37171_37560 = G__37577;
count__37172_37561 = G__37578;
i__37173_37562 = G__37579;
continue;
} else {
var map__37253_37580 = cljs.core.first(seq__37169_37574__$1);
var map__37253_37581__$1 = cljs.core.__destructure_map(map__37253_37580);
var task_37582 = map__37253_37581__$1;
var fn_str_37583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253_37581__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253_37581__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37585 = goog.getObjectByName(fn_str_37583,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37584)].join(''));

(fn_obj_37585.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37585.cljs$core$IFn$_invoke$arity$2(path,new_link_37558) : fn_obj_37585.call(null,path,new_link_37558));


var G__37586 = cljs.core.next(seq__37169_37574__$1);
var G__37587 = null;
var G__37588 = (0);
var G__37589 = (0);
seq__37169_37559 = G__37586;
chunk__37171_37560 = G__37587;
count__37172_37561 = G__37588;
i__37173_37562 = G__37589;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37556);
});})(seq__37058_37497,chunk__37062_37498,count__37063_37499,i__37064_37500,seq__36863,chunk__36865,count__36866,i__36867,new_link_37558,path_match_37557,node_37556,seq__37058_37548__$1,temp__5804__auto___37547,path,map__36862,map__36862__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37557], 0));

goog.dom.insertSiblingAfter(new_link_37558,node_37556);


var G__37590 = cljs.core.next(seq__37058_37548__$1);
var G__37591 = null;
var G__37592 = (0);
var G__37593 = (0);
seq__37058_37497 = G__37590;
chunk__37062_37498 = G__37591;
count__37063_37499 = G__37592;
i__37064_37500 = G__37593;
continue;
} else {
var G__37594 = cljs.core.next(seq__37058_37548__$1);
var G__37595 = null;
var G__37596 = (0);
var G__37597 = (0);
seq__37058_37497 = G__37594;
chunk__37062_37498 = G__37595;
count__37063_37499 = G__37596;
i__37064_37500 = G__37597;
continue;
}
} else {
var G__37598 = cljs.core.next(seq__37058_37548__$1);
var G__37599 = null;
var G__37600 = (0);
var G__37601 = (0);
seq__37058_37497 = G__37598;
chunk__37062_37498 = G__37599;
count__37063_37499 = G__37600;
i__37064_37500 = G__37601;
continue;
}
}
} else {
}
}
break;
}


var G__37602 = seq__36863;
var G__37603 = chunk__36865;
var G__37604 = count__36866;
var G__37605 = (i__36867 + (1));
seq__36863 = G__37602;
chunk__36865 = G__37603;
count__36866 = G__37604;
i__36867 = G__37605;
continue;
} else {
var G__37606 = seq__36863;
var G__37607 = chunk__36865;
var G__37608 = count__36866;
var G__37609 = (i__36867 + (1));
seq__36863 = G__37606;
chunk__36865 = G__37607;
count__36866 = G__37608;
i__36867 = G__37609;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36863);
if(temp__5804__auto__){
var seq__36863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36863__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36863__$1);
var G__37611 = cljs.core.chunk_rest(seq__36863__$1);
var G__37612 = c__5568__auto__;
var G__37613 = cljs.core.count(c__5568__auto__);
var G__37614 = (0);
seq__36863 = G__37611;
chunk__36865 = G__37612;
count__36866 = G__37613;
i__36867 = G__37614;
continue;
} else {
var path = cljs.core.first(seq__36863__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37273_37615 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37277_37616 = null;
var count__37278_37617 = (0);
var i__37279_37618 = (0);
while(true){
if((i__37279_37618 < count__37278_37617)){
var node_37619 = chunk__37277_37616.cljs$core$IIndexed$_nth$arity$2(null,i__37279_37618);
if(cljs.core.not(node_37619.shadow$old)){
var path_match_37620 = shadow.cljs.devtools.client.browser.match_paths(node_37619.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37620)){
var new_link_37621 = (function (){var G__37339 = node_37619.cloneNode(true);
G__37339.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37620),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37339;
})();
(node_37619.shadow$old = true);

(new_link_37621.onload = ((function (seq__37273_37615,chunk__37277_37616,count__37278_37617,i__37279_37618,seq__36863,chunk__36865,count__36866,i__36867,new_link_37621,path_match_37620,node_37619,path,seq__36863__$1,temp__5804__auto__,map__36862,map__36862__$1,msg,updates,reload_info){
return (function (e){
var seq__37342_37622 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37344_37623 = null;
var count__37345_37624 = (0);
var i__37346_37625 = (0);
while(true){
if((i__37346_37625 < count__37345_37624)){
var map__37352_37627 = chunk__37344_37623.cljs$core$IIndexed$_nth$arity$2(null,i__37346_37625);
var map__37352_37628__$1 = cljs.core.__destructure_map(map__37352_37627);
var task_37629 = map__37352_37628__$1;
var fn_str_37630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352_37628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352_37628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37632 = goog.getObjectByName(fn_str_37630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37631)].join(''));

(fn_obj_37632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37632.cljs$core$IFn$_invoke$arity$2(path,new_link_37621) : fn_obj_37632.call(null,path,new_link_37621));


var G__37635 = seq__37342_37622;
var G__37636 = chunk__37344_37623;
var G__37637 = count__37345_37624;
var G__37638 = (i__37346_37625 + (1));
seq__37342_37622 = G__37635;
chunk__37344_37623 = G__37636;
count__37345_37624 = G__37637;
i__37346_37625 = G__37638;
continue;
} else {
var temp__5804__auto___37639__$1 = cljs.core.seq(seq__37342_37622);
if(temp__5804__auto___37639__$1){
var seq__37342_37640__$1 = temp__5804__auto___37639__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37342_37640__$1)){
var c__5568__auto___37641 = cljs.core.chunk_first(seq__37342_37640__$1);
var G__37642 = cljs.core.chunk_rest(seq__37342_37640__$1);
var G__37643 = c__5568__auto___37641;
var G__37644 = cljs.core.count(c__5568__auto___37641);
var G__37645 = (0);
seq__37342_37622 = G__37642;
chunk__37344_37623 = G__37643;
count__37345_37624 = G__37644;
i__37346_37625 = G__37645;
continue;
} else {
var map__37354_37646 = cljs.core.first(seq__37342_37640__$1);
var map__37354_37647__$1 = cljs.core.__destructure_map(map__37354_37646);
var task_37648 = map__37354_37647__$1;
var fn_str_37650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37354_37647__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37354_37647__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37654 = goog.getObjectByName(fn_str_37650,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37653)].join(''));

(fn_obj_37654.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37654.cljs$core$IFn$_invoke$arity$2(path,new_link_37621) : fn_obj_37654.call(null,path,new_link_37621));


var G__37655 = cljs.core.next(seq__37342_37640__$1);
var G__37656 = null;
var G__37657 = (0);
var G__37658 = (0);
seq__37342_37622 = G__37655;
chunk__37344_37623 = G__37656;
count__37345_37624 = G__37657;
i__37346_37625 = G__37658;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37619);
});})(seq__37273_37615,chunk__37277_37616,count__37278_37617,i__37279_37618,seq__36863,chunk__36865,count__36866,i__36867,new_link_37621,path_match_37620,node_37619,path,seq__36863__$1,temp__5804__auto__,map__36862,map__36862__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37620], 0));

goog.dom.insertSiblingAfter(new_link_37621,node_37619);


var G__37659 = seq__37273_37615;
var G__37660 = chunk__37277_37616;
var G__37661 = count__37278_37617;
var G__37662 = (i__37279_37618 + (1));
seq__37273_37615 = G__37659;
chunk__37277_37616 = G__37660;
count__37278_37617 = G__37661;
i__37279_37618 = G__37662;
continue;
} else {
var G__37663 = seq__37273_37615;
var G__37664 = chunk__37277_37616;
var G__37665 = count__37278_37617;
var G__37666 = (i__37279_37618 + (1));
seq__37273_37615 = G__37663;
chunk__37277_37616 = G__37664;
count__37278_37617 = G__37665;
i__37279_37618 = G__37666;
continue;
}
} else {
var G__37667 = seq__37273_37615;
var G__37668 = chunk__37277_37616;
var G__37669 = count__37278_37617;
var G__37670 = (i__37279_37618 + (1));
seq__37273_37615 = G__37667;
chunk__37277_37616 = G__37668;
count__37278_37617 = G__37669;
i__37279_37618 = G__37670;
continue;
}
} else {
var temp__5804__auto___37671__$1 = cljs.core.seq(seq__37273_37615);
if(temp__5804__auto___37671__$1){
var seq__37273_37672__$1 = temp__5804__auto___37671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37273_37672__$1)){
var c__5568__auto___37673 = cljs.core.chunk_first(seq__37273_37672__$1);
var G__37674 = cljs.core.chunk_rest(seq__37273_37672__$1);
var G__37675 = c__5568__auto___37673;
var G__37676 = cljs.core.count(c__5568__auto___37673);
var G__37677 = (0);
seq__37273_37615 = G__37674;
chunk__37277_37616 = G__37675;
count__37278_37617 = G__37676;
i__37279_37618 = G__37677;
continue;
} else {
var node_37678 = cljs.core.first(seq__37273_37672__$1);
if(cljs.core.not(node_37678.shadow$old)){
var path_match_37679 = shadow.cljs.devtools.client.browser.match_paths(node_37678.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37679)){
var new_link_37680 = (function (){var G__37359 = node_37678.cloneNode(true);
G__37359.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37359;
})();
(node_37678.shadow$old = true);

(new_link_37680.onload = ((function (seq__37273_37615,chunk__37277_37616,count__37278_37617,i__37279_37618,seq__36863,chunk__36865,count__36866,i__36867,new_link_37680,path_match_37679,node_37678,seq__37273_37672__$1,temp__5804__auto___37671__$1,path,seq__36863__$1,temp__5804__auto__,map__36862,map__36862__$1,msg,updates,reload_info){
return (function (e){
var seq__37361_37682 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37363_37683 = null;
var count__37364_37684 = (0);
var i__37365_37685 = (0);
while(true){
if((i__37365_37685 < count__37364_37684)){
var map__37382_37686 = chunk__37363_37683.cljs$core$IIndexed$_nth$arity$2(null,i__37365_37685);
var map__37382_37687__$1 = cljs.core.__destructure_map(map__37382_37686);
var task_37688 = map__37382_37687__$1;
var fn_str_37689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37382_37687__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37382_37687__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37691 = goog.getObjectByName(fn_str_37689,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37690)].join(''));

(fn_obj_37691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37691.cljs$core$IFn$_invoke$arity$2(path,new_link_37680) : fn_obj_37691.call(null,path,new_link_37680));


var G__37692 = seq__37361_37682;
var G__37693 = chunk__37363_37683;
var G__37694 = count__37364_37684;
var G__37695 = (i__37365_37685 + (1));
seq__37361_37682 = G__37692;
chunk__37363_37683 = G__37693;
count__37364_37684 = G__37694;
i__37365_37685 = G__37695;
continue;
} else {
var temp__5804__auto___37696__$2 = cljs.core.seq(seq__37361_37682);
if(temp__5804__auto___37696__$2){
var seq__37361_37697__$1 = temp__5804__auto___37696__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37361_37697__$1)){
var c__5568__auto___37698 = cljs.core.chunk_first(seq__37361_37697__$1);
var G__37699 = cljs.core.chunk_rest(seq__37361_37697__$1);
var G__37700 = c__5568__auto___37698;
var G__37701 = cljs.core.count(c__5568__auto___37698);
var G__37702 = (0);
seq__37361_37682 = G__37699;
chunk__37363_37683 = G__37700;
count__37364_37684 = G__37701;
i__37365_37685 = G__37702;
continue;
} else {
var map__37387_37704 = cljs.core.first(seq__37361_37697__$1);
var map__37387_37705__$1 = cljs.core.__destructure_map(map__37387_37704);
var task_37706 = map__37387_37705__$1;
var fn_str_37707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387_37705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387_37705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37709 = goog.getObjectByName(fn_str_37707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37708)].join(''));

(fn_obj_37709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37709.cljs$core$IFn$_invoke$arity$2(path,new_link_37680) : fn_obj_37709.call(null,path,new_link_37680));


var G__37710 = cljs.core.next(seq__37361_37697__$1);
var G__37711 = null;
var G__37712 = (0);
var G__37713 = (0);
seq__37361_37682 = G__37710;
chunk__37363_37683 = G__37711;
count__37364_37684 = G__37712;
i__37365_37685 = G__37713;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37678);
});})(seq__37273_37615,chunk__37277_37616,count__37278_37617,i__37279_37618,seq__36863,chunk__36865,count__36866,i__36867,new_link_37680,path_match_37679,node_37678,seq__37273_37672__$1,temp__5804__auto___37671__$1,path,seq__36863__$1,temp__5804__auto__,map__36862,map__36862__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37679], 0));

goog.dom.insertSiblingAfter(new_link_37680,node_37678);


var G__37714 = cljs.core.next(seq__37273_37672__$1);
var G__37715 = null;
var G__37716 = (0);
var G__37717 = (0);
seq__37273_37615 = G__37714;
chunk__37277_37616 = G__37715;
count__37278_37617 = G__37716;
i__37279_37618 = G__37717;
continue;
} else {
var G__37718 = cljs.core.next(seq__37273_37672__$1);
var G__37719 = null;
var G__37720 = (0);
var G__37721 = (0);
seq__37273_37615 = G__37718;
chunk__37277_37616 = G__37719;
count__37278_37617 = G__37720;
i__37279_37618 = G__37721;
continue;
}
} else {
var G__37722 = cljs.core.next(seq__37273_37672__$1);
var G__37723 = null;
var G__37724 = (0);
var G__37725 = (0);
seq__37273_37615 = G__37722;
chunk__37277_37616 = G__37723;
count__37278_37617 = G__37724;
i__37279_37618 = G__37725;
continue;
}
}
} else {
}
}
break;
}


var G__37726 = cljs.core.next(seq__36863__$1);
var G__37727 = null;
var G__37728 = (0);
var G__37729 = (0);
seq__36863 = G__37726;
chunk__36865 = G__37727;
count__36866 = G__37728;
i__36867 = G__37729;
continue;
} else {
var G__37730 = cljs.core.next(seq__36863__$1);
var G__37731 = null;
var G__37732 = (0);
var G__37733 = (0);
seq__36863 = G__37730;
chunk__36865 = G__37731;
count__36866 = G__37732;
i__36867 = G__37733;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37396){
var map__37397 = p__37396;
var map__37397__$1 = cljs.core.__destructure_map(map__37397);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37397__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37398,done,error){
var map__37399 = p__37398;
var map__37399__$1 = cljs.core.__destructure_map(map__37399);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37399__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37400,done,error){
var map__37401 = p__37400;
var map__37401__$1 = cljs.core.__destructure_map(map__37401);
var msg = map__37401__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37401__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37402){
var map__37403 = p__37402;
var map__37403__$1 = cljs.core.__destructure_map(map__37403);
var src = map__37403__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37404 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37404) : done.call(null,G__37404));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37405){
var map__37406 = p__37405;
var map__37406__$1 = cljs.core.__destructure_map(map__37406);
var msg__$1 = map__37406__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37406__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37407){var ex = e37407;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37408){
var map__37409 = p__37408;
var map__37409__$1 = cljs.core.__destructure_map(map__37409);
var env = map__37409__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37416){
var map__37417 = p__37416;
var map__37417__$1 = cljs.core.__destructure_map(map__37417);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37417__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37417__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37418){
var map__37419 = p__37418;
var map__37419__$1 = cljs.core.__destructure_map(map__37419);
var svc = map__37419__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37419__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
