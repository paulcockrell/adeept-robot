goog.provide('web.frontend.layout.main');
web.frontend.layout.main.alert_section = (function web$frontend$layout$main$alert_section(){
var map__51642 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","alert","app/alert",-571968467)], null)));
var map__51642__$1 = cljs.core.__destructure_map(map__51642);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51642__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51642__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var G__51643 = type;
switch (G__51643) {
case "error":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.alert.alert_error,message], null);

break;
case "warning":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.alert.alert_warning,message], null);

break;
case "info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.alert.alert_info,message], null);

break;
case "success":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.alert.alert_success,message], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);

}
});
web.frontend.layout.main.main = (function web$frontend$layout$main$main(children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.alerts","section.alerts",616297781),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [web.frontend.layout.main.alert_section], null)], null),children], null);
});

//# sourceMappingURL=web.frontend.layout.main.js.map
