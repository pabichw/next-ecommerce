export function getUrl(): string | undefined {
	return typeof window !== "undefined" ? window.location.href : undefined;
}
