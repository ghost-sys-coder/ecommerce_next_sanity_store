import React from "react";
import styled from "styled-components";
import Link from "next/link";


const Cancelled = () => {
    return (
        <div className="cancelled-wrapper">
            <h1>Order Cancelled</h1>
            <Link href={'/'}>Continue Shopping</Link>
        </div>
    )
}

export default Cancelled;