goog.provide('web.frontend.views.mode_programmable');
web.frontend.views.mode_programmable.on_mount = (function web$frontend$views$mode_programmable$on_mount(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering programmable mode"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","mode-programmable","command/mode-programmable",756343588)], null));
});
web.frontend.views.mode_programmable.on_dismount = (function web$frontend$views$mode_programmable$on_dismount(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving programmable mode"], 0));
});
web.frontend.views.mode_programmable.mode_programmable = (function web$frontend$views$mode_programmable$mode_programmable(){
var with_let51665 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51665","with-let51665",1681275861));
var temp__5808__auto___51668 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___51668 == null)){
} else {
var c__37677__auto___51669 = temp__5808__auto___51668;
if((with_let51665.generation === c__37677__auto___51669.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let51665.generation = c__37677__auto___51669.ratomGeneration);
}

var init51666 = (with_let51665.length === (0));
var _ = ((((init51666) || (cljs.core.not(with_let51665.hasOwnProperty((0))))))?(with_let51665[(0)] = web.frontend.views.mode_programmable.on_mount()):(with_let51665[(0)]));
var res51667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Programmable mode"], null)], null);
var destroy__37676__auto___51670 = (function (){
return web.frontend.views.mode_programmable.on_dismount();
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let51665.destroy == null)){
(with_let51665.destroy = destroy__37676__auto___51670);
} else {
}
} else {
destroy__37676__auto___51670();
}

return res51667;
});

//# sourceMappingURL=web.frontend.views.mode_programmable.js.map
