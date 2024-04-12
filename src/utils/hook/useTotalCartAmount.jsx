import { useState, useEffect } from 'react';

const useTotalCartAmount = (cart) => {
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotalAmount(total);
    }, [cart]);

    return totalAmount;
};

export default useTotalCartAmount;