goog.provide('frontend.views.home');
frontend.views.home.on_mount = (function frontend$views$home$on_mount(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Entering idle mode"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("command","mode-idle","command/mode-idle",418619889)], null));
});
frontend.views.home.home = (function frontend$views$home$home(){
var with_let46707 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let46707","with-let46707",1070701124));
var temp__5808__auto___46713 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___46713 == null)){
} else {
var c__37373__auto___46714 = temp__5808__auto___46713;
if((with_let46707.generation === c__37373__auto___46714.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let46707.generation = c__37373__auto___46714.ratomGeneration);
}

var init46708 = (with_let46707.length === (0));
var _ = ((((init46708) || (cljs.core.not(with_let46707.hasOwnProperty((0))))))?(with_let46707[(0)] = frontend.views.home.on_mount()):(with_let46707[(0)]));
var res46709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.layout.layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, Robot!"], null)], null)], null);
return res46709;
});

//# sourceMappingURL=frontend.views.home.js.map
