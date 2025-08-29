goog.provide('web.frontend.views.home');
web.frontend.views.home.on_mount = (function web$frontend$views$home$on_mount(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering idle mode"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","mode-idle","command/mode-idle",418619889)], null));
});
web.frontend.views.home.home = (function web$frontend$views$home$home(){
var with_let51645 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let51645","with-let51645",1123541825));
var temp__5808__auto___51648 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___51648 == null)){
} else {
var c__37677__auto___51649 = temp__5808__auto___51648;
if((with_let51645.generation === c__37677__auto___51649.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let51645.generation = c__37677__auto___51649.ratomGeneration);
}

var init51646 = (with_let51645.length === (0));
var _ = ((((init51646) || (cljs.core.not(with_let51645.hasOwnProperty((0))))))?(with_let51645[(0)] = web.frontend.views.home.on_mount()):(with_let51645[(0)]));
var res51647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, Robot!"], null)], null)], null);
return res51647;
});

//# sourceMappingURL=web.frontend.views.home.js.map
