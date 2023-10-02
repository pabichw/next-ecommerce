import { StarIcon } from "lucide-react";

function Star({ filled }: { filled: boolean }) {
	return (
		<span className="inline-block">
			{filled ? (
				<StarIcon className="fill-sky-400 stroke-sky-200" />
			) : (
				<StarIcon className="fill-gray-400 stroke-gray-200" />
			)}
		</span>
	);
}

export function Rating({ id, value }: { id: string; value: number }) {
	const MAX_RATING = 5;
	return (
		<div className="flex">
			{Array.from({ length: value })
				.fill(undefined)
				.map((_, idx) => (
					<Star key={`star-filled-${id}-${idx}`} filled />
				))}
			{Array.from({ length: MAX_RATING - value })
				.fill(undefined)
				.map((_, idx) => (
					<Star key={`star-filled-${id}-${idx}`} filled={false} />
				))}
		</div>
	);
}
