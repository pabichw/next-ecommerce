import { getCollections } from "@/api/collections";
import Collection from "@/ui/organisms/Collection";

export default async function CollectionPage() {
	const result = await getCollections();

	return (
		<main className="column-wrapper">
			{result?.map((collection, idx) => (
				<Collection key={`collection-${idx}`} name={collection.name} />
			))}
		</main>
	);
}
