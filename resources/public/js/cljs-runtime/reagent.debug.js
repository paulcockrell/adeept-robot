goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36724__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36728__i = 0, G__36728__a = new Array(arguments.length -  0);
while (G__36728__i < G__36728__a.length) {G__36728__a[G__36728__i] = arguments[G__36728__i + 0]; ++G__36728__i;}
  args = new cljs.core.IndexedSeq(G__36728__a,0,null);
} 
return G__36724__delegate.call(this,args);};
G__36724.cljs$lang$maxFixedArity = 0;
G__36724.cljs$lang$applyTo = (function (arglist__36729){
var args = cljs.core.seq(arglist__36729);
return G__36724__delegate(args);
});
G__36724.cljs$core$IFn$_invoke$arity$variadic = G__36724__delegate;
return G__36724;
})()
);

(o.error = (function() { 
var G__36730__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36731__i = 0, G__36731__a = new Array(arguments.length -  0);
while (G__36731__i < G__36731__a.length) {G__36731__a[G__36731__i] = arguments[G__36731__i + 0]; ++G__36731__i;}
  args = new cljs.core.IndexedSeq(G__36731__a,0,null);
} 
return G__36730__delegate.call(this,args);};
G__36730.cljs$lang$maxFixedArity = 0;
G__36730.cljs$lang$applyTo = (function (arglist__36732){
var args = cljs.core.seq(arglist__36732);
return G__36730__delegate(args);
});
G__36730.cljs$core$IFn$_invoke$arity$variadic = G__36730__delegate;
return G__36730;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
