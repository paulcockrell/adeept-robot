goog.provide('web.frontend.views');
if((typeof web !== 'undefined') && (typeof web.frontend !== 'undefined') && (typeof web.frontend.views !== 'undefined') && (typeof web.frontend.views.pages !== 'undefined')){
} else {
web.frontend.views.pages = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51671 = cljs.core.get_global_hierarchy;
return (fexpr__51671.cljs$core$IFn$_invoke$arity$0 ? fexpr__51671.cljs$core$IFn$_invoke$arity$0() : fexpr__51671.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("web.frontend.views","pages"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.not_found.not_found], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.not_found.not_found], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home","home",-74557309),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.home.home], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mode-manual","mode-manual",648966255),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.mode_manual.mode_manual], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mode-sentient","mode-sentient",109250656),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.mode_sentient.mode_sentient], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mode-programmable","mode-programmable",1707016669),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.mode_programmable.mode_programmable], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.settings.settings], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"help","help",-439233446),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.help.help], null);
}));
web.frontend.views.pages.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about","about",1423892543),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.about.about], null);
}));

//# sourceMappingURL=web.frontend.views.js.map
