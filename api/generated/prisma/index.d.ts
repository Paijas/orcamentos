
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Orcamento
 * 
 */
export type Orcamento = $Result.DefaultSelection<Prisma.$OrcamentoPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model OrcamentoItem
 * 
 */
export type OrcamentoItem = $Result.DefaultSelection<Prisma.$OrcamentoItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  PF: 'PF',
  PJ: 'PJ'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]


export const TipoCliente: {
  PF: 'PF',
  PJ: 'PJ'
};

export type TipoCliente = (typeof TipoCliente)[keyof typeof TipoCliente]


export const StatusOrcamento: {
  Aprovado: 'Aprovado',
  Pendente: 'Pendente',
  Negado: 'Negado'
};

export type StatusOrcamento = (typeof StatusOrcamento)[keyof typeof StatusOrcamento]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

export type TipoCliente = $Enums.TipoCliente

export const TipoCliente: typeof $Enums.TipoCliente

export type StatusOrcamento = $Enums.StatusOrcamento

export const StatusOrcamento: typeof $Enums.StatusOrcamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orcamento`: Exposes CRUD operations for the **Orcamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orcamentos
    * const orcamentos = await prisma.orcamento.findMany()
    * ```
    */
  get orcamento(): Prisma.OrcamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orcamentoItem`: Exposes CRUD operations for the **OrcamentoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrcamentoItems
    * const orcamentoItems = await prisma.orcamentoItem.findMany()
    * ```
    */
  get orcamentoItem(): Prisma.OrcamentoItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Orcamento: 'Orcamento',
    Item: 'Item',
    OrcamentoItem: 'OrcamentoItem'
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
      modelProps: "usuario" | "cliente" | "orcamento" | "item" | "orcamentoItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Orcamento: {
        payload: Prisma.$OrcamentoPayload<ExtArgs>
        fields: Prisma.OrcamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrcamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrcamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          findFirst: {
            args: Prisma.OrcamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrcamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          findMany: {
            args: Prisma.OrcamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          create: {
            args: Prisma.OrcamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          createMany: {
            args: Prisma.OrcamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrcamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          delete: {
            args: Prisma.OrcamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          update: {
            args: Prisma.OrcamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          deleteMany: {
            args: Prisma.OrcamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrcamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrcamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>[]
          }
          upsert: {
            args: Prisma.OrcamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoPayload>
          }
          aggregate: {
            args: Prisma.OrcamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrcamento>
          }
          groupBy: {
            args: Prisma.OrcamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrcamentoCountArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      OrcamentoItem: {
        payload: Prisma.$OrcamentoItemPayload<ExtArgs>
        fields: Prisma.OrcamentoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrcamentoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrcamentoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>
          }
          findFirst: {
            args: Prisma.OrcamentoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrcamentoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>
          }
          findMany: {
            args: Prisma.OrcamentoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>[]
          }
          create: {
            args: Prisma.OrcamentoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>
          }
          createMany: {
            args: Prisma.OrcamentoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrcamentoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>[]
          }
          delete: {
            args: Prisma.OrcamentoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>
          }
          update: {
            args: Prisma.OrcamentoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>
          }
          deleteMany: {
            args: Prisma.OrcamentoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrcamentoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrcamentoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>[]
          }
          upsert: {
            args: Prisma.OrcamentoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrcamentoItemPayload>
          }
          aggregate: {
            args: Prisma.OrcamentoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrcamentoItem>
          }
          groupBy: {
            args: Prisma.OrcamentoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrcamentoItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrcamentoItemCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    cliente?: ClienteOmit
    orcamento?: OrcamentoOmit
    item?: ItemOmit
    orcamentoItem?: OrcamentoItemOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    orcamentos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | UsuarioCountOutputTypeCountOrcamentosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    orcamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | ClienteCountOutputTypeCountOrcamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
  }


  /**
   * Count Type OrcamentoCountOutputType
   */

  export type OrcamentoCountOutputType = {
    itens: number
  }

  export type OrcamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | OrcamentoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * OrcamentoCountOutputType without action
   */
  export type OrcamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoCountOutputType
     */
    select?: OrcamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrcamentoCountOutputType without action
   */
  export type OrcamentoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoItemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    orcamentos: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | ItemCountOutputTypeCountOrcamentosArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOrcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    celular: string | null
    senha: string | null
    tipo_usuario: $Enums.TipoUsuario | null
    documento: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    celular: string | null
    senha: string | null
    tipo_usuario: $Enums.TipoUsuario | null
    documento: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    celular: number
    senha: number
    tipo_usuario: number
    documento: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    celular?: true
    senha?: true
    tipo_usuario?: true
    documento?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    celular?: true
    senha?: true
    tipo_usuario?: true
    documento?: true
    created_at?: true
    updated_at?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    celular?: true
    senha?: true
    tipo_usuario?: true
    documento?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    celular: string | null
    senha: string
    tipo_usuario: $Enums.TipoUsuario
    documento: string
    created_at: Date
    updated_at: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    senha?: boolean
    tipo_usuario?: boolean
    documento?: boolean
    created_at?: boolean
    updated_at?: boolean
    orcamentos?: boolean | Usuario$orcamentosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    senha?: boolean
    tipo_usuario?: boolean
    documento?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    senha?: boolean
    tipo_usuario?: boolean
    documento?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    senha?: boolean
    tipo_usuario?: boolean
    documento?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "celular" | "senha" | "tipo_usuario" | "documento" | "created_at" | "updated_at", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | Usuario$orcamentosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      orcamentos: Prisma.$OrcamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      celular: string | null
      senha: string
      tipo_usuario: $Enums.TipoUsuario
      documento: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orcamentos<T extends Usuario$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly celular: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo_usuario: FieldRef<"Usuario", 'TipoUsuario'>
    readonly documento: FieldRef<"Usuario", 'String'>
    readonly created_at: FieldRef<"Usuario", 'DateTime'>
    readonly updated_at: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.orcamentos
   */
  export type Usuario$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    cursor?: OrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    celular: string | null
    tipo_cliente: $Enums.TipoCliente | null
    documento: string | null
    endereco: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    celular: string | null
    tipo_cliente: $Enums.TipoCliente | null
    documento: string | null
    endereco: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    celular: number
    tipo_cliente: number
    documento: number
    endereco: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    celular?: true
    tipo_cliente?: true
    documento?: true
    endereco?: true
    created_at?: true
    updated_at?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    celular?: true
    tipo_cliente?: true
    documento?: true
    endereco?: true
    created_at?: true
    updated_at?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    celular?: true
    tipo_cliente?: true
    documento?: true
    endereco?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    celular: string | null
    tipo_cliente: $Enums.TipoCliente
    documento: string
    endereco: string | null
    created_at: Date
    updated_at: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    tipo_cliente?: boolean
    documento?: boolean
    endereco?: boolean
    created_at?: boolean
    updated_at?: boolean
    orcamentos?: boolean | Cliente$orcamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    tipo_cliente?: boolean
    documento?: boolean
    endereco?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    tipo_cliente?: boolean
    documento?: boolean
    endereco?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    celular?: boolean
    tipo_cliente?: boolean
    documento?: boolean
    endereco?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "celular" | "tipo_cliente" | "documento" | "endereco" | "created_at" | "updated_at", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | Cliente$orcamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      orcamentos: Prisma.$OrcamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
      celular: string | null
      tipo_cliente: $Enums.TipoCliente
      documento: string
      endereco: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orcamentos<T extends Cliente$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly celular: FieldRef<"Cliente", 'String'>
    readonly tipo_cliente: FieldRef<"Cliente", 'TipoCliente'>
    readonly documento: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly created_at: FieldRef<"Cliente", 'DateTime'>
    readonly updated_at: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.orcamentos
   */
  export type Cliente$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    cursor?: OrcamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Orcamento
   */

  export type AggregateOrcamento = {
    _count: OrcamentoCountAggregateOutputType | null
    _avg: OrcamentoAvgAggregateOutputType | null
    _sum: OrcamentoSumAggregateOutputType | null
    _min: OrcamentoMinAggregateOutputType | null
    _max: OrcamentoMaxAggregateOutputType | null
  }

  export type OrcamentoAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    usuario_id: number | null
    preco_total: Decimal | null
  }

  export type OrcamentoSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    usuario_id: number | null
    preco_total: Decimal | null
  }

  export type OrcamentoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cliente_id: number | null
    usuario_id: number | null
    preco_total: Decimal | null
    data_inicial: Date | null
    data_validade: Date | null
    status: $Enums.StatusOrcamento | null
    pdf_path: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrcamentoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cliente_id: number | null
    usuario_id: number | null
    preco_total: Decimal | null
    data_inicial: Date | null
    data_validade: Date | null
    status: $Enums.StatusOrcamento | null
    pdf_path: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrcamentoCountAggregateOutputType = {
    id: number
    nome: number
    cliente_id: number
    usuario_id: number
    preco_total: number
    data_inicial: number
    data_validade: number
    status: number
    pdf_path: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrcamentoAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    usuario_id?: true
    preco_total?: true
  }

  export type OrcamentoSumAggregateInputType = {
    id?: true
    cliente_id?: true
    usuario_id?: true
    preco_total?: true
  }

  export type OrcamentoMinAggregateInputType = {
    id?: true
    nome?: true
    cliente_id?: true
    usuario_id?: true
    preco_total?: true
    data_inicial?: true
    data_validade?: true
    status?: true
    pdf_path?: true
    created_at?: true
    updated_at?: true
  }

  export type OrcamentoMaxAggregateInputType = {
    id?: true
    nome?: true
    cliente_id?: true
    usuario_id?: true
    preco_total?: true
    data_inicial?: true
    data_validade?: true
    status?: true
    pdf_path?: true
    created_at?: true
    updated_at?: true
  }

  export type OrcamentoCountAggregateInputType = {
    id?: true
    nome?: true
    cliente_id?: true
    usuario_id?: true
    preco_total?: true
    data_inicial?: true
    data_validade?: true
    status?: true
    pdf_path?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrcamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcamento to aggregate.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orcamentos
    **/
    _count?: true | OrcamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrcamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrcamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrcamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrcamentoMaxAggregateInputType
  }

  export type GetOrcamentoAggregateType<T extends OrcamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateOrcamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrcamento[P]>
      : GetScalarType<T[P], AggregateOrcamento[P]>
  }




  export type OrcamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoWhereInput
    orderBy?: OrcamentoOrderByWithAggregationInput | OrcamentoOrderByWithAggregationInput[]
    by: OrcamentoScalarFieldEnum[] | OrcamentoScalarFieldEnum
    having?: OrcamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrcamentoCountAggregateInputType | true
    _avg?: OrcamentoAvgAggregateInputType
    _sum?: OrcamentoSumAggregateInputType
    _min?: OrcamentoMinAggregateInputType
    _max?: OrcamentoMaxAggregateInputType
  }

  export type OrcamentoGroupByOutputType = {
    id: number
    nome: string
    cliente_id: number
    usuario_id: number
    preco_total: Decimal
    data_inicial: Date
    data_validade: Date
    status: $Enums.StatusOrcamento
    pdf_path: string | null
    created_at: Date
    updated_at: Date
    _count: OrcamentoCountAggregateOutputType | null
    _avg: OrcamentoAvgAggregateOutputType | null
    _sum: OrcamentoSumAggregateOutputType | null
    _min: OrcamentoMinAggregateOutputType | null
    _max: OrcamentoMaxAggregateOutputType | null
  }

  type GetOrcamentoGroupByPayload<T extends OrcamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrcamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrcamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrcamentoGroupByOutputType[P]>
            : GetScalarType<T[P], OrcamentoGroupByOutputType[P]>
        }
      >
    >


  export type OrcamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cliente_id?: boolean
    usuario_id?: boolean
    preco_total?: boolean
    data_inicial?: boolean
    data_validade?: boolean
    status?: boolean
    pdf_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Orcamento$itensArgs<ExtArgs>
    _count?: boolean | OrcamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cliente_id?: boolean
    usuario_id?: boolean
    preco_total?: boolean
    data_inicial?: boolean
    data_validade?: boolean
    status?: boolean
    pdf_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cliente_id?: boolean
    usuario_id?: boolean
    preco_total?: boolean
    data_inicial?: boolean
    data_validade?: boolean
    status?: boolean
    pdf_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamento"]>

  export type OrcamentoSelectScalar = {
    id?: boolean
    nome?: boolean
    cliente_id?: boolean
    usuario_id?: boolean
    preco_total?: boolean
    data_inicial?: boolean
    data_validade?: boolean
    status?: boolean
    pdf_path?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrcamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cliente_id" | "usuario_id" | "preco_total" | "data_inicial" | "data_validade" | "status" | "pdf_path" | "created_at" | "updated_at", ExtArgs["result"]["orcamento"]>
  export type OrcamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Orcamento$itensArgs<ExtArgs>
    _count?: boolean | OrcamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrcamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type OrcamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $OrcamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orcamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      itens: Prisma.$OrcamentoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cliente_id: number
      usuario_id: number
      preco_total: Prisma.Decimal
      data_inicial: Date
      data_validade: Date
      status: $Enums.StatusOrcamento
      pdf_path: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orcamento"]>
    composites: {}
  }

  type OrcamentoGetPayload<S extends boolean | null | undefined | OrcamentoDefaultArgs> = $Result.GetResult<Prisma.$OrcamentoPayload, S>

  type OrcamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrcamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrcamentoCountAggregateInputType | true
    }

  export interface OrcamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orcamento'], meta: { name: 'Orcamento' } }
    /**
     * Find zero or one Orcamento that matches the filter.
     * @param {OrcamentoFindUniqueArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrcamentoFindUniqueArgs>(args: SelectSubset<T, OrcamentoFindUniqueArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orcamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrcamentoFindUniqueOrThrowArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrcamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, OrcamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindFirstArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrcamentoFindFirstArgs>(args?: SelectSubset<T, OrcamentoFindFirstArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orcamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindFirstOrThrowArgs} args - Arguments to find a Orcamento
     * @example
     * // Get one Orcamento
     * const orcamento = await prisma.orcamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrcamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, OrcamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orcamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orcamentos
     * const orcamentos = await prisma.orcamento.findMany()
     * 
     * // Get first 10 Orcamentos
     * const orcamentos = await prisma.orcamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrcamentoFindManyArgs>(args?: SelectSubset<T, OrcamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orcamento.
     * @param {OrcamentoCreateArgs} args - Arguments to create a Orcamento.
     * @example
     * // Create one Orcamento
     * const Orcamento = await prisma.orcamento.create({
     *   data: {
     *     // ... data to create a Orcamento
     *   }
     * })
     * 
     */
    create<T extends OrcamentoCreateArgs>(args: SelectSubset<T, OrcamentoCreateArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orcamentos.
     * @param {OrcamentoCreateManyArgs} args - Arguments to create many Orcamentos.
     * @example
     * // Create many Orcamentos
     * const orcamento = await prisma.orcamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrcamentoCreateManyArgs>(args?: SelectSubset<T, OrcamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orcamentos and returns the data saved in the database.
     * @param {OrcamentoCreateManyAndReturnArgs} args - Arguments to create many Orcamentos.
     * @example
     * // Create many Orcamentos
     * const orcamento = await prisma.orcamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orcamentos and only return the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrcamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, OrcamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orcamento.
     * @param {OrcamentoDeleteArgs} args - Arguments to delete one Orcamento.
     * @example
     * // Delete one Orcamento
     * const Orcamento = await prisma.orcamento.delete({
     *   where: {
     *     // ... filter to delete one Orcamento
     *   }
     * })
     * 
     */
    delete<T extends OrcamentoDeleteArgs>(args: SelectSubset<T, OrcamentoDeleteArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orcamento.
     * @param {OrcamentoUpdateArgs} args - Arguments to update one Orcamento.
     * @example
     * // Update one Orcamento
     * const orcamento = await prisma.orcamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrcamentoUpdateArgs>(args: SelectSubset<T, OrcamentoUpdateArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orcamentos.
     * @param {OrcamentoDeleteManyArgs} args - Arguments to filter Orcamentos to delete.
     * @example
     * // Delete a few Orcamentos
     * const { count } = await prisma.orcamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrcamentoDeleteManyArgs>(args?: SelectSubset<T, OrcamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orcamentos
     * const orcamento = await prisma.orcamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrcamentoUpdateManyArgs>(args: SelectSubset<T, OrcamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orcamentos and returns the data updated in the database.
     * @param {OrcamentoUpdateManyAndReturnArgs} args - Arguments to update many Orcamentos.
     * @example
     * // Update many Orcamentos
     * const orcamento = await prisma.orcamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orcamentos and only return the `id`
     * const orcamentoWithIdOnly = await prisma.orcamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrcamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, OrcamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orcamento.
     * @param {OrcamentoUpsertArgs} args - Arguments to update or create a Orcamento.
     * @example
     * // Update or create a Orcamento
     * const orcamento = await prisma.orcamento.upsert({
     *   create: {
     *     // ... data to create a Orcamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orcamento we want to update
     *   }
     * })
     */
    upsert<T extends OrcamentoUpsertArgs>(args: SelectSubset<T, OrcamentoUpsertArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orcamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoCountArgs} args - Arguments to filter Orcamentos to count.
     * @example
     * // Count the number of Orcamentos
     * const count = await prisma.orcamento.count({
     *   where: {
     *     // ... the filter for the Orcamentos we want to count
     *   }
     * })
    **/
    count<T extends OrcamentoCountArgs>(
      args?: Subset<T, OrcamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrcamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrcamentoAggregateArgs>(args: Subset<T, OrcamentoAggregateArgs>): Prisma.PrismaPromise<GetOrcamentoAggregateType<T>>

    /**
     * Group by Orcamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoGroupByArgs} args - Group by arguments.
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
      T extends OrcamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrcamentoGroupByArgs['orderBy'] }
        : { orderBy?: OrcamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrcamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrcamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orcamento model
   */
  readonly fields: OrcamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orcamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrcamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Orcamento$itensArgs<ExtArgs> = {}>(args?: Subset<T, Orcamento$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orcamento model
   */
  interface OrcamentoFieldRefs {
    readonly id: FieldRef<"Orcamento", 'Int'>
    readonly nome: FieldRef<"Orcamento", 'String'>
    readonly cliente_id: FieldRef<"Orcamento", 'Int'>
    readonly usuario_id: FieldRef<"Orcamento", 'Int'>
    readonly preco_total: FieldRef<"Orcamento", 'Decimal'>
    readonly data_inicial: FieldRef<"Orcamento", 'DateTime'>
    readonly data_validade: FieldRef<"Orcamento", 'DateTime'>
    readonly status: FieldRef<"Orcamento", 'StatusOrcamento'>
    readonly pdf_path: FieldRef<"Orcamento", 'String'>
    readonly created_at: FieldRef<"Orcamento", 'DateTime'>
    readonly updated_at: FieldRef<"Orcamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orcamento findUnique
   */
  export type OrcamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento findUniqueOrThrow
   */
  export type OrcamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento findFirst
   */
  export type OrcamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcamentos.
     */
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento findFirstOrThrow
   */
  export type OrcamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamento to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orcamentos.
     */
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento findMany
   */
  export type OrcamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter, which Orcamentos to fetch.
     */
    where?: OrcamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orcamentos to fetch.
     */
    orderBy?: OrcamentoOrderByWithRelationInput | OrcamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orcamentos.
     */
    cursor?: OrcamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orcamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orcamentos.
     */
    skip?: number
    distinct?: OrcamentoScalarFieldEnum | OrcamentoScalarFieldEnum[]
  }

  /**
   * Orcamento create
   */
  export type OrcamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Orcamento.
     */
    data: XOR<OrcamentoCreateInput, OrcamentoUncheckedCreateInput>
  }

  /**
   * Orcamento createMany
   */
  export type OrcamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orcamentos.
     */
    data: OrcamentoCreateManyInput | OrcamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orcamento createManyAndReturn
   */
  export type OrcamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Orcamentos.
     */
    data: OrcamentoCreateManyInput | OrcamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcamento update
   */
  export type OrcamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Orcamento.
     */
    data: XOR<OrcamentoUpdateInput, OrcamentoUncheckedUpdateInput>
    /**
     * Choose, which Orcamento to update.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento updateMany
   */
  export type OrcamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orcamentos.
     */
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which Orcamentos to update
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to update.
     */
    limit?: number
  }

  /**
   * Orcamento updateManyAndReturn
   */
  export type OrcamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * The data used to update Orcamentos.
     */
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyInput>
    /**
     * Filter which Orcamentos to update
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orcamento upsert
   */
  export type OrcamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Orcamento to update in case it exists.
     */
    where: OrcamentoWhereUniqueInput
    /**
     * In case the Orcamento found by the `where` argument doesn't exist, create a new Orcamento with this data.
     */
    create: XOR<OrcamentoCreateInput, OrcamentoUncheckedCreateInput>
    /**
     * In case the Orcamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrcamentoUpdateInput, OrcamentoUncheckedUpdateInput>
  }

  /**
   * Orcamento delete
   */
  export type OrcamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
    /**
     * Filter which Orcamento to delete.
     */
    where: OrcamentoWhereUniqueInput
  }

  /**
   * Orcamento deleteMany
   */
  export type OrcamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orcamentos to delete
     */
    where?: OrcamentoWhereInput
    /**
     * Limit how many Orcamentos to delete.
     */
    limit?: number
  }

  /**
   * Orcamento.itens
   */
  export type Orcamento$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    where?: OrcamentoItemWhereInput
    orderBy?: OrcamentoItemOrderByWithRelationInput | OrcamentoItemOrderByWithRelationInput[]
    cursor?: OrcamentoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoItemScalarFieldEnum | OrcamentoItemScalarFieldEnum[]
  }

  /**
   * Orcamento without action
   */
  export type OrcamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orcamento
     */
    select?: OrcamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orcamento
     */
    omit?: OrcamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    preco_unitario: Decimal | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    preco_unitario: Decimal | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    nome: string | null
    marca: string | null
    preco_unitario: Decimal | null
    unidade_medida: string | null
    descricao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    marca: string | null
    preco_unitario: Decimal | null
    unidade_medida: string | null
    descricao: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    nome: number
    marca: number
    preco_unitario: number
    unidade_medida: number
    descricao: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    preco_unitario?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    preco_unitario?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    preco_unitario?: true
    unidade_medida?: true
    descricao?: true
    created_at?: true
    updated_at?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    preco_unitario?: true
    unidade_medida?: true
    descricao?: true
    created_at?: true
    updated_at?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    nome?: true
    marca?: true
    preco_unitario?: true
    unidade_medida?: true
    descricao?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    nome: string
    marca: string | null
    preco_unitario: Decimal
    unidade_medida: string
    descricao: string | null
    created_at: Date
    updated_at: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    preco_unitario?: boolean
    unidade_medida?: boolean
    descricao?: boolean
    created_at?: boolean
    updated_at?: boolean
    orcamentos?: boolean | Item$orcamentosArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    preco_unitario?: boolean
    unidade_medida?: boolean
    descricao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    marca?: boolean
    preco_unitario?: boolean
    unidade_medida?: boolean
    descricao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    nome?: boolean
    marca?: boolean
    preco_unitario?: boolean
    unidade_medida?: boolean
    descricao?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "marca" | "preco_unitario" | "unidade_medida" | "descricao" | "created_at" | "updated_at", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamentos?: boolean | Item$orcamentosArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      orcamentos: Prisma.$OrcamentoItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      marca: string | null
      preco_unitario: Prisma.Decimal
      unidade_medida: string
      descricao: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orcamentos<T extends Item$orcamentosArgs<ExtArgs> = {}>(args?: Subset<T, Item$orcamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly nome: FieldRef<"Item", 'String'>
    readonly marca: FieldRef<"Item", 'String'>
    readonly preco_unitario: FieldRef<"Item", 'Decimal'>
    readonly unidade_medida: FieldRef<"Item", 'String'>
    readonly descricao: FieldRef<"Item", 'String'>
    readonly created_at: FieldRef<"Item", 'DateTime'>
    readonly updated_at: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.orcamentos
   */
  export type Item$orcamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    where?: OrcamentoItemWhereInput
    orderBy?: OrcamentoItemOrderByWithRelationInput | OrcamentoItemOrderByWithRelationInput[]
    cursor?: OrcamentoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrcamentoItemScalarFieldEnum | OrcamentoItemScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model OrcamentoItem
   */

  export type AggregateOrcamentoItem = {
    _count: OrcamentoItemCountAggregateOutputType | null
    _avg: OrcamentoItemAvgAggregateOutputType | null
    _sum: OrcamentoItemSumAggregateOutputType | null
    _min: OrcamentoItemMinAggregateOutputType | null
    _max: OrcamentoItemMaxAggregateOutputType | null
  }

  export type OrcamentoItemAvgAggregateOutputType = {
    id: number | null
    orcamento_id: number | null
    item_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type OrcamentoItemSumAggregateOutputType = {
    id: number | null
    orcamento_id: number | null
    item_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type OrcamentoItemMinAggregateOutputType = {
    id: number | null
    orcamento_id: number | null
    item_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type OrcamentoItemMaxAggregateOutputType = {
    id: number | null
    orcamento_id: number | null
    item_id: number | null
    quantidade: Decimal | null
    preco_unitario: Decimal | null
  }

  export type OrcamentoItemCountAggregateOutputType = {
    id: number
    orcamento_id: number
    item_id: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type OrcamentoItemAvgAggregateInputType = {
    id?: true
    orcamento_id?: true
    item_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type OrcamentoItemSumAggregateInputType = {
    id?: true
    orcamento_id?: true
    item_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type OrcamentoItemMinAggregateInputType = {
    id?: true
    orcamento_id?: true
    item_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type OrcamentoItemMaxAggregateInputType = {
    id?: true
    orcamento_id?: true
    item_id?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type OrcamentoItemCountAggregateInputType = {
    id?: true
    orcamento_id?: true
    item_id?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type OrcamentoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrcamentoItem to aggregate.
     */
    where?: OrcamentoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrcamentoItems to fetch.
     */
    orderBy?: OrcamentoItemOrderByWithRelationInput | OrcamentoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrcamentoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrcamentoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrcamentoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrcamentoItems
    **/
    _count?: true | OrcamentoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrcamentoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrcamentoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrcamentoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrcamentoItemMaxAggregateInputType
  }

  export type GetOrcamentoItemAggregateType<T extends OrcamentoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrcamentoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrcamentoItem[P]>
      : GetScalarType<T[P], AggregateOrcamentoItem[P]>
  }




  export type OrcamentoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrcamentoItemWhereInput
    orderBy?: OrcamentoItemOrderByWithAggregationInput | OrcamentoItemOrderByWithAggregationInput[]
    by: OrcamentoItemScalarFieldEnum[] | OrcamentoItemScalarFieldEnum
    having?: OrcamentoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrcamentoItemCountAggregateInputType | true
    _avg?: OrcamentoItemAvgAggregateInputType
    _sum?: OrcamentoItemSumAggregateInputType
    _min?: OrcamentoItemMinAggregateInputType
    _max?: OrcamentoItemMaxAggregateInputType
  }

  export type OrcamentoItemGroupByOutputType = {
    id: number
    orcamento_id: number
    item_id: number
    quantidade: Decimal
    preco_unitario: Decimal
    _count: OrcamentoItemCountAggregateOutputType | null
    _avg: OrcamentoItemAvgAggregateOutputType | null
    _sum: OrcamentoItemSumAggregateOutputType | null
    _min: OrcamentoItemMinAggregateOutputType | null
    _max: OrcamentoItemMaxAggregateOutputType | null
  }

  type GetOrcamentoItemGroupByPayload<T extends OrcamentoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrcamentoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrcamentoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrcamentoItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrcamentoItemGroupByOutputType[P]>
        }
      >
    >


  export type OrcamentoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamento_id?: boolean
    item_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamentoItem"]>

  export type OrcamentoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamento_id?: boolean
    item_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamentoItem"]>

  export type OrcamentoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orcamento_id?: boolean
    item_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orcamentoItem"]>

  export type OrcamentoItemSelectScalar = {
    id?: boolean
    orcamento_id?: boolean
    item_id?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type OrcamentoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orcamento_id" | "item_id" | "quantidade" | "preco_unitario", ExtArgs["result"]["orcamentoItem"]>
  export type OrcamentoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type OrcamentoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type OrcamentoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orcamento?: boolean | OrcamentoDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $OrcamentoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrcamentoItem"
    objects: {
      orcamento: Prisma.$OrcamentoPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orcamento_id: number
      item_id: number
      quantidade: Prisma.Decimal
      preco_unitario: Prisma.Decimal
    }, ExtArgs["result"]["orcamentoItem"]>
    composites: {}
  }

  type OrcamentoItemGetPayload<S extends boolean | null | undefined | OrcamentoItemDefaultArgs> = $Result.GetResult<Prisma.$OrcamentoItemPayload, S>

  type OrcamentoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrcamentoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrcamentoItemCountAggregateInputType | true
    }

  export interface OrcamentoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrcamentoItem'], meta: { name: 'OrcamentoItem' } }
    /**
     * Find zero or one OrcamentoItem that matches the filter.
     * @param {OrcamentoItemFindUniqueArgs} args - Arguments to find a OrcamentoItem
     * @example
     * // Get one OrcamentoItem
     * const orcamentoItem = await prisma.orcamentoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrcamentoItemFindUniqueArgs>(args: SelectSubset<T, OrcamentoItemFindUniqueArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrcamentoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrcamentoItemFindUniqueOrThrowArgs} args - Arguments to find a OrcamentoItem
     * @example
     * // Get one OrcamentoItem
     * const orcamentoItem = await prisma.orcamentoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrcamentoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrcamentoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrcamentoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemFindFirstArgs} args - Arguments to find a OrcamentoItem
     * @example
     * // Get one OrcamentoItem
     * const orcamentoItem = await prisma.orcamentoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrcamentoItemFindFirstArgs>(args?: SelectSubset<T, OrcamentoItemFindFirstArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrcamentoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemFindFirstOrThrowArgs} args - Arguments to find a OrcamentoItem
     * @example
     * // Get one OrcamentoItem
     * const orcamentoItem = await prisma.orcamentoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrcamentoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrcamentoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrcamentoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrcamentoItems
     * const orcamentoItems = await prisma.orcamentoItem.findMany()
     * 
     * // Get first 10 OrcamentoItems
     * const orcamentoItems = await prisma.orcamentoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orcamentoItemWithIdOnly = await prisma.orcamentoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrcamentoItemFindManyArgs>(args?: SelectSubset<T, OrcamentoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrcamentoItem.
     * @param {OrcamentoItemCreateArgs} args - Arguments to create a OrcamentoItem.
     * @example
     * // Create one OrcamentoItem
     * const OrcamentoItem = await prisma.orcamentoItem.create({
     *   data: {
     *     // ... data to create a OrcamentoItem
     *   }
     * })
     * 
     */
    create<T extends OrcamentoItemCreateArgs>(args: SelectSubset<T, OrcamentoItemCreateArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrcamentoItems.
     * @param {OrcamentoItemCreateManyArgs} args - Arguments to create many OrcamentoItems.
     * @example
     * // Create many OrcamentoItems
     * const orcamentoItem = await prisma.orcamentoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrcamentoItemCreateManyArgs>(args?: SelectSubset<T, OrcamentoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrcamentoItems and returns the data saved in the database.
     * @param {OrcamentoItemCreateManyAndReturnArgs} args - Arguments to create many OrcamentoItems.
     * @example
     * // Create many OrcamentoItems
     * const orcamentoItem = await prisma.orcamentoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrcamentoItems and only return the `id`
     * const orcamentoItemWithIdOnly = await prisma.orcamentoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrcamentoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrcamentoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrcamentoItem.
     * @param {OrcamentoItemDeleteArgs} args - Arguments to delete one OrcamentoItem.
     * @example
     * // Delete one OrcamentoItem
     * const OrcamentoItem = await prisma.orcamentoItem.delete({
     *   where: {
     *     // ... filter to delete one OrcamentoItem
     *   }
     * })
     * 
     */
    delete<T extends OrcamentoItemDeleteArgs>(args: SelectSubset<T, OrcamentoItemDeleteArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrcamentoItem.
     * @param {OrcamentoItemUpdateArgs} args - Arguments to update one OrcamentoItem.
     * @example
     * // Update one OrcamentoItem
     * const orcamentoItem = await prisma.orcamentoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrcamentoItemUpdateArgs>(args: SelectSubset<T, OrcamentoItemUpdateArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrcamentoItems.
     * @param {OrcamentoItemDeleteManyArgs} args - Arguments to filter OrcamentoItems to delete.
     * @example
     * // Delete a few OrcamentoItems
     * const { count } = await prisma.orcamentoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrcamentoItemDeleteManyArgs>(args?: SelectSubset<T, OrcamentoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrcamentoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrcamentoItems
     * const orcamentoItem = await prisma.orcamentoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrcamentoItemUpdateManyArgs>(args: SelectSubset<T, OrcamentoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrcamentoItems and returns the data updated in the database.
     * @param {OrcamentoItemUpdateManyAndReturnArgs} args - Arguments to update many OrcamentoItems.
     * @example
     * // Update many OrcamentoItems
     * const orcamentoItem = await prisma.orcamentoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrcamentoItems and only return the `id`
     * const orcamentoItemWithIdOnly = await prisma.orcamentoItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrcamentoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrcamentoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrcamentoItem.
     * @param {OrcamentoItemUpsertArgs} args - Arguments to update or create a OrcamentoItem.
     * @example
     * // Update or create a OrcamentoItem
     * const orcamentoItem = await prisma.orcamentoItem.upsert({
     *   create: {
     *     // ... data to create a OrcamentoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrcamentoItem we want to update
     *   }
     * })
     */
    upsert<T extends OrcamentoItemUpsertArgs>(args: SelectSubset<T, OrcamentoItemUpsertArgs<ExtArgs>>): Prisma__OrcamentoItemClient<$Result.GetResult<Prisma.$OrcamentoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrcamentoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemCountArgs} args - Arguments to filter OrcamentoItems to count.
     * @example
     * // Count the number of OrcamentoItems
     * const count = await prisma.orcamentoItem.count({
     *   where: {
     *     // ... the filter for the OrcamentoItems we want to count
     *   }
     * })
    **/
    count<T extends OrcamentoItemCountArgs>(
      args?: Subset<T, OrcamentoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrcamentoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrcamentoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrcamentoItemAggregateArgs>(args: Subset<T, OrcamentoItemAggregateArgs>): Prisma.PrismaPromise<GetOrcamentoItemAggregateType<T>>

    /**
     * Group by OrcamentoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrcamentoItemGroupByArgs} args - Group by arguments.
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
      T extends OrcamentoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrcamentoItemGroupByArgs['orderBy'] }
        : { orderBy?: OrcamentoItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrcamentoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrcamentoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrcamentoItem model
   */
  readonly fields: OrcamentoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrcamentoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrcamentoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orcamento<T extends OrcamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrcamentoDefaultArgs<ExtArgs>>): Prisma__OrcamentoClient<$Result.GetResult<Prisma.$OrcamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrcamentoItem model
   */
  interface OrcamentoItemFieldRefs {
    readonly id: FieldRef<"OrcamentoItem", 'Int'>
    readonly orcamento_id: FieldRef<"OrcamentoItem", 'Int'>
    readonly item_id: FieldRef<"OrcamentoItem", 'Int'>
    readonly quantidade: FieldRef<"OrcamentoItem", 'Decimal'>
    readonly preco_unitario: FieldRef<"OrcamentoItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * OrcamentoItem findUnique
   */
  export type OrcamentoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * Filter, which OrcamentoItem to fetch.
     */
    where: OrcamentoItemWhereUniqueInput
  }

  /**
   * OrcamentoItem findUniqueOrThrow
   */
  export type OrcamentoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * Filter, which OrcamentoItem to fetch.
     */
    where: OrcamentoItemWhereUniqueInput
  }

  /**
   * OrcamentoItem findFirst
   */
  export type OrcamentoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * Filter, which OrcamentoItem to fetch.
     */
    where?: OrcamentoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrcamentoItems to fetch.
     */
    orderBy?: OrcamentoItemOrderByWithRelationInput | OrcamentoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrcamentoItems.
     */
    cursor?: OrcamentoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrcamentoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrcamentoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrcamentoItems.
     */
    distinct?: OrcamentoItemScalarFieldEnum | OrcamentoItemScalarFieldEnum[]
  }

  /**
   * OrcamentoItem findFirstOrThrow
   */
  export type OrcamentoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * Filter, which OrcamentoItem to fetch.
     */
    where?: OrcamentoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrcamentoItems to fetch.
     */
    orderBy?: OrcamentoItemOrderByWithRelationInput | OrcamentoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrcamentoItems.
     */
    cursor?: OrcamentoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrcamentoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrcamentoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrcamentoItems.
     */
    distinct?: OrcamentoItemScalarFieldEnum | OrcamentoItemScalarFieldEnum[]
  }

  /**
   * OrcamentoItem findMany
   */
  export type OrcamentoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * Filter, which OrcamentoItems to fetch.
     */
    where?: OrcamentoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrcamentoItems to fetch.
     */
    orderBy?: OrcamentoItemOrderByWithRelationInput | OrcamentoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrcamentoItems.
     */
    cursor?: OrcamentoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrcamentoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrcamentoItems.
     */
    skip?: number
    distinct?: OrcamentoItemScalarFieldEnum | OrcamentoItemScalarFieldEnum[]
  }

  /**
   * OrcamentoItem create
   */
  export type OrcamentoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrcamentoItem.
     */
    data: XOR<OrcamentoItemCreateInput, OrcamentoItemUncheckedCreateInput>
  }

  /**
   * OrcamentoItem createMany
   */
  export type OrcamentoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrcamentoItems.
     */
    data: OrcamentoItemCreateManyInput | OrcamentoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrcamentoItem createManyAndReturn
   */
  export type OrcamentoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrcamentoItems.
     */
    data: OrcamentoItemCreateManyInput | OrcamentoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrcamentoItem update
   */
  export type OrcamentoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrcamentoItem.
     */
    data: XOR<OrcamentoItemUpdateInput, OrcamentoItemUncheckedUpdateInput>
    /**
     * Choose, which OrcamentoItem to update.
     */
    where: OrcamentoItemWhereUniqueInput
  }

  /**
   * OrcamentoItem updateMany
   */
  export type OrcamentoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrcamentoItems.
     */
    data: XOR<OrcamentoItemUpdateManyMutationInput, OrcamentoItemUncheckedUpdateManyInput>
    /**
     * Filter which OrcamentoItems to update
     */
    where?: OrcamentoItemWhereInput
    /**
     * Limit how many OrcamentoItems to update.
     */
    limit?: number
  }

  /**
   * OrcamentoItem updateManyAndReturn
   */
  export type OrcamentoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * The data used to update OrcamentoItems.
     */
    data: XOR<OrcamentoItemUpdateManyMutationInput, OrcamentoItemUncheckedUpdateManyInput>
    /**
     * Filter which OrcamentoItems to update
     */
    where?: OrcamentoItemWhereInput
    /**
     * Limit how many OrcamentoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrcamentoItem upsert
   */
  export type OrcamentoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrcamentoItem to update in case it exists.
     */
    where: OrcamentoItemWhereUniqueInput
    /**
     * In case the OrcamentoItem found by the `where` argument doesn't exist, create a new OrcamentoItem with this data.
     */
    create: XOR<OrcamentoItemCreateInput, OrcamentoItemUncheckedCreateInput>
    /**
     * In case the OrcamentoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrcamentoItemUpdateInput, OrcamentoItemUncheckedUpdateInput>
  }

  /**
   * OrcamentoItem delete
   */
  export type OrcamentoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
    /**
     * Filter which OrcamentoItem to delete.
     */
    where: OrcamentoItemWhereUniqueInput
  }

  /**
   * OrcamentoItem deleteMany
   */
  export type OrcamentoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrcamentoItems to delete
     */
    where?: OrcamentoItemWhereInput
    /**
     * Limit how many OrcamentoItems to delete.
     */
    limit?: number
  }

  /**
   * OrcamentoItem without action
   */
  export type OrcamentoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrcamentoItem
     */
    select?: OrcamentoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrcamentoItem
     */
    omit?: OrcamentoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrcamentoItemInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    celular: 'celular',
    senha: 'senha',
    tipo_usuario: 'tipo_usuario',
    documento: 'documento',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    celular: 'celular',
    tipo_cliente: 'tipo_cliente',
    documento: 'documento',
    endereco: 'endereco',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const OrcamentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cliente_id: 'cliente_id',
    usuario_id: 'usuario_id',
    preco_total: 'preco_total',
    data_inicial: 'data_inicial',
    data_validade: 'data_validade',
    status: 'status',
    pdf_path: 'pdf_path',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrcamentoScalarFieldEnum = (typeof OrcamentoScalarFieldEnum)[keyof typeof OrcamentoScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    marca: 'marca',
    preco_unitario: 'preco_unitario',
    unidade_medida: 'unidade_medida',
    descricao: 'descricao',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const OrcamentoItemScalarFieldEnum: {
    id: 'id',
    orcamento_id: 'orcamento_id',
    item_id: 'item_id',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type OrcamentoItemScalarFieldEnum = (typeof OrcamentoItemScalarFieldEnum)[keyof typeof OrcamentoItemScalarFieldEnum]


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
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoCliente'
   */
  export type EnumTipoClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCliente'>
    


  /**
   * Reference to a field of type 'TipoCliente[]'
   */
  export type ListEnumTipoClienteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCliente[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'StatusOrcamento'
   */
  export type EnumStatusOrcamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusOrcamento'>
    


  /**
   * Reference to a field of type 'StatusOrcamento[]'
   */
  export type ListEnumStatusOrcamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusOrcamento[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    celular?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    tipo_usuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    documento?: StringFilter<"Usuario"> | string
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    orcamentos?: OrcamentoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrderInput | SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
    documento?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orcamentos?: OrcamentoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    documento?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    celular?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    tipo_usuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    orcamentos?: OrcamentoListRelationFilter
  }, "id" | "email" | "documento">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrderInput | SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
    documento?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    celular?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo_usuario?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    documento?: StringWithAggregatesFilter<"Usuario"> | string
    created_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringNullableFilter<"Cliente"> | string | null
    celular?: StringNullableFilter<"Cliente"> | string | null
    tipo_cliente?: EnumTipoClienteFilter<"Cliente"> | $Enums.TipoCliente
    documento?: StringFilter<"Cliente"> | string
    endereco?: StringNullableFilter<"Cliente"> | string | null
    created_at?: DateTimeFilter<"Cliente"> | Date | string
    updated_at?: DateTimeFilter<"Cliente"> | Date | string
    orcamentos?: OrcamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    tipo_cliente?: SortOrder
    documento?: SortOrder
    endereco?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orcamentos?: OrcamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    documento?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    celular?: StringNullableFilter<"Cliente"> | string | null
    tipo_cliente?: EnumTipoClienteFilter<"Cliente"> | $Enums.TipoCliente
    endereco?: StringNullableFilter<"Cliente"> | string | null
    created_at?: DateTimeFilter<"Cliente"> | Date | string
    updated_at?: DateTimeFilter<"Cliente"> | Date | string
    orcamentos?: OrcamentoListRelationFilter
  }, "id" | "email" | "documento">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    tipo_cliente?: SortOrder
    documento?: SortOrder
    endereco?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    celular?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    tipo_cliente?: EnumTipoClienteWithAggregatesFilter<"Cliente"> | $Enums.TipoCliente
    documento?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type OrcamentoWhereInput = {
    AND?: OrcamentoWhereInput | OrcamentoWhereInput[]
    OR?: OrcamentoWhereInput[]
    NOT?: OrcamentoWhereInput | OrcamentoWhereInput[]
    id?: IntFilter<"Orcamento"> | number
    nome?: StringFilter<"Orcamento"> | string
    cliente_id?: IntFilter<"Orcamento"> | number
    usuario_id?: IntFilter<"Orcamento"> | number
    preco_total?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFilter<"Orcamento"> | Date | string
    data_validade?: DateTimeFilter<"Orcamento"> | Date | string
    status?: EnumStatusOrcamentoFilter<"Orcamento"> | $Enums.StatusOrcamento
    pdf_path?: StringNullableFilter<"Orcamento"> | string | null
    created_at?: DateTimeFilter<"Orcamento"> | Date | string
    updated_at?: DateTimeFilter<"Orcamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: OrcamentoItemListRelationFilter
  }

  export type OrcamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
    data_inicial?: SortOrder
    data_validade?: SortOrder
    status?: SortOrder
    pdf_path?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    itens?: OrcamentoItemOrderByRelationAggregateInput
  }

  export type OrcamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrcamentoWhereInput | OrcamentoWhereInput[]
    OR?: OrcamentoWhereInput[]
    NOT?: OrcamentoWhereInput | OrcamentoWhereInput[]
    nome?: StringFilter<"Orcamento"> | string
    cliente_id?: IntFilter<"Orcamento"> | number
    usuario_id?: IntFilter<"Orcamento"> | number
    preco_total?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFilter<"Orcamento"> | Date | string
    data_validade?: DateTimeFilter<"Orcamento"> | Date | string
    status?: EnumStatusOrcamentoFilter<"Orcamento"> | $Enums.StatusOrcamento
    pdf_path?: StringNullableFilter<"Orcamento"> | string | null
    created_at?: DateTimeFilter<"Orcamento"> | Date | string
    updated_at?: DateTimeFilter<"Orcamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    itens?: OrcamentoItemListRelationFilter
  }, "id">

  export type OrcamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
    data_inicial?: SortOrder
    data_validade?: SortOrder
    status?: SortOrder
    pdf_path?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrcamentoCountOrderByAggregateInput
    _avg?: OrcamentoAvgOrderByAggregateInput
    _max?: OrcamentoMaxOrderByAggregateInput
    _min?: OrcamentoMinOrderByAggregateInput
    _sum?: OrcamentoSumOrderByAggregateInput
  }

  export type OrcamentoScalarWhereWithAggregatesInput = {
    AND?: OrcamentoScalarWhereWithAggregatesInput | OrcamentoScalarWhereWithAggregatesInput[]
    OR?: OrcamentoScalarWhereWithAggregatesInput[]
    NOT?: OrcamentoScalarWhereWithAggregatesInput | OrcamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orcamento"> | number
    nome?: StringWithAggregatesFilter<"Orcamento"> | string
    cliente_id?: IntWithAggregatesFilter<"Orcamento"> | number
    usuario_id?: IntWithAggregatesFilter<"Orcamento"> | number
    preco_total?: DecimalWithAggregatesFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
    data_validade?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
    status?: EnumStatusOrcamentoWithAggregatesFilter<"Orcamento"> | $Enums.StatusOrcamento
    pdf_path?: StringNullableWithAggregatesFilter<"Orcamento"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Orcamento"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    nome?: StringFilter<"Item"> | string
    marca?: StringNullableFilter<"Item"> | string | null
    preco_unitario?: DecimalFilter<"Item"> | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFilter<"Item"> | string
    descricao?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    orcamentos?: OrcamentoItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrderInput | SortOrder
    preco_unitario?: SortOrder
    unidade_medida?: SortOrder
    descricao?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orcamentos?: OrcamentoItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    nome?: StringFilter<"Item"> | string
    marca?: StringNullableFilter<"Item"> | string | null
    preco_unitario?: DecimalFilter<"Item"> | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFilter<"Item"> | string
    descricao?: StringNullableFilter<"Item"> | string | null
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    orcamentos?: OrcamentoItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrderInput | SortOrder
    preco_unitario?: SortOrder
    unidade_medida?: SortOrder
    descricao?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    nome?: StringWithAggregatesFilter<"Item"> | string
    marca?: StringNullableWithAggregatesFilter<"Item"> | string | null
    preco_unitario?: DecimalWithAggregatesFilter<"Item"> | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringWithAggregatesFilter<"Item"> | string
    descricao?: StringNullableWithAggregatesFilter<"Item"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type OrcamentoItemWhereInput = {
    AND?: OrcamentoItemWhereInput | OrcamentoItemWhereInput[]
    OR?: OrcamentoItemWhereInput[]
    NOT?: OrcamentoItemWhereInput | OrcamentoItemWhereInput[]
    id?: IntFilter<"OrcamentoItem"> | number
    orcamento_id?: IntFilter<"OrcamentoItem"> | number
    item_id?: IntFilter<"OrcamentoItem"> | number
    quantidade?: DecimalFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
    orcamento?: XOR<OrcamentoScalarRelationFilter, OrcamentoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type OrcamentoItemOrderByWithRelationInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    orcamento?: OrcamentoOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type OrcamentoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrcamentoItemWhereInput | OrcamentoItemWhereInput[]
    OR?: OrcamentoItemWhereInput[]
    NOT?: OrcamentoItemWhereInput | OrcamentoItemWhereInput[]
    orcamento_id?: IntFilter<"OrcamentoItem"> | number
    item_id?: IntFilter<"OrcamentoItem"> | number
    quantidade?: DecimalFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
    orcamento?: XOR<OrcamentoScalarRelationFilter, OrcamentoWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type OrcamentoItemOrderByWithAggregationInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
    _count?: OrcamentoItemCountOrderByAggregateInput
    _avg?: OrcamentoItemAvgOrderByAggregateInput
    _max?: OrcamentoItemMaxOrderByAggregateInput
    _min?: OrcamentoItemMinOrderByAggregateInput
    _sum?: OrcamentoItemSumOrderByAggregateInput
  }

  export type OrcamentoItemScalarWhereWithAggregatesInput = {
    AND?: OrcamentoItemScalarWhereWithAggregatesInput | OrcamentoItemScalarWhereWithAggregatesInput[]
    OR?: OrcamentoItemScalarWhereWithAggregatesInput[]
    NOT?: OrcamentoItemScalarWhereWithAggregatesInput | OrcamentoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrcamentoItem"> | number
    orcamento_id?: IntWithAggregatesFilter<"OrcamentoItem"> | number
    item_id?: IntWithAggregatesFilter<"OrcamentoItem"> | number
    quantidade?: DecimalWithAggregatesFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalWithAggregatesFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    celular?: string | null
    senha: string
    tipo_usuario: $Enums.TipoUsuario
    documento: string
    created_at?: Date | string
    updated_at?: Date | string
    orcamentos?: OrcamentoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    celular?: string | null
    senha: string
    tipo_usuario: $Enums.TipoUsuario
    documento: string
    created_at?: Date | string
    updated_at?: Date | string
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    documento?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    documento?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    celular?: string | null
    senha: string
    tipo_usuario: $Enums.TipoUsuario
    documento: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    documento?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    documento?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nome: string
    email?: string | null
    celular?: string | null
    tipo_cliente: $Enums.TipoCliente
    documento: string
    endereco?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orcamentos?: OrcamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    celular?: string | null
    tipo_cliente: $Enums.TipoCliente
    documento: string
    endereco?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orcamentos?: OrcamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_cliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    documento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_cliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    documento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
    celular?: string | null
    tipo_cliente: $Enums.TipoCliente
    documento: string
    endereco?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_cliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    documento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_cliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    documento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateInput = {
    nome: string
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    usuario: UsuarioCreateNestedOneWithoutOrcamentosInput
    itens?: OrcamentoItemCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateInput = {
    id?: number
    nome: string
    cliente_id: number
    usuario_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    itens?: OrcamentoItemUncheckedCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutOrcamentosNestedInput
    itens?: OrcamentoItemUpdateManyWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: OrcamentoItemUncheckedUpdateManyWithoutOrcamentoNestedInput
  }

  export type OrcamentoCreateManyInput = {
    id?: number
    nome: string
    cliente_id: number
    usuario_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrcamentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    nome: string
    marca?: string | null
    preco_unitario: Decimal | DecimalJsLike | number | string
    unidade_medida: string
    descricao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orcamentos?: OrcamentoItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    nome: string
    marca?: string | null
    preco_unitario: Decimal | DecimalJsLike | number | string
    unidade_medida: string
    descricao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    orcamentos?: OrcamentoItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orcamentos?: OrcamentoItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    nome: string
    marca?: string | null
    preco_unitario: Decimal | DecimalJsLike | number | string
    unidade_medida: string
    descricao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoItemCreateInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
    orcamento: OrcamentoCreateNestedOneWithoutItensInput
    item: ItemCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoItemUncheckedCreateInput = {
    id?: number
    orcamento_id: number
    item_id: number
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUpdateInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orcamento?: OrcamentoUpdateOneRequiredWithoutItensNestedInput
    item?: ItemUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orcamento_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemCreateManyInput = {
    id?: number
    orcamento_id: number
    item_id: number
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUpdateManyMutationInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orcamento_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
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

  export type OrcamentoListRelationFilter = {
    every?: OrcamentoWhereInput
    some?: OrcamentoWhereInput
    none?: OrcamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrcamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
    documento?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
    documento?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrder
    senha?: SortOrder
    tipo_usuario?: SortOrder
    documento?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
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

  export type EnumTipoClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteFilter<$PrismaModel> | $Enums.TipoCliente
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrder
    tipo_cliente?: SortOrder
    documento?: SortOrder
    endereco?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrder
    tipo_cliente?: SortOrder
    documento?: SortOrder
    endereco?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    celular?: SortOrder
    tipo_cliente?: SortOrder
    documento?: SortOrder
    endereco?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTipoClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteWithAggregatesFilter<$PrismaModel> | $Enums.TipoCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoClienteFilter<$PrismaModel>
    _max?: NestedEnumTipoClienteFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumStatusOrcamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrcamento | EnumStatusOrcamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrcamentoFilter<$PrismaModel> | $Enums.StatusOrcamento
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type OrcamentoItemListRelationFilter = {
    every?: OrcamentoItemWhereInput
    some?: OrcamentoItemWhereInput
    none?: OrcamentoItemWhereInput
  }

  export type OrcamentoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrcamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
    data_inicial?: SortOrder
    data_validade?: SortOrder
    status?: SortOrder
    pdf_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrcamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
  }

  export type OrcamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
    data_inicial?: SortOrder
    data_validade?: SortOrder
    status?: SortOrder
    pdf_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrcamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
    data_inicial?: SortOrder
    data_validade?: SortOrder
    status?: SortOrder
    pdf_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrcamentoSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    usuario_id?: SortOrder
    preco_total?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumStatusOrcamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrcamento | EnumStatusOrcamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrcamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusOrcamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusOrcamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusOrcamentoFilter<$PrismaModel>
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    preco_unitario?: SortOrder
    unidade_medida?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    preco_unitario?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    preco_unitario?: SortOrder
    unidade_medida?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    marca?: SortOrder
    preco_unitario?: SortOrder
    unidade_medida?: SortOrder
    descricao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    preco_unitario?: SortOrder
  }

  export type OrcamentoScalarRelationFilter = {
    is?: OrcamentoWhereInput
    isNot?: OrcamentoWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type OrcamentoItemCountOrderByAggregateInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type OrcamentoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type OrcamentoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type OrcamentoItemMinOrderByAggregateInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type OrcamentoItemSumOrderByAggregateInput = {
    id?: SortOrder
    orcamento_id?: SortOrder
    item_id?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type OrcamentoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrcamentoCreateWithoutUsuarioInput, OrcamentoUncheckedCreateWithoutUsuarioInput> | OrcamentoCreateWithoutUsuarioInput[] | OrcamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUsuarioInput | OrcamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrcamentoCreateManyUsuarioInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type OrcamentoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<OrcamentoCreateWithoutUsuarioInput, OrcamentoUncheckedCreateWithoutUsuarioInput> | OrcamentoCreateWithoutUsuarioInput[] | OrcamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUsuarioInput | OrcamentoCreateOrConnectWithoutUsuarioInput[]
    createMany?: OrcamentoCreateManyUsuarioInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrcamentoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrcamentoCreateWithoutUsuarioInput, OrcamentoUncheckedCreateWithoutUsuarioInput> | OrcamentoCreateWithoutUsuarioInput[] | OrcamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUsuarioInput | OrcamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutUsuarioInput | OrcamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrcamentoCreateManyUsuarioInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutUsuarioInput | OrcamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutUsuarioInput | OrcamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrcamentoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<OrcamentoCreateWithoutUsuarioInput, OrcamentoUncheckedCreateWithoutUsuarioInput> | OrcamentoCreateWithoutUsuarioInput[] | OrcamentoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutUsuarioInput | OrcamentoCreateOrConnectWithoutUsuarioInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutUsuarioInput | OrcamentoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: OrcamentoCreateManyUsuarioInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutUsuarioInput | OrcamentoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutUsuarioInput | OrcamentoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type OrcamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type OrcamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
  }

  export type EnumTipoClienteFieldUpdateOperationsInput = {
    set?: $Enums.TipoCliente
  }

  export type OrcamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutClienteInput | OrcamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutClienteInput | OrcamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutClienteInput | OrcamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type OrcamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput> | OrcamentoCreateWithoutClienteInput[] | OrcamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: OrcamentoCreateOrConnectWithoutClienteInput | OrcamentoCreateOrConnectWithoutClienteInput[]
    upsert?: OrcamentoUpsertWithWhereUniqueWithoutClienteInput | OrcamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: OrcamentoCreateManyClienteInputEnvelope
    set?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    disconnect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    delete?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    connect?: OrcamentoWhereUniqueInput | OrcamentoWhereUniqueInput[]
    update?: OrcamentoUpdateWithWhereUniqueWithoutClienteInput | OrcamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: OrcamentoUpdateManyWithWhereWithoutClienteInput | OrcamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrcamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<UsuarioCreateWithoutOrcamentosInput, UsuarioUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrcamentosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type OrcamentoItemCreateNestedManyWithoutOrcamentoInput = {
    create?: XOR<OrcamentoItemCreateWithoutOrcamentoInput, OrcamentoItemUncheckedCreateWithoutOrcamentoInput> | OrcamentoItemCreateWithoutOrcamentoInput[] | OrcamentoItemUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutOrcamentoInput | OrcamentoItemCreateOrConnectWithoutOrcamentoInput[]
    createMany?: OrcamentoItemCreateManyOrcamentoInputEnvelope
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
  }

  export type OrcamentoItemUncheckedCreateNestedManyWithoutOrcamentoInput = {
    create?: XOR<OrcamentoItemCreateWithoutOrcamentoInput, OrcamentoItemUncheckedCreateWithoutOrcamentoInput> | OrcamentoItemCreateWithoutOrcamentoInput[] | OrcamentoItemUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutOrcamentoInput | OrcamentoItemCreateOrConnectWithoutOrcamentoInput[]
    createMany?: OrcamentoItemCreateManyOrcamentoInputEnvelope
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumStatusOrcamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusOrcamento
  }

  export type ClienteUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutOrcamentosInput
    upsert?: ClienteUpsertWithoutOrcamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutOrcamentosInput, ClienteUpdateWithoutOrcamentosInput>, ClienteUncheckedUpdateWithoutOrcamentosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrcamentosInput, UsuarioUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrcamentosInput
    upsert?: UsuarioUpsertWithoutOrcamentosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOrcamentosInput, UsuarioUpdateWithoutOrcamentosInput>, UsuarioUncheckedUpdateWithoutOrcamentosInput>
  }

  export type OrcamentoItemUpdateManyWithoutOrcamentoNestedInput = {
    create?: XOR<OrcamentoItemCreateWithoutOrcamentoInput, OrcamentoItemUncheckedCreateWithoutOrcamentoInput> | OrcamentoItemCreateWithoutOrcamentoInput[] | OrcamentoItemUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutOrcamentoInput | OrcamentoItemCreateOrConnectWithoutOrcamentoInput[]
    upsert?: OrcamentoItemUpsertWithWhereUniqueWithoutOrcamentoInput | OrcamentoItemUpsertWithWhereUniqueWithoutOrcamentoInput[]
    createMany?: OrcamentoItemCreateManyOrcamentoInputEnvelope
    set?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    disconnect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    delete?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    update?: OrcamentoItemUpdateWithWhereUniqueWithoutOrcamentoInput | OrcamentoItemUpdateWithWhereUniqueWithoutOrcamentoInput[]
    updateMany?: OrcamentoItemUpdateManyWithWhereWithoutOrcamentoInput | OrcamentoItemUpdateManyWithWhereWithoutOrcamentoInput[]
    deleteMany?: OrcamentoItemScalarWhereInput | OrcamentoItemScalarWhereInput[]
  }

  export type OrcamentoItemUncheckedUpdateManyWithoutOrcamentoNestedInput = {
    create?: XOR<OrcamentoItemCreateWithoutOrcamentoInput, OrcamentoItemUncheckedCreateWithoutOrcamentoInput> | OrcamentoItemCreateWithoutOrcamentoInput[] | OrcamentoItemUncheckedCreateWithoutOrcamentoInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutOrcamentoInput | OrcamentoItemCreateOrConnectWithoutOrcamentoInput[]
    upsert?: OrcamentoItemUpsertWithWhereUniqueWithoutOrcamentoInput | OrcamentoItemUpsertWithWhereUniqueWithoutOrcamentoInput[]
    createMany?: OrcamentoItemCreateManyOrcamentoInputEnvelope
    set?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    disconnect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    delete?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    update?: OrcamentoItemUpdateWithWhereUniqueWithoutOrcamentoInput | OrcamentoItemUpdateWithWhereUniqueWithoutOrcamentoInput[]
    updateMany?: OrcamentoItemUpdateManyWithWhereWithoutOrcamentoInput | OrcamentoItemUpdateManyWithWhereWithoutOrcamentoInput[]
    deleteMany?: OrcamentoItemScalarWhereInput | OrcamentoItemScalarWhereInput[]
  }

  export type OrcamentoItemCreateNestedManyWithoutItemInput = {
    create?: XOR<OrcamentoItemCreateWithoutItemInput, OrcamentoItemUncheckedCreateWithoutItemInput> | OrcamentoItemCreateWithoutItemInput[] | OrcamentoItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutItemInput | OrcamentoItemCreateOrConnectWithoutItemInput[]
    createMany?: OrcamentoItemCreateManyItemInputEnvelope
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
  }

  export type OrcamentoItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<OrcamentoItemCreateWithoutItemInput, OrcamentoItemUncheckedCreateWithoutItemInput> | OrcamentoItemCreateWithoutItemInput[] | OrcamentoItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutItemInput | OrcamentoItemCreateOrConnectWithoutItemInput[]
    createMany?: OrcamentoItemCreateManyItemInputEnvelope
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
  }

  export type OrcamentoItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<OrcamentoItemCreateWithoutItemInput, OrcamentoItemUncheckedCreateWithoutItemInput> | OrcamentoItemCreateWithoutItemInput[] | OrcamentoItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutItemInput | OrcamentoItemCreateOrConnectWithoutItemInput[]
    upsert?: OrcamentoItemUpsertWithWhereUniqueWithoutItemInput | OrcamentoItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: OrcamentoItemCreateManyItemInputEnvelope
    set?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    disconnect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    delete?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    update?: OrcamentoItemUpdateWithWhereUniqueWithoutItemInput | OrcamentoItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: OrcamentoItemUpdateManyWithWhereWithoutItemInput | OrcamentoItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: OrcamentoItemScalarWhereInput | OrcamentoItemScalarWhereInput[]
  }

  export type OrcamentoItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<OrcamentoItemCreateWithoutItemInput, OrcamentoItemUncheckedCreateWithoutItemInput> | OrcamentoItemCreateWithoutItemInput[] | OrcamentoItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: OrcamentoItemCreateOrConnectWithoutItemInput | OrcamentoItemCreateOrConnectWithoutItemInput[]
    upsert?: OrcamentoItemUpsertWithWhereUniqueWithoutItemInput | OrcamentoItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: OrcamentoItemCreateManyItemInputEnvelope
    set?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    disconnect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    delete?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    connect?: OrcamentoItemWhereUniqueInput | OrcamentoItemWhereUniqueInput[]
    update?: OrcamentoItemUpdateWithWhereUniqueWithoutItemInput | OrcamentoItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: OrcamentoItemUpdateManyWithWhereWithoutItemInput | OrcamentoItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: OrcamentoItemScalarWhereInput | OrcamentoItemScalarWhereInput[]
  }

  export type OrcamentoCreateNestedOneWithoutItensInput = {
    create?: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
    connectOrCreate?: OrcamentoCreateOrConnectWithoutItensInput
    connect?: OrcamentoWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutOrcamentosInput = {
    create?: XOR<ItemCreateWithoutOrcamentosInput, ItemUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrcamentosInput
    connect?: ItemWhereUniqueInput
  }

  export type OrcamentoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
    connectOrCreate?: OrcamentoCreateOrConnectWithoutItensInput
    upsert?: OrcamentoUpsertWithoutItensInput
    connect?: OrcamentoWhereUniqueInput
    update?: XOR<XOR<OrcamentoUpdateToOneWithWhereWithoutItensInput, OrcamentoUpdateWithoutItensInput>, OrcamentoUncheckedUpdateWithoutItensInput>
  }

  export type ItemUpdateOneRequiredWithoutOrcamentosNestedInput = {
    create?: XOR<ItemCreateWithoutOrcamentosInput, ItemUncheckedCreateWithoutOrcamentosInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrcamentosInput
    upsert?: ItemUpsertWithoutOrcamentosInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOrcamentosInput, ItemUpdateWithoutOrcamentosInput>, ItemUncheckedUpdateWithoutOrcamentosInput>
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

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
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

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
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

  export type NestedEnumTipoClienteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteFilter<$PrismaModel> | $Enums.TipoCliente
  }

  export type NestedEnumTipoClienteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCliente | EnumTipoClienteFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCliente[] | ListEnumTipoClienteFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoClienteWithAggregatesFilter<$PrismaModel> | $Enums.TipoCliente
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoClienteFilter<$PrismaModel>
    _max?: NestedEnumTipoClienteFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumStatusOrcamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrcamento | EnumStatusOrcamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrcamentoFilter<$PrismaModel> | $Enums.StatusOrcamento
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatusOrcamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusOrcamento | EnumStatusOrcamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusOrcamento[] | ListEnumStatusOrcamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusOrcamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusOrcamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusOrcamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusOrcamentoFilter<$PrismaModel>
  }

  export type OrcamentoCreateWithoutUsuarioInput = {
    nome: string
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    itens?: OrcamentoItemCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    cliente_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    itens?: OrcamentoItemUncheckedCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoCreateOrConnectWithoutUsuarioInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutUsuarioInput, OrcamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type OrcamentoCreateManyUsuarioInputEnvelope = {
    data: OrcamentoCreateManyUsuarioInput | OrcamentoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: OrcamentoWhereUniqueInput
    update: XOR<OrcamentoUpdateWithoutUsuarioInput, OrcamentoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<OrcamentoCreateWithoutUsuarioInput, OrcamentoUncheckedCreateWithoutUsuarioInput>
  }

  export type OrcamentoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: OrcamentoWhereUniqueInput
    data: XOR<OrcamentoUpdateWithoutUsuarioInput, OrcamentoUncheckedUpdateWithoutUsuarioInput>
  }

  export type OrcamentoUpdateManyWithWhereWithoutUsuarioInput = {
    where: OrcamentoScalarWhereInput
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type OrcamentoScalarWhereInput = {
    AND?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
    OR?: OrcamentoScalarWhereInput[]
    NOT?: OrcamentoScalarWhereInput | OrcamentoScalarWhereInput[]
    id?: IntFilter<"Orcamento"> | number
    nome?: StringFilter<"Orcamento"> | string
    cliente_id?: IntFilter<"Orcamento"> | number
    usuario_id?: IntFilter<"Orcamento"> | number
    preco_total?: DecimalFilter<"Orcamento"> | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFilter<"Orcamento"> | Date | string
    data_validade?: DateTimeFilter<"Orcamento"> | Date | string
    status?: EnumStatusOrcamentoFilter<"Orcamento"> | $Enums.StatusOrcamento
    pdf_path?: StringNullableFilter<"Orcamento"> | string | null
    created_at?: DateTimeFilter<"Orcamento"> | Date | string
    updated_at?: DateTimeFilter<"Orcamento"> | Date | string
  }

  export type OrcamentoCreateWithoutClienteInput = {
    nome: string
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    usuario: UsuarioCreateNestedOneWithoutOrcamentosInput
    itens?: OrcamentoItemCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoUncheckedCreateWithoutClienteInput = {
    id?: number
    nome: string
    usuario_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    itens?: OrcamentoItemUncheckedCreateNestedManyWithoutOrcamentoInput
  }

  export type OrcamentoCreateOrConnectWithoutClienteInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput>
  }

  export type OrcamentoCreateManyClienteInputEnvelope = {
    data: OrcamentoCreateManyClienteInput | OrcamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: OrcamentoWhereUniqueInput
    update: XOR<OrcamentoUpdateWithoutClienteInput, OrcamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<OrcamentoCreateWithoutClienteInput, OrcamentoUncheckedCreateWithoutClienteInput>
  }

  export type OrcamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: OrcamentoWhereUniqueInput
    data: XOR<OrcamentoUpdateWithoutClienteInput, OrcamentoUncheckedUpdateWithoutClienteInput>
  }

  export type OrcamentoUpdateManyWithWhereWithoutClienteInput = {
    where: OrcamentoScalarWhereInput
    data: XOR<OrcamentoUpdateManyMutationInput, OrcamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteCreateWithoutOrcamentosInput = {
    nome: string
    email?: string | null
    celular?: string | null
    tipo_cliente: $Enums.TipoCliente
    documento: string
    endereco?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClienteUncheckedCreateWithoutOrcamentosInput = {
    id?: number
    nome: string
    email?: string | null
    celular?: string | null
    tipo_cliente: $Enums.TipoCliente
    documento: string
    endereco?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClienteCreateOrConnectWithoutOrcamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
  }

  export type UsuarioCreateWithoutOrcamentosInput = {
    nome: string
    email: string
    celular?: string | null
    senha: string
    tipo_usuario: $Enums.TipoUsuario
    documento: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutOrcamentosInput = {
    id?: number
    nome: string
    email: string
    celular?: string | null
    senha: string
    tipo_usuario: $Enums.TipoUsuario
    documento: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutOrcamentosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrcamentosInput, UsuarioUncheckedCreateWithoutOrcamentosInput>
  }

  export type OrcamentoItemCreateWithoutOrcamentoInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
    item: ItemCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoItemUncheckedCreateWithoutOrcamentoInput = {
    id?: number
    item_id: number
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemCreateOrConnectWithoutOrcamentoInput = {
    where: OrcamentoItemWhereUniqueInput
    create: XOR<OrcamentoItemCreateWithoutOrcamentoInput, OrcamentoItemUncheckedCreateWithoutOrcamentoInput>
  }

  export type OrcamentoItemCreateManyOrcamentoInputEnvelope = {
    data: OrcamentoItemCreateManyOrcamentoInput | OrcamentoItemCreateManyOrcamentoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutOrcamentosInput = {
    update: XOR<ClienteUpdateWithoutOrcamentosInput, ClienteUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<ClienteCreateWithoutOrcamentosInput, ClienteUncheckedCreateWithoutOrcamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutOrcamentosInput, ClienteUncheckedUpdateWithoutOrcamentosInput>
  }

  export type ClienteUpdateWithoutOrcamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_cliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    documento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutOrcamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_cliente?: EnumTipoClienteFieldUpdateOperationsInput | $Enums.TipoCliente
    documento?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutOrcamentosInput = {
    update: XOR<UsuarioUpdateWithoutOrcamentosInput, UsuarioUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<UsuarioCreateWithoutOrcamentosInput, UsuarioUncheckedCreateWithoutOrcamentosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOrcamentosInput, UsuarioUncheckedUpdateWithoutOrcamentosInput>
  }

  export type UsuarioUpdateWithoutOrcamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    documento?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutOrcamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    documento?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoItemUpsertWithWhereUniqueWithoutOrcamentoInput = {
    where: OrcamentoItemWhereUniqueInput
    update: XOR<OrcamentoItemUpdateWithoutOrcamentoInput, OrcamentoItemUncheckedUpdateWithoutOrcamentoInput>
    create: XOR<OrcamentoItemCreateWithoutOrcamentoInput, OrcamentoItemUncheckedCreateWithoutOrcamentoInput>
  }

  export type OrcamentoItemUpdateWithWhereUniqueWithoutOrcamentoInput = {
    where: OrcamentoItemWhereUniqueInput
    data: XOR<OrcamentoItemUpdateWithoutOrcamentoInput, OrcamentoItemUncheckedUpdateWithoutOrcamentoInput>
  }

  export type OrcamentoItemUpdateManyWithWhereWithoutOrcamentoInput = {
    where: OrcamentoItemScalarWhereInput
    data: XOR<OrcamentoItemUpdateManyMutationInput, OrcamentoItemUncheckedUpdateManyWithoutOrcamentoInput>
  }

  export type OrcamentoItemScalarWhereInput = {
    AND?: OrcamentoItemScalarWhereInput | OrcamentoItemScalarWhereInput[]
    OR?: OrcamentoItemScalarWhereInput[]
    NOT?: OrcamentoItemScalarWhereInput | OrcamentoItemScalarWhereInput[]
    id?: IntFilter<"OrcamentoItem"> | number
    orcamento_id?: IntFilter<"OrcamentoItem"> | number
    item_id?: IntFilter<"OrcamentoItem"> | number
    quantidade?: DecimalFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFilter<"OrcamentoItem"> | Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemCreateWithoutItemInput = {
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
    orcamento: OrcamentoCreateNestedOneWithoutItensInput
  }

  export type OrcamentoItemUncheckedCreateWithoutItemInput = {
    id?: number
    orcamento_id: number
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemCreateOrConnectWithoutItemInput = {
    where: OrcamentoItemWhereUniqueInput
    create: XOR<OrcamentoItemCreateWithoutItemInput, OrcamentoItemUncheckedCreateWithoutItemInput>
  }

  export type OrcamentoItemCreateManyItemInputEnvelope = {
    data: OrcamentoItemCreateManyItemInput | OrcamentoItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type OrcamentoItemUpsertWithWhereUniqueWithoutItemInput = {
    where: OrcamentoItemWhereUniqueInput
    update: XOR<OrcamentoItemUpdateWithoutItemInput, OrcamentoItemUncheckedUpdateWithoutItemInput>
    create: XOR<OrcamentoItemCreateWithoutItemInput, OrcamentoItemUncheckedCreateWithoutItemInput>
  }

  export type OrcamentoItemUpdateWithWhereUniqueWithoutItemInput = {
    where: OrcamentoItemWhereUniqueInput
    data: XOR<OrcamentoItemUpdateWithoutItemInput, OrcamentoItemUncheckedUpdateWithoutItemInput>
  }

  export type OrcamentoItemUpdateManyWithWhereWithoutItemInput = {
    where: OrcamentoItemScalarWhereInput
    data: XOR<OrcamentoItemUpdateManyMutationInput, OrcamentoItemUncheckedUpdateManyWithoutItemInput>
  }

  export type OrcamentoCreateWithoutItensInput = {
    nome: string
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cliente: ClienteCreateNestedOneWithoutOrcamentosInput
    usuario: UsuarioCreateNestedOneWithoutOrcamentosInput
  }

  export type OrcamentoUncheckedCreateWithoutItensInput = {
    id?: number
    nome: string
    cliente_id: number
    usuario_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrcamentoCreateOrConnectWithoutItensInput = {
    where: OrcamentoWhereUniqueInput
    create: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
  }

  export type ItemCreateWithoutOrcamentosInput = {
    nome: string
    marca?: string | null
    preco_unitario: Decimal | DecimalJsLike | number | string
    unidade_medida: string
    descricao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemUncheckedCreateWithoutOrcamentosInput = {
    id?: number
    nome: string
    marca?: string | null
    preco_unitario: Decimal | DecimalJsLike | number | string
    unidade_medida: string
    descricao?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemCreateOrConnectWithoutOrcamentosInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOrcamentosInput, ItemUncheckedCreateWithoutOrcamentosInput>
  }

  export type OrcamentoUpsertWithoutItensInput = {
    update: XOR<OrcamentoUpdateWithoutItensInput, OrcamentoUncheckedUpdateWithoutItensInput>
    create: XOR<OrcamentoCreateWithoutItensInput, OrcamentoUncheckedCreateWithoutItensInput>
    where?: OrcamentoWhereInput
  }

  export type OrcamentoUpdateToOneWithWhereWithoutItensInput = {
    where?: OrcamentoWhereInput
    data: XOR<OrcamentoUpdateWithoutItensInput, OrcamentoUncheckedUpdateWithoutItensInput>
  }

  export type OrcamentoUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpsertWithoutOrcamentosInput = {
    update: XOR<ItemUpdateWithoutOrcamentosInput, ItemUncheckedUpdateWithoutOrcamentosInput>
    create: XOR<ItemCreateWithoutOrcamentosInput, ItemUncheckedCreateWithoutOrcamentosInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOrcamentosInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOrcamentosInput, ItemUncheckedUpdateWithoutOrcamentosInput>
  }

  export type ItemUpdateWithoutOrcamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutOrcamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateManyUsuarioInput = {
    id?: number
    nome: string
    cliente_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrcamentoUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutOrcamentosNestedInput
    itens?: OrcamentoItemUpdateManyWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: OrcamentoItemUncheckedUpdateManyWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cliente_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoCreateManyClienteInput = {
    id?: number
    nome: string
    usuario_id: number
    preco_total: Decimal | DecimalJsLike | number | string
    data_inicial?: Date | string
    data_validade: Date | string
    status?: $Enums.StatusOrcamento
    pdf_path?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrcamentoUpdateWithoutClienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutOrcamentosNestedInput
    itens?: OrcamentoItemUpdateManyWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: OrcamentoItemUncheckedUpdateManyWithoutOrcamentoNestedInput
  }

  export type OrcamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuario_id?: IntFieldUpdateOperationsInput | number
    preco_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_inicial?: DateTimeFieldUpdateOperationsInput | Date | string
    data_validade?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusOrcamentoFieldUpdateOperationsInput | $Enums.StatusOrcamento
    pdf_path?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrcamentoItemCreateManyOrcamentoInput = {
    id?: number
    item_id: number
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUpdateWithoutOrcamentoInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    item?: ItemUpdateOneRequiredWithoutOrcamentosNestedInput
  }

  export type OrcamentoItemUncheckedUpdateWithoutOrcamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUncheckedUpdateManyWithoutOrcamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemCreateManyItemInput = {
    id?: number
    orcamento_id: number
    quantidade: Decimal | DecimalJsLike | number | string
    preco_unitario: Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUpdateWithoutItemInput = {
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orcamento?: OrcamentoUpdateOneRequiredWithoutItensNestedInput
  }

  export type OrcamentoItemUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orcamento_id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrcamentoItemUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orcamento_id?: IntFieldUpdateOperationsInput | number
    quantidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    preco_unitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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