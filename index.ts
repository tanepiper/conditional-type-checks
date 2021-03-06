/**
 * Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
 * @param expectTrue - True if the passed in type argument resolved to true.
 */
export function assert<T extends true | false>(expectTrue: T) {
}

/**
 * Asserts at compile time that the provided type argument's type resolves to true.
 */
export type AssertTrue<T extends true> = never;

/**
 * Asserts at compile time that the provided type argument's type resolves to false.
 */
export type AssertFalse<T extends false> = never;

/**
 * Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
 */
export type Assert<T extends true | false, Expected extends T> = never;

/**
 * If the type has the specified type.
 */
export type HasType<T, U> = Extract<T, U> extends never ? false : true;

/**
 * If the type does not have the specified type.
 */
export type NotHasType<T, U> = HasType<T, U> extends true ? false : true;

/**
 * If the type is possibly null or undefined.
 */
export type IsNullableType<T> = Extract<T, null | undefined> extends never ? false : true;

/**
 * If the type is the exact type.
 * @remarks This is useful for checking if two union types match exactly.
 */
export type IsExactType<T, U> = Exclude<T, U> extends never ? Exclude<U, T> extends never ? true : false : false;

/**
 * Checks it the type is the never type.
 */
export type IsNeverType<T> = [T] extends [never] ? true : false;
