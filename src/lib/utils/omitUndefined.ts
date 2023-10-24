export function omitUndefined<T extends Record<string | number, unknown>>(obj: T) {
	const filtered = Object.keys(obj).reduce((acc, key) => {
		if (obj[key] !== undefined) acc[key] = obj[key]!;
		return acc;
	}, {} as Record<string | number, unknown>);
	return filtered as { [P in keyof T]?: T[P] };
}
