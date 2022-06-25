import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const money = useSelector(state=>state.bill.billMoney)
    return (
        <>
            <header>
                <img src='https://neal.fun/spend/billgates.jpg' alt="Bill Gates" />
                <h1>Spend Bill Gates' Money</h1>
            </header>
            <div className="money">
                ${money}
            </div>
        </>
    )
}

export default Header