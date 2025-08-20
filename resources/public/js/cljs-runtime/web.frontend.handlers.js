goog.provide('web.frontend.handlers');
web.frontend.handlers.log = (function web$frontend$handlers$log(message,data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message,JSON.stringify(cljs.core.clj__GT_js(data))], 0));
});
if((typeof web !== 'undefined') && (typeof web.frontend !== 'undefined') && (typeof web.frontend.handlers !== 'undefined') && (typeof web.frontend.handlers._event_msg_handler !== 'undefined')){
} else {
web.frontend.handlers._event_msg_handler = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42886 = cljs.core.get_global_hierarchy;
return (fexpr__42886.cljs$core$IFn$_invoke$arity$0 ? fexpr__42886.cljs$core$IFn$_invoke$arity$0() : fexpr__42886.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("web.frontend.handlers","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
web.frontend.handlers.event_msg_handler = (function web$frontend$handlers$event_msg_handler(p__42889){
var map__42890 = p__42889;
var map__42890__$1 = cljs.core.__destructure_map(map__42890);
var ev_msg = map__42890__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42890__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42890__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42890__$1,new cljs.core.Keyword(null,"event","event",301435442));
return web.frontend.handlers._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg);
});
web.frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42891){
var map__42892 = p__42891;
var map__42892__$1 = cljs.core.__destructure_map(map__42892);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42892__$1,new cljs.core.Keyword(null,"event","event",301435442));
return web.frontend.handlers.log("Unhandled event:",event);
}));
web.frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__42893){
var map__42894 = p__42893;
var map__42894__$1 = cljs.core.__destructure_map(map__42894);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42894__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var map__42895 = cljs.core.second(_QMARK_data);
var map__42895__$1 = cljs.core.__destructure_map(map__42895);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42895__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var _ever_opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42895__$1,new cljs.core.Keyword(null,"_ever-opened?","_ever-opened?",1158360282));
var _csrf_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42895__$1,new cljs.core.Keyword(null,"_csrf-token","_csrf-token",-1211449819));
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
web.frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Websocket handshake received"], 0));
}));
web.frontend.handlers._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("robot","mode-updated","robot/mode-updated",999627082),(function (p__42896){
var map__42897 = p__42896;
var map__42897__$1 = cljs.core.__destructure_map(map__42897);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("robot","mode-updated","robot/mode-updated",999627082),_QMARK_data], null));
}));

//# sourceMappingURL=web.frontend.handlers.js.map
