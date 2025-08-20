goog.provide('frontend.handlers');
frontend.handlers.log = (function frontend$handlers$log(message,data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message,JSON.stringify(cljs.core.clj__GT_js(data))], 0));
});
if((typeof frontend !== 'undefined') && (typeof frontend.handlers !== 'undefined') && (typeof frontend.handlers._event_msg_handler !== 'undefined')){
} else {
frontend.handlers._event_msg_handler = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__39622 = cljs.core.get_global_hierarchy;
return (fexpr__39622.cljs$core$IFn$_invoke$arity$0 ? fexpr__39622.cljs$core$IFn$_invoke$arity$0() : fexpr__39622.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.handlers","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
frontend.handlers.event_msg_handler = (function frontend$handlers$event_msg_handler(p__39623){
var map__39624 = p__39623;
var map__39624__$1 = cljs.core.__destructure_map(map__39624);
var ev_msg = map__39624__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39624__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39624__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39624__$1,new cljs.core.Keyword(null,"event","event",301435442));
return frontend.handlers._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg);
});
frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__39625){
var map__39626 = p__39625;
var map__39626__$1 = cljs.core.__destructure_map(map__39626);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39626__$1,new cljs.core.Keyword(null,"event","event",301435442));
return frontend.handlers.log("Unhandled event:",event);
}));
frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__39627){
var map__39628 = p__39627;
var map__39628__$1 = cljs.core.__destructure_map(map__39628);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39628__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var map__39629 = cljs.core.second(_QMARK_data);
var map__39629__$1 = cljs.core.__destructure_map(map__39629);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var _ever_opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,new cljs.core.Keyword(null,"_ever-opened?","_ever-opened?",1158360282));
var _csrf_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39629__$1,new cljs.core.Keyword(null,"_csrf-token","_csrf-token",-1211449819));
if(cljs.core.truth_(open_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Websocket connection to server open"], 0));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection","server/connection",44095359),new cljs.core.Keyword(null,"open","open",-1763596448)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","alert-clear","app/alert-clear",183846595)], null));
} else {
if(cljs.core.not(open_QMARK_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Websocket connection to server closed"], 0));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection","server/connection",44095359),new cljs.core.Keyword(null,"closed","closed",-919675359)], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Connection to server closed"], 0));
} else {
return null;
}
}
}));
frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Websocket handshake received"], 0));
}));
frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("robot","mode-updated","robot/mode-updated",999627082),(function (p__39638){
var map__39639 = p__39638;
var map__39639__$1 = cljs.core.__destructure_map(map__39639);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39639__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("robot","mode-updated","robot/mode-updated",999627082),_QMARK_data], null));
}));

//# sourceMappingURL=frontend.handlers.js.map
