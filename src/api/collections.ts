import { Collection, CollectionGetDocument, CollectionsGetListDocument } from "@/gql/graphql";
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

export async function getCollections(): Promise<Collection[] | null> {
	const { collection: collections } = await executeGraphql(CollectionsGetListDocument, {});

	if (!collections) {
		return null;
	}

	return collections as Collection[];
}
