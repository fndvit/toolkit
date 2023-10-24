export function slugify(text: string, maxLen = 40) {
	return (text || '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.slice(0, maxLen);
}
