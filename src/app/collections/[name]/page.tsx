import Collection from "@/ui/organisms/Collection";

type CollectionPageProps = {
	params: {
		name: string;
	};
};

export default function CollectionPage({ params }: CollectionPageProps) {
	const slugToName = (slug: string): string => {
		let result = slug.replaceAll("-", " ");
		result = result.charAt(0).toUpperCase() + result.slice(1);
		return result;
	};

	return (
		<main className="column-wrapper">
			<Collection name={slugToName(params.name)} />
		</main>
	);
}
