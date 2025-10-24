
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
 * Model user_credentials
 * 
 */
export type user_credentials = $Result.DefaultSelection<Prisma.$user_credentialsPayload>
/**
 * Model user_information
 * 
 */
export type user_information = $Result.DefaultSelection<Prisma.$user_informationPayload>
/**
 * Model m_master_department
 * 
 */
export type m_master_department = $Result.DefaultSelection<Prisma.$m_master_departmentPayload>
/**
 * Model m_master_department_log
 * 
 */
export type m_master_department_log = $Result.DefaultSelection<Prisma.$m_master_department_logPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const action: {
  Created: 'Created',
  Modified: 'Modified',
  Activated: 'Activated',
  Deactivated: 'Deactivated',
  Download: 'Download'
};

export type action = (typeof action)[keyof typeof action]

}

export type action = $Enums.action

export const action: typeof $Enums.action

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_credentials
 * const user_credentials = await prisma.user_credentials.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more User_credentials
   * const user_credentials = await prisma.user_credentials.findMany()
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
   * `prisma.user_credentials`: Exposes CRUD operations for the **user_credentials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_credentials
    * const user_credentials = await prisma.user_credentials.findMany()
    * ```
    */
  get user_credentials(): Prisma.user_credentialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_information`: Exposes CRUD operations for the **user_information** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_informations
    * const user_informations = await prisma.user_information.findMany()
    * ```
    */
  get user_information(): Prisma.user_informationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.m_master_department`: Exposes CRUD operations for the **m_master_department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more M_master_departments
    * const m_master_departments = await prisma.m_master_department.findMany()
    * ```
    */
  get m_master_department(): Prisma.m_master_departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.m_master_department_log`: Exposes CRUD operations for the **m_master_department_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more M_master_department_logs
    * const m_master_department_logs = await prisma.m_master_department_log.findMany()
    * ```
    */
  get m_master_department_log(): Prisma.m_master_department_logDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    user_credentials: 'user_credentials',
    user_information: 'user_information',
    m_master_department: 'm_master_department',
    m_master_department_log: 'm_master_department_log'
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
      modelProps: "user_credentials" | "user_information" | "m_master_department" | "m_master_department_log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_credentials: {
        payload: Prisma.$user_credentialsPayload<ExtArgs>
        fields: Prisma.user_credentialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_credentialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_credentialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>
          }
          findFirst: {
            args: Prisma.user_credentialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_credentialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>
          }
          findMany: {
            args: Prisma.user_credentialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>[]
          }
          create: {
            args: Prisma.user_credentialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>
          }
          createMany: {
            args: Prisma.user_credentialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_credentialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>
          }
          update: {
            args: Prisma.user_credentialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>
          }
          deleteMany: {
            args: Prisma.user_credentialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_credentialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_credentialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_credentialsPayload>
          }
          aggregate: {
            args: Prisma.User_credentialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_credentials>
          }
          groupBy: {
            args: Prisma.user_credentialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_credentialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_credentialsCountArgs<ExtArgs>
            result: $Utils.Optional<User_credentialsCountAggregateOutputType> | number
          }
        }
      }
      user_information: {
        payload: Prisma.$user_informationPayload<ExtArgs>
        fields: Prisma.user_informationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_informationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_informationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>
          }
          findFirst: {
            args: Prisma.user_informationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_informationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>
          }
          findMany: {
            args: Prisma.user_informationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>[]
          }
          create: {
            args: Prisma.user_informationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>
          }
          createMany: {
            args: Prisma.user_informationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_informationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>
          }
          update: {
            args: Prisma.user_informationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>
          }
          deleteMany: {
            args: Prisma.user_informationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_informationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_informationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_informationPayload>
          }
          aggregate: {
            args: Prisma.User_informationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_information>
          }
          groupBy: {
            args: Prisma.user_informationGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_informationGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_informationCountArgs<ExtArgs>
            result: $Utils.Optional<User_informationCountAggregateOutputType> | number
          }
        }
      }
      m_master_department: {
        payload: Prisma.$m_master_departmentPayload<ExtArgs>
        fields: Prisma.m_master_departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.m_master_departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.m_master_departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>
          }
          findFirst: {
            args: Prisma.m_master_departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.m_master_departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>
          }
          findMany: {
            args: Prisma.m_master_departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>[]
          }
          create: {
            args: Prisma.m_master_departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>
          }
          createMany: {
            args: Prisma.m_master_departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.m_master_departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>
          }
          update: {
            args: Prisma.m_master_departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>
          }
          deleteMany: {
            args: Prisma.m_master_departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.m_master_departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.m_master_departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_departmentPayload>
          }
          aggregate: {
            args: Prisma.M_master_departmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateM_master_department>
          }
          groupBy: {
            args: Prisma.m_master_departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<M_master_departmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.m_master_departmentCountArgs<ExtArgs>
            result: $Utils.Optional<M_master_departmentCountAggregateOutputType> | number
          }
        }
      }
      m_master_department_log: {
        payload: Prisma.$m_master_department_logPayload<ExtArgs>
        fields: Prisma.m_master_department_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.m_master_department_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.m_master_department_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>
          }
          findFirst: {
            args: Prisma.m_master_department_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.m_master_department_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>
          }
          findMany: {
            args: Prisma.m_master_department_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>[]
          }
          create: {
            args: Prisma.m_master_department_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>
          }
          createMany: {
            args: Prisma.m_master_department_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.m_master_department_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>
          }
          update: {
            args: Prisma.m_master_department_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>
          }
          deleteMany: {
            args: Prisma.m_master_department_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.m_master_department_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.m_master_department_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$m_master_department_logPayload>
          }
          aggregate: {
            args: Prisma.M_master_department_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateM_master_department_log>
          }
          groupBy: {
            args: Prisma.m_master_department_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<M_master_department_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.m_master_department_logCountArgs<ExtArgs>
            result: $Utils.Optional<M_master_department_logCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user_credentials?: user_credentialsOmit
    user_information?: user_informationOmit
    m_master_department?: m_master_departmentOmit
    m_master_department_log?: m_master_department_logOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type User_informationCountOutputType
   */

  export type User_informationCountOutputType = {
    c_master_department: number
    m_master_department: number
    m_master_department_log: number
  }

  export type User_informationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    c_master_department?: boolean | User_informationCountOutputTypeCountC_master_departmentArgs
    m_master_department?: boolean | User_informationCountOutputTypeCountM_master_departmentArgs
    m_master_department_log?: boolean | User_informationCountOutputTypeCountM_master_department_logArgs
  }

  // Custom InputTypes
  /**
   * User_informationCountOutputType without action
   */
  export type User_informationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_informationCountOutputType
     */
    select?: User_informationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_informationCountOutputType without action
   */
  export type User_informationCountOutputTypeCountC_master_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_master_departmentWhereInput
  }

  /**
   * User_informationCountOutputType without action
   */
  export type User_informationCountOutputTypeCountM_master_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_master_departmentWhereInput
  }

  /**
   * User_informationCountOutputType without action
   */
  export type User_informationCountOutputTypeCountM_master_department_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_master_department_logWhereInput
  }


  /**
   * Count Type M_master_departmentCountOutputType
   */

  export type M_master_departmentCountOutputType = {
    m_master_department_log: number
  }

  export type M_master_departmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    m_master_department_log?: boolean | M_master_departmentCountOutputTypeCountM_master_department_logArgs
  }

  // Custom InputTypes
  /**
   * M_master_departmentCountOutputType without action
   */
  export type M_master_departmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the M_master_departmentCountOutputType
     */
    select?: M_master_departmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * M_master_departmentCountOutputType without action
   */
  export type M_master_departmentCountOutputTypeCountM_master_department_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_master_department_logWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_credentials
   */

  export type AggregateUser_credentials = {
    _count: User_credentialsCountAggregateOutputType | null
    _avg: User_credentialsAvgAggregateOutputType | null
    _sum: User_credentialsSumAggregateOutputType | null
    _min: User_credentialsMinAggregateOutputType | null
    _max: User_credentialsMaxAggregateOutputType | null
  }

  export type User_credentialsAvgAggregateOutputType = {
    id: number | null
    license_id: number | null
  }

  export type User_credentialsSumAggregateOutputType = {
    id: number | null
    license_id: number | null
  }

  export type User_credentialsMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    license_id: number | null
  }

  export type User_credentialsMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    license_id: number | null
  }

  export type User_credentialsCountAggregateOutputType = {
    id: number
    username: number
    password: number
    license_id: number
    _all: number
  }


  export type User_credentialsAvgAggregateInputType = {
    id?: true
    license_id?: true
  }

  export type User_credentialsSumAggregateInputType = {
    id?: true
    license_id?: true
  }

  export type User_credentialsMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    license_id?: true
  }

  export type User_credentialsMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    license_id?: true
  }

  export type User_credentialsCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    license_id?: true
    _all?: true
  }

  export type User_credentialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_credentials to aggregate.
     */
    where?: user_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_credentials to fetch.
     */
    orderBy?: user_credentialsOrderByWithRelationInput | user_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_credentials
    **/
    _count?: true | User_credentialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_credentialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_credentialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_credentialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_credentialsMaxAggregateInputType
  }

  export type GetUser_credentialsAggregateType<T extends User_credentialsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_credentials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_credentials[P]>
      : GetScalarType<T[P], AggregateUser_credentials[P]>
  }




  export type user_credentialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_credentialsWhereInput
    orderBy?: user_credentialsOrderByWithAggregationInput | user_credentialsOrderByWithAggregationInput[]
    by: User_credentialsScalarFieldEnum[] | User_credentialsScalarFieldEnum
    having?: user_credentialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_credentialsCountAggregateInputType | true
    _avg?: User_credentialsAvgAggregateInputType
    _sum?: User_credentialsSumAggregateInputType
    _min?: User_credentialsMinAggregateInputType
    _max?: User_credentialsMaxAggregateInputType
  }

  export type User_credentialsGroupByOutputType = {
    id: number
    username: string
    password: string
    license_id: number
    _count: User_credentialsCountAggregateOutputType | null
    _avg: User_credentialsAvgAggregateOutputType | null
    _sum: User_credentialsSumAggregateOutputType | null
    _min: User_credentialsMinAggregateOutputType | null
    _max: User_credentialsMaxAggregateOutputType | null
  }

  type GetUser_credentialsGroupByPayload<T extends user_credentialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_credentialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_credentialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_credentialsGroupByOutputType[P]>
            : GetScalarType<T[P], User_credentialsGroupByOutputType[P]>
        }
      >
    >


  export type user_credentialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    license_id?: boolean
    user_information?: boolean | user_credentials$user_informationArgs<ExtArgs>
  }, ExtArgs["result"]["user_credentials"]>



  export type user_credentialsSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    license_id?: boolean
  }

  export type user_credentialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "license_id", ExtArgs["result"]["user_credentials"]>
  export type user_credentialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_information?: boolean | user_credentials$user_informationArgs<ExtArgs>
  }

  export type $user_credentialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_credentials"
    objects: {
      user_information: Prisma.$user_informationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      license_id: number
    }, ExtArgs["result"]["user_credentials"]>
    composites: {}
  }

  type user_credentialsGetPayload<S extends boolean | null | undefined | user_credentialsDefaultArgs> = $Result.GetResult<Prisma.$user_credentialsPayload, S>

  type user_credentialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_credentialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_credentialsCountAggregateInputType | true
    }

  export interface user_credentialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_credentials'], meta: { name: 'user_credentials' } }
    /**
     * Find zero or one User_credentials that matches the filter.
     * @param {user_credentialsFindUniqueArgs} args - Arguments to find a User_credentials
     * @example
     * // Get one User_credentials
     * const user_credentials = await prisma.user_credentials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_credentialsFindUniqueArgs>(args: SelectSubset<T, user_credentialsFindUniqueArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_credentials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_credentialsFindUniqueOrThrowArgs} args - Arguments to find a User_credentials
     * @example
     * // Get one User_credentials
     * const user_credentials = await prisma.user_credentials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_credentialsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_credentialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_credentialsFindFirstArgs} args - Arguments to find a User_credentials
     * @example
     * // Get one User_credentials
     * const user_credentials = await prisma.user_credentials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_credentialsFindFirstArgs>(args?: SelectSubset<T, user_credentialsFindFirstArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_credentials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_credentialsFindFirstOrThrowArgs} args - Arguments to find a User_credentials
     * @example
     * // Get one User_credentials
     * const user_credentials = await prisma.user_credentials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_credentialsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_credentialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_credentialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_credentials
     * const user_credentials = await prisma.user_credentials.findMany()
     * 
     * // Get first 10 User_credentials
     * const user_credentials = await prisma.user_credentials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_credentialsWithIdOnly = await prisma.user_credentials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_credentialsFindManyArgs>(args?: SelectSubset<T, user_credentialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_credentials.
     * @param {user_credentialsCreateArgs} args - Arguments to create a User_credentials.
     * @example
     * // Create one User_credentials
     * const User_credentials = await prisma.user_credentials.create({
     *   data: {
     *     // ... data to create a User_credentials
     *   }
     * })
     * 
     */
    create<T extends user_credentialsCreateArgs>(args: SelectSubset<T, user_credentialsCreateArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_credentials.
     * @param {user_credentialsCreateManyArgs} args - Arguments to create many User_credentials.
     * @example
     * // Create many User_credentials
     * const user_credentials = await prisma.user_credentials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_credentialsCreateManyArgs>(args?: SelectSubset<T, user_credentialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_credentials.
     * @param {user_credentialsDeleteArgs} args - Arguments to delete one User_credentials.
     * @example
     * // Delete one User_credentials
     * const User_credentials = await prisma.user_credentials.delete({
     *   where: {
     *     // ... filter to delete one User_credentials
     *   }
     * })
     * 
     */
    delete<T extends user_credentialsDeleteArgs>(args: SelectSubset<T, user_credentialsDeleteArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_credentials.
     * @param {user_credentialsUpdateArgs} args - Arguments to update one User_credentials.
     * @example
     * // Update one User_credentials
     * const user_credentials = await prisma.user_credentials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_credentialsUpdateArgs>(args: SelectSubset<T, user_credentialsUpdateArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_credentials.
     * @param {user_credentialsDeleteManyArgs} args - Arguments to filter User_credentials to delete.
     * @example
     * // Delete a few User_credentials
     * const { count } = await prisma.user_credentials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_credentialsDeleteManyArgs>(args?: SelectSubset<T, user_credentialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_credentialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_credentials
     * const user_credentials = await prisma.user_credentials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_credentialsUpdateManyArgs>(args: SelectSubset<T, user_credentialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_credentials.
     * @param {user_credentialsUpsertArgs} args - Arguments to update or create a User_credentials.
     * @example
     * // Update or create a User_credentials
     * const user_credentials = await prisma.user_credentials.upsert({
     *   create: {
     *     // ... data to create a User_credentials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_credentials we want to update
     *   }
     * })
     */
    upsert<T extends user_credentialsUpsertArgs>(args: SelectSubset<T, user_credentialsUpsertArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_credentialsCountArgs} args - Arguments to filter User_credentials to count.
     * @example
     * // Count the number of User_credentials
     * const count = await prisma.user_credentials.count({
     *   where: {
     *     // ... the filter for the User_credentials we want to count
     *   }
     * })
    **/
    count<T extends user_credentialsCountArgs>(
      args?: Subset<T, user_credentialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_credentialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_credentialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_credentialsAggregateArgs>(args: Subset<T, User_credentialsAggregateArgs>): Prisma.PrismaPromise<GetUser_credentialsAggregateType<T>>

    /**
     * Group by User_credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_credentialsGroupByArgs} args - Group by arguments.
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
      T extends user_credentialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_credentialsGroupByArgs['orderBy'] }
        : { orderBy?: user_credentialsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_credentialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_credentialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_credentials model
   */
  readonly fields: user_credentialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_credentials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_credentialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_information<T extends user_credentials$user_informationArgs<ExtArgs> = {}>(args?: Subset<T, user_credentials$user_informationArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_credentials model
   */
  interface user_credentialsFieldRefs {
    readonly id: FieldRef<"user_credentials", 'Int'>
    readonly username: FieldRef<"user_credentials", 'String'>
    readonly password: FieldRef<"user_credentials", 'String'>
    readonly license_id: FieldRef<"user_credentials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_credentials findUnique
   */
  export type user_credentialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which user_credentials to fetch.
     */
    where: user_credentialsWhereUniqueInput
  }

  /**
   * user_credentials findUniqueOrThrow
   */
  export type user_credentialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which user_credentials to fetch.
     */
    where: user_credentialsWhereUniqueInput
  }

  /**
   * user_credentials findFirst
   */
  export type user_credentialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which user_credentials to fetch.
     */
    where?: user_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_credentials to fetch.
     */
    orderBy?: user_credentialsOrderByWithRelationInput | user_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_credentials.
     */
    cursor?: user_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_credentials.
     */
    distinct?: User_credentialsScalarFieldEnum | User_credentialsScalarFieldEnum[]
  }

  /**
   * user_credentials findFirstOrThrow
   */
  export type user_credentialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which user_credentials to fetch.
     */
    where?: user_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_credentials to fetch.
     */
    orderBy?: user_credentialsOrderByWithRelationInput | user_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_credentials.
     */
    cursor?: user_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_credentials.
     */
    distinct?: User_credentialsScalarFieldEnum | User_credentialsScalarFieldEnum[]
  }

  /**
   * user_credentials findMany
   */
  export type user_credentialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * Filter, which user_credentials to fetch.
     */
    where?: user_credentialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_credentials to fetch.
     */
    orderBy?: user_credentialsOrderByWithRelationInput | user_credentialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_credentials.
     */
    cursor?: user_credentialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_credentials.
     */
    skip?: number
    distinct?: User_credentialsScalarFieldEnum | User_credentialsScalarFieldEnum[]
  }

  /**
   * user_credentials create
   */
  export type user_credentialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_credentials.
     */
    data: XOR<user_credentialsCreateInput, user_credentialsUncheckedCreateInput>
  }

  /**
   * user_credentials createMany
   */
  export type user_credentialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_credentials.
     */
    data: user_credentialsCreateManyInput | user_credentialsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_credentials update
   */
  export type user_credentialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_credentials.
     */
    data: XOR<user_credentialsUpdateInput, user_credentialsUncheckedUpdateInput>
    /**
     * Choose, which user_credentials to update.
     */
    where: user_credentialsWhereUniqueInput
  }

  /**
   * user_credentials updateMany
   */
  export type user_credentialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_credentials.
     */
    data: XOR<user_credentialsUpdateManyMutationInput, user_credentialsUncheckedUpdateManyInput>
    /**
     * Filter which user_credentials to update
     */
    where?: user_credentialsWhereInput
    /**
     * Limit how many user_credentials to update.
     */
    limit?: number
  }

  /**
   * user_credentials upsert
   */
  export type user_credentialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_credentials to update in case it exists.
     */
    where: user_credentialsWhereUniqueInput
    /**
     * In case the user_credentials found by the `where` argument doesn't exist, create a new user_credentials with this data.
     */
    create: XOR<user_credentialsCreateInput, user_credentialsUncheckedCreateInput>
    /**
     * In case the user_credentials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_credentialsUpdateInput, user_credentialsUncheckedUpdateInput>
  }

  /**
   * user_credentials delete
   */
  export type user_credentialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
    /**
     * Filter which user_credentials to delete.
     */
    where: user_credentialsWhereUniqueInput
  }

  /**
   * user_credentials deleteMany
   */
  export type user_credentialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_credentials to delete
     */
    where?: user_credentialsWhereInput
    /**
     * Limit how many user_credentials to delete.
     */
    limit?: number
  }

  /**
   * user_credentials.user_information
   */
  export type user_credentials$user_informationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    where?: user_informationWhereInput
  }

  /**
   * user_credentials without action
   */
  export type user_credentialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_credentials
     */
    select?: user_credentialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_credentials
     */
    omit?: user_credentialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_credentialsInclude<ExtArgs> | null
  }


  /**
   * Model user_information
   */

  export type AggregateUser_information = {
    _count: User_informationCountAggregateOutputType | null
    _avg: User_informationAvgAggregateOutputType | null
    _sum: User_informationSumAggregateOutputType | null
    _min: User_informationMinAggregateOutputType | null
    _max: User_informationMaxAggregateOutputType | null
  }

  export type User_informationAvgAggregateOutputType = {
    id: number | null
    license_id: number | null
    credential_id: number | null
  }

  export type User_informationSumAggregateOutputType = {
    id: number | null
    license_id: number | null
    credential_id: number | null
  }

  export type User_informationMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    license_id: number | null
    credential_id: number | null
  }

  export type User_informationMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    license_id: number | null
    credential_id: number | null
  }

  export type User_informationCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    license_id: number
    credential_id: number
    _all: number
  }


  export type User_informationAvgAggregateInputType = {
    id?: true
    license_id?: true
    credential_id?: true
  }

  export type User_informationSumAggregateInputType = {
    id?: true
    license_id?: true
    credential_id?: true
  }

  export type User_informationMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    license_id?: true
    credential_id?: true
  }

  export type User_informationMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    license_id?: true
    credential_id?: true
  }

  export type User_informationCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    license_id?: true
    credential_id?: true
    _all?: true
  }

  export type User_informationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_information to aggregate.
     */
    where?: user_informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informations to fetch.
     */
    orderBy?: user_informationOrderByWithRelationInput | user_informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_informations
    **/
    _count?: true | User_informationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_informationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_informationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_informationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_informationMaxAggregateInputType
  }

  export type GetUser_informationAggregateType<T extends User_informationAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_information]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_information[P]>
      : GetScalarType<T[P], AggregateUser_information[P]>
  }




  export type user_informationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_informationWhereInput
    orderBy?: user_informationOrderByWithAggregationInput | user_informationOrderByWithAggregationInput[]
    by: User_informationScalarFieldEnum[] | User_informationScalarFieldEnum
    having?: user_informationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_informationCountAggregateInputType | true
    _avg?: User_informationAvgAggregateInputType
    _sum?: User_informationSumAggregateInputType
    _min?: User_informationMinAggregateInputType
    _max?: User_informationMaxAggregateInputType
  }

  export type User_informationGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    license_id: number
    credential_id: number
    _count: User_informationCountAggregateOutputType | null
    _avg: User_informationAvgAggregateOutputType | null
    _sum: User_informationSumAggregateOutputType | null
    _min: User_informationMinAggregateOutputType | null
    _max: User_informationMaxAggregateOutputType | null
  }

  type GetUser_informationGroupByPayload<T extends user_informationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_informationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_informationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_informationGroupByOutputType[P]>
            : GetScalarType<T[P], User_informationGroupByOutputType[P]>
        }
      >
    >


  export type user_informationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    license_id?: boolean
    credential_id?: boolean
    user_credential?: boolean | user_credentialsDefaultArgs<ExtArgs>
    c_master_department?: boolean | user_information$c_master_departmentArgs<ExtArgs>
    m_master_department?: boolean | user_information$m_master_departmentArgs<ExtArgs>
    m_master_department_log?: boolean | user_information$m_master_department_logArgs<ExtArgs>
    _count?: boolean | User_informationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_information"]>



  export type user_informationSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    license_id?: boolean
    credential_id?: boolean
  }

  export type user_informationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "license_id" | "credential_id", ExtArgs["result"]["user_information"]>
  export type user_informationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_credential?: boolean | user_credentialsDefaultArgs<ExtArgs>
    c_master_department?: boolean | user_information$c_master_departmentArgs<ExtArgs>
    m_master_department?: boolean | user_information$m_master_departmentArgs<ExtArgs>
    m_master_department_log?: boolean | user_information$m_master_department_logArgs<ExtArgs>
    _count?: boolean | User_informationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $user_informationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_information"
    objects: {
      user_credential: Prisma.$user_credentialsPayload<ExtArgs>
      c_master_department: Prisma.$m_master_departmentPayload<ExtArgs>[]
      m_master_department: Prisma.$m_master_departmentPayload<ExtArgs>[]
      m_master_department_log: Prisma.$m_master_department_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      license_id: number
      credential_id: number
    }, ExtArgs["result"]["user_information"]>
    composites: {}
  }

  type user_informationGetPayload<S extends boolean | null | undefined | user_informationDefaultArgs> = $Result.GetResult<Prisma.$user_informationPayload, S>

  type user_informationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_informationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_informationCountAggregateInputType | true
    }

  export interface user_informationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_information'], meta: { name: 'user_information' } }
    /**
     * Find zero or one User_information that matches the filter.
     * @param {user_informationFindUniqueArgs} args - Arguments to find a User_information
     * @example
     * // Get one User_information
     * const user_information = await prisma.user_information.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_informationFindUniqueArgs>(args: SelectSubset<T, user_informationFindUniqueArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_information that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_informationFindUniqueOrThrowArgs} args - Arguments to find a User_information
     * @example
     * // Get one User_information
     * const user_information = await prisma.user_information.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_informationFindUniqueOrThrowArgs>(args: SelectSubset<T, user_informationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_information that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informationFindFirstArgs} args - Arguments to find a User_information
     * @example
     * // Get one User_information
     * const user_information = await prisma.user_information.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_informationFindFirstArgs>(args?: SelectSubset<T, user_informationFindFirstArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_information that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informationFindFirstOrThrowArgs} args - Arguments to find a User_information
     * @example
     * // Get one User_information
     * const user_information = await prisma.user_information.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_informationFindFirstOrThrowArgs>(args?: SelectSubset<T, user_informationFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_informations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_informations
     * const user_informations = await prisma.user_information.findMany()
     * 
     * // Get first 10 User_informations
     * const user_informations = await prisma.user_information.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_informationWithIdOnly = await prisma.user_information.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_informationFindManyArgs>(args?: SelectSubset<T, user_informationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_information.
     * @param {user_informationCreateArgs} args - Arguments to create a User_information.
     * @example
     * // Create one User_information
     * const User_information = await prisma.user_information.create({
     *   data: {
     *     // ... data to create a User_information
     *   }
     * })
     * 
     */
    create<T extends user_informationCreateArgs>(args: SelectSubset<T, user_informationCreateArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_informations.
     * @param {user_informationCreateManyArgs} args - Arguments to create many User_informations.
     * @example
     * // Create many User_informations
     * const user_information = await prisma.user_information.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_informationCreateManyArgs>(args?: SelectSubset<T, user_informationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_information.
     * @param {user_informationDeleteArgs} args - Arguments to delete one User_information.
     * @example
     * // Delete one User_information
     * const User_information = await prisma.user_information.delete({
     *   where: {
     *     // ... filter to delete one User_information
     *   }
     * })
     * 
     */
    delete<T extends user_informationDeleteArgs>(args: SelectSubset<T, user_informationDeleteArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_information.
     * @param {user_informationUpdateArgs} args - Arguments to update one User_information.
     * @example
     * // Update one User_information
     * const user_information = await prisma.user_information.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_informationUpdateArgs>(args: SelectSubset<T, user_informationUpdateArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_informations.
     * @param {user_informationDeleteManyArgs} args - Arguments to filter User_informations to delete.
     * @example
     * // Delete a few User_informations
     * const { count } = await prisma.user_information.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_informationDeleteManyArgs>(args?: SelectSubset<T, user_informationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_informations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_informations
     * const user_information = await prisma.user_information.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_informationUpdateManyArgs>(args: SelectSubset<T, user_informationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_information.
     * @param {user_informationUpsertArgs} args - Arguments to update or create a User_information.
     * @example
     * // Update or create a User_information
     * const user_information = await prisma.user_information.upsert({
     *   create: {
     *     // ... data to create a User_information
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_information we want to update
     *   }
     * })
     */
    upsert<T extends user_informationUpsertArgs>(args: SelectSubset<T, user_informationUpsertArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_informations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informationCountArgs} args - Arguments to filter User_informations to count.
     * @example
     * // Count the number of User_informations
     * const count = await prisma.user_information.count({
     *   where: {
     *     // ... the filter for the User_informations we want to count
     *   }
     * })
    **/
    count<T extends user_informationCountArgs>(
      args?: Subset<T, user_informationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_informationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_informationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_informationAggregateArgs>(args: Subset<T, User_informationAggregateArgs>): Prisma.PrismaPromise<GetUser_informationAggregateType<T>>

    /**
     * Group by User_information.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_informationGroupByArgs} args - Group by arguments.
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
      T extends user_informationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_informationGroupByArgs['orderBy'] }
        : { orderBy?: user_informationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_informationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_informationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_information model
   */
  readonly fields: user_informationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_information.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_informationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_credential<T extends user_credentialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_credentialsDefaultArgs<ExtArgs>>): Prisma__user_credentialsClient<$Result.GetResult<Prisma.$user_credentialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    c_master_department<T extends user_information$c_master_departmentArgs<ExtArgs> = {}>(args?: Subset<T, user_information$c_master_departmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    m_master_department<T extends user_information$m_master_departmentArgs<ExtArgs> = {}>(args?: Subset<T, user_information$m_master_departmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    m_master_department_log<T extends user_information$m_master_department_logArgs<ExtArgs> = {}>(args?: Subset<T, user_information$m_master_department_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user_information model
   */
  interface user_informationFieldRefs {
    readonly id: FieldRef<"user_information", 'Int'>
    readonly first_name: FieldRef<"user_information", 'String'>
    readonly last_name: FieldRef<"user_information", 'String'>
    readonly license_id: FieldRef<"user_information", 'Int'>
    readonly credential_id: FieldRef<"user_information", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_information findUnique
   */
  export type user_informationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * Filter, which user_information to fetch.
     */
    where: user_informationWhereUniqueInput
  }

  /**
   * user_information findUniqueOrThrow
   */
  export type user_informationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * Filter, which user_information to fetch.
     */
    where: user_informationWhereUniqueInput
  }

  /**
   * user_information findFirst
   */
  export type user_informationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * Filter, which user_information to fetch.
     */
    where?: user_informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informations to fetch.
     */
    orderBy?: user_informationOrderByWithRelationInput | user_informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_informations.
     */
    cursor?: user_informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_informations.
     */
    distinct?: User_informationScalarFieldEnum | User_informationScalarFieldEnum[]
  }

  /**
   * user_information findFirstOrThrow
   */
  export type user_informationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * Filter, which user_information to fetch.
     */
    where?: user_informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informations to fetch.
     */
    orderBy?: user_informationOrderByWithRelationInput | user_informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_informations.
     */
    cursor?: user_informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_informations.
     */
    distinct?: User_informationScalarFieldEnum | User_informationScalarFieldEnum[]
  }

  /**
   * user_information findMany
   */
  export type user_informationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * Filter, which user_informations to fetch.
     */
    where?: user_informationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_informations to fetch.
     */
    orderBy?: user_informationOrderByWithRelationInput | user_informationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_informations.
     */
    cursor?: user_informationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_informations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_informations.
     */
    skip?: number
    distinct?: User_informationScalarFieldEnum | User_informationScalarFieldEnum[]
  }

  /**
   * user_information create
   */
  export type user_informationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * The data needed to create a user_information.
     */
    data: XOR<user_informationCreateInput, user_informationUncheckedCreateInput>
  }

  /**
   * user_information createMany
   */
  export type user_informationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_informations.
     */
    data: user_informationCreateManyInput | user_informationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_information update
   */
  export type user_informationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * The data needed to update a user_information.
     */
    data: XOR<user_informationUpdateInput, user_informationUncheckedUpdateInput>
    /**
     * Choose, which user_information to update.
     */
    where: user_informationWhereUniqueInput
  }

  /**
   * user_information updateMany
   */
  export type user_informationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_informations.
     */
    data: XOR<user_informationUpdateManyMutationInput, user_informationUncheckedUpdateManyInput>
    /**
     * Filter which user_informations to update
     */
    where?: user_informationWhereInput
    /**
     * Limit how many user_informations to update.
     */
    limit?: number
  }

  /**
   * user_information upsert
   */
  export type user_informationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * The filter to search for the user_information to update in case it exists.
     */
    where: user_informationWhereUniqueInput
    /**
     * In case the user_information found by the `where` argument doesn't exist, create a new user_information with this data.
     */
    create: XOR<user_informationCreateInput, user_informationUncheckedCreateInput>
    /**
     * In case the user_information was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_informationUpdateInput, user_informationUncheckedUpdateInput>
  }

  /**
   * user_information delete
   */
  export type user_informationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    /**
     * Filter which user_information to delete.
     */
    where: user_informationWhereUniqueInput
  }

  /**
   * user_information deleteMany
   */
  export type user_informationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_informations to delete
     */
    where?: user_informationWhereInput
    /**
     * Limit how many user_informations to delete.
     */
    limit?: number
  }

  /**
   * user_information.c_master_department
   */
  export type user_information$c_master_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    where?: m_master_departmentWhereInput
    orderBy?: m_master_departmentOrderByWithRelationInput | m_master_departmentOrderByWithRelationInput[]
    cursor?: m_master_departmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: M_master_departmentScalarFieldEnum | M_master_departmentScalarFieldEnum[]
  }

  /**
   * user_information.m_master_department
   */
  export type user_information$m_master_departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    where?: m_master_departmentWhereInput
    orderBy?: m_master_departmentOrderByWithRelationInput | m_master_departmentOrderByWithRelationInput[]
    cursor?: m_master_departmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: M_master_departmentScalarFieldEnum | M_master_departmentScalarFieldEnum[]
  }

  /**
   * user_information.m_master_department_log
   */
  export type user_information$m_master_department_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    where?: m_master_department_logWhereInput
    orderBy?: m_master_department_logOrderByWithRelationInput | m_master_department_logOrderByWithRelationInput[]
    cursor?: m_master_department_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: M_master_department_logScalarFieldEnum | M_master_department_logScalarFieldEnum[]
  }

  /**
   * user_information without action
   */
  export type user_informationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
  }


  /**
   * Model m_master_department
   */

  export type AggregateM_master_department = {
    _count: M_master_departmentCountAggregateOutputType | null
    _avg: M_master_departmentAvgAggregateOutputType | null
    _sum: M_master_departmentSumAggregateOutputType | null
    _min: M_master_departmentMinAggregateOutputType | null
    _max: M_master_departmentMaxAggregateOutputType | null
  }

  export type M_master_departmentAvgAggregateOutputType = {
    id: number | null
    license_id: number | null
    created_by_id: number | null
    modified_by_id: number | null
  }

  export type M_master_departmentSumAggregateOutputType = {
    id: number | null
    license_id: number | null
    created_by_id: number | null
    modified_by_id: number | null
  }

  export type M_master_departmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    license_id: number | null
    description: string | null
    created_on: Date | null
    created_by_id: number | null
    modified_on: Date | null
    modified_by_id: number | null
    status: boolean | null
  }

  export type M_master_departmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    license_id: number | null
    description: string | null
    created_on: Date | null
    created_by_id: number | null
    modified_on: Date | null
    modified_by_id: number | null
    status: boolean | null
  }

  export type M_master_departmentCountAggregateOutputType = {
    id: number
    name: number
    code: number
    license_id: number
    description: number
    created_on: number
    created_by_id: number
    modified_on: number
    modified_by_id: number
    status: number
    _all: number
  }


  export type M_master_departmentAvgAggregateInputType = {
    id?: true
    license_id?: true
    created_by_id?: true
    modified_by_id?: true
  }

  export type M_master_departmentSumAggregateInputType = {
    id?: true
    license_id?: true
    created_by_id?: true
    modified_by_id?: true
  }

  export type M_master_departmentMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    license_id?: true
    description?: true
    created_on?: true
    created_by_id?: true
    modified_on?: true
    modified_by_id?: true
    status?: true
  }

  export type M_master_departmentMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    license_id?: true
    description?: true
    created_on?: true
    created_by_id?: true
    modified_on?: true
    modified_by_id?: true
    status?: true
  }

  export type M_master_departmentCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    license_id?: true
    description?: true
    created_on?: true
    created_by_id?: true
    modified_on?: true
    modified_by_id?: true
    status?: true
    _all?: true
  }

  export type M_master_departmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_master_department to aggregate.
     */
    where?: m_master_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_departments to fetch.
     */
    orderBy?: m_master_departmentOrderByWithRelationInput | m_master_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: m_master_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned m_master_departments
    **/
    _count?: true | M_master_departmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: M_master_departmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: M_master_departmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: M_master_departmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: M_master_departmentMaxAggregateInputType
  }

  export type GetM_master_departmentAggregateType<T extends M_master_departmentAggregateArgs> = {
        [P in keyof T & keyof AggregateM_master_department]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateM_master_department[P]>
      : GetScalarType<T[P], AggregateM_master_department[P]>
  }




  export type m_master_departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_master_departmentWhereInput
    orderBy?: m_master_departmentOrderByWithAggregationInput | m_master_departmentOrderByWithAggregationInput[]
    by: M_master_departmentScalarFieldEnum[] | M_master_departmentScalarFieldEnum
    having?: m_master_departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: M_master_departmentCountAggregateInputType | true
    _avg?: M_master_departmentAvgAggregateInputType
    _sum?: M_master_departmentSumAggregateInputType
    _min?: M_master_departmentMinAggregateInputType
    _max?: M_master_departmentMaxAggregateInputType
  }

  export type M_master_departmentGroupByOutputType = {
    id: number
    name: string
    code: string
    license_id: number
    description: string
    created_on: Date
    created_by_id: number
    modified_on: Date | null
    modified_by_id: number | null
    status: boolean
    _count: M_master_departmentCountAggregateOutputType | null
    _avg: M_master_departmentAvgAggregateOutputType | null
    _sum: M_master_departmentSumAggregateOutputType | null
    _min: M_master_departmentMinAggregateOutputType | null
    _max: M_master_departmentMaxAggregateOutputType | null
  }

  type GetM_master_departmentGroupByPayload<T extends m_master_departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<M_master_departmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof M_master_departmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], M_master_departmentGroupByOutputType[P]>
            : GetScalarType<T[P], M_master_departmentGroupByOutputType[P]>
        }
      >
    >


  export type m_master_departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    license_id?: boolean
    description?: boolean
    created_on?: boolean
    created_by_id?: boolean
    modified_on?: boolean
    modified_by_id?: boolean
    status?: boolean
    created_by?: boolean | user_informationDefaultArgs<ExtArgs>
    modified_by?: boolean | m_master_department$modified_byArgs<ExtArgs>
    m_master_department_log?: boolean | m_master_department$m_master_department_logArgs<ExtArgs>
    _count?: boolean | M_master_departmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["m_master_department"]>



  export type m_master_departmentSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    license_id?: boolean
    description?: boolean
    created_on?: boolean
    created_by_id?: boolean
    modified_on?: boolean
    modified_by_id?: boolean
    status?: boolean
  }

  export type m_master_departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "license_id" | "description" | "created_on" | "created_by_id" | "modified_on" | "modified_by_id" | "status", ExtArgs["result"]["m_master_department"]>
  export type m_master_departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | user_informationDefaultArgs<ExtArgs>
    modified_by?: boolean | m_master_department$modified_byArgs<ExtArgs>
    m_master_department_log?: boolean | m_master_department$m_master_department_logArgs<ExtArgs>
    _count?: boolean | M_master_departmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $m_master_departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "m_master_department"
    objects: {
      created_by: Prisma.$user_informationPayload<ExtArgs>
      modified_by: Prisma.$user_informationPayload<ExtArgs> | null
      m_master_department_log: Prisma.$m_master_department_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      license_id: number
      description: string
      created_on: Date
      created_by_id: number
      modified_on: Date | null
      modified_by_id: number | null
      status: boolean
    }, ExtArgs["result"]["m_master_department"]>
    composites: {}
  }

  type m_master_departmentGetPayload<S extends boolean | null | undefined | m_master_departmentDefaultArgs> = $Result.GetResult<Prisma.$m_master_departmentPayload, S>

  type m_master_departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<m_master_departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: M_master_departmentCountAggregateInputType | true
    }

  export interface m_master_departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['m_master_department'], meta: { name: 'm_master_department' } }
    /**
     * Find zero or one M_master_department that matches the filter.
     * @param {m_master_departmentFindUniqueArgs} args - Arguments to find a M_master_department
     * @example
     * // Get one M_master_department
     * const m_master_department = await prisma.m_master_department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends m_master_departmentFindUniqueArgs>(args: SelectSubset<T, m_master_departmentFindUniqueArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one M_master_department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {m_master_departmentFindUniqueOrThrowArgs} args - Arguments to find a M_master_department
     * @example
     * // Get one M_master_department
     * const m_master_department = await prisma.m_master_department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends m_master_departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, m_master_departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_master_department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_departmentFindFirstArgs} args - Arguments to find a M_master_department
     * @example
     * // Get one M_master_department
     * const m_master_department = await prisma.m_master_department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends m_master_departmentFindFirstArgs>(args?: SelectSubset<T, m_master_departmentFindFirstArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_master_department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_departmentFindFirstOrThrowArgs} args - Arguments to find a M_master_department
     * @example
     * // Get one M_master_department
     * const m_master_department = await prisma.m_master_department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends m_master_departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, m_master_departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more M_master_departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all M_master_departments
     * const m_master_departments = await prisma.m_master_department.findMany()
     * 
     * // Get first 10 M_master_departments
     * const m_master_departments = await prisma.m_master_department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const m_master_departmentWithIdOnly = await prisma.m_master_department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends m_master_departmentFindManyArgs>(args?: SelectSubset<T, m_master_departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a M_master_department.
     * @param {m_master_departmentCreateArgs} args - Arguments to create a M_master_department.
     * @example
     * // Create one M_master_department
     * const M_master_department = await prisma.m_master_department.create({
     *   data: {
     *     // ... data to create a M_master_department
     *   }
     * })
     * 
     */
    create<T extends m_master_departmentCreateArgs>(args: SelectSubset<T, m_master_departmentCreateArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many M_master_departments.
     * @param {m_master_departmentCreateManyArgs} args - Arguments to create many M_master_departments.
     * @example
     * // Create many M_master_departments
     * const m_master_department = await prisma.m_master_department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends m_master_departmentCreateManyArgs>(args?: SelectSubset<T, m_master_departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a M_master_department.
     * @param {m_master_departmentDeleteArgs} args - Arguments to delete one M_master_department.
     * @example
     * // Delete one M_master_department
     * const M_master_department = await prisma.m_master_department.delete({
     *   where: {
     *     // ... filter to delete one M_master_department
     *   }
     * })
     * 
     */
    delete<T extends m_master_departmentDeleteArgs>(args: SelectSubset<T, m_master_departmentDeleteArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one M_master_department.
     * @param {m_master_departmentUpdateArgs} args - Arguments to update one M_master_department.
     * @example
     * // Update one M_master_department
     * const m_master_department = await prisma.m_master_department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends m_master_departmentUpdateArgs>(args: SelectSubset<T, m_master_departmentUpdateArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more M_master_departments.
     * @param {m_master_departmentDeleteManyArgs} args - Arguments to filter M_master_departments to delete.
     * @example
     * // Delete a few M_master_departments
     * const { count } = await prisma.m_master_department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends m_master_departmentDeleteManyArgs>(args?: SelectSubset<T, m_master_departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M_master_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many M_master_departments
     * const m_master_department = await prisma.m_master_department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends m_master_departmentUpdateManyArgs>(args: SelectSubset<T, m_master_departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one M_master_department.
     * @param {m_master_departmentUpsertArgs} args - Arguments to update or create a M_master_department.
     * @example
     * // Update or create a M_master_department
     * const m_master_department = await prisma.m_master_department.upsert({
     *   create: {
     *     // ... data to create a M_master_department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the M_master_department we want to update
     *   }
     * })
     */
    upsert<T extends m_master_departmentUpsertArgs>(args: SelectSubset<T, m_master_departmentUpsertArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of M_master_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_departmentCountArgs} args - Arguments to filter M_master_departments to count.
     * @example
     * // Count the number of M_master_departments
     * const count = await prisma.m_master_department.count({
     *   where: {
     *     // ... the filter for the M_master_departments we want to count
     *   }
     * })
    **/
    count<T extends m_master_departmentCountArgs>(
      args?: Subset<T, m_master_departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], M_master_departmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a M_master_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {M_master_departmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends M_master_departmentAggregateArgs>(args: Subset<T, M_master_departmentAggregateArgs>): Prisma.PrismaPromise<GetM_master_departmentAggregateType<T>>

    /**
     * Group by M_master_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_departmentGroupByArgs} args - Group by arguments.
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
      T extends m_master_departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: m_master_departmentGroupByArgs['orderBy'] }
        : { orderBy?: m_master_departmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, m_master_departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetM_master_departmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the m_master_department model
   */
  readonly fields: m_master_departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for m_master_department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__m_master_departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends user_informationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_informationDefaultArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modified_by<T extends m_master_department$modified_byArgs<ExtArgs> = {}>(args?: Subset<T, m_master_department$modified_byArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    m_master_department_log<T extends m_master_department$m_master_department_logArgs<ExtArgs> = {}>(args?: Subset<T, m_master_department$m_master_department_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the m_master_department model
   */
  interface m_master_departmentFieldRefs {
    readonly id: FieldRef<"m_master_department", 'Int'>
    readonly name: FieldRef<"m_master_department", 'String'>
    readonly code: FieldRef<"m_master_department", 'String'>
    readonly license_id: FieldRef<"m_master_department", 'Int'>
    readonly description: FieldRef<"m_master_department", 'String'>
    readonly created_on: FieldRef<"m_master_department", 'DateTime'>
    readonly created_by_id: FieldRef<"m_master_department", 'Int'>
    readonly modified_on: FieldRef<"m_master_department", 'DateTime'>
    readonly modified_by_id: FieldRef<"m_master_department", 'Int'>
    readonly status: FieldRef<"m_master_department", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * m_master_department findUnique
   */
  export type m_master_departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department to fetch.
     */
    where: m_master_departmentWhereUniqueInput
  }

  /**
   * m_master_department findUniqueOrThrow
   */
  export type m_master_departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department to fetch.
     */
    where: m_master_departmentWhereUniqueInput
  }

  /**
   * m_master_department findFirst
   */
  export type m_master_departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department to fetch.
     */
    where?: m_master_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_departments to fetch.
     */
    orderBy?: m_master_departmentOrderByWithRelationInput | m_master_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_master_departments.
     */
    cursor?: m_master_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_master_departments.
     */
    distinct?: M_master_departmentScalarFieldEnum | M_master_departmentScalarFieldEnum[]
  }

  /**
   * m_master_department findFirstOrThrow
   */
  export type m_master_departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department to fetch.
     */
    where?: m_master_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_departments to fetch.
     */
    orderBy?: m_master_departmentOrderByWithRelationInput | m_master_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_master_departments.
     */
    cursor?: m_master_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_master_departments.
     */
    distinct?: M_master_departmentScalarFieldEnum | M_master_departmentScalarFieldEnum[]
  }

  /**
   * m_master_department findMany
   */
  export type m_master_departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * Filter, which m_master_departments to fetch.
     */
    where?: m_master_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_departments to fetch.
     */
    orderBy?: m_master_departmentOrderByWithRelationInput | m_master_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing m_master_departments.
     */
    cursor?: m_master_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_departments.
     */
    skip?: number
    distinct?: M_master_departmentScalarFieldEnum | M_master_departmentScalarFieldEnum[]
  }

  /**
   * m_master_department create
   */
  export type m_master_departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a m_master_department.
     */
    data: XOR<m_master_departmentCreateInput, m_master_departmentUncheckedCreateInput>
  }

  /**
   * m_master_department createMany
   */
  export type m_master_departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many m_master_departments.
     */
    data: m_master_departmentCreateManyInput | m_master_departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * m_master_department update
   */
  export type m_master_departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a m_master_department.
     */
    data: XOR<m_master_departmentUpdateInput, m_master_departmentUncheckedUpdateInput>
    /**
     * Choose, which m_master_department to update.
     */
    where: m_master_departmentWhereUniqueInput
  }

  /**
   * m_master_department updateMany
   */
  export type m_master_departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update m_master_departments.
     */
    data: XOR<m_master_departmentUpdateManyMutationInput, m_master_departmentUncheckedUpdateManyInput>
    /**
     * Filter which m_master_departments to update
     */
    where?: m_master_departmentWhereInput
    /**
     * Limit how many m_master_departments to update.
     */
    limit?: number
  }

  /**
   * m_master_department upsert
   */
  export type m_master_departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the m_master_department to update in case it exists.
     */
    where: m_master_departmentWhereUniqueInput
    /**
     * In case the m_master_department found by the `where` argument doesn't exist, create a new m_master_department with this data.
     */
    create: XOR<m_master_departmentCreateInput, m_master_departmentUncheckedCreateInput>
    /**
     * In case the m_master_department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<m_master_departmentUpdateInput, m_master_departmentUncheckedUpdateInput>
  }

  /**
   * m_master_department delete
   */
  export type m_master_departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    /**
     * Filter which m_master_department to delete.
     */
    where: m_master_departmentWhereUniqueInput
  }

  /**
   * m_master_department deleteMany
   */
  export type m_master_departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_master_departments to delete
     */
    where?: m_master_departmentWhereInput
    /**
     * Limit how many m_master_departments to delete.
     */
    limit?: number
  }

  /**
   * m_master_department.modified_by
   */
  export type m_master_department$modified_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_information
     */
    select?: user_informationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_information
     */
    omit?: user_informationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_informationInclude<ExtArgs> | null
    where?: user_informationWhereInput
  }

  /**
   * m_master_department.m_master_department_log
   */
  export type m_master_department$m_master_department_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    where?: m_master_department_logWhereInput
    orderBy?: m_master_department_logOrderByWithRelationInput | m_master_department_logOrderByWithRelationInput[]
    cursor?: m_master_department_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: M_master_department_logScalarFieldEnum | M_master_department_logScalarFieldEnum[]
  }

  /**
   * m_master_department without action
   */
  export type m_master_departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
  }


  /**
   * Model m_master_department_log
   */

  export type AggregateM_master_department_log = {
    _count: M_master_department_logCountAggregateOutputType | null
    _avg: M_master_department_logAvgAggregateOutputType | null
    _sum: M_master_department_logSumAggregateOutputType | null
    _min: M_master_department_logMinAggregateOutputType | null
    _max: M_master_department_logMaxAggregateOutputType | null
  }

  export type M_master_department_logAvgAggregateOutputType = {
    id: number | null
    license_id: number | null
    department_id: number | null
    created_by_id: number | null
  }

  export type M_master_department_logSumAggregateOutputType = {
    id: number | null
    license_id: number | null
    department_id: number | null
    created_by_id: number | null
  }

  export type M_master_department_logMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    license_id: number | null
    description: string | null
    created_on: Date | null
    status: boolean | null
    change_description: string | null
    action: $Enums.action | null
    department_id: number | null
    created_by_id: number | null
  }

  export type M_master_department_logMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    license_id: number | null
    description: string | null
    created_on: Date | null
    status: boolean | null
    change_description: string | null
    action: $Enums.action | null
    department_id: number | null
    created_by_id: number | null
  }

  export type M_master_department_logCountAggregateOutputType = {
    id: number
    name: number
    code: number
    license_id: number
    description: number
    created_on: number
    status: number
    change_description: number
    action: number
    department_id: number
    created_by_id: number
    _all: number
  }


  export type M_master_department_logAvgAggregateInputType = {
    id?: true
    license_id?: true
    department_id?: true
    created_by_id?: true
  }

  export type M_master_department_logSumAggregateInputType = {
    id?: true
    license_id?: true
    department_id?: true
    created_by_id?: true
  }

  export type M_master_department_logMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    license_id?: true
    description?: true
    created_on?: true
    status?: true
    change_description?: true
    action?: true
    department_id?: true
    created_by_id?: true
  }

  export type M_master_department_logMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    license_id?: true
    description?: true
    created_on?: true
    status?: true
    change_description?: true
    action?: true
    department_id?: true
    created_by_id?: true
  }

  export type M_master_department_logCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    license_id?: true
    description?: true
    created_on?: true
    status?: true
    change_description?: true
    action?: true
    department_id?: true
    created_by_id?: true
    _all?: true
  }

  export type M_master_department_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_master_department_log to aggregate.
     */
    where?: m_master_department_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_department_logs to fetch.
     */
    orderBy?: m_master_department_logOrderByWithRelationInput | m_master_department_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: m_master_department_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_department_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_department_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned m_master_department_logs
    **/
    _count?: true | M_master_department_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: M_master_department_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: M_master_department_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: M_master_department_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: M_master_department_logMaxAggregateInputType
  }

  export type GetM_master_department_logAggregateType<T extends M_master_department_logAggregateArgs> = {
        [P in keyof T & keyof AggregateM_master_department_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateM_master_department_log[P]>
      : GetScalarType<T[P], AggregateM_master_department_log[P]>
  }




  export type m_master_department_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: m_master_department_logWhereInput
    orderBy?: m_master_department_logOrderByWithAggregationInput | m_master_department_logOrderByWithAggregationInput[]
    by: M_master_department_logScalarFieldEnum[] | M_master_department_logScalarFieldEnum
    having?: m_master_department_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: M_master_department_logCountAggregateInputType | true
    _avg?: M_master_department_logAvgAggregateInputType
    _sum?: M_master_department_logSumAggregateInputType
    _min?: M_master_department_logMinAggregateInputType
    _max?: M_master_department_logMaxAggregateInputType
  }

  export type M_master_department_logGroupByOutputType = {
    id: number
    name: string | null
    code: string | null
    license_id: number
    description: string | null
    created_on: Date
    status: boolean | null
    change_description: string
    action: $Enums.action
    department_id: number | null
    created_by_id: number
    _count: M_master_department_logCountAggregateOutputType | null
    _avg: M_master_department_logAvgAggregateOutputType | null
    _sum: M_master_department_logSumAggregateOutputType | null
    _min: M_master_department_logMinAggregateOutputType | null
    _max: M_master_department_logMaxAggregateOutputType | null
  }

  type GetM_master_department_logGroupByPayload<T extends m_master_department_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<M_master_department_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof M_master_department_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], M_master_department_logGroupByOutputType[P]>
            : GetScalarType<T[P], M_master_department_logGroupByOutputType[P]>
        }
      >
    >


  export type m_master_department_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    license_id?: boolean
    description?: boolean
    created_on?: boolean
    status?: boolean
    change_description?: boolean
    action?: boolean
    department_id?: boolean
    created_by_id?: boolean
    created_by?: boolean | user_informationDefaultArgs<ExtArgs>
    department?: boolean | m_master_department_log$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["m_master_department_log"]>



  export type m_master_department_logSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    license_id?: boolean
    description?: boolean
    created_on?: boolean
    status?: boolean
    change_description?: boolean
    action?: boolean
    department_id?: boolean
    created_by_id?: boolean
  }

  export type m_master_department_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "license_id" | "description" | "created_on" | "status" | "change_description" | "action" | "department_id" | "created_by_id", ExtArgs["result"]["m_master_department_log"]>
  export type m_master_department_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by?: boolean | user_informationDefaultArgs<ExtArgs>
    department?: boolean | m_master_department_log$departmentArgs<ExtArgs>
  }

  export type $m_master_department_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "m_master_department_log"
    objects: {
      created_by: Prisma.$user_informationPayload<ExtArgs>
      department: Prisma.$m_master_departmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      code: string | null
      license_id: number
      description: string | null
      created_on: Date
      status: boolean | null
      change_description: string
      action: $Enums.action
      department_id: number | null
      created_by_id: number
    }, ExtArgs["result"]["m_master_department_log"]>
    composites: {}
  }

  type m_master_department_logGetPayload<S extends boolean | null | undefined | m_master_department_logDefaultArgs> = $Result.GetResult<Prisma.$m_master_department_logPayload, S>

  type m_master_department_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<m_master_department_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: M_master_department_logCountAggregateInputType | true
    }

  export interface m_master_department_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['m_master_department_log'], meta: { name: 'm_master_department_log' } }
    /**
     * Find zero or one M_master_department_log that matches the filter.
     * @param {m_master_department_logFindUniqueArgs} args - Arguments to find a M_master_department_log
     * @example
     * // Get one M_master_department_log
     * const m_master_department_log = await prisma.m_master_department_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends m_master_department_logFindUniqueArgs>(args: SelectSubset<T, m_master_department_logFindUniqueArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one M_master_department_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {m_master_department_logFindUniqueOrThrowArgs} args - Arguments to find a M_master_department_log
     * @example
     * // Get one M_master_department_log
     * const m_master_department_log = await prisma.m_master_department_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends m_master_department_logFindUniqueOrThrowArgs>(args: SelectSubset<T, m_master_department_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_master_department_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_department_logFindFirstArgs} args - Arguments to find a M_master_department_log
     * @example
     * // Get one M_master_department_log
     * const m_master_department_log = await prisma.m_master_department_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends m_master_department_logFindFirstArgs>(args?: SelectSubset<T, m_master_department_logFindFirstArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first M_master_department_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_department_logFindFirstOrThrowArgs} args - Arguments to find a M_master_department_log
     * @example
     * // Get one M_master_department_log
     * const m_master_department_log = await prisma.m_master_department_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends m_master_department_logFindFirstOrThrowArgs>(args?: SelectSubset<T, m_master_department_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more M_master_department_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_department_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all M_master_department_logs
     * const m_master_department_logs = await prisma.m_master_department_log.findMany()
     * 
     * // Get first 10 M_master_department_logs
     * const m_master_department_logs = await prisma.m_master_department_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const m_master_department_logWithIdOnly = await prisma.m_master_department_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends m_master_department_logFindManyArgs>(args?: SelectSubset<T, m_master_department_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a M_master_department_log.
     * @param {m_master_department_logCreateArgs} args - Arguments to create a M_master_department_log.
     * @example
     * // Create one M_master_department_log
     * const M_master_department_log = await prisma.m_master_department_log.create({
     *   data: {
     *     // ... data to create a M_master_department_log
     *   }
     * })
     * 
     */
    create<T extends m_master_department_logCreateArgs>(args: SelectSubset<T, m_master_department_logCreateArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many M_master_department_logs.
     * @param {m_master_department_logCreateManyArgs} args - Arguments to create many M_master_department_logs.
     * @example
     * // Create many M_master_department_logs
     * const m_master_department_log = await prisma.m_master_department_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends m_master_department_logCreateManyArgs>(args?: SelectSubset<T, m_master_department_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a M_master_department_log.
     * @param {m_master_department_logDeleteArgs} args - Arguments to delete one M_master_department_log.
     * @example
     * // Delete one M_master_department_log
     * const M_master_department_log = await prisma.m_master_department_log.delete({
     *   where: {
     *     // ... filter to delete one M_master_department_log
     *   }
     * })
     * 
     */
    delete<T extends m_master_department_logDeleteArgs>(args: SelectSubset<T, m_master_department_logDeleteArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one M_master_department_log.
     * @param {m_master_department_logUpdateArgs} args - Arguments to update one M_master_department_log.
     * @example
     * // Update one M_master_department_log
     * const m_master_department_log = await prisma.m_master_department_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends m_master_department_logUpdateArgs>(args: SelectSubset<T, m_master_department_logUpdateArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more M_master_department_logs.
     * @param {m_master_department_logDeleteManyArgs} args - Arguments to filter M_master_department_logs to delete.
     * @example
     * // Delete a few M_master_department_logs
     * const { count } = await prisma.m_master_department_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends m_master_department_logDeleteManyArgs>(args?: SelectSubset<T, m_master_department_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more M_master_department_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_department_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many M_master_department_logs
     * const m_master_department_log = await prisma.m_master_department_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends m_master_department_logUpdateManyArgs>(args: SelectSubset<T, m_master_department_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one M_master_department_log.
     * @param {m_master_department_logUpsertArgs} args - Arguments to update or create a M_master_department_log.
     * @example
     * // Update or create a M_master_department_log
     * const m_master_department_log = await prisma.m_master_department_log.upsert({
     *   create: {
     *     // ... data to create a M_master_department_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the M_master_department_log we want to update
     *   }
     * })
     */
    upsert<T extends m_master_department_logUpsertArgs>(args: SelectSubset<T, m_master_department_logUpsertArgs<ExtArgs>>): Prisma__m_master_department_logClient<$Result.GetResult<Prisma.$m_master_department_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of M_master_department_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_department_logCountArgs} args - Arguments to filter M_master_department_logs to count.
     * @example
     * // Count the number of M_master_department_logs
     * const count = await prisma.m_master_department_log.count({
     *   where: {
     *     // ... the filter for the M_master_department_logs we want to count
     *   }
     * })
    **/
    count<T extends m_master_department_logCountArgs>(
      args?: Subset<T, m_master_department_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], M_master_department_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a M_master_department_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {M_master_department_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends M_master_department_logAggregateArgs>(args: Subset<T, M_master_department_logAggregateArgs>): Prisma.PrismaPromise<GetM_master_department_logAggregateType<T>>

    /**
     * Group by M_master_department_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {m_master_department_logGroupByArgs} args - Group by arguments.
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
      T extends m_master_department_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: m_master_department_logGroupByArgs['orderBy'] }
        : { orderBy?: m_master_department_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, m_master_department_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetM_master_department_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the m_master_department_log model
   */
  readonly fields: m_master_department_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for m_master_department_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__m_master_department_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by<T extends user_informationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_informationDefaultArgs<ExtArgs>>): Prisma__user_informationClient<$Result.GetResult<Prisma.$user_informationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends m_master_department_log$departmentArgs<ExtArgs> = {}>(args?: Subset<T, m_master_department_log$departmentArgs<ExtArgs>>): Prisma__m_master_departmentClient<$Result.GetResult<Prisma.$m_master_departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the m_master_department_log model
   */
  interface m_master_department_logFieldRefs {
    readonly id: FieldRef<"m_master_department_log", 'Int'>
    readonly name: FieldRef<"m_master_department_log", 'String'>
    readonly code: FieldRef<"m_master_department_log", 'String'>
    readonly license_id: FieldRef<"m_master_department_log", 'Int'>
    readonly description: FieldRef<"m_master_department_log", 'String'>
    readonly created_on: FieldRef<"m_master_department_log", 'DateTime'>
    readonly status: FieldRef<"m_master_department_log", 'Boolean'>
    readonly change_description: FieldRef<"m_master_department_log", 'String'>
    readonly action: FieldRef<"m_master_department_log", 'action'>
    readonly department_id: FieldRef<"m_master_department_log", 'Int'>
    readonly created_by_id: FieldRef<"m_master_department_log", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * m_master_department_log findUnique
   */
  export type m_master_department_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department_log to fetch.
     */
    where: m_master_department_logWhereUniqueInput
  }

  /**
   * m_master_department_log findUniqueOrThrow
   */
  export type m_master_department_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department_log to fetch.
     */
    where: m_master_department_logWhereUniqueInput
  }

  /**
   * m_master_department_log findFirst
   */
  export type m_master_department_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department_log to fetch.
     */
    where?: m_master_department_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_department_logs to fetch.
     */
    orderBy?: m_master_department_logOrderByWithRelationInput | m_master_department_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_master_department_logs.
     */
    cursor?: m_master_department_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_department_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_department_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_master_department_logs.
     */
    distinct?: M_master_department_logScalarFieldEnum | M_master_department_logScalarFieldEnum[]
  }

  /**
   * m_master_department_log findFirstOrThrow
   */
  export type m_master_department_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department_log to fetch.
     */
    where?: m_master_department_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_department_logs to fetch.
     */
    orderBy?: m_master_department_logOrderByWithRelationInput | m_master_department_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for m_master_department_logs.
     */
    cursor?: m_master_department_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_department_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_department_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of m_master_department_logs.
     */
    distinct?: M_master_department_logScalarFieldEnum | M_master_department_logScalarFieldEnum[]
  }

  /**
   * m_master_department_log findMany
   */
  export type m_master_department_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * Filter, which m_master_department_logs to fetch.
     */
    where?: m_master_department_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of m_master_department_logs to fetch.
     */
    orderBy?: m_master_department_logOrderByWithRelationInput | m_master_department_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing m_master_department_logs.
     */
    cursor?: m_master_department_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` m_master_department_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` m_master_department_logs.
     */
    skip?: number
    distinct?: M_master_department_logScalarFieldEnum | M_master_department_logScalarFieldEnum[]
  }

  /**
   * m_master_department_log create
   */
  export type m_master_department_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * The data needed to create a m_master_department_log.
     */
    data: XOR<m_master_department_logCreateInput, m_master_department_logUncheckedCreateInput>
  }

  /**
   * m_master_department_log createMany
   */
  export type m_master_department_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many m_master_department_logs.
     */
    data: m_master_department_logCreateManyInput | m_master_department_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * m_master_department_log update
   */
  export type m_master_department_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * The data needed to update a m_master_department_log.
     */
    data: XOR<m_master_department_logUpdateInput, m_master_department_logUncheckedUpdateInput>
    /**
     * Choose, which m_master_department_log to update.
     */
    where: m_master_department_logWhereUniqueInput
  }

  /**
   * m_master_department_log updateMany
   */
  export type m_master_department_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update m_master_department_logs.
     */
    data: XOR<m_master_department_logUpdateManyMutationInput, m_master_department_logUncheckedUpdateManyInput>
    /**
     * Filter which m_master_department_logs to update
     */
    where?: m_master_department_logWhereInput
    /**
     * Limit how many m_master_department_logs to update.
     */
    limit?: number
  }

  /**
   * m_master_department_log upsert
   */
  export type m_master_department_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * The filter to search for the m_master_department_log to update in case it exists.
     */
    where: m_master_department_logWhereUniqueInput
    /**
     * In case the m_master_department_log found by the `where` argument doesn't exist, create a new m_master_department_log with this data.
     */
    create: XOR<m_master_department_logCreateInput, m_master_department_logUncheckedCreateInput>
    /**
     * In case the m_master_department_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<m_master_department_logUpdateInput, m_master_department_logUncheckedUpdateInput>
  }

  /**
   * m_master_department_log delete
   */
  export type m_master_department_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
    /**
     * Filter which m_master_department_log to delete.
     */
    where: m_master_department_logWhereUniqueInput
  }

  /**
   * m_master_department_log deleteMany
   */
  export type m_master_department_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which m_master_department_logs to delete
     */
    where?: m_master_department_logWhereInput
    /**
     * Limit how many m_master_department_logs to delete.
     */
    limit?: number
  }

  /**
   * m_master_department_log.department
   */
  export type m_master_department_log$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department
     */
    select?: m_master_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department
     */
    omit?: m_master_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_departmentInclude<ExtArgs> | null
    where?: m_master_departmentWhereInput
  }

  /**
   * m_master_department_log without action
   */
  export type m_master_department_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the m_master_department_log
     */
    select?: m_master_department_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the m_master_department_log
     */
    omit?: m_master_department_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: m_master_department_logInclude<ExtArgs> | null
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


  export const User_credentialsScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    license_id: 'license_id'
  };

  export type User_credentialsScalarFieldEnum = (typeof User_credentialsScalarFieldEnum)[keyof typeof User_credentialsScalarFieldEnum]


  export const User_informationScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    license_id: 'license_id',
    credential_id: 'credential_id'
  };

  export type User_informationScalarFieldEnum = (typeof User_informationScalarFieldEnum)[keyof typeof User_informationScalarFieldEnum]


  export const M_master_departmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    license_id: 'license_id',
    description: 'description',
    created_on: 'created_on',
    created_by_id: 'created_by_id',
    modified_on: 'modified_on',
    modified_by_id: 'modified_by_id',
    status: 'status'
  };

  export type M_master_departmentScalarFieldEnum = (typeof M_master_departmentScalarFieldEnum)[keyof typeof M_master_departmentScalarFieldEnum]


  export const M_master_department_logScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    license_id: 'license_id',
    description: 'description',
    created_on: 'created_on',
    status: 'status',
    change_description: 'change_description',
    action: 'action',
    department_id: 'department_id',
    created_by_id: 'created_by_id'
  };

  export type M_master_department_logScalarFieldEnum = (typeof M_master_department_logScalarFieldEnum)[keyof typeof M_master_department_logScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const user_credentialsOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type user_credentialsOrderByRelevanceFieldEnum = (typeof user_credentialsOrderByRelevanceFieldEnum)[keyof typeof user_credentialsOrderByRelevanceFieldEnum]


  export const user_informationOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type user_informationOrderByRelevanceFieldEnum = (typeof user_informationOrderByRelevanceFieldEnum)[keyof typeof user_informationOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const m_master_departmentOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code',
    description: 'description'
  };

  export type m_master_departmentOrderByRelevanceFieldEnum = (typeof m_master_departmentOrderByRelevanceFieldEnum)[keyof typeof m_master_departmentOrderByRelevanceFieldEnum]


  export const m_master_department_logOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code',
    description: 'description',
    change_description: 'change_description'
  };

  export type m_master_department_logOrderByRelevanceFieldEnum = (typeof m_master_department_logOrderByRelevanceFieldEnum)[keyof typeof m_master_department_logOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'action'
   */
  export type EnumactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'action'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_credentialsWhereInput = {
    AND?: user_credentialsWhereInput | user_credentialsWhereInput[]
    OR?: user_credentialsWhereInput[]
    NOT?: user_credentialsWhereInput | user_credentialsWhereInput[]
    id?: IntFilter<"user_credentials"> | number
    username?: StringFilter<"user_credentials"> | string
    password?: StringFilter<"user_credentials"> | string
    license_id?: IntFilter<"user_credentials"> | number
    user_information?: XOR<User_informationNullableScalarRelationFilter, user_informationWhereInput> | null
  }

  export type user_credentialsOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_id?: SortOrder
    user_information?: user_informationOrderByWithRelationInput
    _relevance?: user_credentialsOrderByRelevanceInput
  }

  export type user_credentialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_credentialsWhereInput | user_credentialsWhereInput[]
    OR?: user_credentialsWhereInput[]
    NOT?: user_credentialsWhereInput | user_credentialsWhereInput[]
    username?: StringFilter<"user_credentials"> | string
    password?: StringFilter<"user_credentials"> | string
    license_id?: IntFilter<"user_credentials"> | number
    user_information?: XOR<User_informationNullableScalarRelationFilter, user_informationWhereInput> | null
  }, "id">

  export type user_credentialsOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_id?: SortOrder
    _count?: user_credentialsCountOrderByAggregateInput
    _avg?: user_credentialsAvgOrderByAggregateInput
    _max?: user_credentialsMaxOrderByAggregateInput
    _min?: user_credentialsMinOrderByAggregateInput
    _sum?: user_credentialsSumOrderByAggregateInput
  }

  export type user_credentialsScalarWhereWithAggregatesInput = {
    AND?: user_credentialsScalarWhereWithAggregatesInput | user_credentialsScalarWhereWithAggregatesInput[]
    OR?: user_credentialsScalarWhereWithAggregatesInput[]
    NOT?: user_credentialsScalarWhereWithAggregatesInput | user_credentialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_credentials"> | number
    username?: StringWithAggregatesFilter<"user_credentials"> | string
    password?: StringWithAggregatesFilter<"user_credentials"> | string
    license_id?: IntWithAggregatesFilter<"user_credentials"> | number
  }

  export type user_informationWhereInput = {
    AND?: user_informationWhereInput | user_informationWhereInput[]
    OR?: user_informationWhereInput[]
    NOT?: user_informationWhereInput | user_informationWhereInput[]
    id?: IntFilter<"user_information"> | number
    first_name?: StringFilter<"user_information"> | string
    last_name?: StringFilter<"user_information"> | string
    license_id?: IntFilter<"user_information"> | number
    credential_id?: IntFilter<"user_information"> | number
    user_credential?: XOR<User_credentialsScalarRelationFilter, user_credentialsWhereInput>
    c_master_department?: M_master_departmentListRelationFilter
    m_master_department?: M_master_departmentListRelationFilter
    m_master_department_log?: M_master_department_logListRelationFilter
  }

  export type user_informationOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
    user_credential?: user_credentialsOrderByWithRelationInput
    c_master_department?: m_master_departmentOrderByRelationAggregateInput
    m_master_department?: m_master_departmentOrderByRelationAggregateInput
    m_master_department_log?: m_master_department_logOrderByRelationAggregateInput
    _relevance?: user_informationOrderByRelevanceInput
  }

  export type user_informationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    credential_id?: number
    AND?: user_informationWhereInput | user_informationWhereInput[]
    OR?: user_informationWhereInput[]
    NOT?: user_informationWhereInput | user_informationWhereInput[]
    first_name?: StringFilter<"user_information"> | string
    last_name?: StringFilter<"user_information"> | string
    license_id?: IntFilter<"user_information"> | number
    user_credential?: XOR<User_credentialsScalarRelationFilter, user_credentialsWhereInput>
    c_master_department?: M_master_departmentListRelationFilter
    m_master_department?: M_master_departmentListRelationFilter
    m_master_department_log?: M_master_department_logListRelationFilter
  }, "id" | "credential_id">

  export type user_informationOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
    _count?: user_informationCountOrderByAggregateInput
    _avg?: user_informationAvgOrderByAggregateInput
    _max?: user_informationMaxOrderByAggregateInput
    _min?: user_informationMinOrderByAggregateInput
    _sum?: user_informationSumOrderByAggregateInput
  }

  export type user_informationScalarWhereWithAggregatesInput = {
    AND?: user_informationScalarWhereWithAggregatesInput | user_informationScalarWhereWithAggregatesInput[]
    OR?: user_informationScalarWhereWithAggregatesInput[]
    NOT?: user_informationScalarWhereWithAggregatesInput | user_informationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_information"> | number
    first_name?: StringWithAggregatesFilter<"user_information"> | string
    last_name?: StringWithAggregatesFilter<"user_information"> | string
    license_id?: IntWithAggregatesFilter<"user_information"> | number
    credential_id?: IntWithAggregatesFilter<"user_information"> | number
  }

  export type m_master_departmentWhereInput = {
    AND?: m_master_departmentWhereInput | m_master_departmentWhereInput[]
    OR?: m_master_departmentWhereInput[]
    NOT?: m_master_departmentWhereInput | m_master_departmentWhereInput[]
    id?: IntFilter<"m_master_department"> | number
    name?: StringFilter<"m_master_department"> | string
    code?: StringFilter<"m_master_department"> | string
    license_id?: IntFilter<"m_master_department"> | number
    description?: StringFilter<"m_master_department"> | string
    created_on?: DateTimeFilter<"m_master_department"> | Date | string
    created_by_id?: IntFilter<"m_master_department"> | number
    modified_on?: DateTimeNullableFilter<"m_master_department"> | Date | string | null
    modified_by_id?: IntNullableFilter<"m_master_department"> | number | null
    status?: BoolFilter<"m_master_department"> | boolean
    created_by?: XOR<User_informationScalarRelationFilter, user_informationWhereInput>
    modified_by?: XOR<User_informationNullableScalarRelationFilter, user_informationWhereInput> | null
    m_master_department_log?: M_master_department_logListRelationFilter
  }

  export type m_master_departmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    created_by_id?: SortOrder
    modified_on?: SortOrderInput | SortOrder
    modified_by_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_by?: user_informationOrderByWithRelationInput
    modified_by?: user_informationOrderByWithRelationInput
    m_master_department_log?: m_master_department_logOrderByRelationAggregateInput
    _relevance?: m_master_departmentOrderByRelevanceInput
  }

  export type m_master_departmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: m_master_departmentWhereInput | m_master_departmentWhereInput[]
    OR?: m_master_departmentWhereInput[]
    NOT?: m_master_departmentWhereInput | m_master_departmentWhereInput[]
    name?: StringFilter<"m_master_department"> | string
    code?: StringFilter<"m_master_department"> | string
    license_id?: IntFilter<"m_master_department"> | number
    description?: StringFilter<"m_master_department"> | string
    created_on?: DateTimeFilter<"m_master_department"> | Date | string
    created_by_id?: IntFilter<"m_master_department"> | number
    modified_on?: DateTimeNullableFilter<"m_master_department"> | Date | string | null
    modified_by_id?: IntNullableFilter<"m_master_department"> | number | null
    status?: BoolFilter<"m_master_department"> | boolean
    created_by?: XOR<User_informationScalarRelationFilter, user_informationWhereInput>
    modified_by?: XOR<User_informationNullableScalarRelationFilter, user_informationWhereInput> | null
    m_master_department_log?: M_master_department_logListRelationFilter
  }, "id">

  export type m_master_departmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    created_by_id?: SortOrder
    modified_on?: SortOrderInput | SortOrder
    modified_by_id?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: m_master_departmentCountOrderByAggregateInput
    _avg?: m_master_departmentAvgOrderByAggregateInput
    _max?: m_master_departmentMaxOrderByAggregateInput
    _min?: m_master_departmentMinOrderByAggregateInput
    _sum?: m_master_departmentSumOrderByAggregateInput
  }

  export type m_master_departmentScalarWhereWithAggregatesInput = {
    AND?: m_master_departmentScalarWhereWithAggregatesInput | m_master_departmentScalarWhereWithAggregatesInput[]
    OR?: m_master_departmentScalarWhereWithAggregatesInput[]
    NOT?: m_master_departmentScalarWhereWithAggregatesInput | m_master_departmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"m_master_department"> | number
    name?: StringWithAggregatesFilter<"m_master_department"> | string
    code?: StringWithAggregatesFilter<"m_master_department"> | string
    license_id?: IntWithAggregatesFilter<"m_master_department"> | number
    description?: StringWithAggregatesFilter<"m_master_department"> | string
    created_on?: DateTimeWithAggregatesFilter<"m_master_department"> | Date | string
    created_by_id?: IntWithAggregatesFilter<"m_master_department"> | number
    modified_on?: DateTimeNullableWithAggregatesFilter<"m_master_department"> | Date | string | null
    modified_by_id?: IntNullableWithAggregatesFilter<"m_master_department"> | number | null
    status?: BoolWithAggregatesFilter<"m_master_department"> | boolean
  }

  export type m_master_department_logWhereInput = {
    AND?: m_master_department_logWhereInput | m_master_department_logWhereInput[]
    OR?: m_master_department_logWhereInput[]
    NOT?: m_master_department_logWhereInput | m_master_department_logWhereInput[]
    id?: IntFilter<"m_master_department_log"> | number
    name?: StringNullableFilter<"m_master_department_log"> | string | null
    code?: StringNullableFilter<"m_master_department_log"> | string | null
    license_id?: IntFilter<"m_master_department_log"> | number
    description?: StringNullableFilter<"m_master_department_log"> | string | null
    created_on?: DateTimeFilter<"m_master_department_log"> | Date | string
    status?: BoolNullableFilter<"m_master_department_log"> | boolean | null
    change_description?: StringFilter<"m_master_department_log"> | string
    action?: EnumactionFilter<"m_master_department_log"> | $Enums.action
    department_id?: IntNullableFilter<"m_master_department_log"> | number | null
    created_by_id?: IntFilter<"m_master_department_log"> | number
    created_by?: XOR<User_informationScalarRelationFilter, user_informationWhereInput>
    department?: XOR<M_master_departmentNullableScalarRelationFilter, m_master_departmentWhereInput> | null
  }

  export type m_master_department_logOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    license_id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_on?: SortOrder
    status?: SortOrderInput | SortOrder
    change_description?: SortOrder
    action?: SortOrder
    department_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    created_by?: user_informationOrderByWithRelationInput
    department?: m_master_departmentOrderByWithRelationInput
    _relevance?: m_master_department_logOrderByRelevanceInput
  }

  export type m_master_department_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: m_master_department_logWhereInput | m_master_department_logWhereInput[]
    OR?: m_master_department_logWhereInput[]
    NOT?: m_master_department_logWhereInput | m_master_department_logWhereInput[]
    name?: StringNullableFilter<"m_master_department_log"> | string | null
    code?: StringNullableFilter<"m_master_department_log"> | string | null
    license_id?: IntFilter<"m_master_department_log"> | number
    description?: StringNullableFilter<"m_master_department_log"> | string | null
    created_on?: DateTimeFilter<"m_master_department_log"> | Date | string
    status?: BoolNullableFilter<"m_master_department_log"> | boolean | null
    change_description?: StringFilter<"m_master_department_log"> | string
    action?: EnumactionFilter<"m_master_department_log"> | $Enums.action
    department_id?: IntNullableFilter<"m_master_department_log"> | number | null
    created_by_id?: IntFilter<"m_master_department_log"> | number
    created_by?: XOR<User_informationScalarRelationFilter, user_informationWhereInput>
    department?: XOR<M_master_departmentNullableScalarRelationFilter, m_master_departmentWhereInput> | null
  }, "id">

  export type m_master_department_logOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    license_id?: SortOrder
    description?: SortOrderInput | SortOrder
    created_on?: SortOrder
    status?: SortOrderInput | SortOrder
    change_description?: SortOrder
    action?: SortOrder
    department_id?: SortOrderInput | SortOrder
    created_by_id?: SortOrder
    _count?: m_master_department_logCountOrderByAggregateInput
    _avg?: m_master_department_logAvgOrderByAggregateInput
    _max?: m_master_department_logMaxOrderByAggregateInput
    _min?: m_master_department_logMinOrderByAggregateInput
    _sum?: m_master_department_logSumOrderByAggregateInput
  }

  export type m_master_department_logScalarWhereWithAggregatesInput = {
    AND?: m_master_department_logScalarWhereWithAggregatesInput | m_master_department_logScalarWhereWithAggregatesInput[]
    OR?: m_master_department_logScalarWhereWithAggregatesInput[]
    NOT?: m_master_department_logScalarWhereWithAggregatesInput | m_master_department_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"m_master_department_log"> | number
    name?: StringNullableWithAggregatesFilter<"m_master_department_log"> | string | null
    code?: StringNullableWithAggregatesFilter<"m_master_department_log"> | string | null
    license_id?: IntWithAggregatesFilter<"m_master_department_log"> | number
    description?: StringNullableWithAggregatesFilter<"m_master_department_log"> | string | null
    created_on?: DateTimeWithAggregatesFilter<"m_master_department_log"> | Date | string
    status?: BoolNullableWithAggregatesFilter<"m_master_department_log"> | boolean | null
    change_description?: StringWithAggregatesFilter<"m_master_department_log"> | string
    action?: EnumactionWithAggregatesFilter<"m_master_department_log"> | $Enums.action
    department_id?: IntNullableWithAggregatesFilter<"m_master_department_log"> | number | null
    created_by_id?: IntWithAggregatesFilter<"m_master_department_log"> | number
  }

  export type user_credentialsCreateInput = {
    username: string
    password: string
    license_id: number
    user_information?: user_informationCreateNestedOneWithoutUser_credentialInput
  }

  export type user_credentialsUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    license_id: number
    user_information?: user_informationUncheckedCreateNestedOneWithoutUser_credentialInput
  }

  export type user_credentialsUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    user_information?: user_informationUpdateOneWithoutUser_credentialNestedInput
  }

  export type user_credentialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    user_information?: user_informationUncheckedUpdateOneWithoutUser_credentialNestedInput
  }

  export type user_credentialsCreateManyInput = {
    id?: number
    username: string
    password: string
    license_id: number
  }

  export type user_credentialsUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_credentialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_informationCreateInput = {
    first_name: string
    last_name: string
    license_id: number
    user_credential: user_credentialsCreateNestedOneWithoutUser_informationInput
    c_master_department?: m_master_departmentCreateNestedManyWithoutCreated_byInput
    m_master_department?: m_master_departmentCreateNestedManyWithoutModified_byInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    license_id: number
    credential_id: number
    c_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutCreated_byInput
    m_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutModified_byInput
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    user_credential?: user_credentialsUpdateOneRequiredWithoutUser_informationNestedInput
    c_master_department?: m_master_departmentUpdateManyWithoutCreated_byNestedInput
    m_master_department?: m_master_departmentUpdateManyWithoutModified_byNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutCreated_byNestedInput
  }

  export type user_informationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    credential_id?: IntFieldUpdateOperationsInput | number
    c_master_department?: m_master_departmentUncheckedUpdateManyWithoutCreated_byNestedInput
    m_master_department?: m_master_departmentUncheckedUpdateManyWithoutModified_byNestedInput
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type user_informationCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    license_id: number
    credential_id: number
  }

  export type user_informationUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_informationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    credential_id?: IntFieldUpdateOperationsInput | number
  }

  export type m_master_departmentCreateInput = {
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    modified_on?: Date | string | null
    status?: boolean
    created_by: user_informationCreateNestedOneWithoutC_master_departmentInput
    modified_by?: user_informationCreateNestedOneWithoutM_master_departmentInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutDepartmentInput
  }

  export type m_master_departmentUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    created_by_id: number
    modified_on?: Date | string | null
    modified_by_id?: number | null
    status?: boolean
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type m_master_departmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_by?: user_informationUpdateOneRequiredWithoutC_master_departmentNestedInput
    modified_by?: user_informationUpdateOneWithoutM_master_departmentNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutDepartmentNestedInput
  }

  export type m_master_departmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: IntFieldUpdateOperationsInput | number
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type m_master_departmentCreateManyInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    created_by_id: number
    modified_on?: Date | string | null
    modified_by_id?: number | null
    status?: boolean
  }

  export type m_master_departmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type m_master_departmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: IntFieldUpdateOperationsInput | number
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type m_master_department_logCreateInput = {
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    created_by: user_informationCreateNestedOneWithoutM_master_department_logInput
    department?: m_master_departmentCreateNestedOneWithoutM_master_department_logInput
  }

  export type m_master_department_logUncheckedCreateInput = {
    id?: number
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    department_id?: number | null
    created_by_id: number
  }

  export type m_master_department_logUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    created_by?: user_informationUpdateOneRequiredWithoutM_master_department_logNestedInput
    department?: m_master_departmentUpdateOneWithoutM_master_department_logNestedInput
  }

  export type m_master_department_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_id?: IntFieldUpdateOperationsInput | number
  }

  export type m_master_department_logCreateManyInput = {
    id?: number
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    department_id?: number | null
    created_by_id: number
  }

  export type m_master_department_logUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
  }

  export type m_master_department_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type User_informationNullableScalarRelationFilter = {
    is?: user_informationWhereInput | null
    isNot?: user_informationWhereInput | null
  }

  export type user_credentialsOrderByRelevanceInput = {
    fields: user_credentialsOrderByRelevanceFieldEnum | user_credentialsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_credentialsCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_id?: SortOrder
  }

  export type user_credentialsAvgOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
  }

  export type user_credentialsMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_id?: SortOrder
  }

  export type user_credentialsMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_id?: SortOrder
  }

  export type user_credentialsSumOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type User_credentialsScalarRelationFilter = {
    is?: user_credentialsWhereInput
    isNot?: user_credentialsWhereInput
  }

  export type M_master_departmentListRelationFilter = {
    every?: m_master_departmentWhereInput
    some?: m_master_departmentWhereInput
    none?: m_master_departmentWhereInput
  }

  export type M_master_department_logListRelationFilter = {
    every?: m_master_department_logWhereInput
    some?: m_master_department_logWhereInput
    none?: m_master_department_logWhereInput
  }

  export type m_master_departmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type m_master_department_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_informationOrderByRelevanceInput = {
    fields: user_informationOrderByRelevanceFieldEnum | user_informationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_informationCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
  }

  export type user_informationAvgOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
  }

  export type user_informationMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
  }

  export type user_informationMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
  }

  export type user_informationSumOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
    credential_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type User_informationScalarRelationFilter = {
    is?: user_informationWhereInput
    isNot?: user_informationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type m_master_departmentOrderByRelevanceInput = {
    fields: m_master_departmentOrderByRelevanceFieldEnum | m_master_departmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type m_master_departmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    created_by_id?: SortOrder
    modified_on?: SortOrder
    modified_by_id?: SortOrder
    status?: SortOrder
  }

  export type m_master_departmentAvgOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
    created_by_id?: SortOrder
    modified_by_id?: SortOrder
  }

  export type m_master_departmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    created_by_id?: SortOrder
    modified_on?: SortOrder
    modified_by_id?: SortOrder
    status?: SortOrder
  }

  export type m_master_departmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    created_by_id?: SortOrder
    modified_on?: SortOrder
    modified_by_id?: SortOrder
    status?: SortOrder
  }

  export type m_master_departmentSumOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
    created_by_id?: SortOrder
    modified_by_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumactionFilter<$PrismaModel = never> = {
    equals?: $Enums.action | EnumactionFieldRefInput<$PrismaModel>
    in?: $Enums.action[]
    notIn?: $Enums.action[]
    not?: NestedEnumactionFilter<$PrismaModel> | $Enums.action
  }

  export type M_master_departmentNullableScalarRelationFilter = {
    is?: m_master_departmentWhereInput | null
    isNot?: m_master_departmentWhereInput | null
  }

  export type m_master_department_logOrderByRelevanceInput = {
    fields: m_master_department_logOrderByRelevanceFieldEnum | m_master_department_logOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type m_master_department_logCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    status?: SortOrder
    change_description?: SortOrder
    action?: SortOrder
    department_id?: SortOrder
    created_by_id?: SortOrder
  }

  export type m_master_department_logAvgOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
    department_id?: SortOrder
    created_by_id?: SortOrder
  }

  export type m_master_department_logMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    status?: SortOrder
    change_description?: SortOrder
    action?: SortOrder
    department_id?: SortOrder
    created_by_id?: SortOrder
  }

  export type m_master_department_logMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    license_id?: SortOrder
    description?: SortOrder
    created_on?: SortOrder
    status?: SortOrder
    change_description?: SortOrder
    action?: SortOrder
    department_id?: SortOrder
    created_by_id?: SortOrder
  }

  export type m_master_department_logSumOrderByAggregateInput = {
    id?: SortOrder
    license_id?: SortOrder
    department_id?: SortOrder
    created_by_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.action | EnumactionFieldRefInput<$PrismaModel>
    in?: $Enums.action[]
    notIn?: $Enums.action[]
    not?: NestedEnumactionWithAggregatesFilter<$PrismaModel> | $Enums.action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumactionFilter<$PrismaModel>
    _max?: NestedEnumactionFilter<$PrismaModel>
  }

  export type user_informationCreateNestedOneWithoutUser_credentialInput = {
    create?: XOR<user_informationCreateWithoutUser_credentialInput, user_informationUncheckedCreateWithoutUser_credentialInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutUser_credentialInput
    connect?: user_informationWhereUniqueInput
  }

  export type user_informationUncheckedCreateNestedOneWithoutUser_credentialInput = {
    create?: XOR<user_informationCreateWithoutUser_credentialInput, user_informationUncheckedCreateWithoutUser_credentialInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutUser_credentialInput
    connect?: user_informationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type user_informationUpdateOneWithoutUser_credentialNestedInput = {
    create?: XOR<user_informationCreateWithoutUser_credentialInput, user_informationUncheckedCreateWithoutUser_credentialInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutUser_credentialInput
    upsert?: user_informationUpsertWithoutUser_credentialInput
    disconnect?: user_informationWhereInput | boolean
    delete?: user_informationWhereInput | boolean
    connect?: user_informationWhereUniqueInput
    update?: XOR<XOR<user_informationUpdateToOneWithWhereWithoutUser_credentialInput, user_informationUpdateWithoutUser_credentialInput>, user_informationUncheckedUpdateWithoutUser_credentialInput>
  }

  export type user_informationUncheckedUpdateOneWithoutUser_credentialNestedInput = {
    create?: XOR<user_informationCreateWithoutUser_credentialInput, user_informationUncheckedCreateWithoutUser_credentialInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutUser_credentialInput
    upsert?: user_informationUpsertWithoutUser_credentialInput
    disconnect?: user_informationWhereInput | boolean
    delete?: user_informationWhereInput | boolean
    connect?: user_informationWhereUniqueInput
    update?: XOR<XOR<user_informationUpdateToOneWithWhereWithoutUser_credentialInput, user_informationUpdateWithoutUser_credentialInput>, user_informationUncheckedUpdateWithoutUser_credentialInput>
  }

  export type user_credentialsCreateNestedOneWithoutUser_informationInput = {
    create?: XOR<user_credentialsCreateWithoutUser_informationInput, user_credentialsUncheckedCreateWithoutUser_informationInput>
    connectOrCreate?: user_credentialsCreateOrConnectWithoutUser_informationInput
    connect?: user_credentialsWhereUniqueInput
  }

  export type m_master_departmentCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<m_master_departmentCreateWithoutCreated_byInput, m_master_departmentUncheckedCreateWithoutCreated_byInput> | m_master_departmentCreateWithoutCreated_byInput[] | m_master_departmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutCreated_byInput | m_master_departmentCreateOrConnectWithoutCreated_byInput[]
    createMany?: m_master_departmentCreateManyCreated_byInputEnvelope
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
  }

  export type m_master_departmentCreateNestedManyWithoutModified_byInput = {
    create?: XOR<m_master_departmentCreateWithoutModified_byInput, m_master_departmentUncheckedCreateWithoutModified_byInput> | m_master_departmentCreateWithoutModified_byInput[] | m_master_departmentUncheckedCreateWithoutModified_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutModified_byInput | m_master_departmentCreateOrConnectWithoutModified_byInput[]
    createMany?: m_master_departmentCreateManyModified_byInputEnvelope
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
  }

  export type m_master_department_logCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<m_master_department_logCreateWithoutCreated_byInput, m_master_department_logUncheckedCreateWithoutCreated_byInput> | m_master_department_logCreateWithoutCreated_byInput[] | m_master_department_logUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutCreated_byInput | m_master_department_logCreateOrConnectWithoutCreated_byInput[]
    createMany?: m_master_department_logCreateManyCreated_byInputEnvelope
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
  }

  export type m_master_departmentUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<m_master_departmentCreateWithoutCreated_byInput, m_master_departmentUncheckedCreateWithoutCreated_byInput> | m_master_departmentCreateWithoutCreated_byInput[] | m_master_departmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutCreated_byInput | m_master_departmentCreateOrConnectWithoutCreated_byInput[]
    createMany?: m_master_departmentCreateManyCreated_byInputEnvelope
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
  }

  export type m_master_departmentUncheckedCreateNestedManyWithoutModified_byInput = {
    create?: XOR<m_master_departmentCreateWithoutModified_byInput, m_master_departmentUncheckedCreateWithoutModified_byInput> | m_master_departmentCreateWithoutModified_byInput[] | m_master_departmentUncheckedCreateWithoutModified_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutModified_byInput | m_master_departmentCreateOrConnectWithoutModified_byInput[]
    createMany?: m_master_departmentCreateManyModified_byInputEnvelope
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
  }

  export type m_master_department_logUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<m_master_department_logCreateWithoutCreated_byInput, m_master_department_logUncheckedCreateWithoutCreated_byInput> | m_master_department_logCreateWithoutCreated_byInput[] | m_master_department_logUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutCreated_byInput | m_master_department_logCreateOrConnectWithoutCreated_byInput[]
    createMany?: m_master_department_logCreateManyCreated_byInputEnvelope
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
  }

  export type user_credentialsUpdateOneRequiredWithoutUser_informationNestedInput = {
    create?: XOR<user_credentialsCreateWithoutUser_informationInput, user_credentialsUncheckedCreateWithoutUser_informationInput>
    connectOrCreate?: user_credentialsCreateOrConnectWithoutUser_informationInput
    upsert?: user_credentialsUpsertWithoutUser_informationInput
    connect?: user_credentialsWhereUniqueInput
    update?: XOR<XOR<user_credentialsUpdateToOneWithWhereWithoutUser_informationInput, user_credentialsUpdateWithoutUser_informationInput>, user_credentialsUncheckedUpdateWithoutUser_informationInput>
  }

  export type m_master_departmentUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<m_master_departmentCreateWithoutCreated_byInput, m_master_departmentUncheckedCreateWithoutCreated_byInput> | m_master_departmentCreateWithoutCreated_byInput[] | m_master_departmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutCreated_byInput | m_master_departmentCreateOrConnectWithoutCreated_byInput[]
    upsert?: m_master_departmentUpsertWithWhereUniqueWithoutCreated_byInput | m_master_departmentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: m_master_departmentCreateManyCreated_byInputEnvelope
    set?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    disconnect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    delete?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    update?: m_master_departmentUpdateWithWhereUniqueWithoutCreated_byInput | m_master_departmentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: m_master_departmentUpdateManyWithWhereWithoutCreated_byInput | m_master_departmentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: m_master_departmentScalarWhereInput | m_master_departmentScalarWhereInput[]
  }

  export type m_master_departmentUpdateManyWithoutModified_byNestedInput = {
    create?: XOR<m_master_departmentCreateWithoutModified_byInput, m_master_departmentUncheckedCreateWithoutModified_byInput> | m_master_departmentCreateWithoutModified_byInput[] | m_master_departmentUncheckedCreateWithoutModified_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutModified_byInput | m_master_departmentCreateOrConnectWithoutModified_byInput[]
    upsert?: m_master_departmentUpsertWithWhereUniqueWithoutModified_byInput | m_master_departmentUpsertWithWhereUniqueWithoutModified_byInput[]
    createMany?: m_master_departmentCreateManyModified_byInputEnvelope
    set?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    disconnect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    delete?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    update?: m_master_departmentUpdateWithWhereUniqueWithoutModified_byInput | m_master_departmentUpdateWithWhereUniqueWithoutModified_byInput[]
    updateMany?: m_master_departmentUpdateManyWithWhereWithoutModified_byInput | m_master_departmentUpdateManyWithWhereWithoutModified_byInput[]
    deleteMany?: m_master_departmentScalarWhereInput | m_master_departmentScalarWhereInput[]
  }

  export type m_master_department_logUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<m_master_department_logCreateWithoutCreated_byInput, m_master_department_logUncheckedCreateWithoutCreated_byInput> | m_master_department_logCreateWithoutCreated_byInput[] | m_master_department_logUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutCreated_byInput | m_master_department_logCreateOrConnectWithoutCreated_byInput[]
    upsert?: m_master_department_logUpsertWithWhereUniqueWithoutCreated_byInput | m_master_department_logUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: m_master_department_logCreateManyCreated_byInputEnvelope
    set?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    disconnect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    delete?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    update?: m_master_department_logUpdateWithWhereUniqueWithoutCreated_byInput | m_master_department_logUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: m_master_department_logUpdateManyWithWhereWithoutCreated_byInput | m_master_department_logUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: m_master_department_logScalarWhereInput | m_master_department_logScalarWhereInput[]
  }

  export type m_master_departmentUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<m_master_departmentCreateWithoutCreated_byInput, m_master_departmentUncheckedCreateWithoutCreated_byInput> | m_master_departmentCreateWithoutCreated_byInput[] | m_master_departmentUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutCreated_byInput | m_master_departmentCreateOrConnectWithoutCreated_byInput[]
    upsert?: m_master_departmentUpsertWithWhereUniqueWithoutCreated_byInput | m_master_departmentUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: m_master_departmentCreateManyCreated_byInputEnvelope
    set?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    disconnect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    delete?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    update?: m_master_departmentUpdateWithWhereUniqueWithoutCreated_byInput | m_master_departmentUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: m_master_departmentUpdateManyWithWhereWithoutCreated_byInput | m_master_departmentUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: m_master_departmentScalarWhereInput | m_master_departmentScalarWhereInput[]
  }

  export type m_master_departmentUncheckedUpdateManyWithoutModified_byNestedInput = {
    create?: XOR<m_master_departmentCreateWithoutModified_byInput, m_master_departmentUncheckedCreateWithoutModified_byInput> | m_master_departmentCreateWithoutModified_byInput[] | m_master_departmentUncheckedCreateWithoutModified_byInput[]
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutModified_byInput | m_master_departmentCreateOrConnectWithoutModified_byInput[]
    upsert?: m_master_departmentUpsertWithWhereUniqueWithoutModified_byInput | m_master_departmentUpsertWithWhereUniqueWithoutModified_byInput[]
    createMany?: m_master_departmentCreateManyModified_byInputEnvelope
    set?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    disconnect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    delete?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    connect?: m_master_departmentWhereUniqueInput | m_master_departmentWhereUniqueInput[]
    update?: m_master_departmentUpdateWithWhereUniqueWithoutModified_byInput | m_master_departmentUpdateWithWhereUniqueWithoutModified_byInput[]
    updateMany?: m_master_departmentUpdateManyWithWhereWithoutModified_byInput | m_master_departmentUpdateManyWithWhereWithoutModified_byInput[]
    deleteMany?: m_master_departmentScalarWhereInput | m_master_departmentScalarWhereInput[]
  }

  export type m_master_department_logUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<m_master_department_logCreateWithoutCreated_byInput, m_master_department_logUncheckedCreateWithoutCreated_byInput> | m_master_department_logCreateWithoutCreated_byInput[] | m_master_department_logUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutCreated_byInput | m_master_department_logCreateOrConnectWithoutCreated_byInput[]
    upsert?: m_master_department_logUpsertWithWhereUniqueWithoutCreated_byInput | m_master_department_logUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: m_master_department_logCreateManyCreated_byInputEnvelope
    set?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    disconnect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    delete?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    update?: m_master_department_logUpdateWithWhereUniqueWithoutCreated_byInput | m_master_department_logUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: m_master_department_logUpdateManyWithWhereWithoutCreated_byInput | m_master_department_logUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: m_master_department_logScalarWhereInput | m_master_department_logScalarWhereInput[]
  }

  export type user_informationCreateNestedOneWithoutC_master_departmentInput = {
    create?: XOR<user_informationCreateWithoutC_master_departmentInput, user_informationUncheckedCreateWithoutC_master_departmentInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutC_master_departmentInput
    connect?: user_informationWhereUniqueInput
  }

  export type user_informationCreateNestedOneWithoutM_master_departmentInput = {
    create?: XOR<user_informationCreateWithoutM_master_departmentInput, user_informationUncheckedCreateWithoutM_master_departmentInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutM_master_departmentInput
    connect?: user_informationWhereUniqueInput
  }

  export type m_master_department_logCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<m_master_department_logCreateWithoutDepartmentInput, m_master_department_logUncheckedCreateWithoutDepartmentInput> | m_master_department_logCreateWithoutDepartmentInput[] | m_master_department_logUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutDepartmentInput | m_master_department_logCreateOrConnectWithoutDepartmentInput[]
    createMany?: m_master_department_logCreateManyDepartmentInputEnvelope
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
  }

  export type m_master_department_logUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<m_master_department_logCreateWithoutDepartmentInput, m_master_department_logUncheckedCreateWithoutDepartmentInput> | m_master_department_logCreateWithoutDepartmentInput[] | m_master_department_logUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutDepartmentInput | m_master_department_logCreateOrConnectWithoutDepartmentInput[]
    createMany?: m_master_department_logCreateManyDepartmentInputEnvelope
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type user_informationUpdateOneRequiredWithoutC_master_departmentNestedInput = {
    create?: XOR<user_informationCreateWithoutC_master_departmentInput, user_informationUncheckedCreateWithoutC_master_departmentInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutC_master_departmentInput
    upsert?: user_informationUpsertWithoutC_master_departmentInput
    connect?: user_informationWhereUniqueInput
    update?: XOR<XOR<user_informationUpdateToOneWithWhereWithoutC_master_departmentInput, user_informationUpdateWithoutC_master_departmentInput>, user_informationUncheckedUpdateWithoutC_master_departmentInput>
  }

  export type user_informationUpdateOneWithoutM_master_departmentNestedInput = {
    create?: XOR<user_informationCreateWithoutM_master_departmentInput, user_informationUncheckedCreateWithoutM_master_departmentInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutM_master_departmentInput
    upsert?: user_informationUpsertWithoutM_master_departmentInput
    disconnect?: user_informationWhereInput | boolean
    delete?: user_informationWhereInput | boolean
    connect?: user_informationWhereUniqueInput
    update?: XOR<XOR<user_informationUpdateToOneWithWhereWithoutM_master_departmentInput, user_informationUpdateWithoutM_master_departmentInput>, user_informationUncheckedUpdateWithoutM_master_departmentInput>
  }

  export type m_master_department_logUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<m_master_department_logCreateWithoutDepartmentInput, m_master_department_logUncheckedCreateWithoutDepartmentInput> | m_master_department_logCreateWithoutDepartmentInput[] | m_master_department_logUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutDepartmentInput | m_master_department_logCreateOrConnectWithoutDepartmentInput[]
    upsert?: m_master_department_logUpsertWithWhereUniqueWithoutDepartmentInput | m_master_department_logUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: m_master_department_logCreateManyDepartmentInputEnvelope
    set?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    disconnect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    delete?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    update?: m_master_department_logUpdateWithWhereUniqueWithoutDepartmentInput | m_master_department_logUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: m_master_department_logUpdateManyWithWhereWithoutDepartmentInput | m_master_department_logUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: m_master_department_logScalarWhereInput | m_master_department_logScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type m_master_department_logUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<m_master_department_logCreateWithoutDepartmentInput, m_master_department_logUncheckedCreateWithoutDepartmentInput> | m_master_department_logCreateWithoutDepartmentInput[] | m_master_department_logUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: m_master_department_logCreateOrConnectWithoutDepartmentInput | m_master_department_logCreateOrConnectWithoutDepartmentInput[]
    upsert?: m_master_department_logUpsertWithWhereUniqueWithoutDepartmentInput | m_master_department_logUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: m_master_department_logCreateManyDepartmentInputEnvelope
    set?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    disconnect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    delete?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    connect?: m_master_department_logWhereUniqueInput | m_master_department_logWhereUniqueInput[]
    update?: m_master_department_logUpdateWithWhereUniqueWithoutDepartmentInput | m_master_department_logUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: m_master_department_logUpdateManyWithWhereWithoutDepartmentInput | m_master_department_logUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: m_master_department_logScalarWhereInput | m_master_department_logScalarWhereInput[]
  }

  export type user_informationCreateNestedOneWithoutM_master_department_logInput = {
    create?: XOR<user_informationCreateWithoutM_master_department_logInput, user_informationUncheckedCreateWithoutM_master_department_logInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutM_master_department_logInput
    connect?: user_informationWhereUniqueInput
  }

  export type m_master_departmentCreateNestedOneWithoutM_master_department_logInput = {
    create?: XOR<m_master_departmentCreateWithoutM_master_department_logInput, m_master_departmentUncheckedCreateWithoutM_master_department_logInput>
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutM_master_department_logInput
    connect?: m_master_departmentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumactionFieldUpdateOperationsInput = {
    set?: $Enums.action
  }

  export type user_informationUpdateOneRequiredWithoutM_master_department_logNestedInput = {
    create?: XOR<user_informationCreateWithoutM_master_department_logInput, user_informationUncheckedCreateWithoutM_master_department_logInput>
    connectOrCreate?: user_informationCreateOrConnectWithoutM_master_department_logInput
    upsert?: user_informationUpsertWithoutM_master_department_logInput
    connect?: user_informationWhereUniqueInput
    update?: XOR<XOR<user_informationUpdateToOneWithWhereWithoutM_master_department_logInput, user_informationUpdateWithoutM_master_department_logInput>, user_informationUncheckedUpdateWithoutM_master_department_logInput>
  }

  export type m_master_departmentUpdateOneWithoutM_master_department_logNestedInput = {
    create?: XOR<m_master_departmentCreateWithoutM_master_department_logInput, m_master_departmentUncheckedCreateWithoutM_master_department_logInput>
    connectOrCreate?: m_master_departmentCreateOrConnectWithoutM_master_department_logInput
    upsert?: m_master_departmentUpsertWithoutM_master_department_logInput
    disconnect?: m_master_departmentWhereInput | boolean
    delete?: m_master_departmentWhereInput | boolean
    connect?: m_master_departmentWhereUniqueInput
    update?: XOR<XOR<m_master_departmentUpdateToOneWithWhereWithoutM_master_department_logInput, m_master_departmentUpdateWithoutM_master_department_logInput>, m_master_departmentUncheckedUpdateWithoutM_master_department_logInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumactionFilter<$PrismaModel = never> = {
    equals?: $Enums.action | EnumactionFieldRefInput<$PrismaModel>
    in?: $Enums.action[]
    notIn?: $Enums.action[]
    not?: NestedEnumactionFilter<$PrismaModel> | $Enums.action
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.action | EnumactionFieldRefInput<$PrismaModel>
    in?: $Enums.action[]
    notIn?: $Enums.action[]
    not?: NestedEnumactionWithAggregatesFilter<$PrismaModel> | $Enums.action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumactionFilter<$PrismaModel>
    _max?: NestedEnumactionFilter<$PrismaModel>
  }

  export type user_informationCreateWithoutUser_credentialInput = {
    first_name: string
    last_name: string
    license_id: number
    c_master_department?: m_master_departmentCreateNestedManyWithoutCreated_byInput
    m_master_department?: m_master_departmentCreateNestedManyWithoutModified_byInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationUncheckedCreateWithoutUser_credentialInput = {
    id?: number
    first_name: string
    last_name: string
    license_id: number
    c_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutCreated_byInput
    m_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutModified_byInput
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationCreateOrConnectWithoutUser_credentialInput = {
    where: user_informationWhereUniqueInput
    create: XOR<user_informationCreateWithoutUser_credentialInput, user_informationUncheckedCreateWithoutUser_credentialInput>
  }

  export type user_informationUpsertWithoutUser_credentialInput = {
    update: XOR<user_informationUpdateWithoutUser_credentialInput, user_informationUncheckedUpdateWithoutUser_credentialInput>
    create: XOR<user_informationCreateWithoutUser_credentialInput, user_informationUncheckedCreateWithoutUser_credentialInput>
    where?: user_informationWhereInput
  }

  export type user_informationUpdateToOneWithWhereWithoutUser_credentialInput = {
    where?: user_informationWhereInput
    data: XOR<user_informationUpdateWithoutUser_credentialInput, user_informationUncheckedUpdateWithoutUser_credentialInput>
  }

  export type user_informationUpdateWithoutUser_credentialInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    c_master_department?: m_master_departmentUpdateManyWithoutCreated_byNestedInput
    m_master_department?: m_master_departmentUpdateManyWithoutModified_byNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutCreated_byNestedInput
  }

  export type user_informationUncheckedUpdateWithoutUser_credentialInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    c_master_department?: m_master_departmentUncheckedUpdateManyWithoutCreated_byNestedInput
    m_master_department?: m_master_departmentUncheckedUpdateManyWithoutModified_byNestedInput
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type user_credentialsCreateWithoutUser_informationInput = {
    username: string
    password: string
    license_id: number
  }

  export type user_credentialsUncheckedCreateWithoutUser_informationInput = {
    id?: number
    username: string
    password: string
    license_id: number
  }

  export type user_credentialsCreateOrConnectWithoutUser_informationInput = {
    where: user_credentialsWhereUniqueInput
    create: XOR<user_credentialsCreateWithoutUser_informationInput, user_credentialsUncheckedCreateWithoutUser_informationInput>
  }

  export type m_master_departmentCreateWithoutCreated_byInput = {
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    modified_on?: Date | string | null
    status?: boolean
    modified_by?: user_informationCreateNestedOneWithoutM_master_departmentInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutDepartmentInput
  }

  export type m_master_departmentUncheckedCreateWithoutCreated_byInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    modified_on?: Date | string | null
    modified_by_id?: number | null
    status?: boolean
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type m_master_departmentCreateOrConnectWithoutCreated_byInput = {
    where: m_master_departmentWhereUniqueInput
    create: XOR<m_master_departmentCreateWithoutCreated_byInput, m_master_departmentUncheckedCreateWithoutCreated_byInput>
  }

  export type m_master_departmentCreateManyCreated_byInputEnvelope = {
    data: m_master_departmentCreateManyCreated_byInput | m_master_departmentCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type m_master_departmentCreateWithoutModified_byInput = {
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    modified_on?: Date | string | null
    status?: boolean
    created_by: user_informationCreateNestedOneWithoutC_master_departmentInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutDepartmentInput
  }

  export type m_master_departmentUncheckedCreateWithoutModified_byInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    created_by_id: number
    modified_on?: Date | string | null
    status?: boolean
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type m_master_departmentCreateOrConnectWithoutModified_byInput = {
    where: m_master_departmentWhereUniqueInput
    create: XOR<m_master_departmentCreateWithoutModified_byInput, m_master_departmentUncheckedCreateWithoutModified_byInput>
  }

  export type m_master_departmentCreateManyModified_byInputEnvelope = {
    data: m_master_departmentCreateManyModified_byInput | m_master_departmentCreateManyModified_byInput[]
    skipDuplicates?: boolean
  }

  export type m_master_department_logCreateWithoutCreated_byInput = {
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    department?: m_master_departmentCreateNestedOneWithoutM_master_department_logInput
  }

  export type m_master_department_logUncheckedCreateWithoutCreated_byInput = {
    id?: number
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    department_id?: number | null
  }

  export type m_master_department_logCreateOrConnectWithoutCreated_byInput = {
    where: m_master_department_logWhereUniqueInput
    create: XOR<m_master_department_logCreateWithoutCreated_byInput, m_master_department_logUncheckedCreateWithoutCreated_byInput>
  }

  export type m_master_department_logCreateManyCreated_byInputEnvelope = {
    data: m_master_department_logCreateManyCreated_byInput | m_master_department_logCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type user_credentialsUpsertWithoutUser_informationInput = {
    update: XOR<user_credentialsUpdateWithoutUser_informationInput, user_credentialsUncheckedUpdateWithoutUser_informationInput>
    create: XOR<user_credentialsCreateWithoutUser_informationInput, user_credentialsUncheckedCreateWithoutUser_informationInput>
    where?: user_credentialsWhereInput
  }

  export type user_credentialsUpdateToOneWithWhereWithoutUser_informationInput = {
    where?: user_credentialsWhereInput
    data: XOR<user_credentialsUpdateWithoutUser_informationInput, user_credentialsUncheckedUpdateWithoutUser_informationInput>
  }

  export type user_credentialsUpdateWithoutUser_informationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_credentialsUncheckedUpdateWithoutUser_informationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
  }

  export type m_master_departmentUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: m_master_departmentWhereUniqueInput
    update: XOR<m_master_departmentUpdateWithoutCreated_byInput, m_master_departmentUncheckedUpdateWithoutCreated_byInput>
    create: XOR<m_master_departmentCreateWithoutCreated_byInput, m_master_departmentUncheckedCreateWithoutCreated_byInput>
  }

  export type m_master_departmentUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: m_master_departmentWhereUniqueInput
    data: XOR<m_master_departmentUpdateWithoutCreated_byInput, m_master_departmentUncheckedUpdateWithoutCreated_byInput>
  }

  export type m_master_departmentUpdateManyWithWhereWithoutCreated_byInput = {
    where: m_master_departmentScalarWhereInput
    data: XOR<m_master_departmentUpdateManyMutationInput, m_master_departmentUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type m_master_departmentScalarWhereInput = {
    AND?: m_master_departmentScalarWhereInput | m_master_departmentScalarWhereInput[]
    OR?: m_master_departmentScalarWhereInput[]
    NOT?: m_master_departmentScalarWhereInput | m_master_departmentScalarWhereInput[]
    id?: IntFilter<"m_master_department"> | number
    name?: StringFilter<"m_master_department"> | string
    code?: StringFilter<"m_master_department"> | string
    license_id?: IntFilter<"m_master_department"> | number
    description?: StringFilter<"m_master_department"> | string
    created_on?: DateTimeFilter<"m_master_department"> | Date | string
    created_by_id?: IntFilter<"m_master_department"> | number
    modified_on?: DateTimeNullableFilter<"m_master_department"> | Date | string | null
    modified_by_id?: IntNullableFilter<"m_master_department"> | number | null
    status?: BoolFilter<"m_master_department"> | boolean
  }

  export type m_master_departmentUpsertWithWhereUniqueWithoutModified_byInput = {
    where: m_master_departmentWhereUniqueInput
    update: XOR<m_master_departmentUpdateWithoutModified_byInput, m_master_departmentUncheckedUpdateWithoutModified_byInput>
    create: XOR<m_master_departmentCreateWithoutModified_byInput, m_master_departmentUncheckedCreateWithoutModified_byInput>
  }

  export type m_master_departmentUpdateWithWhereUniqueWithoutModified_byInput = {
    where: m_master_departmentWhereUniqueInput
    data: XOR<m_master_departmentUpdateWithoutModified_byInput, m_master_departmentUncheckedUpdateWithoutModified_byInput>
  }

  export type m_master_departmentUpdateManyWithWhereWithoutModified_byInput = {
    where: m_master_departmentScalarWhereInput
    data: XOR<m_master_departmentUpdateManyMutationInput, m_master_departmentUncheckedUpdateManyWithoutModified_byInput>
  }

  export type m_master_department_logUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: m_master_department_logWhereUniqueInput
    update: XOR<m_master_department_logUpdateWithoutCreated_byInput, m_master_department_logUncheckedUpdateWithoutCreated_byInput>
    create: XOR<m_master_department_logCreateWithoutCreated_byInput, m_master_department_logUncheckedCreateWithoutCreated_byInput>
  }

  export type m_master_department_logUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: m_master_department_logWhereUniqueInput
    data: XOR<m_master_department_logUpdateWithoutCreated_byInput, m_master_department_logUncheckedUpdateWithoutCreated_byInput>
  }

  export type m_master_department_logUpdateManyWithWhereWithoutCreated_byInput = {
    where: m_master_department_logScalarWhereInput
    data: XOR<m_master_department_logUpdateManyMutationInput, m_master_department_logUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type m_master_department_logScalarWhereInput = {
    AND?: m_master_department_logScalarWhereInput | m_master_department_logScalarWhereInput[]
    OR?: m_master_department_logScalarWhereInput[]
    NOT?: m_master_department_logScalarWhereInput | m_master_department_logScalarWhereInput[]
    id?: IntFilter<"m_master_department_log"> | number
    name?: StringNullableFilter<"m_master_department_log"> | string | null
    code?: StringNullableFilter<"m_master_department_log"> | string | null
    license_id?: IntFilter<"m_master_department_log"> | number
    description?: StringNullableFilter<"m_master_department_log"> | string | null
    created_on?: DateTimeFilter<"m_master_department_log"> | Date | string
    status?: BoolNullableFilter<"m_master_department_log"> | boolean | null
    change_description?: StringFilter<"m_master_department_log"> | string
    action?: EnumactionFilter<"m_master_department_log"> | $Enums.action
    department_id?: IntNullableFilter<"m_master_department_log"> | number | null
    created_by_id?: IntFilter<"m_master_department_log"> | number
  }

  export type user_informationCreateWithoutC_master_departmentInput = {
    first_name: string
    last_name: string
    license_id: number
    user_credential: user_credentialsCreateNestedOneWithoutUser_informationInput
    m_master_department?: m_master_departmentCreateNestedManyWithoutModified_byInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationUncheckedCreateWithoutC_master_departmentInput = {
    id?: number
    first_name: string
    last_name: string
    license_id: number
    credential_id: number
    m_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutModified_byInput
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationCreateOrConnectWithoutC_master_departmentInput = {
    where: user_informationWhereUniqueInput
    create: XOR<user_informationCreateWithoutC_master_departmentInput, user_informationUncheckedCreateWithoutC_master_departmentInput>
  }

  export type user_informationCreateWithoutM_master_departmentInput = {
    first_name: string
    last_name: string
    license_id: number
    user_credential: user_credentialsCreateNestedOneWithoutUser_informationInput
    c_master_department?: m_master_departmentCreateNestedManyWithoutCreated_byInput
    m_master_department_log?: m_master_department_logCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationUncheckedCreateWithoutM_master_departmentInput = {
    id?: number
    first_name: string
    last_name: string
    license_id: number
    credential_id: number
    c_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutCreated_byInput
    m_master_department_log?: m_master_department_logUncheckedCreateNestedManyWithoutCreated_byInput
  }

  export type user_informationCreateOrConnectWithoutM_master_departmentInput = {
    where: user_informationWhereUniqueInput
    create: XOR<user_informationCreateWithoutM_master_departmentInput, user_informationUncheckedCreateWithoutM_master_departmentInput>
  }

  export type m_master_department_logCreateWithoutDepartmentInput = {
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    created_by: user_informationCreateNestedOneWithoutM_master_department_logInput
  }

  export type m_master_department_logUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    created_by_id: number
  }

  export type m_master_department_logCreateOrConnectWithoutDepartmentInput = {
    where: m_master_department_logWhereUniqueInput
    create: XOR<m_master_department_logCreateWithoutDepartmentInput, m_master_department_logUncheckedCreateWithoutDepartmentInput>
  }

  export type m_master_department_logCreateManyDepartmentInputEnvelope = {
    data: m_master_department_logCreateManyDepartmentInput | m_master_department_logCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type user_informationUpsertWithoutC_master_departmentInput = {
    update: XOR<user_informationUpdateWithoutC_master_departmentInput, user_informationUncheckedUpdateWithoutC_master_departmentInput>
    create: XOR<user_informationCreateWithoutC_master_departmentInput, user_informationUncheckedCreateWithoutC_master_departmentInput>
    where?: user_informationWhereInput
  }

  export type user_informationUpdateToOneWithWhereWithoutC_master_departmentInput = {
    where?: user_informationWhereInput
    data: XOR<user_informationUpdateWithoutC_master_departmentInput, user_informationUncheckedUpdateWithoutC_master_departmentInput>
  }

  export type user_informationUpdateWithoutC_master_departmentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    user_credential?: user_credentialsUpdateOneRequiredWithoutUser_informationNestedInput
    m_master_department?: m_master_departmentUpdateManyWithoutModified_byNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutCreated_byNestedInput
  }

  export type user_informationUncheckedUpdateWithoutC_master_departmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    credential_id?: IntFieldUpdateOperationsInput | number
    m_master_department?: m_master_departmentUncheckedUpdateManyWithoutModified_byNestedInput
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type user_informationUpsertWithoutM_master_departmentInput = {
    update: XOR<user_informationUpdateWithoutM_master_departmentInput, user_informationUncheckedUpdateWithoutM_master_departmentInput>
    create: XOR<user_informationCreateWithoutM_master_departmentInput, user_informationUncheckedCreateWithoutM_master_departmentInput>
    where?: user_informationWhereInput
  }

  export type user_informationUpdateToOneWithWhereWithoutM_master_departmentInput = {
    where?: user_informationWhereInput
    data: XOR<user_informationUpdateWithoutM_master_departmentInput, user_informationUncheckedUpdateWithoutM_master_departmentInput>
  }

  export type user_informationUpdateWithoutM_master_departmentInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    user_credential?: user_credentialsUpdateOneRequiredWithoutUser_informationNestedInput
    c_master_department?: m_master_departmentUpdateManyWithoutCreated_byNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutCreated_byNestedInput
  }

  export type user_informationUncheckedUpdateWithoutM_master_departmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    credential_id?: IntFieldUpdateOperationsInput | number
    c_master_department?: m_master_departmentUncheckedUpdateManyWithoutCreated_byNestedInput
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutCreated_byNestedInput
  }

  export type m_master_department_logUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: m_master_department_logWhereUniqueInput
    update: XOR<m_master_department_logUpdateWithoutDepartmentInput, m_master_department_logUncheckedUpdateWithoutDepartmentInput>
    create: XOR<m_master_department_logCreateWithoutDepartmentInput, m_master_department_logUncheckedCreateWithoutDepartmentInput>
  }

  export type m_master_department_logUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: m_master_department_logWhereUniqueInput
    data: XOR<m_master_department_logUpdateWithoutDepartmentInput, m_master_department_logUncheckedUpdateWithoutDepartmentInput>
  }

  export type m_master_department_logUpdateManyWithWhereWithoutDepartmentInput = {
    where: m_master_department_logScalarWhereInput
    data: XOR<m_master_department_logUpdateManyMutationInput, m_master_department_logUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type user_informationCreateWithoutM_master_department_logInput = {
    first_name: string
    last_name: string
    license_id: number
    user_credential: user_credentialsCreateNestedOneWithoutUser_informationInput
    c_master_department?: m_master_departmentCreateNestedManyWithoutCreated_byInput
    m_master_department?: m_master_departmentCreateNestedManyWithoutModified_byInput
  }

  export type user_informationUncheckedCreateWithoutM_master_department_logInput = {
    id?: number
    first_name: string
    last_name: string
    license_id: number
    credential_id: number
    c_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutCreated_byInput
    m_master_department?: m_master_departmentUncheckedCreateNestedManyWithoutModified_byInput
  }

  export type user_informationCreateOrConnectWithoutM_master_department_logInput = {
    where: user_informationWhereUniqueInput
    create: XOR<user_informationCreateWithoutM_master_department_logInput, user_informationUncheckedCreateWithoutM_master_department_logInput>
  }

  export type m_master_departmentCreateWithoutM_master_department_logInput = {
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    modified_on?: Date | string | null
    status?: boolean
    created_by: user_informationCreateNestedOneWithoutC_master_departmentInput
    modified_by?: user_informationCreateNestedOneWithoutM_master_departmentInput
  }

  export type m_master_departmentUncheckedCreateWithoutM_master_department_logInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    created_by_id: number
    modified_on?: Date | string | null
    modified_by_id?: number | null
    status?: boolean
  }

  export type m_master_departmentCreateOrConnectWithoutM_master_department_logInput = {
    where: m_master_departmentWhereUniqueInput
    create: XOR<m_master_departmentCreateWithoutM_master_department_logInput, m_master_departmentUncheckedCreateWithoutM_master_department_logInput>
  }

  export type user_informationUpsertWithoutM_master_department_logInput = {
    update: XOR<user_informationUpdateWithoutM_master_department_logInput, user_informationUncheckedUpdateWithoutM_master_department_logInput>
    create: XOR<user_informationCreateWithoutM_master_department_logInput, user_informationUncheckedCreateWithoutM_master_department_logInput>
    where?: user_informationWhereInput
  }

  export type user_informationUpdateToOneWithWhereWithoutM_master_department_logInput = {
    where?: user_informationWhereInput
    data: XOR<user_informationUpdateWithoutM_master_department_logInput, user_informationUncheckedUpdateWithoutM_master_department_logInput>
  }

  export type user_informationUpdateWithoutM_master_department_logInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    user_credential?: user_credentialsUpdateOneRequiredWithoutUser_informationNestedInput
    c_master_department?: m_master_departmentUpdateManyWithoutCreated_byNestedInput
    m_master_department?: m_master_departmentUpdateManyWithoutModified_byNestedInput
  }

  export type user_informationUncheckedUpdateWithoutM_master_department_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    credential_id?: IntFieldUpdateOperationsInput | number
    c_master_department?: m_master_departmentUncheckedUpdateManyWithoutCreated_byNestedInput
    m_master_department?: m_master_departmentUncheckedUpdateManyWithoutModified_byNestedInput
  }

  export type m_master_departmentUpsertWithoutM_master_department_logInput = {
    update: XOR<m_master_departmentUpdateWithoutM_master_department_logInput, m_master_departmentUncheckedUpdateWithoutM_master_department_logInput>
    create: XOR<m_master_departmentCreateWithoutM_master_department_logInput, m_master_departmentUncheckedCreateWithoutM_master_department_logInput>
    where?: m_master_departmentWhereInput
  }

  export type m_master_departmentUpdateToOneWithWhereWithoutM_master_department_logInput = {
    where?: m_master_departmentWhereInput
    data: XOR<m_master_departmentUpdateWithoutM_master_department_logInput, m_master_departmentUncheckedUpdateWithoutM_master_department_logInput>
  }

  export type m_master_departmentUpdateWithoutM_master_department_logInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_by?: user_informationUpdateOneRequiredWithoutC_master_departmentNestedInput
    modified_by?: user_informationUpdateOneWithoutM_master_departmentNestedInput
  }

  export type m_master_departmentUncheckedUpdateWithoutM_master_department_logInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: IntFieldUpdateOperationsInput | number
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type m_master_departmentCreateManyCreated_byInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    modified_on?: Date | string | null
    modified_by_id?: number | null
    status?: boolean
  }

  export type m_master_departmentCreateManyModified_byInput = {
    id?: number
    name: string
    code: string
    license_id: number
    description: string
    created_on?: Date | string
    created_by_id: number
    modified_on?: Date | string | null
    status?: boolean
  }

  export type m_master_department_logCreateManyCreated_byInput = {
    id?: number
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    department_id?: number | null
  }

  export type m_master_departmentUpdateWithoutCreated_byInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    modified_by?: user_informationUpdateOneWithoutM_master_departmentNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutDepartmentNestedInput
  }

  export type m_master_departmentUncheckedUpdateWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type m_master_departmentUncheckedUpdateManyWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_by_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type m_master_departmentUpdateWithoutModified_byInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    created_by?: user_informationUpdateOneRequiredWithoutC_master_departmentNestedInput
    m_master_department_log?: m_master_department_logUpdateManyWithoutDepartmentNestedInput
  }

  export type m_master_departmentUncheckedUpdateWithoutModified_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: IntFieldUpdateOperationsInput | number
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    m_master_department_log?: m_master_department_logUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type m_master_departmentUncheckedUpdateManyWithoutModified_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    license_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_id?: IntFieldUpdateOperationsInput | number
    modified_on?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type m_master_department_logUpdateWithoutCreated_byInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    department?: m_master_departmentUpdateOneWithoutM_master_department_logNestedInput
  }

  export type m_master_department_logUncheckedUpdateWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type m_master_department_logUncheckedUpdateManyWithoutCreated_byInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type m_master_department_logCreateManyDepartmentInput = {
    id?: number
    name?: string | null
    code?: string | null
    license_id: number
    description?: string | null
    created_on?: Date | string
    status?: boolean | null
    change_description: string
    action: $Enums.action
    created_by_id: number
  }

  export type m_master_department_logUpdateWithoutDepartmentInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    created_by?: user_informationUpdateOneRequiredWithoutM_master_department_logNestedInput
  }

  export type m_master_department_logUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    created_by_id?: IntFieldUpdateOperationsInput | number
  }

  export type m_master_department_logUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    license_id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_on?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableBoolFieldUpdateOperationsInput | boolean | null
    change_description?: StringFieldUpdateOperationsInput | string
    action?: EnumactionFieldUpdateOperationsInput | $Enums.action
    created_by_id?: IntFieldUpdateOperationsInput | number
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