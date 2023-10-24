export function createLookup<T, U extends string | number, Y = never>(
	arr: T[],
	keyFn: (d: T) => U | U[],
	valFn?: (d: T) => Y
) {
	type R = [Y] extends [never] ? T : Y;
	const lookup: { [key in U]?: R } = {};
	const _valFn = (valFn ?? ((d) => d)) as (d: T) => R;

	arr.forEach((d) => {
		const key = keyFn(d);
		if (typeof key === 'string' || typeof key === 'number') {
			lookup[key] = _valFn(d);
		} else {
			key.forEach((k) => (lookup[k] = _valFn(d)));
		}
	});

	return lookup;
}
