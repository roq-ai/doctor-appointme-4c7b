/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model client_k
 *
 */
export type client_k = $Result.DefaultSelection<Prisma.$client_kPayload>;
/**
 * Model clinic
 *
 */
export type clinic = $Result.DefaultSelection<Prisma.$clinicPayload>;
/**
 * Model insurance_provider
 *
 */
export type insurance_provider = $Result.DefaultSelection<Prisma.$insurance_providerPayload>;
/**
 * Model medical_staff
 *
 */
export type medical_staff = $Result.DefaultSelection<Prisma.$medical_staffPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.client_k`: Exposes CRUD operations for the **client_k** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Client_ks
   * const client_ks = await prisma.client_k.findMany()
   * ```
   */
  get client_k(): Prisma.client_kDelegate<ExtArgs>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **clinic** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
   * ```
   */
  get clinic(): Prisma.clinicDelegate<ExtArgs>;

  /**
   * `prisma.insurance_provider`: Exposes CRUD operations for the **insurance_provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insurance_providers
   * const insurance_providers = await prisma.insurance_provider.findMany()
   * ```
   */
  get insurance_provider(): Prisma.insurance_providerDelegate<ExtArgs>;

  /**
   * `prisma.medical_staff`: Exposes CRUD operations for the **medical_staff** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Medical_staffs
   * const medical_staffs = await prisma.medical_staff.findMany()
   * ```
   */
  get medical_staff(): Prisma.medical_staffDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.0
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    client_k: 'client_k';
    clinic: 'clinic';
    insurance_provider: 'insurance_provider';
    medical_staff: 'medical_staff';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'client_k' | 'clinic' | 'insurance_provider' | 'medical_staff' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      client_k: {
        payload: Prisma.$client_kPayload<ExtArgs>;
        fields: Prisma.client_kFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.client_kFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.client_kFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>;
          };
          findFirst: {
            args: Prisma.client_kFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.client_kFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>;
          };
          findMany: {
            args: Prisma.client_kFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>[];
          };
          create: {
            args: Prisma.client_kCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>;
          };
          createMany: {
            args: Prisma.client_kCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.client_kDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>;
          };
          update: {
            args: Prisma.client_kUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>;
          };
          deleteMany: {
            args: Prisma.client_kDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.client_kUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.client_kUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$client_kPayload>;
          };
          aggregate: {
            args: Prisma.Client_kAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClient_k>;
          };
          groupBy: {
            args: Prisma.client_kGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Client_kGroupByOutputType>[];
          };
          count: {
            args: Prisma.client_kCountArgs<ExtArgs>;
            result: $Utils.Optional<Client_kCountAggregateOutputType> | number;
          };
        };
      };
      clinic: {
        payload: Prisma.$clinicPayload<ExtArgs>;
        fields: Prisma.clinicFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.clinicFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.clinicFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findFirst: {
            args: Prisma.clinicFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.clinicFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findMany: {
            args: Prisma.clinicFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>[];
          };
          create: {
            args: Prisma.clinicCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          createMany: {
            args: Prisma.clinicCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.clinicDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          update: {
            args: Prisma.clinicUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          deleteMany: {
            args: Prisma.clinicDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.clinicUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.clinicUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClinic>;
          };
          groupBy: {
            args: Prisma.clinicGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClinicGroupByOutputType>[];
          };
          count: {
            args: Prisma.clinicCountArgs<ExtArgs>;
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number;
          };
        };
      };
      insurance_provider: {
        payload: Prisma.$insurance_providerPayload<ExtArgs>;
        fields: Prisma.insurance_providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.insurance_providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.insurance_providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findFirst: {
            args: Prisma.insurance_providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.insurance_providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findMany: {
            args: Prisma.insurance_providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>[];
          };
          create: {
            args: Prisma.insurance_providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          createMany: {
            args: Prisma.insurance_providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.insurance_providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          update: {
            args: Prisma.insurance_providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          deleteMany: {
            args: Prisma.insurance_providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.insurance_providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.insurance_providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          aggregate: {
            args: Prisma.Insurance_providerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsurance_provider>;
          };
          groupBy: {
            args: Prisma.insurance_providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerGroupByOutputType>[];
          };
          count: {
            args: Prisma.insurance_providerCountArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerCountAggregateOutputType> | number;
          };
        };
      };
      medical_staff: {
        payload: Prisma.$medical_staffPayload<ExtArgs>;
        fields: Prisma.medical_staffFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.medical_staffFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.medical_staffFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          findFirst: {
            args: Prisma.medical_staffFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.medical_staffFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          findMany: {
            args: Prisma.medical_staffFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>[];
          };
          create: {
            args: Prisma.medical_staffCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          createMany: {
            args: Prisma.medical_staffCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.medical_staffDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          update: {
            args: Prisma.medical_staffUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          deleteMany: {
            args: Prisma.medical_staffDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.medical_staffUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.medical_staffUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_staffPayload>;
          };
          aggregate: {
            args: Prisma.Medical_staffAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMedical_staff>;
          };
          groupBy: {
            args: Prisma.medical_staffGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Medical_staffGroupByOutputType>[];
          };
          count: {
            args: Prisma.medical_staffCountArgs<ExtArgs>;
            result: $Utils.Optional<Medical_staffCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Client_kCountOutputType
   */

  export type Client_kCountOutputType = {
    appointment: number;
  };

  export type Client_kCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Client_kCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * Client_kCountOutputType without action
   */
  export type Client_kCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client_kCountOutputType
     */
    select?: Client_kCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Client_kCountOutputType without action
   */
  export type Client_kCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    appointment: number;
    medical_staff: number;
  };

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | ClinicCountOutputTypeCountAppointmentArgs;
    medical_staff?: boolean | ClinicCountOutputTypeCountMedical_staffArgs;
  };

  // Custom InputTypes

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountMedical_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_staffWhereInput;
  };

  /**
   * Count Type Insurance_providerCountOutputType
   */

  export type Insurance_providerCountOutputType = {
    appointment: number;
    client_k: number;
  };

  export type Insurance_providerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    appointment?: boolean | Insurance_providerCountOutputTypeCountAppointmentArgs;
    client_k?: boolean | Insurance_providerCountOutputTypeCountClient_kArgs;
  };

  // Custom InputTypes

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance_providerCountOutputType
     */
    select?: Insurance_providerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeCountClient_kArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: client_kWhereInput;
  };

  /**
   * Count Type Medical_staffCountOutputType
   */

  export type Medical_staffCountOutputType = {
    appointment: number;
  };

  export type Medical_staffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | Medical_staffCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * Medical_staffCountOutputType without action
   */
  export type Medical_staffCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Medical_staffCountOutputType
     */
    select?: Medical_staffCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Medical_staffCountOutputType without action
   */
  export type Medical_staffCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    client_k: number;
    clinic: number;
    insurance_provider: number;
    medical_staff: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client_k?: boolean | UserCountOutputTypeCountClient_kArgs;
    clinic?: boolean | UserCountOutputTypeCountClinicArgs;
    insurance_provider?: boolean | UserCountOutputTypeCountInsurance_providerArgs;
    medical_staff?: boolean | UserCountOutputTypeCountMedical_staffArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClient_kArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: client_kWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInsurance_providerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: insurance_providerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedical_staffArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_staffWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    date_time: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    clinic_id: string | null;
    insurance_id: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    date_time: Date | null;
    patient_id: string | null;
    doctor_id: string | null;
    clinic_id: string | null;
    insurance_id: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    date_time: number;
    patient_id: number;
    doctor_id: number;
    clinic_id: number;
    insurance_id: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    date_time?: true;
    patient_id?: true;
    doctor_id?: true;
    clinic_id?: true;
    insurance_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    date_time?: true;
    patient_id?: true;
    doctor_id?: true;
    clinic_id?: true;
    insurance_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    date_time?: true;
    patient_id?: true;
    doctor_id?: true;
    clinic_id?: true;
    insurance_id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    date_time: Date;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        date_time?: boolean;
        patient_id?: boolean;
        doctor_id?: boolean;
        clinic_id?: boolean;
        insurance_id?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        clinic?: boolean | clinicDefaultArgs<ExtArgs>;
        medical_staff?: boolean | medical_staffDefaultArgs<ExtArgs>;
        insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
        client_k?: boolean | client_kDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    date_time?: boolean;
    patient_id?: boolean;
    doctor_id?: boolean;
    clinic_id?: boolean;
    insurance_id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | clinicDefaultArgs<ExtArgs>;
    medical_staff?: boolean | medical_staffDefaultArgs<ExtArgs>;
    insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
    client_k?: boolean | client_kDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs>;
      medical_staff: Prisma.$medical_staffPayload<ExtArgs>;
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>;
      client_k: Prisma.$client_kPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        date_time: Date;
        patient_id: string;
        doctor_id: string;
        clinic_id: string;
        insurance_id: string;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
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
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clinic<T extends clinicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clinicDefaultArgs<ExtArgs>>,
    ): Prisma__clinicClient<
      $Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    medical_staff<T extends medical_staffDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, medical_staffDefaultArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    insurance_provider<T extends insurance_providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_providerDefaultArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    client_k<T extends client_kDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, client_kDefaultArgs<ExtArgs>>,
    ): Prisma__client_kClient<
      $Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly date_time: FieldRef<'appointment', 'DateTime'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly doctor_id: FieldRef<'appointment', 'String'>;
    readonly clinic_id: FieldRef<'appointment', 'String'>;
    readonly insurance_id: FieldRef<'appointment', 'String'>;
    readonly status: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model client_k
   */

  export type AggregateClient_k = {
    _count: Client_kCountAggregateOutputType | null;
    _min: Client_kMinAggregateOutputType | null;
    _max: Client_kMaxAggregateOutputType | null;
  };

  export type Client_kMinAggregateOutputType = {
    id: string | null;
    date_of_birth: Date | null;
    gender: string | null;
    insurance_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Client_kMaxAggregateOutputType = {
    id: string | null;
    date_of_birth: Date | null;
    gender: string | null;
    insurance_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Client_kCountAggregateOutputType = {
    id: number;
    date_of_birth: number;
    gender: number;
    insurance_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Client_kMinAggregateInputType = {
    id?: true;
    date_of_birth?: true;
    gender?: true;
    insurance_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Client_kMaxAggregateInputType = {
    id?: true;
    date_of_birth?: true;
    gender?: true;
    insurance_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Client_kCountAggregateInputType = {
    id?: true;
    date_of_birth?: true;
    gender?: true;
    insurance_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Client_kAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_k to aggregate.
     */
    where?: client_kWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_ks to fetch.
     */
    orderBy?: client_kOrderByWithRelationInput | client_kOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: client_kWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_ks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_ks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned client_ks
     **/
    _count?: true | Client_kCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Client_kMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Client_kMaxAggregateInputType;
  };

  export type GetClient_kAggregateType<T extends Client_kAggregateArgs> = {
    [P in keyof T & keyof AggregateClient_k]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_k[P]>
      : GetScalarType<T[P], AggregateClient_k[P]>;
  };

  export type client_kGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_kWhereInput;
    orderBy?: client_kOrderByWithAggregationInput | client_kOrderByWithAggregationInput[];
    by: Client_kScalarFieldEnum[] | Client_kScalarFieldEnum;
    having?: client_kScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Client_kCountAggregateInputType | true;
    _min?: Client_kMinAggregateInputType;
    _max?: Client_kMaxAggregateInputType;
  };

  export type Client_kGroupByOutputType = {
    id: string;
    date_of_birth: Date;
    gender: string;
    insurance_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Client_kCountAggregateOutputType | null;
    _min: Client_kMinAggregateOutputType | null;
    _max: Client_kMaxAggregateOutputType | null;
  };

  type GetClient_kGroupByPayload<T extends client_kGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Client_kGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Client_kGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Client_kGroupByOutputType[P]>
          : GetScalarType<T[P], Client_kGroupByOutputType[P]>;
      }
    >
  >;

  export type client_kSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        date_of_birth?: boolean;
        gender?: boolean;
        insurance_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        appointment?: boolean | client_k$appointmentArgs<ExtArgs>;
        insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Client_kCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['client_k']
    >;

  export type client_kSelectScalar = {
    id?: boolean;
    date_of_birth?: boolean;
    gender?: boolean;
    insurance_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type client_kInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | client_k$appointmentArgs<ExtArgs>;
    insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Client_kCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $client_kPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'client_k';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        date_of_birth: Date;
        gender: string;
        insurance_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['client_k']
    >;
    composites: {};
  };

  type client_kGetPayload<S extends boolean | null | undefined | client_kDefaultArgs> = $Result.GetResult<
    Prisma.$client_kPayload,
    S
  >;

  type client_kCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    client_kFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Client_kCountAggregateInputType | true;
  };

  export interface client_kDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client_k']; meta: { name: 'client_k' } };
    /**
     * Find zero or one Client_k that matches the filter.
     * @param {client_kFindUniqueArgs} args - Arguments to find a Client_k
     * @example
     * // Get one Client_k
     * const client_k = await prisma.client_k.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends client_kFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_kFindUniqueArgs<ExtArgs>>,
    ): Prisma__client_kClient<
      $Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Client_k that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {client_kFindUniqueOrThrowArgs} args - Arguments to find a Client_k
     * @example
     * // Get one Client_k
     * const client_k = await prisma.client_k.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends client_kFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_kFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__client_kClient<
      $Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Client_k that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_kFindFirstArgs} args - Arguments to find a Client_k
     * @example
     * // Get one Client_k
     * const client_k = await prisma.client_k.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends client_kFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_kFindFirstArgs<ExtArgs>>,
    ): Prisma__client_kClient<
      $Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Client_k that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_kFindFirstOrThrowArgs} args - Arguments to find a Client_k
     * @example
     * // Get one Client_k
     * const client_k = await prisma.client_k.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends client_kFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_kFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__client_kClient<
      $Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Client_ks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_kFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_ks
     * const client_ks = await prisma.client_k.findMany()
     *
     * // Get first 10 Client_ks
     * const client_ks = await prisma.client_k.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const client_kWithIdOnly = await prisma.client_k.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends client_kFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_kFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Client_k.
     * @param {client_kCreateArgs} args - Arguments to create a Client_k.
     * @example
     * // Create one Client_k
     * const Client_k = await prisma.client_k.create({
     *   data: {
     *     // ... data to create a Client_k
     *   }
     * })
     *
     **/
    create<T extends client_kCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_kCreateArgs<ExtArgs>>,
    ): Prisma__client_kClient<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Client_ks.
     *     @param {client_kCreateManyArgs} args - Arguments to create many Client_ks.
     *     @example
     *     // Create many Client_ks
     *     const client_k = await prisma.client_k.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends client_kCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_kCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Client_k.
     * @param {client_kDeleteArgs} args - Arguments to delete one Client_k.
     * @example
     * // Delete one Client_k
     * const Client_k = await prisma.client_k.delete({
     *   where: {
     *     // ... filter to delete one Client_k
     *   }
     * })
     *
     **/
    delete<T extends client_kDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_kDeleteArgs<ExtArgs>>,
    ): Prisma__client_kClient<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Client_k.
     * @param {client_kUpdateArgs} args - Arguments to update one Client_k.
     * @example
     * // Update one Client_k
     * const client_k = await prisma.client_k.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends client_kUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_kUpdateArgs<ExtArgs>>,
    ): Prisma__client_kClient<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Client_ks.
     * @param {client_kDeleteManyArgs} args - Arguments to filter Client_ks to delete.
     * @example
     * // Delete a few Client_ks
     * const { count } = await prisma.client_k.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends client_kDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_kDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Client_ks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_kUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_ks
     * const client_k = await prisma.client_k.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends client_kUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_kUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Client_k.
     * @param {client_kUpsertArgs} args - Arguments to update or create a Client_k.
     * @example
     * // Update or create a Client_k
     * const client_k = await prisma.client_k.upsert({
     *   create: {
     *     // ... data to create a Client_k
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_k we want to update
     *   }
     * })
     **/
    upsert<T extends client_kUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_kUpsertArgs<ExtArgs>>,
    ): Prisma__client_kClient<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Client_ks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_kCountArgs} args - Arguments to filter Client_ks to count.
     * @example
     * // Count the number of Client_ks
     * const count = await prisma.client_k.count({
     *   where: {
     *     // ... the filter for the Client_ks we want to count
     *   }
     * })
     **/
    count<T extends client_kCountArgs>(
      args?: Subset<T, client_kCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_kCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Client_k.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_kAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_kAggregateArgs>(
      args: Subset<T, Client_kAggregateArgs>,
    ): Prisma.PrismaPromise<GetClient_kAggregateType<T>>;

    /**
     * Group by Client_k.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_kGroupByArgs} args - Group by arguments.
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
      T extends client_kGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_kGroupByArgs['orderBy'] }
        : { orderBy?: client_kGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, client_kGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClient_kGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the client_k model
     */
    readonly fields: client_kFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_k.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_kClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends client_k$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, client_k$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    insurance_provider<T extends insurance_providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_providerDefaultArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the client_k model
   */
  interface client_kFieldRefs {
    readonly id: FieldRef<'client_k', 'String'>;
    readonly date_of_birth: FieldRef<'client_k', 'DateTime'>;
    readonly gender: FieldRef<'client_k', 'String'>;
    readonly insurance_id: FieldRef<'client_k', 'String'>;
    readonly user_id: FieldRef<'client_k', 'String'>;
    readonly created_at: FieldRef<'client_k', 'DateTime'>;
    readonly updated_at: FieldRef<'client_k', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * client_k findUnique
   */
  export type client_kFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * Filter, which client_k to fetch.
     */
    where: client_kWhereUniqueInput;
  };

  /**
   * client_k findUniqueOrThrow
   */
  export type client_kFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * Filter, which client_k to fetch.
     */
    where: client_kWhereUniqueInput;
  };

  /**
   * client_k findFirst
   */
  export type client_kFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * Filter, which client_k to fetch.
     */
    where?: client_kWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_ks to fetch.
     */
    orderBy?: client_kOrderByWithRelationInput | client_kOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for client_ks.
     */
    cursor?: client_kWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_ks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_ks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of client_ks.
     */
    distinct?: Client_kScalarFieldEnum | Client_kScalarFieldEnum[];
  };

  /**
   * client_k findFirstOrThrow
   */
  export type client_kFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * Filter, which client_k to fetch.
     */
    where?: client_kWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_ks to fetch.
     */
    orderBy?: client_kOrderByWithRelationInput | client_kOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for client_ks.
     */
    cursor?: client_kWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_ks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_ks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of client_ks.
     */
    distinct?: Client_kScalarFieldEnum | Client_kScalarFieldEnum[];
  };

  /**
   * client_k findMany
   */
  export type client_kFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * Filter, which client_ks to fetch.
     */
    where?: client_kWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of client_ks to fetch.
     */
    orderBy?: client_kOrderByWithRelationInput | client_kOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing client_ks.
     */
    cursor?: client_kWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` client_ks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` client_ks.
     */
    skip?: number;
    distinct?: Client_kScalarFieldEnum | Client_kScalarFieldEnum[];
  };

  /**
   * client_k create
   */
  export type client_kCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * The data needed to create a client_k.
     */
    data: XOR<client_kCreateInput, client_kUncheckedCreateInput>;
  };

  /**
   * client_k createMany
   */
  export type client_kCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_ks.
     */
    data: client_kCreateManyInput | client_kCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * client_k update
   */
  export type client_kUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * The data needed to update a client_k.
     */
    data: XOR<client_kUpdateInput, client_kUncheckedUpdateInput>;
    /**
     * Choose, which client_k to update.
     */
    where: client_kWhereUniqueInput;
  };

  /**
   * client_k updateMany
   */
  export type client_kUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_ks.
     */
    data: XOR<client_kUpdateManyMutationInput, client_kUncheckedUpdateManyInput>;
    /**
     * Filter which client_ks to update
     */
    where?: client_kWhereInput;
  };

  /**
   * client_k upsert
   */
  export type client_kUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * The filter to search for the client_k to update in case it exists.
     */
    where: client_kWhereUniqueInput;
    /**
     * In case the client_k found by the `where` argument doesn't exist, create a new client_k with this data.
     */
    create: XOR<client_kCreateInput, client_kUncheckedCreateInput>;
    /**
     * In case the client_k was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_kUpdateInput, client_kUncheckedUpdateInput>;
  };

  /**
   * client_k delete
   */
  export type client_kDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    /**
     * Filter which client_k to delete.
     */
    where: client_kWhereUniqueInput;
  };

  /**
   * client_k deleteMany
   */
  export type client_kDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_ks to delete
     */
    where?: client_kWhereInput;
  };

  /**
   * client_k.appointment
   */
  export type client_k$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * client_k without action
   */
  export type client_kDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
  };

  /**
   * Model clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  export type ClinicMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    opening_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClinicMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    opening_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClinicCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone_number: number;
    opening_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type ClinicMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClinicMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClinicCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone_number?: true;
    opening_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic to aggregate.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clinics
     **/
    _count?: true | ClinicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClinicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClinicMaxAggregateInputType;
  };

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
    [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>;
  };

  export type clinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithAggregationInput | clinicOrderByWithAggregationInput[];
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum;
    having?: clinicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClinicCountAggregateInputType | true;
    _min?: ClinicMinAggregateInputType;
    _max?: ClinicMaxAggregateInputType;
  };

  export type ClinicGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone_number: string | null;
    opening_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  type GetClinicGroupByPayload<T extends clinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClinicGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
          : GetScalarType<T[P], ClinicGroupByOutputType[P]>;
      }
    >
  >;

  export type clinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone_number?: boolean;
      opening_hours?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      appointment?: boolean | clinic$appointmentArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      medical_staff?: boolean | clinic$medical_staffArgs<ExtArgs>;
      _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['clinic']
  >;

  export type clinicSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone_number?: boolean;
    opening_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type clinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | clinic$appointmentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    medical_staff?: boolean | clinic$medical_staffArgs<ExtArgs>;
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $clinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'clinic';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      medical_staff: Prisma.$medical_staffPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone_number: string | null;
        opening_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['clinic']
    >;
    composites: {};
  };

  type clinicGetPayload<S extends boolean | null | undefined | clinicDefaultArgs> = $Result.GetResult<
    Prisma.$clinicPayload,
    S
  >;

  type clinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    clinicFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ClinicCountAggregateInputType | true;
  };

  export interface clinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinic']; meta: { name: 'clinic' } };
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {clinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends clinicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clinicFindUniqueArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Clinic that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {clinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends clinicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends clinicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends clinicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     *
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends clinicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Clinic.
     * @param {clinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     *
     **/
    create<T extends clinicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicCreateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Clinics.
     *     @param {clinicCreateManyArgs} args - Arguments to create many Clinics.
     *     @example
     *     // Create many Clinics
     *     const clinic = await prisma.clinic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends clinicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Clinic.
     * @param {clinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     *
     **/
    delete<T extends clinicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clinicDeleteArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Clinic.
     * @param {clinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends clinicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Clinics.
     * @param {clinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends clinicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends clinicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Clinic.
     * @param {clinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     **/
    upsert<T extends clinicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpsertArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
     **/
    count<T extends clinicCountArgs>(
      args?: Subset<T, clinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicAggregateArgs>(
      args: Subset<T, ClinicAggregateArgs>,
    ): Prisma.PrismaPromise<GetClinicAggregateType<T>>;

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicGroupByArgs} args - Group by arguments.
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
      T extends clinicGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinicGroupByArgs['orderBy'] }
        : { orderBy?: clinicGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, clinicGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the clinic model
     */
    readonly fields: clinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinicClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends clinic$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, clinic$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    medical_staff<T extends clinic$medical_staffArgs<ExtArgs> = {}>(
      args?: Subset<T, clinic$medical_staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the clinic model
   */
  interface clinicFieldRefs {
    readonly id: FieldRef<'clinic', 'String'>;
    readonly description: FieldRef<'clinic', 'String'>;
    readonly address: FieldRef<'clinic', 'String'>;
    readonly phone_number: FieldRef<'clinic', 'String'>;
    readonly opening_hours: FieldRef<'clinic', 'String'>;
    readonly name: FieldRef<'clinic', 'String'>;
    readonly created_at: FieldRef<'clinic', 'DateTime'>;
    readonly updated_at: FieldRef<'clinic', 'DateTime'>;
    readonly user_id: FieldRef<'clinic', 'String'>;
    readonly tenant_id: FieldRef<'clinic', 'String'>;
  }

  // Custom InputTypes

  /**
   * clinic findUnique
   */
  export type clinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findUniqueOrThrow
   */
  export type clinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findFirst
   */
  export type clinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findFirstOrThrow
   */
  export type clinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findMany
   */
  export type clinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinics to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic create
   */
  export type clinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to create a clinic.
     */
    data: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
  };

  /**
   * clinic createMany
   */
  export type clinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinics.
     */
    data: clinicCreateManyInput | clinicCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * clinic update
   */
  export type clinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to update a clinic.
     */
    data: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
    /**
     * Choose, which clinic to update.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic updateMany
   */
  export type clinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinics.
     */
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyInput>;
    /**
     * Filter which clinics to update
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic upsert
   */
  export type clinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The filter to search for the clinic to update in case it exists.
     */
    where: clinicWhereUniqueInput;
    /**
     * In case the clinic found by the `where` argument doesn't exist, create a new clinic with this data.
     */
    create: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
    /**
     * In case the clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
  };

  /**
   * clinic delete
   */
  export type clinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter which clinic to delete.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic deleteMany
   */
  export type clinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinics to delete
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic.appointment
   */
  export type clinic$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * clinic.medical_staff
   */
  export type clinic$medical_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    where?: medical_staffWhereInput;
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    cursor?: medical_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * clinic without action
   */
  export type clinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
  };

  /**
   * Model insurance_provider
   */

  export type AggregateInsurance_provider = {
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  export type Insurance_providerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    email: string | null;
    contact_person: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    phone_number: string | null;
    email: string | null;
    contact_person: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    phone_number: number;
    email: number;
    contact_person: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Insurance_providerMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    email?: true;
    contact_person?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    email?: true;
    contact_person?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    phone_number?: true;
    email?: true;
    contact_person?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Insurance_providerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_provider to aggregate.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned insurance_providers
     **/
    _count?: true | Insurance_providerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Insurance_providerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type GetInsurance_providerAggregateType<T extends Insurance_providerAggregateArgs> = {
    [P in keyof T & keyof AggregateInsurance_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurance_provider[P]>
      : GetScalarType<T[P], AggregateInsurance_provider[P]>;
  };

  export type insurance_providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithAggregationInput | insurance_providerOrderByWithAggregationInput[];
    by: Insurance_providerScalarFieldEnum[] | Insurance_providerScalarFieldEnum;
    having?: insurance_providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Insurance_providerCountAggregateInputType | true;
    _min?: Insurance_providerMinAggregateInputType;
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type Insurance_providerGroupByOutputType = {
    id: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  type GetInsurance_providerGroupByPayload<T extends insurance_providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Insurance_providerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Insurance_providerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>
          : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>;
      }
    >
  >;

  export type insurance_providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        address?: boolean;
        phone_number?: boolean;
        email?: boolean;
        contact_person?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        appointment?: boolean | insurance_provider$appointmentArgs<ExtArgs>;
        client_k?: boolean | insurance_provider$client_kArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['insurance_provider']
    >;

  export type insurance_providerSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    phone_number?: boolean;
    email?: boolean;
    contact_person?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type insurance_providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | insurance_provider$appointmentArgs<ExtArgs>;
    client_k?: boolean | insurance_provider$client_kArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $insurance_providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'insurance_provider';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      client_k: Prisma.$client_kPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string;
        phone_number: string;
        email: string;
        contact_person: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['insurance_provider']
    >;
    composites: {};
  };

  type insurance_providerGetPayload<S extends boolean | null | undefined | insurance_providerDefaultArgs> =
    $Result.GetResult<Prisma.$insurance_providerPayload, S>;

  type insurance_providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    insurance_providerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Insurance_providerCountAggregateInputType | true;
  };

  export interface insurance_providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['insurance_provider'];
      meta: { name: 'insurance_provider' };
    };
    /**
     * Find zero or one Insurance_provider that matches the filter.
     * @param {insurance_providerFindUniqueArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends insurance_providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Insurance_provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {insurance_providerFindUniqueOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends insurance_providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends insurance_providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends insurance_providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Insurance_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany()
     *
     * // Get first 10 Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insurance_providerWithIdOnly = await prisma.insurance_provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends insurance_providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Insurance_provider.
     * @param {insurance_providerCreateArgs} args - Arguments to create a Insurance_provider.
     * @example
     * // Create one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.create({
     *   data: {
     *     // ... data to create a Insurance_provider
     *   }
     * })
     *
     **/
    create<T extends insurance_providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerCreateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Insurance_providers.
     *     @param {insurance_providerCreateManyArgs} args - Arguments to create many Insurance_providers.
     *     @example
     *     // Create many Insurance_providers
     *     const insurance_provider = await prisma.insurance_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends insurance_providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Insurance_provider.
     * @param {insurance_providerDeleteArgs} args - Arguments to delete one Insurance_provider.
     * @example
     * // Delete one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.delete({
     *   where: {
     *     // ... filter to delete one Insurance_provider
     *   }
     * })
     *
     **/
    delete<T extends insurance_providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerDeleteArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Insurance_provider.
     * @param {insurance_providerUpdateArgs} args - Arguments to update one Insurance_provider.
     * @example
     * // Update one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends insurance_providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Insurance_providers.
     * @param {insurance_providerDeleteManyArgs} args - Arguments to filter Insurance_providers to delete.
     * @example
     * // Delete a few Insurance_providers
     * const { count } = await prisma.insurance_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends insurance_providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurance_providers
     * const insurance_provider = await prisma.insurance_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends insurance_providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Insurance_provider.
     * @param {insurance_providerUpsertArgs} args - Arguments to update or create a Insurance_provider.
     * @example
     * // Update or create a Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.upsert({
     *   create: {
     *     // ... data to create a Insurance_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurance_provider we want to update
     *   }
     * })
     **/
    upsert<T extends insurance_providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpsertArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerCountArgs} args - Arguments to filter Insurance_providers to count.
     * @example
     * // Count the number of Insurance_providers
     * const count = await prisma.insurance_provider.count({
     *   where: {
     *     // ... the filter for the Insurance_providers we want to count
     *   }
     * })
     **/
    count<T extends insurance_providerCountArgs>(
      args?: Subset<T, insurance_providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Insurance_providerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Insurance_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Insurance_providerAggregateArgs>(
      args: Subset<T, Insurance_providerAggregateArgs>,
    ): Prisma.PrismaPromise<GetInsurance_providerAggregateType<T>>;

    /**
     * Group by Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerGroupByArgs} args - Group by arguments.
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
      T extends insurance_providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insurance_providerGroupByArgs['orderBy'] }
        : { orderBy?: insurance_providerGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, insurance_providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInsurance_providerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the insurance_provider model
     */
    readonly fields: insurance_providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insurance_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insurance_providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends insurance_provider$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_provider$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    client_k<T extends insurance_provider$client_kArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_provider$client_kArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the insurance_provider model
   */
  interface insurance_providerFieldRefs {
    readonly id: FieldRef<'insurance_provider', 'String'>;
    readonly name: FieldRef<'insurance_provider', 'String'>;
    readonly address: FieldRef<'insurance_provider', 'String'>;
    readonly phone_number: FieldRef<'insurance_provider', 'String'>;
    readonly email: FieldRef<'insurance_provider', 'String'>;
    readonly contact_person: FieldRef<'insurance_provider', 'String'>;
    readonly user_id: FieldRef<'insurance_provider', 'String'>;
    readonly created_at: FieldRef<'insurance_provider', 'DateTime'>;
    readonly updated_at: FieldRef<'insurance_provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * insurance_provider findUnique
   */
  export type insurance_providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findUniqueOrThrow
   */
  export type insurance_providerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findFirst
   */
  export type insurance_providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findFirstOrThrow
   */
  export type insurance_providerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findMany
   */
  export type insurance_providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_providers to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider create
   */
  export type insurance_providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a insurance_provider.
     */
    data: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
  };

  /**
   * insurance_provider createMany
   */
  export type insurance_providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insurance_providers.
     */
    data: insurance_providerCreateManyInput | insurance_providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * insurance_provider update
   */
  export type insurance_providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a insurance_provider.
     */
    data: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
    /**
     * Choose, which insurance_provider to update.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider updateMany
   */
  export type insurance_providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insurance_providers.
     */
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyInput>;
    /**
     * Filter which insurance_providers to update
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider upsert
   */
  export type insurance_providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the insurance_provider to update in case it exists.
     */
    where: insurance_providerWhereUniqueInput;
    /**
     * In case the insurance_provider found by the `where` argument doesn't exist, create a new insurance_provider with this data.
     */
    create: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
    /**
     * In case the insurance_provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
  };

  /**
   * insurance_provider delete
   */
  export type insurance_providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter which insurance_provider to delete.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider deleteMany
   */
  export type insurance_providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_providers to delete
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider.appointment
   */
  export type insurance_provider$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * insurance_provider.client_k
   */
  export type insurance_provider$client_kArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    where?: client_kWhereInput;
    orderBy?: client_kOrderByWithRelationInput | client_kOrderByWithRelationInput[];
    cursor?: client_kWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Client_kScalarFieldEnum | Client_kScalarFieldEnum[];
  };

  /**
   * insurance_provider without action
   */
  export type insurance_providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
  };

  /**
   * Model medical_staff
   */

  export type AggregateMedical_staff = {
    _count: Medical_staffCountAggregateOutputType | null;
    _avg: Medical_staffAvgAggregateOutputType | null;
    _sum: Medical_staffSumAggregateOutputType | null;
    _min: Medical_staffMinAggregateOutputType | null;
    _max: Medical_staffMaxAggregateOutputType | null;
  };

  export type Medical_staffAvgAggregateOutputType = {
    experience: number | null;
  };

  export type Medical_staffSumAggregateOutputType = {
    experience: number | null;
  };

  export type Medical_staffMinAggregateOutputType = {
    id: string | null;
    specialization: string | null;
    experience: number | null;
    qualification: string | null;
    clinic_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_staffMaxAggregateOutputType = {
    id: string | null;
    specialization: string | null;
    experience: number | null;
    qualification: string | null;
    clinic_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_staffCountAggregateOutputType = {
    id: number;
    specialization: number;
    experience: number;
    qualification: number;
    clinic_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Medical_staffAvgAggregateInputType = {
    experience?: true;
  };

  export type Medical_staffSumAggregateInputType = {
    experience?: true;
  };

  export type Medical_staffMinAggregateInputType = {
    id?: true;
    specialization?: true;
    experience?: true;
    qualification?: true;
    clinic_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_staffMaxAggregateInputType = {
    id?: true;
    specialization?: true;
    experience?: true;
    qualification?: true;
    clinic_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_staffCountAggregateInputType = {
    id?: true;
    specialization?: true;
    experience?: true;
    qualification?: true;
    clinic_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Medical_staffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_staff to aggregate.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned medical_staffs
     **/
    _count?: true | Medical_staffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Medical_staffAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Medical_staffSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Medical_staffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Medical_staffMaxAggregateInputType;
  };

  export type GetMedical_staffAggregateType<T extends Medical_staffAggregateArgs> = {
    [P in keyof T & keyof AggregateMedical_staff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical_staff[P]>
      : GetScalarType<T[P], AggregateMedical_staff[P]>;
  };

  export type medical_staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_staffWhereInput;
    orderBy?: medical_staffOrderByWithAggregationInput | medical_staffOrderByWithAggregationInput[];
    by: Medical_staffScalarFieldEnum[] | Medical_staffScalarFieldEnum;
    having?: medical_staffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Medical_staffCountAggregateInputType | true;
    _avg?: Medical_staffAvgAggregateInputType;
    _sum?: Medical_staffSumAggregateInputType;
    _min?: Medical_staffMinAggregateInputType;
    _max?: Medical_staffMaxAggregateInputType;
  };

  export type Medical_staffGroupByOutputType = {
    id: string;
    specialization: string;
    experience: number;
    qualification: string;
    clinic_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Medical_staffCountAggregateOutputType | null;
    _avg: Medical_staffAvgAggregateOutputType | null;
    _sum: Medical_staffSumAggregateOutputType | null;
    _min: Medical_staffMinAggregateOutputType | null;
    _max: Medical_staffMaxAggregateOutputType | null;
  };

  type GetMedical_staffGroupByPayload<T extends medical_staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medical_staffGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Medical_staffGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Medical_staffGroupByOutputType[P]>
          : GetScalarType<T[P], Medical_staffGroupByOutputType[P]>;
      }
    >
  >;

  export type medical_staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        specialization?: boolean;
        experience?: boolean;
        qualification?: boolean;
        clinic_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        appointment?: boolean | medical_staff$appointmentArgs<ExtArgs>;
        clinic?: boolean | clinicDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Medical_staffCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['medical_staff']
    >;

  export type medical_staffSelectScalar = {
    id?: boolean;
    specialization?: boolean;
    experience?: boolean;
    qualification?: boolean;
    clinic_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type medical_staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | medical_staff$appointmentArgs<ExtArgs>;
    clinic?: boolean | clinicDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Medical_staffCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $medical_staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'medical_staff';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      clinic: Prisma.$clinicPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        specialization: string;
        experience: number;
        qualification: string;
        clinic_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['medical_staff']
    >;
    composites: {};
  };

  type medical_staffGetPayload<S extends boolean | null | undefined | medical_staffDefaultArgs> = $Result.GetResult<
    Prisma.$medical_staffPayload,
    S
  >;

  type medical_staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    medical_staffFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Medical_staffCountAggregateInputType | true;
  };

  export interface medical_staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medical_staff']; meta: { name: 'medical_staff' } };
    /**
     * Find zero or one Medical_staff that matches the filter.
     * @param {medical_staffFindUniqueArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends medical_staffFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffFindUniqueArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Medical_staff that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {medical_staffFindUniqueOrThrowArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends medical_staffFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Medical_staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffFindFirstArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends medical_staffFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindFirstArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Medical_staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffFindFirstOrThrowArgs} args - Arguments to find a Medical_staff
     * @example
     * // Get one Medical_staff
     * const medical_staff = await prisma.medical_staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends medical_staffFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Medical_staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medical_staffs
     * const medical_staffs = await prisma.medical_staff.findMany()
     *
     * // Get first 10 Medical_staffs
     * const medical_staffs = await prisma.medical_staff.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medical_staffWithIdOnly = await prisma.medical_staff.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends medical_staffFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Medical_staff.
     * @param {medical_staffCreateArgs} args - Arguments to create a Medical_staff.
     * @example
     * // Create one Medical_staff
     * const Medical_staff = await prisma.medical_staff.create({
     *   data: {
     *     // ... data to create a Medical_staff
     *   }
     * })
     *
     **/
    create<T extends medical_staffCreateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffCreateArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Medical_staffs.
     *     @param {medical_staffCreateManyArgs} args - Arguments to create many Medical_staffs.
     *     @example
     *     // Create many Medical_staffs
     *     const medical_staff = await prisma.medical_staff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends medical_staffCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Medical_staff.
     * @param {medical_staffDeleteArgs} args - Arguments to delete one Medical_staff.
     * @example
     * // Delete one Medical_staff
     * const Medical_staff = await prisma.medical_staff.delete({
     *   where: {
     *     // ... filter to delete one Medical_staff
     *   }
     * })
     *
     **/
    delete<T extends medical_staffDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffDeleteArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Medical_staff.
     * @param {medical_staffUpdateArgs} args - Arguments to update one Medical_staff.
     * @example
     * // Update one Medical_staff
     * const medical_staff = await prisma.medical_staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends medical_staffUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffUpdateArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Medical_staffs.
     * @param {medical_staffDeleteManyArgs} args - Arguments to filter Medical_staffs to delete.
     * @example
     * // Delete a few Medical_staffs
     * const { count } = await prisma.medical_staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends medical_staffDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_staffDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Medical_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medical_staffs
     * const medical_staff = await prisma.medical_staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends medical_staffUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Medical_staff.
     * @param {medical_staffUpsertArgs} args - Arguments to update or create a Medical_staff.
     * @example
     * // Update or create a Medical_staff
     * const medical_staff = await prisma.medical_staff.upsert({
     *   create: {
     *     // ... data to create a Medical_staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical_staff we want to update
     *   }
     * })
     **/
    upsert<T extends medical_staffUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, medical_staffUpsertArgs<ExtArgs>>,
    ): Prisma__medical_staffClient<
      $Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Medical_staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffCountArgs} args - Arguments to filter Medical_staffs to count.
     * @example
     * // Count the number of Medical_staffs
     * const count = await prisma.medical_staff.count({
     *   where: {
     *     // ... the filter for the Medical_staffs we want to count
     *   }
     * })
     **/
    count<T extends medical_staffCountArgs>(
      args?: Subset<T, medical_staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medical_staffCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Medical_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medical_staffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Medical_staffAggregateArgs>(
      args: Subset<T, Medical_staffAggregateArgs>,
    ): Prisma.PrismaPromise<GetMedical_staffAggregateType<T>>;

    /**
     * Group by Medical_staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_staffGroupByArgs} args - Group by arguments.
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
      T extends medical_staffGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medical_staffGroupByArgs['orderBy'] }
        : { orderBy?: medical_staffGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, medical_staffGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMedical_staffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the medical_staff model
     */
    readonly fields: medical_staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medical_staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medical_staffClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends medical_staff$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, medical_staff$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    clinic<T extends clinicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clinicDefaultArgs<ExtArgs>>,
    ): Prisma__clinicClient<
      $Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the medical_staff model
   */
  interface medical_staffFieldRefs {
    readonly id: FieldRef<'medical_staff', 'String'>;
    readonly specialization: FieldRef<'medical_staff', 'String'>;
    readonly experience: FieldRef<'medical_staff', 'Int'>;
    readonly qualification: FieldRef<'medical_staff', 'String'>;
    readonly clinic_id: FieldRef<'medical_staff', 'String'>;
    readonly user_id: FieldRef<'medical_staff', 'String'>;
    readonly created_at: FieldRef<'medical_staff', 'DateTime'>;
    readonly updated_at: FieldRef<'medical_staff', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * medical_staff findUnique
   */
  export type medical_staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff findUniqueOrThrow
   */
  export type medical_staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff findFirst
   */
  export type medical_staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_staffs.
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_staffs.
     */
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * medical_staff findFirstOrThrow
   */
  export type medical_staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staff to fetch.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_staffs.
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_staffs.
     */
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * medical_staff findMany
   */
  export type medical_staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter, which medical_staffs to fetch.
     */
    where?: medical_staffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_staffs to fetch.
     */
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing medical_staffs.
     */
    cursor?: medical_staffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_staffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_staffs.
     */
    skip?: number;
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * medical_staff create
   */
  export type medical_staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * The data needed to create a medical_staff.
     */
    data: XOR<medical_staffCreateInput, medical_staffUncheckedCreateInput>;
  };

  /**
   * medical_staff createMany
   */
  export type medical_staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medical_staffs.
     */
    data: medical_staffCreateManyInput | medical_staffCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * medical_staff update
   */
  export type medical_staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * The data needed to update a medical_staff.
     */
    data: XOR<medical_staffUpdateInput, medical_staffUncheckedUpdateInput>;
    /**
     * Choose, which medical_staff to update.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff updateMany
   */
  export type medical_staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medical_staffs.
     */
    data: XOR<medical_staffUpdateManyMutationInput, medical_staffUncheckedUpdateManyInput>;
    /**
     * Filter which medical_staffs to update
     */
    where?: medical_staffWhereInput;
  };

  /**
   * medical_staff upsert
   */
  export type medical_staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * The filter to search for the medical_staff to update in case it exists.
     */
    where: medical_staffWhereUniqueInput;
    /**
     * In case the medical_staff found by the `where` argument doesn't exist, create a new medical_staff with this data.
     */
    create: XOR<medical_staffCreateInput, medical_staffUncheckedCreateInput>;
    /**
     * In case the medical_staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medical_staffUpdateInput, medical_staffUncheckedUpdateInput>;
  };

  /**
   * medical_staff delete
   */
  export type medical_staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    /**
     * Filter which medical_staff to delete.
     */
    where: medical_staffWhereUniqueInput;
  };

  /**
   * medical_staff deleteMany
   */
  export type medical_staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_staffs to delete
     */
    where?: medical_staffWhereInput;
  };

  /**
   * medical_staff.appointment
   */
  export type medical_staff$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * medical_staff without action
   */
  export type medical_staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      client_k?: boolean | user$client_kArgs<ExtArgs>;
      clinic?: boolean | user$clinicArgs<ExtArgs>;
      insurance_provider?: boolean | user$insurance_providerArgs<ExtArgs>;
      medical_staff?: boolean | user$medical_staffArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client_k?: boolean | user$client_kArgs<ExtArgs>;
    clinic?: boolean | user$clinicArgs<ExtArgs>;
    insurance_provider?: boolean | user$insurance_providerArgs<ExtArgs>;
    medical_staff?: boolean | user$medical_staffArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      client_k: Prisma.$client_kPayload<ExtArgs>[];
      clinic: Prisma.$clinicPayload<ExtArgs>[];
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>[];
      medical_staff: Prisma.$medical_staffPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client_k<T extends user$client_kArgs<ExtArgs> = {}>(
      args?: Subset<T, user$client_kArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$client_kPayload<ExtArgs>, T, 'findMany'> | Null>;

    clinic<T extends user$clinicArgs<ExtArgs> = {}>(
      args?: Subset<T, user$clinicArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'> | Null>;

    insurance_provider<T extends user$insurance_providerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$insurance_providerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_staff<T extends user$medical_staffArgs<ExtArgs> = {}>(
      args?: Subset<T, user$medical_staffArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_staffPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.client_k
   */
  export type user$client_kArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_k
     */
    select?: client_kSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: client_kInclude<ExtArgs> | null;
    where?: client_kWhereInput;
    orderBy?: client_kOrderByWithRelationInput | client_kOrderByWithRelationInput[];
    cursor?: client_kWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Client_kScalarFieldEnum | Client_kScalarFieldEnum[];
  };

  /**
   * user.clinic
   */
  export type user$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    cursor?: clinicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * user.insurance_provider
   */
  export type user$insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    cursor?: insurance_providerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * user.medical_staff
   */
  export type user$medical_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_staff
     */
    select?: medical_staffSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_staffInclude<ExtArgs> | null;
    where?: medical_staffWhereInput;
    orderBy?: medical_staffOrderByWithRelationInput | medical_staffOrderByWithRelationInput[];
    cursor?: medical_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_staffScalarFieldEnum | Medical_staffScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    date_time: 'date_time';
    patient_id: 'patient_id';
    doctor_id: 'doctor_id';
    clinic_id: 'clinic_id';
    insurance_id: 'insurance_id';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const Client_kScalarFieldEnum: {
    id: 'id';
    date_of_birth: 'date_of_birth';
    gender: 'gender';
    insurance_id: 'insurance_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Client_kScalarFieldEnum = (typeof Client_kScalarFieldEnum)[keyof typeof Client_kScalarFieldEnum];

  export const ClinicScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone_number: 'phone_number';
    opening_hours: 'opening_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum];

  export const Insurance_providerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    phone_number: 'phone_number';
    email: 'email';
    contact_person: 'contact_person';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Insurance_providerScalarFieldEnum =
    (typeof Insurance_providerScalarFieldEnum)[keyof typeof Insurance_providerScalarFieldEnum];

  export const Medical_staffScalarFieldEnum: {
    id: 'id';
    specialization: 'specialization';
    experience: 'experience';
    qualification: 'qualification';
    clinic_id: 'clinic_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Medical_staffScalarFieldEnum =
    (typeof Medical_staffScalarFieldEnum)[keyof typeof Medical_staffScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    date_time?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    clinic_id?: UuidFilter<'appointment'> | string;
    insurance_id?: UuidFilter<'appointment'> | string;
    status?: StringFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
    medical_staff?: XOR<Medical_staffRelationFilter, medical_staffWhereInput>;
    insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
    client_k?: XOR<Client_kRelationFilter, client_kWhereInput>;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    date_time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    insurance_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    clinic?: clinicOrderByWithRelationInput;
    medical_staff?: medical_staffOrderByWithRelationInput;
    insurance_provider?: insurance_providerOrderByWithRelationInput;
    client_k?: client_kOrderByWithRelationInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      date_time?: DateTimeFilter<'appointment'> | Date | string;
      patient_id?: UuidFilter<'appointment'> | string;
      doctor_id?: UuidFilter<'appointment'> | string;
      clinic_id?: UuidFilter<'appointment'> | string;
      insurance_id?: UuidFilter<'appointment'> | string;
      status?: StringFilter<'appointment'> | string;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
      medical_staff?: XOR<Medical_staffRelationFilter, medical_staffWhereInput>;
      insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
      client_k?: XOR<Client_kRelationFilter, client_kWhereInput>;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    date_time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    insurance_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    date_time?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    doctor_id?: UuidWithAggregatesFilter<'appointment'> | string;
    clinic_id?: UuidWithAggregatesFilter<'appointment'> | string;
    insurance_id?: UuidWithAggregatesFilter<'appointment'> | string;
    status?: StringWithAggregatesFilter<'appointment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type client_kWhereInput = {
    AND?: client_kWhereInput | client_kWhereInput[];
    OR?: client_kWhereInput[];
    NOT?: client_kWhereInput | client_kWhereInput[];
    id?: UuidFilter<'client_k'> | string;
    date_of_birth?: DateTimeFilter<'client_k'> | Date | string;
    gender?: StringFilter<'client_k'> | string;
    insurance_id?: UuidFilter<'client_k'> | string;
    user_id?: UuidFilter<'client_k'> | string;
    created_at?: DateTimeFilter<'client_k'> | Date | string;
    updated_at?: DateTimeFilter<'client_k'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type client_kOrderByWithRelationInput = {
    id?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    insurance_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    insurance_provider?: insurance_providerOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type client_kWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: client_kWhereInput | client_kWhereInput[];
      OR?: client_kWhereInput[];
      NOT?: client_kWhereInput | client_kWhereInput[];
      date_of_birth?: DateTimeFilter<'client_k'> | Date | string;
      gender?: StringFilter<'client_k'> | string;
      insurance_id?: UuidFilter<'client_k'> | string;
      user_id?: UuidFilter<'client_k'> | string;
      created_at?: DateTimeFilter<'client_k'> | Date | string;
      updated_at?: DateTimeFilter<'client_k'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type client_kOrderByWithAggregationInput = {
    id?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    insurance_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: client_kCountOrderByAggregateInput;
    _max?: client_kMaxOrderByAggregateInput;
    _min?: client_kMinOrderByAggregateInput;
  };

  export type client_kScalarWhereWithAggregatesInput = {
    AND?: client_kScalarWhereWithAggregatesInput | client_kScalarWhereWithAggregatesInput[];
    OR?: client_kScalarWhereWithAggregatesInput[];
    NOT?: client_kScalarWhereWithAggregatesInput | client_kScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'client_k'> | string;
    date_of_birth?: DateTimeWithAggregatesFilter<'client_k'> | Date | string;
    gender?: StringWithAggregatesFilter<'client_k'> | string;
    insurance_id?: UuidWithAggregatesFilter<'client_k'> | string;
    user_id?: UuidWithAggregatesFilter<'client_k'> | string;
    created_at?: DateTimeWithAggregatesFilter<'client_k'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'client_k'> | Date | string;
  };

  export type clinicWhereInput = {
    AND?: clinicWhereInput | clinicWhereInput[];
    OR?: clinicWhereInput[];
    NOT?: clinicWhereInput | clinicWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    address?: StringNullableFilter<'clinic'> | string | null;
    phone_number?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    user_id?: UuidFilter<'clinic'> | string;
    tenant_id?: StringFilter<'clinic'> | string;
    appointment?: AppointmentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    medical_staff?: Medical_staffListRelationFilter;
  };

  export type clinicOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    medical_staff?: medical_staffOrderByRelationAggregateInput;
  };

  export type clinicWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      phone_number?: string;
      AND?: clinicWhereInput | clinicWhereInput[];
      OR?: clinicWhereInput[];
      NOT?: clinicWhereInput | clinicWhereInput[];
      description?: StringNullableFilter<'clinic'> | string | null;
      address?: StringNullableFilter<'clinic'> | string | null;
      opening_hours?: StringNullableFilter<'clinic'> | string | null;
      name?: StringFilter<'clinic'> | string;
      created_at?: DateTimeFilter<'clinic'> | Date | string;
      updated_at?: DateTimeFilter<'clinic'> | Date | string;
      user_id?: UuidFilter<'clinic'> | string;
      tenant_id?: StringFilter<'clinic'> | string;
      appointment?: AppointmentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      medical_staff?: Medical_staffListRelationFilter;
    },
    'id' | 'phone_number'
  >;

  export type clinicOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone_number?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: clinicCountOrderByAggregateInput;
    _max?: clinicMaxOrderByAggregateInput;
    _min?: clinicMinOrderByAggregateInput;
  };

  export type clinicScalarWhereWithAggregatesInput = {
    AND?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    OR?: clinicScalarWhereWithAggregatesInput[];
    NOT?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'clinic'> | string;
    description?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    address?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    phone_number?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    name?: StringWithAggregatesFilter<'clinic'> | string;
    created_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'clinic'> | string;
    tenant_id?: StringWithAggregatesFilter<'clinic'> | string;
  };

  export type insurance_providerWhereInput = {
    AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
    OR?: insurance_providerWhereInput[];
    NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    name?: StringFilter<'insurance_provider'> | string;
    address?: StringFilter<'insurance_provider'> | string;
    phone_number?: StringFilter<'insurance_provider'> | string;
    email?: StringFilter<'insurance_provider'> | string;
    contact_person?: StringFilter<'insurance_provider'> | string;
    user_id?: UuidFilter<'insurance_provider'> | string;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    client_k?: Client_kListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type insurance_providerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    contact_person?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    client_k?: client_kOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type insurance_providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      phone_number?: string;
      email?: string;
      AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
      OR?: insurance_providerWhereInput[];
      NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
      name?: StringFilter<'insurance_provider'> | string;
      address?: StringFilter<'insurance_provider'> | string;
      contact_person?: StringFilter<'insurance_provider'> | string;
      user_id?: UuidFilter<'insurance_provider'> | string;
      created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      client_k?: Client_kListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id' | 'phone_number' | 'email'
  >;

  export type insurance_providerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    contact_person?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: insurance_providerCountOrderByAggregateInput;
    _max?: insurance_providerMaxOrderByAggregateInput;
    _min?: insurance_providerMinOrderByAggregateInput;
  };

  export type insurance_providerScalarWhereWithAggregatesInput = {
    AND?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    OR?: insurance_providerScalarWhereWithAggregatesInput[];
    NOT?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    name?: StringWithAggregatesFilter<'insurance_provider'> | string;
    address?: StringWithAggregatesFilter<'insurance_provider'> | string;
    phone_number?: StringWithAggregatesFilter<'insurance_provider'> | string;
    email?: StringWithAggregatesFilter<'insurance_provider'> | string;
    contact_person?: StringWithAggregatesFilter<'insurance_provider'> | string;
    user_id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    created_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
  };

  export type medical_staffWhereInput = {
    AND?: medical_staffWhereInput | medical_staffWhereInput[];
    OR?: medical_staffWhereInput[];
    NOT?: medical_staffWhereInput | medical_staffWhereInput[];
    id?: UuidFilter<'medical_staff'> | string;
    specialization?: StringFilter<'medical_staff'> | string;
    experience?: IntFilter<'medical_staff'> | number;
    qualification?: StringFilter<'medical_staff'> | string;
    clinic_id?: UuidFilter<'medical_staff'> | string;
    user_id?: UuidFilter<'medical_staff'> | string;
    created_at?: DateTimeFilter<'medical_staff'> | Date | string;
    updated_at?: DateTimeFilter<'medical_staff'> | Date | string;
    appointment?: AppointmentListRelationFilter;
    clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type medical_staffOrderByWithRelationInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    clinic?: clinicOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type medical_staffWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: medical_staffWhereInput | medical_staffWhereInput[];
      OR?: medical_staffWhereInput[];
      NOT?: medical_staffWhereInput | medical_staffWhereInput[];
      specialization?: StringFilter<'medical_staff'> | string;
      experience?: IntFilter<'medical_staff'> | number;
      qualification?: StringFilter<'medical_staff'> | string;
      clinic_id?: UuidFilter<'medical_staff'> | string;
      user_id?: UuidFilter<'medical_staff'> | string;
      created_at?: DateTimeFilter<'medical_staff'> | Date | string;
      updated_at?: DateTimeFilter<'medical_staff'> | Date | string;
      appointment?: AppointmentListRelationFilter;
      clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type medical_staffOrderByWithAggregationInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: medical_staffCountOrderByAggregateInput;
    _avg?: medical_staffAvgOrderByAggregateInput;
    _max?: medical_staffMaxOrderByAggregateInput;
    _min?: medical_staffMinOrderByAggregateInput;
    _sum?: medical_staffSumOrderByAggregateInput;
  };

  export type medical_staffScalarWhereWithAggregatesInput = {
    AND?: medical_staffScalarWhereWithAggregatesInput | medical_staffScalarWhereWithAggregatesInput[];
    OR?: medical_staffScalarWhereWithAggregatesInput[];
    NOT?: medical_staffScalarWhereWithAggregatesInput | medical_staffScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'medical_staff'> | string;
    specialization?: StringWithAggregatesFilter<'medical_staff'> | string;
    experience?: IntWithAggregatesFilter<'medical_staff'> | number;
    qualification?: StringWithAggregatesFilter<'medical_staff'> | string;
    clinic_id?: UuidWithAggregatesFilter<'medical_staff'> | string;
    user_id?: UuidWithAggregatesFilter<'medical_staff'> | string;
    created_at?: DateTimeWithAggregatesFilter<'medical_staff'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'medical_staff'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    client_k?: Client_kListRelationFilter;
    clinic?: ClinicListRelationFilter;
    insurance_provider?: Insurance_providerListRelationFilter;
    medical_staff?: Medical_staffListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    client_k?: client_kOrderByRelationAggregateInput;
    clinic?: clinicOrderByRelationAggregateInput;
    insurance_provider?: insurance_providerOrderByRelationAggregateInput;
    medical_staff?: medical_staffOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      client_k?: Client_kListRelationFilter;
      clinic?: ClinicListRelationFilter;
      insurance_provider?: Insurance_providerListRelationFilter;
      medical_staff?: Medical_staffListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    date_time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    medical_staff: medical_staffCreateNestedOneWithoutAppointmentInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutAppointmentInput;
    client_k: client_kCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    medical_staff?: medical_staffUpdateOneRequiredWithoutAppointmentNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutAppointmentNestedInput;
    client_k?: client_kUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_kCreateInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutClient_kInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutClient_kInput;
    user: userCreateNestedOneWithoutClient_kInput;
  };

  export type client_kUncheckedCreateInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    insurance_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClient_kInput;
  };

  export type client_kUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutClient_kNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutClient_kNestedInput;
    user?: userUpdateOneRequiredWithoutClient_kNestedInput;
  };

  export type client_kUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClient_kNestedInput;
  };

  export type client_kCreateManyInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    insurance_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_kUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_kUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clinicCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
    user: userCreateNestedOneWithoutClinicInput;
    medical_staff?: medical_staffCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type clinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type insurance_providerCreateInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutInsurance_providerInput;
    client_k?: client_kCreateNestedManyWithoutInsurance_providerInput;
    user: userCreateNestedOneWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutInsurance_providerInput;
    client_k?: client_kUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutInsurance_providerNestedInput;
    client_k?: client_kUpdateManyWithoutInsurance_providerNestedInput;
    user?: userUpdateOneRequiredWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutInsurance_providerNestedInput;
    client_k?: client_kUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerCreateManyInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffCreateInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutMedical_staffInput;
    clinic: clinicCreateNestedOneWithoutMedical_staffInput;
    user: userCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    clinic_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutMedical_staffInput;
  };

  export type medical_staffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutMedical_staffNestedInput;
    clinic?: clinicUpdateOneRequiredWithoutMedical_staffNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutMedical_staffNestedInput;
  };

  export type medical_staffCreateManyInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    clinic_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type ClinicRelationFilter = {
    is?: clinicWhereInput;
    isNot?: clinicWhereInput;
  };

  export type Medical_staffRelationFilter = {
    is?: medical_staffWhereInput;
    isNot?: medical_staffWhereInput;
  };

  export type Insurance_providerRelationFilter = {
    is?: insurance_providerWhereInput;
    isNot?: insurance_providerWhereInput;
  };

  export type Client_kRelationFilter = {
    is?: client_kWhereInput;
    isNot?: client_kWhereInput;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    date_time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    insurance_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    date_time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    insurance_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    date_time?: SortOrder;
    patient_id?: SortOrder;
    doctor_id?: SortOrder;
    clinic_id?: SortOrder;
    insurance_id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type client_kCountOrderByAggregateInput = {
    id?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    insurance_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type client_kMaxOrderByAggregateInput = {
    id?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    insurance_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type client_kMinOrderByAggregateInput = {
    id?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    insurance_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type Medical_staffListRelationFilter = {
    every?: medical_staffWhereInput;
    some?: medical_staffWhereInput;
    none?: medical_staffWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type medical_staffOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clinicCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    opening_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type Client_kListRelationFilter = {
    every?: client_kWhereInput;
    some?: client_kWhereInput;
    none?: client_kWhereInput;
  };

  export type client_kOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type insurance_providerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    contact_person?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    contact_person?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    phone_number?: SortOrder;
    email?: SortOrder;
    contact_person?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type medical_staffCountOrderByAggregateInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_staffAvgOrderByAggregateInput = {
    experience?: SortOrder;
  };

  export type medical_staffMaxOrderByAggregateInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_staffMinOrderByAggregateInput = {
    id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    qualification?: SortOrder;
    clinic_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_staffSumOrderByAggregateInput = {
    experience?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type ClinicListRelationFilter = {
    every?: clinicWhereInput;
    some?: clinicWhereInput;
    none?: clinicWhereInput;
  };

  export type Insurance_providerListRelationFilter = {
    every?: insurance_providerWhereInput;
    some?: insurance_providerWhereInput;
    none?: insurance_providerWhereInput;
  };

  export type clinicOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type insurance_providerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type clinicCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentInput;
    connect?: clinicWhereUniqueInput;
  };

  export type medical_staffCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<medical_staffCreateWithoutAppointmentInput, medical_staffUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: medical_staffCreateOrConnectWithoutAppointmentInput;
    connect?: medical_staffWhereUniqueInput;
  };

  export type insurance_providerCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<
      insurance_providerCreateWithoutAppointmentInput,
      insurance_providerUncheckedCreateWithoutAppointmentInput
    >;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutAppointmentInput;
    connect?: insurance_providerWhereUniqueInput;
  };

  export type client_kCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<client_kCreateWithoutAppointmentInput, client_kUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: client_kCreateOrConnectWithoutAppointmentInput;
    connect?: client_kWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type clinicUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentInput;
    upsert?: clinicUpsertWithoutAppointmentInput;
    connect?: clinicWhereUniqueInput;
    update?: XOR<
      XOR<clinicUpdateToOneWithWhereWithoutAppointmentInput, clinicUpdateWithoutAppointmentInput>,
      clinicUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type medical_staffUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<medical_staffCreateWithoutAppointmentInput, medical_staffUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: medical_staffCreateOrConnectWithoutAppointmentInput;
    upsert?: medical_staffUpsertWithoutAppointmentInput;
    connect?: medical_staffWhereUniqueInput;
    update?: XOR<
      XOR<medical_staffUpdateToOneWithWhereWithoutAppointmentInput, medical_staffUpdateWithoutAppointmentInput>,
      medical_staffUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type insurance_providerUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<
      insurance_providerCreateWithoutAppointmentInput,
      insurance_providerUncheckedCreateWithoutAppointmentInput
    >;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutAppointmentInput;
    upsert?: insurance_providerUpsertWithoutAppointmentInput;
    connect?: insurance_providerWhereUniqueInput;
    update?: XOR<
      XOR<
        insurance_providerUpdateToOneWithWhereWithoutAppointmentInput,
        insurance_providerUpdateWithoutAppointmentInput
      >,
      insurance_providerUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type client_kUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<client_kCreateWithoutAppointmentInput, client_kUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: client_kCreateOrConnectWithoutAppointmentInput;
    upsert?: client_kUpsertWithoutAppointmentInput;
    connect?: client_kWhereUniqueInput;
    update?: XOR<
      XOR<client_kUpdateToOneWithWhereWithoutAppointmentInput, client_kUpdateWithoutAppointmentInput>,
      client_kUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type appointmentCreateNestedManyWithoutClient_kInput = {
    create?:
      | XOR<appointmentCreateWithoutClient_kInput, appointmentUncheckedCreateWithoutClient_kInput>
      | appointmentCreateWithoutClient_kInput[]
      | appointmentUncheckedCreateWithoutClient_kInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClient_kInput | appointmentCreateOrConnectWithoutClient_kInput[];
    createMany?: appointmentCreateManyClient_kInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type insurance_providerCreateNestedOneWithoutClient_kInput = {
    create?: XOR<insurance_providerCreateWithoutClient_kInput, insurance_providerUncheckedCreateWithoutClient_kInput>;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutClient_kInput;
    connect?: insurance_providerWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutClient_kInput = {
    create?: XOR<userCreateWithoutClient_kInput, userUncheckedCreateWithoutClient_kInput>;
    connectOrCreate?: userCreateOrConnectWithoutClient_kInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutClient_kInput = {
    create?:
      | XOR<appointmentCreateWithoutClient_kInput, appointmentUncheckedCreateWithoutClient_kInput>
      | appointmentCreateWithoutClient_kInput[]
      | appointmentUncheckedCreateWithoutClient_kInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClient_kInput | appointmentCreateOrConnectWithoutClient_kInput[];
    createMany?: appointmentCreateManyClient_kInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutClient_kNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClient_kInput, appointmentUncheckedCreateWithoutClient_kInput>
      | appointmentCreateWithoutClient_kInput[]
      | appointmentUncheckedCreateWithoutClient_kInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClient_kInput | appointmentCreateOrConnectWithoutClient_kInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutClient_kInput
      | appointmentUpsertWithWhereUniqueWithoutClient_kInput[];
    createMany?: appointmentCreateManyClient_kInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutClient_kInput
      | appointmentUpdateWithWhereUniqueWithoutClient_kInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutClient_kInput
      | appointmentUpdateManyWithWhereWithoutClient_kInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type insurance_providerUpdateOneRequiredWithoutClient_kNestedInput = {
    create?: XOR<insurance_providerCreateWithoutClient_kInput, insurance_providerUncheckedCreateWithoutClient_kInput>;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutClient_kInput;
    upsert?: insurance_providerUpsertWithoutClient_kInput;
    connect?: insurance_providerWhereUniqueInput;
    update?: XOR<
      XOR<insurance_providerUpdateToOneWithWhereWithoutClient_kInput, insurance_providerUpdateWithoutClient_kInput>,
      insurance_providerUncheckedUpdateWithoutClient_kInput
    >;
  };

  export type userUpdateOneRequiredWithoutClient_kNestedInput = {
    create?: XOR<userCreateWithoutClient_kInput, userUncheckedCreateWithoutClient_kInput>;
    connectOrCreate?: userCreateOrConnectWithoutClient_kInput;
    upsert?: userUpsertWithoutClient_kInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClient_kInput, userUpdateWithoutClient_kInput>,
      userUncheckedUpdateWithoutClient_kInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutClient_kNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClient_kInput, appointmentUncheckedCreateWithoutClient_kInput>
      | appointmentCreateWithoutClient_kInput[]
      | appointmentUncheckedCreateWithoutClient_kInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClient_kInput | appointmentCreateOrConnectWithoutClient_kInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutClient_kInput
      | appointmentUpsertWithWhereUniqueWithoutClient_kInput[];
    createMany?: appointmentCreateManyClient_kInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutClient_kInput
      | appointmentUpdateWithWhereUniqueWithoutClient_kInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutClient_kInput
      | appointmentUpdateManyWithWhereWithoutClient_kInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutClinicInput = {
    create?: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: userCreateOrConnectWithoutClinicInput;
    connect?: userWhereUniqueInput;
  };

  export type medical_staffCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type medical_staffUncheckedCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type appointmentUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutClinicNestedInput = {
    create?: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: userCreateOrConnectWithoutClinicInput;
    upsert?: userUpsertWithoutClinicInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClinicInput, userUpdateWithoutClinicInput>,
      userUncheckedUpdateWithoutClinicInput
    >;
  };

  export type medical_staffUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    upsert?:
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?:
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?:
      | medical_staffUpdateManyWithWhereWithoutClinicInput
      | medical_staffUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type medical_staffUncheckedUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>
      | medical_staffCreateWithoutClinicInput[]
      | medical_staffUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutClinicInput | medical_staffCreateOrConnectWithoutClinicInput[];
    upsert?:
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput
      | medical_staffUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: medical_staffCreateManyClinicInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?:
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput
      | medical_staffUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?:
      | medical_staffUpdateManyWithWhereWithoutClinicInput
      | medical_staffUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<appointmentCreateWithoutInsurance_providerInput, appointmentUncheckedCreateWithoutInsurance_providerInput>
      | appointmentCreateWithoutInsurance_providerInput[]
      | appointmentUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutInsurance_providerInput
      | appointmentCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: appointmentCreateManyInsurance_providerInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type client_kCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<client_kCreateWithoutInsurance_providerInput, client_kUncheckedCreateWithoutInsurance_providerInput>
      | client_kCreateWithoutInsurance_providerInput[]
      | client_kUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | client_kCreateOrConnectWithoutInsurance_providerInput
      | client_kCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: client_kCreateManyInsurance_providerInputEnvelope;
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutInsurance_providerInput = {
    create?: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutInsurance_providerInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<appointmentCreateWithoutInsurance_providerInput, appointmentUncheckedCreateWithoutInsurance_providerInput>
      | appointmentCreateWithoutInsurance_providerInput[]
      | appointmentUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutInsurance_providerInput
      | appointmentCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: appointmentCreateManyInsurance_providerInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type client_kUncheckedCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<client_kCreateWithoutInsurance_providerInput, client_kUncheckedCreateWithoutInsurance_providerInput>
      | client_kCreateWithoutInsurance_providerInput[]
      | client_kUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | client_kCreateOrConnectWithoutInsurance_providerInput
      | client_kCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: client_kCreateManyInsurance_providerInputEnvelope;
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutInsurance_providerInput, appointmentUncheckedCreateWithoutInsurance_providerInput>
      | appointmentCreateWithoutInsurance_providerInput[]
      | appointmentUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutInsurance_providerInput
      | appointmentCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutInsurance_providerInput
      | appointmentUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: appointmentCreateManyInsurance_providerInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutInsurance_providerInput
      | appointmentUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutInsurance_providerInput
      | appointmentUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type client_kUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<client_kCreateWithoutInsurance_providerInput, client_kUncheckedCreateWithoutInsurance_providerInput>
      | client_kCreateWithoutInsurance_providerInput[]
      | client_kUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | client_kCreateOrConnectWithoutInsurance_providerInput
      | client_kCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | client_kUpsertWithWhereUniqueWithoutInsurance_providerInput
      | client_kUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: client_kCreateManyInsurance_providerInputEnvelope;
    set?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    disconnect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    delete?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    update?:
      | client_kUpdateWithWhereUniqueWithoutInsurance_providerInput
      | client_kUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | client_kUpdateManyWithWhereWithoutInsurance_providerInput
      | client_kUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: client_kScalarWhereInput | client_kScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutInsurance_providerNestedInput = {
    create?: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutInsurance_providerInput;
    upsert?: userUpsertWithoutInsurance_providerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInsurance_providerInput, userUpdateWithoutInsurance_providerInput>,
      userUncheckedUpdateWithoutInsurance_providerInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutInsurance_providerInput, appointmentUncheckedCreateWithoutInsurance_providerInput>
      | appointmentCreateWithoutInsurance_providerInput[]
      | appointmentUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutInsurance_providerInput
      | appointmentCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutInsurance_providerInput
      | appointmentUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: appointmentCreateManyInsurance_providerInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutInsurance_providerInput
      | appointmentUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutInsurance_providerInput
      | appointmentUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type client_kUncheckedUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<client_kCreateWithoutInsurance_providerInput, client_kUncheckedCreateWithoutInsurance_providerInput>
      | client_kCreateWithoutInsurance_providerInput[]
      | client_kUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | client_kCreateOrConnectWithoutInsurance_providerInput
      | client_kCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | client_kUpsertWithWhereUniqueWithoutInsurance_providerInput
      | client_kUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: client_kCreateManyInsurance_providerInputEnvelope;
    set?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    disconnect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    delete?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    update?:
      | client_kUpdateWithWhereUniqueWithoutInsurance_providerInput
      | client_kUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | client_kUpdateManyWithWhereWithoutInsurance_providerInput
      | client_kUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: client_kScalarWhereInput | client_kScalarWhereInput[];
  };

  export type appointmentCreateNestedManyWithoutMedical_staffInput = {
    create?:
      | XOR<appointmentCreateWithoutMedical_staffInput, appointmentUncheckedCreateWithoutMedical_staffInput>
      | appointmentCreateWithoutMedical_staffInput[]
      | appointmentUncheckedCreateWithoutMedical_staffInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutMedical_staffInput
      | appointmentCreateOrConnectWithoutMedical_staffInput[];
    createMany?: appointmentCreateManyMedical_staffInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type clinicCreateNestedOneWithoutMedical_staffInput = {
    create?: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutMedical_staffInput;
    connect?: clinicWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutMedical_staffInput = {
    create?: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_staffInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutMedical_staffInput = {
    create?:
      | XOR<appointmentCreateWithoutMedical_staffInput, appointmentUncheckedCreateWithoutMedical_staffInput>
      | appointmentCreateWithoutMedical_staffInput[]
      | appointmentUncheckedCreateWithoutMedical_staffInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutMedical_staffInput
      | appointmentCreateOrConnectWithoutMedical_staffInput[];
    createMany?: appointmentCreateManyMedical_staffInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type appointmentUpdateManyWithoutMedical_staffNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutMedical_staffInput, appointmentUncheckedCreateWithoutMedical_staffInput>
      | appointmentCreateWithoutMedical_staffInput[]
      | appointmentUncheckedCreateWithoutMedical_staffInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutMedical_staffInput
      | appointmentCreateOrConnectWithoutMedical_staffInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutMedical_staffInput
      | appointmentUpsertWithWhereUniqueWithoutMedical_staffInput[];
    createMany?: appointmentCreateManyMedical_staffInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutMedical_staffInput
      | appointmentUpdateWithWhereUniqueWithoutMedical_staffInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutMedical_staffInput
      | appointmentUpdateManyWithWhereWithoutMedical_staffInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type clinicUpdateOneRequiredWithoutMedical_staffNestedInput = {
    create?: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutMedical_staffInput;
    upsert?: clinicUpsertWithoutMedical_staffInput;
    connect?: clinicWhereUniqueInput;
    update?: XOR<
      XOR<clinicUpdateToOneWithWhereWithoutMedical_staffInput, clinicUpdateWithoutMedical_staffInput>,
      clinicUncheckedUpdateWithoutMedical_staffInput
    >;
  };

  export type userUpdateOneRequiredWithoutMedical_staffNestedInput = {
    create?: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_staffInput;
    upsert?: userUpsertWithoutMedical_staffInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMedical_staffInput, userUpdateWithoutMedical_staffInput>,
      userUncheckedUpdateWithoutMedical_staffInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutMedical_staffNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutMedical_staffInput, appointmentUncheckedCreateWithoutMedical_staffInput>
      | appointmentCreateWithoutMedical_staffInput[]
      | appointmentUncheckedCreateWithoutMedical_staffInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutMedical_staffInput
      | appointmentCreateOrConnectWithoutMedical_staffInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutMedical_staffInput
      | appointmentUpsertWithWhereUniqueWithoutMedical_staffInput[];
    createMany?: appointmentCreateManyMedical_staffInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutMedical_staffInput
      | appointmentUpdateWithWhereUniqueWithoutMedical_staffInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutMedical_staffInput
      | appointmentUpdateManyWithWhereWithoutMedical_staffInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type client_kCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<client_kCreateWithoutUserInput, client_kUncheckedCreateWithoutUserInput>
      | client_kCreateWithoutUserInput[]
      | client_kUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_kCreateOrConnectWithoutUserInput | client_kCreateOrConnectWithoutUserInput[];
    createMany?: client_kCreateManyUserInputEnvelope;
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
  };

  export type clinicCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
  };

  export type insurance_providerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
  };

  export type medical_staffCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type client_kUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<client_kCreateWithoutUserInput, client_kUncheckedCreateWithoutUserInput>
      | client_kCreateWithoutUserInput[]
      | client_kUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_kCreateOrConnectWithoutUserInput | client_kCreateOrConnectWithoutUserInput[];
    createMany?: client_kCreateManyUserInputEnvelope;
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
  };

  export type clinicUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
  };

  export type insurance_providerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
  };

  export type medical_staffUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
  };

  export type client_kUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<client_kCreateWithoutUserInput, client_kUncheckedCreateWithoutUserInput>
      | client_kCreateWithoutUserInput[]
      | client_kUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_kCreateOrConnectWithoutUserInput | client_kCreateOrConnectWithoutUserInput[];
    upsert?: client_kUpsertWithWhereUniqueWithoutUserInput | client_kUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: client_kCreateManyUserInputEnvelope;
    set?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    disconnect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    delete?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    update?: client_kUpdateWithWhereUniqueWithoutUserInput | client_kUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: client_kUpdateManyWithWhereWithoutUserInput | client_kUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: client_kScalarWhereInput | client_kScalarWhereInput[];
  };

  export type clinicUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    upsert?: clinicUpsertWithWhereUniqueWithoutUserInput | clinicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    set?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    disconnect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    delete?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    update?: clinicUpdateWithWhereUniqueWithoutUserInput | clinicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clinicUpdateManyWithWhereWithoutUserInput | clinicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clinicScalarWhereInput | clinicScalarWhereInput[];
  };

  export type insurance_providerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    set?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    disconnect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    delete?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    update?:
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | insurance_providerUpdateManyWithWhereWithoutUserInput
      | insurance_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
  };

  export type medical_staffUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    upsert?: medical_staffUpsertWithWhereUniqueWithoutUserInput | medical_staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?: medical_staffUpdateWithWhereUniqueWithoutUserInput | medical_staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: medical_staffUpdateManyWithWhereWithoutUserInput | medical_staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type client_kUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<client_kCreateWithoutUserInput, client_kUncheckedCreateWithoutUserInput>
      | client_kCreateWithoutUserInput[]
      | client_kUncheckedCreateWithoutUserInput[];
    connectOrCreate?: client_kCreateOrConnectWithoutUserInput | client_kCreateOrConnectWithoutUserInput[];
    upsert?: client_kUpsertWithWhereUniqueWithoutUserInput | client_kUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: client_kCreateManyUserInputEnvelope;
    set?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    disconnect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    delete?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    connect?: client_kWhereUniqueInput | client_kWhereUniqueInput[];
    update?: client_kUpdateWithWhereUniqueWithoutUserInput | client_kUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: client_kUpdateManyWithWhereWithoutUserInput | client_kUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: client_kScalarWhereInput | client_kScalarWhereInput[];
  };

  export type clinicUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    upsert?: clinicUpsertWithWhereUniqueWithoutUserInput | clinicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    set?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    disconnect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    delete?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    update?: clinicUpdateWithWhereUniqueWithoutUserInput | clinicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clinicUpdateManyWithWhereWithoutUserInput | clinicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clinicScalarWhereInput | clinicScalarWhereInput[];
  };

  export type insurance_providerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    set?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    disconnect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    delete?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    update?:
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | insurance_providerUpdateManyWithWhereWithoutUserInput
      | insurance_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
  };

  export type medical_staffUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>
      | medical_staffCreateWithoutUserInput[]
      | medical_staffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_staffCreateOrConnectWithoutUserInput | medical_staffCreateOrConnectWithoutUserInput[];
    upsert?: medical_staffUpsertWithWhereUniqueWithoutUserInput | medical_staffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_staffCreateManyUserInputEnvelope;
    set?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    disconnect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    delete?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    connect?: medical_staffWhereUniqueInput | medical_staffWhereUniqueInput[];
    update?: medical_staffUpdateWithWhereUniqueWithoutUserInput | medical_staffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: medical_staffUpdateManyWithWhereWithoutUserInput | medical_staffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type clinicCreateWithoutAppointmentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClinicInput;
    medical_staff?: medical_staffCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutAppointmentInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
  };

  export type medical_staffCreateWithoutAppointmentInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutMedical_staffInput;
    user: userCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    clinic_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffCreateOrConnectWithoutAppointmentInput = {
    where: medical_staffWhereUniqueInput;
    create: XOR<medical_staffCreateWithoutAppointmentInput, medical_staffUncheckedCreateWithoutAppointmentInput>;
  };

  export type insurance_providerCreateWithoutAppointmentInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kCreateNestedManyWithoutInsurance_providerInput;
    user: userCreateNestedOneWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerCreateOrConnectWithoutAppointmentInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<
      insurance_providerCreateWithoutAppointmentInput,
      insurance_providerUncheckedCreateWithoutAppointmentInput
    >;
  };

  export type client_kCreateWithoutAppointmentInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    insurance_provider: insurance_providerCreateNestedOneWithoutClient_kInput;
    user: userCreateNestedOneWithoutClient_kInput;
  };

  export type client_kUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    insurance_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_kCreateOrConnectWithoutAppointmentInput = {
    where: client_kWhereUniqueInput;
    create: XOR<client_kCreateWithoutAppointmentInput, client_kUncheckedCreateWithoutAppointmentInput>;
  };

  export type clinicUpsertWithoutAppointmentInput = {
    update: XOR<clinicUpdateWithoutAppointmentInput, clinicUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    where?: clinicWhereInput;
  };

  export type clinicUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: clinicWhereInput;
    data: XOR<clinicUpdateWithoutAppointmentInput, clinicUncheckedUpdateWithoutAppointmentInput>;
  };

  export type clinicUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type medical_staffUpsertWithoutAppointmentInput = {
    update: XOR<medical_staffUpdateWithoutAppointmentInput, medical_staffUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<medical_staffCreateWithoutAppointmentInput, medical_staffUncheckedCreateWithoutAppointmentInput>;
    where?: medical_staffWhereInput;
  };

  export type medical_staffUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: medical_staffWhereInput;
    data: XOR<medical_staffUpdateWithoutAppointmentInput, medical_staffUncheckedUpdateWithoutAppointmentInput>;
  };

  export type medical_staffUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutMedical_staffNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUpsertWithoutAppointmentInput = {
    update: XOR<
      insurance_providerUpdateWithoutAppointmentInput,
      insurance_providerUncheckedUpdateWithoutAppointmentInput
    >;
    create: XOR<
      insurance_providerCreateWithoutAppointmentInput,
      insurance_providerUncheckedCreateWithoutAppointmentInput
    >;
    where?: insurance_providerWhereInput;
  };

  export type insurance_providerUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: insurance_providerWhereInput;
    data: XOR<
      insurance_providerUpdateWithoutAppointmentInput,
      insurance_providerUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type insurance_providerUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUpdateManyWithoutInsurance_providerNestedInput;
    user?: userUpdateOneRequiredWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type client_kUpsertWithoutAppointmentInput = {
    update: XOR<client_kUpdateWithoutAppointmentInput, client_kUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<client_kCreateWithoutAppointmentInput, client_kUncheckedCreateWithoutAppointmentInput>;
    where?: client_kWhereInput;
  };

  export type client_kUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: client_kWhereInput;
    data: XOR<client_kUpdateWithoutAppointmentInput, client_kUncheckedUpdateWithoutAppointmentInput>;
  };

  export type client_kUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutClient_kNestedInput;
    user?: userUpdateOneRequiredWithoutClient_kNestedInput;
  };

  export type client_kUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateWithoutClient_kInput = {
    id?: string;
    date_time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    medical_staff: medical_staffCreateNestedOneWithoutAppointmentInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutClient_kInput = {
    id?: string;
    date_time: Date | string;
    doctor_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutClient_kInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutClient_kInput, appointmentUncheckedCreateWithoutClient_kInput>;
  };

  export type appointmentCreateManyClient_kInputEnvelope = {
    data: appointmentCreateManyClient_kInput | appointmentCreateManyClient_kInput[];
    skipDuplicates?: boolean;
  };

  export type insurance_providerCreateWithoutClient_kInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutInsurance_providerInput;
    user: userCreateNestedOneWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateWithoutClient_kInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerCreateOrConnectWithoutClient_kInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<insurance_providerCreateWithoutClient_kInput, insurance_providerUncheckedCreateWithoutClient_kInput>;
  };

  export type userCreateWithoutClient_kInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClient_kInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClient_kInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClient_kInput, userUncheckedCreateWithoutClient_kInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutClient_kInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutClient_kInput, appointmentUncheckedUpdateWithoutClient_kInput>;
    create: XOR<appointmentCreateWithoutClient_kInput, appointmentUncheckedCreateWithoutClient_kInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutClient_kInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutClient_kInput, appointmentUncheckedUpdateWithoutClient_kInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutClient_kInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutClient_kInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    date_time?: DateTimeFilter<'appointment'> | Date | string;
    patient_id?: UuidFilter<'appointment'> | string;
    doctor_id?: UuidFilter<'appointment'> | string;
    clinic_id?: UuidFilter<'appointment'> | string;
    insurance_id?: UuidFilter<'appointment'> | string;
    status?: StringFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type insurance_providerUpsertWithoutClient_kInput = {
    update: XOR<insurance_providerUpdateWithoutClient_kInput, insurance_providerUncheckedUpdateWithoutClient_kInput>;
    create: XOR<insurance_providerCreateWithoutClient_kInput, insurance_providerUncheckedCreateWithoutClient_kInput>;
    where?: insurance_providerWhereInput;
  };

  export type insurance_providerUpdateToOneWithWhereWithoutClient_kInput = {
    where?: insurance_providerWhereInput;
    data: XOR<insurance_providerUpdateWithoutClient_kInput, insurance_providerUncheckedUpdateWithoutClient_kInput>;
  };

  export type insurance_providerUpdateWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutInsurance_providerNestedInput;
    user?: userUpdateOneRequiredWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type userUpsertWithoutClient_kInput = {
    update: XOR<userUpdateWithoutClient_kInput, userUncheckedUpdateWithoutClient_kInput>;
    create: XOR<userCreateWithoutClient_kInput, userUncheckedCreateWithoutClient_kInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClient_kInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClient_kInput, userUncheckedUpdateWithoutClient_kInput>;
  };

  export type userUpdateWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutClinicInput = {
    id?: string;
    date_time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    medical_staff: medical_staffCreateNestedOneWithoutAppointmentInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutAppointmentInput;
    client_k: client_kCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutClinicInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    doctor_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentCreateManyClinicInputEnvelope = {
    data: appointmentCreateManyClinicInput | appointmentCreateManyClinicInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutClinicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClinicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClinicInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
  };

  export type medical_staffCreateWithoutClinicInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutMedical_staffInput;
    user: userCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateWithoutClinicInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutMedical_staffInput;
  };

  export type medical_staffCreateOrConnectWithoutClinicInput = {
    where: medical_staffWhereUniqueInput;
    create: XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>;
  };

  export type medical_staffCreateManyClinicInputEnvelope = {
    data: medical_staffCreateManyClinicInput | medical_staffCreateManyClinicInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>;
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutClinicInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutClinicInput>;
  };

  export type userUpsertWithoutClinicInput = {
    update: XOR<userUpdateWithoutClinicInput, userUncheckedUpdateWithoutClinicInput>;
    create: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClinicInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClinicInput, userUncheckedUpdateWithoutClinicInput>;
  };

  export type userUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type medical_staffUpsertWithWhereUniqueWithoutClinicInput = {
    where: medical_staffWhereUniqueInput;
    update: XOR<medical_staffUpdateWithoutClinicInput, medical_staffUncheckedUpdateWithoutClinicInput>;
    create: XOR<medical_staffCreateWithoutClinicInput, medical_staffUncheckedCreateWithoutClinicInput>;
  };

  export type medical_staffUpdateWithWhereUniqueWithoutClinicInput = {
    where: medical_staffWhereUniqueInput;
    data: XOR<medical_staffUpdateWithoutClinicInput, medical_staffUncheckedUpdateWithoutClinicInput>;
  };

  export type medical_staffUpdateManyWithWhereWithoutClinicInput = {
    where: medical_staffScalarWhereInput;
    data: XOR<medical_staffUpdateManyMutationInput, medical_staffUncheckedUpdateManyWithoutClinicInput>;
  };

  export type medical_staffScalarWhereInput = {
    AND?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
    OR?: medical_staffScalarWhereInput[];
    NOT?: medical_staffScalarWhereInput | medical_staffScalarWhereInput[];
    id?: UuidFilter<'medical_staff'> | string;
    specialization?: StringFilter<'medical_staff'> | string;
    experience?: IntFilter<'medical_staff'> | number;
    qualification?: StringFilter<'medical_staff'> | string;
    clinic_id?: UuidFilter<'medical_staff'> | string;
    user_id?: UuidFilter<'medical_staff'> | string;
    created_at?: DateTimeFilter<'medical_staff'> | Date | string;
    updated_at?: DateTimeFilter<'medical_staff'> | Date | string;
  };

  export type appointmentCreateWithoutInsurance_providerInput = {
    id?: string;
    date_time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    medical_staff: medical_staffCreateNestedOneWithoutAppointmentInput;
    client_k: client_kCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutInsurance_providerInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<
      appointmentCreateWithoutInsurance_providerInput,
      appointmentUncheckedCreateWithoutInsurance_providerInput
    >;
  };

  export type appointmentCreateManyInsurance_providerInputEnvelope = {
    data: appointmentCreateManyInsurance_providerInput | appointmentCreateManyInsurance_providerInput[];
    skipDuplicates?: boolean;
  };

  export type client_kCreateWithoutInsurance_providerInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutClient_kInput;
    user: userCreateNestedOneWithoutClient_kInput;
  };

  export type client_kUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClient_kInput;
  };

  export type client_kCreateOrConnectWithoutInsurance_providerInput = {
    where: client_kWhereUniqueInput;
    create: XOR<client_kCreateWithoutInsurance_providerInput, client_kUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type client_kCreateManyInsurance_providerInputEnvelope = {
    data: client_kCreateManyInsurance_providerInput | client_kCreateManyInsurance_providerInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutInsurance_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInsurance_providerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutInsurance_providerInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<
      appointmentUpdateWithoutInsurance_providerInput,
      appointmentUncheckedUpdateWithoutInsurance_providerInput
    >;
    create: XOR<
      appointmentCreateWithoutInsurance_providerInput,
      appointmentUncheckedCreateWithoutInsurance_providerInput
    >;
  };

  export type appointmentUpdateWithWhereUniqueWithoutInsurance_providerInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<
      appointmentUpdateWithoutInsurance_providerInput,
      appointmentUncheckedUpdateWithoutInsurance_providerInput
    >;
  };

  export type appointmentUpdateManyWithWhereWithoutInsurance_providerInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutInsurance_providerInput>;
  };

  export type client_kUpsertWithWhereUniqueWithoutInsurance_providerInput = {
    where: client_kWhereUniqueInput;
    update: XOR<client_kUpdateWithoutInsurance_providerInput, client_kUncheckedUpdateWithoutInsurance_providerInput>;
    create: XOR<client_kCreateWithoutInsurance_providerInput, client_kUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type client_kUpdateWithWhereUniqueWithoutInsurance_providerInput = {
    where: client_kWhereUniqueInput;
    data: XOR<client_kUpdateWithoutInsurance_providerInput, client_kUncheckedUpdateWithoutInsurance_providerInput>;
  };

  export type client_kUpdateManyWithWhereWithoutInsurance_providerInput = {
    where: client_kScalarWhereInput;
    data: XOR<client_kUpdateManyMutationInput, client_kUncheckedUpdateManyWithoutInsurance_providerInput>;
  };

  export type client_kScalarWhereInput = {
    AND?: client_kScalarWhereInput | client_kScalarWhereInput[];
    OR?: client_kScalarWhereInput[];
    NOT?: client_kScalarWhereInput | client_kScalarWhereInput[];
    id?: UuidFilter<'client_k'> | string;
    date_of_birth?: DateTimeFilter<'client_k'> | Date | string;
    gender?: StringFilter<'client_k'> | string;
    insurance_id?: UuidFilter<'client_k'> | string;
    user_id?: UuidFilter<'client_k'> | string;
    created_at?: DateTimeFilter<'client_k'> | Date | string;
    updated_at?: DateTimeFilter<'client_k'> | Date | string;
  };

  export type userUpsertWithoutInsurance_providerInput = {
    update: XOR<userUpdateWithoutInsurance_providerInput, userUncheckedUpdateWithoutInsurance_providerInput>;
    create: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInsurance_providerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInsurance_providerInput, userUncheckedUpdateWithoutInsurance_providerInput>;
  };

  export type userUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutMedical_staffInput = {
    id?: string;
    date_time: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutAppointmentInput;
    client_k: client_kCreateNestedOneWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutMedical_staffInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateOrConnectWithoutMedical_staffInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutMedical_staffInput, appointmentUncheckedCreateWithoutMedical_staffInput>;
  };

  export type appointmentCreateManyMedical_staffInputEnvelope = {
    data: appointmentCreateManyMedical_staffInput | appointmentCreateManyMedical_staffInput[];
    skipDuplicates?: boolean;
  };

  export type clinicCreateWithoutMedical_staffInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
    user: userCreateNestedOneWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutMedical_staffInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutMedical_staffInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
  };

  export type userCreateWithoutMedical_staffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMedical_staffInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    client_k?: client_kUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMedical_staffInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutMedical_staffInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutMedical_staffInput, appointmentUncheckedUpdateWithoutMedical_staffInput>;
    create: XOR<appointmentCreateWithoutMedical_staffInput, appointmentUncheckedCreateWithoutMedical_staffInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutMedical_staffInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutMedical_staffInput, appointmentUncheckedUpdateWithoutMedical_staffInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutMedical_staffInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutMedical_staffInput>;
  };

  export type clinicUpsertWithoutMedical_staffInput = {
    update: XOR<clinicUpdateWithoutMedical_staffInput, clinicUncheckedUpdateWithoutMedical_staffInput>;
    create: XOR<clinicCreateWithoutMedical_staffInput, clinicUncheckedCreateWithoutMedical_staffInput>;
    where?: clinicWhereInput;
  };

  export type clinicUpdateToOneWithWhereWithoutMedical_staffInput = {
    where?: clinicWhereInput;
    data: XOR<clinicUpdateWithoutMedical_staffInput, clinicUncheckedUpdateWithoutMedical_staffInput>;
  };

  export type clinicUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type userUpsertWithoutMedical_staffInput = {
    update: XOR<userUpdateWithoutMedical_staffInput, userUncheckedUpdateWithoutMedical_staffInput>;
    create: XOR<userCreateWithoutMedical_staffInput, userUncheckedCreateWithoutMedical_staffInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMedical_staffInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMedical_staffInput, userUncheckedUpdateWithoutMedical_staffInput>;
  };

  export type userUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    client_k?: client_kUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type client_kCreateWithoutUserInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutClient_kInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutClient_kInput;
  };

  export type client_kUncheckedCreateWithoutUserInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    insurance_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClient_kInput;
  };

  export type client_kCreateOrConnectWithoutUserInput = {
    where: client_kWhereUniqueInput;
    create: XOR<client_kCreateWithoutUserInput, client_kUncheckedCreateWithoutUserInput>;
  };

  export type client_kCreateManyUserInputEnvelope = {
    data: client_kCreateManyUserInput | client_kCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type clinicCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
    medical_staff?: medical_staffCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
    medical_staff?: medical_staffUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutUserInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>;
  };

  export type clinicCreateManyUserInputEnvelope = {
    data: clinicCreateManyUserInput | clinicCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type insurance_providerCreateWithoutUserInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutInsurance_providerInput;
    client_k?: client_kCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutInsurance_providerInput;
    client_k?: client_kUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerCreateOrConnectWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>;
  };

  export type insurance_providerCreateManyUserInputEnvelope = {
    data: insurance_providerCreateManyUserInput | insurance_providerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type medical_staffCreateWithoutUserInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentCreateNestedManyWithoutMedical_staffInput;
    clinic: clinicCreateNestedOneWithoutMedical_staffInput;
  };

  export type medical_staffUncheckedCreateWithoutUserInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    clinic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutMedical_staffInput;
  };

  export type medical_staffCreateOrConnectWithoutUserInput = {
    where: medical_staffWhereUniqueInput;
    create: XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>;
  };

  export type medical_staffCreateManyUserInputEnvelope = {
    data: medical_staffCreateManyUserInput | medical_staffCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type client_kUpsertWithWhereUniqueWithoutUserInput = {
    where: client_kWhereUniqueInput;
    update: XOR<client_kUpdateWithoutUserInput, client_kUncheckedUpdateWithoutUserInput>;
    create: XOR<client_kCreateWithoutUserInput, client_kUncheckedCreateWithoutUserInput>;
  };

  export type client_kUpdateWithWhereUniqueWithoutUserInput = {
    where: client_kWhereUniqueInput;
    data: XOR<client_kUpdateWithoutUserInput, client_kUncheckedUpdateWithoutUserInput>;
  };

  export type client_kUpdateManyWithWhereWithoutUserInput = {
    where: client_kScalarWhereInput;
    data: XOR<client_kUpdateManyMutationInput, client_kUncheckedUpdateManyWithoutUserInput>;
  };

  export type clinicUpsertWithWhereUniqueWithoutUserInput = {
    where: clinicWhereUniqueInput;
    update: XOR<clinicUpdateWithoutUserInput, clinicUncheckedUpdateWithoutUserInput>;
    create: XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>;
  };

  export type clinicUpdateWithWhereUniqueWithoutUserInput = {
    where: clinicWhereUniqueInput;
    data: XOR<clinicUpdateWithoutUserInput, clinicUncheckedUpdateWithoutUserInput>;
  };

  export type clinicUpdateManyWithWhereWithoutUserInput = {
    where: clinicScalarWhereInput;
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyWithoutUserInput>;
  };

  export type clinicScalarWhereInput = {
    AND?: clinicScalarWhereInput | clinicScalarWhereInput[];
    OR?: clinicScalarWhereInput[];
    NOT?: clinicScalarWhereInput | clinicScalarWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    address?: StringNullableFilter<'clinic'> | string | null;
    phone_number?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    user_id?: UuidFilter<'clinic'> | string;
    tenant_id?: StringFilter<'clinic'> | string;
  };

  export type insurance_providerUpsertWithWhereUniqueWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    update: XOR<insurance_providerUpdateWithoutUserInput, insurance_providerUncheckedUpdateWithoutUserInput>;
    create: XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>;
  };

  export type insurance_providerUpdateWithWhereUniqueWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    data: XOR<insurance_providerUpdateWithoutUserInput, insurance_providerUncheckedUpdateWithoutUserInput>;
  };

  export type insurance_providerUpdateManyWithWhereWithoutUserInput = {
    where: insurance_providerScalarWhereInput;
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyWithoutUserInput>;
  };

  export type insurance_providerScalarWhereInput = {
    AND?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
    OR?: insurance_providerScalarWhereInput[];
    NOT?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    name?: StringFilter<'insurance_provider'> | string;
    address?: StringFilter<'insurance_provider'> | string;
    phone_number?: StringFilter<'insurance_provider'> | string;
    email?: StringFilter<'insurance_provider'> | string;
    contact_person?: StringFilter<'insurance_provider'> | string;
    user_id?: UuidFilter<'insurance_provider'> | string;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
  };

  export type medical_staffUpsertWithWhereUniqueWithoutUserInput = {
    where: medical_staffWhereUniqueInput;
    update: XOR<medical_staffUpdateWithoutUserInput, medical_staffUncheckedUpdateWithoutUserInput>;
    create: XOR<medical_staffCreateWithoutUserInput, medical_staffUncheckedCreateWithoutUserInput>;
  };

  export type medical_staffUpdateWithWhereUniqueWithoutUserInput = {
    where: medical_staffWhereUniqueInput;
    data: XOR<medical_staffUpdateWithoutUserInput, medical_staffUncheckedUpdateWithoutUserInput>;
  };

  export type medical_staffUpdateManyWithWhereWithoutUserInput = {
    where: medical_staffScalarWhereInput;
    data: XOR<medical_staffUpdateManyMutationInput, medical_staffUncheckedUpdateManyWithoutUserInput>;
  };

  export type appointmentCreateManyClient_kInput = {
    id?: string;
    date_time: Date | string;
    doctor_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    medical_staff?: medical_staffUpdateOneRequiredWithoutAppointmentNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutClient_kInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyClinicInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    doctor_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffCreateManyClinicInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    medical_staff?: medical_staffUpdateOneRequiredWithoutAppointmentNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutAppointmentNestedInput;
    client_k?: client_kUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutMedical_staffNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyInsurance_providerInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    doctor_id: string;
    clinic_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_kCreateManyInsurance_providerInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    medical_staff?: medical_staffUpdateOneRequiredWithoutAppointmentNestedInput;
    client_k?: client_kUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    doctor_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_kUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutClient_kNestedInput;
    user?: userUpdateOneRequiredWithoutClient_kNestedInput;
  };

  export type client_kUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClient_kNestedInput;
  };

  export type client_kUncheckedUpdateManyWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyMedical_staffInput = {
    id?: string;
    date_time: Date | string;
    patient_id: string;
    clinic_id: string;
    insurance_id: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutAppointmentNestedInput;
    client_k?: client_kUpdateOneRequiredWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyWithoutMedical_staffInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type client_kCreateManyUserInput = {
    id?: string;
    date_of_birth: Date | string;
    gender: string;
    insurance_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type clinicCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone_number?: string | null;
    opening_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type insurance_providerCreateManyUserInput = {
    id?: string;
    name: string;
    address: string;
    phone_number: string;
    email: string;
    contact_person: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_staffCreateManyUserInput = {
    id?: string;
    specialization: string;
    experience: number;
    qualification: string;
    clinic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type client_kUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutClient_kNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutClient_kNestedInput;
  };

  export type client_kUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClient_kNestedInput;
  };

  export type client_kUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    insurance_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clinicUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
    medical_staff?: medical_staffUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
    medical_staff?: medical_staffUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type insurance_providerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutInsurance_providerNestedInput;
    client_k?: client_kUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutInsurance_providerNestedInput;
    client_k?: client_kUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    contact_person?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_staffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateManyWithoutMedical_staffNestedInput;
    clinic?: clinicUpdateOneRequiredWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUncheckedUpdateManyWithoutMedical_staffNestedInput;
  };

  export type medical_staffUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: StringFieldUpdateOperationsInput | string;
    experience?: IntFieldUpdateOperationsInput | number;
    qualification?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Client_kCountOutputTypeDefaultArgs instead
   */
  export type Client_kCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Client_kCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ClinicCountOutputTypeDefaultArgs instead
   */
  export type ClinicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Insurance_providerCountOutputTypeDefaultArgs instead
   */
  export type Insurance_providerCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Medical_staffCountOutputTypeDefaultArgs instead
   */
  export type Medical_staffCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Medical_staffCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use client_kDefaultArgs instead
   */
  export type client_kArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    client_kDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use clinicDefaultArgs instead
   */
  export type clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    clinicDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use insurance_providerDefaultArgs instead
   */
  export type insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    insurance_providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use medical_staffDefaultArgs instead
   */
  export type medical_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    medical_staffDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
