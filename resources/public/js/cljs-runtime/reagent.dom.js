goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

if((typeof module$node_modules$react_dom$index !== 'undefined') && (typeof module$node_modules$react_dom$index.unmountComponentAtNode !== 'undefined')){
} else {
console.warn("react-dom/unmountComponentAtNode function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
if((typeof module$node_modules$react_dom$index !== 'undefined') && (typeof module$node_modules$react_dom$index.render !== 'undefined')){
} else {
console.warn("react-dom/render function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

var _STAR_always_update_STAR__orig_val__37931 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37932 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37932);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37933 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37934 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37934);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37933);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37931);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * NOTE: Usable only with React 18 or older. React 19 doesn't provide
 *   react-dom/render function.
 * 
 *   Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37936 = arguments.length;
switch (G__37936) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37937 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37937,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37937,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37940_37957 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37941_37958 = null;
var count__37942_37959 = (0);
var i__37943_37960 = (0);
while(true){
if((i__37943_37960 < count__37942_37959)){
var vec__37950_37961 = chunk__37941_37958.cljs$core$IIndexed$_nth$arity$2(null,i__37943_37960);
var container_37962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950_37961,(0),null);
var comp_37963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950_37961,(1),null);
reagent.dom.re_render_component(comp_37963,container_37962);


var G__37964 = seq__37940_37957;
var G__37965 = chunk__37941_37958;
var G__37966 = count__37942_37959;
var G__37967 = (i__37943_37960 + (1));
seq__37940_37957 = G__37964;
chunk__37941_37958 = G__37965;
count__37942_37959 = G__37966;
i__37943_37960 = G__37967;
continue;
} else {
var temp__5804__auto___37968 = cljs.core.seq(seq__37940_37957);
if(temp__5804__auto___37968){
var seq__37940_37969__$1 = temp__5804__auto___37968;
if(cljs.core.chunked_seq_QMARK_(seq__37940_37969__$1)){
var c__5568__auto___37970 = cljs.core.chunk_first(seq__37940_37969__$1);
var G__37971 = cljs.core.chunk_rest(seq__37940_37969__$1);
var G__37972 = c__5568__auto___37970;
var G__37973 = cljs.core.count(c__5568__auto___37970);
var G__37974 = (0);
seq__37940_37957 = G__37971;
chunk__37941_37958 = G__37972;
count__37942_37959 = G__37973;
i__37943_37960 = G__37974;
continue;
} else {
var vec__37953_37975 = cljs.core.first(seq__37940_37969__$1);
var container_37976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37953_37975,(0),null);
var comp_37977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37953_37975,(1),null);
reagent.dom.re_render_component(comp_37977,container_37976);


var G__37978 = cljs.core.next(seq__37940_37969__$1);
var G__37979 = null;
var G__37980 = (0);
var G__37981 = (0);
seq__37940_37957 = G__37978;
chunk__37941_37958 = G__37979;
count__37942_37959 = G__37980;
i__37943_37960 = G__37981;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
