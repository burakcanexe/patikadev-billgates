import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change, moneyHesapla } from '../redux/billSlice'


function ProductsList() {

    const billMoney=useSelector(state=>state.bill.billMoney)
    const products = useSelector(state => state.bill.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(moneyHesapla())
    },[products])

    return (
        <div className='products'>
            {products.map(product => (
                <div className='product'>
                    <div className="product-img">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="product-name">
                        {product.name}
                    </div>
                    <div className="product-price">
                        ${product.price}
                    </div>
                    <div className="product-buy-sell">
                        <button className='sell'>Sell</button>
                        <input onChange={(e)=>{
                            let x = {
                                id:product.id,
                                adet:e.target.value
                            }
                            dispatch(change(x))
                        }} type='number' placeholder={product.buyying}></input>
                        {product.price<billMoney&&<button className='buy'>Buy</button>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList