import { Collection, CollectionGetDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/gql";

export async function getCollectionByName({ name }: { name: string }): Promise<Collection | null> {
	const { collection: collections } = await executeGraphql(CollectionGetDocument, {
		name,
	});

	if (!collections) {
		return null;
	}

	return collections[0] as Collection;
}
