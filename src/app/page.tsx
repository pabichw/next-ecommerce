import Collection from "@/ui/organisms/Collection";

export default function Home() {
	return (
		<main className="column-wrapper">
			<div data-testid="related-products">
				<Collection name="Suggested products collection" />
			</div>
		</main>
	);
}
