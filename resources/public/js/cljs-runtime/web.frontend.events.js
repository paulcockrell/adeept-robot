goog.provide('web.frontend.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","init","app/init",-1875644805),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alert","alert",-571950580),null], null),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451),null], null),new cljs.core.Keyword(null,"robot","robot",2102507998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","alert-set","app/alert-set",2087450312),(function (db,p__51364){
var vec__51365 = p__51364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51365,(0),null);
var map__51368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51365,(1),null);
var map__51368__$1 = cljs.core.__destructure_map(map__51368);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"alert","alert",-571950580)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"message","message",-406056002),message], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","alert-clear","app/alert-clear",183846595),(function (db,p__51369){
var vec__51370 = p__51369;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51370,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51370,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"alert","alert",-571950580)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("server","connection","server/connection",44095359),(function (db,p__51373){
var vec__51374 = p__51373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51374,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (db,p__51377){
var vec__51378 = p__51377;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51378,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),route);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("server","connection-timeout","server/connection-timeout",-1551277288),(function (p__51381,_){
var map__51382 = p__51381;
var map__51382__$1 = cljs.core.__destructure_map(map__51382);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51382__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection","server/connection",44095359),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","alert-set","app/alert-set",2087450312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"error",new cljs.core.Keyword(null,"message","message",-406056002),"Connection to server failed"], null)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("server","connect","server/connect",2071530636),(function (_,___$1){
web.frontend.client.start_BANG_();

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection","server/connection",44095359),new cljs.core.Keyword(null,"opening","opening",450993708)], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection-timeout","server/connection-timeout",-1551277288)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("server","connect","server/connect",2071530636),(function (_,___$1){
web.frontend.client.start_BANG_();

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection","server/connection",44095359),new cljs.core.Keyword(null,"opening","opening",450993708)], null),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("server","connection-timeout","server/connection-timeout",-1551277288)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","mode-idle","command/mode-idle",418619889),(function (_,___$1){
web.frontend.client.send_BANG_(new cljs.core.Keyword("command","mode-idle","command/mode-idle",418619889),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","mode-manual","command/mode-manual",1979732390),(function (_,___$1){
web.frontend.client.send_BANG_(new cljs.core.Keyword("command","mode-manual","command/mode-manual",1979732390),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","mode-sentient","command/mode-sentient",1327324065),(function (_,___$1){
web.frontend.client.send_BANG_(new cljs.core.Keyword("command","mode-sentient","command/mode-sentient",1327324065),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","mode-programmable","command/mode-programmable",756343588),(function (_,___$1){
web.frontend.client.send_BANG_(new cljs.core.Keyword("command","mode-programmable","command/mode-programmable",756343588),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("robot","mode-updated","robot/mode-updated",999627082),(function (_,p__51386){
var vec__51387 = p__51386;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51387,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51387,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","alert-set","app/alert-set",2087450312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"warning",new cljs.core.Keyword(null,"message","message",-406056002),["Robot has entered ",cljs.core.name(mode)," mode"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("state-update","robot-mode","state-update/robot-mode",2005966404),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("state-update","robot-mode","state-update/robot-mode",2005966404),(function (db,p__51390){
var vec__51391 = p__51390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51391,(0),null);
var map__51394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51391,(1),null);
var map__51394__$1 = cljs.core.__destructure_map(map__51394);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51394__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"robot","robot",2102507998),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),mode], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","robot-action","command/robot-action",1752178924),(function (_,p__51395){
var vec__51396 = p__51395;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51396,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51396,(1),null);
web.frontend.client.send_BANG_(new cljs.core.Keyword("command","robot-action","command/robot-action",1752178924),action);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","camera-action","command/camera-action",-1408665077),(function (_,p__51401){
var vec__51402 = p__51401;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51402,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51402,(1),null);
web.frontend.client.send_BANG_(new cljs.core.Keyword("command","camera-action","command/camera-action",-1408665077),action);

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("command","led-action","command/led-action",1519340257),(function (_,p__51405){
var vec__51406 = p__51405;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51406,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([action], 0));

web.frontend.client.send_BANG_(new cljs.core.Keyword("command","led-action","command/led-action",1519340257),action);

return cljs.core.PersistentArrayMap.EMPTY;
}));

//# sourceMappingURL=web.frontend.events.js.map
