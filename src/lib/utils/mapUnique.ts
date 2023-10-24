export function mapUnique<T, U>(arr: T[], fn: (item: T) => U): U[] {
	const set = new Set<U>();
	for (const item of arr) {
		set.add(fn(item));
	}
	return Array.from(set);
}
