goog.provide('web.frontend.app');
if((typeof web !== 'undefined') && (typeof web.frontend !== 'undefined') && (typeof web.frontend.app !== 'undefined') && (typeof web.frontend.app.react_root !== 'undefined')){
} else {
web.frontend.app.react_root = reagent.dom.client.create_root(document.getElementById("app"));
}
web.frontend.app.app = (function web$frontend$app$app(){
var current_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.views.pages,current_page], null)], null);
});
web.frontend.app.init = (function web$frontend$app$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing app"], 0));

web.frontend.router.init_routes_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","init","app/init",-1875644805)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connect","server/connect",2071530636)], null));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(web.frontend.app.react_root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.app.app], null));
});

//# sourceMappingURL=web.frontend.app.js.map
