import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
export { ApplicationConfig };
declare const Lb4Application_base: (new (...args: any[]) => {
    projectRoot: string;
    bootOptions?: import("@loopback/boot").BootOptions | undefined;
    booted: boolean;
    start(): Promise<void>;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/core").Constructor<import("@loopback/boot").Booter>[]): import("@loopback/boot").Binding[];
    applicationBooter(subApp: import("@loopback/core").Application & import("@loopback/boot").Bootable, filter?: import("@loopback/core").BindingFilter): import("@loopback/boot").Binding<import("@loopback/boot").Booter>;
    component<C extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions): import("@loopback/boot").Binding<C>;
    mountComponentBooters(componentInstanceOrClass: import("@loopback/core").Constructor<unknown> | import("@loopback/boot").InstanceWithBooters): void;
    readonly options: import("@loopback/core").ApplicationConfig;
    readonly state: string;
    controller: <T>(controllerCtor: import("@loopback/core").ControllerClass<T>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T>;
    server: <T_1 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1>;
    servers: <T_2 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_2>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_3 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_3>) => Promise<T_3>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_4 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_4>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4>;
    service: <S>(cls: import("@loopback/core").ServiceOrProviderClass<S>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_5 extends import("@loopback/core").ContextEvent>(type: string, event: T_5) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType = any>(key: import("@loopback/core").BindingAddress<ValueType>) => import("@loopback/boot").Binding<ValueType>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType = any>(key?: import("@loopback/core").BindingAddress | undefined) => import("@loopback/boot").Binding<ConfigValueType>;
    getConfigAsValueOrPromise: <ConfigValueType_1>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1 | undefined>;
    getConfig: <ConfigValueType_2>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
    getConfigSync: <ConfigValueType_3>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_6 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_6>;
    contains: (key: import("@loopback/core").BindingAddress) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress) => boolean;
    getOwnerContext: (keyOrBinding: Readonly<import("@loopback/boot").Binding<unknown>> | import("@loopback/core").BindingAddress) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1>>[];
    findByTag: <ValueType_2 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2>>[];
    get: {
        <ValueType_3>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3>;
        <ValueType_4>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4 | undefined>;
    };
    getSync: {
        <ValueType_5>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5;
        <ValueType_6>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6 | undefined;
    };
    getBinding: {
        <ValueType_7 = any>(key: import("@loopback/core").BindingAddress<ValueType_7>): import("@loopback/boot").Binding<ValueType_7>;
        <ValueType_8>(key: import("@loopback/core").BindingAddress<ValueType_8>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8> | undefined;
    };
    findOrCreateBinding: <T_7>(key: import("@loopback/core").BindingAddress<T_7>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_7>;
    getValueOrPromise: <ValueType_9>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    [EventEmitter.captureRejectionSymbol]?: (<K>(error: Error, event: string | symbol, ...args: any[]) => void) | undefined;
    addListener: <K_1>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: <K_2>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: <K_3>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: <K_4>(eventName: string | symbol) => Function[];
    rawListeners: <K_5>(eventName: string | symbol) => Function[];
    emit: <K_6>(eventName: string | symbol, ...args: any[]) => boolean;
    listenerCount: <K_7>(eventName: string | symbol, listener?: Function | undefined) => number;
    prependListener: <K_8>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: <K_9>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & (new (...args: any[]) => {
    serviceProvider<S>(provider: import("@loopback/core").Constructor<import("@loopback/core").Provider<S>>, nameOrOptions?: string | import("@loopback/core").ServiceOptions): import("@loopback/boot").Binding<S>;
    component<C extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions): import("@loopback/boot").Binding<C>;
    mountComponentServices<C_1 extends import("@loopback/core").Component = import("@loopback/core").Component>(component: import("@loopback/core").Constructor<C_1>, componentBindingKey?: import("@loopback/core").BindingAddress<C_1> | undefined): void;
    readonly options: import("@loopback/core").ApplicationConfig;
    readonly state: string;
    controller: <T>(controllerCtor: import("@loopback/core").ControllerClass<T>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T>;
    server: <T_1 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1>;
    servers: <T_2 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_2>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_3 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_3>) => Promise<T_3>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    start: () => Promise<void>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_4 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_4>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4>;
    service: <S_1>(cls: import("@loopback/core").ServiceOrProviderClass<S_1>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S_1>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_5 extends import("@loopback/core").ContextEvent>(type: string, event: T_5) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType = any>(key: import("@loopback/core").BindingAddress<ValueType>) => import("@loopback/boot").Binding<ValueType>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType = any>(key?: import("@loopback/core").BindingAddress | undefined) => import("@loopback/boot").Binding<ConfigValueType>;
    getConfigAsValueOrPromise: <ConfigValueType_1>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1 | undefined>;
    getConfig: <ConfigValueType_2>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
    getConfigSync: <ConfigValueType_3>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_6 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_6>;
    contains: (key: import("@loopback/core").BindingAddress) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress) => boolean;
    getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1>>[];
    findByTag: <ValueType_2 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2>>[];
    get: {
        <ValueType_3>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3>;
        <ValueType_4>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4 | undefined>;
    };
    getSync: {
        <ValueType_5>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5;
        <ValueType_6>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6 | undefined;
    };
    getBinding: {
        <ValueType_7 = any>(key: import("@loopback/core").BindingAddress<ValueType_7>): import("@loopback/boot").Binding<ValueType_7>;
        <ValueType_8>(key: import("@loopback/core").BindingAddress<ValueType_8>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8> | undefined;
    };
    findOrCreateBinding: <T_7>(key: import("@loopback/core").BindingAddress<T_7>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_7>;
    getValueOrPromise: <ValueType_9>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    [EventEmitter.captureRejectionSymbol]?: (<K>(error: Error, event: string | symbol, ...args: any[]) => void) | undefined;
    addListener: <K_1>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: <K_2>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: <K_3>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: <K_4>(eventName: string | symbol) => Function[];
    rawListeners: <K_5>(eventName: string | symbol) => Function[];
    emit: <K_6>(eventName: string | symbol, ...args: any[]) => boolean;
    listenerCount: <K_7>(eventName: string | symbol, listener?: Function | undefined) => number;
    prependListener: <K_8>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: <K_9>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & (new (...args: any[]) => {
    repository<R extends import("@loopback/repository").Repository<any>>(repoClass: import("@loopback/repository").Class<R>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions): import("@loopback/boot").Binding<R>;
    getRepository<R_1 extends import("@loopback/repository").Repository<any>>(repo: import("@loopback/repository").Class<R_1>): Promise<R_1>;
    dataSource<D extends import("@loopback/repository").JugglerDataSource>(dataSource: D | import("@loopback/repository").Class<D>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions): import("@loopback/boot").Binding<D>;
    model<M extends import("@loopback/repository").Class<unknown>>(modelClass: M): import("@loopback/boot").Binding<M>;
    component<C extends import("@loopback/core").Component = import("@loopback/core").Component>(componentCtor: import("@loopback/core").Constructor<C>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions): import("@loopback/boot").Binding<C>;
    mountComponentRepositories(componentInstanceOrClass: import("@loopback/repository").Class<unknown> | import("@loopback/repository").RepositoryComponent): void;
    mountComponentModels(component: import("@loopback/repository").RepositoryComponent): void;
    migrateSchema(options?: import("@loopback/repository").SchemaMigrationOptions): Promise<void>;
    readonly options: import("@loopback/core").ApplicationConfig;
    readonly state: string;
    controller: <T>(controllerCtor: import("@loopback/core").ControllerClass<T>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T>;
    server: <T_1 extends import("@loopback/core").Server>(ctor: import("@loopback/core").Constructor<T_1>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_1>;
    servers: <T_2 extends import("@loopback/core").Server>(ctors: import("@loopback/core").Constructor<T_2>[]) => import("@loopback/boot").Binding<any>[];
    getServer: <T_3 extends import("@loopback/core").Server>(target: string | import("@loopback/core").Constructor<T_3>) => Promise<T_3>;
    init: () => Promise<void>;
    onInit: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    start: () => Promise<void>;
    onStart: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    stop: () => Promise<void>;
    onStop: (fn: () => import("@loopback/core").ValueOrPromise<void>) => import("@loopback/boot").Binding<import("@loopback/core").LifeCycleObserver>;
    setMetadata: (metadata: import("@loopback/core").ApplicationMetadata) => void;
    lifeCycleObserver: <T_4 extends import("@loopback/core").LifeCycleObserver>(ctor: import("@loopback/core").Constructor<T_4>, nameOrOptions?: string | import("@loopback/core").BindingFromClassOptions | undefined) => import("@loopback/boot").Binding<T_4>;
    service: <S>(cls: import("@loopback/core").ServiceOrProviderClass<S>, nameOrOptions?: string | import("@loopback/core").ServiceOptions | undefined) => import("@loopback/boot").Binding<S>;
    interceptor: (interceptor: import("@loopback/core").Interceptor | import("@loopback/core").Constructor<import("@loopback/core").Provider<import("@loopback/core").Interceptor>>, nameOrOptions?: string | import("@loopback/core").InterceptorBindingOptions | undefined) => import("@loopback/boot").Binding<import("@loopback/core").Interceptor>;
    readonly name: string;
    readonly subscriptionManager: import("@loopback/core").ContextSubscriptionManager;
    scope: import("@loopback/core").BindingScope;
    readonly parent: import("@loopback/core").Context | undefined;
    emitEvent: <T_5 extends import("@loopback/core").ContextEvent>(type: string, event: T_5) => void;
    emitError: (err: unknown) => void;
    bind: <ValueType = any>(key: import("@loopback/core").BindingAddress<ValueType>) => import("@loopback/boot").Binding<ValueType>;
    add: (binding: import("@loopback/boot").Binding<unknown>) => import("@loopback/core").Application;
    configure: <ConfigValueType = any>(key?: import("@loopback/core").BindingAddress | undefined) => import("@loopback/boot").Binding<ConfigValueType>;
    getConfigAsValueOrPromise: <ConfigValueType_1>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => import("@loopback/core").ValueOrPromise<ConfigValueType_1 | undefined>;
    getConfig: <ConfigValueType_2>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => Promise<ConfigValueType_2 | undefined>;
    getConfigSync: <ConfigValueType_3>(key: import("@loopback/core").BindingAddress, propertyPath?: string | undefined, resolutionOptions?: import("@loopback/core").ResolutionOptions | undefined) => ConfigValueType_3 | undefined;
    unbind: (key: import("@loopback/core").BindingAddress) => boolean;
    subscribe: (observer: import("@loopback/core").ContextEventObserver) => import("@loopback/core").Subscription;
    unsubscribe: (observer: import("@loopback/core").ContextEventObserver) => boolean;
    close: () => void;
    isSubscribed: (observer: import("@loopback/core").ContextObserver) => boolean;
    createView: <T_6 = unknown>(filter: import("@loopback/core").BindingFilter, comparator?: import("@loopback/core").BindingComparator | undefined, options?: Omit<import("@loopback/core").ResolutionOptions, "session"> | undefined) => import("@loopback/core").ContextView<T_6>;
    contains: (key: import("@loopback/core").BindingAddress) => boolean;
    isBound: (key: import("@loopback/core").BindingAddress) => boolean;
    getOwnerContext: (keyOrBinding: import("@loopback/core").BindingAddress | Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    getScopedContext: (scope: import("@loopback/core").BindingScope.APPLICATION | import("@loopback/core").BindingScope.SERVER | import("@loopback/core").BindingScope.REQUEST) => import("@loopback/core").Context | undefined;
    getResolutionContext: (binding: Readonly<import("@loopback/boot").Binding<unknown>>) => import("@loopback/core").Context | undefined;
    isVisibleTo: (ctx: import("@loopback/core").Context) => boolean;
    find: <ValueType_1 = any>(pattern?: string | RegExp | import("@loopback/core").BindingFilter | undefined) => Readonly<import("@loopback/boot").Binding<ValueType_1>>[];
    findByTag: <ValueType_2 = any>(tagFilter: RegExp | import("@loopback/core").BindingTag) => Readonly<import("@loopback/boot").Binding<ValueType_2>>[];
    get: {
        <ValueType_3>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_3>, session?: import("@loopback/core").ResolutionSession | undefined): Promise<ValueType_3>;
        <ValueType_4>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_4>, options: import("@loopback/core").ResolutionOptions): Promise<ValueType_4 | undefined>;
    };
    getSync: {
        <ValueType_5>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_5>, session?: import("@loopback/core").ResolutionSession | undefined): ValueType_5;
        <ValueType_6>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_6>, options?: import("@loopback/core").ResolutionOptions | undefined): ValueType_6 | undefined;
    };
    getBinding: {
        <ValueType_7 = any>(key: import("@loopback/core").BindingAddress<ValueType_7>): import("@loopback/boot").Binding<ValueType_7>;
        <ValueType_8>(key: import("@loopback/core").BindingAddress<ValueType_8>, options?: {
            optional?: boolean | undefined;
        } | undefined): import("@loopback/boot").Binding<ValueType_8> | undefined;
    };
    findOrCreateBinding: <T_7>(key: import("@loopback/core").BindingAddress<T_7>, policy?: import("@loopback/core").BindingCreationPolicy | undefined) => import("@loopback/boot").Binding<T_7>;
    getValueOrPromise: <ValueType_9>(keyWithPath: import("@loopback/core").BindingAddress<ValueType_9>, optionsOrSession?: import("@loopback/core").ResolutionOptionsOrSession | undefined) => import("@loopback/core").ValueOrPromise<ValueType_9 | undefined>;
    toJSON: () => import("@loopback/core").JSONObject;
    inspect: (options?: import("@loopback/core").ContextInspectOptions | undefined) => import("@loopback/core").JSONObject;
    on: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    once: {
        (eventName: "bind" | "unbind", listener: import("@loopback/core").ContextEventListener): import("@loopback/core").Application;
        (event: string | symbol, listener: (...args: any[]) => void): import("@loopback/core").Application;
    };
    [EventEmitter.captureRejectionSymbol]?: (<K>(error: Error, event: string | symbol, ...args: any[]) => void) | undefined;
    addListener: <K_1>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeListener: <K_2>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    off: <K_3>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    removeAllListeners: (event?: string | symbol | undefined) => import("@loopback/core").Application;
    setMaxListeners: (n: number) => import("@loopback/core").Application;
    getMaxListeners: () => number;
    listeners: <K_4>(eventName: string | symbol) => Function[];
    rawListeners: <K_5>(eventName: string | symbol) => Function[];
    emit: <K_6>(eventName: string | symbol, ...args: any[]) => boolean;
    listenerCount: <K_7>(eventName: string | symbol, listener?: Function | undefined) => number;
    prependListener: <K_8>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    prependOnceListener: <K_9>(eventName: string | symbol, listener: (...args: any[]) => void) => import("@loopback/core").Application;
    eventNames: () => (string | symbol)[];
}) & typeof RestApplication;
export declare class Lb4Application extends Lb4Application_base {
    constructor(options?: ApplicationConfig);
}
