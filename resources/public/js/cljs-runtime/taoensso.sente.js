goog.provide('taoensso.sente');
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(20),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
/**
 * Sets Timbre's minimum log level for internal Sente namespaces.
 *   Possible levels: #{:trace :debug :info :warn :error :fatal :report}.
 *   Default level: `:warn`.
 */
taoensso.sente.set_min_log_level_BANG_ = (function taoensso$sente$set_min_log_level_BANG_(level){
taoensso.timbre.swap_config_BANG_((function (config__46187__auto__){
return taoensso.timbre.set_ns_min_level(config__46187__auto__,"taoensso.sente.*",level);
}));

taoensso.timbre.swap_config_BANG_((function (config__46187__auto__){
return taoensso.timbre.set_ns_min_level(config__46187__auto__,"taoensso.sente",level);
}));

return null;
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.__set_default_log_level !== 'undefined')){
} else {
taoensso.sente.__set_default_log_level = taoensso.sente.set_min_log_level_BANG_(new cljs.core.Keyword(null,"warn","warn",-436710552));
}
taoensso.sente.strim = (function taoensso$sente$strim(max_len,s){
if((cljs.core.count(s) > max_len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.substr(s,(0),max_len));
} else {
return s;
}
});
/**
 * Log id
 */
taoensso.sente.lid = (function taoensso$sente$lid(var_args){
var G__50587 = arguments.length;
switch (G__50587) {
case 1:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084))){
return "u_nil";
} else {
return ["u_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)))].join('');
}
}));

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2 = (function (uid,client_id){
return [taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid),"/c_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id)))].join('');
}));

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3 = (function (uid,client_id,conn_id){
return [taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2(uid,client_id),"/n_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),conn_id))].join('');
}));

(taoensso.sente.lid.cljs$lang$maxFixedArity = 3);

taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__50590 = cljs.core.count(x);
var fexpr__50589 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__50589.cljs$core$IFn$_invoke$arity$1 ? fexpr__50589.cljs$core$IFn$_invoke$arity$1(G__50590) : fexpr__50589.call(null,G__50590));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__50591 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50591,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50591,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5804__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5804__auto__)){
var errs = temp__5804__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5802__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5802__auto__)){
var errs = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__5043__auto__ = cljs.core.map_QMARK_(x);
if(and__5043__auto__){
var and__5043__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(cljs.core.truth_(and__5043__auto____$1)){
var map__50594 = x;
var map__50594__$1 = cljs.core.__destructure_map(map__50594);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50594__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50594__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50594__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50594__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__5043__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(cljs.core.truth_(and__5043__auto____$2)){
return ((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)))));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__5043__auto__ = cljs.core.map_QMARK_(x);
if(and__5043__auto__){
var and__5043__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(cljs.core.truth_(and__5043__auto____$1)){
var map__50595 = x;
var map__50595__$1 = cljs.core.__destructure_map(map__50595);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__5043__auto____$2 = taoensso.encore.chan_QMARK_(ch_recv);
if(cljs.core.truth_(and__5043__auto____$2)){
var and__5043__auto____$3 = cljs.core.ifn_QMARK_(send_fn);
if(and__5043__auto____$3){
var and__5043__auto____$4 = taoensso.encore.atom_QMARK_(connected_uids);
if(and__5043__auto____$4){
var and__5043__auto____$5 = taoensso.encore.atom_QMARK_(send_buffers);
if(and__5043__auto____$5){
var and__5043__auto____$6 = cljs.core.map_QMARK_(ring_req);
if(and__5043__auto____$6){
var and__5043__auto____$7 = taoensso.encore.nblank_str_QMARK_(client_id);
if(cljs.core.truth_(and__5043__auto____$7)){
return ((taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return and__5043__auto____$7;
}
} else {
return and__5043__auto____$6;
}
} else {
return and__5043__auto____$5;
}
} else {
return and__5043__auto____$4;
}
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__50596){
var map__50597 = p__50596;
var map__50597__$1 = cljs.core.__destructure_map(map__50597);
var ev_msg = map__50597__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50597__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__50598 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50598,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50598,(1),null);
var valid_event = vec__50598;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",198,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad `event-msg` from server: %s",ev_msg], null);
}),null)),null,(59),null,null,null);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__50601 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__50601.cljs$core$IFn$_invoke$arity$1 ? fexpr__50601.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__50601.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * Returns [<packed> <?format>]. Used to support some minimal backwards
 *   compatibility between v2 `pack` and v1 `unpack`.
 */
taoensso.sente.parse_packed = (function taoensso$sente$parse_packed(packed){
if(typeof packed === 'string'){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(packed,"+"))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","wrapped","v1/wrapped",1775176340)], null);
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_(packed,"-"))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","unwrapped","v1/unwrapped",-1881590983)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);

}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);
}
});
/**
 * packed->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,packed){
var vec__50602 = taoensso.sente.parse_packed(packed);
var packed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50602,(0),null);
var _QMARK_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50602,(1),null);
var unpacked = (function (){try{return taoensso.sente.interfaces.unpack(packer,packed__$1);
}catch (e50608){var t = e50608;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",230,13,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Failed to unpack: %s",packed__$1], null);
}),null)),null,(60),null,null,null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),packed__$1], null),null], null);
}})();
var vec__50605 = (function (){var G__50609 = _QMARK_format;
var G__50609__$1 = (((G__50609 instanceof cljs.core.Keyword))?G__50609.fqn:null);
switch (G__50609__$1) {
case "v1/wrapped":
return unpacked;

break;
case "v1/unwrapped":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked,null], null);

break;
case "v2/unwrapped":
return unpacked;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50609__$1)].join('')));

}
})();
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50605,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50605,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null);
});
/**
 * Advanced option, most users can ignore this var. Only necessary
 *   for those that want to use Sente < v1.18 with a non-standard
 *   IPacker that deals with non-string payloads.
 * 
 *   Details:
 *  Sente uses a private message format as an implementation detail
 *  for client<->server comms.
 * 
 *  As part of [#398], this format is being updated to support
 *  non-string (e.g. binary) payloads.
 * 
 *  Unfortunately updating the format is non-trivial because:
 *    1. Both the client & server need to support the same format.
 *    2. Clients are often served as cached cl/js.
 * 
 *  To help ease migration, the new pack format is being rolled out
 *  in stages:
 * 
 *    Sente <= v1.16: reads  v1 format only
 *                    writes v1 format only
 * 
 *    Sente    v1.17: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v1 default)
 * 
 *    Sente    v1.18: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v2 default)  <- Currently here
 * 
 *    Sente >= v1.19: reads  v2 format only
 *                    writes v2 format only
 * 
 *  This var controls which format to use for writing.
 *  Override default with `alter-var-root` or `binding`.
 */
taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_ = false;
/**
 * [clj ?cb-uuid]->packed
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__50611 = arguments.length;
switch (G__50611) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer,clj,null);
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var packed = taoensso.sente.interfaces.pack(packer,(function (){var temp__5806__auto__ = _QMARK_cb_uuid__$1;
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
} else {
var cb_uuid = temp__5806__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,cb_uuid], null);
}
})());
if(cljs.core.truth_(taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_)){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof packed === 'string')?packed:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),290,17,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Symbol(null,"packed","packed",93735008,null),packed,null,null)))].join('');
} else {
return packed;
}
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__50612_SHARP_){
if((!((p1__50612_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__50612_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__50612_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__50612_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__50612_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50613){if((e50613 instanceof Error)){
var e = e50613;
return e;
} else {
throw e50613;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),308,5,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50612#","p1__50612#",530622271,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IPacker","interfaces/IPacker",1863769936,null),new cljs.core.Symbol(null,"p1__50612#","p1__50612#",530622271,null))),null,new cljs.core.Symbol(null,"x","x",-555367584,null),x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin> ...}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core.truth_((function (){var and__5043__auto__ = (!(have_origin_QMARK_));
if(and__5043__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p1__50615_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50615_SHARP_),"/"].join(''));
}),allowed_origins);
} else {
return and__5043__auto__;
}
})())){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; Ring handler for CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; Ring handler for Ring GET  + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; nil => CSRF check will be DISABLED (can pose a *CSRF SECURITY RISK*
 *                     ; for website use cases, so please ONLY disable this check if you're
 *                     ; very sure you understand the implications!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn         ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn  ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms       ; Ping to keep a WebSocket conn alive if no activity
 *                      ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms      ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax   ; [2]
 *  :send-buf-ms-ws     ; [2]
 *  :packer             ; :edn (default), or an IPacker implementation.
 * 
 *  :ws-ping-timeout-ms ; When pinging to test WebSocket connections, msecs to
 *                      ; await reply before regarding the connection as broken
 * 
 *  ;; When a connection is closed, Sente waits a little for possible reconnection before
 *  ;; actually marking the connection as closed. This facilitates Ajax long-polling,
 *  ;; server->client buffering, and helps to reduce event noise from spotty connections.
 *  :ms-allow-reconnect-before-close-ws   ; Msecs to wait for WebSocket conns (default: 2500)
 *  :ms-allow-reconnect-before-close-ajax ; Msecs to wait for Ajax      conns (default: 5000)
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51445 = arguments.length;
var i__5770__auto___51446 = (0);
while(true){
if((i__5770__auto___51446 < len__5769__auto___51445)){
args__5775__auto__.push((arguments[i__5770__auto___51446]));

var G__51447 = (i__5770__auto___51446 + (1));
i__5770__auto___51446 = G__51447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__50619){
var vec__50620 = p__50619;
var map__50623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50620,(0),null);
var map__50623__$1 = cljs.core.__destructure_map(map__50623);
var ws_ping_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),null);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secs","secs",1532330091),(25)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secs","secs",1532330091),(20)));
var ms_allow_reconnect_before_close_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"ms-allow-reconnect-before-close-ws","ms-allow-reconnect-before-close-ws",-1327905884),(2500));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__5045__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var ms_allow_reconnect_before_close_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"ms-allow-reconnect-before-close-ajax","ms-allow-reconnect-before-close-ajax",-447786167),(5000));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50623__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50623__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_51450 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50624){if((e50624 instanceof Error)){
var e_51450 = e50624;
return e_51450;
} else {
throw e50624;

}
}})();
if((e_51450 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),486,3,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"send-buf-ms-ajax","send-buf-ms-ajax",-1108306732,null),send_buf_ms_ajax,e_51450,null);
}

var e_51451 = (function (){try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50625){if((e50625 instanceof Error)){
var e_51451 = e50625;
return e_51451;
} else {
throw e50625;

}
}})();
if((e_51451 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),486,3,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol("taoensso.encore","pos-int?","taoensso.encore/pos-int?",186070635,null),new cljs.core.Symbol(null,"send-buf-ms-ws","send-buf-ms-ws",490945289,null),send_buf_ms_ws,e_51451,null);
}


var e_51452 = (function (){try{if((function (p1__50616_SHARP_){
if((!((p1__50616_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__50616_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__50616_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__50616_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__50616_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e50626){if((e50626 instanceof Error)){
var e_51452 = e50626;
return e_51452;
} else {
throw e50626;

}
}})();
if((e_51452 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),487,3,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__50616#","p1__50616#",-1053606139,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IServerChanAdapter","interfaces/IServerChanAdapter",-455981296,null),new cljs.core.Symbol(null,"p1__50616#","p1__50616#",-1053606139,null))),null,new cljs.core.Symbol(null,"web-server-ch-adapter","web-server-ch-adapter",340117672,null),web_server_ch_adapter,e_51452,null);
}

var max_ms_51453 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_51453)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_51453)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_51453], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__5045__auto__ = cljs.core.set_QMARK_(x);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__50628 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__50628.cljs$core$IFn$_invoke$arity$1 ? fexpr__50628.cljs$core$IFn$_invoke$arity$1(x) : fexpr__50628.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),496,25,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),"null"], null), null)], null),null,new cljs.core.Symbol(null,"allowed-origins","allowed-origins",-1176584086,null),allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__5045__auto__ = (function (){var G__50629 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__50629) : user_id_fn.call(null,G__50629));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var connect_uid_BANG__QMARK_ = (function (conn_type,uid){
if(cljs.core.truth_((((!((uid == null))))?true:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),511,36,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),uid,null,null)))){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__50630){
var map__50631 = p__50630;
var map__50631__$1 = cljs.core.__destructure_map(map__50631);
var old_m = map__50631__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50631__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50631__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50631__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__50632 = conn_type;
var G__50632__$1 = (((G__50632 instanceof cljs.core.Keyword))?G__50632.fqn:null);
switch (G__50632__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50632__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var maybe_disconnect_uid_BANG__QMARK_ = (function (uid){
if(cljs.core.truth_((((!((uid == null))))?true:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),528,26,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),uid,null,null)))){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__50633){
var map__50634 = p__50633;
var map__50634__$1 = cljs.core.__destructure_map(map__50634);
var old_m = map__50634__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__51455__delegate = function (user_id,ev,p__50635){
var vec__50636 = p__50635;
var map__50639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50636,(0),null);
var map__50639__$1 = cljs.core.__destructure_map(map__50639);
var opts = map__50639__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50639__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_51456 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084):user_id);
var __51457 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",554,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server asked to send event to %s: %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid_51456),ev], null);
}),null)),null,(61),null,null,null);
var __51458__$1 = (cljs.core.truth_(uid_51456)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __51459__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_51460 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__51461 = (function (conn_type){
var temp__5804__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__50640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_51456);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50640,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50640,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_51460)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_51456),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_51456));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5804__auto__)){
var pulled = temp__5804__auto__;
var vec__50643 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50643,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50643,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),582,23,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"buffered-evs","buffered-evs",42083054,null),buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),583,23,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Symbol(null,"ev-uuids","ev-uuids",1824628525,null),ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
var G__50646 = conn_type;
var G__50647 = conns_;
var G__50648 = uid_51456;
var G__50649 = buffered_evs_ppstr;
var G__50650 = cljs.core.count(buffered_evs);
return (taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.cljs$core$IFn$_invoke$arity$5 ? taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.cljs$core$IFn$_invoke$arity$5(G__50646,G__50647,G__50648,G__50649,G__50650) : taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.call(null,G__50646,G__50647,G__50648,G__50649,G__50650));
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",591,17,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server asked to close chsk for %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid_51456)], null);
}),null)),null,(62),null,null,null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__51461(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__51461(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__50651_51462 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_51456], null))));
var chunk__50652_51463 = null;
var count__50653_51464 = (0);
var i__50654_51465 = (0);
while(true){
if((i__50654_51465 < count__50653_51464)){
var vec__50661_51466 = chunk__50652_51463.cljs$core$IIndexed$_nth$arity$2(null,i__50654_51465);
var _QMARK_sch_51467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50661_51466,(0),null);
var _udt_51468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50661_51466,(1),null);
var temp__5804__auto___51469 = _QMARK_sch_51467;
if(cljs.core.truth_(temp__5804__auto___51469)){
var sch_51470 = temp__5804__auto___51469;
taoensso.sente.interfaces.sch_close_BANG_(sch_51470);
} else {
}


var G__51471 = seq__50651_51462;
var G__51472 = chunk__50652_51463;
var G__51473 = count__50653_51464;
var G__51474 = (i__50654_51465 + (1));
seq__50651_51462 = G__51471;
chunk__50652_51463 = G__51472;
count__50653_51464 = G__51473;
i__50654_51465 = G__51474;
continue;
} else {
var temp__5804__auto___51475 = cljs.core.seq(seq__50651_51462);
if(temp__5804__auto___51475){
var seq__50651_51476__$1 = temp__5804__auto___51475;
if(cljs.core.chunked_seq_QMARK_(seq__50651_51476__$1)){
var c__5568__auto___51477 = cljs.core.chunk_first(seq__50651_51476__$1);
var G__51478 = cljs.core.chunk_rest(seq__50651_51476__$1);
var G__51479 = c__5568__auto___51477;
var G__51480 = cljs.core.count(c__5568__auto___51477);
var G__51481 = (0);
seq__50651_51462 = G__51478;
chunk__50652_51463 = G__51479;
count__50653_51464 = G__51480;
i__50654_51465 = G__51481;
continue;
} else {
var vec__50664_51482 = cljs.core.first(seq__50651_51476__$1);
var _QMARK_sch_51483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50664_51482,(0),null);
var _udt_51484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50664_51482,(1),null);
var temp__5804__auto___51485__$1 = _QMARK_sch_51483;
if(cljs.core.truth_(temp__5804__auto___51485__$1)){
var sch_51486 = temp__5804__auto___51485__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_51486);
} else {
}


var G__51487 = cljs.core.next(seq__50651_51476__$1);
var G__51488 = null;
var G__51489 = (0);
var G__51490 = (0);
seq__50651_51462 = G__51487;
chunk__50652_51463 = G__51488;
count__50653_51464 = G__51489;
i__50654_51465 = G__51490;
continue;
}
} else {
}
}
break;
}

var seq__50667_51491 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_51456], null))));
var chunk__50668_51492 = null;
var count__50669_51493 = (0);
var i__50670_51494 = (0);
while(true){
if((i__50670_51494 < count__50669_51493)){
var vec__50677_51495 = chunk__50668_51492.cljs$core$IIndexed$_nth$arity$2(null,i__50670_51494);
var _QMARK_sch_51496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50677_51495,(0),null);
var _udt_51497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50677_51495,(1),null);
var temp__5804__auto___51498 = _QMARK_sch_51496;
if(cljs.core.truth_(temp__5804__auto___51498)){
var sch_51499 = temp__5804__auto___51498;
taoensso.sente.interfaces.sch_close_BANG_(sch_51499);
} else {
}


var G__51500 = seq__50667_51491;
var G__51501 = chunk__50668_51492;
var G__51502 = count__50669_51493;
var G__51503 = (i__50670_51494 + (1));
seq__50667_51491 = G__51500;
chunk__50668_51492 = G__51501;
count__50669_51493 = G__51502;
i__50670_51494 = G__51503;
continue;
} else {
var temp__5804__auto___51504 = cljs.core.seq(seq__50667_51491);
if(temp__5804__auto___51504){
var seq__50667_51505__$1 = temp__5804__auto___51504;
if(cljs.core.chunked_seq_QMARK_(seq__50667_51505__$1)){
var c__5568__auto___51506 = cljs.core.chunk_first(seq__50667_51505__$1);
var G__51507 = cljs.core.chunk_rest(seq__50667_51505__$1);
var G__51508 = c__5568__auto___51506;
var G__51509 = cljs.core.count(c__5568__auto___51506);
var G__51510 = (0);
seq__50667_51491 = G__51507;
chunk__50668_51492 = G__51508;
count__50669_51493 = G__51509;
i__50670_51494 = G__51510;
continue;
} else {
var vec__50680_51511 = cljs.core.first(seq__50667_51505__$1);
var _QMARK_sch_51512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50680_51511,(0),null);
var _udt_51513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50680_51511,(1),null);
var temp__5804__auto___51514__$1 = _QMARK_sch_51512;
if(cljs.core.truth_(temp__5804__auto___51514__$1)){
var sch_51515 = temp__5804__auto___51514__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_51515);
} else {
}


var G__51516 = cljs.core.next(seq__50667_51505__$1);
var G__51517 = null;
var G__51518 = (0);
var G__51519 = (0);
seq__50667_51491 = G__51516;
chunk__50668_51492 = G__51517;
count__50669_51493 = G__51518;
i__50670_51494 = G__51519;
continue;
}
} else {
}
}
break;
}
} else {
var seq__50683_51520 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__50684_51521 = null;
var count__50685_51522 = (0);
var i__50686_51523 = (0);
while(true){
if((i__50686_51523 < count__50685_51522)){
var conn_type_51524 = chunk__50684_51521.cljs$core$IIndexed$_nth$arity$2(null,i__50686_51523);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_51524,uid_51456], null),((function (seq__50683_51520,chunk__50684_51521,count__50685_51522,i__50686_51523,conn_type_51524,uid_51456,__51457,__51458__$1,__51459__$2,ev_uuid_51460,flush_buffer_BANG__51461,vec__50636,map__50639,map__50639__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__50620,map__50623,map__50623__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_51460])], null);
} else {
var vec__50693 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50693,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50693,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_51460)], null);
}
});})(seq__50683_51520,chunk__50684_51521,count__50685_51522,i__50686_51523,conn_type_51524,uid_51456,__51457,__51458__$1,__51459__$2,ev_uuid_51460,flush_buffer_BANG__51461,vec__50636,map__50639,map__50639__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__50620,map__50623,map__50623__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__51525 = seq__50683_51520;
var G__51526 = chunk__50684_51521;
var G__51527 = count__50685_51522;
var G__51528 = (i__50686_51523 + (1));
seq__50683_51520 = G__51525;
chunk__50684_51521 = G__51526;
count__50685_51522 = G__51527;
i__50686_51523 = G__51528;
continue;
} else {
var temp__5804__auto___51529 = cljs.core.seq(seq__50683_51520);
if(temp__5804__auto___51529){
var seq__50683_51530__$1 = temp__5804__auto___51529;
if(cljs.core.chunked_seq_QMARK_(seq__50683_51530__$1)){
var c__5568__auto___51531 = cljs.core.chunk_first(seq__50683_51530__$1);
var G__51532 = cljs.core.chunk_rest(seq__50683_51530__$1);
var G__51533 = c__5568__auto___51531;
var G__51534 = cljs.core.count(c__5568__auto___51531);
var G__51535 = (0);
seq__50683_51520 = G__51532;
chunk__50684_51521 = G__51533;
count__50685_51522 = G__51534;
i__50686_51523 = G__51535;
continue;
} else {
var conn_type_51536 = cljs.core.first(seq__50683_51530__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_51536,uid_51456], null),((function (seq__50683_51520,chunk__50684_51521,count__50685_51522,i__50686_51523,conn_type_51536,seq__50683_51530__$1,temp__5804__auto___51529,uid_51456,__51457,__51458__$1,__51459__$2,ev_uuid_51460,flush_buffer_BANG__51461,vec__50636,map__50639,map__50639__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__50620,map__50623,map__50623__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_51460])], null);
} else {
var vec__50696 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50696,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50696,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_51460)], null);
}
});})(seq__50683_51520,chunk__50684_51521,count__50685_51522,i__50686_51523,conn_type_51536,seq__50683_51530__$1,temp__5804__auto___51529,uid_51456,__51457,__51458__$1,__51459__$2,ev_uuid_51460,flush_buffer_BANG__51461,vec__50636,map__50639,map__50639__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__50620,map__50623,map__50623__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__51537 = cljs.core.next(seq__50683_51530__$1);
var G__51538 = null;
var G__51539 = (0);
var G__51540 = (0);
seq__50683_51520 = G__51537;
chunk__50684_51521 = G__51538;
count__50685_51522 = G__51539;
i__50686_51523 = G__51540;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__51461(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__51461(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_51541 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_51542 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__29727__auto___51543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_50703){
var state_val_50704 = (state_50703[(1)]);
if((state_val_50704 === (1))){
var state_50703__$1 = state_50703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50703__$1,(2),ws_timeout_51541);
} else {
if((state_val_50704 === (2))){
var inst_50700 = (state_50703[(2)]);
var inst_50701 = flush_buffer_BANG__51461(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_50703__$1 = (function (){var statearr_50705 = state_50703;
(statearr_50705[(7)] = inst_50700);

return statearr_50705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50703__$1,inst_50701);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__29474__auto__ = null;
var taoensso$sente$state_machine__29474__auto____0 = (function (){
var statearr_50706 = [null,null,null,null,null,null,null,null];
(statearr_50706[(0)] = taoensso$sente$state_machine__29474__auto__);

(statearr_50706[(1)] = (1));

return statearr_50706;
});
var taoensso$sente$state_machine__29474__auto____1 = (function (state_50703){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_50703);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e50707){var ex__29477__auto__ = e50707;
var statearr_50708_51544 = state_50703;
(statearr_50708_51544[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_50703[(4)]))){
var statearr_50709_51545 = state_50703;
(statearr_50709_51545[(1)] = cljs.core.first((state_50703[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51546 = state_50703;
state_50703 = G__51546;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$state_machine__29474__auto__ = function(state_50703){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29474__auto____1.call(this,state_50703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29474__auto____0;
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29474__auto____1;
return taoensso$sente$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_50710 = f__29728__auto__();
(statearr_50710[(6)] = c__29727__auto___51543);

return statearr_50710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


var c__29727__auto___51547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_50715){
var state_val_50716 = (state_50715[(1)]);
if((state_val_50716 === (1))){
var state_50715__$1 = state_50715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50715__$1,(2),ajax_timeout_51542);
} else {
if((state_val_50716 === (2))){
var inst_50712 = (state_50715[(2)]);
var inst_50713 = flush_buffer_BANG__51461(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_50715__$1 = (function (){var statearr_50717 = state_50715;
(statearr_50717[(7)] = inst_50712);

return statearr_50717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50715__$1,inst_50713);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__29474__auto__ = null;
var taoensso$sente$state_machine__29474__auto____0 = (function (){
var statearr_50718 = [null,null,null,null,null,null,null,null];
(statearr_50718[(0)] = taoensso$sente$state_machine__29474__auto__);

(statearr_50718[(1)] = (1));

return statearr_50718;
});
var taoensso$sente$state_machine__29474__auto____1 = (function (state_50715){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_50715);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e50719){var ex__29477__auto__ = e50719;
var statearr_50720_51548 = state_50715;
(statearr_50720_51548[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_50715[(4)]))){
var statearr_50721_51549 = state_50715;
(statearr_50721_51549[(1)] = cljs.core.first((state_50715[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51550 = state_50715;
state_50715 = G__51550;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$state_machine__29474__auto__ = function(state_50715){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29474__auto____1.call(this,state_50715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29474__auto____0;
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29474__auto____1;
return taoensso$sente$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_50722 = f__29728__auto__();
(statearr_50722[(6)] = c__29727__auto___51547);

return statearr_50722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

}
}

return null;
};
var G__51455 = function (user_id,ev,var_args){
var p__50635 = null;
if (arguments.length > 2) {
var G__51551__i = 0, G__51551__a = new Array(arguments.length -  2);
while (G__51551__i < G__51551__a.length) {G__51551__a[G__51551__i] = arguments[G__51551__i + 2]; ++G__51551__i;}
  p__50635 = new cljs.core.IndexedSeq(G__51551__a,0,null);
} 
return G__51455__delegate.call(this,user_id,ev,p__50635);};
G__51455.cljs$lang$maxFixedArity = 2;
G__51455.cljs$lang$applyTo = (function (arglist__51552){
var user_id = cljs.core.first(arglist__51552);
arglist__51552 = cljs.core.next(arglist__51552);
var ev = cljs.core.first(arglist__51552);
var p__50635 = cljs.core.rest(arglist__51552);
return G__51455__delegate(user_id,ev,p__50635);
});
G__51455.cljs$core$IFn$_invoke$arity$variadic = G__51455__delegate;
return G__51455;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5802__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5802__auto__)){
var reference_csrf_token = temp__5802__auto__;
var csrf_token_from_client = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not((authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1(ring_req) : authorized_QMARK__fn.call(null,ring_req)));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
if(taoensso.sente.allow_origin_QMARK_(allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_(ring_req)){
return (unauthorized_fn.cljs$core$IFn$_invoke$arity$1 ? unauthorized_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : unauthorized_fn.call(null,ring_req));
} else {
var b2__39992__auto__ = (function (){var temp__5804__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5804__auto__)){
var uf = temp__5804__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__39992__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__39992__auto__;
return unauthorized_resp;
}
}
} else {
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null,ring_req));
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids_","connected-uids_",344311359),connected_uids_,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conns_","conns_",726827576),conns_,new cljs.core.Keyword(null,"send-buffers_","send-buffers_",1447919847),send_buffers_], null),new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function() {
var taoensso$sente$ring_handler = null;
var taoensso$sente$ring_handler__1 = (function (ring_req){
return taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3(ring_req,null,null);
});
var taoensso$sente$ring_handler__3 = (function (ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
var b2__39983__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__39983__auto__)){
var resp = b2__39983__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ring-async-resp-fn","ring-async-resp-fn",-689911654),_QMARK_ring_async_resp_fn,new cljs.core.Keyword(null,"ring-async-raise-fn","ring-async-raise-fn",744112799),_QMARK_ring_async_raise_fn,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__50723 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50723,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50723,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",716,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] Server will reply to message from %s: %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2(user_id_fn__$1(ring_req,client_id),client_id),resp_clj], null);
}),null)),null,(63),null,null,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_50731){
var state_val_50732 = (state_50731[(1)]);
if((state_val_50732 === (1))){
var inst_50726 = cljs.core.async.timeout(ms);
var state_50731__$1 = state_50731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50731__$1,(2),inst_50726);
} else {
if((state_val_50732 === (2))){
var inst_50728 = (state_50731[(2)]);
var inst_50729 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_50731__$1 = (function (){var statearr_50733 = state_50731;
(statearr_50733[(7)] = inst_50728);

return statearr_50733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50731__$1,inst_50729);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__29474__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__29474__auto____0 = (function (){
var statearr_50734 = [null,null,null,null,null,null,null,null];
(statearr_50734[(0)] = taoensso$sente$ring_handler_$_state_machine__29474__auto__);

(statearr_50734[(1)] = (1));

return statearr_50734;
});
var taoensso$sente$ring_handler_$_state_machine__29474__auto____1 = (function (state_50731){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_50731);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e50735){var ex__29477__auto__ = e50735;
var statearr_50736_51572 = state_50731;
(statearr_50736_51572[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_50731[(4)]))){
var statearr_50737_51573 = state_50731;
(statearr_50737_51573[(1)] = cljs.core.first((state_50731[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51578 = state_50731;
state_50731 = G__51578;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__29474__auto__ = function(state_50731){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____1.call(this,state_50731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__29474__auto____0;
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__29474__auto____1;
return taoensso$sente$ring_handler_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_50738 = f__29728__auto__();
(statearr_50738[(6)] = c__29727__auto__);

return statearr_50738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
});
taoensso$sente$ring_handler = function(ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler__1.call(this,ring_req);
case 3:
return taoensso$sente$ring_handler__3.call(this,ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler__1;
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$ring_handler__3;
return taoensso$sente$ring_handler;
})()
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function() {
var taoensso$sente$ring_handler = null;
var taoensso$sente$ring_handler__1 = (function (ring_req){
return taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3(ring_req,null,null);
});
var taoensso$sente$ring_handler__3 = (function (ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
var conn_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var lid_STAR_ = taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3(uid,client_id,conn_id);
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",756,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": ",lid_STAR_].join('')], null);
}),null)),null,(64),null,null,null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"lid","lid",1029596625),lid_STAR_], null));
} else {
var b2__39983__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__39983__auto__)){
var resp = b2__39983__auto__;
return resp;
} else {
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$ring_handler_$_self = null;
var taoensso$sente$ring_handler_$_self__1 = (function (event){
return taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$ring_handler_$_self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$ring_handler_$_self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler_$_self__1.call(this,event);
case 2:
return taoensso$sente$ring_handler_$_self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_self__1;
taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$ring_handler_$_self__2;
return taoensso$sente$ring_handler_$_self;
})()
;
var send_handshake_BANG__QMARK_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",776,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server will send %s handshake to %s",(cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549)),lid_STAR_], null);
}),null)),null,(65),null,null,null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
var on_error = (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",788,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s Server sch error for %s: %s",(cljs.core.truth_(websocket_QMARK_)?"[ws/on-error]":"[ajax/on-error]"),lid_STAR_,error], null);
}),null)),null,(66),null,null,null);
});
var on_msg = (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),(function (p__50739){
var vec__50740 = p__50739;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740,(1),null);
var conn_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50740,(2),null);
if(cljs.core.truth_(conn_id__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,taoensso.encore.now_udt(),conn_id__$1], null);
} else {
return null;
}
}));

var vec__50743 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50743,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50743,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347)], null))){
return receive_event_msg_BANG_(clj,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null))){
var temp__5804__auto___51596 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___51596)){
var cb_uuid_51597 = temp__5804__auto___51596;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",807,29,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-msg] Server will auto-reply to ping from %s",lid_STAR_], null);
}),null)),null,(67),null,null,null);

taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,"pong",cb_uuid_51597));
} else {
}

return receive_event_msg_BANG_(clj,null);
} else {
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$ring_handler_$_reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",817,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-msg] Server will reply to message from %s: %s",lid_STAR_,resp_clj], null);
}),null)),null,(68),null,null,null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));

}
}
});
var on_close = (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var log_prefix = (cljs.core.truth_(websocket_QMARK_)?"[ws/on-close]":"[ajax/on-close]");
var active_conn_closed_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (p__50746){
var vec__50747 = p__50746;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50747,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50747,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50747,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.now_udt(),conn_id], null),true);
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),false);
}
}));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",839,23,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s %s server sch closed for %s",log_prefix,(cljs.core.truth_(active_conn_closed_QMARK_)?"Active":"Inactive"),lid_STAR_], null);
}),null)),null,(69),null,null,null);

if(cljs.core.truth_(active_conn_closed_QMARK_)){
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_50801){
var state_val_50802 = (state_50801[(1)]);
if((state_val_50802 === (7))){
var state_50801__$1 = state_50801;
if(cljs.core.truth_(websocket_QMARK_)){
var statearr_50803_51598 = state_50801__$1;
(statearr_50803_51598[(1)] = (9));

} else {
var statearr_50804_51599 = state_50801__$1;
(statearr_50804_51599[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (1))){
var state_50801__$1 = state_50801;
if(cljs.core.truth_(websocket_QMARK_)){
var statearr_50805_51600 = state_50801__$1;
(statearr_50805_51600[(1)] = (2));

} else {
var statearr_50806_51601 = state_50801__$1;
(statearr_50806_51601[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (4))){
var inst_50753 = (state_50801[(2)]);
var inst_50754 = cljs.core.async.timeout(inst_50753);
var state_50801__$1 = state_50801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50801__$1,(5),inst_50754);
} else {
if((state_val_50802 === (15))){
var inst_50765 = (state_50801[(7)]);
var inst_50766 = (state_50801[(8)]);
var inst_50767 = (state_50801[(9)]);
var inst_50787 = (function (){var vec__50757 = inst_50765;
var active_conn_disconnected_QMARK_ = inst_50766;
var _QMARK_conn_entry = inst_50767;
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s uid port close for %s",log_prefix,lid_STAR_], null);
});
})();
var inst_50788 = (new cljs.core.Delay(inst_50787,null));
var inst_50789 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",877,33,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50788,null,(71),null,null,null);
var inst_50790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50791 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_50792 = (new cljs.core.PersistentVector(null,2,(5),inst_50790,inst_50791,null));
var inst_50793 = receive_event_msg_BANG_(inst_50792);
var state_50801__$1 = (function (){var statearr_50807 = state_50801;
(statearr_50807[(10)] = inst_50789);

return statearr_50807;
})();
var statearr_50808_51602 = state_50801__$1;
(statearr_50808_51602[(2)] = inst_50793);

(statearr_50808_51602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (13))){
var state_50801__$1 = state_50801;
var statearr_50809_51603 = state_50801__$1;
(statearr_50809_51603[(2)] = null);

(statearr_50809_51603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (6))){
var state_50801__$1 = state_50801;
var statearr_50810_51604 = state_50801__$1;
(statearr_50810_51604[(2)] = new cljs.core.Keyword(null,"info","info",-317069002));

(statearr_50810_51604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (17))){
var inst_50796 = (state_50801[(2)]);
var state_50801__$1 = state_50801;
var statearr_50811_51605 = state_50801__$1;
(statearr_50811_51605[(2)] = inst_50796);

(statearr_50811_51605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (3))){
var state_50801__$1 = state_50801;
var statearr_50812_51606 = state_50801__$1;
(statearr_50812_51606[(2)] = ms_allow_reconnect_before_close_ajax);

(statearr_50812_51606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (12))){
var inst_50765 = (state_50801[(7)]);
var inst_50766 = (state_50801[(8)]);
var inst_50767 = (state_50801[(9)]);
var inst_50780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50781 = [conn_type,uid];
var inst_50782 = (new cljs.core.PersistentVector(null,2,(5),inst_50780,inst_50781,null));
var inst_50783 = (function (){var vec__50757 = inst_50765;
var active_conn_disconnected_QMARK_ = inst_50766;
var _QMARK_conn_entry = inst_50767;
return (function (m_clients){
if(cljs.core.empty_QMARK_(m_clients)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new cljs.core.Keyword("swap","abort","swap/abort",508048993);
}
});
})();
var inst_50784 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_50782,inst_50783);
var inst_50785 = maybe_disconnect_uid_BANG__QMARK_(uid);
var state_50801__$1 = (function (){var statearr_50813 = state_50801;
(statearr_50813[(11)] = inst_50784);

return statearr_50813;
})();
if(cljs.core.truth_(inst_50785)){
var statearr_50814_51607 = state_50801__$1;
(statearr_50814_51607[(1)] = (15));

} else {
var statearr_50815_51608 = state_50801__$1;
(statearr_50815_51608[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (2))){
var state_50801__$1 = state_50801;
var statearr_50816_51609 = state_50801__$1;
(statearr_50816_51609[(2)] = ms_allow_reconnect_before_close_ws);

(statearr_50816_51609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (11))){
var inst_50773 = (state_50801[(2)]);
var state_50801__$1 = state_50801;
var statearr_50817_51610 = state_50801__$1;
(statearr_50817_51610[(2)] = inst_50773);

(statearr_50817_51610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (9))){
var state_50801__$1 = state_50801;
var statearr_50818_51611 = state_50801__$1;
(statearr_50818_51611[(2)] = new cljs.core.Keyword(null,"debug","debug",-1608172596));

(statearr_50818_51611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (5))){
var inst_50765 = (state_50801[(7)]);
var inst_50766 = (state_50801[(8)]);
var inst_50756 = (state_50801[(2)]);
var inst_50760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50761 = [conn_type,uid,client_id];
var inst_50762 = (new cljs.core.PersistentVector(null,3,(5),inst_50760,inst_50761,null));
var inst_50764 = (function (){return (function (p__50763){
var vec__50819 = p__50763;
var __QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50819,(2),null);
var _QMARK_conn_entry = vec__50819;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,_QMARK_conn_entry], null));
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,_QMARK_conn_entry], null));
}
});
})();
var inst_50765__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_50762,inst_50764);
var inst_50766__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50765__$1,(0),null);
var inst_50767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50765__$1,(1),null);
var state_50801__$1 = (function (){var statearr_50822 = state_50801;
(statearr_50822[(12)] = inst_50756);

(statearr_50822[(7)] = inst_50765__$1);

(statearr_50822[(8)] = inst_50766__$1);

(statearr_50822[(9)] = inst_50767);

return statearr_50822;
})();
if(cljs.core.truth_(inst_50766__$1)){
var statearr_50823_51612 = state_50801__$1;
(statearr_50823_51612[(1)] = (6));

} else {
var statearr_50824_51613 = state_50801__$1;
(statearr_50824_51613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (14))){
var inst_50799 = (state_50801[(2)]);
var state_50801__$1 = state_50801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50801__$1,inst_50799);
} else {
if((state_val_50802 === (16))){
var state_50801__$1 = state_50801;
var statearr_50825_51614 = state_50801__$1;
(statearr_50825_51614[(2)] = null);

(statearr_50825_51614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (10))){
var state_50801__$1 = state_50801;
var statearr_50826_51615 = state_50801__$1;
(statearr_50826_51615[(2)] = new cljs.core.Keyword(null,"trace","trace",-1082747415));

(statearr_50826_51615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50802 === (8))){
var inst_50765 = (state_50801[(7)]);
var inst_50766 = (state_50801[(8)]);
var inst_50767 = (state_50801[(9)]);
var inst_50775 = (state_50801[(2)]);
var inst_50776 = (function (){var vec__50757 = inst_50765;
var active_conn_disconnected_QMARK_ = inst_50766;
var _QMARK_conn_entry = inst_50767;
var level = inst_50775;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s Server sch on-close timeout for %s: %s",log_prefix,lid_STAR_,(cljs.core.truth_(active_conn_disconnected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnected?","disconnected?",-1423051714),true], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disconnected?","disconnected?",-1423051714),false,new cljs.core.Keyword(null,"?conn-entry","?conn-entry",-1522399252),_QMARK_conn_entry], null))], null);
});
})();
var inst_50777 = (new cljs.core.Delay(inst_50776,null));
var inst_50778 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,inst_50775,"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",861,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50777,null,(70),null,null,null);
var state_50801__$1 = (function (){var statearr_50827 = state_50801;
(statearr_50827[(13)] = inst_50778);

return statearr_50827;
})();
if(cljs.core.truth_(inst_50766)){
var statearr_50828_51616 = state_50801__$1;
(statearr_50828_51616[(1)] = (12));

} else {
var statearr_50829_51617 = state_50801__$1;
(statearr_50829_51617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__29474__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__29474__auto____0 = (function (){
var statearr_50830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50830[(0)] = taoensso$sente$ring_handler_$_state_machine__29474__auto__);

(statearr_50830[(1)] = (1));

return statearr_50830;
});
var taoensso$sente$ring_handler_$_state_machine__29474__auto____1 = (function (state_50801){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_50801);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e50831){var ex__29477__auto__ = e50831;
var statearr_50832_51618 = state_50801;
(statearr_50832_51618[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_50801[(4)]))){
var statearr_50833_51619 = state_50801;
(statearr_50833_51619[(1)] = cljs.core.first((state_50801[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51620 = state_50801;
state_50801 = G__51620;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__29474__auto__ = function(state_50801){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____1.call(this,state_50801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__29474__auto____0;
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__29474__auto____1;
return taoensso$sente$ring_handler_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_50834 = f__29728__auto__();
(statearr_50834[(6)] = c__29727__auto__);

return statearr_50834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
} else {
return null;
}
});
var on_open = (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",886,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] New server WebSocket sch for %s",lid_STAR_], null);
}),null)),null,(72),null,null,null);

if(cljs.core.truth_(send_handshake_BANG__QMARK_(server_ch,websocket_QMARK_))){
var vec__50835 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt(),conn_id], null);
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50835,(0),null);
var udt_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50835,(1),null);
if(cljs.core.truth_(ws_kalive_ms)){
var c__29727__auto___51621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_50951){
var state_val_50952 = (state_50951[(1)]);
if((state_val_50952 === (7))){
var inst_50926 = (state_50951[(7)]);
var inst_50927 = (state_50951[(8)]);
var inst_50925 = (state_50951[(2)]);
var inst_50926__$1 = cljs.core.__destructure_map(inst_50925);
var inst_50927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50926__$1,new cljs.core.Keyword(null,"recur?","recur?",774198931));
var inst_50928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50926__$1,new cljs.core.Keyword(null,"udt","udt",2011712751));
var inst_50929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50926__$1,new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116));
var inst_50930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50926__$1,new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481));
var inst_50931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50926__$1,new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453));
var state_50951__$1 = (function (){var statearr_50953 = state_50951;
(statearr_50953[(7)] = inst_50926__$1);

(statearr_50953[(8)] = inst_50927__$1);

(statearr_50953[(9)] = inst_50928);

(statearr_50953[(10)] = inst_50929);

(statearr_50953[(11)] = inst_50930);

(statearr_50953[(12)] = inst_50931);

return statearr_50953;
})();
if(cljs.core.truth_(inst_50927__$1)){
var statearr_50954_51622 = state_50951__$1;
(statearr_50954_51622[(1)] = (29));

} else {
var statearr_50955_51623 = state_50951__$1;
(statearr_50955_51623[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (20))){
var inst_50892 = taoensso.sente.interfaces.sch_close_BANG_(server_ch);
var inst_50893 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_50894 = [false];
var inst_50895 = cljs.core.PersistentHashMap.fromArrays(inst_50893,inst_50894);
var state_50951__$1 = (function (){var statearr_50956 = state_50951;
(statearr_50956[(13)] = inst_50892);

return statearr_50956;
})();
var statearr_50957_51624 = state_50951__$1;
(statearr_50957_51624[(2)] = inst_50895);

(statearr_50957_51624[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (27))){
var inst_50857 = (state_50951[(14)]);
var inst_50905 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_50906 = [true,inst_50857,ws_kalive_ms,false];
var inst_50907 = cljs.core.PersistentHashMap.fromArrays(inst_50905,inst_50906);
var state_50951__$1 = state_50951;
var statearr_50958_51625 = state_50951__$1;
(statearr_50958_51625[(2)] = inst_50907);

(statearr_50958_51625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (1))){
var inst_50838 = udt_open;
var inst_50839 = ws_kalive_ms;
var inst_50840 = inst_50838;
var inst_50841 = inst_50839;
var inst_50842 = false;
var state_50951__$1 = (function (){var statearr_50959 = state_50951;
(statearr_50959[(15)] = inst_50840);

(statearr_50959[(16)] = inst_50841);

(statearr_50959[(17)] = inst_50842);

return statearr_50959;
})();
var statearr_50960_51626 = state_50951__$1;
(statearr_50960_51626[(2)] = null);

(statearr_50960_51626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (24))){
var inst_50911 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453)];
var inst_50912 = [false,true];
var inst_50913 = cljs.core.PersistentHashMap.fromArrays(inst_50911,inst_50912);
var state_50951__$1 = state_50951;
var statearr_50961_51627 = state_50951__$1;
(statearr_50961_51627[(2)] = inst_50913);

(statearr_50961_51627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (4))){
var inst_50855 = (state_50951[(18)]);
var inst_50846 = (state_50951[(2)]);
var inst_50851 = cljs.core.deref(conns_);
var inst_50852 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50853 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_50854 = (new cljs.core.PersistentVector(null,3,(5),inst_50852,inst_50853,null));
var inst_50855__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_50851,inst_50854);
var inst_50856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50855__$1,(0),null);
var inst_50857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50855__$1,(1),null);
var inst_50858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50855__$1,(2),null);
var inst_50859 = (inst_50855__$1 == null);
var state_50951__$1 = (function (){var statearr_50962 = state_50951;
(statearr_50962[(19)] = inst_50846);

(statearr_50962[(18)] = inst_50855__$1);

(statearr_50962[(20)] = inst_50856);

(statearr_50962[(14)] = inst_50857);

(statearr_50962[(21)] = inst_50858);

return statearr_50962;
})();
if(cljs.core.truth_(inst_50859)){
var statearr_50963_51628 = state_50951__$1;
(statearr_50963_51628[(1)] = (5));

} else {
var statearr_50964_51629 = state_50951__$1;
(statearr_50964_51629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (15))){
var inst_50840 = (state_50951[(15)]);
var inst_50857 = (state_50951[(14)]);
var inst_50882 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_50840,inst_50857);
var state_50951__$1 = state_50951;
if(inst_50882){
var statearr_50965_51630 = state_50951__$1;
(statearr_50965_51630[(1)] = (17));

} else {
var statearr_50966_51631 = state_50951__$1;
(statearr_50966_51631[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (21))){
var inst_50897 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_50898 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_50897);
var state_50951__$1 = state_50951;
if(cljs.core.truth_(inst_50898)){
var statearr_50967_51632 = state_50951__$1;
(statearr_50967_51632[(1)] = (23));

} else {
var statearr_50968_51633 = state_50951__$1;
(statearr_50968_51633[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (31))){
var inst_50947 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50969_51634 = state_50951__$1;
(statearr_50969_51634[(2)] = inst_50947);

(statearr_50969_51634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (32))){
var inst_50929 = (state_50951[(10)]);
var inst_50926 = (state_50951[(7)]);
var inst_50855 = (state_50951[(18)]);
var inst_50856 = (state_50951[(20)]);
var inst_50931 = (state_50951[(12)]);
var inst_50857 = (state_50951[(14)]);
var inst_50858 = (state_50951[(21)]);
var inst_50930 = (state_50951[(11)]);
var inst_50928 = (state_50951[(9)]);
var inst_50927 = (state_50951[(8)]);
var inst_50840 = (state_50951[(15)]);
var inst_50939 = (function (){var ms_timeout = inst_50929;
var map__50850 = inst_50926;
var vec__50847 = inst_50855;
var _QMARK_sch = inst_50856;
var force_close_QMARK_ = inst_50931;
var udt_t1 = inst_50857;
var _QMARK_conn_entry = inst_50855;
var conn_id_STAR_ = inst_50858;
var expecting_pong_QMARK_ = inst_50930;
var udt = inst_50928;
var recur_QMARK_ = inst_50927;
var udt_t0 = inst_50840;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] Force close connection for %s",lid_STAR_], null);
});
})();
var inst_50940 = (new cljs.core.Delay(inst_50939,null));
var inst_50941 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",942,41,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50940,null,(75),null,null,null);
var inst_50942 = on_close(server_ch,websocket_QMARK_,null);
var state_50951__$1 = (function (){var statearr_50970 = state_50951;
(statearr_50970[(22)] = inst_50941);

return statearr_50970;
})();
var statearr_50971_51635 = state_50951__$1;
(statearr_50971_51635[(2)] = inst_50942);

(statearr_50971_51635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (33))){
var state_50951__$1 = state_50951;
var statearr_50972_51636 = state_50951__$1;
(statearr_50972_51636[(2)] = null);

(statearr_50972_51636[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (13))){
var inst_50876 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
if(cljs.core.truth_(inst_50876)){
var statearr_50973_51637 = state_50951__$1;
(statearr_50973_51637[(1)] = (14));

} else {
var statearr_50974_51638 = state_50951__$1;
(statearr_50974_51638[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (22))){
var inst_50917 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50975_51639 = state_50951__$1;
(statearr_50975_51639[(2)] = inst_50917);

(statearr_50975_51639[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (29))){
var inst_50928 = (state_50951[(9)]);
var inst_50929 = (state_50951[(10)]);
var inst_50930 = (state_50951[(11)]);
var inst_50840 = inst_50928;
var inst_50841 = inst_50929;
var inst_50842 = inst_50930;
var state_50951__$1 = (function (){var statearr_50976 = state_50951;
(statearr_50976[(15)] = inst_50840);

(statearr_50976[(16)] = inst_50841);

(statearr_50976[(17)] = inst_50842);

return statearr_50976;
})();
var statearr_50977_51640 = state_50951__$1;
(statearr_50977_51640[(2)] = null);

(statearr_50977_51640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (6))){
var inst_50858 = (state_50951[(21)]);
var inst_50865 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,inst_50858);
var state_50951__$1 = state_50951;
if(inst_50865){
var statearr_50978_51641 = state_50951__$1;
(statearr_50978_51641[(1)] = (8));

} else {
var statearr_50979_51642 = state_50951__$1;
(statearr_50979_51642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (28))){
var inst_50909 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50980_51643 = state_50951__$1;
(statearr_50980_51643[(2)] = inst_50909);

(statearr_50980_51643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (25))){
var inst_50915 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50981_51644 = state_50951__$1;
(statearr_50981_51644[(2)] = inst_50915);

(statearr_50981_51644[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (34))){
var inst_50945 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50982_51645 = state_50951__$1;
(statearr_50982_51645[(2)] = inst_50945);

(statearr_50982_51645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (17))){
var inst_50857 = (state_50951[(14)]);
var inst_50884 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_50885 = [true,inst_50857,ws_kalive_ms,false];
var inst_50886 = cljs.core.PersistentHashMap.fromArrays(inst_50884,inst_50885);
var state_50951__$1 = state_50951;
var statearr_50983_51646 = state_50951__$1;
(statearr_50983_51646[(2)] = inst_50886);

(statearr_50983_51646[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (3))){
var inst_50949 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50951__$1,inst_50949);
} else {
if((state_val_50952 === (12))){
var state_50951__$1 = state_50951;
var statearr_50984_51647 = state_50951__$1;
(statearr_50984_51647[(2)] = null);

(statearr_50984_51647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (2))){
var inst_50841 = (state_50951[(16)]);
var inst_50844 = cljs.core.async.timeout(inst_50841);
var state_50951__$1 = state_50951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50951__$1,(4),inst_50844);
} else {
if((state_val_50952 === (23))){
var state_50951__$1 = state_50951;
if(cljs.core.truth_(ws_ping_timeout_ms)){
var statearr_50985_51648 = state_50951__$1;
(statearr_50985_51648[(1)] = (26));

} else {
var statearr_50986_51649 = state_50951__$1;
(statearr_50986_51649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (19))){
var inst_50919 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50987_51650 = state_50951__$1;
(statearr_50987_51650[(2)] = inst_50919);

(statearr_50987_51650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (11))){
var inst_50856 = (state_50951[(20)]);
var inst_50872 = taoensso.sente.interfaces.sch_open_QMARK_(inst_50856);
var inst_50873 = cljs.core.not(inst_50872);
var state_50951__$1 = state_50951;
var statearr_50988_51651 = state_50951__$1;
(statearr_50988_51651[(2)] = inst_50873);

(statearr_50988_51651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (9))){
var inst_50856 = (state_50951[(20)]);
var state_50951__$1 = state_50951;
if(cljs.core.truth_(inst_50856)){
var statearr_50989_51652 = state_50951__$1;
(statearr_50989_51652[(1)] = (11));

} else {
var statearr_50990_51653 = state_50951__$1;
(statearr_50990_51653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (5))){
var inst_50861 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_50862 = [false];
var inst_50863 = cljs.core.PersistentHashMap.fromArrays(inst_50861,inst_50862);
var state_50951__$1 = state_50951;
var statearr_50991_51654 = state_50951__$1;
(statearr_50991_51654[(2)] = inst_50863);

(statearr_50991_51654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (14))){
var inst_50878 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453)];
var inst_50879 = [false,true];
var inst_50880 = cljs.core.PersistentHashMap.fromArrays(inst_50878,inst_50879);
var state_50951__$1 = state_50951;
var statearr_50992_51655 = state_50951__$1;
(statearr_50992_51655[(2)] = inst_50880);

(statearr_50992_51655[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (26))){
var inst_50857 = (state_50951[(14)]);
var inst_50901 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_50902 = [true,inst_50857,ws_ping_timeout_ms,true];
var inst_50903 = cljs.core.PersistentHashMap.fromArrays(inst_50901,inst_50902);
var state_50951__$1 = state_50951;
var statearr_50993_51656 = state_50951__$1;
(statearr_50993_51656[(2)] = inst_50903);

(statearr_50993_51656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (16))){
var inst_50921 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50994_51657 = state_50951__$1;
(statearr_50994_51657[(2)] = inst_50921);

(statearr_50994_51657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (30))){
var inst_50929 = (state_50951[(10)]);
var inst_50926 = (state_50951[(7)]);
var inst_50855 = (state_50951[(18)]);
var inst_50856 = (state_50951[(20)]);
var inst_50931 = (state_50951[(12)]);
var inst_50857 = (state_50951[(14)]);
var inst_50858 = (state_50951[(21)]);
var inst_50930 = (state_50951[(11)]);
var inst_50928 = (state_50951[(9)]);
var inst_50927 = (state_50951[(8)]);
var inst_50840 = (state_50951[(15)]);
var inst_50935 = (function (){var ms_timeout = inst_50929;
var map__50850 = inst_50926;
var vec__50847 = inst_50855;
var _QMARK_sch = inst_50856;
var force_close_QMARK_ = inst_50931;
var udt_t1 = inst_50857;
var _QMARK_conn_entry = inst_50855;
var conn_id_STAR_ = inst_50858;
var expecting_pong_QMARK_ = inst_50930;
var udt = inst_50928;
var recur_QMARK_ = inst_50927;
var udt_t0 = inst_50840;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] Ending kalive loop for %s",lid_STAR_], null);
});
})();
var inst_50936 = (new cljs.core.Delay(inst_50935,null));
var inst_50937 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",938,39,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50936,null,(74),null,null,null);
var state_50951__$1 = (function (){var statearr_50995 = state_50951;
(statearr_50995[(23)] = inst_50937);

return statearr_50995;
})();
if(cljs.core.truth_(inst_50931)){
var statearr_50996_51658 = state_50951__$1;
(statearr_50996_51658[(1)] = (32));

} else {
var statearr_50997_51659 = state_50951__$1;
(statearr_50997_51659[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (10))){
var inst_50923 = (state_50951[(2)]);
var state_50951__$1 = state_50951;
var statearr_50998_51660 = state_50951__$1;
(statearr_50998_51660[(2)] = inst_50923);

(statearr_50998_51660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (18))){
var inst_50840 = (state_50951[(15)]);
var inst_50841 = (state_50951[(16)]);
var inst_50842 = (state_50951[(17)]);
var inst_50855 = (state_50951[(18)]);
var inst_50856 = (state_50951[(20)]);
var inst_50857 = (state_50951[(14)]);
var inst_50858 = (state_50951[(21)]);
var inst_50888 = (function (){var udt_t0 = inst_50840;
var ms_timeout = inst_50841;
var expecting_pong_QMARK_ = inst_50842;
var _QMARK_conn_entry = inst_50855;
var vec__50847 = inst_50855;
var _QMARK_sch = inst_50856;
var udt_t1 = inst_50857;
var conn_id_STAR_ = inst_50858;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] kalive loop inactivity for %s",lid_STAR_], null);
});
})();
var inst_50889 = (new cljs.core.Delay(inst_50888,null));
var inst_50890 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",912,45,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50889,null,(73),null,null,null);
var state_50951__$1 = (function (){var statearr_50999 = state_50951;
(statearr_50999[(24)] = inst_50890);

return statearr_50999;
})();
if(cljs.core.truth_(inst_50842)){
var statearr_51000_51661 = state_50951__$1;
(statearr_51000_51661[(1)] = (20));

} else {
var statearr_51001_51662 = state_50951__$1;
(statearr_51001_51662[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50952 === (8))){
var inst_50867 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_50868 = [false];
var inst_50869 = cljs.core.PersistentHashMap.fromArrays(inst_50867,inst_50868);
var state_50951__$1 = state_50951;
var statearr_51002_51663 = state_50951__$1;
(statearr_51002_51663[(2)] = inst_50869);

(statearr_51002_51663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__29474__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__29474__auto____0 = (function (){
var statearr_51003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51003[(0)] = taoensso$sente$ring_handler_$_state_machine__29474__auto__);

(statearr_51003[(1)] = (1));

return statearr_51003;
});
var taoensso$sente$ring_handler_$_state_machine__29474__auto____1 = (function (state_50951){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_50951);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e51004){var ex__29477__auto__ = e51004;
var statearr_51005_51664 = state_50951;
(statearr_51005_51664[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_50951[(4)]))){
var statearr_51006_51665 = state_50951;
(statearr_51006_51665[(1)] = cljs.core.first((state_50951[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51666 = state_50951;
state_50951 = G__51666;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__29474__auto__ = function(state_50951){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____1.call(this,state_50951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__29474__auto____0;
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__29474__auto____1;
return taoensso$sente$ring_handler_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_51007 = f__29728__auto__();
(statearr_51007[(6)] = c__29727__auto___51621);

return statearr_51007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

} else {
}

if(cljs.core.truth_(connect_uid_BANG__QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",946,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] uid port open for %s",lid_STAR_], null);
}),null)),null,(76),null,null,null);

return receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
return null;
}
} else {
return null;
}
} else {
var send_handshake_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null)) == null);
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,(cljs.core.truth_(send_handshake_QMARK_)?new cljs.core.Keyword(null,"info","info",-317069002):new cljs.core.Keyword(null,"trace","trace",-1082747415)),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",955,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] New server Ajax sch (poll/handshake) for %s: %s",lid_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send-handshake?","send-handshake?",-1890012461),send_handshake_QMARK_], null)], null);
}),null)),null,(77),null,null,null);

if(cljs.core.truth_(send_handshake_QMARK_)){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.now_udt(),conn_id], null);
}));

return send_handshake_BANG__QMARK_(server_ch,websocket_QMARK_);
} else {
var vec__51008 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt(),conn_id], null);
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51008,(0),null);
var udt_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51008,(1),null);
var temp__5804__auto___51667 = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___51667)){
var ms_51668 = temp__5804__auto___51667;
var c__29727__auto___51669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_51040){
var state_val_51041 = (state_51040[(1)]);
if((state_val_51041 === (1))){
var inst_51011 = cljs.core.async.timeout(ms_51668);
var state_51040__$1 = state_51040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51040__$1,(2),inst_51011);
} else {
if((state_val_51041 === (2))){
var inst_51018 = (state_51040[(7)]);
var inst_51013 = (state_51040[(2)]);
var inst_51014 = cljs.core.deref(conns_);
var inst_51015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51016 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_51017 = (new cljs.core.PersistentVector(null,3,(5),inst_51015,inst_51016,null));
var inst_51018__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_51014,inst_51017);
var state_51040__$1 = (function (){var statearr_51042 = state_51040;
(statearr_51042[(8)] = inst_51013);

(statearr_51042[(7)] = inst_51018__$1);

return statearr_51042;
})();
if(cljs.core.truth_(inst_51018__$1)){
var statearr_51043_51670 = state_51040__$1;
(statearr_51043_51670[(1)] = (3));

} else {
var statearr_51044_51671 = state_51040__$1;
(statearr_51044_51671[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51041 === (3))){
var inst_51018 = (state_51040[(7)]);
var inst_51025 = (state_51040[(9)]);
var inst_51023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51018,(0),null);
var inst_51024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51018,(1),null);
var inst_51025__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51018,(2),null);
var inst_51026 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,inst_51025__$1);
var state_51040__$1 = (function (){var statearr_51045 = state_51040;
(statearr_51045[(10)] = inst_51023);

(statearr_51045[(11)] = inst_51024);

(statearr_51045[(9)] = inst_51025__$1);

return statearr_51045;
})();
if(inst_51026){
var statearr_51046_51672 = state_51040__$1;
(statearr_51046_51672[(1)] = (6));

} else {
var statearr_51047_51673 = state_51040__$1;
(statearr_51047_51673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51041 === (4))){
var state_51040__$1 = state_51040;
var statearr_51048_51674 = state_51040__$1;
(statearr_51048_51674[(2)] = null);

(statearr_51048_51674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51041 === (5))){
var inst_51038 = (state_51040[(2)]);
var state_51040__$1 = state_51040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51040__$1,inst_51038);
} else {
if((state_val_51041 === (6))){
var inst_51018 = (state_51040[(7)]);
var inst_51023 = (state_51040[(10)]);
var inst_51024 = (state_51040[(11)]);
var inst_51025 = (state_51040[(9)]);
var inst_51028 = (function (){var temp__5804__auto____$1 = inst_51018;
var vec__51020 = inst_51018;
var __QMARK_sch = inst_51023;
var _udt = inst_51024;
var conn_id_STAR_ = inst_51025;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] Polling timeout for %s",lid_STAR_], null);
});
})();
var inst_51029 = (new cljs.core.Delay(inst_51028,null));
var inst_51030 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",975,37,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51029,null,(78),null,null,null);
var inst_51031 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_51032 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_51031);
var state_51040__$1 = (function (){var statearr_51049 = state_51040;
(statearr_51049[(12)] = inst_51030);

return statearr_51049;
})();
var statearr_51050_51675 = state_51040__$1;
(statearr_51050_51675[(2)] = inst_51032);

(statearr_51050_51675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51041 === (7))){
var state_51040__$1 = state_51040;
var statearr_51051_51676 = state_51040__$1;
(statearr_51051_51676[(2)] = null);

(statearr_51051_51676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51041 === (8))){
var inst_51035 = (state_51040[(2)]);
var state_51040__$1 = state_51040;
var statearr_51052_51677 = state_51040__$1;
(statearr_51052_51677[(2)] = inst_51035);

(statearr_51052_51677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__29474__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__29474__auto____0 = (function (){
var statearr_51053 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51053[(0)] = taoensso$sente$ring_handler_$_state_machine__29474__auto__);

(statearr_51053[(1)] = (1));

return statearr_51053;
});
var taoensso$sente$ring_handler_$_state_machine__29474__auto____1 = (function (state_51040){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_51040);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e51054){var ex__29477__auto__ = e51054;
var statearr_51055_51678 = state_51040;
(statearr_51055_51678[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_51040[(4)]))){
var statearr_51056_51679 = state_51040;
(statearr_51056_51679[(1)] = cljs.core.first((state_51040[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51680 = state_51040;
state_51040 = G__51680;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__29474__auto__ = function(state_51040){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__29474__auto____1.call(this,state_51040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__29474__auto____0;
taoensso$sente$ring_handler_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__29474__auto____1;
return taoensso$sente$ring_handler_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_51057 = f__29728__auto__();
(statearr_51057[(6)] = c__29727__auto___51669);

return statearr_51057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

} else {
}

if(cljs.core.truth_(connect_uid_BANG__QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",980,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] uid port open for %s",lid_STAR_], null);
}),null)),null,(79),null,null,null);

return receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
return null;
}
}
}
});
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ring-async-resp-fn","ring-async-resp-fn",-689911654),_QMARK_ring_async_resp_fn,new cljs.core.Keyword(null,"ring-async-raise-fn","ring-async-raise-fn",744112799),_QMARK_ring_async_raise_fn,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),on_msg,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
}
}
});
taoensso$sente$ring_handler = function(ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler__1.call(this,ring_req);
case 3:
return taoensso$sente$ring_handler__3.call(this,ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler__1;
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$ring_handler__3;
return taoensso$sente$ring_handler;
})()
], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq50617){
var G__50618 = cljs.core.first(seq50617);
var seq50617__$1 = cljs.core.next(seq50617);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50618,seq50617__$1);
}));

/**
 * Debugging tool. Proportion ∈ℝ[0,1] of connection activities to sabotage.
 */
taoensso.sente._STAR_simulated_bad_conn_rate_STAR_ = null;
taoensso.sente.simulated_bad_conn_QMARK_ = (function taoensso$sente$simulated_bad_conn_QMARK_(){
var temp__5804__auto__ = taoensso.sente._STAR_simulated_bad_conn_rate_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var sbcr = temp__5804__auto__;
return taoensso.encore.chance(sbcr);
} else {
return null;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's conns.
 *   Allows some time for possible reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_clients_BANG_(conn_type,conns_,uid,buffered_evs_pstr,n_buffered_evs){
var e_51681 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
})(conn_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51058){if((e51058 instanceof Error)){
var e_51681 = e51058;
return e_51681;
} else {
throw e51058;

}
}})();
if((e_51681 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1005,3,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null"], null), null)], null),null,new cljs.core.Symbol(null,"conn-type","conn-type",1610962884,null),conn_type,e_51681,null);
}

var ms_backoffs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(720),(720)], null);
var websocket_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_type,new cljs.core.Keyword(null,"ws","ws",86841443));
var udt_t0 = taoensso.encore.now_udt();
var temp__5804__auto__ = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var client_ids = temp__5804__auto__;
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_51092){
var state_val_51093 = (state_51092[(1)]);
if((state_val_51093 === (7))){
var inst_51064 = (state_51092[(7)]);
var inst_51061 = (state_51092[(8)]);
var inst_51070 = (state_51092[(9)]);
var inst_51072 = cljs.core.count(client_ids);
var inst_51073 = cljs.core.count(inst_51064);
var inst_51074 = (inst_51072 - inst_51073);
var inst_51075 = (function (){var pending = inst_51064;
var idx = inst_51061;
var temp__5802__auto__ = inst_51070;
var done_QMARK_ = inst_51070;
var n_desired = inst_51072;
var n_success = inst_51074;
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sent %s buffered evs to %s/%s %s clients for %s in %s attempt/s (%s msecs)",n_buffered_evs,n_success,n_desired,conn_type,taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid),(idx + (1)),(taoensso.encore.now_udt() - udt_t0)], null);
});
})();
var inst_51076 = (new cljs.core.Delay(inst_51075,null));
var inst_51077 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1042,15,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51076,null,(80),null,null,null);
var state_51092__$1 = state_51092;
var statearr_51094_51682 = state_51092__$1;
(statearr_51094_51682[(2)] = inst_51077);

(statearr_51094_51682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (1))){
var inst_51059 = cljs.core.set(client_ids);
var inst_51060 = inst_51059;
var inst_51061 = (0);
var state_51092__$1 = (function (){var statearr_51095 = state_51092;
(statearr_51095[(10)] = inst_51060);

(statearr_51095[(8)] = inst_51061);

return statearr_51095;
})();
var statearr_51096_51683 = state_51092__$1;
(statearr_51096_51683[(2)] = null);

(statearr_51096_51683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (4))){
var inst_51065 = (state_51092[(11)]);
var state_51092__$1 = state_51092;
var statearr_51097_51684 = state_51092__$1;
(statearr_51097_51684[(2)] = inst_51065);

(statearr_51097_51684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (6))){
var inst_51070 = (state_51092[(9)]);
var inst_51070__$1 = (state_51092[(2)]);
var state_51092__$1 = (function (){var statearr_51098 = state_51092;
(statearr_51098[(9)] = inst_51070__$1);

return statearr_51098;
})();
if(cljs.core.truth_(inst_51070__$1)){
var statearr_51099_51685 = state_51092__$1;
(statearr_51099_51685[(1)] = (7));

} else {
var statearr_51100_51686 = state_51092__$1;
(statearr_51100_51686[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (3))){
var inst_51090 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51092__$1,inst_51090);
} else {
if((state_val_51093 === (2))){
var inst_51060 = (state_51092[(10)]);
var inst_51061 = (state_51092[(8)]);
var inst_51064 = (state_51092[(7)]);
var inst_51065 = (state_51092[(11)]);
var inst_51063 = (function (){var pending = inst_51060;
var idx = inst_51061;
return (function (pending__$1,client_id){
var temp__5802__auto__ = (function (){var temp__5804__auto____$1 = (function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var vec__51101 = temp__5804__auto____$1;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51101,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51101,(1),null);
var conn_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51101,(2),null);
var temp__5804__auto____$2 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto____$2)){
var sch = temp__5804__auto____$2;
if(cljs.core.truth_(taoensso.sente.simulated_bad_conn_QMARK_())){
return null;
} else {
if(cljs.core.truth_(taoensso.sente.interfaces.sch_send_BANG_(sch,websocket_QMARK_,buffered_evs_pstr))){
return conn_id;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var conn_id = temp__5804__auto____$1;
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (p__51104){
var vec__51105 = p__51104;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51105,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51105,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51105,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
if(websocket_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,taoensso.encore.now_udt(),conn_id], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt,conn_id], null);
}
} else {
return new cljs.core.Keyword("swap","abort","swap/abort",508048993);
}
}));

return true;
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var sent_QMARK_ = temp__5802__auto__;
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending__$1,client_id);
} else {
return pending__$1;
}
});
})();
var inst_51064__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_51063,inst_51060,inst_51060);
var inst_51065__$1 = cljs.core.empty_QMARK_(inst_51064__$1);
var state_51092__$1 = (function (){var statearr_51108 = state_51092;
(statearr_51108[(7)] = inst_51064__$1);

(statearr_51108[(11)] = inst_51065__$1);

return statearr_51108;
})();
if(inst_51065__$1){
var statearr_51109_51687 = state_51092__$1;
(statearr_51109_51687[(1)] = (4));

} else {
var statearr_51110_51688 = state_51092__$1;
(statearr_51110_51688[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (9))){
var inst_51088 = (state_51092[(2)]);
var state_51092__$1 = state_51092;
var statearr_51111_51689 = state_51092__$1;
(statearr_51111_51689[(2)] = inst_51088);

(statearr_51111_51689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (5))){
var inst_51061 = (state_51092[(8)]);
var inst_51068 = (inst_51061 > (4));
var state_51092__$1 = state_51092;
var statearr_51112_51690 = state_51092__$1;
(statearr_51112_51690[(2)] = inst_51068);

(statearr_51112_51690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (10))){
var inst_51061 = (state_51092[(8)]);
var inst_51064 = (state_51092[(7)]);
var inst_51084 = (state_51092[(2)]);
var inst_51085 = (inst_51061 + (1));
var inst_51060 = inst_51064;
var inst_51061__$1 = inst_51085;
var state_51092__$1 = (function (){var statearr_51113 = state_51092;
(statearr_51113[(12)] = inst_51084);

(statearr_51113[(10)] = inst_51060);

(statearr_51113[(8)] = inst_51061__$1);

return statearr_51113;
})();
var statearr_51114_51691 = state_51092__$1;
(statearr_51114_51691[(2)] = null);

(statearr_51114_51691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51093 === (8))){
var inst_51061 = (state_51092[(8)]);
var inst_51079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_51061);
var inst_51080 = cljs.core.rand_int(inst_51079);
var inst_51081 = (inst_51079 + inst_51080);
var inst_51082 = cljs.core.async.timeout(inst_51081);
var state_51092__$1 = state_51092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51092__$1,(10),inst_51082);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto____0 = (function (){
var statearr_51115 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51115[(0)] = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto__);

(statearr_51115[(1)] = (1));

return statearr_51115;
});
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto____1 = (function (state_51092){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_51092);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e51116){var ex__29477__auto__ = e51116;
var statearr_51117_51692 = state_51092;
(statearr_51117_51692[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_51092[(4)]))){
var statearr_51118_51693 = state_51092;
(statearr_51118_51693[(1)] = cljs.core.first((state_51092[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51694 = state_51092;
state_51092 = G__51694;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto__ = function(state_51092){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto____1.call(this,state_51092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto____0;
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_51119 = f__29728__auto__();
(statearr_51119[(6)] = c__29727__auto__);

return statearr_51119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
} else {
return null;
}
});
/**
 * Alias of `taoensso.encore/ajax-call`
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_call;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_51695 = (function (chsk){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5394__auto__.call(null,chsk));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5392__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_51695(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_51696 = (function (chsk,reason){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5394__auto__.call(null,chsk,reason));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5392__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_51696(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_51697 = (function (chsk,reason){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5394__auto__.call(null,chsk,reason));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5392__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_51697(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_break_connection_BANG_$dyn_51698 = (function (chsk,opts){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_break_connection_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(chsk,opts) : m__5394__auto__.call(null,chsk,opts));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_break_connection_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(chsk,opts) : m__5392__auto__.call(null,chsk,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-break-connection!",chsk);
}
}
});
taoensso.sente._chsk_break_connection_BANG_ = (function taoensso$sente$_chsk_break_connection_BANG_(chsk,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2(chsk,opts);
} else {
return taoensso$sente$IChSocket$_chsk_break_connection_BANG_$dyn_51698(chsk,opts);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_51699 = (function (chsk,ev,opts){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5394__auto__.call(null,chsk,ev,opts));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5392__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_51699(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Cycles connection, useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));
});
/**
 * Breaks channel socket's underlying connection without doing a clean
 *   disconnect as in `chsk-disconnect!`. Useful for simulating broken
 *   connections in testing, etc.
 * 
 *   Options:
 * 
 *     `:close-ws?` - (Default: true)
 *       Allow WebSocket's `on-close` event to fire?
 *       Set to falsey to ~simulate a broken socket that doesn't realise
 *       it's broken.
 */
taoensso.sente.chsk_break_connection_BANG_ = (function taoensso$sente$chsk_break_connection_BANG_(var_args){
var G__51121 = arguments.length;
switch (G__51121) {
case 1:
return taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (chsk){
return taoensso.sente._chsk_break_connection_BANG_(chsk,null);
}));

(taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,p__51122){
var map__51123 = p__51122;
var map__51123__$1 = cljs.core.__destructure_map(map__51123);
var opts = map__51123__$1;
var close_ws_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51123__$1,new cljs.core.Keyword(null,"close-ws?","close-ws?",-1488665553),true);
return taoensso.sente._chsk_break_connection_BANG_(chsk,opts);
}));

(taoensso.sente.chsk_break_connection_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__51125 = arguments.length;
switch (G__51125) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1093,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk send: %s",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null)], null);
}),null)),null,(81),null,null,null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1097,6,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk send against closed chsk: %s",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb?","cb?",1370758422),cljs.core.boolean$(_QMARK_cb_fn)], null)], null);
}),null)),null,(82),null,null,null);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if(cljs.core.truth_((function (){var or__5045__auto__ = (((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if(cljs.core.truth_((function (){var or__5045__auto__ = (_QMARK_cb == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.ifn_QMARK_(_QMARK_cb);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
return taoensso.encore.chan_QMARK_(_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5804__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto__)){
var cb_uuid = temp__5804__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__51126 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
return taoensso.encore.swapped(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51126,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51126,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var old_open_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
var new_open_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state));
var open_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_open_QMARK_,old_open_QMARK_);
var opened_QMARK_ = ((new_open_QMARK_) && ((!(old_open_QMARK_))));
var closed_QMARK_ = (((!(new_open_QMARK_))) && (old_open_QMARK_));
var first_open_QMARK_ = ((opened_QMARK_) && (cljs.core.not(new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732).cljs$core$IFn$_invoke$arity$1(old_state))));
var new_state__$1 = (((!(open_changed_QMARK_)))?new_state:taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(new_state,new cljs.core.Keyword(null,"open-changed?","open-changed?",-3609790),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),closed_QMARK_,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_open_QMARK_], 0)));
if(opened_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1142,22,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk now open"], null);
}),null)),null,(83),null,null,null);
} else {
if(closed_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1143,22,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk now closed, reason: %s",cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),"unknown")], null);
}),null)),null,(84),null,null,null);
} else {
}
}

var output = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1,open_changed_QMARK_], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return open_changed_QMARK_;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_51702 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51129){if((e51129 instanceof Error)){
var e_51702 = e51129;
return e_51702;
} else {
throw e51129;

}
}})();
if((e_51702 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1151,6,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"state","state",-348086572,null),state,e_51702,null);
}

var e_51703 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"ws-error","ws-error",263286885),null,new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null,new cljs.core.Keyword(null,"clean","clean",41534079),null], null), null)),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51130){if((e51130 instanceof Error)){
var e_51703 = e51130;
return e_51703;
} else {
throw e51130;

}
}})();
if((e_51703 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1152,6,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),"null",new cljs.core.Keyword(null,"ws-error","ws-error",263286885),"null",new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274),"null",new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),"null",new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),"null",new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),"null",new cljs.core.Keyword(null,"clean","clean",41534079),"null"], null), null)], null),null,new cljs.core.Symbol(null,"reason","reason",-430220232,null),reason,e_51703,null);
}

var closing_QMARK_ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
var m = state;
var m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
if(cljs.core.truth_(closing_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return m__$2;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_51704 = (function (){try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_(_QMARK_cb))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51131){if((e51131 instanceof Error)){
var e_51704 = e51131;
return e_51704;
} else {
throw e51131;

}
}})();
if((e_51704 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1177,10,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol("taoensso.encore","chan?","taoensso.encore/chan?",-249096746,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),_QMARK_cb,e_51704,null);
}

taoensso.sente.assert_event(ev);

var vec__51132 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51132,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51132,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname(ev_id)),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1187,25,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol(null,"clj","clj",980036099,null),clj,null,null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1189,8,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client received %s buffered evs from server: %s",cljs.core.count(buffered_evs),clj], null);
}),null)),null,(85),null,null,null);

var seq__51135 = cljs.core.seq(buffered_evs);
var chunk__51136 = null;
var count__51137 = (0);
var i__51138 = (0);
while(true){
if((i__51138 < count__51137)){
var ev = chunk__51136.cljs$core$IIndexed$_nth$arity$2(null,i__51138);
taoensso.sente.assert_event(ev);

var vec__51145_51705 = ev;
var id_51706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51145_51705,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_51706),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__51707 = seq__51135;
var G__51708 = chunk__51136;
var G__51709 = count__51137;
var G__51710 = (i__51138 + (1));
seq__51135 = G__51707;
chunk__51136 = G__51708;
count__51137 = G__51709;
i__51138 = G__51710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51135);
if(temp__5804__auto__){
var seq__51135__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51135__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__51135__$1);
var G__51711 = cljs.core.chunk_rest(seq__51135__$1);
var G__51712 = c__5568__auto__;
var G__51713 = cljs.core.count(c__5568__auto__);
var G__51714 = (0);
seq__51135 = G__51711;
chunk__51136 = G__51712;
count__51137 = G__51713;
i__51138 = G__51714;
continue;
} else {
var ev = cljs.core.first(seq__51135__$1);
taoensso.sente.assert_event(ev);

var vec__51148_51715 = ev;
var id_51716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51148_51715,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_51716),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__51717 = cljs.core.next(seq__51135__$1);
var G__51718 = null;
var G__51719 = (0);
var G__51720 = (0);
seq__51135 = G__51717;
chunk__51136 = G__51718;
count__51137 = G__51719;
i__51138 = G__51720;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__5043__auto__ = cljs.core.vector_QMARK_(x);
if(and__5043__auto__){
var vec__51151 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51151,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__5043__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_51721 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51154){if((e51154 instanceof Error)){
var e_51721 = e51154;
return e_51721;
} else {
throw e51154;

}
}})();
if((e_51721 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1204,6,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null"], null), null)], null),null,new cljs.core.Symbol(null,"chsk-type","chsk-type",40874615,null),chsk_type,e_51721,null);
}

var e_51722 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51155){if((e51155 instanceof Error)){
var e_51722 = e51155;
return e_51722;
} else {
throw e51155;

}
}})();
if((e_51722 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1205,6,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"handshake?","handshake?",1216788434,null),new cljs.core.Symbol("taoensso.sente","handshake?","taoensso.sente/handshake?",389425041,null),new cljs.core.Symbol(null,"clj","clj",980036099,null),clj,e_51722,null);
}

var vec__51156 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51156,(0),null);
var vec__51159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51156,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51159,(2),null);
var map__51162 = chsk;
var map__51162__$1 = cljs.core.__destructure_map(map__51162);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51162__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1226,8,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client received %s %s handshake from server: %s",((first_handshake_QMARK_)?"first":"new"),chsk_type,clj], null);
}),null)),null,(86),null,null,null);

taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__51164 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__51164) : require_fn.call(null,G__51164));
}catch (e51163){var e = e51163;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.make_client_ws_js = (function taoensso$sente$make_client_ws_js(p__51165){
var map__51166 = p__51165;
var map__51166__$1 = cljs.core.__destructure_map(map__51166);
var opts = map__51166__$1;
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var binary_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51166__$1,new cljs.core.Keyword(null,"binary-type","binary-type",1096940609));
var temp__5804__auto__ = (function (){var or__5045__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var WebSocket = temp__5804__auto__;
return (new cljs.core.Delay((function (){
var socket = (new WebSocket(uri_str));
var G__51167_51723 = socket;
(G__51167_51723["onerror"] = on_error);

(G__51167_51723["onmessage"] = on_message);

(G__51167_51723["onclose"] = on_close);


var temp__5804__auto___51724__$1 = binary_type;
if(cljs.core.truth_(temp__5804__auto___51724__$1)){
var bt_51725 = temp__5804__auto___51724__$1;
(socket["binaryType"] = bt_51725);
} else {
}

return socket;
}),null));
} else {
return null;
}
});
/**
 * Returns nil if WebSocket client cannot be created, or a delay
 *   that can be derefed to get a connected client.
 */
taoensso.sente.default_client_ws_constructor = (function taoensso$sente$default_client_ws_constructor(p__51168){
var map__51169 = p__51168;
var map__51169__$1 = cljs.core.__destructure_map(map__51169);
var opts = map__51169__$1;
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51169__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.make_client_ws_js(opts);
});
/**
 * Returns non-blank client CSRF token ?string from given token string
 *   or (fn [])->?string.
 */
taoensso.sente.get_client_csrf_token_str = (function taoensso$sente$get_client_csrf_token_str(warn_QMARK_,token_or_fn){
if(cljs.core.truth_(token_or_fn)){
var dynamic_QMARK_ = cljs.core.fn_QMARK_(token_or_fn);
var temp__5802__auto__ = taoensso.encore.as__QMARK_nblank(((dynamic_QMARK_)?(token_or_fn.cljs$core$IFn$_invoke$arity$0 ? token_or_fn.cljs$core$IFn$_invoke$arity$0() : token_or_fn.call(null)):token_or_fn));
if(cljs.core.truth_(temp__5802__auto__)){
var token = temp__5802__auto__;
return token;
} else {
var temp__5804__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(warn_QMARK_,new cljs.core.Keyword(null,"dynamic","dynamic",704819571)))?dynamic_QMARK_:warn_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var warn_QMARK___$1 = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1346,11,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no client CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,(87),null,null,null);

return null;
} else {
return null;
}
}
} else {
return null;
}
});
taoensso.sente.client_unloading_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
try{goog.global.addEventListener("beforeunload",(function (event){
cljs.core.reset_BANG_(taoensso.sente.client_unloading_QMARK__,true);

return null;
}));
}catch (e51170){var __51726 = e51170;
}taoensso.sente.retry_connect_chsk_BANG_ = (function taoensso$sente$retry_connect_chsk_BANG_(chsk,backoff_ms_fn,connect_fn,retry_count){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(retry_count,(1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1361,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will try reconnect chsk now"], null);
}),null)),null,(88),null,null,null);

return (connect_fn.cljs$core$IFn$_invoke$arity$0 ? connect_fn.cljs$core$IFn$_invoke$arity$0() : connect_fn.call(null));
} else {
var backoff_ms = (backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count) : backoff_ms_fn.call(null,retry_count));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1367,7,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will try reconnect chsk (attempt %s) after %s msecs",retry_count,backoff_ms], null);
}),null)),null,(89),null,null,null);

goog.global.setTimeout(connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__51171_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51171_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.conn_id_ = conn_id_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.ws_kalive_ms = ws_kalive_ms;
this.ws_ping_timeout_ms = ws_ping_timeout_ms;
this.ws_opts = ws_opts;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.ws_constructor = ws_constructor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k51177,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__51181 = k51177;
var G__51181__$1 = (((G__51181 instanceof cljs.core.Keyword))?G__51181.fqn:null);
switch (G__51181__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "conn-id_":
return self__.conn_id_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ws-ping-timeout-ms":
return self__.ws_ping_timeout_ms;

break;
case "ws-opts":
return self__.ws_opts;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "ws-constructor":
return self__.ws_constructor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51177,else__5346__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__51182){
var vec__51183 = p__51182;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51183,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51183,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),self__.ws_ping_timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),self__.ws_constructor],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51176){
var self__ = this;
var G__51176__$1 = this;
return (new cljs.core.RecordIter((0),G__51176__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51178,other51179){
var self__ = this;
var this51178__$1 = this;
return (((!((other51179 == null)))) && ((((this51178__$1.constructor === other51179.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.client_id,other51179.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.chs,other51179.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.params,other51179.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.headers,other51179.headers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.packer,other51179.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.url,other51179.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.state_,other51179.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.conn_id_,other51179.conn_id_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.retry_count_,other51179.retry_count_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.ever_opened_QMARK__,other51179.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.ws_kalive_ms,other51179.ws_kalive_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.ws_ping_timeout_ms,other51179.ws_ping_timeout_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.ws_opts,other51179.ws_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.backoff_ms_fn,other51179.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.cbs_waiting_,other51179.cbs_waiting_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.socket_,other51179.socket_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.udt_last_comms_,other51179.udt_last_comms_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.ws_constructor,other51179.ws_constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51178__$1.__extmap,other51179.__extmap)))))))))))))))))))))))))))))))))))))))));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k51177){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51186 = k51177;
var G__51186__$1 = (((G__51186 instanceof cljs.core.Keyword))?G__51186.fqn:null);
switch (G__51186__$1) {
case "client-id":
case "chs":
case "params":
case "headers":
case "packer":
case "url":
case "state_":
case "conn-id_":
case "retry-count_":
case "ever-opened?_":
case "ws-kalive-ms":
case "ws-ping-timeout-ms":
case "ws-opts":
case "backoff-ms-fn":
case "cbs-waiting_":
case "socket_":
case "udt-last-comms_":
case "ws-constructor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51177);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__51176){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51187 = cljs.core.keyword_identical_QMARK_;
var expr__51188 = k__5352__auto__;
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__51188)))){
return (new taoensso.sente.ChWebSocket(G__51176,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__51176,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__51176,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__51176,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__51176,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__51176,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__51176,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,G__51176,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,G__51176,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,G__51176,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__51176,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,G__51176,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,G__51176,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,G__51176,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,G__51176,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,G__51176,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__51176,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51187.cljs$core$IFn$_invoke$arity$2 ? pred__51187.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),expr__51188) : pred__51187.call(null,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),expr__51188)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__51176,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__51176),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),self__.ws_ping_timeout_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),self__.ws_constructor,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__51176){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,G__51176,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.conn_id_,null);

var closed_QMARK_ = taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51172_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__51172_SHARP_,reason);
}));
var temp__5804__auto___51729 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto___51729)){
var vec__51190_51730 = temp__5804__auto___51729;
var s_51731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51190_51730,(0),null);
var _sid_51732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51190_51730,(1),null);
s_51731.close((1000),"CLOSE_NORMAL");
} else {
}

return closed_QMARK_;
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,opts){
var self__ = this;
var chsk__$1 = this;
var map__51193 = opts;
var map__51193__$1 = cljs.core.__destructure_map(map__51193);
var close_ws_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51193__$1,new cljs.core.Keyword(null,"close-ws?","close-ws?",-1488665553));
var ws_code = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51193__$1,new cljs.core.Keyword(null,"ws-code","ws-code",1136081606),(3000));
var temp__5804__auto___51733 = ((cljs.core.not(close_ws_QMARK_))?taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(self__.socket_,null):cljs.core.deref(self__.socket_));
if(cljs.core.truth_(temp__5804__auto___51733)){
var vec__51194_51734 = temp__5804__auto___51733;
var s_51735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51194_51734,(0),null);
var _sid_51736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51194_51734,(1),null);
s_51735.close(ws_code,"CLOSE_ABNORMAL");
} else {
}

return null;
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__51197 = opts;
var map__51197__$1 = cljs.core.__destructure_map(map__51197);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51197__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51197__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51197__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5804__auto___51737 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___51737)){
var cb_uuid_51738 = temp__5804__auto___51737;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_51738], null),(((!((_QMARK_cb_fn == null))))?_QMARK_cb_fn:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1433,47,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),_QMARK_cb_fn,null,null)));

var temp__5804__auto___51739__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___51739__$1)){
var timeout_ms_51740 = temp__5804__auto___51739__$1;
var c__29727__auto___51741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_51208){
var state_val_51209 = (state_51208[(1)]);
if((state_val_51209 === (1))){
var inst_51198 = cljs.core.async.timeout(timeout_ms_51740);
var state_51208__$1 = state_51208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51208__$1,(2),inst_51198);
} else {
if((state_val_51209 === (2))){
var inst_51201 = (state_51208[(7)]);
var inst_51200 = (state_51208[(2)]);
var inst_51201__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_51208__$1 = (function (){var statearr_51210 = state_51208;
(statearr_51210[(8)] = inst_51200);

(statearr_51210[(7)] = inst_51201__$1);

return statearr_51210;
})();
if(cljs.core.truth_(inst_51201__$1)){
var statearr_51211_51742 = state_51208__$1;
(statearr_51211_51742[(1)] = (3));

} else {
var statearr_51212_51743 = state_51208__$1;
(statearr_51212_51743[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51209 === (3))){
var inst_51201 = (state_51208[(7)]);
var inst_51203 = (inst_51201.cljs$core$IFn$_invoke$arity$1 ? inst_51201.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_51201.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_51208__$1 = state_51208;
var statearr_51213_51744 = state_51208__$1;
(statearr_51213_51744[(2)] = inst_51203);

(statearr_51213_51744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51209 === (4))){
var state_51208__$1 = state_51208;
var statearr_51214_51745 = state_51208__$1;
(statearr_51214_51745[(2)] = null);

(statearr_51214_51745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51209 === (5))){
var inst_51206 = (state_51208[(2)]);
var state_51208__$1 = state_51208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51208__$1,inst_51206);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__29474__auto__ = null;
var taoensso$sente$state_machine__29474__auto____0 = (function (){
var statearr_51215 = [null,null,null,null,null,null,null,null,null];
(statearr_51215[(0)] = taoensso$sente$state_machine__29474__auto__);

(statearr_51215[(1)] = (1));

return statearr_51215;
});
var taoensso$sente$state_machine__29474__auto____1 = (function (state_51208){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_51208);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e51216){var ex__29477__auto__ = e51216;
var statearr_51217_51746 = state_51208;
(statearr_51217_51746[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_51208[(4)]))){
var statearr_51218_51747 = state_51208;
(statearr_51218_51747[(1)] = cljs.core.first((state_51208[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51748 = state_51208;
state_51208 = G__51748;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$state_machine__29474__auto__ = function(state_51208){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29474__auto____1.call(this,state_51208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29474__auto____0;
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29474__auto____1;
return taoensso$sente$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_51219 = f__29728__auto__();
(statearr_51219[(6)] = c__29727__auto___51741);

return statearr_51219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

} else {
}
} else {
}

var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__51220 = temp__5804__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51220,(0),null);
var _sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51220,(1),null);
try{s.send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e51223){var t = e51223;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1449,19,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Client chsk send error"], null);
}),null)),null,(90),null,null,null);

return null;
}} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto___51749 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___51749)){
var cb_uuid_51750 = temp__5804__auto___51749;
var cb_fn_STAR__51751 = (function (){var or__5045__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_51750);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if((!((_QMARK_cb_fn == null)))){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1455,34,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),_QMARK_cb_fn,null,null);
}
}
})();
(cb_fn_STAR__51751.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__51751.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__51751.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

chsk__$1.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"ws-error","ws-error",263286885));

return false;
}
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var this_conn_id = cljs.core.reset_BANG_(self__.conn_id_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var own_conn_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.conn_id_),this_conn_id);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(own_conn_QMARK_()){
var this_socket_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var own_socket_QMARK_ = (function (){
var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__51224 = temp__5804__auto__;
var _s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51224,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51224,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sid,this_socket_id);
} else {
return null;
}
});
var retry_fn = (function (){
if(((own_conn_QMARK_()) && (cljs.core.not(cljs.core.deref(taoensso.sente.client_unloading_QMARK__))))){
return taoensso.sente.retry_connect_chsk_BANG_(chsk__$1,self__.backoff_ms_fn,taoensso$sente$connect_fn,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc));
} else {
return null;
}
});
var on_error = (function (ws_ev){
if(cljs.core.truth_(own_socket_QMARK_())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1487,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e51227){var _ = e51227;
return ws_ev;
}})()], null);
}),null)),null,(91),null,null,null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51173_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51173_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
} else {
return null;
}
});
var on_message = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__51228 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51228,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51228,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__5045__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = own_socket_QMARK_();
if(cljs.core.truth_(and__5043__auto__)){
return taoensso.sente.handshake_QMARK_(clj);
} else {
return and__5043__auto__;
}
})())?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword("done","did-handshake","done/did-handshake",-204235862);
})()
:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flush?","flush?",-108887231),true], null));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword("done","sent-pong","done/sent-pong",-723256459);
})()
:null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var temp__5802__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5802__auto__)){
var cb_uuid = temp__5802__auto__;
var temp__5802__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5802__auto____$1)){
var cb_fn = temp__5802__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1534,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ws cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,(92),null,null,null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
var on_close = (function (ws_ev){
if(cljs.core.truth_(own_socket_QMARK_())){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason"),new cljs.core.Keyword(null,"clean?","clean?",-1675631009),cljs.core.boolean$(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean")),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
var reason_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))?new cljs.core.Keyword(null,"clean","clean",41534079):new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51175_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__51175_SHARP_,reason_STAR_),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
} else {
return null;
}
});
var _QMARK_new_socket_ = (function (){try{var G__51232 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ws_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-message","on-message",1662987808),on_message,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0)))], null)], 0));
return (self__.ws_constructor.cljs$core$IFn$_invoke$arity$1 ? self__.ws_constructor.cljs$core$IFn$_invoke$arity$1(G__51232) : self__.ws_constructor.call(null,G__51232));
}catch (e51231){var t = e51231;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1581,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Error creating WebSocket client"], null);
}),null)),null,(93),null,null,null);

return null;
}})();
var temp__5804__auto__ = _QMARK_new_socket_;
if(cljs.core.truth_(temp__5804__auto__)){
var new_socket_ = temp__5804__auto__;
var temp__5802__auto__ = (function (){try{return cljs.core.force(new_socket_);
}catch (e51233){var t = e51233;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1589,32,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Error realizing WebSocket client"], null);
}),null)),null,(94),null,null,null);

return null;
}})();
if(cljs.core.truth_(temp__5802__auto__)){
var new_socket = temp__5802__auto__;
var temp__5804__auto___51752__$1 = taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(self__.socket_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_socket,this_socket_id], null));
if(cljs.core.truth_(temp__5804__auto___51752__$1)){
var vec__51234_51753 = temp__5804__auto___51752__$1;
var old_s_51754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51234_51753,(0),null);
var _old_sid_51755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51234_51753,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1594,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old client WebSocket will be closed"], null);
}),null)),null,(95),null,null,null);

old_s_51754.close((1000),"CLOSE_NORMAL");
} else {
}

return new_socket;
} else {
return retry_fn();
}
} else {
return null;
}
} else {
return null;
}
});
cljs.core.reset_BANG_(self__.retry_count_,(0));

if(cljs.core.truth_(connect_fn())){
var temp__5804__auto___51756 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto___51756)){
var ms_51757 = temp__5804__auto___51756;
var c__29727__auto___51758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_51268){
var state_val_51269 = (state_51268[(1)]);
if((state_val_51269 === (7))){
var inst_51264 = (state_51268[(2)]);
var state_51268__$1 = state_51268;
var statearr_51270_51759 = state_51268__$1;
(statearr_51270_51759[(2)] = inst_51264);

(statearr_51270_51759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (1))){
var state_51268__$1 = state_51268;
var statearr_51271_51760 = state_51268__$1;
(statearr_51271_51760[(2)] = null);

(statearr_51271_51760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (4))){
var inst_51241 = (state_51268[(2)]);
var inst_51242 = own_conn_QMARK_();
var state_51268__$1 = (function (){var statearr_51272 = state_51268;
(statearr_51272[(7)] = inst_51241);

return statearr_51272;
})();
if(inst_51242){
var statearr_51273_51761 = state_51268__$1;
(statearr_51273_51761[(1)] = (5));

} else {
var statearr_51274_51762 = state_51268__$1;
(statearr_51274_51762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (6))){
var state_51268__$1 = state_51268;
var statearr_51275_51763 = state_51268__$1;
(statearr_51275_51763[(2)] = null);

(statearr_51275_51763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (3))){
var inst_51266 = (state_51268[(2)]);
var state_51268__$1 = state_51268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51268__$1,inst_51266);
} else {
if((state_val_51269 === (2))){
var inst_51238 = cljs.core.deref(self__.udt_last_comms_);
var inst_51239 = cljs.core.async.timeout(ms_51757);
var state_51268__$1 = (function (){var statearr_51276 = state_51268;
(statearr_51276[(8)] = inst_51238);

return statearr_51276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51268__$1,(4),inst_51239);
} else {
if((state_val_51269 === (9))){
var state_51268__$1 = state_51268;
var statearr_51277_51764 = state_51268__$1;
(statearr_51277_51764[(2)] = null);

(statearr_51277_51764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (5))){
var inst_51238 = (state_51268[(8)]);
var inst_51244 = (state_51268[(9)]);
var inst_51245 = (state_51268[(10)]);
var inst_51244__$1 = cljs.core.deref(self__.udt_last_comms_);
var inst_51245__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51238,inst_51244__$1);
var state_51268__$1 = (function (){var statearr_51278 = state_51268;
(statearr_51278[(9)] = inst_51244__$1);

(statearr_51278[(10)] = inst_51245__$1);

return statearr_51278;
})();
if(inst_51245__$1){
var statearr_51279_51765 = state_51268__$1;
(statearr_51279_51765[(1)] = (8));

} else {
var statearr_51280_51766 = state_51268__$1;
(statearr_51280_51766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (10))){
var inst_51260 = (state_51268[(2)]);
var state_51268__$1 = (function (){var statearr_51281 = state_51268;
(statearr_51281[(11)] = inst_51260);

return statearr_51281;
})();
var statearr_51282_51767 = state_51268__$1;
(statearr_51282_51767[(2)] = null);

(statearr_51282_51767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51269 === (8))){
var inst_51238 = (state_51268[(8)]);
var inst_51244 = (state_51268[(9)]);
var inst_51245 = (state_51268[(10)]);
var inst_51247 = (function (){var udt_t0 = inst_51238;
var udt_t1 = inst_51244;
var temp__5804__auto____$1 = inst_51245;
var no_activity_QMARK_ = inst_51245;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will send ws-ping to server: %s",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms-since-last-activity","ms-since-last-activity",-1991165547),(taoensso.encore.now_udt() - udt_t1),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.ws_ping_timeout_ms], null)], null);
});
})();
var inst_51248 = (new cljs.core.Delay(inst_51247,null));
var inst_51249 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1614,21,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51248,null,(96),null,null,null);
var inst_51250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51251 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_51252 = (new cljs.core.PersistentVector(null,1,(5),inst_51250,inst_51251,null));
var inst_51253 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"cb","cb",589947841)];
var inst_51254 = (function (){var udt_t0 = inst_51238;
var udt_t1 = inst_51244;
var temp__5804__auto____$1 = inst_51245;
var no_activity_QMARK_ = inst_51245;
return (function (reply){
if(((own_conn_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reply,"pong")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1624,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client ws-ping to server timed-out, will cycle WebSocket now"], null);
}),null)),null,(97),null,null,null);

return chsk__$1.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274));
} else {
return null;
}
});
})();
var inst_51255 = [true,self__.ws_ping_timeout_ms,inst_51254];
var inst_51256 = cljs.core.PersistentHashMap.fromArrays(inst_51253,inst_51255);
var inst_51257 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_51252,inst_51256);
var state_51268__$1 = (function (){var statearr_51283 = state_51268;
(statearr_51283[(12)] = inst_51249);

return statearr_51283;
})();
var statearr_51284_51768 = state_51268__$1;
(statearr_51284_51768[(2)] = inst_51257);

(statearr_51284_51768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__29474__auto__ = null;
var taoensso$sente$state_machine__29474__auto____0 = (function (){
var statearr_51285 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51285[(0)] = taoensso$sente$state_machine__29474__auto__);

(statearr_51285[(1)] = (1));

return statearr_51285;
});
var taoensso$sente$state_machine__29474__auto____1 = (function (state_51268){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_51268);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e51286){var ex__29477__auto__ = e51286;
var statearr_51287_51769 = state_51268;
(statearr_51287_51769[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_51268[(4)]))){
var statearr_51288_51770 = state_51268;
(statearr_51288_51770[(1)] = cljs.core.first((state_51268[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51771 = state_51268;
state_51268 = G__51771;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$state_machine__29474__auto__ = function(state_51268){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__29474__auto____1.call(this,state_51268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__29474__auto____0;
taoensso$sente$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__29474__auto____1;
return taoensso$sente$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_51289 = f__29728__auto__();
(statearr_51289[(6)] = c__29727__auto___51758);

return statearr_51289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

} else {
}

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"conn-id_","conn-id_",-599629337,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",-1983111801,null),new cljs.core.Symbol(null,"ws-opts","ws-opts",-1166634126,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null),new cljs.core.Symbol(null,"ws-constructor","ws-constructor",-1270420152,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__51180){
var extmap__5385__auto__ = (function (){var G__51290 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51180,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617)], 0));
if(cljs.core.record_QMARK_(G__51180)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51290);
} else {
return G__51290;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__51180),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617).cljs$core$IFn$_invoke$arity$1(G__51180),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"secs","secs",1532330091),(60));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.conn_id_ = conn_id_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k51297,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__51301 = k51297;
var G__51301__$1 = (((G__51301 instanceof cljs.core.Keyword))?G__51301.fqn:null);
switch (G__51301__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "conn-id_":
return self__.conn_id_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51297,else__5346__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__51302){
var vec__51303 = p__51302;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51303,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51303,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51296){
var self__ = this;
var G__51296__$1 = this;
return (new cljs.core.RecordIter((0),G__51296__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51298,other51299){
var self__ = this;
var this51298__$1 = this;
return (((!((other51299 == null)))) && ((((this51298__$1.constructor === other51299.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.client_id,other51299.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.chs,other51299.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.params,other51299.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.packer,other51299.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.url,other51299.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.state_,other51299.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.conn_id_,other51299.conn_id_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.ever_opened_QMARK__,other51299.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.backoff_ms_fn,other51299.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.ajax_opts,other51299.ajax_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.curr_xhr_,other51299.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51298__$1.__extmap,other51299.__extmap)))))))))))))))))))))))))));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k51297){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51306 = k51297;
var G__51306__$1 = (((G__51306 instanceof cljs.core.Keyword))?G__51306.fqn:null);
switch (G__51306__$1) {
case "client-id":
case "chs":
case "params":
case "packer":
case "url":
case "state_":
case "conn-id_":
case "ever-opened?_":
case "backoff-ms-fn":
case "ajax-opts":
case "curr-xhr_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51297);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__51296){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51307 = cljs.core.keyword_identical_QMARK_;
var expr__51308 = k__5352__auto__;
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(G__51296,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__51296,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__51296,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__51296,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__51296,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__51296,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__51296,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,G__51296,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,G__51296,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__51296,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51307.cljs$core$IFn$_invoke$arity$2 ? pred__51307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__51308) : pred__51307.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__51308)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__51296,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__51296),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__51296){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__51296,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.conn_id_,null);

var closed_QMARK_ = taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51291_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__51291_SHARP_,reason);
}));
var temp__5804__auto___51774 = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto___51774)){
var x_51775 = temp__5804__auto___51774;
x_51775.abort();
} else {
}

return closed_QMARK_;
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,_opts){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto___51776 = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto___51776)){
var x_51777 = temp__5804__auto___51776;
x_51777.abort();
} else {
}

return null;
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__51310 = opts;
var map__51310__$1 = cljs.core.__destructure_map(map__51310);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token_str = taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var G__51311_51778 = self__.url;
var G__51312_51779 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5045__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token_str], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token_str,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__51313_51780 = (function taoensso$sente$ajax_cb(p__51314){
var map__51315 = p__51314;
var map__51315__$1 = cljs.core.__destructure_map(map__51315);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51292_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__51292_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__51316 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51316,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51316,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1722,26,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ajax cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,(98),null,null,null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51293_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51293_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3(G__51311_51778,G__51312_51779,G__51313_51780) : taoensso.sente.ajax_call.call(null,G__51311_51778,G__51312_51779,G__51313_51780));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var this_conn_id = cljs.core.reset_BANG_(self__.conn_id_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var own_conn_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.conn_id_),this_conn_id);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1733,16,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ajax async-poll-for-update!"], null);
}),null)),null,(99),null,null,null);

if(own_conn_QMARK_()){
var retry_fn = (function (){
if(((own_conn_QMARK_()) && (cljs.core.not(cljs.core.deref(taoensso.sente.client_unloading_QMARK__))))){
var retry_count_STAR_ = (retry_count + (1));
return taoensso.sente.retry_connect_chsk_BANG_(chsk__$1,self__.backoff_ms_fn,(function taoensso$sente$poll_fn_$_connect_fn(){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),retry_count_STAR_);
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__51319 = self__.url;
var G__51320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"xhr-cb-fn","xhr-cb-fn",1569050954),(function (xhr){
return cljs.core.reset_BANG_(self__.curr_xhr_,xhr);
}),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0))], null)], 0));
var G__51321 = (function taoensso$sente$poll_fn_$_ajax_cb(p__51322){
var map__51323 = p__51322;
var map__51323__$1 = cljs.core.__destructure_map(map__51323);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51323__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51323__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51294_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__51294_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__51324 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51324,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__51295_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51295_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?new cljs.core.Keyword(null,"noop","noop",-673731258):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_call.cljs$core$IFn$_invoke$arity$3(G__51319,G__51320,G__51321) : taoensso.sente.ajax_call.call(null,G__51319,G__51320,G__51321));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"conn-id_","conn-id_",-599629337,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__51300){
var extmap__5385__auto__ = (function (){var G__51327 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51300,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__51300)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51327);
} else {
return G__51327;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__51300),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__51300),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k51329,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__51333 = k51329;
var G__51333__$1 = (((G__51333 instanceof cljs.core.Keyword))?G__51333.fqn:null);
switch (G__51333__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51329,else__5346__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__51334){
var vec__51335 = p__51334;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51335,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51328){
var self__ = this;
var G__51328__$1 = this;
return (new cljs.core.RecordIter((0),G__51328__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51330,other51331){
var self__ = this;
var this51330__$1 = this;
return (((!((other51331 == null)))) && ((((this51330__$1.constructor === other51331.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51330__$1.ws_chsk_opts,other51331.ws_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51330__$1.ajax_chsk_opts,other51331.ajax_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51330__$1.state_,other51331.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51330__$1.impl_,other51331.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51330__$1.__extmap,other51331.__extmap)))))))))))));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k51329){
var self__ = this;
var this__5350__auto____$1 = this;
var G__51338 = k51329;
var G__51338__$1 = (((G__51338 instanceof cljs.core.Keyword))?G__51338.fqn:null);
switch (G__51338__$1) {
case "ws-chsk-opts":
case "ajax-chsk-opts":
case "state_":
case "impl_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51329);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__51328){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__51339 = cljs.core.keyword_identical_QMARK_;
var expr__51340 = k__5352__auto__;
if(cljs.core.truth_((pred__51339.cljs$core$IFn$_invoke$arity$2 ? pred__51339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__51340) : pred__51339.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__51340)))){
return (new taoensso.sente.ChAutoSocket(G__51328,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51339.cljs$core$IFn$_invoke$arity$2 ? pred__51339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__51340) : pred__51339.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__51340)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__51328,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51339.cljs$core$IFn$_invoke$arity$2 ? pred__51339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__51340) : pred__51339.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__51340)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__51328,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51339.cljs$core$IFn$_invoke$arity$2 ? pred__51339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__51340) : pred__51339.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__51340)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__51328,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__51328),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__51328){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__51328,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_break_connection_BANG_(impl,opts);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5802__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5802__auto__)){
var impl = temp__5802__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__51342 = opts;
var map__51342__$1 = cljs.core.__destructure_map(map__51342);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51342__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_chsk_BANG_ = (function (){
var ajax_chsk = taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return ajax_chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_chsk_BANG_ = (function (){
var ws_chsk = taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var downgraded_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var b2__39983__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state);
if(b2__39983__auto__){
var state_changed_QMARK_ = b2__39983__auto__;
var b2__39983__auto____$1 = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(b2__39983__auto____$1)){
var impl = b2__39983__auto____$1;
var b2__39983__auto____$2 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(b2__39983__auto____$2)){
var ever_opened_QMARK__ = b2__39983__auto____$2;
var b2__39983__auto____$3 = cljs.core.not(cljs.core.deref(ever_opened_QMARK__));
if(b2__39983__auto____$3){
var never_opened_QMARK_ = b2__39983__auto____$3;
var b2__39983__auto____$4 = new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(b2__39983__auto____$4)){
var ws_error = b2__39983__auto____$4;
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1864,26,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client permanently downgrading chsk mode: :auto -> :ajax"], null);
}),null)),null,(100),null,null,null);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_chsk_BANG_());
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

return ws_chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__5045__auto__ = ws_chsk_BANG_();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ajax_chsk_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__51332){
var extmap__5385__auto__ = (function (){var G__51343 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51332,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__51332)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51343);
} else {
return G__51343;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__51332),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__51332),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__51332),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__51332),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__51344 = protocol;
var G__51344__$1 = (((G__51344 instanceof cljs.core.Keyword))?G__51344.fqn:null);
switch (G__51344__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51345){if((e51345 instanceof Error)){
var e = e51345;
return e;
} else {
throw e51345;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1883,21,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:","null","http:","null"], null), null)], null),null,new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__51346 = type;
var G__51346__$1 = (((G__51346 instanceof cljs.core.Keyword))?G__51346.fqn:null);
switch (G__51346__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__51347 = protocol__$2;
switch (G__51347) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51347)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51346__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0)))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Required arguments:
 *     path              ; Channel socket server route/path (typically `/chsk`)
 *     ?csrf-token-or-fn ; CSRF string or (fn [])->string to match token expected by server.
 *                       ; nil => server not expecting any CSRF token.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-call`, see
 *                     ; relevant docstring for more info.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *                     ; Default false for Sente >= v1.18, true otherwise.
 * 
 *     :ws-kalive-ms       ; Ping to keep a WebSocket conn alive if no activity
 *                         ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 *     :ws-ping-timeout-ms ; When pinging to test WebSocket connections, msecs to
 *                         ; await reply before regarding the connection as broken
 * 
 *     :ws-constructor ; Advanced, (fn [{:keys [uri-str headers on-message on-error on-close]}]
 *                     ; => nil, or delay that can be dereffed to get a connected WebSocket.
 *                     ; See `default-client-ws-constructor` code for details.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51786 = arguments.length;
var i__5770__auto___51787 = (0);
while(true){
if((i__5770__auto___51787 < len__5769__auto___51786)){
args__5775__auto__.push((arguments[i__5770__auto___51787]));

var G__51788 = (i__5770__auto___51787 + (1));
i__5770__auto___51787 = G__51788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token_or_fn,p__51351){
var vec__51352 = p__51351;
var map__51355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51352,(0),null);
var map__51355__$1 = cljs.core.__destructure_map(map__51355);
var opts = map__51355__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_ping_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),(5000));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(20000));
var ws_constructor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),taoensso.sente.default_client_ws_constructor);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51355__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51355__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51352,(1),null);
var e_51789 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51356){if((e51356 instanceof Error)){
var e_51789 = e51356;
return e_51789;
} else {
throw e51356;

}
}})();
if((e_51789 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1946,6,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null",new cljs.core.Keyword(null,"auto","auto",-566279492),"null"], null), null)], null),null,new cljs.core.Symbol(null,"type","type",-1480165421,null),type,e_51789,null);
}

var e_51790 = (function (){try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_(client_id))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51357){if((e51357 instanceof Error)){
var e_51790 = e51357;
return e_51790;
} else {
throw e51357;

}
}})();
if((e_51790 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1947,6,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol("taoensso.encore","nblank-str?","taoensso.encore/nblank-str?",-1104962258,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),client_id,e_51790,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1949,47,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,(101),null,null,null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",1950,47,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,(102),null,null,null);
} else {
}

taoensso.sente.get_client_csrf_token_str(true,_QMARK_csrf_token_or_fn);

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__51358 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e51361){if((e51361 instanceof Error)){
var e = e51361;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e51361;

}
}})();
var e = (((z instanceof taoensso.truss.impl.WrappedError))?z:(((!((z == null))))?null:taoensso.truss.impl._dummy_error));
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1961,27,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.list(new cljs.core.Keyword(null,"pathname","pathname",-1420497528),new cljs.core.Symbol(null,"win-loc","win-loc",-1022715728,null))),z,e,null);
}
})();
var temp__5802__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__5045__auto__ = protocol;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51358,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51358,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var ws_ping_timeout_ms__$1 = ((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968)):((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"ws-kalive-ping-timeout-ms","ws-kalive-ping-timeout-ms",255808958)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ws-kalive-ping-timeout-ms","ws-kalive-ping-timeout-ms",255808958)):ws_ping_timeout_ms
));
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),ws_ping_timeout_ms__$1,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),taoensso.sente.default_client_ws_constructor], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),ws_opts], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__51362 = type;
var G__51362__$1 = (((G__51362 instanceof cljs.core.Keyword))?G__51362.fqn:null);
switch (G__51362__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token_or_fn);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51362__$1)].join('')));

}
})());
var temp__5802__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5802__auto__)){
var chsk = temp__5802__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__51363 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51363,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51363,(1),null);
var ev__$1 = vec__51363;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2069,12,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client failed to create channel socket"], null);
}),null)),null,(103),null,null,null);

return null;
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq51348){
var G__51349 = cljs.core.first(seq51348);
var seq51348__$1 = cljs.core.next(seq51348);
var G__51350 = cljs.core.first(seq51348__$1);
var seq51348__$2 = cljs.core.next(seq51348__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51349,G__51350,seq51348__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__51366 = opts;
var map__51366__$1 = cljs.core.__destructure_map(map__51366);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51366__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__29727__auto___51792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_51397){
var state_val_51398 = (state_51397[(1)]);
if((state_val_51398 === (7))){
var inst_51383 = (state_51397[(7)]);
var inst_51383__$1 = (state_51397[(2)]);
var state_51397__$1 = (function (){var statearr_51399 = state_51397;
(statearr_51399[(7)] = inst_51383__$1);

return statearr_51399;
})();
if(cljs.core.truth_(inst_51383__$1)){
var statearr_51400_51793 = state_51397__$1;
(statearr_51400_51793[(1)] = (8));

} else {
var statearr_51401_51794 = state_51397__$1;
(statearr_51401_51794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (1))){
var state_51397__$1 = state_51397;
var statearr_51402_51795 = state_51397__$1;
(statearr_51402_51795[(2)] = null);

(statearr_51402_51795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (4))){
var inst_51375 = (state_51397[(8)]);
var inst_51377 = (state_51397[(9)]);
var inst_51378 = (state_51397[(10)]);
var inst_51375__$1 = (state_51397[(2)]);
var inst_51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51375__$1,(0),null);
var inst_51377__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51375__$1,(1),null);
var inst_51378__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51377__$1,ch_ctrl);
var state_51397__$1 = (function (){var statearr_51403 = state_51397;
(statearr_51403[(8)] = inst_51375__$1);

(statearr_51403[(11)] = inst_51376);

(statearr_51403[(9)] = inst_51377__$1);

(statearr_51403[(10)] = inst_51378__$1);

return statearr_51403;
})();
if(inst_51378__$1){
var statearr_51404_51796 = state_51397__$1;
(statearr_51404_51796[(1)] = (5));

} else {
var statearr_51405_51797 = state_51397__$1;
(statearr_51405_51797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (6))){
var inst_51376 = (state_51397[(11)]);
var inst_51381 = (inst_51376 == null);
var state_51397__$1 = state_51397;
var statearr_51406_51798 = state_51397__$1;
(statearr_51406_51798[(2)] = inst_51381);

(statearr_51406_51798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (3))){
var inst_51395 = (state_51397[(2)]);
var state_51397__$1 = state_51397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51397__$1,inst_51395);
} else {
if((state_val_51398 === (2))){
var inst_51371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51372 = [ch_recv,ch_ctrl];
var inst_51373 = (new cljs.core.PersistentVector(null,2,(5),inst_51371,inst_51372,null));
var state_51397__$1 = state_51397;
return cljs.core.async.ioc_alts_BANG_(state_51397__$1,(4),inst_51373);
} else {
if((state_val_51398 === (9))){
var inst_51376 = (state_51397[(11)]);
var inst_51375 = (state_51397[(8)]);
var inst_51377 = (state_51397[(9)]);
var inst_51383 = (state_51397[(7)]);
var inst_51387 = cljs.core.__destructure_map(inst_51376);
var inst_51388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51387,new cljs.core.Keyword(null,"event","event",301435442));
var inst_51389 = (function (){var vec__51368 = inst_51375;
var v = inst_51376;
var p = inst_51377;
var stop_QMARK_ = inst_51383;
var map__51386 = inst_51387;
var event_msg = inst_51387;
var event = inst_51388;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2096,36,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk router pre-handler event: %s",event], null);
}),null)),null,(106),null,null,null);
} else {
}

var G__51409 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.server_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51410){if((e51410 instanceof Error)){
var e = e51410;
return e;
} else {
throw e51410;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),2099,23,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"server-event-msg?","server-event-msg?",-1249957951,null),new cljs.core.Symbol("taoensso.sente","server-event-msg?","taoensso.sente/server-event-msg?",-340879612,null),new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null),event_msg,e,null);
}
})():(function (){var e = (function (){try{if(cljs.core.truth_(taoensso.sente.client_event_msg_QMARK_(event_msg))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51411){if((e51411 instanceof Error)){
var e = e51411;
return e;
} else {
throw e51411;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),2100,23,"jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"client-event-msg?","client-event-msg?",-1506206275,null),new cljs.core.Symbol("taoensso.sente","client-event-msg?","taoensso.sente/client-event-msg?",1349037434,null),new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null),event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__51409) : event_msg_handler.call(null,G__51409));
}catch (e51407){var t1 = e51407;
try{var temp__5802__auto__ = error_handler;
if(cljs.core.truth_(temp__5802__auto__)){
var eh = temp__5802__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(t1,event_msg) : error_handler.call(null,t1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2106,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,(105),null,null,null);
}
}catch (e51408){var t2 = e51408;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$14(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","jar:file:/Users/operator/.m2/repository/com/taoensso/sente/1.20.0/sente-1.20.0.jar!/taoensso/sente.cljc",2108,25,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,(104),null,null,null);
}}});
})();
var inst_51390 = execute1(inst_51389);
var state_51397__$1 = (function (){var statearr_51412 = state_51397;
(statearr_51412[(12)] = inst_51390);

return statearr_51412;
})();
var statearr_51413_51799 = state_51397__$1;
(statearr_51413_51799[(2)] = null);

(statearr_51413_51799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (5))){
var inst_51378 = (state_51397[(10)]);
var state_51397__$1 = state_51397;
var statearr_51414_51800 = state_51397__$1;
(statearr_51414_51800[(2)] = inst_51378);

(statearr_51414_51800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (10))){
var inst_51393 = (state_51397[(2)]);
var state_51397__$1 = state_51397;
var statearr_51415_51801 = state_51397__$1;
(statearr_51415_51801[(2)] = inst_51393);

(statearr_51415_51801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51398 === (8))){
var state_51397__$1 = state_51397;
var statearr_51416_51802 = state_51397__$1;
(statearr_51416_51802[(2)] = null);

(statearr_51416_51802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto____0 = (function (){
var statearr_51417 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51417[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto__);

(statearr_51417[(1)] = (1));

return statearr_51417;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto____1 = (function (state_51397){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_51397);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e51418){var ex__29477__auto__ = e51418;
var statearr_51419_51803 = state_51397;
(statearr_51419_51803[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_51397[(4)]))){
var statearr_51420_51804 = state_51397;
(statearr_51420_51804[(1)] = cljs.core.first((state_51397[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51805 = state_51397;
state_51397 = G__51805;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto__ = function(state_51397){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto____1.call(this,state_51397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_51421 = f__29728__auto__();
(statearr_51421[(6)] = c__29727__auto___51792);

return statearr_51421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51806 = arguments.length;
var i__5770__auto___51807 = (0);
while(true){
if((i__5770__auto___51807 < len__5769__auto___51806)){
args__5775__auto__.push((arguments[i__5770__auto___51807]));

var G__51808 = (i__5770__auto___51807 + (1));
i__5770__auto___51807 = G__51808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__51425){
var vec__51426 = p__51425;
var map__51429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51426,(0),null);
var map__51429__$1 = cljs.core.__destructure_map(map__51429);
var opts = map__51429__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51429__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq51422){
var G__51423 = cljs.core.first(seq51422);
var seq51422__$1 = cljs.core.next(seq51422);
var G__51424 = cljs.core.first(seq51422__$1);
var seq51422__$2 = cljs.core.next(seq51422__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51423,G__51424,seq51422__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___51809 = arguments.length;
var i__5770__auto___51810 = (0);
while(true){
if((i__5770__auto___51810 < len__5769__auto___51809)){
args__5775__auto__.push((arguments[i__5770__auto___51810]));

var G__51811 = (i__5770__auto___51810 + (1));
i__5770__auto___51810 = G__51811;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__51433){
var vec__51434 = p__51433;
var map__51437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51434,(0),null);
var map__51437__$1 = cljs.core.__destructure_map(map__51437);
var opts = map__51437__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51437__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51437__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq51430){
var G__51431 = cljs.core.first(seq51430);
var seq51430__$1 = cljs.core.next(seq51430);
var G__51432 = cljs.core.first(seq51430__$1);
var seq51430__$2 = cljs.core.next(seq51430__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51431,G__51432,seq51430__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__51438 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__51439 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__51438,G__51439) : event_handler.call(null,G__51438,G__51439));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-call` instead
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_call;

taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__51440,websocket_QMARK_){
var map__51441 = p__51440;
var map__51441__$1 = cljs.core.__destructure_map(map__51441);
var location__$1 = map__51441__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51441__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51441__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51441__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
