goog.provide('frontend.app');
if((typeof frontend !== 'undefined') && (typeof frontend.app !== 'undefined') && (typeof frontend.app.react_root !== 'undefined')){
} else {
frontend.app.react_root = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}
frontend.app.app = (function frontend$app$app(){
var current_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.pages,current_page], null)], null);
});
frontend.app.init = (function frontend$app$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing app"], 0));

frontend.router.init_routes_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","init","app/init",-1875644805)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connect","server/connect",2071530636)], null));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(frontend.app.react_root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.app], null));
});

//# sourceMappingURL=frontend.app.js.map
