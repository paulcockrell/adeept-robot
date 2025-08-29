goog.provide('frontend.views.mode_sentient');
frontend.views.mode_sentient.on_mount = (function frontend$views$mode_sentient$on_mount(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering sentient mode"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","mode-sentient","command/mode-sentient",1327324065)], null));
});
frontend.views.mode_sentient.on_dismount = (function frontend$views$mode_sentient$on_dismount(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Leaving sentient mode"], 0));
});
frontend.views.mode_sentient.mode_sentient = (function frontend$views$mode_sentient$mode_sentient(){
var with_let46715 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let46715","with-let46715",211168793));
var temp__5808__auto___46724 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___46724 == null)){
} else {
var c__37373__auto___46726 = temp__5808__auto___46724;
if((with_let46715.generation === c__37373__auto___46726.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let46715.generation = c__37373__auto___46726.ratomGeneration);
}

var init46716 = (with_let46715.length === (0));
var _ = ((((init46716) || (cljs.core.not(with_let46715.hasOwnProperty((0))))))?(with_let46715[(0)] = frontend.views.mode_sentient.on_mount()):(with_let46715[(0)]));
var res46717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Sentient mode"], null)], null);
var destroy__37372__auto___46727 = (function (){
return frontend.views.mode_sentient.on_dismount();
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let46715.destroy == null)){
(with_let46715.destroy = destroy__37372__auto___46727);
} else {
}
} else {
destroy__37372__auto___46727();
}

return res46717;
});

//# sourceMappingURL=frontend.views.mode_sentient.js.map
