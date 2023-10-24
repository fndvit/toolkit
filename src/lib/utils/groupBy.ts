/* eslint-disable @typescript-eslint/no-explicit-any */

// prettier-ignore
type GroupBy = <T, KeyFn extends (i: T) => string | number, MapFn extends undefined | ((i: T) => any) = undefined>(
  arr: T[],
  keyFn: KeyFn,
  mapFn?: MapFn
) => { [KV in ReturnType<KeyFn>]?: (MapFn extends undefined ? T : ReturnType<NonNullable<MapFn>>)[] };

export const groupBy: GroupBy = (arr, keyFn, mapFn) => {
	return arr.reduce((acc, item) => {
		const key = keyFn(item);
		acc[key] = acc[key] || [];
		acc[key].push(mapFn ? mapFn(item) : item);
		return acc;
	}, {} as any);
};

export function range(start: number, end: number) {
	const length = Math.abs(end - start);
	if (length === 0) return [];
	const step = start < end ? 1 : -1;
	return Array.from({ length }, (_, i) => start + i * step);
}

export function slugify(text: string, maxLen = 40) {
	return (text || '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.slice(0, maxLen);
}

export function getXRandItems<T>(items: T[], x: number): T[] {
	const _items = [...items];
	const result: T[] = [];
	for (let i = 0; i < Math.min(x, items.length); i++) {
		const index = Math.floor(Math.random() * _items.length);
		result.push(_items[index]);
		_items.splice(index, 1);
	}
	return result;
}

export function omitUndefined<T extends Record<string | number, unknown>>(obj: T) {
	const filtered = Object.keys(obj).reduce((acc, key) => {
		if (obj[key] !== undefined) acc[key] = obj[key]!;
		return acc;
	}, {} as Record<string | number, unknown>);
	return filtered as { [P in keyof T]?: T[P] };
}

export const isTruthy = <T>(x: T): x is NonNullable<T> => !!x;
export const isFunction = (x: unknown): x is (...args: unknown[]) => unknown =>
	typeof x === 'function';

export const debounce = <T extends any[]>(fn: (...args: T) => void, delay: number) => {
	let timeout: number | NodeJS.Timeout;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const ret = (..._: T) => {
		clearTimeout(timeout);
		timeout = setTimeout(fn, delay);
	};
	ret.cancel = () => clearTimeout(timeout);
	return ret;
};

// ************************
//     TypeScript util
// ************************

export type ExpandRecursively<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: ExpandRecursively<O[K]> }
		: never
	: T;
export type Unpacked<T> = T extends (infer U)[] ? U : T;
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
export type Modify<T, R> = Expand<Omit<T, keyof R> & R>;

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

type Cast<A, B> = A extends B ? A : B;

type Narrowable = string | number | boolean | bigint;

export type Exact<A, W = unknown> = W extends unknown
	? A extends Narrowable
		? Cast<A, W>
		: Cast<
				{ [K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never },
				{ [K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K] }
		  >
	: never;

export type ExcludeKeysWithTypeOf<T, V> = {
	[K in keyof T]: Exclude<T[K], undefined> extends V ? never : K;
}[keyof T];

export type Without<V, T> = Pick<T, ExcludeKeysWithTypeOf<T, V>>;

// ****************************
//      Merge objects
// ****************************

type CommonKeys<T extends object> = keyof T;
type AllKeys<T> = T extends any ? keyof T : never;
type Subtract<A, C> = A extends C ? never : A;
type NonCommonKeys<T extends object> = Subtract<AllKeys<T>, CommonKeys<T>>;
type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any } ? T[K] : undefined;
export type Merge<T extends object> = {
	[k in CommonKeys<T>]: PickTypeOf<T, k>;
} & {
	[k in NonCommonKeys<T>]?: PickTypeOf<T, k>;
};
type PickTypeOf<T, K extends string | number | symbol> = K extends AllKeys<T>
	? PickType<T, K>
	: never;
