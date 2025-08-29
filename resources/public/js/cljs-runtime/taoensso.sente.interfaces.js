goog.provide('taoensso.sente.interfaces');

/**
 * For Sente to support a web server, an "adapter" for that server
 *   must be provided that implements this protocol.
 * @interface
 */
taoensso.sente.interfaces.IServerChanAdapter = function(){};

var taoensso$sente$interfaces$IServerChanAdapter$ring_req__GT_server_ch_resp$dyn_45382 = (function (sch_adapter,ring_req,callbacks_map){
var x__5393__auto__ = (((sch_adapter == null))?null:sch_adapter);
var m__5394__auto__ = (taoensso.sente.interfaces.ring_req__GT_server_ch_resp[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(sch_adapter,ring_req,callbacks_map) : m__5394__auto__.call(null,sch_adapter,ring_req,callbacks_map));
} else {
var m__5392__auto__ = (taoensso.sente.interfaces.ring_req__GT_server_ch_resp["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(sch_adapter,ring_req,callbacks_map) : m__5392__auto__.call(null,sch_adapter,ring_req,callbacks_map));
} else {
throw cljs.core.missing_protocol("IServerChanAdapter.ring-req->server-ch-resp",sch_adapter);
}
}
});
/**
 * Given a Ring request (WebSocket GET handshake or Ajax GET/POST),
 *  returns a Ring response map appropriate for the underlying web server.
 * 
 *  `callbacks-map` contains the following functions that MUST be called as described:
 * 
 *    `:on-open` - (fn [sch websocket?])
 *      Call exactly once after `sch` is available for sending.
 * 
 *    `:on-close` - (fn [sch websocket? status])
 *      Call exactly once after `sch` is closed for any cause, incl. an
 *      explicit call to `sch-close!`. `status` arg type is currently undefined.
 * 
 *    `:on-msg` - (fn [sch websocket? msg])
 *      Call for each `String` or byte[] message received from client.
 * 
 *    `:on-error` - (fn [sch websocket? error])
 *      Currently unused.
 * 
 *     Note: all `sch` ("server channel") args provided above MUST implement
 *     the `IServerChan` protocol.
 * 
 *  `callbacks-map` contains the following functions IFF server is configured to
 *  use 3-arity (async) Ring v1.6+ handlers:
 * 
 *    `:ring-async-resp-fn`  - ?(fn [ring-response])
 *    `:ring-async-raise-fn` - ?(fn [throwable])
 */
taoensso.sente.interfaces.ring_req__GT_server_ch_resp = (function taoensso$sente$interfaces$ring_req__GT_server_ch_resp(sch_adapter,ring_req,callbacks_map){
if((((!((sch_adapter == null)))) && ((!((sch_adapter.taoensso$sente$interfaces$IServerChanAdapter$ring_req__GT_server_ch_resp$arity$3 == null)))))){
return sch_adapter.taoensso$sente$interfaces$IServerChanAdapter$ring_req__GT_server_ch_resp$arity$3(sch_adapter,ring_req,callbacks_map);
} else {
return taoensso$sente$interfaces$IServerChanAdapter$ring_req__GT_server_ch_resp$dyn_45382(sch_adapter,ring_req,callbacks_map);
}
});


/**
 * This protocol must be implemented by the "server channel" arguments
 *   provided to callback functions via `ring-req->server-ch-resp`.
 * @interface
 */
taoensso.sente.interfaces.IServerChan = function(){};

var taoensso$sente$interfaces$IServerChan$sch_open_QMARK_$dyn_45387 = (function (sch){
var x__5393__auto__ = (((sch == null))?null:sch);
var m__5394__auto__ = (taoensso.sente.interfaces.sch_open_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(sch) : m__5394__auto__.call(null,sch));
} else {
var m__5392__auto__ = (taoensso.sente.interfaces.sch_open_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(sch) : m__5392__auto__.call(null,sch));
} else {
throw cljs.core.missing_protocol("IServerChan.sch-open?",sch);
}
}
});
/**
 * Returns true iff the channel is currently open.
 */
taoensso.sente.interfaces.sch_open_QMARK_ = (function taoensso$sente$interfaces$sch_open_QMARK_(sch){
if((((!((sch == null)))) && ((!((sch.taoensso$sente$interfaces$IServerChan$sch_open_QMARK_$arity$1 == null)))))){
return sch.taoensso$sente$interfaces$IServerChan$sch_open_QMARK_$arity$1(sch);
} else {
return taoensso$sente$interfaces$IServerChan$sch_open_QMARK_$dyn_45387(sch);
}
});

var taoensso$sente$interfaces$IServerChan$sch_close_BANG_$dyn_45389 = (function (sch){
var x__5393__auto__ = (((sch == null))?null:sch);
var m__5394__auto__ = (taoensso.sente.interfaces.sch_close_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(sch) : m__5394__auto__.call(null,sch));
} else {
var m__5392__auto__ = (taoensso.sente.interfaces.sch_close_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(sch) : m__5392__auto__.call(null,sch));
} else {
throw cljs.core.missing_protocol("IServerChan.sch-close!",sch);
}
}
});
/**
 * If the channel is open when called: closes the channel and returns true.
 *  Otherwise noops and returns falsey.
 */
taoensso.sente.interfaces.sch_close_BANG_ = (function taoensso$sente$interfaces$sch_close_BANG_(sch){
if((((!((sch == null)))) && ((!((sch.taoensso$sente$interfaces$IServerChan$sch_close_BANG_$arity$1 == null)))))){
return sch.taoensso$sente$interfaces$IServerChan$sch_close_BANG_$arity$1(sch);
} else {
return taoensso$sente$interfaces$IServerChan$sch_close_BANG_$dyn_45389(sch);
}
});

var taoensso$sente$interfaces$IServerChan$sch_send_BANG_$dyn_45394 = (function (sch,websocket_QMARK_,msg){
var x__5393__auto__ = (((sch == null))?null:sch);
var m__5394__auto__ = (taoensso.sente.interfaces.sch_send_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(sch,websocket_QMARK_,msg) : m__5394__auto__.call(null,sch,websocket_QMARK_,msg));
} else {
var m__5392__auto__ = (taoensso.sente.interfaces.sch_send_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(sch,websocket_QMARK_,msg) : m__5392__auto__.call(null,sch,websocket_QMARK_,msg));
} else {
throw cljs.core.missing_protocol("IServerChan.sch-send!",sch);
}
}
});
/**
 * If the channel is open when called: sends a message over channel and
 *  returns true. Otherwise noops and returns falsey.
 */
taoensso.sente.interfaces.sch_send_BANG_ = (function taoensso$sente$interfaces$sch_send_BANG_(sch,websocket_QMARK_,msg){
if((((!((sch == null)))) && ((!((sch.taoensso$sente$interfaces$IServerChan$sch_send_BANG_$arity$3 == null)))))){
return sch.taoensso$sente$interfaces$IServerChan$sch_send_BANG_$arity$3(sch,websocket_QMARK_,msg);
} else {
return taoensso$sente$interfaces$IServerChan$sch_send_BANG_$dyn_45394(sch,websocket_QMARK_,msg);
}
});


/**
 * Extension pt. for client<->server comms data un/packers:
 *   arbitrary Clojure data <-> serialized payloads.
 * 
 *   NB if dealing with non-string payloads, see also
 *   `taoensso.sente/*write-legacy-pack-format?*`.
 * @interface
 */
taoensso.sente.interfaces.IPacker = function(){};

var taoensso$sente$interfaces$IPacker$pack$dyn_45401 = (function (_,x){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (taoensso.sente.interfaces.pack[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__5394__auto__.call(null,_,x));
} else {
var m__5392__auto__ = (taoensso.sente.interfaces.pack["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__5392__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IPacker.pack",_);
}
}
});
taoensso.sente.interfaces.pack = (function taoensso$sente$interfaces$pack(_,x){
if((((!((_ == null)))) && ((!((_.taoensso$sente$interfaces$IPacker$pack$arity$2 == null)))))){
return _.taoensso$sente$interfaces$IPacker$pack$arity$2(_,x);
} else {
return taoensso$sente$interfaces$IPacker$pack$dyn_45401(_,x);
}
});

var taoensso$sente$interfaces$IPacker$unpack$dyn_45403 = (function (_,x){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (taoensso.sente.interfaces.unpack[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__5394__auto__.call(null,_,x));
} else {
var m__5392__auto__ = (taoensso.sente.interfaces.unpack["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__5392__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IPacker.unpack",_);
}
}
});
taoensso.sente.interfaces.unpack = (function taoensso$sente$interfaces$unpack(_,x){
if((((!((_ == null)))) && ((!((_.taoensso$sente$interfaces$IPacker$unpack$arity$2 == null)))))){
return _.taoensso$sente$interfaces$IPacker$unpack$arity$2(_,x);
} else {
return taoensso$sente$interfaces$IPacker$unpack$dyn_45403(_,x);
}
});


//# sourceMappingURL=taoensso.sente.interfaces.js.map
