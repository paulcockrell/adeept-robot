goog.provide('web.frontend.client');
web.frontend.client.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
web.frontend.client.ch_chsk = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
web.frontend.client.chsk_send_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
web.frontend.client.chsk_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
web.frontend.client.config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695)], null);
web.frontend.client.state_watcher = (function web$frontend$client$state_watcher(_key,_atom,_old_state,new_state){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New state",new_state], 0));
});
web.frontend.client._QMARK_csrf_token = (function (){var temp__5804__auto__ = document.getElementById("csrf-token");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return el.getAttribute("data-token");
} else {
return null;
}
})();
web.frontend.client.send_BANG_ = (function web$frontend$client$send_BANG_(key,payload){
var temp__5804__auto__ = cljs.core.deref(web.frontend.client.chsk_send_BANG_);
if(cljs.core.truth_(temp__5804__auto__)){
var send_fn = temp__5804__auto__;
var G__51256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,payload], null);
return (send_fn.cljs$core$IFn$_invoke$arity$1 ? send_fn.cljs$core$IFn$_invoke$arity$1(G__51256) : send_fn.call(null,G__51256));
} else {
return null;
}
});
web.frontend.client.create_client_BANG_ = (function web$frontend$client$create_client_BANG_(){
var map__51257 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",web.frontend.client._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([web.frontend.client.config], 0));
var map__51257__$1 = cljs.core.__destructure_map(map__51257);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51257__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51257__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51257__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.core.reset_BANG_(web.frontend.client.ch_chsk,ch_recv);

cljs.core.reset_BANG_(web.frontend.client.chsk_send_BANG_,send_fn);

return cljs.core.add_watch(state,new cljs.core.Keyword(null,"state-watcher","state-watcher",725059372),web.frontend.client.state_watcher);
});
web.frontend.client.stop_router_BANG_ = (function web$frontend$client$stop_router_BANG_(){
var temp__5804__auto__ = cljs.core.deref(web.frontend.client.router_);
if(cljs.core.truth_(temp__5804__auto__)){
var stop_f = temp__5804__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
web.frontend.client.start_router_BANG_ = (function web$frontend$client$start_router_BANG_(){
web.frontend.client.stop_router_BANG_();

return cljs.core.reset_BANG_(web.frontend.client.router_,taoensso.sente.start_client_chsk_router_BANG_(cljs.core.deref(web.frontend.client.ch_chsk),web.frontend.handlers.event_msg_handler));
});
web.frontend.client.start_BANG_ = (function web$frontend$client$start_BANG_(){
web.frontend.client.create_client_BANG_();

return web.frontend.client.start_router_BANG_();
});

//# sourceMappingURL=web.frontend.client.js.map
