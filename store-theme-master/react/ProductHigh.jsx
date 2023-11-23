import { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'

const ProductHigh = () => {
    const [DataCollection1, setDataCollection1] = useState([])
    const [DataCollection2, setDataCollection2] = useState([])

    const { product } = useProduct()
    useEffect(() => {
        fetch(`/api/catalog_system/pub/products/search/159?map=productClusterIds`)
            .then(response => response.json())
            .then(response => {
                setDataCollection1(response)
            })
            .catch(err => console.error(err));
    }, [])
    useEffect(() => {
        fetch(`/api/catalog_system/pub/products/search/160?map=productClusterIds`)
            .then(response => response.json())
            .then(response => {
                setDataCollection2(response)
            })
            .catch(err => console.error(err));
    }, [])
    DataCollection1.map((prodc) => {
        console.log(prodc.productId, product.productId)
    })
    return (<>
        {
            DataCollection1.map((prodc) => {
                return prodc.productId == product.productId ? (<img width={76} src='https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/e3c0d9bc-47fc-4cb5-b79a-0c9b0162a6e0___3cda9ff820b5c5346072073edbd38eb1.png'/>) : null
            })
        }
        {
            DataCollection2.map((prodc) => {
                return prodc.productId == product.productId ? (<img width={76} src='https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/a96e4044-d791-4851-92cf-cfbe53ed982e___91b8957d0f4b282d8336cf3e53b9701a.png'/>) : null
            })
        }
    </>)
}


export default ProductHigh