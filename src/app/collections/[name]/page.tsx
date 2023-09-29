import { Metadata } from "next";
import Collection from "@/ui/organisms/Collection";
import { slugToName } from "@/utils/collections";

type CollectionPageProps = {
	params: {
		name: string;
	};
};

export function generateMetadata({ params }: { params: { name: string } }): Metadata {
	const slugToName = (slug: string): string => {
		let result = slug.replaceAll("-", " ");
		result = result.charAt(0).toUpperCase() + result.slice(1);
		return result;
	};

	return {
		title: slugToName(params.name),
		openGraph: {
			title: slugToName(params.name),
		},
	};
}

export default function CollectionPage({ params }: CollectionPageProps) {
	return (
		<main className="column-wrapper">
			<Collection name={slugToName(params.name)} />
		</main>
	);
}
