import { getCollectionByName } from "@/api/collections"
import { ProductList } from "@/ui/organisms/ProductList"

type CollectionProps = {
  name: string
}

async function Collection({name} : CollectionProps) {
  const collection = await getCollectionByName({name})

  return (
    <div>
      <h2 className="text-2xl mb-4">{name}</h2>
      <div>
        {collection?.product ? <ProductList products={collection.product} /> : <span>No items</span>}
      </div>
    </div>
  )
}

export default Collection