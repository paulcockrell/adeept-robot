goog.provide('frontend.layout.main');
frontend.layout.main.alert_section = (function frontend$layout$main$alert_section(){
var map__46662 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","alert","app/alert",-571968467)], null)));
var map__46662__$1 = cljs.core.__destructure_map(map__46662);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46662__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46662__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var G__46663 = type;
switch (G__46663) {
case "error":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.alert.alert_error,message], null);

break;
case "warning":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.alert.alert_warning,message], null);

break;
case "info":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.alert.alert_info,message], null);

break;
case "success":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.alert.alert_success,message], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);

}
});
frontend.layout.main.main = (function frontend$layout$main$main(children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.alerts","section.alerts",616297781),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.layout.main.alert_section], null)], null),children], null);
});

//# sourceMappingURL=frontend.layout.main.js.map
