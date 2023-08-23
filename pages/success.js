import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from 'react-icons/bs';
import {runFireWorks} from "lib/utils";

import { useStateContext } from "Context/StateContext";

const success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();


    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks()
    }, [])
    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for you order!</h2>
                <p className="email-msg">Check your email inbox for the reciept.</p>
                <p className="description">
                    If you have any question, please email
                    <a className="email" href="emailto: uk352351@gmail.com">uk352351@gmail.com</a>
                </p>
                <Link href='/'>
                    <button type="button" width="300px" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default success;