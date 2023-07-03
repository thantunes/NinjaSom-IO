import React, { FC } from 'react'
import { useProduct } from 'vtex.product-context'


const PriceDisc = () => {

    const { product } = useProduct()
    const productPrice = product.items[0].sellers[0].commertialOffer.Price
    const ValCalc = (productPrice - (productPrice * 0.08)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    console.log('Este é o produto', product)
    return (
        <span className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', marginLeft: '33px', fontStyle: 'normal', fontFamily:'"Montserrat",sans-serif' }}>{ValCalc}</span></span>
    );
}

export { PriceDisc }