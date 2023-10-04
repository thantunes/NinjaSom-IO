import { useProduct } from 'vtex.product-context'

const PdpCollection = () => {
    var { product } = useProduct()
    console.log('Product:', product)
    return (
        <div className='Custom-CollectionBadge'>
            <p>{product?.categoryTree?.[(product?.categoryTree?.length - 1)]?.name}</p>
        </div>
    )
}


export { PdpCollection }