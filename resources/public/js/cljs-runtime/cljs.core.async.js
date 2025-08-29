goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29825 = (function (f,blockable,meta29826){
this.f = f;
this.blockable = blockable;
this.meta29826 = meta29826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29827,meta29826__$1){
var self__ = this;
var _29827__$1 = this;
return (new cljs.core.async.t_cljs$core$async29825(self__.f,self__.blockable,meta29826__$1));
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29827){
var self__ = this;
var _29827__$1 = this;
return self__.meta29826;
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29826","meta29826",1522954689,null)], null);
}));

(cljs.core.async.t_cljs$core$async29825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29825");

(cljs.core.async.t_cljs$core$async29825.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29825.
 */
cljs.core.async.__GT_t_cljs$core$async29825 = (function cljs$core$async$__GT_t_cljs$core$async29825(f,blockable,meta29826){
return (new cljs.core.async.t_cljs$core$async29825(f,blockable,meta29826));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29824 = arguments.length;
switch (G__29824) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async29825(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29842 = arguments.length;
switch (G__29842) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29852 = arguments.length;
switch (G__29852) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29877 = arguments.length;
switch (G__29877) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33051 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33051) : fn1.call(null,val_33051));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33051) : fn1.call(null,val_33051));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29911 = arguments.length;
switch (G__29911) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___33064 = n;
var x_33065 = (0);
while(true){
if((x_33065 < n__5636__auto___33064)){
(a[x_33065] = x_33065);

var G__33066 = (x_33065 + (1));
x_33065 = G__33066;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29959 = (function (flag,meta29960){
this.flag = flag;
this.meta29960 = meta29960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29961,meta29960__$1){
var self__ = this;
var _29961__$1 = this;
return (new cljs.core.async.t_cljs$core$async29959(self__.flag,meta29960__$1));
}));

(cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29961){
var self__ = this;
var _29961__$1 = this;
return self__.meta29960;
}));

(cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29960","meta29960",-1443185931,null)], null);
}));

(cljs.core.async.t_cljs$core$async29959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29959");

(cljs.core.async.t_cljs$core$async29959.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29959.
 */
cljs.core.async.__GT_t_cljs$core$async29959 = (function cljs$core$async$__GT_t_cljs$core$async29959(flag,meta29960){
return (new cljs.core.async.t_cljs$core$async29959(flag,meta29960));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async29959(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29973 = (function (flag,cb,meta29974){
this.flag = flag;
this.cb = cb;
this.meta29974 = meta29974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29975,meta29974__$1){
var self__ = this;
var _29975__$1 = this;
return (new cljs.core.async.t_cljs$core$async29973(self__.flag,self__.cb,meta29974__$1));
}));

(cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29975){
var self__ = this;
var _29975__$1 = this;
return self__.meta29974;
}));

(cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29974","meta29974",-1143793277,null)], null);
}));

(cljs.core.async.t_cljs$core$async29973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29973");

(cljs.core.async.t_cljs$core$async29973.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29973.
 */
cljs.core.async.__GT_t_cljs$core$async29973 = (function cljs$core$async$__GT_t_cljs$core$async29973(flag,cb,meta29974){
return (new cljs.core.async.t_cljs$core$async29973(flag,cb,meta29974));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async29973(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__29996_SHARP_){
var G__30007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29996_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30007) : fret.call(null,G__30007));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__29997_SHARP_){
var G__30010 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29997_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30010) : fret.call(null,G__30010));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33074 = (i + (1));
i = G__33074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33090 = arguments.length;
var i__5770__auto___33091 = (0);
while(true){
if((i__5770__auto___33091 < len__5769__auto___33090)){
args__5775__auto__.push((arguments[i__5770__auto___33091]));

var G__33092 = (i__5770__auto___33091 + (1));
i__5770__auto___33091 = G__33092;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30071){
var map__30076 = p__30071;
var map__30076__$1 = cljs.core.__destructure_map(map__30076);
var opts = map__30076__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30054){
var G__30055 = cljs.core.first(seq30054);
var seq30054__$1 = cljs.core.next(seq30054);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30055,seq30054__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30117 = arguments.length;
switch (G__30117) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29727__auto___33097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30240){
var state_val_30241 = (state_30240[(1)]);
if((state_val_30241 === (7))){
var inst_30229 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
var statearr_30248_33107 = state_30240__$1;
(statearr_30248_33107[(2)] = inst_30229);

(statearr_30248_33107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (1))){
var state_30240__$1 = state_30240;
var statearr_30251_33111 = state_30240__$1;
(statearr_30251_33111[(2)] = null);

(statearr_30251_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (4))){
var inst_30200 = (state_30240[(7)]);
var inst_30200__$1 = (state_30240[(2)]);
var inst_30207 = (inst_30200__$1 == null);
var state_30240__$1 = (function (){var statearr_30252 = state_30240;
(statearr_30252[(7)] = inst_30200__$1);

return statearr_30252;
})();
if(cljs.core.truth_(inst_30207)){
var statearr_30253_33115 = state_30240__$1;
(statearr_30253_33115[(1)] = (5));

} else {
var statearr_30255_33116 = state_30240__$1;
(statearr_30255_33116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (13))){
var state_30240__$1 = state_30240;
var statearr_30261_33117 = state_30240__$1;
(statearr_30261_33117[(2)] = null);

(statearr_30261_33117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (6))){
var inst_30200 = (state_30240[(7)]);
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30240__$1,(11),to,inst_30200);
} else {
if((state_val_30241 === (3))){
var inst_30233 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30240__$1,inst_30233);
} else {
if((state_val_30241 === (12))){
var state_30240__$1 = state_30240;
var statearr_30263_33121 = state_30240__$1;
(statearr_30263_33121[(2)] = null);

(statearr_30263_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (2))){
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30240__$1,(4),from);
} else {
if((state_val_30241 === (11))){
var inst_30221 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
if(cljs.core.truth_(inst_30221)){
var statearr_30265_33131 = state_30240__$1;
(statearr_30265_33131[(1)] = (12));

} else {
var statearr_30266_33132 = state_30240__$1;
(statearr_30266_33132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (9))){
var state_30240__$1 = state_30240;
var statearr_30267_33136 = state_30240__$1;
(statearr_30267_33136[(2)] = null);

(statearr_30267_33136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (5))){
var state_30240__$1 = state_30240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30268_33137 = state_30240__$1;
(statearr_30268_33137[(1)] = (8));

} else {
var statearr_30269_33138 = state_30240__$1;
(statearr_30269_33138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (14))){
var inst_30227 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
var statearr_30270_33139 = state_30240__$1;
(statearr_30270_33139[(2)] = inst_30227);

(statearr_30270_33139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (10))){
var inst_30217 = (state_30240[(2)]);
var state_30240__$1 = state_30240;
var statearr_30273_33140 = state_30240__$1;
(statearr_30273_33140[(2)] = inst_30217);

(statearr_30273_33140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30241 === (8))){
var inst_30212 = cljs.core.async.close_BANG_(to);
var state_30240__$1 = state_30240;
var statearr_30276_33147 = state_30240__$1;
(statearr_30276_33147[(2)] = inst_30212);

(statearr_30276_33147[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_30277 = [null,null,null,null,null,null,null,null];
(statearr_30277[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_30277[(1)] = (1));

return statearr_30277;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_30240){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30240);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30278){var ex__29477__auto__ = e30278;
var statearr_30279_33172 = state_30240;
(statearr_30279_33172[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30240[(4)]))){
var statearr_30280_33174 = state_30240;
(statearr_30280_33174[(1)] = cljs.core.first((state_30240[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33179 = state_30240;
state_30240 = G__33179;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_30240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_30240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30287 = f__29728__auto__();
(statearr_30287[(6)] = c__29727__auto___33097);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30316){
var vec__30319 = p__30316;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30319,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30319,(1),null);
var job = vec__30319;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29727__auto___33182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30329){
var state_val_30330 = (state_30329[(1)]);
if((state_val_30330 === (1))){
var state_30329__$1 = state_30329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30329__$1,(2),res,v);
} else {
if((state_val_30330 === (2))){
var inst_30326 = (state_30329[(2)]);
var inst_30327 = cljs.core.async.close_BANG_(res);
var state_30329__$1 = (function (){var statearr_30333 = state_30329;
(statearr_30333[(7)] = inst_30326);

return statearr_30333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30329__$1,inst_30327);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_30337 = [null,null,null,null,null,null,null,null];
(statearr_30337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_30337[(1)] = (1));

return statearr_30337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_30329){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30329);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30338){var ex__29477__auto__ = e30338;
var statearr_30339_33183 = state_30329;
(statearr_30339_33183[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30329[(4)]))){
var statearr_30340_33184 = state_30329;
(statearr_30340_33184[(1)] = cljs.core.first((state_30329[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33185 = state_30329;
state_30329 = G__33185;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_30329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_30329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30343 = f__29728__auto__();
(statearr_30343[(6)] = c__29727__auto___33182);

return statearr_30343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30344){
var vec__30345 = p__30344;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30345,(1),null);
var job = vec__30345;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___33186 = n;
var __33187 = (0);
while(true){
if((__33187 < n__5636__auto___33186)){
var G__30348_33188 = type;
var G__30348_33189__$1 = (((G__30348_33188 instanceof cljs.core.Keyword))?G__30348_33188.fqn:null);
switch (G__30348_33189__$1) {
case "compute":
var c__29727__auto___33191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33187,c__29727__auto___33191,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async){
return (function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = ((function (__33187,c__29727__auto___33191,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async){
return (function (state_30361){
var state_val_30362 = (state_30361[(1)]);
if((state_val_30362 === (1))){
var state_30361__$1 = state_30361;
var statearr_30363_33192 = state_30361__$1;
(statearr_30363_33192[(2)] = null);

(statearr_30363_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (2))){
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30361__$1,(4),jobs);
} else {
if((state_val_30362 === (3))){
var inst_30359 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30361__$1,inst_30359);
} else {
if((state_val_30362 === (4))){
var inst_30351 = (state_30361[(2)]);
var inst_30352 = process__$1(inst_30351);
var state_30361__$1 = state_30361;
if(cljs.core.truth_(inst_30352)){
var statearr_30370_33194 = state_30361__$1;
(statearr_30370_33194[(1)] = (5));

} else {
var statearr_30372_33195 = state_30361__$1;
(statearr_30372_33195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (5))){
var state_30361__$1 = state_30361;
var statearr_30373_33196 = state_30361__$1;
(statearr_30373_33196[(2)] = null);

(statearr_30373_33196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (6))){
var state_30361__$1 = state_30361;
var statearr_30374_33197 = state_30361__$1;
(statearr_30374_33197[(2)] = null);

(statearr_30374_33197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30362 === (7))){
var inst_30357 = (state_30361[(2)]);
var state_30361__$1 = state_30361;
var statearr_30379_33198 = state_30361__$1;
(statearr_30379_33198[(2)] = inst_30357);

(statearr_30379_33198[(1)] = (3));


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
});})(__33187,c__29727__auto___33191,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async))
;
return ((function (__33187,switch__29473__auto__,c__29727__auto___33191,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_30383 = [null,null,null,null,null,null,null];
(statearr_30383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_30383[(1)] = (1));

return statearr_30383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_30361){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30361);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30384){var ex__29477__auto__ = e30384;
var statearr_30385_33202 = state_30361;
(statearr_30385_33202[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30361[(4)]))){
var statearr_30387_33203 = state_30361;
(statearr_30387_33203[(1)] = cljs.core.first((state_30361[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33205 = state_30361;
state_30361 = G__33205;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_30361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_30361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
;})(__33187,switch__29473__auto__,c__29727__auto___33191,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async))
})();
var state__29729__auto__ = (function (){var statearr_30396 = f__29728__auto__();
(statearr_30396[(6)] = c__29727__auto___33191);

return statearr_30396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
});})(__33187,c__29727__auto___33191,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async))
);


break;
case "async":
var c__29727__auto___33212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33187,c__29727__auto___33212,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async){
return (function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = ((function (__33187,c__29727__auto___33212,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async){
return (function (state_30411){
var state_val_30412 = (state_30411[(1)]);
if((state_val_30412 === (1))){
var state_30411__$1 = state_30411;
var statearr_30424_33213 = state_30411__$1;
(statearr_30424_33213[(2)] = null);

(statearr_30424_33213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (2))){
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30411__$1,(4),jobs);
} else {
if((state_val_30412 === (3))){
var inst_30409 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30411__$1,inst_30409);
} else {
if((state_val_30412 === (4))){
var inst_30400 = (state_30411[(2)]);
var inst_30401 = async(inst_30400);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30401)){
var statearr_30438_33214 = state_30411__$1;
(statearr_30438_33214[(1)] = (5));

} else {
var statearr_30439_33215 = state_30411__$1;
(statearr_30439_33215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (5))){
var state_30411__$1 = state_30411;
var statearr_30449_33216 = state_30411__$1;
(statearr_30449_33216[(2)] = null);

(statearr_30449_33216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (6))){
var state_30411__$1 = state_30411;
var statearr_30461_33217 = state_30411__$1;
(statearr_30461_33217[(2)] = null);

(statearr_30461_33217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (7))){
var inst_30407 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30463_33218 = state_30411__$1;
(statearr_30463_33218[(2)] = inst_30407);

(statearr_30463_33218[(1)] = (3));


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
});})(__33187,c__29727__auto___33212,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async))
;
return ((function (__33187,switch__29473__auto__,c__29727__auto___33212,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_30467 = [null,null,null,null,null,null,null];
(statearr_30467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_30467[(1)] = (1));

return statearr_30467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_30411){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30411);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30468){var ex__29477__auto__ = e30468;
var statearr_30469_33219 = state_30411;
(statearr_30469_33219[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30411[(4)]))){
var statearr_30470_33220 = state_30411;
(statearr_30470_33220[(1)] = cljs.core.first((state_30411[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33230 = state_30411;
state_30411 = G__33230;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
;})(__33187,switch__29473__auto__,c__29727__auto___33212,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async))
})();
var state__29729__auto__ = (function (){var statearr_30472 = f__29728__auto__();
(statearr_30472[(6)] = c__29727__auto___33212);

return statearr_30472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
});})(__33187,c__29727__auto___33212,G__30348_33188,G__30348_33189__$1,n__5636__auto___33186,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30348_33189__$1)].join('')));

}

var G__33231 = (__33187 + (1));
__33187 = G__33231;
continue;
} else {
}
break;
}

var c__29727__auto___33232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30498){
var state_val_30499 = (state_30498[(1)]);
if((state_val_30499 === (7))){
var inst_30492 = (state_30498[(2)]);
var state_30498__$1 = state_30498;
var statearr_30501_33235 = state_30498__$1;
(statearr_30501_33235[(2)] = inst_30492);

(statearr_30501_33235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (1))){
var state_30498__$1 = state_30498;
var statearr_30502_33237 = state_30498__$1;
(statearr_30502_33237[(2)] = null);

(statearr_30502_33237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (4))){
var inst_30475 = (state_30498[(7)]);
var inst_30475__$1 = (state_30498[(2)]);
var inst_30477 = (inst_30475__$1 == null);
var state_30498__$1 = (function (){var statearr_30504 = state_30498;
(statearr_30504[(7)] = inst_30475__$1);

return statearr_30504;
})();
if(cljs.core.truth_(inst_30477)){
var statearr_30505_33240 = state_30498__$1;
(statearr_30505_33240[(1)] = (5));

} else {
var statearr_30507_33242 = state_30498__$1;
(statearr_30507_33242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (6))){
var inst_30475 = (state_30498[(7)]);
var inst_30481 = (state_30498[(8)]);
var inst_30481__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30483 = [inst_30475,inst_30481__$1];
var inst_30484 = (new cljs.core.PersistentVector(null,2,(5),inst_30482,inst_30483,null));
var state_30498__$1 = (function (){var statearr_30509 = state_30498;
(statearr_30509[(8)] = inst_30481__$1);

return statearr_30509;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30498__$1,(8),jobs,inst_30484);
} else {
if((state_val_30499 === (3))){
var inst_30494 = (state_30498[(2)]);
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30498__$1,inst_30494);
} else {
if((state_val_30499 === (2))){
var state_30498__$1 = state_30498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30498__$1,(4),from);
} else {
if((state_val_30499 === (9))){
var inst_30489 = (state_30498[(2)]);
var state_30498__$1 = (function (){var statearr_30510 = state_30498;
(statearr_30510[(9)] = inst_30489);

return statearr_30510;
})();
var statearr_30512_33255 = state_30498__$1;
(statearr_30512_33255[(2)] = null);

(statearr_30512_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (5))){
var inst_30479 = cljs.core.async.close_BANG_(jobs);
var state_30498__$1 = state_30498;
var statearr_30513_33256 = state_30498__$1;
(statearr_30513_33256[(2)] = inst_30479);

(statearr_30513_33256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30499 === (8))){
var inst_30481 = (state_30498[(8)]);
var inst_30486 = (state_30498[(2)]);
var state_30498__$1 = (function (){var statearr_30514 = state_30498;
(statearr_30514[(10)] = inst_30486);

return statearr_30514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30498__$1,(9),results,inst_30481);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_30519 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30519[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_30519[(1)] = (1));

return statearr_30519;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_30498){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30498);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30521){var ex__29477__auto__ = e30521;
var statearr_30522_33258 = state_30498;
(statearr_30522_33258[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30498[(4)]))){
var statearr_30523_33260 = state_30498;
(statearr_30523_33260[(1)] = cljs.core.first((state_30498[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33261 = state_30498;
state_30498 = G__33261;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_30498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_30498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30528 = f__29728__auto__();
(statearr_30528[(6)] = c__29727__auto___33232);

return statearr_30528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30579){
var state_val_30582 = (state_30579[(1)]);
if((state_val_30582 === (7))){
var inst_30573 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
var statearr_30589_33262 = state_30579__$1;
(statearr_30589_33262[(2)] = inst_30573);

(statearr_30589_33262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (20))){
var state_30579__$1 = state_30579;
var statearr_30596_33263 = state_30579__$1;
(statearr_30596_33263[(2)] = null);

(statearr_30596_33263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (1))){
var state_30579__$1 = state_30579;
var statearr_30601_33268 = state_30579__$1;
(statearr_30601_33268[(2)] = null);

(statearr_30601_33268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (4))){
var inst_30531 = (state_30579[(7)]);
var inst_30531__$1 = (state_30579[(2)]);
var inst_30532 = (inst_30531__$1 == null);
var state_30579__$1 = (function (){var statearr_30607 = state_30579;
(statearr_30607[(7)] = inst_30531__$1);

return statearr_30607;
})();
if(cljs.core.truth_(inst_30532)){
var statearr_30611_33273 = state_30579__$1;
(statearr_30611_33273[(1)] = (5));

} else {
var statearr_30612_33274 = state_30579__$1;
(statearr_30612_33274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (15))){
var inst_30552 = (state_30579[(8)]);
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30579__$1,(18),to,inst_30552);
} else {
if((state_val_30582 === (21))){
var inst_30568 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
var statearr_30619_33279 = state_30579__$1;
(statearr_30619_33279[(2)] = inst_30568);

(statearr_30619_33279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (13))){
var inst_30570 = (state_30579[(2)]);
var state_30579__$1 = (function (){var statearr_30628 = state_30579;
(statearr_30628[(9)] = inst_30570);

return statearr_30628;
})();
var statearr_30631_33280 = state_30579__$1;
(statearr_30631_33280[(2)] = null);

(statearr_30631_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (6))){
var inst_30531 = (state_30579[(7)]);
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30579__$1,(11),inst_30531);
} else {
if((state_val_30582 === (17))){
var inst_30563 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
if(cljs.core.truth_(inst_30563)){
var statearr_30638_33281 = state_30579__$1;
(statearr_30638_33281[(1)] = (19));

} else {
var statearr_30639_33282 = state_30579__$1;
(statearr_30639_33282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (3))){
var inst_30575 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30579__$1,inst_30575);
} else {
if((state_val_30582 === (12))){
var inst_30547 = (state_30579[(10)]);
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30579__$1,(14),inst_30547);
} else {
if((state_val_30582 === (2))){
var state_30579__$1 = state_30579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30579__$1,(4),results);
} else {
if((state_val_30582 === (19))){
var state_30579__$1 = state_30579;
var statearr_30646_33286 = state_30579__$1;
(statearr_30646_33286[(2)] = null);

(statearr_30646_33286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (11))){
var inst_30547 = (state_30579[(2)]);
var state_30579__$1 = (function (){var statearr_30650 = state_30579;
(statearr_30650[(10)] = inst_30547);

return statearr_30650;
})();
var statearr_30657_33287 = state_30579__$1;
(statearr_30657_33287[(2)] = null);

(statearr_30657_33287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (9))){
var state_30579__$1 = state_30579;
var statearr_30658_33288 = state_30579__$1;
(statearr_30658_33288[(2)] = null);

(statearr_30658_33288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (5))){
var state_30579__$1 = state_30579;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30659_33289 = state_30579__$1;
(statearr_30659_33289[(1)] = (8));

} else {
var statearr_30660_33290 = state_30579__$1;
(statearr_30660_33290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (14))){
var inst_30552 = (state_30579[(8)]);
var inst_30557 = (state_30579[(11)]);
var inst_30552__$1 = (state_30579[(2)]);
var inst_30556 = (inst_30552__$1 == null);
var inst_30557__$1 = cljs.core.not(inst_30556);
var state_30579__$1 = (function (){var statearr_30661 = state_30579;
(statearr_30661[(8)] = inst_30552__$1);

(statearr_30661[(11)] = inst_30557__$1);

return statearr_30661;
})();
if(inst_30557__$1){
var statearr_30662_33291 = state_30579__$1;
(statearr_30662_33291[(1)] = (15));

} else {
var statearr_30663_33292 = state_30579__$1;
(statearr_30663_33292[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (16))){
var inst_30557 = (state_30579[(11)]);
var state_30579__$1 = state_30579;
var statearr_30668_33293 = state_30579__$1;
(statearr_30668_33293[(2)] = inst_30557);

(statearr_30668_33293[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (10))){
var inst_30542 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
var statearr_30669_33294 = state_30579__$1;
(statearr_30669_33294[(2)] = inst_30542);

(statearr_30669_33294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (18))){
var inst_30560 = (state_30579[(2)]);
var state_30579__$1 = state_30579;
var statearr_30670_33295 = state_30579__$1;
(statearr_30670_33295[(2)] = inst_30560);

(statearr_30670_33295[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30582 === (8))){
var inst_30536 = cljs.core.async.close_BANG_(to);
var state_30579__$1 = state_30579;
var statearr_30674_33297 = state_30579__$1;
(statearr_30674_33297[(2)] = inst_30536);

(statearr_30674_33297[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_30678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__);

(statearr_30678[(1)] = (1));

return statearr_30678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1 = (function (state_30579){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30579);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30679){var ex__29477__auto__ = e30679;
var statearr_30681_33303 = state_30579;
(statearr_30681_33303[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30579[(4)]))){
var statearr_30682_33305 = state_30579;
(statearr_30682_33305[(1)] = cljs.core.first((state_30579[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33306 = state_30579;
state_30579 = G__33306;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__ = function(state_30579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1.call(this,state_30579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30683 = f__29728__auto__();
(statearr_30683[(6)] = c__29727__auto__);

return statearr_30683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30685 = arguments.length;
switch (G__30685) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30687 = arguments.length;
switch (G__30687) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30691 = arguments.length;
switch (G__30691) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29727__auto___33348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30718){
var state_val_30719 = (state_30718[(1)]);
if((state_val_30719 === (7))){
var inst_30714 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
var statearr_30720_33351 = state_30718__$1;
(statearr_30720_33351[(2)] = inst_30714);

(statearr_30720_33351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (1))){
var state_30718__$1 = state_30718;
var statearr_30721_33352 = state_30718__$1;
(statearr_30721_33352[(2)] = null);

(statearr_30721_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (4))){
var inst_30695 = (state_30718[(7)]);
var inst_30695__$1 = (state_30718[(2)]);
var inst_30696 = (inst_30695__$1 == null);
var state_30718__$1 = (function (){var statearr_30724 = state_30718;
(statearr_30724[(7)] = inst_30695__$1);

return statearr_30724;
})();
if(cljs.core.truth_(inst_30696)){
var statearr_30725_33353 = state_30718__$1;
(statearr_30725_33353[(1)] = (5));

} else {
var statearr_30726_33354 = state_30718__$1;
(statearr_30726_33354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (13))){
var state_30718__$1 = state_30718;
var statearr_30727_33355 = state_30718__$1;
(statearr_30727_33355[(2)] = null);

(statearr_30727_33355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (6))){
var inst_30695 = (state_30718[(7)]);
var inst_30701 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30695) : p.call(null,inst_30695));
var state_30718__$1 = state_30718;
if(cljs.core.truth_(inst_30701)){
var statearr_30728_33356 = state_30718__$1;
(statearr_30728_33356[(1)] = (9));

} else {
var statearr_30729_33357 = state_30718__$1;
(statearr_30729_33357[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (3))){
var inst_30716 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30718__$1,inst_30716);
} else {
if((state_val_30719 === (12))){
var state_30718__$1 = state_30718;
var statearr_30730_33360 = state_30718__$1;
(statearr_30730_33360[(2)] = null);

(statearr_30730_33360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (2))){
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30718__$1,(4),ch);
} else {
if((state_val_30719 === (11))){
var inst_30695 = (state_30718[(7)]);
var inst_30705 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30718__$1,(8),inst_30705,inst_30695);
} else {
if((state_val_30719 === (9))){
var state_30718__$1 = state_30718;
var statearr_30732_33361 = state_30718__$1;
(statearr_30732_33361[(2)] = tc);

(statearr_30732_33361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (5))){
var inst_30698 = cljs.core.async.close_BANG_(tc);
var inst_30699 = cljs.core.async.close_BANG_(fc);
var state_30718__$1 = (function (){var statearr_30734 = state_30718;
(statearr_30734[(8)] = inst_30698);

return statearr_30734;
})();
var statearr_30735_33363 = state_30718__$1;
(statearr_30735_33363[(2)] = inst_30699);

(statearr_30735_33363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (14))){
var inst_30712 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
var statearr_30738_33365 = state_30718__$1;
(statearr_30738_33365[(2)] = inst_30712);

(statearr_30738_33365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (10))){
var state_30718__$1 = state_30718;
var statearr_30739_33366 = state_30718__$1;
(statearr_30739_33366[(2)] = fc);

(statearr_30739_33366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30719 === (8))){
var inst_30707 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
if(cljs.core.truth_(inst_30707)){
var statearr_30740_33368 = state_30718__$1;
(statearr_30740_33368[(1)] = (12));

} else {
var statearr_30741_33369 = state_30718__$1;
(statearr_30741_33369[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_30746 = [null,null,null,null,null,null,null,null,null];
(statearr_30746[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_30746[(1)] = (1));

return statearr_30746;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_30718){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30718);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30747){var ex__29477__auto__ = e30747;
var statearr_30748_33372 = state_30718;
(statearr_30748_33372[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30718[(4)]))){
var statearr_30749_33373 = state_30718;
(statearr_30749_33373[(1)] = cljs.core.first((state_30718[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33374 = state_30718;
state_30718 = G__33374;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_30718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_30718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30750 = f__29728__auto__();
(statearr_30750[(6)] = c__29727__auto___33348);

return statearr_30750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30776){
var state_val_30777 = (state_30776[(1)]);
if((state_val_30777 === (7))){
var inst_30772 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30778_33377 = state_30776__$1;
(statearr_30778_33377[(2)] = inst_30772);

(statearr_30778_33377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (1))){
var inst_30755 = init;
var inst_30756 = inst_30755;
var state_30776__$1 = (function (){var statearr_30779 = state_30776;
(statearr_30779[(7)] = inst_30756);

return statearr_30779;
})();
var statearr_30780_33379 = state_30776__$1;
(statearr_30780_33379[(2)] = null);

(statearr_30780_33379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (4))){
var inst_30759 = (state_30776[(8)]);
var inst_30759__$1 = (state_30776[(2)]);
var inst_30760 = (inst_30759__$1 == null);
var state_30776__$1 = (function (){var statearr_30782 = state_30776;
(statearr_30782[(8)] = inst_30759__$1);

return statearr_30782;
})();
if(cljs.core.truth_(inst_30760)){
var statearr_30783_33382 = state_30776__$1;
(statearr_30783_33382[(1)] = (5));

} else {
var statearr_30784_33383 = state_30776__$1;
(statearr_30784_33383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (6))){
var inst_30756 = (state_30776[(7)]);
var inst_30759 = (state_30776[(8)]);
var inst_30763 = (state_30776[(9)]);
var inst_30763__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30756,inst_30759) : f.call(null,inst_30756,inst_30759));
var inst_30764 = cljs.core.reduced_QMARK_(inst_30763__$1);
var state_30776__$1 = (function (){var statearr_30787 = state_30776;
(statearr_30787[(9)] = inst_30763__$1);

return statearr_30787;
})();
if(inst_30764){
var statearr_30790_33384 = state_30776__$1;
(statearr_30790_33384[(1)] = (8));

} else {
var statearr_30791_33385 = state_30776__$1;
(statearr_30791_33385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (3))){
var inst_30774 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30776__$1,inst_30774);
} else {
if((state_val_30777 === (2))){
var state_30776__$1 = state_30776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30776__$1,(4),ch);
} else {
if((state_val_30777 === (9))){
var inst_30763 = (state_30776[(9)]);
var inst_30756 = inst_30763;
var state_30776__$1 = (function (){var statearr_30792 = state_30776;
(statearr_30792[(7)] = inst_30756);

return statearr_30792;
})();
var statearr_30794_33392 = state_30776__$1;
(statearr_30794_33392[(2)] = null);

(statearr_30794_33392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (5))){
var inst_30756 = (state_30776[(7)]);
var state_30776__$1 = state_30776;
var statearr_30795_33393 = state_30776__$1;
(statearr_30795_33393[(2)] = inst_30756);

(statearr_30795_33393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (10))){
var inst_30770 = (state_30776[(2)]);
var state_30776__$1 = state_30776;
var statearr_30796_33394 = state_30776__$1;
(statearr_30796_33394[(2)] = inst_30770);

(statearr_30796_33394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30777 === (8))){
var inst_30763 = (state_30776[(9)]);
var inst_30766 = cljs.core.deref(inst_30763);
var state_30776__$1 = state_30776;
var statearr_30797_33402 = state_30776__$1;
(statearr_30797_33402[(2)] = inst_30766);

(statearr_30797_33402[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29474__auto____0 = (function (){
var statearr_30799 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30799[(0)] = cljs$core$async$reduce_$_state_machine__29474__auto__);

(statearr_30799[(1)] = (1));

return statearr_30799;
});
var cljs$core$async$reduce_$_state_machine__29474__auto____1 = (function (state_30776){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30776);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30800){var ex__29477__auto__ = e30800;
var statearr_30801_33407 = state_30776;
(statearr_30801_33407[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30776[(4)]))){
var statearr_30803_33409 = state_30776;
(statearr_30803_33409[(1)] = cljs.core.first((state_30776[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33410 = state_30776;
state_30776 = G__33410;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29474__auto__ = function(state_30776){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29474__auto____1.call(this,state_30776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29474__auto____0;
cljs$core$async$reduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29474__auto____1;
return cljs$core$async$reduce_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30804 = f__29728__auto__();
(statearr_30804[(6)] = c__29727__auto__);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30816){
var state_val_30817 = (state_30816[(1)]);
if((state_val_30817 === (1))){
var inst_30807 = cljs.core.async.reduce(f__$1,init,ch);
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30816__$1,(2),inst_30807);
} else {
if((state_val_30817 === (2))){
var inst_30809 = (state_30816[(2)]);
var inst_30813 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30809) : f__$1.call(null,inst_30809));
var state_30816__$1 = state_30816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30816__$1,inst_30813);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29474__auto____0 = (function (){
var statearr_30818 = [null,null,null,null,null,null,null];
(statearr_30818[(0)] = cljs$core$async$transduce_$_state_machine__29474__auto__);

(statearr_30818[(1)] = (1));

return statearr_30818;
});
var cljs$core$async$transduce_$_state_machine__29474__auto____1 = (function (state_30816){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30816);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30819){var ex__29477__auto__ = e30819;
var statearr_30820_33424 = state_30816;
(statearr_30820_33424[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30816[(4)]))){
var statearr_30821_33425 = state_30816;
(statearr_30821_33425[(1)] = cljs.core.first((state_30816[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_30816;
state_30816 = G__33429;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29474__auto__ = function(state_30816){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29474__auto____1.call(this,state_30816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29474__auto____0;
cljs$core$async$transduce_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29474__auto____1;
return cljs$core$async$transduce_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30823 = f__29728__auto__();
(statearr_30823[(6)] = c__29727__auto__);

return statearr_30823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30825 = arguments.length;
switch (G__30825) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_30851){
var state_val_30852 = (state_30851[(1)]);
if((state_val_30852 === (7))){
var inst_30833 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30854_33438 = state_30851__$1;
(statearr_30854_33438[(2)] = inst_30833);

(statearr_30854_33438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (1))){
var inst_30827 = cljs.core.seq(coll);
var inst_30828 = inst_30827;
var state_30851__$1 = (function (){var statearr_30855 = state_30851;
(statearr_30855[(7)] = inst_30828);

return statearr_30855;
})();
var statearr_30856_33439 = state_30851__$1;
(statearr_30856_33439[(2)] = null);

(statearr_30856_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (4))){
var inst_30828 = (state_30851[(7)]);
var inst_30831 = cljs.core.first(inst_30828);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30851__$1,(7),ch,inst_30831);
} else {
if((state_val_30852 === (13))){
var inst_30845 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30858_33440 = state_30851__$1;
(statearr_30858_33440[(2)] = inst_30845);

(statearr_30858_33440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (6))){
var inst_30836 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30836)){
var statearr_30860_33441 = state_30851__$1;
(statearr_30860_33441[(1)] = (8));

} else {
var statearr_30861_33443 = state_30851__$1;
(statearr_30861_33443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (3))){
var inst_30849 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30851__$1,inst_30849);
} else {
if((state_val_30852 === (12))){
var state_30851__$1 = state_30851;
var statearr_30863_33444 = state_30851__$1;
(statearr_30863_33444[(2)] = null);

(statearr_30863_33444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (2))){
var inst_30828 = (state_30851[(7)]);
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30828)){
var statearr_30868_33445 = state_30851__$1;
(statearr_30868_33445[(1)] = (4));

} else {
var statearr_30869_33446 = state_30851__$1;
(statearr_30869_33446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (11))){
var inst_30842 = cljs.core.async.close_BANG_(ch);
var state_30851__$1 = state_30851;
var statearr_30871_33448 = state_30851__$1;
(statearr_30871_33448[(2)] = inst_30842);

(statearr_30871_33448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (9))){
var state_30851__$1 = state_30851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30872_33450 = state_30851__$1;
(statearr_30872_33450[(1)] = (11));

} else {
var statearr_30875_33451 = state_30851__$1;
(statearr_30875_33451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var inst_30828 = (state_30851[(7)]);
var state_30851__$1 = state_30851;
var statearr_30877_33452 = state_30851__$1;
(statearr_30877_33452[(2)] = inst_30828);

(statearr_30877_33452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (10))){
var inst_30847 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30878_33457 = state_30851__$1;
(statearr_30878_33457[(2)] = inst_30847);

(statearr_30878_33457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (8))){
var inst_30828 = (state_30851[(7)]);
var inst_30838 = cljs.core.next(inst_30828);
var inst_30828__$1 = inst_30838;
var state_30851__$1 = (function (){var statearr_30879 = state_30851;
(statearr_30879[(7)] = inst_30828__$1);

return statearr_30879;
})();
var statearr_30880_33458 = state_30851__$1;
(statearr_30880_33458[(2)] = null);

(statearr_30880_33458[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_30881 = [null,null,null,null,null,null,null,null];
(statearr_30881[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_30881[(1)] = (1));

return statearr_30881;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_30851){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_30851);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e30882){var ex__29477__auto__ = e30882;
var statearr_30884_33464 = state_30851;
(statearr_30884_33464[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_30851[(4)]))){
var statearr_30885_33466 = state_30851;
(statearr_30885_33466[(1)] = cljs.core.first((state_30851[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33467 = state_30851;
state_30851 = G__33467;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_30851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_30851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_30886 = f__29728__auto__();
(statearr_30886[(6)] = c__29727__auto__);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30888 = arguments.length;
switch (G__30888) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33478 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33478(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33479 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33479(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33483 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33483(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33487 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33487(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30909 = (function (ch,cs,meta30910){
this.ch = ch;
this.cs = cs;
this.meta30910 = meta30910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30911,meta30910__$1){
var self__ = this;
var _30911__$1 = this;
return (new cljs.core.async.t_cljs$core$async30909(self__.ch,self__.cs,meta30910__$1));
}));

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30911){
var self__ = this;
var _30911__$1 = this;
return self__.meta30910;
}));

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30909.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30910","meta30910",-854994746,null)], null);
}));

(cljs.core.async.t_cljs$core$async30909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30909");

(cljs.core.async.t_cljs$core$async30909.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30909.
 */
cljs.core.async.__GT_t_cljs$core$async30909 = (function cljs$core$async$__GT_t_cljs$core$async30909(ch,cs,meta30910){
return (new cljs.core.async.t_cljs$core$async30909(ch,cs,meta30910));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async30909(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29727__auto___33507 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_31081){
var state_val_31082 = (state_31081[(1)]);
if((state_val_31082 === (7))){
var inst_31077 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31086_33512 = state_31081__$1;
(statearr_31086_33512[(2)] = inst_31077);

(statearr_31086_33512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (20))){
var inst_30970 = (state_31081[(7)]);
var inst_30987 = cljs.core.first(inst_30970);
var inst_30988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30987,(0),null);
var inst_30989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30987,(1),null);
var state_31081__$1 = (function (){var statearr_31092 = state_31081;
(statearr_31092[(8)] = inst_30988);

return statearr_31092;
})();
if(cljs.core.truth_(inst_30989)){
var statearr_31093_33525 = state_31081__$1;
(statearr_31093_33525[(1)] = (22));

} else {
var statearr_31094_33526 = state_31081__$1;
(statearr_31094_33526[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (27))){
var inst_31018 = (state_31081[(9)]);
var inst_31020 = (state_31081[(10)]);
var inst_31026 = (state_31081[(11)]);
var inst_30929 = (state_31081[(12)]);
var inst_31026__$1 = cljs.core._nth(inst_31018,inst_31020);
var inst_31027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31026__$1,inst_30929,done);
var state_31081__$1 = (function (){var statearr_31097 = state_31081;
(statearr_31097[(11)] = inst_31026__$1);

return statearr_31097;
})();
if(cljs.core.truth_(inst_31027)){
var statearr_31100_33530 = state_31081__$1;
(statearr_31100_33530[(1)] = (30));

} else {
var statearr_31101_33531 = state_31081__$1;
(statearr_31101_33531[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (1))){
var state_31081__$1 = state_31081;
var statearr_31104_33532 = state_31081__$1;
(statearr_31104_33532[(2)] = null);

(statearr_31104_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (24))){
var inst_30970 = (state_31081[(7)]);
var inst_30995 = (state_31081[(2)]);
var inst_30996 = cljs.core.next(inst_30970);
var inst_30942 = inst_30996;
var inst_30943 = null;
var inst_30944 = (0);
var inst_30945 = (0);
var state_31081__$1 = (function (){var statearr_31105 = state_31081;
(statearr_31105[(13)] = inst_30995);

(statearr_31105[(14)] = inst_30942);

(statearr_31105[(15)] = inst_30943);

(statearr_31105[(16)] = inst_30944);

(statearr_31105[(17)] = inst_30945);

return statearr_31105;
})();
var statearr_31106_33533 = state_31081__$1;
(statearr_31106_33533[(2)] = null);

(statearr_31106_33533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (39))){
var state_31081__$1 = state_31081;
var statearr_31116_33535 = state_31081__$1;
(statearr_31116_33535[(2)] = null);

(statearr_31116_33535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (4))){
var inst_30929 = (state_31081[(12)]);
var inst_30929__$1 = (state_31081[(2)]);
var inst_30932 = (inst_30929__$1 == null);
var state_31081__$1 = (function (){var statearr_31120 = state_31081;
(statearr_31120[(12)] = inst_30929__$1);

return statearr_31120;
})();
if(cljs.core.truth_(inst_30932)){
var statearr_31121_33539 = state_31081__$1;
(statearr_31121_33539[(1)] = (5));

} else {
var statearr_31123_33540 = state_31081__$1;
(statearr_31123_33540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (15))){
var inst_30945 = (state_31081[(17)]);
var inst_30942 = (state_31081[(14)]);
var inst_30943 = (state_31081[(15)]);
var inst_30944 = (state_31081[(16)]);
var inst_30962 = (state_31081[(2)]);
var inst_30966 = (inst_30945 + (1));
var tmp31110 = inst_30943;
var tmp31111 = inst_30944;
var tmp31112 = inst_30942;
var inst_30942__$1 = tmp31112;
var inst_30943__$1 = tmp31110;
var inst_30944__$1 = tmp31111;
var inst_30945__$1 = inst_30966;
var state_31081__$1 = (function (){var statearr_31124 = state_31081;
(statearr_31124[(18)] = inst_30962);

(statearr_31124[(14)] = inst_30942__$1);

(statearr_31124[(15)] = inst_30943__$1);

(statearr_31124[(16)] = inst_30944__$1);

(statearr_31124[(17)] = inst_30945__$1);

return statearr_31124;
})();
var statearr_31126_33545 = state_31081__$1;
(statearr_31126_33545[(2)] = null);

(statearr_31126_33545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (21))){
var inst_30999 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31141_33549 = state_31081__$1;
(statearr_31141_33549[(2)] = inst_30999);

(statearr_31141_33549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (31))){
var inst_31026 = (state_31081[(11)]);
var inst_31030 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31026);
var state_31081__$1 = state_31081;
var statearr_31147_33550 = state_31081__$1;
(statearr_31147_33550[(2)] = inst_31030);

(statearr_31147_33550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (32))){
var inst_31020 = (state_31081[(10)]);
var inst_31017 = (state_31081[(19)]);
var inst_31018 = (state_31081[(9)]);
var inst_31019 = (state_31081[(20)]);
var inst_31032 = (state_31081[(2)]);
var inst_31033 = (inst_31020 + (1));
var tmp31131 = inst_31017;
var tmp31132 = inst_31018;
var tmp31133 = inst_31019;
var inst_31017__$1 = tmp31131;
var inst_31018__$1 = tmp31132;
var inst_31019__$1 = tmp31133;
var inst_31020__$1 = inst_31033;
var state_31081__$1 = (function (){var statearr_31150 = state_31081;
(statearr_31150[(21)] = inst_31032);

(statearr_31150[(19)] = inst_31017__$1);

(statearr_31150[(9)] = inst_31018__$1);

(statearr_31150[(20)] = inst_31019__$1);

(statearr_31150[(10)] = inst_31020__$1);

return statearr_31150;
})();
var statearr_31155_33558 = state_31081__$1;
(statearr_31155_33558[(2)] = null);

(statearr_31155_33558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (40))){
var inst_31046 = (state_31081[(22)]);
var inst_31052 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31046);
var state_31081__$1 = state_31081;
var statearr_31160_33559 = state_31081__$1;
(statearr_31160_33559[(2)] = inst_31052);

(statearr_31160_33559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (33))){
var inst_31036 = (state_31081[(23)]);
var inst_31038 = cljs.core.chunked_seq_QMARK_(inst_31036);
var state_31081__$1 = state_31081;
if(inst_31038){
var statearr_31162_33560 = state_31081__$1;
(statearr_31162_33560[(1)] = (36));

} else {
var statearr_31163_33562 = state_31081__$1;
(statearr_31163_33562[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (13))){
var inst_30954 = (state_31081[(24)]);
var inst_30957 = cljs.core.async.close_BANG_(inst_30954);
var state_31081__$1 = state_31081;
var statearr_31164_33563 = state_31081__$1;
(statearr_31164_33563[(2)] = inst_30957);

(statearr_31164_33563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (22))){
var inst_30988 = (state_31081[(8)]);
var inst_30992 = cljs.core.async.close_BANG_(inst_30988);
var state_31081__$1 = state_31081;
var statearr_31166_33564 = state_31081__$1;
(statearr_31166_33564[(2)] = inst_30992);

(statearr_31166_33564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (36))){
var inst_31036 = (state_31081[(23)]);
var inst_31040 = cljs.core.chunk_first(inst_31036);
var inst_31041 = cljs.core.chunk_rest(inst_31036);
var inst_31042 = cljs.core.count(inst_31040);
var inst_31017 = inst_31041;
var inst_31018 = inst_31040;
var inst_31019 = inst_31042;
var inst_31020 = (0);
var state_31081__$1 = (function (){var statearr_31168 = state_31081;
(statearr_31168[(19)] = inst_31017);

(statearr_31168[(9)] = inst_31018);

(statearr_31168[(20)] = inst_31019);

(statearr_31168[(10)] = inst_31020);

return statearr_31168;
})();
var statearr_31169_33569 = state_31081__$1;
(statearr_31169_33569[(2)] = null);

(statearr_31169_33569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (41))){
var inst_31036 = (state_31081[(23)]);
var inst_31054 = (state_31081[(2)]);
var inst_31056 = cljs.core.next(inst_31036);
var inst_31017 = inst_31056;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31081__$1 = (function (){var statearr_31170 = state_31081;
(statearr_31170[(25)] = inst_31054);

(statearr_31170[(19)] = inst_31017);

(statearr_31170[(9)] = inst_31018);

(statearr_31170[(20)] = inst_31019);

(statearr_31170[(10)] = inst_31020);

return statearr_31170;
})();
var statearr_31171_33573 = state_31081__$1;
(statearr_31171_33573[(2)] = null);

(statearr_31171_33573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (43))){
var state_31081__$1 = state_31081;
var statearr_31174_33577 = state_31081__$1;
(statearr_31174_33577[(2)] = null);

(statearr_31174_33577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (29))){
var inst_31065 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31177_33578 = state_31081__$1;
(statearr_31177_33578[(2)] = inst_31065);

(statearr_31177_33578[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (44))){
var inst_31074 = (state_31081[(2)]);
var state_31081__$1 = (function (){var statearr_31178 = state_31081;
(statearr_31178[(26)] = inst_31074);

return statearr_31178;
})();
var statearr_31179_33579 = state_31081__$1;
(statearr_31179_33579[(2)] = null);

(statearr_31179_33579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (6))){
var inst_31009 = (state_31081[(27)]);
var inst_31008 = cljs.core.deref(cs);
var inst_31009__$1 = cljs.core.keys(inst_31008);
var inst_31010 = cljs.core.count(inst_31009__$1);
var inst_31011 = cljs.core.reset_BANG_(dctr,inst_31010);
var inst_31016 = cljs.core.seq(inst_31009__$1);
var inst_31017 = inst_31016;
var inst_31018 = null;
var inst_31019 = (0);
var inst_31020 = (0);
var state_31081__$1 = (function (){var statearr_31181 = state_31081;
(statearr_31181[(27)] = inst_31009__$1);

(statearr_31181[(28)] = inst_31011);

(statearr_31181[(19)] = inst_31017);

(statearr_31181[(9)] = inst_31018);

(statearr_31181[(20)] = inst_31019);

(statearr_31181[(10)] = inst_31020);

return statearr_31181;
})();
var statearr_31182_33588 = state_31081__$1;
(statearr_31182_33588[(2)] = null);

(statearr_31182_33588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (28))){
var inst_31017 = (state_31081[(19)]);
var inst_31036 = (state_31081[(23)]);
var inst_31036__$1 = cljs.core.seq(inst_31017);
var state_31081__$1 = (function (){var statearr_31184 = state_31081;
(statearr_31184[(23)] = inst_31036__$1);

return statearr_31184;
})();
if(inst_31036__$1){
var statearr_31185_33591 = state_31081__$1;
(statearr_31185_33591[(1)] = (33));

} else {
var statearr_31187_33592 = state_31081__$1;
(statearr_31187_33592[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (25))){
var inst_31020 = (state_31081[(10)]);
var inst_31019 = (state_31081[(20)]);
var inst_31022 = (inst_31020 < inst_31019);
var inst_31023 = inst_31022;
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31023)){
var statearr_31189_33597 = state_31081__$1;
(statearr_31189_33597[(1)] = (27));

} else {
var statearr_31190_33598 = state_31081__$1;
(statearr_31190_33598[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (34))){
var state_31081__$1 = state_31081;
var statearr_31194_33599 = state_31081__$1;
(statearr_31194_33599[(2)] = null);

(statearr_31194_33599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (17))){
var state_31081__$1 = state_31081;
var statearr_31196_33600 = state_31081__$1;
(statearr_31196_33600[(2)] = null);

(statearr_31196_33600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (3))){
var inst_31079 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31081__$1,inst_31079);
} else {
if((state_val_31082 === (12))){
var inst_31004 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31198_33604 = state_31081__$1;
(statearr_31198_33604[(2)] = inst_31004);

(statearr_31198_33604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (2))){
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31081__$1,(4),ch);
} else {
if((state_val_31082 === (23))){
var state_31081__$1 = state_31081;
var statearr_31203_33606 = state_31081__$1;
(statearr_31203_33606[(2)] = null);

(statearr_31203_33606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (35))){
var inst_31063 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31204_33608 = state_31081__$1;
(statearr_31204_33608[(2)] = inst_31063);

(statearr_31204_33608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (19))){
var inst_30970 = (state_31081[(7)]);
var inst_30978 = cljs.core.chunk_first(inst_30970);
var inst_30980 = cljs.core.chunk_rest(inst_30970);
var inst_30981 = cljs.core.count(inst_30978);
var inst_30942 = inst_30980;
var inst_30943 = inst_30978;
var inst_30944 = inst_30981;
var inst_30945 = (0);
var state_31081__$1 = (function (){var statearr_31207 = state_31081;
(statearr_31207[(14)] = inst_30942);

(statearr_31207[(15)] = inst_30943);

(statearr_31207[(16)] = inst_30944);

(statearr_31207[(17)] = inst_30945);

return statearr_31207;
})();
var statearr_31209_33609 = state_31081__$1;
(statearr_31209_33609[(2)] = null);

(statearr_31209_33609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (11))){
var inst_30942 = (state_31081[(14)]);
var inst_30970 = (state_31081[(7)]);
var inst_30970__$1 = cljs.core.seq(inst_30942);
var state_31081__$1 = (function (){var statearr_31213 = state_31081;
(statearr_31213[(7)] = inst_30970__$1);

return statearr_31213;
})();
if(inst_30970__$1){
var statearr_31214_33610 = state_31081__$1;
(statearr_31214_33610[(1)] = (16));

} else {
var statearr_31216_33612 = state_31081__$1;
(statearr_31216_33612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (9))){
var inst_31006 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31218_33620 = state_31081__$1;
(statearr_31218_33620[(2)] = inst_31006);

(statearr_31218_33620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (5))){
var inst_30939 = cljs.core.deref(cs);
var inst_30940 = cljs.core.seq(inst_30939);
var inst_30942 = inst_30940;
var inst_30943 = null;
var inst_30944 = (0);
var inst_30945 = (0);
var state_31081__$1 = (function (){var statearr_31222 = state_31081;
(statearr_31222[(14)] = inst_30942);

(statearr_31222[(15)] = inst_30943);

(statearr_31222[(16)] = inst_30944);

(statearr_31222[(17)] = inst_30945);

return statearr_31222;
})();
var statearr_31225_33630 = state_31081__$1;
(statearr_31225_33630[(2)] = null);

(statearr_31225_33630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (14))){
var state_31081__$1 = state_31081;
var statearr_31228_33633 = state_31081__$1;
(statearr_31228_33633[(2)] = null);

(statearr_31228_33633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (45))){
var inst_31071 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31230_33634 = state_31081__$1;
(statearr_31230_33634[(2)] = inst_31071);

(statearr_31230_33634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (26))){
var inst_31009 = (state_31081[(27)]);
var inst_31067 = (state_31081[(2)]);
var inst_31068 = cljs.core.seq(inst_31009);
var state_31081__$1 = (function (){var statearr_31237 = state_31081;
(statearr_31237[(29)] = inst_31067);

return statearr_31237;
})();
if(inst_31068){
var statearr_31238_33648 = state_31081__$1;
(statearr_31238_33648[(1)] = (42));

} else {
var statearr_31240_33649 = state_31081__$1;
(statearr_31240_33649[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (16))){
var inst_30970 = (state_31081[(7)]);
var inst_30976 = cljs.core.chunked_seq_QMARK_(inst_30970);
var state_31081__$1 = state_31081;
if(inst_30976){
var statearr_31242_33658 = state_31081__$1;
(statearr_31242_33658[(1)] = (19));

} else {
var statearr_31244_33659 = state_31081__$1;
(statearr_31244_33659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (38))){
var inst_31060 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31245_33663 = state_31081__$1;
(statearr_31245_33663[(2)] = inst_31060);

(statearr_31245_33663[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (30))){
var state_31081__$1 = state_31081;
var statearr_31246_33677 = state_31081__$1;
(statearr_31246_33677[(2)] = null);

(statearr_31246_33677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (10))){
var inst_30943 = (state_31081[(15)]);
var inst_30945 = (state_31081[(17)]);
var inst_30953 = cljs.core._nth(inst_30943,inst_30945);
var inst_30954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30953,(0),null);
var inst_30955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30953,(1),null);
var state_31081__$1 = (function (){var statearr_31250 = state_31081;
(statearr_31250[(24)] = inst_30954);

return statearr_31250;
})();
if(cljs.core.truth_(inst_30955)){
var statearr_31253_33693 = state_31081__$1;
(statearr_31253_33693[(1)] = (13));

} else {
var statearr_31256_33694 = state_31081__$1;
(statearr_31256_33694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (18))){
var inst_31002 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31268_33695 = state_31081__$1;
(statearr_31268_33695[(2)] = inst_31002);

(statearr_31268_33695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (42))){
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31081__$1,(45),dchan);
} else {
if((state_val_31082 === (37))){
var inst_31036 = (state_31081[(23)]);
var inst_31046 = (state_31081[(22)]);
var inst_30929 = (state_31081[(12)]);
var inst_31046__$1 = cljs.core.first(inst_31036);
var inst_31047 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31046__$1,inst_30929,done);
var state_31081__$1 = (function (){var statearr_31276 = state_31081;
(statearr_31276[(22)] = inst_31046__$1);

return statearr_31276;
})();
if(cljs.core.truth_(inst_31047)){
var statearr_31278_33708 = state_31081__$1;
(statearr_31278_33708[(1)] = (39));

} else {
var statearr_31279_33709 = state_31081__$1;
(statearr_31279_33709[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (8))){
var inst_30945 = (state_31081[(17)]);
var inst_30944 = (state_31081[(16)]);
var inst_30947 = (inst_30945 < inst_30944);
var inst_30948 = inst_30947;
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_30948)){
var statearr_31280_33721 = state_31081__$1;
(statearr_31280_33721[(1)] = (10));

} else {
var statearr_31281_33722 = state_31081__$1;
(statearr_31281_33722[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29474__auto__ = null;
var cljs$core$async$mult_$_state_machine__29474__auto____0 = (function (){
var statearr_31285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31285[(0)] = cljs$core$async$mult_$_state_machine__29474__auto__);

(statearr_31285[(1)] = (1));

return statearr_31285;
});
var cljs$core$async$mult_$_state_machine__29474__auto____1 = (function (state_31081){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31081);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31286){var ex__29477__auto__ = e31286;
var statearr_31287_33740 = state_31081;
(statearr_31287_33740[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31081[(4)]))){
var statearr_31289_33741 = state_31081;
(statearr_31289_33741[(1)] = cljs.core.first((state_31081[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33743 = state_31081;
state_31081 = G__33743;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29474__auto__ = function(state_31081){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29474__auto____1.call(this,state_31081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29474__auto____0;
cljs$core$async$mult_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29474__auto____1;
return cljs$core$async$mult_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_31291 = f__29728__auto__();
(statearr_31291[(6)] = c__29727__auto___33507);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31297 = arguments.length;
switch (G__31297) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33765 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33765(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33780 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33780(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33815 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33815(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33850 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33850(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33859 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33859(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33869 = arguments.length;
var i__5770__auto___33870 = (0);
while(true){
if((i__5770__auto___33870 < len__5769__auto___33869)){
args__5775__auto__.push((arguments[i__5770__auto___33870]));

var G__33876 = (i__5770__auto___33870 + (1));
i__5770__auto___33870 = G__33876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31338){
var map__31339 = p__31338;
var map__31339__$1 = cljs.core.__destructure_map(map__31339);
var opts = map__31339__$1;
var statearr_31340_33883 = state;
(statearr_31340_33883[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31342_33885 = state;
(statearr_31342_33885[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31346_33886 = state;
(statearr_31346_33886[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31327){
var G__31328 = cljs.core.first(seq31327);
var seq31327__$1 = cljs.core.next(seq31327);
var G__31329 = cljs.core.first(seq31327__$1);
var seq31327__$2 = cljs.core.next(seq31327__$1);
var G__31330 = cljs.core.first(seq31327__$2);
var seq31327__$3 = cljs.core.next(seq31327__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31328,G__31329,G__31330,seq31327__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31362 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31363){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31363 = meta31363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31364,meta31363__$1){
var self__ = this;
var _31364__$1 = this;
return (new cljs.core.async.t_cljs$core$async31362(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31363__$1));
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31364){
var self__ = this;
var _31364__$1 = this;
return self__.meta31363;
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31362.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31363","meta31363",-1506075322,null)], null);
}));

(cljs.core.async.t_cljs$core$async31362.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31362");

(cljs.core.async.t_cljs$core$async31362.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31362");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31362.
 */
cljs.core.async.__GT_t_cljs$core$async31362 = (function cljs$core$async$__GT_t_cljs$core$async31362(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31363){
return (new cljs.core.async.t_cljs$core$async31362(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31363));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async31362(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29727__auto___33948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_31458){
var state_val_31459 = (state_31458[(1)]);
if((state_val_31459 === (7))){
var inst_31412 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31412)){
var statearr_31467_33953 = state_31458__$1;
(statearr_31467_33953[(1)] = (8));

} else {
var statearr_31468_33954 = state_31458__$1;
(statearr_31468_33954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (20))){
var inst_31404 = (state_31458[(7)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31458__$1,(23),out,inst_31404);
} else {
if((state_val_31459 === (1))){
var inst_31382 = calc_state();
var inst_31384 = cljs.core.__destructure_map(inst_31382);
var inst_31385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31384,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31384,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31389 = inst_31382;
var state_31458__$1 = (function (){var statearr_31473 = state_31458;
(statearr_31473[(8)] = inst_31385);

(statearr_31473[(9)] = inst_31386);

(statearr_31473[(10)] = inst_31387);

(statearr_31473[(11)] = inst_31389);

return statearr_31473;
})();
var statearr_31475_33960 = state_31458__$1;
(statearr_31475_33960[(2)] = null);

(statearr_31475_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (24))){
var inst_31395 = (state_31458[(12)]);
var inst_31389 = inst_31395;
var state_31458__$1 = (function (){var statearr_31480 = state_31458;
(statearr_31480[(11)] = inst_31389);

return statearr_31480;
})();
var statearr_31481_33961 = state_31458__$1;
(statearr_31481_33961[(2)] = null);

(statearr_31481_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (4))){
var inst_31404 = (state_31458[(7)]);
var inst_31407 = (state_31458[(13)]);
var inst_31403 = (state_31458[(2)]);
var inst_31404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31403,(0),null);
var inst_31406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31403,(1),null);
var inst_31407__$1 = (inst_31404__$1 == null);
var state_31458__$1 = (function (){var statearr_31485 = state_31458;
(statearr_31485[(7)] = inst_31404__$1);

(statearr_31485[(14)] = inst_31406);

(statearr_31485[(13)] = inst_31407__$1);

return statearr_31485;
})();
if(cljs.core.truth_(inst_31407__$1)){
var statearr_31487_33970 = state_31458__$1;
(statearr_31487_33970[(1)] = (5));

} else {
var statearr_31489_33971 = state_31458__$1;
(statearr_31489_33971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (15))){
var inst_31396 = (state_31458[(15)]);
var inst_31430 = (state_31458[(16)]);
var inst_31430__$1 = cljs.core.empty_QMARK_(inst_31396);
var state_31458__$1 = (function (){var statearr_31494 = state_31458;
(statearr_31494[(16)] = inst_31430__$1);

return statearr_31494;
})();
if(inst_31430__$1){
var statearr_31496_33973 = state_31458__$1;
(statearr_31496_33973[(1)] = (17));

} else {
var statearr_31497_33974 = state_31458__$1;
(statearr_31497_33974[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (21))){
var inst_31395 = (state_31458[(12)]);
var inst_31389 = inst_31395;
var state_31458__$1 = (function (){var statearr_31500 = state_31458;
(statearr_31500[(11)] = inst_31389);

return statearr_31500;
})();
var statearr_31502_33978 = state_31458__$1;
(statearr_31502_33978[(2)] = null);

(statearr_31502_33978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (13))){
var inst_31422 = (state_31458[(2)]);
var inst_31424 = calc_state();
var inst_31389 = inst_31424;
var state_31458__$1 = (function (){var statearr_31503 = state_31458;
(statearr_31503[(17)] = inst_31422);

(statearr_31503[(11)] = inst_31389);

return statearr_31503;
})();
var statearr_31506_33979 = state_31458__$1;
(statearr_31506_33979[(2)] = null);

(statearr_31506_33979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (22))){
var inst_31452 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31508_33983 = state_31458__$1;
(statearr_31508_33983[(2)] = inst_31452);

(statearr_31508_33983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (6))){
var inst_31406 = (state_31458[(14)]);
var inst_31410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31406,change);
var state_31458__$1 = state_31458;
var statearr_31510_33987 = state_31458__$1;
(statearr_31510_33987[(2)] = inst_31410);

(statearr_31510_33987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (25))){
var state_31458__$1 = state_31458;
var statearr_31512_33988 = state_31458__$1;
(statearr_31512_33988[(2)] = null);

(statearr_31512_33988[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (17))){
var inst_31397 = (state_31458[(18)]);
var inst_31406 = (state_31458[(14)]);
var inst_31433 = (inst_31397.cljs$core$IFn$_invoke$arity$1 ? inst_31397.cljs$core$IFn$_invoke$arity$1(inst_31406) : inst_31397.call(null,inst_31406));
var inst_31434 = cljs.core.not(inst_31433);
var state_31458__$1 = state_31458;
var statearr_31518_33989 = state_31458__$1;
(statearr_31518_33989[(2)] = inst_31434);

(statearr_31518_33989[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (3))){
var inst_31456 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31458__$1,inst_31456);
} else {
if((state_val_31459 === (12))){
var state_31458__$1 = state_31458;
var statearr_31523_33991 = state_31458__$1;
(statearr_31523_33991[(2)] = null);

(statearr_31523_33991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (2))){
var inst_31389 = (state_31458[(11)]);
var inst_31395 = (state_31458[(12)]);
var inst_31395__$1 = cljs.core.__destructure_map(inst_31389);
var inst_31396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31395__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31395__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31395__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31458__$1 = (function (){var statearr_31526 = state_31458;
(statearr_31526[(12)] = inst_31395__$1);

(statearr_31526[(15)] = inst_31396);

(statearr_31526[(18)] = inst_31397);

return statearr_31526;
})();
return cljs.core.async.ioc_alts_BANG_(state_31458__$1,(4),inst_31398);
} else {
if((state_val_31459 === (23))){
var inst_31442 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31442)){
var statearr_31528_33996 = state_31458__$1;
(statearr_31528_33996[(1)] = (24));

} else {
var statearr_31529_33997 = state_31458__$1;
(statearr_31529_33997[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (19))){
var inst_31437 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31531_34000 = state_31458__$1;
(statearr_31531_34000[(2)] = inst_31437);

(statearr_31531_34000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (11))){
var inst_31406 = (state_31458[(14)]);
var inst_31419 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31406);
var state_31458__$1 = state_31458;
var statearr_31535_34004 = state_31458__$1;
(statearr_31535_34004[(2)] = inst_31419);

(statearr_31535_34004[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (9))){
var inst_31396 = (state_31458[(15)]);
var inst_31406 = (state_31458[(14)]);
var inst_31427 = (state_31458[(19)]);
var inst_31427__$1 = (inst_31396.cljs$core$IFn$_invoke$arity$1 ? inst_31396.cljs$core$IFn$_invoke$arity$1(inst_31406) : inst_31396.call(null,inst_31406));
var state_31458__$1 = (function (){var statearr_31537 = state_31458;
(statearr_31537[(19)] = inst_31427__$1);

return statearr_31537;
})();
if(cljs.core.truth_(inst_31427__$1)){
var statearr_31538_34005 = state_31458__$1;
(statearr_31538_34005[(1)] = (14));

} else {
var statearr_31539_34006 = state_31458__$1;
(statearr_31539_34006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (5))){
var inst_31407 = (state_31458[(13)]);
var state_31458__$1 = state_31458;
var statearr_31540_34010 = state_31458__$1;
(statearr_31540_34010[(2)] = inst_31407);

(statearr_31540_34010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (14))){
var inst_31427 = (state_31458[(19)]);
var state_31458__$1 = state_31458;
var statearr_31547_34011 = state_31458__$1;
(statearr_31547_34011[(2)] = inst_31427);

(statearr_31547_34011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (26))){
var inst_31448 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31550_34012 = state_31458__$1;
(statearr_31550_34012[(2)] = inst_31448);

(statearr_31550_34012[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (16))){
var inst_31439 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31439)){
var statearr_31551_34017 = state_31458__$1;
(statearr_31551_34017[(1)] = (20));

} else {
var statearr_31552_34018 = state_31458__$1;
(statearr_31552_34018[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (10))){
var inst_31454 = (state_31458[(2)]);
var state_31458__$1 = state_31458;
var statearr_31557_34019 = state_31458__$1;
(statearr_31557_34019[(2)] = inst_31454);

(statearr_31557_34019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (18))){
var inst_31430 = (state_31458[(16)]);
var state_31458__$1 = state_31458;
var statearr_31561_34020 = state_31458__$1;
(statearr_31561_34020[(2)] = inst_31430);

(statearr_31561_34020[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31459 === (8))){
var inst_31404 = (state_31458[(7)]);
var inst_31415 = (inst_31404 == null);
var state_31458__$1 = state_31458;
if(cljs.core.truth_(inst_31415)){
var statearr_31566_34027 = state_31458__$1;
(statearr_31566_34027[(1)] = (11));

} else {
var statearr_31568_34028 = state_31458__$1;
(statearr_31568_34028[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29474__auto__ = null;
var cljs$core$async$mix_$_state_machine__29474__auto____0 = (function (){
var statearr_31574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31574[(0)] = cljs$core$async$mix_$_state_machine__29474__auto__);

(statearr_31574[(1)] = (1));

return statearr_31574;
});
var cljs$core$async$mix_$_state_machine__29474__auto____1 = (function (state_31458){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31458);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31578){var ex__29477__auto__ = e31578;
var statearr_31580_34035 = state_31458;
(statearr_31580_34035[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31458[(4)]))){
var statearr_31586_34036 = state_31458;
(statearr_31586_34036[(1)] = cljs.core.first((state_31458[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34037 = state_31458;
state_31458 = G__34037;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29474__auto__ = function(state_31458){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29474__auto____1.call(this,state_31458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29474__auto____0;
cljs$core$async$mix_$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29474__auto____1;
return cljs$core$async$mix_$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_31591 = f__29728__auto__();
(statearr_31591[(6)] = c__29727__auto___33948);

return statearr_31591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34050 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34050(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34055 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34055(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34059 = (function() {
var G__34060 = null;
var G__34060__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34060__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34060 = function(p,v){
switch(arguments.length){
case 1:
return G__34060__1.call(this,p);
case 2:
return G__34060__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34060.cljs$core$IFn$_invoke$arity$1 = G__34060__1;
G__34060.cljs$core$IFn$_invoke$arity$2 = G__34060__2;
return G__34060;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31677 = arguments.length;
switch (G__31677) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34059(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34059(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31704 = meta31704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31705,meta31704__$1){
var self__ = this;
var _31705__$1 = this;
return (new cljs.core.async.t_cljs$core$async31703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31704__$1));
}));

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31705){
var self__ = this;
var _31705__$1 = this;
return self__.meta31704;
}));

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31704","meta31704",-1579286712,null)], null);
}));

(cljs.core.async.t_cljs$core$async31703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31703");

(cljs.core.async.t_cljs$core$async31703.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31703.
 */
cljs.core.async.__GT_t_cljs$core$async31703 = (function cljs$core$async$__GT_t_cljs$core$async31703(ch,topic_fn,buf_fn,mults,ensure_mult,meta31704){
return (new cljs.core.async.t_cljs$core$async31703(ch,topic_fn,buf_fn,mults,ensure_mult,meta31704));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31696 = arguments.length;
switch (G__31696) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31688_SHARP_){
if(cljs.core.truth_((p1__31688_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31688_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31688_SHARP_.call(null,topic)))){
return p1__31688_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31688_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async31703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29727__auto___34091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_31809){
var state_val_31810 = (state_31809[(1)]);
if((state_val_31810 === (7))){
var inst_31803 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31816_34092 = state_31809__$1;
(statearr_31816_34092[(2)] = inst_31803);

(statearr_31816_34092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (20))){
var state_31809__$1 = state_31809;
var statearr_31818_34094 = state_31809__$1;
(statearr_31818_34094[(2)] = null);

(statearr_31818_34094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (1))){
var state_31809__$1 = state_31809;
var statearr_31819_34097 = state_31809__$1;
(statearr_31819_34097[(2)] = null);

(statearr_31819_34097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (24))){
var inst_31786 = (state_31809[(7)]);
var inst_31795 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31786);
var state_31809__$1 = state_31809;
var statearr_31828_34098 = state_31809__$1;
(statearr_31828_34098[(2)] = inst_31795);

(statearr_31828_34098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (4))){
var inst_31730 = (state_31809[(8)]);
var inst_31730__$1 = (state_31809[(2)]);
var inst_31731 = (inst_31730__$1 == null);
var state_31809__$1 = (function (){var statearr_31832 = state_31809;
(statearr_31832[(8)] = inst_31730__$1);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31731)){
var statearr_31833_34109 = state_31809__$1;
(statearr_31833_34109[(1)] = (5));

} else {
var statearr_31835_34110 = state_31809__$1;
(statearr_31835_34110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (15))){
var inst_31780 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31838_34112 = state_31809__$1;
(statearr_31838_34112[(2)] = inst_31780);

(statearr_31838_34112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (21))){
var inst_31800 = (state_31809[(2)]);
var state_31809__$1 = (function (){var statearr_31839 = state_31809;
(statearr_31839[(9)] = inst_31800);

return statearr_31839;
})();
var statearr_31841_34118 = state_31809__$1;
(statearr_31841_34118[(2)] = null);

(statearr_31841_34118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (13))){
var inst_31760 = (state_31809[(10)]);
var inst_31763 = cljs.core.chunked_seq_QMARK_(inst_31760);
var state_31809__$1 = state_31809;
if(inst_31763){
var statearr_31842_34133 = state_31809__$1;
(statearr_31842_34133[(1)] = (16));

} else {
var statearr_31843_34134 = state_31809__$1;
(statearr_31843_34134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (22))){
var inst_31792 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
if(cljs.core.truth_(inst_31792)){
var statearr_31847_34137 = state_31809__$1;
(statearr_31847_34137[(1)] = (23));

} else {
var statearr_31848_34138 = state_31809__$1;
(statearr_31848_34138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (6))){
var inst_31730 = (state_31809[(8)]);
var inst_31786 = (state_31809[(7)]);
var inst_31788 = (state_31809[(11)]);
var inst_31786__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31730) : topic_fn.call(null,inst_31730));
var inst_31787 = cljs.core.deref(mults);
var inst_31788__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31787,inst_31786__$1);
var state_31809__$1 = (function (){var statearr_31850 = state_31809;
(statearr_31850[(7)] = inst_31786__$1);

(statearr_31850[(11)] = inst_31788__$1);

return statearr_31850;
})();
if(cljs.core.truth_(inst_31788__$1)){
var statearr_31851_34146 = state_31809__$1;
(statearr_31851_34146[(1)] = (19));

} else {
var statearr_31852_34148 = state_31809__$1;
(statearr_31852_34148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (25))){
var inst_31797 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31856_34154 = state_31809__$1;
(statearr_31856_34154[(2)] = inst_31797);

(statearr_31856_34154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (17))){
var inst_31760 = (state_31809[(10)]);
var inst_31771 = cljs.core.first(inst_31760);
var inst_31772 = cljs.core.async.muxch_STAR_(inst_31771);
var inst_31773 = cljs.core.async.close_BANG_(inst_31772);
var inst_31774 = cljs.core.next(inst_31760);
var inst_31745 = inst_31774;
var inst_31746 = null;
var inst_31747 = (0);
var inst_31748 = (0);
var state_31809__$1 = (function (){var statearr_31859 = state_31809;
(statearr_31859[(12)] = inst_31773);

(statearr_31859[(13)] = inst_31745);

(statearr_31859[(14)] = inst_31746);

(statearr_31859[(15)] = inst_31747);

(statearr_31859[(16)] = inst_31748);

return statearr_31859;
})();
var statearr_31863_34158 = state_31809__$1;
(statearr_31863_34158[(2)] = null);

(statearr_31863_34158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (3))){
var inst_31805 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31809__$1,inst_31805);
} else {
if((state_val_31810 === (12))){
var inst_31782 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31866_34166 = state_31809__$1;
(statearr_31866_34166[(2)] = inst_31782);

(statearr_31866_34166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (2))){
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31809__$1,(4),ch);
} else {
if((state_val_31810 === (23))){
var state_31809__$1 = state_31809;
var statearr_31871_34175 = state_31809__$1;
(statearr_31871_34175[(2)] = null);

(statearr_31871_34175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (19))){
var inst_31788 = (state_31809[(11)]);
var inst_31730 = (state_31809[(8)]);
var inst_31790 = cljs.core.async.muxch_STAR_(inst_31788);
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31809__$1,(22),inst_31790,inst_31730);
} else {
if((state_val_31810 === (11))){
var inst_31745 = (state_31809[(13)]);
var inst_31760 = (state_31809[(10)]);
var inst_31760__$1 = cljs.core.seq(inst_31745);
var state_31809__$1 = (function (){var statearr_31877 = state_31809;
(statearr_31877[(10)] = inst_31760__$1);

return statearr_31877;
})();
if(inst_31760__$1){
var statearr_31878_34186 = state_31809__$1;
(statearr_31878_34186[(1)] = (13));

} else {
var statearr_31879_34187 = state_31809__$1;
(statearr_31879_34187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (9))){
var inst_31784 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31880_34196 = state_31809__$1;
(statearr_31880_34196[(2)] = inst_31784);

(statearr_31880_34196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (5))){
var inst_31739 = cljs.core.deref(mults);
var inst_31740 = cljs.core.vals(inst_31739);
var inst_31743 = cljs.core.seq(inst_31740);
var inst_31745 = inst_31743;
var inst_31746 = null;
var inst_31747 = (0);
var inst_31748 = (0);
var state_31809__$1 = (function (){var statearr_31882 = state_31809;
(statearr_31882[(13)] = inst_31745);

(statearr_31882[(14)] = inst_31746);

(statearr_31882[(15)] = inst_31747);

(statearr_31882[(16)] = inst_31748);

return statearr_31882;
})();
var statearr_31885_34200 = state_31809__$1;
(statearr_31885_34200[(2)] = null);

(statearr_31885_34200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (14))){
var state_31809__$1 = state_31809;
var statearr_31894_34201 = state_31809__$1;
(statearr_31894_34201[(2)] = null);

(statearr_31894_34201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (16))){
var inst_31760 = (state_31809[(10)]);
var inst_31765 = cljs.core.chunk_first(inst_31760);
var inst_31766 = cljs.core.chunk_rest(inst_31760);
var inst_31767 = cljs.core.count(inst_31765);
var inst_31745 = inst_31766;
var inst_31746 = inst_31765;
var inst_31747 = inst_31767;
var inst_31748 = (0);
var state_31809__$1 = (function (){var statearr_31901 = state_31809;
(statearr_31901[(13)] = inst_31745);

(statearr_31901[(14)] = inst_31746);

(statearr_31901[(15)] = inst_31747);

(statearr_31901[(16)] = inst_31748);

return statearr_31901;
})();
var statearr_31902_34224 = state_31809__$1;
(statearr_31902_34224[(2)] = null);

(statearr_31902_34224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (10))){
var inst_31746 = (state_31809[(14)]);
var inst_31748 = (state_31809[(16)]);
var inst_31745 = (state_31809[(13)]);
var inst_31747 = (state_31809[(15)]);
var inst_31754 = cljs.core._nth(inst_31746,inst_31748);
var inst_31755 = cljs.core.async.muxch_STAR_(inst_31754);
var inst_31756 = cljs.core.async.close_BANG_(inst_31755);
var inst_31757 = (inst_31748 + (1));
var tmp31890 = inst_31745;
var tmp31891 = inst_31746;
var tmp31892 = inst_31747;
var inst_31745__$1 = tmp31890;
var inst_31746__$1 = tmp31891;
var inst_31747__$1 = tmp31892;
var inst_31748__$1 = inst_31757;
var state_31809__$1 = (function (){var statearr_31907 = state_31809;
(statearr_31907[(17)] = inst_31756);

(statearr_31907[(13)] = inst_31745__$1);

(statearr_31907[(14)] = inst_31746__$1);

(statearr_31907[(15)] = inst_31747__$1);

(statearr_31907[(16)] = inst_31748__$1);

return statearr_31907;
})();
var statearr_31908_34235 = state_31809__$1;
(statearr_31908_34235[(2)] = null);

(statearr_31908_34235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (18))){
var inst_31777 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31909_34240 = state_31809__$1;
(statearr_31909_34240[(2)] = inst_31777);

(statearr_31909_34240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (8))){
var inst_31748 = (state_31809[(16)]);
var inst_31747 = (state_31809[(15)]);
var inst_31750 = (inst_31748 < inst_31747);
var inst_31751 = inst_31750;
var state_31809__$1 = state_31809;
if(cljs.core.truth_(inst_31751)){
var statearr_31915_34252 = state_31809__$1;
(statearr_31915_34252[(1)] = (10));

} else {
var statearr_31916_34254 = state_31809__$1;
(statearr_31916_34254[(1)] = (11));

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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_31921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31921[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_31921[(1)] = (1));

return statearr_31921;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_31809){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_31809);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e31923){var ex__29477__auto__ = e31923;
var statearr_31924_34255 = state_31809;
(statearr_31924_34255[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_31809[(4)]))){
var statearr_31925_34260 = state_31809;
(statearr_31925_34260[(1)] = cljs.core.first((state_31809[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34261 = state_31809;
state_31809 = G__34261;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_31809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_31809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_31927 = f__29728__auto__();
(statearr_31927[(6)] = c__29727__auto___34091);

return statearr_31927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31931 = arguments.length;
switch (G__31931) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31947 = arguments.length;
switch (G__31947) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31961 = arguments.length;
switch (G__31961) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29727__auto___34301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32041){
var state_val_32042 = (state_32041[(1)]);
if((state_val_32042 === (7))){
var state_32041__$1 = state_32041;
var statearr_32044_34307 = state_32041__$1;
(statearr_32044_34307[(2)] = null);

(statearr_32044_34307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (1))){
var state_32041__$1 = state_32041;
var statearr_32045_34310 = state_32041__$1;
(statearr_32045_34310[(2)] = null);

(statearr_32045_34310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (4))){
var inst_31972 = (state_32041[(7)]);
var inst_31971 = (state_32041[(8)]);
var inst_31974 = (inst_31972 < inst_31971);
var state_32041__$1 = state_32041;
if(cljs.core.truth_(inst_31974)){
var statearr_32047_34312 = state_32041__$1;
(statearr_32047_34312[(1)] = (6));

} else {
var statearr_32052_34319 = state_32041__$1;
(statearr_32052_34319[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (15))){
var inst_32021 = (state_32041[(9)]);
var inst_32031 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32021);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32041__$1,(17),out,inst_32031);
} else {
if((state_val_32042 === (13))){
var inst_32021 = (state_32041[(9)]);
var inst_32021__$1 = (state_32041[(2)]);
var inst_32026 = cljs.core.some(cljs.core.nil_QMARK_,inst_32021__$1);
var state_32041__$1 = (function (){var statearr_32058 = state_32041;
(statearr_32058[(9)] = inst_32021__$1);

return statearr_32058;
})();
if(cljs.core.truth_(inst_32026)){
var statearr_32060_34327 = state_32041__$1;
(statearr_32060_34327[(1)] = (14));

} else {
var statearr_32063_34328 = state_32041__$1;
(statearr_32063_34328[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (6))){
var state_32041__$1 = state_32041;
var statearr_32069_34329 = state_32041__$1;
(statearr_32069_34329[(2)] = null);

(statearr_32069_34329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (17))){
var inst_32033 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32096 = state_32041;
(statearr_32096[(10)] = inst_32033);

return statearr_32096;
})();
var statearr_32100_34331 = state_32041__$1;
(statearr_32100_34331[(2)] = null);

(statearr_32100_34331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (3))){
var inst_32038 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32041__$1,inst_32038);
} else {
if((state_val_32042 === (12))){
var _ = (function (){var statearr_32103 = state_32041;
(statearr_32103[(4)] = cljs.core.rest((state_32041[(4)])));

return statearr_32103;
})();
var state_32041__$1 = state_32041;
var ex32093 = (state_32041__$1[(2)]);
var statearr_32104_34332 = state_32041__$1;
(statearr_32104_34332[(5)] = ex32093);


if((ex32093 instanceof Object)){
var statearr_32105_34333 = state_32041__$1;
(statearr_32105_34333[(1)] = (11));

(statearr_32105_34333[(5)] = null);

} else {
throw ex32093;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (2))){
var inst_31970 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31971 = cnt;
var inst_31972 = (0);
var state_32041__$1 = (function (){var statearr_32107 = state_32041;
(statearr_32107[(11)] = inst_31970);

(statearr_32107[(8)] = inst_31971);

(statearr_32107[(7)] = inst_31972);

return statearr_32107;
})();
var statearr_32111_34334 = state_32041__$1;
(statearr_32111_34334[(2)] = null);

(statearr_32111_34334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (11))){
var inst_31991 = (state_32041[(2)]);
var inst_31995 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32041__$1 = (function (){var statearr_32112 = state_32041;
(statearr_32112[(12)] = inst_31991);

return statearr_32112;
})();
var statearr_32113_34336 = state_32041__$1;
(statearr_32113_34336[(2)] = inst_31995);

(statearr_32113_34336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (9))){
var inst_31972 = (state_32041[(7)]);
var _ = (function (){var statearr_32114 = state_32041;
(statearr_32114[(4)] = cljs.core.cons((12),(state_32041[(4)])));

return statearr_32114;
})();
var inst_32005 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31972) : chs__$1.call(null,inst_31972));
var inst_32006 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31972) : done.call(null,inst_31972));
var inst_32007 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32005,inst_32006);
var ___$1 = (function (){var statearr_32115 = state_32041;
(statearr_32115[(4)] = cljs.core.rest((state_32041[(4)])));

return statearr_32115;
})();
var state_32041__$1 = state_32041;
var statearr_32116_34338 = state_32041__$1;
(statearr_32116_34338[(2)] = inst_32007);

(statearr_32116_34338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (5))){
var inst_32019 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32117 = state_32041;
(statearr_32117[(13)] = inst_32019);

return statearr_32117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32041__$1,(13),dchan);
} else {
if((state_val_32042 === (14))){
var inst_32029 = cljs.core.async.close_BANG_(out);
var state_32041__$1 = state_32041;
var statearr_32121_34339 = state_32041__$1;
(statearr_32121_34339[(2)] = inst_32029);

(statearr_32121_34339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (16))){
var inst_32036 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32122_34342 = state_32041__$1;
(statearr_32122_34342[(2)] = inst_32036);

(statearr_32122_34342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (10))){
var inst_31972 = (state_32041[(7)]);
var inst_32010 = (state_32041[(2)]);
var inst_32011 = (inst_31972 + (1));
var inst_31972__$1 = inst_32011;
var state_32041__$1 = (function (){var statearr_32123 = state_32041;
(statearr_32123[(14)] = inst_32010);

(statearr_32123[(7)] = inst_31972__$1);

return statearr_32123;
})();
var statearr_32124_34349 = state_32041__$1;
(statearr_32124_34349[(2)] = null);

(statearr_32124_34349[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_32017 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32125_34350 = state_32041__$1;
(statearr_32125_34350[(2)] = inst_32017);

(statearr_32125_34350[(1)] = (5));


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
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32126[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32126[(1)] = (1));

return statearr_32126;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32041){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32041);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32127){var ex__29477__auto__ = e32127;
var statearr_32128_34371 = state_32041;
(statearr_32128_34371[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32041[(4)]))){
var statearr_32129_34379 = state_32041;
(statearr_32129_34379[(1)] = cljs.core.first((state_32041[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34382 = state_32041;
state_32041 = G__34382;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32130 = f__29728__auto__();
(statearr_32130[(6)] = c__29727__auto___34301);

return statearr_32130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32136 = arguments.length;
switch (G__32136) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29727__auto___34388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32171){
var state_val_32172 = (state_32171[(1)]);
if((state_val_32172 === (7))){
var inst_32150 = (state_32171[(7)]);
var inst_32151 = (state_32171[(8)]);
var inst_32150__$1 = (state_32171[(2)]);
var inst_32151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32150__$1,(0),null);
var inst_32152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32150__$1,(1),null);
var inst_32153 = (inst_32151__$1 == null);
var state_32171__$1 = (function (){var statearr_32173 = state_32171;
(statearr_32173[(7)] = inst_32150__$1);

(statearr_32173[(8)] = inst_32151__$1);

(statearr_32173[(9)] = inst_32152);

return statearr_32173;
})();
if(cljs.core.truth_(inst_32153)){
var statearr_32176_34394 = state_32171__$1;
(statearr_32176_34394[(1)] = (8));

} else {
var statearr_32177_34395 = state_32171__$1;
(statearr_32177_34395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (1))){
var inst_32139 = cljs.core.vec(chs);
var inst_32140 = inst_32139;
var state_32171__$1 = (function (){var statearr_32178 = state_32171;
(statearr_32178[(10)] = inst_32140);

return statearr_32178;
})();
var statearr_32179_34404 = state_32171__$1;
(statearr_32179_34404[(2)] = null);

(statearr_32179_34404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (4))){
var inst_32140 = (state_32171[(10)]);
var state_32171__$1 = state_32171;
return cljs.core.async.ioc_alts_BANG_(state_32171__$1,(7),inst_32140);
} else {
if((state_val_32172 === (6))){
var inst_32167 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32181_34410 = state_32171__$1;
(statearr_32181_34410[(2)] = inst_32167);

(statearr_32181_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (3))){
var inst_32169 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32171__$1,inst_32169);
} else {
if((state_val_32172 === (2))){
var inst_32140 = (state_32171[(10)]);
var inst_32142 = cljs.core.count(inst_32140);
var inst_32144 = (inst_32142 > (0));
var state_32171__$1 = state_32171;
if(cljs.core.truth_(inst_32144)){
var statearr_32190_34414 = state_32171__$1;
(statearr_32190_34414[(1)] = (4));

} else {
var statearr_32191_34415 = state_32171__$1;
(statearr_32191_34415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (11))){
var inst_32140 = (state_32171[(10)]);
var inst_32160 = (state_32171[(2)]);
var tmp32183 = inst_32140;
var inst_32140__$1 = tmp32183;
var state_32171__$1 = (function (){var statearr_32204 = state_32171;
(statearr_32204[(11)] = inst_32160);

(statearr_32204[(10)] = inst_32140__$1);

return statearr_32204;
})();
var statearr_32217_34417 = state_32171__$1;
(statearr_32217_34417[(2)] = null);

(statearr_32217_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (9))){
var inst_32151 = (state_32171[(8)]);
var state_32171__$1 = state_32171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32171__$1,(11),out,inst_32151);
} else {
if((state_val_32172 === (5))){
var inst_32165 = cljs.core.async.close_BANG_(out);
var state_32171__$1 = state_32171;
var statearr_32228_34422 = state_32171__$1;
(statearr_32228_34422[(2)] = inst_32165);

(statearr_32228_34422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (10))){
var inst_32163 = (state_32171[(2)]);
var state_32171__$1 = state_32171;
var statearr_32229_34423 = state_32171__$1;
(statearr_32229_34423[(2)] = inst_32163);

(statearr_32229_34423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32172 === (8))){
var inst_32140 = (state_32171[(10)]);
var inst_32150 = (state_32171[(7)]);
var inst_32151 = (state_32171[(8)]);
var inst_32152 = (state_32171[(9)]);
var inst_32155 = (function (){var cs = inst_32140;
var vec__32146 = inst_32150;
var v = inst_32151;
var c = inst_32152;
return (function (p1__32134_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32134_SHARP_);
});
})();
var inst_32156 = cljs.core.filterv(inst_32155,inst_32140);
var inst_32140__$1 = inst_32156;
var state_32171__$1 = (function (){var statearr_32233 = state_32171;
(statearr_32233[(10)] = inst_32140__$1);

return statearr_32233;
})();
var statearr_32234_34439 = state_32171__$1;
(statearr_32234_34439[(2)] = null);

(statearr_32234_34439[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32235 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32235[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32235[(1)] = (1));

return statearr_32235;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32171){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32171);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32239){var ex__29477__auto__ = e32239;
var statearr_32240_34450 = state_32171;
(statearr_32240_34450[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32171[(4)]))){
var statearr_32241_34453 = state_32171;
(statearr_32241_34453[(1)] = cljs.core.first((state_32171[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34455 = state_32171;
state_32171 = G__34455;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32245 = f__29728__auto__();
(statearr_32245[(6)] = c__29727__auto___34388);

return statearr_32245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32255 = arguments.length;
switch (G__32255) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29727__auto___34467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32288){
var state_val_32289 = (state_32288[(1)]);
if((state_val_32289 === (7))){
var inst_32270 = (state_32288[(7)]);
var inst_32270__$1 = (state_32288[(2)]);
var inst_32271 = (inst_32270__$1 == null);
var inst_32272 = cljs.core.not(inst_32271);
var state_32288__$1 = (function (){var statearr_32293 = state_32288;
(statearr_32293[(7)] = inst_32270__$1);

return statearr_32293;
})();
if(inst_32272){
var statearr_32294_34485 = state_32288__$1;
(statearr_32294_34485[(1)] = (8));

} else {
var statearr_32302_34487 = state_32288__$1;
(statearr_32302_34487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (1))){
var inst_32265 = (0);
var state_32288__$1 = (function (){var statearr_32309 = state_32288;
(statearr_32309[(8)] = inst_32265);

return statearr_32309;
})();
var statearr_32310_34489 = state_32288__$1;
(statearr_32310_34489[(2)] = null);

(statearr_32310_34489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (4))){
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32288__$1,(7),ch);
} else {
if((state_val_32289 === (6))){
var inst_32283 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32321_34491 = state_32288__$1;
(statearr_32321_34491[(2)] = inst_32283);

(statearr_32321_34491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (3))){
var inst_32285 = (state_32288[(2)]);
var inst_32286 = cljs.core.async.close_BANG_(out);
var state_32288__$1 = (function (){var statearr_32326 = state_32288;
(statearr_32326[(9)] = inst_32285);

return statearr_32326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32288__$1,inst_32286);
} else {
if((state_val_32289 === (2))){
var inst_32265 = (state_32288[(8)]);
var inst_32267 = (inst_32265 < n);
var state_32288__$1 = state_32288;
if(cljs.core.truth_(inst_32267)){
var statearr_32331_34506 = state_32288__$1;
(statearr_32331_34506[(1)] = (4));

} else {
var statearr_32332_34511 = state_32288__$1;
(statearr_32332_34511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (11))){
var inst_32265 = (state_32288[(8)]);
var inst_32275 = (state_32288[(2)]);
var inst_32276 = (inst_32265 + (1));
var inst_32265__$1 = inst_32276;
var state_32288__$1 = (function (){var statearr_32339 = state_32288;
(statearr_32339[(10)] = inst_32275);

(statearr_32339[(8)] = inst_32265__$1);

return statearr_32339;
})();
var statearr_32343_34524 = state_32288__$1;
(statearr_32343_34524[(2)] = null);

(statearr_32343_34524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (9))){
var state_32288__$1 = state_32288;
var statearr_32351_34527 = state_32288__$1;
(statearr_32351_34527[(2)] = null);

(statearr_32351_34527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (5))){
var state_32288__$1 = state_32288;
var statearr_32352_34539 = state_32288__$1;
(statearr_32352_34539[(2)] = null);

(statearr_32352_34539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (10))){
var inst_32280 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32355_34553 = state_32288__$1;
(statearr_32355_34553[(2)] = inst_32280);

(statearr_32355_34553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (8))){
var inst_32270 = (state_32288[(7)]);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(11),out,inst_32270);
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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32362[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32362[(1)] = (1));

return statearr_32362;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32288){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32288);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32365){var ex__29477__auto__ = e32365;
var statearr_32366_34582 = state_32288;
(statearr_32366_34582[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32288[(4)]))){
var statearr_32367_34583 = state_32288;
(statearr_32367_34583[(1)] = cljs.core.first((state_32288[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_32288;
state_32288 = G__34592;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32369 = f__29728__auto__();
(statearr_32369[(6)] = c__29727__auto___34467);

return statearr_32369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32382 = (function (f,ch,meta32379,_,fn1,meta32383){
this.f = f;
this.ch = ch;
this.meta32379 = meta32379;
this._ = _;
this.fn1 = fn1;
this.meta32383 = meta32383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32384,meta32383__$1){
var self__ = this;
var _32384__$1 = this;
return (new cljs.core.async.t_cljs$core$async32382(self__.f,self__.ch,self__.meta32379,self__._,self__.fn1,meta32383__$1));
}));

(cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32384){
var self__ = this;
var _32384__$1 = this;
return self__.meta32383;
}));

(cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32377_SHARP_){
var G__32388 = (((p1__32377_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32377_SHARP_) : self__.f.call(null,p1__32377_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32388) : f1.call(null,G__32388));
});
}));

(cljs.core.async.t_cljs$core$async32382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32379","meta32379",-1327121573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32378","cljs.core.async/t_cljs$core$async32378",2132457371,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32383","meta32383",169438892,null)], null);
}));

(cljs.core.async.t_cljs$core$async32382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32382");

(cljs.core.async.t_cljs$core$async32382.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32382.
 */
cljs.core.async.__GT_t_cljs$core$async32382 = (function cljs$core$async$__GT_t_cljs$core$async32382(f,ch,meta32379,_,fn1,meta32383){
return (new cljs.core.async.t_cljs$core$async32382(f,ch,meta32379,_,fn1,meta32383));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32378 = (function (f,ch,meta32379){
this.f = f;
this.ch = ch;
this.meta32379 = meta32379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32380,meta32379__$1){
var self__ = this;
var _32380__$1 = this;
return (new cljs.core.async.t_cljs$core$async32378(self__.f,self__.ch,meta32379__$1));
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32380){
var self__ = this;
var _32380__$1 = this;
return self__.meta32379;
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32382(self__.f,self__.ch,self__.meta32379,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32396 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32396) : self__.f.call(null,G__32396));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32379","meta32379",-1327121573,null)], null);
}));

(cljs.core.async.t_cljs$core$async32378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32378");

(cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32378.
 */
cljs.core.async.__GT_t_cljs$core$async32378 = (function cljs$core$async$__GT_t_cljs$core$async32378(f,ch,meta32379){
return (new cljs.core.async.t_cljs$core$async32378(f,ch,meta32379));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32400 = (function (f,ch,meta32401){
this.f = f;
this.ch = ch;
this.meta32401 = meta32401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32403,meta32401__$1){
var self__ = this;
var _32403__$1 = this;
return (new cljs.core.async.t_cljs$core$async32400(self__.f,self__.ch,meta32401__$1));
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32403){
var self__ = this;
var _32403__$1 = this;
return self__.meta32401;
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32401","meta32401",-502806695,null)], null);
}));

(cljs.core.async.t_cljs$core$async32400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32400");

(cljs.core.async.t_cljs$core$async32400.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32400.
 */
cljs.core.async.__GT_t_cljs$core$async32400 = (function cljs$core$async$__GT_t_cljs$core$async32400(f,ch,meta32401){
return (new cljs.core.async.t_cljs$core$async32400(f,ch,meta32401));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32400(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32416 = (function (p,ch,meta32417){
this.p = p;
this.ch = ch;
this.meta32417 = meta32417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32418,meta32417__$1){
var self__ = this;
var _32418__$1 = this;
return (new cljs.core.async.t_cljs$core$async32416(self__.p,self__.ch,meta32417__$1));
}));

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32418){
var self__ = this;
var _32418__$1 = this;
return self__.meta32417;
}));

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32417","meta32417",-2119406323,null)], null);
}));

(cljs.core.async.t_cljs$core$async32416.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32416");

(cljs.core.async.t_cljs$core$async32416.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32416");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32416.
 */
cljs.core.async.__GT_t_cljs$core$async32416 = (function cljs$core$async$__GT_t_cljs$core$async32416(p,ch,meta32417){
return (new cljs.core.async.t_cljs$core$async32416(p,ch,meta32417));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32416(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32432 = arguments.length;
switch (G__32432) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29727__auto___34676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32454){
var state_val_32455 = (state_32454[(1)]);
if((state_val_32455 === (7))){
var inst_32450 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32459_34682 = state_32454__$1;
(statearr_32459_34682[(2)] = inst_32450);

(statearr_32459_34682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (1))){
var state_32454__$1 = state_32454;
var statearr_32460_34687 = state_32454__$1;
(statearr_32460_34687[(2)] = null);

(statearr_32460_34687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (4))){
var inst_32435 = (state_32454[(7)]);
var inst_32435__$1 = (state_32454[(2)]);
var inst_32437 = (inst_32435__$1 == null);
var state_32454__$1 = (function (){var statearr_32461 = state_32454;
(statearr_32461[(7)] = inst_32435__$1);

return statearr_32461;
})();
if(cljs.core.truth_(inst_32437)){
var statearr_32462_34695 = state_32454__$1;
(statearr_32462_34695[(1)] = (5));

} else {
var statearr_32463_34700 = state_32454__$1;
(statearr_32463_34700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (6))){
var inst_32435 = (state_32454[(7)]);
var inst_32441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32435) : p.call(null,inst_32435));
var state_32454__$1 = state_32454;
if(cljs.core.truth_(inst_32441)){
var statearr_32465_34702 = state_32454__$1;
(statearr_32465_34702[(1)] = (8));

} else {
var statearr_32466_34703 = state_32454__$1;
(statearr_32466_34703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (3))){
var inst_32452 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32454__$1,inst_32452);
} else {
if((state_val_32455 === (2))){
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32454__$1,(4),ch);
} else {
if((state_val_32455 === (11))){
var inst_32444 = (state_32454[(2)]);
var state_32454__$1 = state_32454;
var statearr_32468_34707 = state_32454__$1;
(statearr_32468_34707[(2)] = inst_32444);

(statearr_32468_34707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (9))){
var state_32454__$1 = state_32454;
var statearr_32470_34709 = state_32454__$1;
(statearr_32470_34709[(2)] = null);

(statearr_32470_34709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (5))){
var inst_32439 = cljs.core.async.close_BANG_(out);
var state_32454__$1 = state_32454;
var statearr_32471_34714 = state_32454__$1;
(statearr_32471_34714[(2)] = inst_32439);

(statearr_32471_34714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (10))){
var inst_32447 = (state_32454[(2)]);
var state_32454__$1 = (function (){var statearr_32472 = state_32454;
(statearr_32472[(8)] = inst_32447);

return statearr_32472;
})();
var statearr_32474_34716 = state_32454__$1;
(statearr_32474_34716[(2)] = null);

(statearr_32474_34716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32455 === (8))){
var inst_32435 = (state_32454[(7)]);
var state_32454__$1 = state_32454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32454__$1,(11),out,inst_32435);
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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32482 = [null,null,null,null,null,null,null,null,null];
(statearr_32482[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32482[(1)] = (1));

return statearr_32482;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32454){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32454);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32486){var ex__29477__auto__ = e32486;
var statearr_32487_34717 = state_32454;
(statearr_32487_34717[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32454[(4)]))){
var statearr_32488_34718 = state_32454;
(statearr_32488_34718[(1)] = cljs.core.first((state_32454[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34719 = state_32454;
state_32454 = G__34719;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32490 = f__29728__auto__();
(statearr_32490[(6)] = c__29727__auto___34676);

return statearr_32490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32495 = arguments.length;
switch (G__32495) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29727__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32566){
var state_val_32567 = (state_32566[(1)]);
if((state_val_32567 === (7))){
var inst_32562 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32571_34722 = state_32566__$1;
(statearr_32571_34722[(2)] = inst_32562);

(statearr_32571_34722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (20))){
var inst_32532 = (state_32566[(7)]);
var inst_32543 = (state_32566[(2)]);
var inst_32544 = cljs.core.next(inst_32532);
var inst_32515 = inst_32544;
var inst_32516 = null;
var inst_32517 = (0);
var inst_32518 = (0);
var state_32566__$1 = (function (){var statearr_32572 = state_32566;
(statearr_32572[(8)] = inst_32543);

(statearr_32572[(9)] = inst_32515);

(statearr_32572[(10)] = inst_32516);

(statearr_32572[(11)] = inst_32517);

(statearr_32572[(12)] = inst_32518);

return statearr_32572;
})();
var statearr_32573_34727 = state_32566__$1;
(statearr_32573_34727[(2)] = null);

(statearr_32573_34727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (1))){
var state_32566__$1 = state_32566;
var statearr_32575_34728 = state_32566__$1;
(statearr_32575_34728[(2)] = null);

(statearr_32575_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (4))){
var inst_32504 = (state_32566[(13)]);
var inst_32504__$1 = (state_32566[(2)]);
var inst_32505 = (inst_32504__$1 == null);
var state_32566__$1 = (function (){var statearr_32576 = state_32566;
(statearr_32576[(13)] = inst_32504__$1);

return statearr_32576;
})();
if(cljs.core.truth_(inst_32505)){
var statearr_32577_34744 = state_32566__$1;
(statearr_32577_34744[(1)] = (5));

} else {
var statearr_32578_34745 = state_32566__$1;
(statearr_32578_34745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (15))){
var state_32566__$1 = state_32566;
var statearr_32582_34748 = state_32566__$1;
(statearr_32582_34748[(2)] = null);

(statearr_32582_34748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (21))){
var state_32566__$1 = state_32566;
var statearr_32583_34753 = state_32566__$1;
(statearr_32583_34753[(2)] = null);

(statearr_32583_34753[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (13))){
var inst_32518 = (state_32566[(12)]);
var inst_32515 = (state_32566[(9)]);
var inst_32516 = (state_32566[(10)]);
var inst_32517 = (state_32566[(11)]);
var inst_32528 = (state_32566[(2)]);
var inst_32529 = (inst_32518 + (1));
var tmp32579 = inst_32517;
var tmp32580 = inst_32515;
var tmp32581 = inst_32516;
var inst_32515__$1 = tmp32580;
var inst_32516__$1 = tmp32581;
var inst_32517__$1 = tmp32579;
var inst_32518__$1 = inst_32529;
var state_32566__$1 = (function (){var statearr_32584 = state_32566;
(statearr_32584[(14)] = inst_32528);

(statearr_32584[(9)] = inst_32515__$1);

(statearr_32584[(10)] = inst_32516__$1);

(statearr_32584[(11)] = inst_32517__$1);

(statearr_32584[(12)] = inst_32518__$1);

return statearr_32584;
})();
var statearr_32585_34754 = state_32566__$1;
(statearr_32585_34754[(2)] = null);

(statearr_32585_34754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (22))){
var state_32566__$1 = state_32566;
var statearr_32586_34755 = state_32566__$1;
(statearr_32586_34755[(2)] = null);

(statearr_32586_34755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (6))){
var inst_32504 = (state_32566[(13)]);
var inst_32513 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32504) : f.call(null,inst_32504));
var inst_32514 = cljs.core.seq(inst_32513);
var inst_32515 = inst_32514;
var inst_32516 = null;
var inst_32517 = (0);
var inst_32518 = (0);
var state_32566__$1 = (function (){var statearr_32587 = state_32566;
(statearr_32587[(9)] = inst_32515);

(statearr_32587[(10)] = inst_32516);

(statearr_32587[(11)] = inst_32517);

(statearr_32587[(12)] = inst_32518);

return statearr_32587;
})();
var statearr_32588_34758 = state_32566__$1;
(statearr_32588_34758[(2)] = null);

(statearr_32588_34758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (17))){
var inst_32532 = (state_32566[(7)]);
var inst_32536 = cljs.core.chunk_first(inst_32532);
var inst_32537 = cljs.core.chunk_rest(inst_32532);
var inst_32538 = cljs.core.count(inst_32536);
var inst_32515 = inst_32537;
var inst_32516 = inst_32536;
var inst_32517 = inst_32538;
var inst_32518 = (0);
var state_32566__$1 = (function (){var statearr_32589 = state_32566;
(statearr_32589[(9)] = inst_32515);

(statearr_32589[(10)] = inst_32516);

(statearr_32589[(11)] = inst_32517);

(statearr_32589[(12)] = inst_32518);

return statearr_32589;
})();
var statearr_32590_34771 = state_32566__$1;
(statearr_32590_34771[(2)] = null);

(statearr_32590_34771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (3))){
var inst_32564 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32566__$1,inst_32564);
} else {
if((state_val_32567 === (12))){
var inst_32552 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32596_34772 = state_32566__$1;
(statearr_32596_34772[(2)] = inst_32552);

(statearr_32596_34772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (2))){
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32566__$1,(4),in$);
} else {
if((state_val_32567 === (23))){
var inst_32560 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32606_34774 = state_32566__$1;
(statearr_32606_34774[(2)] = inst_32560);

(statearr_32606_34774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (19))){
var inst_32547 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32610_34777 = state_32566__$1;
(statearr_32610_34777[(2)] = inst_32547);

(statearr_32610_34777[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (11))){
var inst_32515 = (state_32566[(9)]);
var inst_32532 = (state_32566[(7)]);
var inst_32532__$1 = cljs.core.seq(inst_32515);
var state_32566__$1 = (function (){var statearr_32613 = state_32566;
(statearr_32613[(7)] = inst_32532__$1);

return statearr_32613;
})();
if(inst_32532__$1){
var statearr_32614_34787 = state_32566__$1;
(statearr_32614_34787[(1)] = (14));

} else {
var statearr_32615_34788 = state_32566__$1;
(statearr_32615_34788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (9))){
var inst_32554 = (state_32566[(2)]);
var inst_32555 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32566__$1 = (function (){var statearr_32616 = state_32566;
(statearr_32616[(15)] = inst_32554);

return statearr_32616;
})();
if(cljs.core.truth_(inst_32555)){
var statearr_32617_34790 = state_32566__$1;
(statearr_32617_34790[(1)] = (21));

} else {
var statearr_32618_34793 = state_32566__$1;
(statearr_32618_34793[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (5))){
var inst_32507 = cljs.core.async.close_BANG_(out);
var state_32566__$1 = state_32566;
var statearr_32619_34794 = state_32566__$1;
(statearr_32619_34794[(2)] = inst_32507);

(statearr_32619_34794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (14))){
var inst_32532 = (state_32566[(7)]);
var inst_32534 = cljs.core.chunked_seq_QMARK_(inst_32532);
var state_32566__$1 = state_32566;
if(inst_32534){
var statearr_32622_34795 = state_32566__$1;
(statearr_32622_34795[(1)] = (17));

} else {
var statearr_32624_34797 = state_32566__$1;
(statearr_32624_34797[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (16))){
var inst_32550 = (state_32566[(2)]);
var state_32566__$1 = state_32566;
var statearr_32625_34798 = state_32566__$1;
(statearr_32625_34798[(2)] = inst_32550);

(statearr_32625_34798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32567 === (10))){
var inst_32516 = (state_32566[(10)]);
var inst_32518 = (state_32566[(12)]);
var inst_32523 = cljs.core._nth(inst_32516,inst_32518);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32566__$1,(13),out,inst_32523);
} else {
if((state_val_32567 === (18))){
var inst_32532 = (state_32566[(7)]);
var inst_32541 = cljs.core.first(inst_32532);
var state_32566__$1 = state_32566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32566__$1,(20),out,inst_32541);
} else {
if((state_val_32567 === (8))){
var inst_32518 = (state_32566[(12)]);
var inst_32517 = (state_32566[(11)]);
var inst_32520 = (inst_32518 < inst_32517);
var inst_32521 = inst_32520;
var state_32566__$1 = state_32566;
if(cljs.core.truth_(inst_32521)){
var statearr_32629_34804 = state_32566__$1;
(statearr_32629_34804[(1)] = (10));

} else {
var statearr_32630_34805 = state_32566__$1;
(statearr_32630_34805[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____0 = (function (){
var statearr_32631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32631[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__);

(statearr_32631[(1)] = (1));

return statearr_32631;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____1 = (function (state_32566){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32566);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32633){var ex__29477__auto__ = e32633;
var statearr_32634_34817 = state_32566;
(statearr_32634_34817[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32566[(4)]))){
var statearr_32636_34819 = state_32566;
(statearr_32636_34819[(1)] = cljs.core.first((state_32566[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34824 = state_32566;
state_32566 = G__34824;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__ = function(state_32566){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____1.call(this,state_32566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32644 = f__29728__auto__();
(statearr_32644[(6)] = c__29727__auto__);

return statearr_32644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));

return c__29727__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32657 = arguments.length;
switch (G__32657) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32659 = arguments.length;
switch (G__32659) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32662 = arguments.length;
switch (G__32662) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29727__auto___34860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32689){
var state_val_32690 = (state_32689[(1)]);
if((state_val_32690 === (7))){
var inst_32683 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
var statearr_32691_34867 = state_32689__$1;
(statearr_32691_34867[(2)] = inst_32683);

(statearr_32691_34867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (1))){
var inst_32663 = null;
var state_32689__$1 = (function (){var statearr_32695 = state_32689;
(statearr_32695[(7)] = inst_32663);

return statearr_32695;
})();
var statearr_32696_34874 = state_32689__$1;
(statearr_32696_34874[(2)] = null);

(statearr_32696_34874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (4))){
var inst_32666 = (state_32689[(8)]);
var inst_32666__$1 = (state_32689[(2)]);
var inst_32668 = (inst_32666__$1 == null);
var inst_32669 = cljs.core.not(inst_32668);
var state_32689__$1 = (function (){var statearr_32697 = state_32689;
(statearr_32697[(8)] = inst_32666__$1);

return statearr_32697;
})();
if(inst_32669){
var statearr_32699_34884 = state_32689__$1;
(statearr_32699_34884[(1)] = (5));

} else {
var statearr_32700_34886 = state_32689__$1;
(statearr_32700_34886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (6))){
var state_32689__$1 = state_32689;
var statearr_32702_34887 = state_32689__$1;
(statearr_32702_34887[(2)] = null);

(statearr_32702_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (3))){
var inst_32685 = (state_32689[(2)]);
var inst_32686 = cljs.core.async.close_BANG_(out);
var state_32689__$1 = (function (){var statearr_32703 = state_32689;
(statearr_32703[(9)] = inst_32685);

return statearr_32703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32689__$1,inst_32686);
} else {
if((state_val_32690 === (2))){
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32689__$1,(4),ch);
} else {
if((state_val_32690 === (11))){
var inst_32666 = (state_32689[(8)]);
var inst_32677 = (state_32689[(2)]);
var inst_32663 = inst_32666;
var state_32689__$1 = (function (){var statearr_32704 = state_32689;
(statearr_32704[(10)] = inst_32677);

(statearr_32704[(7)] = inst_32663);

return statearr_32704;
})();
var statearr_32705_34905 = state_32689__$1;
(statearr_32705_34905[(2)] = null);

(statearr_32705_34905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (9))){
var inst_32666 = (state_32689[(8)]);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32689__$1,(11),out,inst_32666);
} else {
if((state_val_32690 === (5))){
var inst_32666 = (state_32689[(8)]);
var inst_32663 = (state_32689[(7)]);
var inst_32671 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32666,inst_32663);
var state_32689__$1 = state_32689;
if(inst_32671){
var statearr_32707_34910 = state_32689__$1;
(statearr_32707_34910[(1)] = (8));

} else {
var statearr_32708_34911 = state_32689__$1;
(statearr_32708_34911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (10))){
var inst_32680 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
var statearr_32709_34913 = state_32689__$1;
(statearr_32709_34913[(2)] = inst_32680);

(statearr_32709_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (8))){
var inst_32663 = (state_32689[(7)]);
var tmp32706 = inst_32663;
var inst_32663__$1 = tmp32706;
var state_32689__$1 = (function (){var statearr_32710 = state_32689;
(statearr_32710[(7)] = inst_32663__$1);

return statearr_32710;
})();
var statearr_32711_34915 = state_32689__$1;
(statearr_32711_34915[(2)] = null);

(statearr_32711_34915[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32712[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32712[(1)] = (1));

return statearr_32712;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32689){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32689);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32713){var ex__29477__auto__ = e32713;
var statearr_32714_34920 = state_32689;
(statearr_32714_34920[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32689[(4)]))){
var statearr_32715_34921 = state_32689;
(statearr_32715_34921[(1)] = cljs.core.first((state_32689[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34925 = state_32689;
state_32689 = G__34925;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32716 = f__29728__auto__();
(statearr_32716[(6)] = c__29727__auto___34860);

return statearr_32716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32718 = arguments.length;
switch (G__32718) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29727__auto___34939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32770){
var state_val_32771 = (state_32770[(1)]);
if((state_val_32771 === (7))){
var inst_32764 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32772_34943 = state_32770__$1;
(statearr_32772_34943[(2)] = inst_32764);

(statearr_32772_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (1))){
var inst_32727 = (new Array(n));
var inst_32728 = inst_32727;
var inst_32729 = (0);
var state_32770__$1 = (function (){var statearr_32773 = state_32770;
(statearr_32773[(7)] = inst_32728);

(statearr_32773[(8)] = inst_32729);

return statearr_32773;
})();
var statearr_32774_34952 = state_32770__$1;
(statearr_32774_34952[(2)] = null);

(statearr_32774_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (4))){
var inst_32736 = (state_32770[(9)]);
var inst_32736__$1 = (state_32770[(2)]);
var inst_32737 = (inst_32736__$1 == null);
var inst_32738 = cljs.core.not(inst_32737);
var state_32770__$1 = (function (){var statearr_32776 = state_32770;
(statearr_32776[(9)] = inst_32736__$1);

return statearr_32776;
})();
if(inst_32738){
var statearr_32777_34963 = state_32770__$1;
(statearr_32777_34963[(1)] = (5));

} else {
var statearr_32778_34964 = state_32770__$1;
(statearr_32778_34964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (15))){
var inst_32758 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32779_34969 = state_32770__$1;
(statearr_32779_34969[(2)] = inst_32758);

(statearr_32779_34969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (13))){
var state_32770__$1 = state_32770;
var statearr_32780_34970 = state_32770__$1;
(statearr_32780_34970[(2)] = null);

(statearr_32780_34970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (6))){
var inst_32729 = (state_32770[(8)]);
var inst_32754 = (inst_32729 > (0));
var state_32770__$1 = state_32770;
if(cljs.core.truth_(inst_32754)){
var statearr_32781_34981 = state_32770__$1;
(statearr_32781_34981[(1)] = (12));

} else {
var statearr_32782_34982 = state_32770__$1;
(statearr_32782_34982[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (3))){
var inst_32766 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32770__$1,inst_32766);
} else {
if((state_val_32771 === (12))){
var inst_32728 = (state_32770[(7)]);
var inst_32756 = cljs.core.vec(inst_32728);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32770__$1,(15),out,inst_32756);
} else {
if((state_val_32771 === (2))){
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32770__$1,(4),ch);
} else {
if((state_val_32771 === (11))){
var inst_32748 = (state_32770[(2)]);
var inst_32749 = (new Array(n));
var inst_32728 = inst_32749;
var inst_32729 = (0);
var state_32770__$1 = (function (){var statearr_32787 = state_32770;
(statearr_32787[(10)] = inst_32748);

(statearr_32787[(7)] = inst_32728);

(statearr_32787[(8)] = inst_32729);

return statearr_32787;
})();
var statearr_32788_35007 = state_32770__$1;
(statearr_32788_35007[(2)] = null);

(statearr_32788_35007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (9))){
var inst_32728 = (state_32770[(7)]);
var inst_32746 = cljs.core.vec(inst_32728);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32770__$1,(11),out,inst_32746);
} else {
if((state_val_32771 === (5))){
var inst_32728 = (state_32770[(7)]);
var inst_32729 = (state_32770[(8)]);
var inst_32736 = (state_32770[(9)]);
var inst_32741 = (state_32770[(11)]);
var inst_32740 = (inst_32728[inst_32729] = inst_32736);
var inst_32741__$1 = (inst_32729 + (1));
var inst_32742 = (inst_32741__$1 < n);
var state_32770__$1 = (function (){var statearr_32789 = state_32770;
(statearr_32789[(12)] = inst_32740);

(statearr_32789[(11)] = inst_32741__$1);

return statearr_32789;
})();
if(cljs.core.truth_(inst_32742)){
var statearr_32790_35044 = state_32770__$1;
(statearr_32790_35044[(1)] = (8));

} else {
var statearr_32791_35049 = state_32770__$1;
(statearr_32791_35049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (14))){
var inst_32761 = (state_32770[(2)]);
var inst_32762 = cljs.core.async.close_BANG_(out);
var state_32770__$1 = (function (){var statearr_32796 = state_32770;
(statearr_32796[(13)] = inst_32761);

return statearr_32796;
})();
var statearr_32798_35063 = state_32770__$1;
(statearr_32798_35063[(2)] = inst_32762);

(statearr_32798_35063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (10))){
var inst_32752 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32802_35073 = state_32770__$1;
(statearr_32802_35073[(2)] = inst_32752);

(statearr_32802_35073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (8))){
var inst_32728 = (state_32770[(7)]);
var inst_32741 = (state_32770[(11)]);
var tmp32794 = inst_32728;
var inst_32728__$1 = tmp32794;
var inst_32729 = inst_32741;
var state_32770__$1 = (function (){var statearr_32804 = state_32770;
(statearr_32804[(7)] = inst_32728__$1);

(statearr_32804[(8)] = inst_32729);

return statearr_32804;
})();
var statearr_32809_35098 = state_32770__$1;
(statearr_32809_35098[(2)] = null);

(statearr_32809_35098[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32819[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32819[(1)] = (1));

return statearr_32819;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32770){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32770);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e32823){var ex__29477__auto__ = e32823;
var statearr_32827_35103 = state_32770;
(statearr_32827_35103[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32770[(4)]))){
var statearr_32831_35104 = state_32770;
(statearr_32831_35104[(1)] = cljs.core.first((state_32770[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_32770;
state_32770 = G__35106;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_32841 = f__29728__auto__();
(statearr_32841[(6)] = c__29727__auto___34939);

return statearr_32841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29727__auto___35121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29728__auto__ = (function (){var switch__29473__auto__ = (function (state_32954){
var state_val_32955 = (state_32954[(1)]);
if((state_val_32955 === (7))){
var inst_32947 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32958_35132 = state_32954__$1;
(statearr_32958_35132[(2)] = inst_32947);

(statearr_32958_35132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (1))){
var inst_32894 = [];
var inst_32895 = inst_32894;
var inst_32896 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32954__$1 = (function (){var statearr_32959 = state_32954;
(statearr_32959[(7)] = inst_32895);

(statearr_32959[(8)] = inst_32896);

return statearr_32959;
})();
var statearr_32962_35142 = state_32954__$1;
(statearr_32962_35142[(2)] = null);

(statearr_32962_35142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (4))){
var inst_32899 = (state_32954[(9)]);
var inst_32899__$1 = (state_32954[(2)]);
var inst_32906 = (inst_32899__$1 == null);
var inst_32907 = cljs.core.not(inst_32906);
var state_32954__$1 = (function (){var statearr_32963 = state_32954;
(statearr_32963[(9)] = inst_32899__$1);

return statearr_32963;
})();
if(inst_32907){
var statearr_32967_35152 = state_32954__$1;
(statearr_32967_35152[(1)] = (5));

} else {
var statearr_32968_35153 = state_32954__$1;
(statearr_32968_35153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (15))){
var inst_32895 = (state_32954[(7)]);
var inst_32939 = cljs.core.vec(inst_32895);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32954__$1,(18),out,inst_32939);
} else {
if((state_val_32955 === (13))){
var inst_32934 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32969_35158 = state_32954__$1;
(statearr_32969_35158[(2)] = inst_32934);

(statearr_32969_35158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (6))){
var inst_32895 = (state_32954[(7)]);
var inst_32936 = inst_32895.length;
var inst_32937 = (inst_32936 > (0));
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32937)){
var statearr_32972_35159 = state_32954__$1;
(statearr_32972_35159[(1)] = (15));

} else {
var statearr_32976_35160 = state_32954__$1;
(statearr_32976_35160[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (17))){
var inst_32944 = (state_32954[(2)]);
var inst_32945 = cljs.core.async.close_BANG_(out);
var state_32954__$1 = (function (){var statearr_32977 = state_32954;
(statearr_32977[(10)] = inst_32944);

return statearr_32977;
})();
var statearr_32978_35165 = state_32954__$1;
(statearr_32978_35165[(2)] = inst_32945);

(statearr_32978_35165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (3))){
var inst_32951 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32954__$1,inst_32951);
} else {
if((state_val_32955 === (12))){
var inst_32895 = (state_32954[(7)]);
var inst_32927 = cljs.core.vec(inst_32895);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32954__$1,(14),out,inst_32927);
} else {
if((state_val_32955 === (2))){
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32954__$1,(4),ch);
} else {
if((state_val_32955 === (11))){
var inst_32895 = (state_32954[(7)]);
var inst_32899 = (state_32954[(9)]);
var inst_32912 = (state_32954[(11)]);
var inst_32922 = inst_32895.push(inst_32899);
var tmp32979 = inst_32895;
var inst_32895__$1 = tmp32979;
var inst_32896 = inst_32912;
var state_32954__$1 = (function (){var statearr_32980 = state_32954;
(statearr_32980[(12)] = inst_32922);

(statearr_32980[(7)] = inst_32895__$1);

(statearr_32980[(8)] = inst_32896);

return statearr_32980;
})();
var statearr_32981_35188 = state_32954__$1;
(statearr_32981_35188[(2)] = null);

(statearr_32981_35188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (9))){
var inst_32896 = (state_32954[(8)]);
var inst_32918 = cljs.core.keyword_identical_QMARK_(inst_32896,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32954__$1 = state_32954;
var statearr_32982_35199 = state_32954__$1;
(statearr_32982_35199[(2)] = inst_32918);

(statearr_32982_35199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (5))){
var inst_32899 = (state_32954[(9)]);
var inst_32912 = (state_32954[(11)]);
var inst_32896 = (state_32954[(8)]);
var inst_32913 = (state_32954[(13)]);
var inst_32912__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32899) : f.call(null,inst_32899));
var inst_32913__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32912__$1,inst_32896);
var state_32954__$1 = (function (){var statearr_32983 = state_32954;
(statearr_32983[(11)] = inst_32912__$1);

(statearr_32983[(13)] = inst_32913__$1);

return statearr_32983;
})();
if(inst_32913__$1){
var statearr_32984_35220 = state_32954__$1;
(statearr_32984_35220[(1)] = (8));

} else {
var statearr_32985_35222 = state_32954__$1;
(statearr_32985_35222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (14))){
var inst_32899 = (state_32954[(9)]);
var inst_32912 = (state_32954[(11)]);
var inst_32929 = (state_32954[(2)]);
var inst_32930 = [];
var inst_32931 = inst_32930.push(inst_32899);
var inst_32895 = inst_32930;
var inst_32896 = inst_32912;
var state_32954__$1 = (function (){var statearr_32986 = state_32954;
(statearr_32986[(14)] = inst_32929);

(statearr_32986[(15)] = inst_32931);

(statearr_32986[(7)] = inst_32895);

(statearr_32986[(8)] = inst_32896);

return statearr_32986;
})();
var statearr_32987_35241 = state_32954__$1;
(statearr_32987_35241[(2)] = null);

(statearr_32987_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (16))){
var state_32954__$1 = state_32954;
var statearr_32994_35246 = state_32954__$1;
(statearr_32994_35246[(2)] = null);

(statearr_32994_35246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (10))){
var inst_32920 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32920)){
var statearr_32995_35265 = state_32954__$1;
(statearr_32995_35265[(1)] = (11));

} else {
var statearr_32996_35266 = state_32954__$1;
(statearr_32996_35266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (18))){
var inst_32941 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32997_35278 = state_32954__$1;
(statearr_32997_35278[(2)] = inst_32941);

(statearr_32997_35278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (8))){
var inst_32913 = (state_32954[(13)]);
var state_32954__$1 = state_32954;
var statearr_32998_35285 = state_32954__$1;
(statearr_32998_35285[(2)] = inst_32913);

(statearr_32998_35285[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29474__auto__ = null;
var cljs$core$async$state_machine__29474__auto____0 = (function (){
var statearr_32999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32999[(0)] = cljs$core$async$state_machine__29474__auto__);

(statearr_32999[(1)] = (1));

return statearr_32999;
});
var cljs$core$async$state_machine__29474__auto____1 = (function (state_32954){
while(true){
var ret_value__29475__auto__ = (function (){try{while(true){
var result__29476__auto__ = switch__29473__auto__(state_32954);
if(cljs.core.keyword_identical_QMARK_(result__29476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29476__auto__;
}
break;
}
}catch (e33000){var ex__29477__auto__ = e33000;
var statearr_33001_35297 = state_32954;
(statearr_33001_35297[(2)] = ex__29477__auto__);


if(cljs.core.seq((state_32954[(4)]))){
var statearr_33002_35300 = state_32954;
(statearr_33002_35300[(1)] = cljs.core.first((state_32954[(4)])));

} else {
throw ex__29477__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35304 = state_32954;
state_32954 = G__35304;
continue;
} else {
return ret_value__29475__auto__;
}
break;
}
});
cljs$core$async$state_machine__29474__auto__ = function(state_32954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29474__auto____1.call(this,state_32954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29474__auto____0;
cljs$core$async$state_machine__29474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29474__auto____1;
return cljs$core$async$state_machine__29474__auto__;
})()
})();
var state__29729__auto__ = (function (){var statearr_33003 = f__29728__auto__();
(statearr_33003[(6)] = c__29727__auto___35121);

return statearr_33003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29729__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
