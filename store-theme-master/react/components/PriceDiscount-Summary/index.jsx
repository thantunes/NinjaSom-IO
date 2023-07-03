import React, { FC } from 'react'
import { useProduct } from 'vtex.product-context'


const PriceDisc = () => {

    const { product } = useProduct()
    // const productPrice = product.items[0].sellers.length > 1 ?  product.items[0].sellers[0].commertialOffer.Price > product.items[0].sellers[1].commertialOffer.Price ? product.items[0].sellers[1].commertialOffer.Price : product.items[0].sellers[0].commertialOffer.Price == 0 ? product.items[0].sellers[1].commertialOffer.Price : product.items[0].sellers[0].commertialOffer.Price : product.items[0].sellers[0].commertialOffer.Price
    const productPrice = product.sku.seller.commertialOffer.Price
    
    const ValCalc = (productPrice - (productPrice * 0.08)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    console.log('Este é o produto', product)
    return (
        <span style={{display:'flex',flexDirection:'row',alignItems:'baseline',gap:'5px',justifyContent:'center'}} className='vtex-product-price-1-x-sellingPrice'><span style={{ fontSize: '24px', fontWeight: '700', lineHeight: '28px', color: '#010449', fontStyle: 'normal', fontFamily:'"Montserrat",sans-serif' }}>{ValCalc}</span></span>
    );
}

export { PriceDisc }