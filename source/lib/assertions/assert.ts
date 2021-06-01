/**
 * Check that the type of `value` is identical to type `T`.
 *
 * @param value - Value that should be identical to type `T`.
 */
// @ts-ignore
export const expectType = <T>(value: T) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Check that the type of `value` is not identical to type `T`.
 *
 * @param value - Value that should be identical to type `T`.
 */
// @ts-ignore
export const expectNotType = <T>(value: any) => {		// tslint:disable-line:no-unused
	// TODO Use a `not T` type when possible https://github.com/microsoft/TypeScript/pull/29317
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Check that the type of `value` is assignable to type `T`.
 *
 * @param value - Value that should be assignable to type `T`.
 */
// @ts-ignore
export const expectAssignable = <T>(value: T) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Check that the type of `value` is not assignable to type `T`.
 *
 * @param value - Value that should not be assignable to type `T`.
 */
// @ts-ignore
export const expectNotAssignable = <T>(value: any) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Assert the value to throw an argument error.
 *
 * @param value - Value that should be checked.
 */
// @ts-ignore
export const expectError = <T = any>(value: T) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Assert that the `expression` provided is marked as `@deprecated`.
 *
 * @param expression - Expression that should be marked as `@deprecated`.
 */
// @ts-ignore
export const expectDeprecated = (expression: any) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Assert that the `expression` provided is not marked as `@deprecated`.
 *
 * @param expression - Expression that should not be marked as `@deprecated`.
 */
// @ts-ignore
export const expectNotDeprecated = (expression: any) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};

/**
 * Will print a warning with the type of the expression passed as argument.
 *
 * @param expression - Expression whose type should be printed as a warning.
 */
// @ts-ignore
export const printType = (expression: any) => {		// tslint:disable-line:no-unused
	// Do nothing, the TypeScript compiler handles this for us
};
