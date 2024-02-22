import { useState, useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
import data2 from './components/mock/160.json'
import data1 from './components/mock/159.json'

const ProductHigh = () => {
    const [DataCollection1, setDataCollection1] = useState([])
    const [DataCollection2, setDataCollection2] = useState([])

    const { product } = useProduct()
    useEffect(() => {
        setDataCollection1(data1.Data)
    }, [])
    useEffect(() => {
        setDataCollection2(data2.Data)
    }, [])
    // DataCollection1.map((prodc) => {
    //     console.log({data:1, id:prodc.productId, ids:product.productId})
    // })
    // DataCollection2.map((prodc) => {
    //     console.log({data:2, id:prodc.productId, ids:product.productId})
    // })
    return (<>
        {
            DataCollection1.map((prodc) => {
                return `${prodc.ProductId}` == product.productId ? (<img width={76} src='https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/e3c0d9bc-47fc-4cb5-b79a-0c9b0162a6e0___3cda9ff820b5c5346072073edbd38eb1.png' />) : null
            })
        }
        {
            DataCollection2.map((prodc) => {
                return `${prodc.ProductId}` == product.productId ? (<img width={76} src='https://ninjasom.vtexassets.com/assets/vtex.file-manager-graphql/images/fd9c1d5b-465f-4efd-af40-5337a73f2cdf___502eb3b25cd243e8995a1d2a66b5eefa.png' />) : null
            })
        }
    </>)
}


export default ProductHigh