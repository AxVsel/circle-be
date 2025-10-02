
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Thread
 * 
 */
export type Thread = $Result.DefaultSelection<Prisma.$ThreadPayload>
/**
 * Model Reply
 * 
 */
export type Reply = $Result.DefaultSelection<Prisma.$ReplyPayload>
/**
 * Model Rchild
 * 
 */
export type Rchild = $Result.DefaultSelection<Prisma.$RchildPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Following
 * 
 */
export type Following = $Result.DefaultSelection<Prisma.$FollowingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rchild`: Exposes CRUD operations for the **Rchild** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rchildren
    * const rchildren = await prisma.rchild.findMany()
    * ```
    */
  get rchild(): Prisma.RchildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.following`: Exposes CRUD operations for the **Following** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followings
    * const followings = await prisma.following.findMany()
    * ```
    */
  get following(): Prisma.FollowingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Thread: 'Thread',
    Reply: 'Reply',
    Rchild: 'Rchild',
    Like: 'Like',
    Following: 'Following'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "thread" | "reply" | "rchild" | "like" | "following"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Thread: {
        payload: Prisma.$ThreadPayload<ExtArgs>
        fields: Prisma.ThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThreadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          deleteMany: {
            args: Prisma.ThreadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThreadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          upsert: {
            args: Prisma.ThreadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          aggregate: {
            args: Prisma.ThreadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThread>
          }
          groupBy: {
            args: Prisma.ThreadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThreadGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThreadCountArgs<ExtArgs>
            result: $Utils.Optional<ThreadCountAggregateOutputType> | number
          }
        }
      }
      Reply: {
        payload: Prisma.$ReplyPayload<ExtArgs>
        fields: Prisma.ReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findFirst: {
            args: Prisma.ReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findMany: {
            args: Prisma.ReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          create: {
            args: Prisma.ReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          createMany: {
            args: Prisma.ReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          delete: {
            args: Prisma.ReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          update: {
            args: Prisma.ReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          deleteMany: {
            args: Prisma.ReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          upsert: {
            args: Prisma.ReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          aggregate: {
            args: Prisma.ReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReply>
          }
          groupBy: {
            args: Prisma.ReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ReplyCountAggregateOutputType> | number
          }
        }
      }
      Rchild: {
        payload: Prisma.$RchildPayload<ExtArgs>
        fields: Prisma.RchildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RchildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RchildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>
          }
          findFirst: {
            args: Prisma.RchildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RchildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>
          }
          findMany: {
            args: Prisma.RchildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>[]
          }
          create: {
            args: Prisma.RchildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>
          }
          createMany: {
            args: Prisma.RchildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RchildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>[]
          }
          delete: {
            args: Prisma.RchildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>
          }
          update: {
            args: Prisma.RchildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>
          }
          deleteMany: {
            args: Prisma.RchildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RchildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RchildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>[]
          }
          upsert: {
            args: Prisma.RchildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RchildPayload>
          }
          aggregate: {
            args: Prisma.RchildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRchild>
          }
          groupBy: {
            args: Prisma.RchildGroupByArgs<ExtArgs>
            result: $Utils.Optional<RchildGroupByOutputType>[]
          }
          count: {
            args: Prisma.RchildCountArgs<ExtArgs>
            result: $Utils.Optional<RchildCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Following: {
        payload: Prisma.$FollowingPayload<ExtArgs>
        fields: Prisma.FollowingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          findFirst: {
            args: Prisma.FollowingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          findMany: {
            args: Prisma.FollowingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          create: {
            args: Prisma.FollowingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          createMany: {
            args: Prisma.FollowingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          delete: {
            args: Prisma.FollowingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          update: {
            args: Prisma.FollowingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          deleteMany: {
            args: Prisma.FollowingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>[]
          }
          upsert: {
            args: Prisma.FollowingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowingPayload>
          }
          aggregate: {
            args: Prisma.FollowingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowing>
          }
          groupBy: {
            args: Prisma.FollowingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowingGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowingCountArgs<ExtArgs>
            result: $Utils.Optional<FollowingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    thread?: ThreadOmit
    reply?: ReplyOmit
    rchild?: RchildOmit
    like?: LikeOmit
    following?: FollowingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    following: number
    followers: number
    replies: number
    threads: number
    likes: number
    rchild: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    replies?: boolean | UserCountOutputTypeCountRepliesArgs
    threads?: boolean | UserCountOutputTypeCountThreadsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    rchild?: boolean | UserCountOutputTypeCountRchildArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRchildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RchildWhereInput
  }


  /**
   * Count Type ThreadCountOutputType
   */

  export type ThreadCountOutputType = {
    replies: number
    likes: number
    rchild: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ThreadCountOutputTypeCountRepliesArgs
    likes?: boolean | ThreadCountOutputTypeCountLikesArgs
    rchild?: boolean | ThreadCountOutputTypeCountRchildArgs
  }

  // Custom InputTypes
  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountRchildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RchildWhereInput
  }


  /**
   * Count Type ReplyCountOutputType
   */

  export type ReplyCountOutputType = {
    Like: number
    rchild: number
  }

  export type ReplyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Like?: boolean | ReplyCountOutputTypeCountLikeArgs
    rchild?: boolean | ReplyCountOutputTypeCountRchildArgs
  }

  // Custom InputTypes
  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplyCountOutputType
     */
    select?: ReplyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeCountRchildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RchildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    full_name: string | null
    email: string | null
    password: string | null
    photo_profile: string | null
    background: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    full_name: string | null
    email: string | null
    password: string | null
    photo_profile: string | null
    background: string | null
    bio: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    full_name: number
    email: number
    password: number
    photo_profile: number
    background: number
    bio: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    photo_profile?: true
    background?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    photo_profile?: true
    background?: true
    bio?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    full_name?: true
    email?: true
    password?: true
    photo_profile?: true
    background?: true
    bio?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile: string | null
    background: string | null
    bio: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    photo_profile?: boolean
    background?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    threads?: boolean | User$threadsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    rchild?: boolean | User$rchildArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    photo_profile?: boolean
    background?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    photo_profile?: boolean
    background?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    photo_profile?: boolean
    background?: boolean
    bio?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "full_name" | "email" | "password" | "photo_profile" | "background" | "bio" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | User$followingArgs<ExtArgs>
    followers?: boolean | User$followersArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    threads?: boolean | User$threadsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    rchild?: boolean | User$rchildArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      following: Prisma.$FollowingPayload<ExtArgs>[]
      followers: Prisma.$FollowingPayload<ExtArgs>[]
      replies: Prisma.$ReplyPayload<ExtArgs>[]
      threads: Prisma.$ThreadPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      rchild: Prisma.$RchildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      full_name: string
      email: string
      password: string
      photo_profile: string | null
      background: string | null
      bio: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replies<T extends User$repliesArgs<ExtArgs> = {}>(args?: Subset<T, User$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    threads<T extends User$threadsArgs<ExtArgs> = {}>(args?: Subset<T, User$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rchild<T extends User$rchildArgs<ExtArgs> = {}>(args?: Subset<T, User$rchildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly photo_profile: FieldRef<"User", 'String'>
    readonly background: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    cursor?: FollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    cursor?: FollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * User.replies
   */
  export type User$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * User.threads
   */
  export type User$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.rchild
   */
  export type User$rchildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    where?: RchildWhereInput
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    cursor?: RchildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RchildScalarFieldEnum | RchildScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Thread
   */

  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadAvgAggregateOutputType = {
    id: number | null
    number_of_replies: number | null
    userId: number | null
  }

  export type ThreadSumAggregateOutputType = {
    id: number | null
    number_of_replies: number | null
    userId: number | null
  }

  export type ThreadMinAggregateOutputType = {
    id: number | null
    content: string | null
    image: string | null
    number_of_replies: number | null
    created_at: Date | null
    updated_at: Date | null
    userId: number | null
  }

  export type ThreadMaxAggregateOutputType = {
    id: number | null
    content: string | null
    image: string | null
    number_of_replies: number | null
    created_at: Date | null
    updated_at: Date | null
    userId: number | null
  }

  export type ThreadCountAggregateOutputType = {
    id: number
    content: number
    image: number
    number_of_replies: number
    created_at: number
    updated_at: number
    userId: number
    _all: number
  }


  export type ThreadAvgAggregateInputType = {
    id?: true
    number_of_replies?: true
    userId?: true
  }

  export type ThreadSumAggregateInputType = {
    id?: true
    number_of_replies?: true
    userId?: true
  }

  export type ThreadMinAggregateInputType = {
    id?: true
    content?: true
    image?: true
    number_of_replies?: true
    created_at?: true
    updated_at?: true
    userId?: true
  }

  export type ThreadMaxAggregateInputType = {
    id?: true
    content?: true
    image?: true
    number_of_replies?: true
    created_at?: true
    updated_at?: true
    userId?: true
  }

  export type ThreadCountAggregateInputType = {
    id?: true
    content?: true
    image?: true
    number_of_replies?: true
    created_at?: true
    updated_at?: true
    userId?: true
    _all?: true
  }

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThreadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThreadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithAggregationInput | ThreadOrderByWithAggregationInput[]
    by: ThreadScalarFieldEnum[] | ThreadScalarFieldEnum
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _avg?: ThreadAvgAggregateInputType
    _sum?: ThreadSumAggregateInputType
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }

  export type ThreadGroupByOutputType = {
    id: number
    content: string
    image: string | null
    number_of_replies: number
    created_at: Date
    updated_at: Date
    userId: number | null
    _count: ThreadCountAggregateOutputType | null
    _avg: ThreadAvgAggregateOutputType | null
    _sum: ThreadSumAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    image?: boolean
    number_of_replies?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
    replies?: boolean | Thread$repliesArgs<ExtArgs>
    likes?: boolean | Thread$likesArgs<ExtArgs>
    user?: boolean | Thread$userArgs<ExtArgs>
    rchild?: boolean | Thread$rchildArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    image?: boolean
    number_of_replies?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
    user?: boolean | Thread$userArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    image?: boolean
    number_of_replies?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
    user?: boolean | Thread$userArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectScalar = {
    id?: boolean
    content?: boolean
    image?: boolean
    number_of_replies?: boolean
    created_at?: boolean
    updated_at?: boolean
    userId?: boolean
  }

  export type ThreadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "image" | "number_of_replies" | "created_at" | "updated_at" | "userId", ExtArgs["result"]["thread"]>
  export type ThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | Thread$repliesArgs<ExtArgs>
    likes?: boolean | Thread$likesArgs<ExtArgs>
    user?: boolean | Thread$userArgs<ExtArgs>
    rchild?: boolean | Thread$rchildArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThreadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Thread$userArgs<ExtArgs>
  }
  export type ThreadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Thread$userArgs<ExtArgs>
  }

  export type $ThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thread"
    objects: {
      replies: Prisma.$ReplyPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      rchild: Prisma.$RchildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      image: string | null
      number_of_replies: number
      created_at: Date
      updated_at: Date
      userId: number | null
    }, ExtArgs["result"]["thread"]>
    composites: {}
  }

  type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = $Result.GetResult<Prisma.$ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thread'], meta: { name: 'Thread' } }
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThreadFindUniqueArgs>(args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thread that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs>(args: SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThreadFindFirstArgs>(args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs>(args?: SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThreadFindManyArgs>(args?: SelectSubset<T, ThreadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
     */
    create<T extends ThreadCreateArgs>(args: SelectSubset<T, ThreadCreateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Threads.
     * @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThreadCreateManyArgs>(args?: SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Threads and returns the data saved in the database.
     * @param {ThreadCreateManyAndReturnArgs} args - Arguments to create many Threads.
     * @example
     * // Create many Threads
     * const thread = await prisma.thread.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Threads and only return the `id`
     * const threadWithIdOnly = await prisma.thread.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThreadCreateManyAndReturnArgs>(args?: SelectSubset<T, ThreadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
     */
    delete<T extends ThreadDeleteArgs>(args: SelectSubset<T, ThreadDeleteArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThreadUpdateArgs>(args: SelectSubset<T, ThreadUpdateArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThreadDeleteManyArgs>(args?: SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThreadUpdateManyArgs>(args: SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads and returns the data updated in the database.
     * @param {ThreadUpdateManyAndReturnArgs} args - Arguments to update many Threads.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Threads and only return the `id`
     * const threadWithIdOnly = await prisma.thread.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ThreadUpdateManyAndReturnArgs>(args: SelectSubset<T, ThreadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
     */
    upsert<T extends ThreadUpsertArgs>(args: SelectSubset<T, ThreadUpsertArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thread model
   */
  readonly fields: ThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    replies<T extends Thread$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Thread$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Thread$likesArgs<ExtArgs> = {}>(args?: Subset<T, Thread$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Thread$userArgs<ExtArgs> = {}>(args?: Subset<T, Thread$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rchild<T extends Thread$rchildArgs<ExtArgs> = {}>(args?: Subset<T, Thread$rchildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Thread model
   */
  interface ThreadFieldRefs {
    readonly id: FieldRef<"Thread", 'Int'>
    readonly content: FieldRef<"Thread", 'String'>
    readonly image: FieldRef<"Thread", 'String'>
    readonly number_of_replies: FieldRef<"Thread", 'Int'>
    readonly created_at: FieldRef<"Thread", 'DateTime'>
    readonly updated_at: FieldRef<"Thread", 'DateTime'>
    readonly userId: FieldRef<"Thread", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Thread findUnique
   */
  export type ThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread findFirst
   */
  export type ThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }

  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }

  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thread createManyAndReturn
   */
  export type ThreadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
  }

  /**
   * Thread updateManyAndReturn
   */
  export type ThreadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }

  /**
   * Thread delete
   */
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }

  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
    /**
     * Limit how many Threads to delete.
     */
    limit?: number
  }

  /**
   * Thread.replies
   */
  export type Thread$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Thread.likes
   */
  export type Thread$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Thread.user
   */
  export type Thread$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Thread.rchild
   */
  export type Thread$rchildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    where?: RchildWhereInput
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    cursor?: RchildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RchildScalarFieldEnum | RchildScalarFieldEnum[]
  }

  /**
   * Thread without action
   */
  export type ThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
  }


  /**
   * Model Reply
   */

  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
  }

  export type ReplySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
  }

  export type ReplyMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    image: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    image: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    user_id: number
    thread_id: number
    image: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReplyAvgAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
  }

  export type ReplySumAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
  }

  export type ReplyMinAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    image?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    image?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    image?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithAggregationInput | ReplyOrderByWithAggregationInput[]
    by: ReplyScalarFieldEnum[] | ReplyScalarFieldEnum
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _avg?: ReplyAvgAggregateInputType
    _sum?: ReplySumAggregateInputType
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }

  export type ReplyGroupByOutputType = {
    id: number
    user_id: number
    thread_id: number
    image: string | null
    content: string
    created_at: Date
    updated_at: Date
    _count: ReplyCountAggregateOutputType | null
    _avg: ReplyAvgAggregateOutputType | null
    _sum: ReplySumAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    image?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    Like?: boolean | Reply$LikeArgs<ExtArgs>
    rchild?: boolean | Reply$rchildArgs<ExtArgs>
    _count?: boolean | ReplyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    image?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    image?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectScalar = {
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    image?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "thread_id" | "image" | "content" | "created_at" | "updated_at", ExtArgs["result"]["reply"]>
  export type ReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    Like?: boolean | Reply$LikeArgs<ExtArgs>
    rchild?: boolean | Reply$rchildArgs<ExtArgs>
    _count?: boolean | ReplyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }
  export type ReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
  }

  export type $ReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reply"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      thread: Prisma.$ThreadPayload<ExtArgs>
      Like: Prisma.$LikePayload<ExtArgs>[]
      rchild: Prisma.$RchildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      thread_id: number
      image: string | null
      content: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reply"]>
    composites: {}
  }

  type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = $Result.GetResult<Prisma.$ReplyPayload, S>

  type ReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reply'], meta: { name: 'Reply' } }
    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplyFindUniqueArgs>(args: SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplyFindFirstArgs>(args?: SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replyWithIdOnly = await prisma.reply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplyFindManyArgs>(args?: SelectSubset<T, ReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
     */
    create<T extends ReplyCreateArgs>(args: SelectSubset<T, ReplyCreateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Replies.
     * @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplyCreateManyArgs>(args?: SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Replies and returns the data saved in the database.
     * @param {ReplyCreateManyAndReturnArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
     */
    delete<T extends ReplyDeleteArgs>(args: SelectSubset<T, ReplyDeleteArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplyUpdateArgs>(args: SelectSubset<T, ReplyUpdateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplyDeleteManyArgs>(args?: SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplyUpdateManyArgs>(args: SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies and returns the data updated in the database.
     * @param {ReplyUpdateManyAndReturnArgs} args - Arguments to update many Replies.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
     */
    upsert<T extends ReplyUpsertArgs>(args: SelectSubset<T, ReplyUpsertArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reply model
   */
  readonly fields: ReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Like<T extends Reply$LikeArgs<ExtArgs> = {}>(args?: Subset<T, Reply$LikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rchild<T extends Reply$rchildArgs<ExtArgs> = {}>(args?: Subset<T, Reply$rchildArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reply model
   */
  interface ReplyFieldRefs {
    readonly id: FieldRef<"Reply", 'Int'>
    readonly user_id: FieldRef<"Reply", 'Int'>
    readonly thread_id: FieldRef<"Reply", 'Int'>
    readonly image: FieldRef<"Reply", 'String'>
    readonly content: FieldRef<"Reply", 'String'>
    readonly created_at: FieldRef<"Reply", 'DateTime'>
    readonly updated_at: FieldRef<"Reply", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reply findUnique
   */
  export type ReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findFirst
   */
  export type ReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply create
   */
  export type ReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }

  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reply createManyAndReturn
   */
  export type ReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply update
   */
  export type ReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
  }

  /**
   * Reply updateManyAndReturn
   */
  export type ReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }

  /**
   * Reply delete
   */
  export type ReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to delete.
     */
    limit?: number
  }

  /**
   * Reply.Like
   */
  export type Reply$LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Reply.rchild
   */
  export type Reply$rchildArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    where?: RchildWhereInput
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    cursor?: RchildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RchildScalarFieldEnum | RchildScalarFieldEnum[]
  }

  /**
   * Reply without action
   */
  export type ReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
  }


  /**
   * Model Rchild
   */

  export type AggregateRchild = {
    _count: RchildCountAggregateOutputType | null
    _avg: RchildAvgAggregateOutputType | null
    _sum: RchildSumAggregateOutputType | null
    _min: RchildMinAggregateOutputType | null
    _max: RchildMaxAggregateOutputType | null
  }

  export type RchildAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
  }

  export type RchildSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
  }

  export type RchildMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RchildMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RchildCountAggregateOutputType = {
    id: number
    user_id: number
    thread_id: number
    reply_id: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RchildAvgAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
  }

  export type RchildSumAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
  }

  export type RchildMinAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type RchildMaxAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type RchildCountAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RchildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rchild to aggregate.
     */
    where?: RchildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rchildren to fetch.
     */
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RchildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rchildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rchildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rchildren
    **/
    _count?: true | RchildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RchildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RchildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RchildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RchildMaxAggregateInputType
  }

  export type GetRchildAggregateType<T extends RchildAggregateArgs> = {
        [P in keyof T & keyof AggregateRchild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRchild[P]>
      : GetScalarType<T[P], AggregateRchild[P]>
  }




  export type RchildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RchildWhereInput
    orderBy?: RchildOrderByWithAggregationInput | RchildOrderByWithAggregationInput[]
    by: RchildScalarFieldEnum[] | RchildScalarFieldEnum
    having?: RchildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RchildCountAggregateInputType | true
    _avg?: RchildAvgAggregateInputType
    _sum?: RchildSumAggregateInputType
    _min?: RchildMinAggregateInputType
    _max?: RchildMaxAggregateInputType
  }

  export type RchildGroupByOutputType = {
    id: number
    user_id: number
    thread_id: number
    reply_id: number
    content: string
    created_at: Date
    updated_at: Date
    _count: RchildCountAggregateOutputType | null
    _avg: RchildAvgAggregateOutputType | null
    _sum: RchildSumAggregateOutputType | null
    _min: RchildMinAggregateOutputType | null
    _max: RchildMaxAggregateOutputType | null
  }

  type GetRchildGroupByPayload<T extends RchildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RchildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RchildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RchildGroupByOutputType[P]>
            : GetScalarType<T[P], RchildGroupByOutputType[P]>
        }
      >
    >


  export type RchildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    reply?: boolean | ReplyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rchild"]>

  export type RchildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    reply?: boolean | ReplyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rchild"]>

  export type RchildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    reply?: boolean | ReplyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rchild"]>

  export type RchildSelectScalar = {
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RchildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "thread_id" | "reply_id" | "content" | "created_at" | "updated_at", ExtArgs["result"]["rchild"]>
  export type RchildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    reply?: boolean | ReplyDefaultArgs<ExtArgs>
  }
  export type RchildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    reply?: boolean | ReplyDefaultArgs<ExtArgs>
  }
  export type RchildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | ThreadDefaultArgs<ExtArgs>
    reply?: boolean | ReplyDefaultArgs<ExtArgs>
  }

  export type $RchildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rchild"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      thread: Prisma.$ThreadPayload<ExtArgs>
      reply: Prisma.$ReplyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      thread_id: number
      reply_id: number
      content: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["rchild"]>
    composites: {}
  }

  type RchildGetPayload<S extends boolean | null | undefined | RchildDefaultArgs> = $Result.GetResult<Prisma.$RchildPayload, S>

  type RchildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RchildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RchildCountAggregateInputType | true
    }

  export interface RchildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rchild'], meta: { name: 'Rchild' } }
    /**
     * Find zero or one Rchild that matches the filter.
     * @param {RchildFindUniqueArgs} args - Arguments to find a Rchild
     * @example
     * // Get one Rchild
     * const rchild = await prisma.rchild.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RchildFindUniqueArgs>(args: SelectSubset<T, RchildFindUniqueArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rchild that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RchildFindUniqueOrThrowArgs} args - Arguments to find a Rchild
     * @example
     * // Get one Rchild
     * const rchild = await prisma.rchild.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RchildFindUniqueOrThrowArgs>(args: SelectSubset<T, RchildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rchild that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildFindFirstArgs} args - Arguments to find a Rchild
     * @example
     * // Get one Rchild
     * const rchild = await prisma.rchild.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RchildFindFirstArgs>(args?: SelectSubset<T, RchildFindFirstArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rchild that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildFindFirstOrThrowArgs} args - Arguments to find a Rchild
     * @example
     * // Get one Rchild
     * const rchild = await prisma.rchild.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RchildFindFirstOrThrowArgs>(args?: SelectSubset<T, RchildFindFirstOrThrowArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rchildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rchildren
     * const rchildren = await prisma.rchild.findMany()
     * 
     * // Get first 10 Rchildren
     * const rchildren = await prisma.rchild.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rchildWithIdOnly = await prisma.rchild.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RchildFindManyArgs>(args?: SelectSubset<T, RchildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rchild.
     * @param {RchildCreateArgs} args - Arguments to create a Rchild.
     * @example
     * // Create one Rchild
     * const Rchild = await prisma.rchild.create({
     *   data: {
     *     // ... data to create a Rchild
     *   }
     * })
     * 
     */
    create<T extends RchildCreateArgs>(args: SelectSubset<T, RchildCreateArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rchildren.
     * @param {RchildCreateManyArgs} args - Arguments to create many Rchildren.
     * @example
     * // Create many Rchildren
     * const rchild = await prisma.rchild.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RchildCreateManyArgs>(args?: SelectSubset<T, RchildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rchildren and returns the data saved in the database.
     * @param {RchildCreateManyAndReturnArgs} args - Arguments to create many Rchildren.
     * @example
     * // Create many Rchildren
     * const rchild = await prisma.rchild.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rchildren and only return the `id`
     * const rchildWithIdOnly = await prisma.rchild.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RchildCreateManyAndReturnArgs>(args?: SelectSubset<T, RchildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rchild.
     * @param {RchildDeleteArgs} args - Arguments to delete one Rchild.
     * @example
     * // Delete one Rchild
     * const Rchild = await prisma.rchild.delete({
     *   where: {
     *     // ... filter to delete one Rchild
     *   }
     * })
     * 
     */
    delete<T extends RchildDeleteArgs>(args: SelectSubset<T, RchildDeleteArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rchild.
     * @param {RchildUpdateArgs} args - Arguments to update one Rchild.
     * @example
     * // Update one Rchild
     * const rchild = await prisma.rchild.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RchildUpdateArgs>(args: SelectSubset<T, RchildUpdateArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rchildren.
     * @param {RchildDeleteManyArgs} args - Arguments to filter Rchildren to delete.
     * @example
     * // Delete a few Rchildren
     * const { count } = await prisma.rchild.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RchildDeleteManyArgs>(args?: SelectSubset<T, RchildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rchildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rchildren
     * const rchild = await prisma.rchild.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RchildUpdateManyArgs>(args: SelectSubset<T, RchildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rchildren and returns the data updated in the database.
     * @param {RchildUpdateManyAndReturnArgs} args - Arguments to update many Rchildren.
     * @example
     * // Update many Rchildren
     * const rchild = await prisma.rchild.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rchildren and only return the `id`
     * const rchildWithIdOnly = await prisma.rchild.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RchildUpdateManyAndReturnArgs>(args: SelectSubset<T, RchildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rchild.
     * @param {RchildUpsertArgs} args - Arguments to update or create a Rchild.
     * @example
     * // Update or create a Rchild
     * const rchild = await prisma.rchild.upsert({
     *   create: {
     *     // ... data to create a Rchild
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rchild we want to update
     *   }
     * })
     */
    upsert<T extends RchildUpsertArgs>(args: SelectSubset<T, RchildUpsertArgs<ExtArgs>>): Prisma__RchildClient<$Result.GetResult<Prisma.$RchildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rchildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildCountArgs} args - Arguments to filter Rchildren to count.
     * @example
     * // Count the number of Rchildren
     * const count = await prisma.rchild.count({
     *   where: {
     *     // ... the filter for the Rchildren we want to count
     *   }
     * })
    **/
    count<T extends RchildCountArgs>(
      args?: Subset<T, RchildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RchildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rchild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RchildAggregateArgs>(args: Subset<T, RchildAggregateArgs>): Prisma.PrismaPromise<GetRchildAggregateType<T>>

    /**
     * Group by Rchild.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RchildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RchildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RchildGroupByArgs['orderBy'] }
        : { orderBy?: RchildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RchildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRchildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rchild model
   */
  readonly fields: RchildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rchild.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RchildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thread<T extends ThreadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThreadDefaultArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reply<T extends ReplyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReplyDefaultArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rchild model
   */
  interface RchildFieldRefs {
    readonly id: FieldRef<"Rchild", 'Int'>
    readonly user_id: FieldRef<"Rchild", 'Int'>
    readonly thread_id: FieldRef<"Rchild", 'Int'>
    readonly reply_id: FieldRef<"Rchild", 'Int'>
    readonly content: FieldRef<"Rchild", 'String'>
    readonly created_at: FieldRef<"Rchild", 'DateTime'>
    readonly updated_at: FieldRef<"Rchild", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rchild findUnique
   */
  export type RchildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * Filter, which Rchild to fetch.
     */
    where: RchildWhereUniqueInput
  }

  /**
   * Rchild findUniqueOrThrow
   */
  export type RchildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * Filter, which Rchild to fetch.
     */
    where: RchildWhereUniqueInput
  }

  /**
   * Rchild findFirst
   */
  export type RchildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * Filter, which Rchild to fetch.
     */
    where?: RchildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rchildren to fetch.
     */
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rchildren.
     */
    cursor?: RchildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rchildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rchildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rchildren.
     */
    distinct?: RchildScalarFieldEnum | RchildScalarFieldEnum[]
  }

  /**
   * Rchild findFirstOrThrow
   */
  export type RchildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * Filter, which Rchild to fetch.
     */
    where?: RchildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rchildren to fetch.
     */
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rchildren.
     */
    cursor?: RchildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rchildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rchildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rchildren.
     */
    distinct?: RchildScalarFieldEnum | RchildScalarFieldEnum[]
  }

  /**
   * Rchild findMany
   */
  export type RchildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * Filter, which Rchildren to fetch.
     */
    where?: RchildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rchildren to fetch.
     */
    orderBy?: RchildOrderByWithRelationInput | RchildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rchildren.
     */
    cursor?: RchildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rchildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rchildren.
     */
    skip?: number
    distinct?: RchildScalarFieldEnum | RchildScalarFieldEnum[]
  }

  /**
   * Rchild create
   */
  export type RchildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * The data needed to create a Rchild.
     */
    data: XOR<RchildCreateInput, RchildUncheckedCreateInput>
  }

  /**
   * Rchild createMany
   */
  export type RchildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rchildren.
     */
    data: RchildCreateManyInput | RchildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rchild createManyAndReturn
   */
  export type RchildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * The data used to create many Rchildren.
     */
    data: RchildCreateManyInput | RchildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rchild update
   */
  export type RchildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * The data needed to update a Rchild.
     */
    data: XOR<RchildUpdateInput, RchildUncheckedUpdateInput>
    /**
     * Choose, which Rchild to update.
     */
    where: RchildWhereUniqueInput
  }

  /**
   * Rchild updateMany
   */
  export type RchildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rchildren.
     */
    data: XOR<RchildUpdateManyMutationInput, RchildUncheckedUpdateManyInput>
    /**
     * Filter which Rchildren to update
     */
    where?: RchildWhereInput
    /**
     * Limit how many Rchildren to update.
     */
    limit?: number
  }

  /**
   * Rchild updateManyAndReturn
   */
  export type RchildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * The data used to update Rchildren.
     */
    data: XOR<RchildUpdateManyMutationInput, RchildUncheckedUpdateManyInput>
    /**
     * Filter which Rchildren to update
     */
    where?: RchildWhereInput
    /**
     * Limit how many Rchildren to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rchild upsert
   */
  export type RchildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * The filter to search for the Rchild to update in case it exists.
     */
    where: RchildWhereUniqueInput
    /**
     * In case the Rchild found by the `where` argument doesn't exist, create a new Rchild with this data.
     */
    create: XOR<RchildCreateInput, RchildUncheckedCreateInput>
    /**
     * In case the Rchild was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RchildUpdateInput, RchildUncheckedUpdateInput>
  }

  /**
   * Rchild delete
   */
  export type RchildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
    /**
     * Filter which Rchild to delete.
     */
    where: RchildWhereUniqueInput
  }

  /**
   * Rchild deleteMany
   */
  export type RchildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rchildren to delete
     */
    where?: RchildWhereInput
    /**
     * Limit how many Rchildren to delete.
     */
    limit?: number
  }

  /**
   * Rchild without action
   */
  export type RchildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rchild
     */
    select?: RchildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rchild
     */
    omit?: RchildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RchildInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    thread_id: number | null
    reply_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    user_id: number
    thread_id: number
    reply_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
    created_at?: true
    updated_at?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
    created_at?: true
    updated_at?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    user_id?: true
    thread_id?: true
    reply_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    user_id: number
    thread_id: number | null
    reply_id: number | null
    created_at: Date
    updated_at: Date
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | Like$threadArgs<ExtArgs>
    reply?: boolean | Like$replyArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | Like$threadArgs<ExtArgs>
    reply?: boolean | Like$replyArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | Like$threadArgs<ExtArgs>
    reply?: boolean | Like$replyArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    user_id?: boolean
    thread_id?: boolean
    reply_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "thread_id" | "reply_id" | "created_at" | "updated_at", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | Like$threadArgs<ExtArgs>
    reply?: boolean | Like$replyArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | Like$threadArgs<ExtArgs>
    reply?: boolean | Like$replyArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    thread?: boolean | Like$threadArgs<ExtArgs>
    reply?: boolean | Like$replyArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      thread: Prisma.$ThreadPayload<ExtArgs> | null
      reply: Prisma.$ReplyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      thread_id: number | null
      reply_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thread<T extends Like$threadArgs<ExtArgs> = {}>(args?: Subset<T, Like$threadArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reply<T extends Like$replyArgs<ExtArgs> = {}>(args?: Subset<T, Like$replyArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'Int'>
    readonly user_id: FieldRef<"Like", 'Int'>
    readonly thread_id: FieldRef<"Like", 'Int'>
    readonly reply_id: FieldRef<"Like", 'Int'>
    readonly created_at: FieldRef<"Like", 'DateTime'>
    readonly updated_at: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like.thread
   */
  export type Like$threadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thread
     */
    omit?: ThreadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
  }

  /**
   * Like.reply
   */
  export type Like$replyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Following
   */

  export type AggregateFollowing = {
    _count: FollowingCountAggregateOutputType | null
    _avg: FollowingAvgAggregateOutputType | null
    _sum: FollowingSumAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  export type FollowingAvgAggregateOutputType = {
    id: number | null
    following_id: number | null
    follower_id: number | null
  }

  export type FollowingSumAggregateOutputType = {
    id: number | null
    following_id: number | null
    follower_id: number | null
  }

  export type FollowingMinAggregateOutputType = {
    id: number | null
    following_id: number | null
    follower_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FollowingMaxAggregateOutputType = {
    id: number | null
    following_id: number | null
    follower_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FollowingCountAggregateOutputType = {
    id: number
    following_id: number
    follower_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FollowingAvgAggregateInputType = {
    id?: true
    following_id?: true
    follower_id?: true
  }

  export type FollowingSumAggregateInputType = {
    id?: true
    following_id?: true
    follower_id?: true
  }

  export type FollowingMinAggregateInputType = {
    id?: true
    following_id?: true
    follower_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FollowingMaxAggregateInputType = {
    id?: true
    following_id?: true
    follower_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FollowingCountAggregateInputType = {
    id?: true
    following_id?: true
    follower_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FollowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Following to aggregate.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followings
    **/
    _count?: true | FollowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowingMaxAggregateInputType
  }

  export type GetFollowingAggregateType<T extends FollowingAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowing[P]>
      : GetScalarType<T[P], AggregateFollowing[P]>
  }




  export type FollowingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowingWhereInput
    orderBy?: FollowingOrderByWithAggregationInput | FollowingOrderByWithAggregationInput[]
    by: FollowingScalarFieldEnum[] | FollowingScalarFieldEnum
    having?: FollowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowingCountAggregateInputType | true
    _avg?: FollowingAvgAggregateInputType
    _sum?: FollowingSumAggregateInputType
    _min?: FollowingMinAggregateInputType
    _max?: FollowingMaxAggregateInputType
  }

  export type FollowingGroupByOutputType = {
    id: number
    following_id: number
    follower_id: number
    created_at: Date
    updated_at: Date
    _count: FollowingCountAggregateOutputType | null
    _avg: FollowingAvgAggregateOutputType | null
    _sum: FollowingSumAggregateOutputType | null
    _min: FollowingMinAggregateOutputType | null
    _max: FollowingMaxAggregateOutputType | null
  }

  type GetFollowingGroupByPayload<T extends FollowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowingGroupByOutputType[P]>
            : GetScalarType<T[P], FollowingGroupByOutputType[P]>
        }
      >
    >


  export type FollowingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    following_id?: boolean
    follower_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    following?: boolean | UserDefaultArgs<ExtArgs>
    follower?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    following_id?: boolean
    follower_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    following?: boolean | UserDefaultArgs<ExtArgs>
    follower?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    following_id?: boolean
    follower_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    following?: boolean | UserDefaultArgs<ExtArgs>
    follower?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["following"]>

  export type FollowingSelectScalar = {
    id?: boolean
    following_id?: boolean
    follower_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FollowingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "following_id" | "follower_id" | "created_at" | "updated_at", ExtArgs["result"]["following"]>
  export type FollowingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UserDefaultArgs<ExtArgs>
    follower?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UserDefaultArgs<ExtArgs>
    follower?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FollowingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    following?: boolean | UserDefaultArgs<ExtArgs>
    follower?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FollowingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Following"
    objects: {
      following: Prisma.$UserPayload<ExtArgs>
      follower: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      following_id: number
      follower_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["following"]>
    composites: {}
  }

  type FollowingGetPayload<S extends boolean | null | undefined | FollowingDefaultArgs> = $Result.GetResult<Prisma.$FollowingPayload, S>

  type FollowingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowingCountAggregateInputType | true
    }

  export interface FollowingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Following'], meta: { name: 'Following' } }
    /**
     * Find zero or one Following that matches the filter.
     * @param {FollowingFindUniqueArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowingFindUniqueArgs>(args: SelectSubset<T, FollowingFindUniqueArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Following that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowingFindUniqueOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowingFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Following that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowingFindFirstArgs>(args?: SelectSubset<T, FollowingFindFirstArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Following that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindFirstOrThrowArgs} args - Arguments to find a Following
     * @example
     * // Get one Following
     * const following = await prisma.following.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowingFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Followings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followings
     * const followings = await prisma.following.findMany()
     * 
     * // Get first 10 Followings
     * const followings = await prisma.following.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followingWithIdOnly = await prisma.following.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowingFindManyArgs>(args?: SelectSubset<T, FollowingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Following.
     * @param {FollowingCreateArgs} args - Arguments to create a Following.
     * @example
     * // Create one Following
     * const Following = await prisma.following.create({
     *   data: {
     *     // ... data to create a Following
     *   }
     * })
     * 
     */
    create<T extends FollowingCreateArgs>(args: SelectSubset<T, FollowingCreateArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Followings.
     * @param {FollowingCreateManyArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowingCreateManyArgs>(args?: SelectSubset<T, FollowingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Followings and returns the data saved in the database.
     * @param {FollowingCreateManyAndReturnArgs} args - Arguments to create many Followings.
     * @example
     * // Create many Followings
     * const following = await prisma.following.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowingCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Following.
     * @param {FollowingDeleteArgs} args - Arguments to delete one Following.
     * @example
     * // Delete one Following
     * const Following = await prisma.following.delete({
     *   where: {
     *     // ... filter to delete one Following
     *   }
     * })
     * 
     */
    delete<T extends FollowingDeleteArgs>(args: SelectSubset<T, FollowingDeleteArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Following.
     * @param {FollowingUpdateArgs} args - Arguments to update one Following.
     * @example
     * // Update one Following
     * const following = await prisma.following.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowingUpdateArgs>(args: SelectSubset<T, FollowingUpdateArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Followings.
     * @param {FollowingDeleteManyArgs} args - Arguments to filter Followings to delete.
     * @example
     * // Delete a few Followings
     * const { count } = await prisma.following.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowingDeleteManyArgs>(args?: SelectSubset<T, FollowingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowingUpdateManyArgs>(args: SelectSubset<T, FollowingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followings and returns the data updated in the database.
     * @param {FollowingUpdateManyAndReturnArgs} args - Arguments to update many Followings.
     * @example
     * // Update many Followings
     * const following = await prisma.following.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Followings and only return the `id`
     * const followingWithIdOnly = await prisma.following.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowingUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Following.
     * @param {FollowingUpsertArgs} args - Arguments to update or create a Following.
     * @example
     * // Update or create a Following
     * const following = await prisma.following.upsert({
     *   create: {
     *     // ... data to create a Following
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Following we want to update
     *   }
     * })
     */
    upsert<T extends FollowingUpsertArgs>(args: SelectSubset<T, FollowingUpsertArgs<ExtArgs>>): Prisma__FollowingClient<$Result.GetResult<Prisma.$FollowingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Followings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingCountArgs} args - Arguments to filter Followings to count.
     * @example
     * // Count the number of Followings
     * const count = await prisma.following.count({
     *   where: {
     *     // ... the filter for the Followings we want to count
     *   }
     * })
    **/
    count<T extends FollowingCountArgs>(
      args?: Subset<T, FollowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowingAggregateArgs>(args: Subset<T, FollowingAggregateArgs>): Prisma.PrismaPromise<GetFollowingAggregateType<T>>

    /**
     * Group by Following.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowingGroupByArgs['orderBy'] }
        : { orderBy?: FollowingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Following model
   */
  readonly fields: FollowingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Following.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Following model
   */
  interface FollowingFieldRefs {
    readonly id: FieldRef<"Following", 'Int'>
    readonly following_id: FieldRef<"Following", 'Int'>
    readonly follower_id: FieldRef<"Following", 'Int'>
    readonly created_at: FieldRef<"Following", 'DateTime'>
    readonly updated_at: FieldRef<"Following", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Following findUnique
   */
  export type FollowingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following findUniqueOrThrow
   */
  export type FollowingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following findFirst
   */
  export type FollowingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * Following findFirstOrThrow
   */
  export type FollowingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Following to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followings.
     */
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * Following findMany
   */
  export type FollowingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter, which Followings to fetch.
     */
    where?: FollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followings to fetch.
     */
    orderBy?: FollowingOrderByWithRelationInput | FollowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followings.
     */
    cursor?: FollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followings.
     */
    skip?: number
    distinct?: FollowingScalarFieldEnum | FollowingScalarFieldEnum[]
  }

  /**
   * Following create
   */
  export type FollowingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The data needed to create a Following.
     */
    data: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
  }

  /**
   * Following createMany
   */
  export type FollowingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followings.
     */
    data: FollowingCreateManyInput | FollowingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Following createManyAndReturn
   */
  export type FollowingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * The data used to create many Followings.
     */
    data: FollowingCreateManyInput | FollowingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Following update
   */
  export type FollowingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The data needed to update a Following.
     */
    data: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
    /**
     * Choose, which Following to update.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following updateMany
   */
  export type FollowingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followings.
     */
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyInput>
    /**
     * Filter which Followings to update
     */
    where?: FollowingWhereInput
    /**
     * Limit how many Followings to update.
     */
    limit?: number
  }

  /**
   * Following updateManyAndReturn
   */
  export type FollowingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * The data used to update Followings.
     */
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyInput>
    /**
     * Filter which Followings to update
     */
    where?: FollowingWhereInput
    /**
     * Limit how many Followings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Following upsert
   */
  export type FollowingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * The filter to search for the Following to update in case it exists.
     */
    where: FollowingWhereUniqueInput
    /**
     * In case the Following found by the `where` argument doesn't exist, create a new Following with this data.
     */
    create: XOR<FollowingCreateInput, FollowingUncheckedCreateInput>
    /**
     * In case the Following was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowingUpdateInput, FollowingUncheckedUpdateInput>
  }

  /**
   * Following delete
   */
  export type FollowingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
    /**
     * Filter which Following to delete.
     */
    where: FollowingWhereUniqueInput
  }

  /**
   * Following deleteMany
   */
  export type FollowingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followings to delete
     */
    where?: FollowingWhereInput
    /**
     * Limit how many Followings to delete.
     */
    limit?: number
  }

  /**
   * Following without action
   */
  export type FollowingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Following
     */
    select?: FollowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Following
     */
    omit?: FollowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    photo_profile: 'photo_profile',
    background: 'background',
    bio: 'bio',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    id: 'id',
    content: 'content',
    image: 'image',
    number_of_replies: 'number_of_replies',
    created_at: 'created_at',
    updated_at: 'updated_at',
    userId: 'userId'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    thread_id: 'thread_id',
    image: 'image',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const RchildScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    thread_id: 'thread_id',
    reply_id: 'reply_id',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RchildScalarFieldEnum = (typeof RchildScalarFieldEnum)[keyof typeof RchildScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    thread_id: 'thread_id',
    reply_id: 'reply_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const FollowingScalarFieldEnum: {
    id: 'id',
    following_id: 'following_id',
    follower_id: 'follower_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FollowingScalarFieldEnum = (typeof FollowingScalarFieldEnum)[keyof typeof FollowingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo_profile?: StringNullableFilter<"User"> | string | null
    background?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    following?: FollowingListRelationFilter
    followers?: FollowingListRelationFilter
    replies?: ReplyListRelationFilter
    threads?: ThreadListRelationFilter
    likes?: LikeListRelationFilter
    rchild?: RchildListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo_profile?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    following?: FollowingOrderByRelationAggregateInput
    followers?: FollowingOrderByRelationAggregateInput
    replies?: ReplyOrderByRelationAggregateInput
    threads?: ThreadOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    rchild?: RchildOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    photo_profile?: StringNullableFilter<"User"> | string | null
    background?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    following?: FollowingListRelationFilter
    followers?: FollowingListRelationFilter
    replies?: ReplyListRelationFilter
    threads?: ThreadListRelationFilter
    likes?: LikeListRelationFilter
    rchild?: RchildListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo_profile?: SortOrderInput | SortOrder
    background?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    photo_profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    background?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ThreadWhereInput = {
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    id?: IntFilter<"Thread"> | number
    content?: StringFilter<"Thread"> | string
    image?: StringNullableFilter<"Thread"> | string | null
    number_of_replies?: IntFilter<"Thread"> | number
    created_at?: DateTimeFilter<"Thread"> | Date | string
    updated_at?: DateTimeFilter<"Thread"> | Date | string
    userId?: IntNullableFilter<"Thread"> | number | null
    replies?: ReplyListRelationFilter
    likes?: LikeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rchild?: RchildListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    number_of_replies?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrderInput | SortOrder
    replies?: ReplyOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    rchild?: RchildOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    content?: StringFilter<"Thread"> | string
    image?: StringNullableFilter<"Thread"> | string | null
    number_of_replies?: IntFilter<"Thread"> | number
    created_at?: DateTimeFilter<"Thread"> | Date | string
    updated_at?: DateTimeFilter<"Thread"> | Date | string
    userId?: IntNullableFilter<"Thread"> | number | null
    replies?: ReplyListRelationFilter
    likes?: LikeListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rchild?: RchildListRelationFilter
  }, "id">

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    number_of_replies?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _avg?: ThreadAvgOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
    _sum?: ThreadSumOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    OR?: ThreadScalarWhereWithAggregatesInput[]
    NOT?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thread"> | number
    content?: StringWithAggregatesFilter<"Thread"> | string
    image?: StringNullableWithAggregatesFilter<"Thread"> | string | null
    number_of_replies?: IntWithAggregatesFilter<"Thread"> | number
    created_at?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Thread"> | number | null
  }

  export type ReplyWhereInput = {
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    id?: IntFilter<"Reply"> | number
    user_id?: IntFilter<"Reply"> | number
    thread_id?: IntFilter<"Reply"> | number
    image?: StringNullableFilter<"Reply"> | string | null
    content?: StringFilter<"Reply"> | string
    created_at?: DateTimeFilter<"Reply"> | Date | string
    updated_at?: DateTimeFilter<"Reply"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    Like?: LikeListRelationFilter
    rchild?: RchildListRelationFilter
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    image?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    thread?: ThreadOrderByWithRelationInput
    Like?: LikeOrderByRelationAggregateInput
    rchild?: RchildOrderByRelationAggregateInput
  }

  export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    user_id?: IntFilter<"Reply"> | number
    thread_id?: IntFilter<"Reply"> | number
    image?: StringNullableFilter<"Reply"> | string | null
    content?: StringFilter<"Reply"> | string
    created_at?: DateTimeFilter<"Reply"> | Date | string
    updated_at?: DateTimeFilter<"Reply"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    Like?: LikeListRelationFilter
    rchild?: RchildListRelationFilter
  }, "id">

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    image?: SortOrderInput | SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _avg?: ReplyAvgOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
    _sum?: ReplySumOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    OR?: ReplyScalarWhereWithAggregatesInput[]
    NOT?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reply"> | number
    user_id?: IntWithAggregatesFilter<"Reply"> | number
    thread_id?: IntWithAggregatesFilter<"Reply"> | number
    image?: StringNullableWithAggregatesFilter<"Reply"> | string | null
    content?: StringWithAggregatesFilter<"Reply"> | string
    created_at?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
  }

  export type RchildWhereInput = {
    AND?: RchildWhereInput | RchildWhereInput[]
    OR?: RchildWhereInput[]
    NOT?: RchildWhereInput | RchildWhereInput[]
    id?: IntFilter<"Rchild"> | number
    user_id?: IntFilter<"Rchild"> | number
    thread_id?: IntFilter<"Rchild"> | number
    reply_id?: IntFilter<"Rchild"> | number
    content?: StringFilter<"Rchild"> | string
    created_at?: DateTimeFilter<"Rchild"> | Date | string
    updated_at?: DateTimeFilter<"Rchild"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    reply?: XOR<ReplyScalarRelationFilter, ReplyWhereInput>
  }

  export type RchildOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    thread?: ThreadOrderByWithRelationInput
    reply?: ReplyOrderByWithRelationInput
  }

  export type RchildWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RchildWhereInput | RchildWhereInput[]
    OR?: RchildWhereInput[]
    NOT?: RchildWhereInput | RchildWhereInput[]
    user_id?: IntFilter<"Rchild"> | number
    thread_id?: IntFilter<"Rchild"> | number
    reply_id?: IntFilter<"Rchild"> | number
    content?: StringFilter<"Rchild"> | string
    created_at?: DateTimeFilter<"Rchild"> | Date | string
    updated_at?: DateTimeFilter<"Rchild"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ThreadScalarRelationFilter, ThreadWhereInput>
    reply?: XOR<ReplyScalarRelationFilter, ReplyWhereInput>
  }, "id">

  export type RchildOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RchildCountOrderByAggregateInput
    _avg?: RchildAvgOrderByAggregateInput
    _max?: RchildMaxOrderByAggregateInput
    _min?: RchildMinOrderByAggregateInput
    _sum?: RchildSumOrderByAggregateInput
  }

  export type RchildScalarWhereWithAggregatesInput = {
    AND?: RchildScalarWhereWithAggregatesInput | RchildScalarWhereWithAggregatesInput[]
    OR?: RchildScalarWhereWithAggregatesInput[]
    NOT?: RchildScalarWhereWithAggregatesInput | RchildScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rchild"> | number
    user_id?: IntWithAggregatesFilter<"Rchild"> | number
    thread_id?: IntWithAggregatesFilter<"Rchild"> | number
    reply_id?: IntWithAggregatesFilter<"Rchild"> | number
    content?: StringWithAggregatesFilter<"Rchild"> | string
    created_at?: DateTimeWithAggregatesFilter<"Rchild"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Rchild"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: IntFilter<"Like"> | number
    user_id?: IntFilter<"Like"> | number
    thread_id?: IntNullableFilter<"Like"> | number | null
    reply_id?: IntNullableFilter<"Like"> | number | null
    created_at?: DateTimeFilter<"Like"> | Date | string
    updated_at?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ThreadNullableScalarRelationFilter, ThreadWhereInput> | null
    reply?: XOR<ReplyNullableScalarRelationFilter, ReplyWhereInput> | null
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrderInput | SortOrder
    reply_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    thread?: ThreadOrderByWithRelationInput
    reply?: ReplyOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    user_id?: IntFilter<"Like"> | number
    thread_id?: IntNullableFilter<"Like"> | number | null
    reply_id?: IntNullableFilter<"Like"> | number | null
    created_at?: DateTimeFilter<"Like"> | Date | string
    updated_at?: DateTimeFilter<"Like"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    thread?: XOR<ThreadNullableScalarRelationFilter, ThreadWhereInput> | null
    reply?: XOR<ReplyNullableScalarRelationFilter, ReplyWhereInput> | null
  }, "id">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrderInput | SortOrder
    reply_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Like"> | number
    user_id?: IntWithAggregatesFilter<"Like"> | number
    thread_id?: IntNullableWithAggregatesFilter<"Like"> | number | null
    reply_id?: IntNullableWithAggregatesFilter<"Like"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type FollowingWhereInput = {
    AND?: FollowingWhereInput | FollowingWhereInput[]
    OR?: FollowingWhereInput[]
    NOT?: FollowingWhereInput | FollowingWhereInput[]
    id?: IntFilter<"Following"> | number
    following_id?: IntFilter<"Following"> | number
    follower_id?: IntFilter<"Following"> | number
    created_at?: DateTimeFilter<"Following"> | Date | string
    updated_at?: DateTimeFilter<"Following"> | Date | string
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FollowingOrderByWithRelationInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    following?: UserOrderByWithRelationInput
    follower?: UserOrderByWithRelationInput
  }

  export type FollowingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowingWhereInput | FollowingWhereInput[]
    OR?: FollowingWhereInput[]
    NOT?: FollowingWhereInput | FollowingWhereInput[]
    following_id?: IntFilter<"Following"> | number
    follower_id?: IntFilter<"Following"> | number
    created_at?: DateTimeFilter<"Following"> | Date | string
    updated_at?: DateTimeFilter<"Following"> | Date | string
    following?: XOR<UserScalarRelationFilter, UserWhereInput>
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FollowingOrderByWithAggregationInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FollowingCountOrderByAggregateInput
    _avg?: FollowingAvgOrderByAggregateInput
    _max?: FollowingMaxOrderByAggregateInput
    _min?: FollowingMinOrderByAggregateInput
    _sum?: FollowingSumOrderByAggregateInput
  }

  export type FollowingScalarWhereWithAggregatesInput = {
    AND?: FollowingScalarWhereWithAggregatesInput | FollowingScalarWhereWithAggregatesInput[]
    OR?: FollowingScalarWhereWithAggregatesInput[]
    NOT?: FollowingScalarWhereWithAggregatesInput | FollowingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Following"> | number
    following_id?: IntWithAggregatesFilter<"Following"> | number
    follower_id?: IntWithAggregatesFilter<"Following"> | number
    created_at?: DateTimeWithAggregatesFilter<"Following"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Following"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingCreateNestedManyWithoutFollowingInput
    followers?: FollowingCreateNestedManyWithoutFollowerInput
    replies?: ReplyCreateNestedManyWithoutUserInput
    threads?: ThreadCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rchild?: RchildCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingUncheckedCreateNestedManyWithoutFollowingInput
    followers?: FollowingUncheckedCreateNestedManyWithoutFollowerInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
    threads?: ThreadUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rchild?: RchildUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
    threads?: ThreadUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rchild?: RchildUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUncheckedUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUncheckedUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadCreateInput = {
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReplyCreateNestedManyWithoutThreadInput
    likes?: LikeCreateNestedManyWithoutThreadInput
    user?: UserCreateNestedOneWithoutThreadsInput
    rchild?: RchildCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    userId?: number | null
    replies?: ReplyUncheckedCreateNestedManyWithoutThreadInput
    likes?: LikeUncheckedCreateNestedManyWithoutThreadInput
    rchild?: RchildUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutThreadNestedInput
    likes?: LikeUpdateManyWithoutThreadNestedInput
    user?: UserUpdateOneWithoutThreadsNestedInput
    rchild?: RchildUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: ReplyUncheckedUpdateManyWithoutThreadNestedInput
    likes?: LikeUncheckedUpdateManyWithoutThreadNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadCreateManyInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    userId?: number | null
  }

  export type ThreadUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReplyCreateInput = {
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRepliesInput
    thread: ThreadCreateNestedOneWithoutRepliesInput
    Like?: LikeCreateNestedManyWithoutReplyInput
    rchild?: RchildCreateNestedManyWithoutReplyInput
  }

  export type ReplyUncheckedCreateInput = {
    id?: number
    user_id: number
    thread_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    Like?: LikeUncheckedCreateNestedManyWithoutReplyInput
    rchild?: RchildUncheckedCreateNestedManyWithoutReplyInput
  }

  export type ReplyUpdateInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    thread?: ThreadUpdateOneRequiredWithoutRepliesNestedInput
    Like?: LikeUpdateManyWithoutReplyNestedInput
    rchild?: RchildUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Like?: LikeUncheckedUpdateManyWithoutReplyNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutReplyNestedInput
  }

  export type ReplyCreateManyInput = {
    id?: number
    user_id: number
    thread_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReplyUpdateManyMutationInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildCreateInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRchildInput
    thread: ThreadCreateNestedOneWithoutRchildInput
    reply: ReplyCreateNestedOneWithoutRchildInput
  }

  export type RchildUncheckedCreateInput = {
    id?: number
    user_id: number
    thread_id: number
    reply_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRchildNestedInput
    thread?: ThreadUpdateOneRequiredWithoutRchildNestedInput
    reply?: ReplyUpdateOneRequiredWithoutRchildNestedInput
  }

  export type RchildUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    reply_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildCreateManyInput = {
    id?: number
    user_id: number
    thread_id: number
    reply_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    reply_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    thread?: ThreadCreateNestedOneWithoutLikesInput
    reply?: ReplyCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    user_id: number
    thread_id?: number | null
    reply_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    thread?: ThreadUpdateOneWithoutLikesNestedInput
    reply?: ReplyUpdateOneWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: NullableIntFieldUpdateOperationsInput | number | null
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: number
    user_id: number
    thread_id?: number | null
    reply_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: NullableIntFieldUpdateOperationsInput | number | null
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    following: UserCreateNestedOneWithoutFollowingInput
    follower: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowingUncheckedCreateInput = {
    id?: number
    following_id: number
    follower_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowingUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingCreateManyInput = {
    id?: number
    following_id: number
    follower_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowingUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FollowingListRelationFilter = {
    every?: FollowingWhereInput
    some?: FollowingWhereInput
    none?: FollowingWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type RchildListRelationFilter = {
    every?: RchildWhereInput
    some?: RchildWhereInput
    none?: RchildWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FollowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RchildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo_profile?: SortOrder
    background?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo_profile?: SortOrder
    background?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    photo_profile?: SortOrder
    background?: SortOrder
    bio?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    image?: SortOrder
    number_of_replies?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
  }

  export type ThreadAvgOrderByAggregateInput = {
    id?: SortOrder
    number_of_replies?: SortOrder
    userId?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    image?: SortOrder
    number_of_replies?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    image?: SortOrder
    number_of_replies?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userId?: SortOrder
  }

  export type ThreadSumOrderByAggregateInput = {
    id?: SortOrder
    number_of_replies?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ThreadScalarRelationFilter = {
    is?: ThreadWhereInput
    isNot?: ThreadWhereInput
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    image?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    image?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    image?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReplySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
  }

  export type ReplyScalarRelationFilter = {
    is?: ReplyWhereInput
    isNot?: ReplyWhereInput
  }

  export type RchildCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RchildAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
  }

  export type RchildMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RchildMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RchildSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
  }

  export type ThreadNullableScalarRelationFilter = {
    is?: ThreadWhereInput | null
    isNot?: ThreadWhereInput | null
  }

  export type ReplyNullableScalarRelationFilter = {
    is?: ReplyWhereInput | null
    isNot?: ReplyWhereInput | null
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    thread_id?: SortOrder
    reply_id?: SortOrder
  }

  export type FollowingCountOrderByAggregateInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FollowingAvgOrderByAggregateInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
  }

  export type FollowingMaxOrderByAggregateInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FollowingMinOrderByAggregateInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FollowingSumOrderByAggregateInput = {
    id?: SortOrder
    following_id?: SortOrder
    follower_id?: SortOrder
  }

  export type FollowingCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowingCreateWithoutFollowingInput, FollowingUncheckedCreateWithoutFollowingInput> | FollowingCreateWithoutFollowingInput[] | FollowingUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowingInput | FollowingCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowingCreateManyFollowingInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type FollowingCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowingCreateWithoutFollowerInput, FollowingUncheckedCreateWithoutFollowerInput> | FollowingCreateWithoutFollowerInput[] | FollowingUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowerInput | FollowingCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowingCreateManyFollowerInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type ReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ThreadCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RchildCreateNestedManyWithoutUserInput = {
    create?: XOR<RchildCreateWithoutUserInput, RchildUncheckedCreateWithoutUserInput> | RchildCreateWithoutUserInput[] | RchildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutUserInput | RchildCreateOrConnectWithoutUserInput[]
    createMany?: RchildCreateManyUserInputEnvelope
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
  }

  export type FollowingUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowingCreateWithoutFollowingInput, FollowingUncheckedCreateWithoutFollowingInput> | FollowingCreateWithoutFollowingInput[] | FollowingUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowingInput | FollowingCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowingCreateManyFollowingInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type FollowingUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowingCreateWithoutFollowerInput, FollowingUncheckedCreateWithoutFollowerInput> | FollowingCreateWithoutFollowerInput[] | FollowingUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowerInput | FollowingCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowingCreateManyFollowerInputEnvelope
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RchildUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RchildCreateWithoutUserInput, RchildUncheckedCreateWithoutUserInput> | RchildCreateWithoutUserInput[] | RchildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutUserInput | RchildCreateOrConnectWithoutUserInput[]
    createMany?: RchildCreateManyUserInputEnvelope
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FollowingUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowingCreateWithoutFollowingInput, FollowingUncheckedCreateWithoutFollowingInput> | FollowingCreateWithoutFollowingInput[] | FollowingUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowingInput | FollowingCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutFollowingInput | FollowingUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowingCreateManyFollowingInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutFollowingInput | FollowingUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutFollowingInput | FollowingUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type FollowingUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowingCreateWithoutFollowerInput, FollowingUncheckedCreateWithoutFollowerInput> | FollowingCreateWithoutFollowerInput[] | FollowingUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowerInput | FollowingCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutFollowerInput | FollowingUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowingCreateManyFollowerInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutFollowerInput | FollowingUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutFollowerInput | FollowingUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type ReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutUserInput | ReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutUserInput | ReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutUserInput | ReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ThreadUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutUserInput | ThreadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutUserInput | ThreadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutUserInput | ThreadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RchildUpdateManyWithoutUserNestedInput = {
    create?: XOR<RchildCreateWithoutUserInput, RchildUncheckedCreateWithoutUserInput> | RchildCreateWithoutUserInput[] | RchildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutUserInput | RchildCreateOrConnectWithoutUserInput[]
    upsert?: RchildUpsertWithWhereUniqueWithoutUserInput | RchildUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RchildCreateManyUserInputEnvelope
    set?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    disconnect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    delete?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    update?: RchildUpdateWithWhereUniqueWithoutUserInput | RchildUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RchildUpdateManyWithWhereWithoutUserInput | RchildUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RchildScalarWhereInput | RchildScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FollowingUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowingCreateWithoutFollowingInput, FollowingUncheckedCreateWithoutFollowingInput> | FollowingCreateWithoutFollowingInput[] | FollowingUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowingInput | FollowingCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutFollowingInput | FollowingUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowingCreateManyFollowingInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutFollowingInput | FollowingUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutFollowingInput | FollowingUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type FollowingUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowingCreateWithoutFollowerInput, FollowingUncheckedCreateWithoutFollowerInput> | FollowingCreateWithoutFollowerInput[] | FollowingUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowingCreateOrConnectWithoutFollowerInput | FollowingCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowingUpsertWithWhereUniqueWithoutFollowerInput | FollowingUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowingCreateManyFollowerInputEnvelope
    set?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    disconnect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    delete?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    connect?: FollowingWhereUniqueInput | FollowingWhereUniqueInput[]
    update?: FollowingUpdateWithWhereUniqueWithoutFollowerInput | FollowingUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowingUpdateManyWithWhereWithoutFollowerInput | FollowingUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutUserInput | ReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutUserInput | ReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutUserInput | ReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput> | ThreadCreateWithoutUserInput[] | ThreadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutUserInput | ThreadCreateOrConnectWithoutUserInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutUserInput | ThreadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ThreadCreateManyUserInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutUserInput | ThreadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutUserInput | ThreadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RchildUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RchildCreateWithoutUserInput, RchildUncheckedCreateWithoutUserInput> | RchildCreateWithoutUserInput[] | RchildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutUserInput | RchildCreateOrConnectWithoutUserInput[]
    upsert?: RchildUpsertWithWhereUniqueWithoutUserInput | RchildUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RchildCreateManyUserInputEnvelope
    set?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    disconnect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    delete?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    update?: RchildUpdateWithWhereUniqueWithoutUserInput | RchildUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RchildUpdateManyWithWhereWithoutUserInput | RchildUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RchildScalarWhereInput | RchildScalarWhereInput[]
  }

  export type ReplyCreateNestedManyWithoutThreadInput = {
    create?: XOR<ReplyCreateWithoutThreadInput, ReplyUncheckedCreateWithoutThreadInput> | ReplyCreateWithoutThreadInput[] | ReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutThreadInput | ReplyCreateOrConnectWithoutThreadInput[]
    createMany?: ReplyCreateManyThreadInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutThreadInput = {
    create?: XOR<LikeCreateWithoutThreadInput, LikeUncheckedCreateWithoutThreadInput> | LikeCreateWithoutThreadInput[] | LikeUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutThreadInput | LikeCreateOrConnectWithoutThreadInput[]
    createMany?: LikeCreateManyThreadInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutThreadsInput = {
    create?: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput
    connect?: UserWhereUniqueInput
  }

  export type RchildCreateNestedManyWithoutThreadInput = {
    create?: XOR<RchildCreateWithoutThreadInput, RchildUncheckedCreateWithoutThreadInput> | RchildCreateWithoutThreadInput[] | RchildUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutThreadInput | RchildCreateOrConnectWithoutThreadInput[]
    createMany?: RchildCreateManyThreadInputEnvelope
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<ReplyCreateWithoutThreadInput, ReplyUncheckedCreateWithoutThreadInput> | ReplyCreateWithoutThreadInput[] | ReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutThreadInput | ReplyCreateOrConnectWithoutThreadInput[]
    createMany?: ReplyCreateManyThreadInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<LikeCreateWithoutThreadInput, LikeUncheckedCreateWithoutThreadInput> | LikeCreateWithoutThreadInput[] | LikeUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutThreadInput | LikeCreateOrConnectWithoutThreadInput[]
    createMany?: LikeCreateManyThreadInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RchildUncheckedCreateNestedManyWithoutThreadInput = {
    create?: XOR<RchildCreateWithoutThreadInput, RchildUncheckedCreateWithoutThreadInput> | RchildCreateWithoutThreadInput[] | RchildUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutThreadInput | RchildCreateOrConnectWithoutThreadInput[]
    createMany?: RchildCreateManyThreadInputEnvelope
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
  }

  export type ReplyUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ReplyCreateWithoutThreadInput, ReplyUncheckedCreateWithoutThreadInput> | ReplyCreateWithoutThreadInput[] | ReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutThreadInput | ReplyCreateOrConnectWithoutThreadInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutThreadInput | ReplyUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ReplyCreateManyThreadInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutThreadInput | ReplyUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutThreadInput | ReplyUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutThreadNestedInput = {
    create?: XOR<LikeCreateWithoutThreadInput, LikeUncheckedCreateWithoutThreadInput> | LikeCreateWithoutThreadInput[] | LikeUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutThreadInput | LikeCreateOrConnectWithoutThreadInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutThreadInput | LikeUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: LikeCreateManyThreadInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutThreadInput | LikeUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutThreadInput | LikeUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type UserUpdateOneWithoutThreadsNestedInput = {
    create?: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadsInput
    upsert?: UserUpsertWithoutThreadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadsInput, UserUpdateWithoutThreadsInput>, UserUncheckedUpdateWithoutThreadsInput>
  }

  export type RchildUpdateManyWithoutThreadNestedInput = {
    create?: XOR<RchildCreateWithoutThreadInput, RchildUncheckedCreateWithoutThreadInput> | RchildCreateWithoutThreadInput[] | RchildUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutThreadInput | RchildCreateOrConnectWithoutThreadInput[]
    upsert?: RchildUpsertWithWhereUniqueWithoutThreadInput | RchildUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: RchildCreateManyThreadInputEnvelope
    set?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    disconnect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    delete?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    update?: RchildUpdateWithWhereUniqueWithoutThreadInput | RchildUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: RchildUpdateManyWithWhereWithoutThreadInput | RchildUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: RchildScalarWhereInput | RchildScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReplyUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<ReplyCreateWithoutThreadInput, ReplyUncheckedCreateWithoutThreadInput> | ReplyCreateWithoutThreadInput[] | ReplyUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutThreadInput | ReplyCreateOrConnectWithoutThreadInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutThreadInput | ReplyUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: ReplyCreateManyThreadInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutThreadInput | ReplyUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutThreadInput | ReplyUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<LikeCreateWithoutThreadInput, LikeUncheckedCreateWithoutThreadInput> | LikeCreateWithoutThreadInput[] | LikeUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutThreadInput | LikeCreateOrConnectWithoutThreadInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutThreadInput | LikeUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: LikeCreateManyThreadInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutThreadInput | LikeUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutThreadInput | LikeUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RchildUncheckedUpdateManyWithoutThreadNestedInput = {
    create?: XOR<RchildCreateWithoutThreadInput, RchildUncheckedCreateWithoutThreadInput> | RchildCreateWithoutThreadInput[] | RchildUncheckedCreateWithoutThreadInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutThreadInput | RchildCreateOrConnectWithoutThreadInput[]
    upsert?: RchildUpsertWithWhereUniqueWithoutThreadInput | RchildUpsertWithWhereUniqueWithoutThreadInput[]
    createMany?: RchildCreateManyThreadInputEnvelope
    set?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    disconnect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    delete?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    update?: RchildUpdateWithWhereUniqueWithoutThreadInput | RchildUpdateWithWhereUniqueWithoutThreadInput[]
    updateMany?: RchildUpdateManyWithWhereWithoutThreadInput | RchildUpdateManyWithWhereWithoutThreadInput[]
    deleteMany?: RchildScalarWhereInput | RchildScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRepliesInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutRepliesInput
    connect?: ThreadWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutReplyInput = {
    create?: XOR<LikeCreateWithoutReplyInput, LikeUncheckedCreateWithoutReplyInput> | LikeCreateWithoutReplyInput[] | LikeUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutReplyInput | LikeCreateOrConnectWithoutReplyInput[]
    createMany?: LikeCreateManyReplyInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RchildCreateNestedManyWithoutReplyInput = {
    create?: XOR<RchildCreateWithoutReplyInput, RchildUncheckedCreateWithoutReplyInput> | RchildCreateWithoutReplyInput[] | RchildUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutReplyInput | RchildCreateOrConnectWithoutReplyInput[]
    createMany?: RchildCreateManyReplyInputEnvelope
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutReplyInput = {
    create?: XOR<LikeCreateWithoutReplyInput, LikeUncheckedCreateWithoutReplyInput> | LikeCreateWithoutReplyInput[] | LikeUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutReplyInput | LikeCreateOrConnectWithoutReplyInput[]
    createMany?: LikeCreateManyReplyInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type RchildUncheckedCreateNestedManyWithoutReplyInput = {
    create?: XOR<RchildCreateWithoutReplyInput, RchildUncheckedCreateWithoutReplyInput> | RchildCreateWithoutReplyInput[] | RchildUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutReplyInput | RchildCreateOrConnectWithoutReplyInput[]
    createMany?: RchildCreateManyReplyInputEnvelope
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    upsert?: UserUpsertWithoutRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepliesInput, UserUpdateWithoutRepliesInput>, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type ThreadUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutRepliesInput
    upsert?: ThreadUpsertWithoutRepliesInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutRepliesInput, ThreadUpdateWithoutRepliesInput>, ThreadUncheckedUpdateWithoutRepliesInput>
  }

  export type LikeUpdateManyWithoutReplyNestedInput = {
    create?: XOR<LikeCreateWithoutReplyInput, LikeUncheckedCreateWithoutReplyInput> | LikeCreateWithoutReplyInput[] | LikeUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutReplyInput | LikeCreateOrConnectWithoutReplyInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutReplyInput | LikeUpsertWithWhereUniqueWithoutReplyInput[]
    createMany?: LikeCreateManyReplyInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutReplyInput | LikeUpdateWithWhereUniqueWithoutReplyInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutReplyInput | LikeUpdateManyWithWhereWithoutReplyInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RchildUpdateManyWithoutReplyNestedInput = {
    create?: XOR<RchildCreateWithoutReplyInput, RchildUncheckedCreateWithoutReplyInput> | RchildCreateWithoutReplyInput[] | RchildUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutReplyInput | RchildCreateOrConnectWithoutReplyInput[]
    upsert?: RchildUpsertWithWhereUniqueWithoutReplyInput | RchildUpsertWithWhereUniqueWithoutReplyInput[]
    createMany?: RchildCreateManyReplyInputEnvelope
    set?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    disconnect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    delete?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    update?: RchildUpdateWithWhereUniqueWithoutReplyInput | RchildUpdateWithWhereUniqueWithoutReplyInput[]
    updateMany?: RchildUpdateManyWithWhereWithoutReplyInput | RchildUpdateManyWithWhereWithoutReplyInput[]
    deleteMany?: RchildScalarWhereInput | RchildScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutReplyNestedInput = {
    create?: XOR<LikeCreateWithoutReplyInput, LikeUncheckedCreateWithoutReplyInput> | LikeCreateWithoutReplyInput[] | LikeUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutReplyInput | LikeCreateOrConnectWithoutReplyInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutReplyInput | LikeUpsertWithWhereUniqueWithoutReplyInput[]
    createMany?: LikeCreateManyReplyInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutReplyInput | LikeUpdateWithWhereUniqueWithoutReplyInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutReplyInput | LikeUpdateManyWithWhereWithoutReplyInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type RchildUncheckedUpdateManyWithoutReplyNestedInput = {
    create?: XOR<RchildCreateWithoutReplyInput, RchildUncheckedCreateWithoutReplyInput> | RchildCreateWithoutReplyInput[] | RchildUncheckedCreateWithoutReplyInput[]
    connectOrCreate?: RchildCreateOrConnectWithoutReplyInput | RchildCreateOrConnectWithoutReplyInput[]
    upsert?: RchildUpsertWithWhereUniqueWithoutReplyInput | RchildUpsertWithWhereUniqueWithoutReplyInput[]
    createMany?: RchildCreateManyReplyInputEnvelope
    set?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    disconnect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    delete?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    connect?: RchildWhereUniqueInput | RchildWhereUniqueInput[]
    update?: RchildUpdateWithWhereUniqueWithoutReplyInput | RchildUpdateWithWhereUniqueWithoutReplyInput[]
    updateMany?: RchildUpdateManyWithWhereWithoutReplyInput | RchildUpdateManyWithWhereWithoutReplyInput[]
    deleteMany?: RchildScalarWhereInput | RchildScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRchildInput = {
    create?: XOR<UserCreateWithoutRchildInput, UserUncheckedCreateWithoutRchildInput>
    connectOrCreate?: UserCreateOrConnectWithoutRchildInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutRchildInput = {
    create?: XOR<ThreadCreateWithoutRchildInput, ThreadUncheckedCreateWithoutRchildInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutRchildInput
    connect?: ThreadWhereUniqueInput
  }

  export type ReplyCreateNestedOneWithoutRchildInput = {
    create?: XOR<ReplyCreateWithoutRchildInput, ReplyUncheckedCreateWithoutRchildInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutRchildInput
    connect?: ReplyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRchildNestedInput = {
    create?: XOR<UserCreateWithoutRchildInput, UserUncheckedCreateWithoutRchildInput>
    connectOrCreate?: UserCreateOrConnectWithoutRchildInput
    upsert?: UserUpsertWithoutRchildInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRchildInput, UserUpdateWithoutRchildInput>, UserUncheckedUpdateWithoutRchildInput>
  }

  export type ThreadUpdateOneRequiredWithoutRchildNestedInput = {
    create?: XOR<ThreadCreateWithoutRchildInput, ThreadUncheckedCreateWithoutRchildInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutRchildInput
    upsert?: ThreadUpsertWithoutRchildInput
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutRchildInput, ThreadUpdateWithoutRchildInput>, ThreadUncheckedUpdateWithoutRchildInput>
  }

  export type ReplyUpdateOneRequiredWithoutRchildNestedInput = {
    create?: XOR<ReplyCreateWithoutRchildInput, ReplyUncheckedCreateWithoutRchildInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutRchildInput
    upsert?: ReplyUpsertWithoutRchildInput
    connect?: ReplyWhereUniqueInput
    update?: XOR<XOR<ReplyUpdateToOneWithWhereWithoutRchildInput, ReplyUpdateWithoutRchildInput>, ReplyUncheckedUpdateWithoutRchildInput>
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutLikesInput = {
    create?: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutLikesInput
    connect?: ThreadWhereUniqueInput
  }

  export type ReplyCreateNestedOneWithoutLikeInput = {
    create?: XOR<ReplyCreateWithoutLikeInput, ReplyUncheckedCreateWithoutLikeInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutLikeInput
    connect?: ReplyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type ThreadUpdateOneWithoutLikesNestedInput = {
    create?: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutLikesInput
    upsert?: ThreadUpsertWithoutLikesInput
    disconnect?: ThreadWhereInput | boolean
    delete?: ThreadWhereInput | boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutLikesInput, ThreadUpdateWithoutLikesInput>, ThreadUncheckedUpdateWithoutLikesInput>
  }

  export type ReplyUpdateOneWithoutLikeNestedInput = {
    create?: XOR<ReplyCreateWithoutLikeInput, ReplyUncheckedCreateWithoutLikeInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutLikeInput
    upsert?: ReplyUpsertWithoutLikeInput
    disconnect?: ReplyWhereInput | boolean
    delete?: ReplyWhereInput | boolean
    connect?: ReplyWhereUniqueInput
    update?: XOR<XOR<ReplyUpdateToOneWithWhereWithoutLikeInput, ReplyUpdateWithoutLikeInput>, ReplyUncheckedUpdateWithoutLikeInput>
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput
    upsert?: UserUpsertWithoutFollowingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput
    upsert?: UserUpsertWithoutFollowersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FollowingCreateWithoutFollowingInput = {
    created_at?: Date | string
    updated_at?: Date | string
    follower: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowingUncheckedCreateWithoutFollowingInput = {
    id?: number
    follower_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowingCreateOrConnectWithoutFollowingInput = {
    where: FollowingWhereUniqueInput
    create: XOR<FollowingCreateWithoutFollowingInput, FollowingUncheckedCreateWithoutFollowingInput>
  }

  export type FollowingCreateManyFollowingInputEnvelope = {
    data: FollowingCreateManyFollowingInput | FollowingCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type FollowingCreateWithoutFollowerInput = {
    created_at?: Date | string
    updated_at?: Date | string
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowingUncheckedCreateWithoutFollowerInput = {
    id?: number
    following_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowingCreateOrConnectWithoutFollowerInput = {
    where: FollowingWhereUniqueInput
    create: XOR<FollowingCreateWithoutFollowerInput, FollowingUncheckedCreateWithoutFollowerInput>
  }

  export type FollowingCreateManyFollowerInputEnvelope = {
    data: FollowingCreateManyFollowerInput | FollowingCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutUserInput = {
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    thread: ThreadCreateNestedOneWithoutRepliesInput
    Like?: LikeCreateNestedManyWithoutReplyInput
    rchild?: RchildCreateNestedManyWithoutReplyInput
  }

  export type ReplyUncheckedCreateWithoutUserInput = {
    id?: number
    thread_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    Like?: LikeUncheckedCreateNestedManyWithoutReplyInput
    rchild?: RchildUncheckedCreateNestedManyWithoutReplyInput
  }

  export type ReplyCreateOrConnectWithoutUserInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput>
  }

  export type ReplyCreateManyUserInputEnvelope = {
    data: ReplyCreateManyUserInput | ReplyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ThreadCreateWithoutUserInput = {
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReplyCreateNestedManyWithoutThreadInput
    likes?: LikeCreateNestedManyWithoutThreadInput
    rchild?: RchildCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutThreadInput
    likes?: LikeUncheckedCreateNestedManyWithoutThreadInput
    rchild?: RchildUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutUserInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
  }

  export type ThreadCreateManyUserInputEnvelope = {
    data: ThreadCreateManyUserInput | ThreadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    thread?: ThreadCreateNestedOneWithoutLikesInput
    reply?: ReplyCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: number
    thread_id?: number | null
    reply_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RchildCreateWithoutUserInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    thread: ThreadCreateNestedOneWithoutRchildInput
    reply: ReplyCreateNestedOneWithoutRchildInput
  }

  export type RchildUncheckedCreateWithoutUserInput = {
    id?: number
    thread_id: number
    reply_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildCreateOrConnectWithoutUserInput = {
    where: RchildWhereUniqueInput
    create: XOR<RchildCreateWithoutUserInput, RchildUncheckedCreateWithoutUserInput>
  }

  export type RchildCreateManyUserInputEnvelope = {
    data: RchildCreateManyUserInput | RchildCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowingUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowingWhereUniqueInput
    update: XOR<FollowingUpdateWithoutFollowingInput, FollowingUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowingCreateWithoutFollowingInput, FollowingUncheckedCreateWithoutFollowingInput>
  }

  export type FollowingUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowingWhereUniqueInput
    data: XOR<FollowingUpdateWithoutFollowingInput, FollowingUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowingUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowingScalarWhereInput
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyWithoutFollowingInput>
  }

  export type FollowingScalarWhereInput = {
    AND?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
    OR?: FollowingScalarWhereInput[]
    NOT?: FollowingScalarWhereInput | FollowingScalarWhereInput[]
    id?: IntFilter<"Following"> | number
    following_id?: IntFilter<"Following"> | number
    follower_id?: IntFilter<"Following"> | number
    created_at?: DateTimeFilter<"Following"> | Date | string
    updated_at?: DateTimeFilter<"Following"> | Date | string
  }

  export type FollowingUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowingWhereUniqueInput
    update: XOR<FollowingUpdateWithoutFollowerInput, FollowingUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowingCreateWithoutFollowerInput, FollowingUncheckedCreateWithoutFollowerInput>
  }

  export type FollowingUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowingWhereUniqueInput
    data: XOR<FollowingUpdateWithoutFollowerInput, FollowingUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowingUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowingScalarWhereInput
    data: XOR<FollowingUpdateManyMutationInput, FollowingUncheckedUpdateManyWithoutFollowerInput>
  }

  export type ReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutUserInput, ReplyUncheckedUpdateWithoutUserInput>
    create: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutUserInput, ReplyUncheckedUpdateWithoutUserInput>
  }

  export type ReplyUpdateManyWithWhereWithoutUserInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutUserInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    OR?: ReplyScalarWhereInput[]
    NOT?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    id?: IntFilter<"Reply"> | number
    user_id?: IntFilter<"Reply"> | number
    thread_id?: IntFilter<"Reply"> | number
    image?: StringNullableFilter<"Reply"> | string | null
    content?: StringFilter<"Reply"> | string
    created_at?: DateTimeFilter<"Reply"> | Date | string
    updated_at?: DateTimeFilter<"Reply"> | Date | string
  }

  export type ThreadUpsertWithWhereUniqueWithoutUserInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutUserInput, ThreadUncheckedUpdateWithoutUserInput>
    create: XOR<ThreadCreateWithoutUserInput, ThreadUncheckedCreateWithoutUserInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutUserInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutUserInput, ThreadUncheckedUpdateWithoutUserInput>
  }

  export type ThreadUpdateManyWithWhereWithoutUserInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutUserInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    OR?: ThreadScalarWhereInput[]
    NOT?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    id?: IntFilter<"Thread"> | number
    content?: StringFilter<"Thread"> | string
    image?: StringNullableFilter<"Thread"> | string | null
    number_of_replies?: IntFilter<"Thread"> | number
    created_at?: DateTimeFilter<"Thread"> | Date | string
    updated_at?: DateTimeFilter<"Thread"> | Date | string
    userId?: IntNullableFilter<"Thread"> | number | null
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: IntFilter<"Like"> | number
    user_id?: IntFilter<"Like"> | number
    thread_id?: IntNullableFilter<"Like"> | number | null
    reply_id?: IntNullableFilter<"Like"> | number | null
    created_at?: DateTimeFilter<"Like"> | Date | string
    updated_at?: DateTimeFilter<"Like"> | Date | string
  }

  export type RchildUpsertWithWhereUniqueWithoutUserInput = {
    where: RchildWhereUniqueInput
    update: XOR<RchildUpdateWithoutUserInput, RchildUncheckedUpdateWithoutUserInput>
    create: XOR<RchildCreateWithoutUserInput, RchildUncheckedCreateWithoutUserInput>
  }

  export type RchildUpdateWithWhereUniqueWithoutUserInput = {
    where: RchildWhereUniqueInput
    data: XOR<RchildUpdateWithoutUserInput, RchildUncheckedUpdateWithoutUserInput>
  }

  export type RchildUpdateManyWithWhereWithoutUserInput = {
    where: RchildScalarWhereInput
    data: XOR<RchildUpdateManyMutationInput, RchildUncheckedUpdateManyWithoutUserInput>
  }

  export type RchildScalarWhereInput = {
    AND?: RchildScalarWhereInput | RchildScalarWhereInput[]
    OR?: RchildScalarWhereInput[]
    NOT?: RchildScalarWhereInput | RchildScalarWhereInput[]
    id?: IntFilter<"Rchild"> | number
    user_id?: IntFilter<"Rchild"> | number
    thread_id?: IntFilter<"Rchild"> | number
    reply_id?: IntFilter<"Rchild"> | number
    content?: StringFilter<"Rchild"> | string
    created_at?: DateTimeFilter<"Rchild"> | Date | string
    updated_at?: DateTimeFilter<"Rchild"> | Date | string
  }

  export type ReplyCreateWithoutThreadInput = {
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRepliesInput
    Like?: LikeCreateNestedManyWithoutReplyInput
    rchild?: RchildCreateNestedManyWithoutReplyInput
  }

  export type ReplyUncheckedCreateWithoutThreadInput = {
    id?: number
    user_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    Like?: LikeUncheckedCreateNestedManyWithoutReplyInput
    rchild?: RchildUncheckedCreateNestedManyWithoutReplyInput
  }

  export type ReplyCreateOrConnectWithoutThreadInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutThreadInput, ReplyUncheckedCreateWithoutThreadInput>
  }

  export type ReplyCreateManyThreadInputEnvelope = {
    data: ReplyCreateManyThreadInput | ReplyCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutThreadInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    reply?: ReplyCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateWithoutThreadInput = {
    id?: number
    user_id: number
    reply_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeCreateOrConnectWithoutThreadInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutThreadInput, LikeUncheckedCreateWithoutThreadInput>
  }

  export type LikeCreateManyThreadInputEnvelope = {
    data: LikeCreateManyThreadInput | LikeCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutThreadsInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingCreateNestedManyWithoutFollowingInput
    followers?: FollowingCreateNestedManyWithoutFollowerInput
    replies?: ReplyCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rchild?: RchildCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutThreadsInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingUncheckedCreateNestedManyWithoutFollowingInput
    followers?: FollowingUncheckedCreateNestedManyWithoutFollowerInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rchild?: RchildUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutThreadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
  }

  export type RchildCreateWithoutThreadInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRchildInput
    reply: ReplyCreateNestedOneWithoutRchildInput
  }

  export type RchildUncheckedCreateWithoutThreadInput = {
    id?: number
    user_id: number
    reply_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildCreateOrConnectWithoutThreadInput = {
    where: RchildWhereUniqueInput
    create: XOR<RchildCreateWithoutThreadInput, RchildUncheckedCreateWithoutThreadInput>
  }

  export type RchildCreateManyThreadInputEnvelope = {
    data: RchildCreateManyThreadInput | RchildCreateManyThreadInput[]
    skipDuplicates?: boolean
  }

  export type ReplyUpsertWithWhereUniqueWithoutThreadInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutThreadInput, ReplyUncheckedUpdateWithoutThreadInput>
    create: XOR<ReplyCreateWithoutThreadInput, ReplyUncheckedCreateWithoutThreadInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutThreadInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutThreadInput, ReplyUncheckedUpdateWithoutThreadInput>
  }

  export type ReplyUpdateManyWithWhereWithoutThreadInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutThreadInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutThreadInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutThreadInput, LikeUncheckedUpdateWithoutThreadInput>
    create: XOR<LikeCreateWithoutThreadInput, LikeUncheckedCreateWithoutThreadInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutThreadInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutThreadInput, LikeUncheckedUpdateWithoutThreadInput>
  }

  export type LikeUpdateManyWithWhereWithoutThreadInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutThreadInput>
  }

  export type UserUpsertWithoutThreadsInput = {
    update: XOR<UserUpdateWithoutThreadsInput, UserUncheckedUpdateWithoutThreadsInput>
    create: XOR<UserCreateWithoutThreadsInput, UserUncheckedCreateWithoutThreadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadsInput, UserUncheckedUpdateWithoutThreadsInput>
  }

  export type UserUpdateWithoutThreadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rchild?: RchildUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUncheckedUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUncheckedUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RchildUpsertWithWhereUniqueWithoutThreadInput = {
    where: RchildWhereUniqueInput
    update: XOR<RchildUpdateWithoutThreadInput, RchildUncheckedUpdateWithoutThreadInput>
    create: XOR<RchildCreateWithoutThreadInput, RchildUncheckedCreateWithoutThreadInput>
  }

  export type RchildUpdateWithWhereUniqueWithoutThreadInput = {
    where: RchildWhereUniqueInput
    data: XOR<RchildUpdateWithoutThreadInput, RchildUncheckedUpdateWithoutThreadInput>
  }

  export type RchildUpdateManyWithWhereWithoutThreadInput = {
    where: RchildScalarWhereInput
    data: XOR<RchildUpdateManyMutationInput, RchildUncheckedUpdateManyWithoutThreadInput>
  }

  export type UserCreateWithoutRepliesInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingCreateNestedManyWithoutFollowingInput
    followers?: FollowingCreateNestedManyWithoutFollowerInput
    threads?: ThreadCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rchild?: RchildCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRepliesInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingUncheckedCreateNestedManyWithoutFollowingInput
    followers?: FollowingUncheckedCreateNestedManyWithoutFollowerInput
    threads?: ThreadUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rchild?: RchildUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
  }

  export type ThreadCreateWithoutRepliesInput = {
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    likes?: LikeCreateNestedManyWithoutThreadInput
    user?: UserCreateNestedOneWithoutThreadsInput
    rchild?: RchildCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutRepliesInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    userId?: number | null
    likes?: LikeUncheckedCreateNestedManyWithoutThreadInput
    rchild?: RchildUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutRepliesInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
  }

  export type LikeCreateWithoutReplyInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
    thread?: ThreadCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutReplyInput = {
    id?: number
    user_id: number
    thread_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeCreateOrConnectWithoutReplyInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutReplyInput, LikeUncheckedCreateWithoutReplyInput>
  }

  export type LikeCreateManyReplyInputEnvelope = {
    data: LikeCreateManyReplyInput | LikeCreateManyReplyInput[]
    skipDuplicates?: boolean
  }

  export type RchildCreateWithoutReplyInput = {
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRchildInput
    thread: ThreadCreateNestedOneWithoutRchildInput
  }

  export type RchildUncheckedCreateWithoutReplyInput = {
    id?: number
    user_id: number
    thread_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildCreateOrConnectWithoutReplyInput = {
    where: RchildWhereUniqueInput
    create: XOR<RchildCreateWithoutReplyInput, RchildUncheckedCreateWithoutReplyInput>
  }

  export type RchildCreateManyReplyInputEnvelope = {
    data: RchildCreateManyReplyInput | RchildCreateManyReplyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRepliesInput = {
    update: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateWithoutRepliesInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUpdateManyWithoutFollowerNestedInput
    threads?: ThreadUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rchild?: RchildUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUncheckedUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUncheckedUpdateManyWithoutFollowerNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadUpsertWithoutRepliesInput = {
    update: XOR<ThreadUpdateWithoutRepliesInput, ThreadUncheckedUpdateWithoutRepliesInput>
    create: XOR<ThreadCreateWithoutRepliesInput, ThreadUncheckedCreateWithoutRepliesInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutRepliesInput, ThreadUncheckedUpdateWithoutRepliesInput>
  }

  export type ThreadUpdateWithoutRepliesInput = {
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUpdateManyWithoutThreadNestedInput
    user?: UserUpdateOneWithoutThreadsNestedInput
    rchild?: RchildUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutRepliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    likes?: LikeUncheckedUpdateManyWithoutThreadNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutReplyInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutReplyInput, LikeUncheckedUpdateWithoutReplyInput>
    create: XOR<LikeCreateWithoutReplyInput, LikeUncheckedCreateWithoutReplyInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutReplyInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutReplyInput, LikeUncheckedUpdateWithoutReplyInput>
  }

  export type LikeUpdateManyWithWhereWithoutReplyInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutReplyInput>
  }

  export type RchildUpsertWithWhereUniqueWithoutReplyInput = {
    where: RchildWhereUniqueInput
    update: XOR<RchildUpdateWithoutReplyInput, RchildUncheckedUpdateWithoutReplyInput>
    create: XOR<RchildCreateWithoutReplyInput, RchildUncheckedCreateWithoutReplyInput>
  }

  export type RchildUpdateWithWhereUniqueWithoutReplyInput = {
    where: RchildWhereUniqueInput
    data: XOR<RchildUpdateWithoutReplyInput, RchildUncheckedUpdateWithoutReplyInput>
  }

  export type RchildUpdateManyWithWhereWithoutReplyInput = {
    where: RchildScalarWhereInput
    data: XOR<RchildUpdateManyMutationInput, RchildUncheckedUpdateManyWithoutReplyInput>
  }

  export type UserCreateWithoutRchildInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingCreateNestedManyWithoutFollowingInput
    followers?: FollowingCreateNestedManyWithoutFollowerInput
    replies?: ReplyCreateNestedManyWithoutUserInput
    threads?: ThreadCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRchildInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingUncheckedCreateNestedManyWithoutFollowingInput
    followers?: FollowingUncheckedCreateNestedManyWithoutFollowerInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
    threads?: ThreadUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRchildInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRchildInput, UserUncheckedCreateWithoutRchildInput>
  }

  export type ThreadCreateWithoutRchildInput = {
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReplyCreateNestedManyWithoutThreadInput
    likes?: LikeCreateNestedManyWithoutThreadInput
    user?: UserCreateNestedOneWithoutThreadsInput
  }

  export type ThreadUncheckedCreateWithoutRchildInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    userId?: number | null
    replies?: ReplyUncheckedCreateNestedManyWithoutThreadInput
    likes?: LikeUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutRchildInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutRchildInput, ThreadUncheckedCreateWithoutRchildInput>
  }

  export type ReplyCreateWithoutRchildInput = {
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRepliesInput
    thread: ThreadCreateNestedOneWithoutRepliesInput
    Like?: LikeCreateNestedManyWithoutReplyInput
  }

  export type ReplyUncheckedCreateWithoutRchildInput = {
    id?: number
    user_id: number
    thread_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    Like?: LikeUncheckedCreateNestedManyWithoutReplyInput
  }

  export type ReplyCreateOrConnectWithoutRchildInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutRchildInput, ReplyUncheckedCreateWithoutRchildInput>
  }

  export type UserUpsertWithoutRchildInput = {
    update: XOR<UserUpdateWithoutRchildInput, UserUncheckedUpdateWithoutRchildInput>
    create: XOR<UserCreateWithoutRchildInput, UserUncheckedCreateWithoutRchildInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRchildInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRchildInput, UserUncheckedUpdateWithoutRchildInput>
  }

  export type UserUpdateWithoutRchildInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
    threads?: ThreadUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRchildInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUncheckedUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUncheckedUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadUpsertWithoutRchildInput = {
    update: XOR<ThreadUpdateWithoutRchildInput, ThreadUncheckedUpdateWithoutRchildInput>
    create: XOR<ThreadCreateWithoutRchildInput, ThreadUncheckedCreateWithoutRchildInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutRchildInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutRchildInput, ThreadUncheckedUpdateWithoutRchildInput>
  }

  export type ThreadUpdateWithoutRchildInput = {
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutThreadNestedInput
    likes?: LikeUpdateManyWithoutThreadNestedInput
    user?: UserUpdateOneWithoutThreadsNestedInput
  }

  export type ThreadUncheckedUpdateWithoutRchildInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: ReplyUncheckedUpdateManyWithoutThreadNestedInput
    likes?: LikeUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ReplyUpsertWithoutRchildInput = {
    update: XOR<ReplyUpdateWithoutRchildInput, ReplyUncheckedUpdateWithoutRchildInput>
    create: XOR<ReplyCreateWithoutRchildInput, ReplyUncheckedCreateWithoutRchildInput>
    where?: ReplyWhereInput
  }

  export type ReplyUpdateToOneWithWhereWithoutRchildInput = {
    where?: ReplyWhereInput
    data: XOR<ReplyUpdateWithoutRchildInput, ReplyUncheckedUpdateWithoutRchildInput>
  }

  export type ReplyUpdateWithoutRchildInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    thread?: ThreadUpdateOneRequiredWithoutRepliesNestedInput
    Like?: LikeUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateWithoutRchildInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Like?: LikeUncheckedUpdateManyWithoutReplyNestedInput
  }

  export type UserCreateWithoutLikesInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingCreateNestedManyWithoutFollowingInput
    followers?: FollowingCreateNestedManyWithoutFollowerInput
    replies?: ReplyCreateNestedManyWithoutUserInput
    threads?: ThreadCreateNestedManyWithoutUserInput
    rchild?: RchildCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingUncheckedCreateNestedManyWithoutFollowingInput
    followers?: FollowingUncheckedCreateNestedManyWithoutFollowerInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
    threads?: ThreadUncheckedCreateNestedManyWithoutUserInput
    rchild?: RchildUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ThreadCreateWithoutLikesInput = {
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    replies?: ReplyCreateNestedManyWithoutThreadInput
    user?: UserCreateNestedOneWithoutThreadsInput
    rchild?: RchildCreateNestedManyWithoutThreadInput
  }

  export type ThreadUncheckedCreateWithoutLikesInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
    userId?: number | null
    replies?: ReplyUncheckedCreateNestedManyWithoutThreadInput
    rchild?: RchildUncheckedCreateNestedManyWithoutThreadInput
  }

  export type ThreadCreateOrConnectWithoutLikesInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput>
  }

  export type ReplyCreateWithoutLikeInput = {
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRepliesInput
    thread: ThreadCreateNestedOneWithoutRepliesInput
    rchild?: RchildCreateNestedManyWithoutReplyInput
  }

  export type ReplyUncheckedCreateWithoutLikeInput = {
    id?: number
    user_id: number
    thread_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
    rchild?: RchildUncheckedCreateNestedManyWithoutReplyInput
  }

  export type ReplyCreateOrConnectWithoutLikeInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutLikeInput, ReplyUncheckedCreateWithoutLikeInput>
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
    threads?: ThreadUpdateManyWithoutUserNestedInput
    rchild?: RchildUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUncheckedUpdateManyWithoutFollowingNestedInput
    followers?: FollowingUncheckedUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ThreadUpsertWithoutLikesInput = {
    update: XOR<ThreadUpdateWithoutLikesInput, ThreadUncheckedUpdateWithoutLikesInput>
    create: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutLikesInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutLikesInput, ThreadUncheckedUpdateWithoutLikesInput>
  }

  export type ThreadUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutThreadNestedInput
    user?: UserUpdateOneWithoutThreadsNestedInput
    rchild?: RchildUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    replies?: ReplyUncheckedUpdateManyWithoutThreadNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ReplyUpsertWithoutLikeInput = {
    update: XOR<ReplyUpdateWithoutLikeInput, ReplyUncheckedUpdateWithoutLikeInput>
    create: XOR<ReplyCreateWithoutLikeInput, ReplyUncheckedCreateWithoutLikeInput>
    where?: ReplyWhereInput
  }

  export type ReplyUpdateToOneWithWhereWithoutLikeInput = {
    where?: ReplyWhereInput
    data: XOR<ReplyUpdateWithoutLikeInput, ReplyUncheckedUpdateWithoutLikeInput>
  }

  export type ReplyUpdateWithoutLikeInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    thread?: ThreadUpdateOneRequiredWithoutRepliesNestedInput
    rchild?: RchildUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateWithoutLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rchild?: RchildUncheckedUpdateManyWithoutReplyNestedInput
  }

  export type UserCreateWithoutFollowingInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    followers?: FollowingCreateNestedManyWithoutFollowerInput
    replies?: ReplyCreateNestedManyWithoutUserInput
    threads?: ThreadCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rchild?: RchildCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    followers?: FollowingUncheckedCreateNestedManyWithoutFollowerInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
    threads?: ThreadUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rchild?: RchildUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserCreateWithoutFollowersInput = {
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingCreateNestedManyWithoutFollowingInput
    replies?: ReplyCreateNestedManyWithoutUserInput
    threads?: ThreadCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    rchild?: RchildCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number
    username: string
    full_name: string
    email: string
    password: string
    photo_profile?: string | null
    background?: string | null
    bio?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    following?: FollowingUncheckedCreateNestedManyWithoutFollowingInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
    threads?: ThreadUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    rchild?: RchildUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowingUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
    threads?: ThreadUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rchild?: RchildUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: FollowingUncheckedUpdateManyWithoutFollowerNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUpdateManyWithoutFollowingNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
    threads?: ThreadUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    rchild?: RchildUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    photo_profile?: NullableStringFieldUpdateOperationsInput | string | null
    background?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: FollowingUncheckedUpdateManyWithoutFollowingNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
    threads?: ThreadUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FollowingCreateManyFollowingInput = {
    id?: number
    follower_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowingCreateManyFollowerInput = {
    id?: number
    following_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReplyCreateManyUserInput = {
    id?: number
    thread_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ThreadCreateManyUserInput = {
    id?: number
    content: string
    image?: string | null
    number_of_replies?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id?: number
    thread_id?: number | null
    reply_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildCreateManyUserInput = {
    id?: number
    thread_id: number
    reply_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FollowingUpdateWithoutFollowingInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowingUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUpdateWithoutFollowerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowingUncheckedUpdateWithoutFollowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowingUncheckedUpdateManyWithoutFollowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutUserInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutRepliesNestedInput
    Like?: LikeUpdateManyWithoutReplyNestedInput
    rchild?: RchildUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Like?: LikeUncheckedUpdateManyWithoutReplyNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutThreadNestedInput
    likes?: LikeUpdateManyWithoutThreadNestedInput
    rchild?: RchildUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutThreadNestedInput
    likes?: LikeUncheckedUpdateManyWithoutThreadNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutThreadNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    number_of_replies?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneWithoutLikesNestedInput
    reply?: ReplyUpdateOneWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    thread_id?: NullableIntFieldUpdateOperationsInput | number | null
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    thread_id?: NullableIntFieldUpdateOperationsInput | number | null
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    thread?: ThreadUpdateOneRequiredWithoutRchildNestedInput
    reply?: ReplyUpdateOneRequiredWithoutRchildNestedInput
  }

  export type RchildUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    reply_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    reply_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyCreateManyThreadInput = {
    id?: number
    user_id: number
    image?: string | null
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeCreateManyThreadInput = {
    id?: number
    user_id: number
    reply_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildCreateManyThreadInput = {
    id?: number
    user_id: number
    reply_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReplyUpdateWithoutThreadInput = {
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    Like?: LikeUpdateManyWithoutReplyNestedInput
    rchild?: RchildUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Like?: LikeUncheckedUpdateManyWithoutReplyNestedInput
    rchild?: RchildUncheckedUpdateManyWithoutReplyNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutThreadInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    reply?: ReplyUpdateOneWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reply_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUpdateWithoutThreadInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRchildNestedInput
    reply?: ReplyUpdateOneRequiredWithoutRchildNestedInput
  }

  export type RchildUncheckedUpdateWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reply_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUncheckedUpdateManyWithoutThreadInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    reply_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyReplyInput = {
    id?: number
    user_id: number
    thread_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RchildCreateManyReplyInput = {
    id?: number
    user_id: number
    thread_id: number
    content: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikeUpdateWithoutReplyInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
    thread?: ThreadUpdateOneWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUpdateWithoutReplyInput = {
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRchildNestedInput
    thread?: ThreadUpdateOneRequiredWithoutRchildNestedInput
  }

  export type RchildUncheckedUpdateWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RchildUncheckedUpdateManyWithoutReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    thread_id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}