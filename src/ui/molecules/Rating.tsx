import { StarIcon } from "lucide-react";

function Star({ filled, size }: { filled: boolean; size?: "small" | "default" }) {
	return (
		<span className="inline-block">
			{filled ? (
				<StarIcon className="fill-sky-400 stroke-sky-200" width={size === "small" ? 16 : 24} />
			) : (
				<StarIcon className="fill-gray-400 stroke-gray-200" width={size === "small" ? 16 : 24} />
			)}
		</span>
	);
}

export function Rating({
	id,
	value,
	size,
}: {
	id: string;
	value: number;
	size?: "small" | "default";
}) {
	const MAX_RATING = 5;

	return (
		<div className="flex">
			{Array.from({ length: value })
				.fill(undefined)
				.map((_, idx) => (
					<Star key={`star-filled-${id}-${idx}`} filled size={size} />
				))}
			{Array.from({ length: MAX_RATING - value })
				.fill(undefined)
				.map((_, idx) => (
					<Star key={`star-filled-${id}-${idx}`} filled={false} size={size} />
				))}
		</div>
	);
}
