export const isTruthy = <T>(x: T): x is NonNullable<T> => !!x;
export const isFunction = (x: unknown): x is (...args: unknown[]) => unknown =>
	typeof x === 'function';
