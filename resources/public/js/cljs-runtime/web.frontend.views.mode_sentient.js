goog.provide('web.frontend.views.mode_sentient');
web.frontend.views.mode_sentient.on_mount = (function web$frontend$views$mode_sentient$on_mount(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering sentient mode"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","mode-sentient","command/mode-sentient",1327324065)], null));
});
web.frontend.views.mode_sentient.on_dismount = (function web$frontend$views$mode_sentient$on_dismount(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving sentient mode"], 0));
});
web.frontend.views.mode_sentient.mode_sentient = (function web$frontend$views$mode_sentient$mode_sentient(){
var with_let51659 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51659","with-let51659",-966374680));
var temp__5808__auto___51662 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___51662 == null)){
} else {
var c__37677__auto___51663 = temp__5808__auto___51662;
if((with_let51659.generation === c__37677__auto___51663.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let51659.generation = c__37677__auto___51663.ratomGeneration);
}

var init51660 = (with_let51659.length === (0));
var _ = ((((init51660) || (cljs.core.not(with_let51659.hasOwnProperty((0))))))?(with_let51659[(0)] = web.frontend.views.mode_sentient.on_mount()):(with_let51659[(0)]));
var res51661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Sentient mode"], null)], null);
var destroy__37676__auto___51664 = (function (){
return web.frontend.views.mode_sentient.on_dismount();
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let51659.destroy == null)){
(with_let51659.destroy = destroy__37676__auto___51664);
} else {
}
} else {
destroy__37676__auto___51664();
}

return res51661;
});

//# sourceMappingURL=web.frontend.views.mode_sentient.js.map
