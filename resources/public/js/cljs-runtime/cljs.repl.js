goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34169){
var map__34171 = p__34169;
var map__34171__$1 = cljs.core.__destructure_map(map__34171);
var m = map__34171__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34171__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34171__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34177_34599 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34178_34600 = null;
var count__34179_34601 = (0);
var i__34180_34602 = (0);
while(true){
if((i__34180_34602 < count__34179_34601)){
var f_34603 = chunk__34178_34600.cljs$core$IIndexed$_nth$arity$2(null,i__34180_34602);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34603], 0));


var G__34604 = seq__34177_34599;
var G__34605 = chunk__34178_34600;
var G__34606 = count__34179_34601;
var G__34607 = (i__34180_34602 + (1));
seq__34177_34599 = G__34604;
chunk__34178_34600 = G__34605;
count__34179_34601 = G__34606;
i__34180_34602 = G__34607;
continue;
} else {
var temp__5804__auto___34608 = cljs.core.seq(seq__34177_34599);
if(temp__5804__auto___34608){
var seq__34177_34609__$1 = temp__5804__auto___34608;
if(cljs.core.chunked_seq_QMARK_(seq__34177_34609__$1)){
var c__5568__auto___34610 = cljs.core.chunk_first(seq__34177_34609__$1);
var G__34617 = cljs.core.chunk_rest(seq__34177_34609__$1);
var G__34619 = c__5568__auto___34610;
var G__34620 = cljs.core.count(c__5568__auto___34610);
var G__34622 = (0);
seq__34177_34599 = G__34617;
chunk__34178_34600 = G__34619;
count__34179_34601 = G__34620;
i__34180_34602 = G__34622;
continue;
} else {
var f_34625 = cljs.core.first(seq__34177_34609__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34625], 0));


var G__34626 = cljs.core.next(seq__34177_34609__$1);
var G__34627 = null;
var G__34628 = (0);
var G__34629 = (0);
seq__34177_34599 = G__34626;
chunk__34178_34600 = G__34627;
count__34179_34601 = G__34628;
i__34180_34602 = G__34629;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34630 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34630], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34630)))?cljs.core.second(arglists_34630):arglists_34630)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34208_34635 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34209_34636 = null;
var count__34210_34637 = (0);
var i__34211_34638 = (0);
while(true){
if((i__34211_34638 < count__34210_34637)){
var vec__34241_34639 = chunk__34209_34636.cljs$core$IIndexed$_nth$arity$2(null,i__34211_34638);
var name_34640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34241_34639,(0),null);
var map__34244_34641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34241_34639,(1),null);
var map__34244_34642__$1 = cljs.core.__destructure_map(map__34244_34641);
var doc_34643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34244_34642__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34244_34642__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34640], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34644], 0));

if(cljs.core.truth_(doc_34643)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34643], 0));
} else {
}


var G__34649 = seq__34208_34635;
var G__34650 = chunk__34209_34636;
var G__34651 = count__34210_34637;
var G__34652 = (i__34211_34638 + (1));
seq__34208_34635 = G__34649;
chunk__34209_34636 = G__34650;
count__34210_34637 = G__34651;
i__34211_34638 = G__34652;
continue;
} else {
var temp__5804__auto___34653 = cljs.core.seq(seq__34208_34635);
if(temp__5804__auto___34653){
var seq__34208_34654__$1 = temp__5804__auto___34653;
if(cljs.core.chunked_seq_QMARK_(seq__34208_34654__$1)){
var c__5568__auto___34655 = cljs.core.chunk_first(seq__34208_34654__$1);
var G__34656 = cljs.core.chunk_rest(seq__34208_34654__$1);
var G__34657 = c__5568__auto___34655;
var G__34658 = cljs.core.count(c__5568__auto___34655);
var G__34659 = (0);
seq__34208_34635 = G__34656;
chunk__34209_34636 = G__34657;
count__34210_34637 = G__34658;
i__34211_34638 = G__34659;
continue;
} else {
var vec__34262_34660 = cljs.core.first(seq__34208_34654__$1);
var name_34661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34262_34660,(0),null);
var map__34265_34662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34262_34660,(1),null);
var map__34265_34663__$1 = cljs.core.__destructure_map(map__34265_34662);
var doc_34664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34265_34663__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34265_34663__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34661], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34665], 0));

if(cljs.core.truth_(doc_34664)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34664], 0));
} else {
}


var G__34666 = cljs.core.next(seq__34208_34654__$1);
var G__34667 = null;
var G__34668 = (0);
var G__34669 = (0);
seq__34208_34635 = G__34666;
chunk__34209_34636 = G__34667;
count__34210_34637 = G__34668;
i__34211_34638 = G__34669;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34279 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34280 = null;
var count__34281 = (0);
var i__34282 = (0);
while(true){
if((i__34282 < count__34281)){
var role = chunk__34280.cljs$core$IIndexed$_nth$arity$2(null,i__34282);
var temp__5804__auto___34674__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34674__$1)){
var spec_34675 = temp__5804__auto___34674__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34675)], 0));
} else {
}


var G__34677 = seq__34279;
var G__34678 = chunk__34280;
var G__34679 = count__34281;
var G__34680 = (i__34282 + (1));
seq__34279 = G__34677;
chunk__34280 = G__34678;
count__34281 = G__34679;
i__34282 = G__34680;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34279);
if(temp__5804__auto____$1){
var seq__34279__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34279__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34279__$1);
var G__34683 = cljs.core.chunk_rest(seq__34279__$1);
var G__34684 = c__5568__auto__;
var G__34685 = cljs.core.count(c__5568__auto__);
var G__34686 = (0);
seq__34279 = G__34683;
chunk__34280 = G__34684;
count__34281 = G__34685;
i__34282 = G__34686;
continue;
} else {
var role = cljs.core.first(seq__34279__$1);
var temp__5804__auto___34688__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34688__$2)){
var spec_34689 = temp__5804__auto___34688__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34689)], 0));
} else {
}


var G__34690 = cljs.core.next(seq__34279__$1);
var G__34691 = null;
var G__34692 = (0);
var G__34693 = (0);
seq__34279 = G__34690;
chunk__34280 = G__34691;
count__34281 = G__34692;
i__34282 = G__34693;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34705 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34706 = cljs.core.ex_cause(t);
via = G__34705;
t = G__34706;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34389 = datafied_throwable;
var map__34389__$1 = cljs.core.__destructure_map(map__34389);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34389__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34389__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34389__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34390 = cljs.core.last(via);
var map__34390__$1 = cljs.core.__destructure_map(map__34390);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34390__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34391 = data;
var map__34391__$1 = cljs.core.__destructure_map(map__34391);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34391__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34391__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34391__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34392 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34392__$1 = cljs.core.__destructure_map(map__34392);
var top_data = map__34392__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34392__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34398 = phase;
var G__34398__$1 = (((G__34398 instanceof cljs.core.Keyword))?G__34398.fqn:null);
switch (G__34398__$1) {
case "read-source":
var map__34405 = data;
var map__34405__$1 = cljs.core.__destructure_map(map__34405);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34405__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34405__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34406 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34406__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34406,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34406);
var G__34406__$2 = (cljs.core.truth_((function (){var fexpr__34411 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34411.cljs$core$IFn$_invoke$arity$1 ? fexpr__34411.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34411.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34406__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34406__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34406__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34406__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34412 = top_data;
var G__34412__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34412,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34412);
var G__34412__$2 = (cljs.core.truth_((function (){var fexpr__34413 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34413.cljs$core$IFn$_invoke$arity$1 ? fexpr__34413.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34413.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34412__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34412__$1);
var G__34412__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34412__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34412__$2);
var G__34412__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34412__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34412__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34412__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34412__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34418 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34418,(3),null);
var G__34421 = top_data;
var G__34421__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34421,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34421);
var G__34421__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34421__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34421__$1);
var G__34421__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34421__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34421__$2);
var G__34421__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34421__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34421__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34421__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34421__$4;
}

break;
case "execution":
var vec__34434 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34434,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34434,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34434,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34434,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34387_SHARP_){
var or__5045__auto__ = (p1__34387_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__34441 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34441.cljs$core$IFn$_invoke$arity$1 ? fexpr__34441.cljs$core$IFn$_invoke$arity$1(p1__34387_SHARP_) : fexpr__34441.call(null,p1__34387_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__34444 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34444__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34444,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34444);
var G__34444__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34444__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34444__$1);
var G__34444__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34444__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34444__$2);
var G__34444__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34444__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34444__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34444__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34444__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34398__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34486){
var map__34488 = p__34486;
var map__34488__$1 = cljs.core.__destructure_map(map__34488);
var triage_data = map__34488__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34505 = phase;
var G__34505__$1 = (((G__34505 instanceof cljs.core.Keyword))?G__34505.fqn:null);
switch (G__34505__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34507 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34509 = loc;
var G__34510 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34516_34783 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34517_34784 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34518_34785 = true;
var _STAR_print_fn_STAR__temp_val__34519_34786 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34518_34785);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34519_34786);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34466_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34466_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34517_34784);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34516_34783);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34507,G__34508,G__34509,G__34510) : format.call(null,G__34507,G__34508,G__34509,G__34510));

break;
case "macroexpansion":
var G__34543 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34544 = cause_type;
var G__34545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34546 = loc;
var G__34547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34543,G__34544,G__34545,G__34546,G__34547) : format.call(null,G__34543,G__34544,G__34545,G__34546,G__34547));

break;
case "compile-syntax-check":
var G__34548 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34549 = cause_type;
var G__34550 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34551 = loc;
var G__34552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34548,G__34549,G__34550,G__34551,G__34552) : format.call(null,G__34548,G__34549,G__34550,G__34551,G__34552));

break;
case "compilation":
var G__34554 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34555 = cause_type;
var G__34556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34557 = loc;
var G__34558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34554,G__34555,G__34556,G__34557,G__34558) : format.call(null,G__34554,G__34555,G__34556,G__34557,G__34558));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34562 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34563 = symbol;
var G__34564 = loc;
var G__34566 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34578_34807 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34579_34808 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34580_34809 = true;
var _STAR_print_fn_STAR__temp_val__34581_34810 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34580_34809);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34581_34810);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34484_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34484_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34579_34808);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34578_34807);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34562,G__34563,G__34564,G__34566) : format.call(null,G__34562,G__34563,G__34564,G__34566));
} else {
var G__34587 = "Execution error%s at %s(%s).\n%s\n";
var G__34588 = cause_type;
var G__34589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34590 = loc;
var G__34591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34587,G__34588,G__34589,G__34590,G__34591) : format.call(null,G__34587,G__34588,G__34589,G__34590,G__34591));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34505__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
