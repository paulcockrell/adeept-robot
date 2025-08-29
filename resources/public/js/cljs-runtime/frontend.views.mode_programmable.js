goog.provide('frontend.views.mode_programmable');
frontend.views.mode_programmable.on_mount = (function frontend$views$mode_programmable$on_mount(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering programmable mode"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","mode-programmable","command/mode-programmable",756343588)], null));
});
frontend.views.mode_programmable.on_dismount = (function frontend$views$mode_programmable$on_dismount(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving programmable mode"], 0));
});
frontend.views.mode_programmable.mode_programmable = (function frontend$views$mode_programmable$mode_programmable(){
var with_let46722 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let46722","with-let46722",1633547221));
var temp__5808__auto___46730 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___46730 == null)){
} else {
var c__37373__auto___46731 = temp__5808__auto___46730;
if((with_let46722.generation === c__37373__auto___46731.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let46722.generation = c__37373__auto___46731.ratomGeneration);
}

var init46723 = (with_let46722.length === (0));
var _ = ((((init46723) || (cljs.core.not(with_let46722.hasOwnProperty((0))))))?(with_let46722[(0)] = frontend.views.mode_programmable.on_mount()):(with_let46722[(0)]));
var res46725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Programmable mode"], null)], null);
var destroy__37372__auto___46735 = (function (){
return frontend.views.mode_programmable.on_dismount();
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let46722.destroy == null)){
(with_let46722.destroy = destroy__37372__auto___46735);
} else {
}
} else {
destroy__37372__auto___46735();
}

return res46725;
});

//# sourceMappingURL=frontend.views.mode_programmable.js.map
