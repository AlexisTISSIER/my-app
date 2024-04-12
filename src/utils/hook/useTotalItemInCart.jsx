import { useState, useEffect } from 'react';

const useTotalItemsInCart = (cart) => {
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        setTotalItems(total);
    }, [cart]);

    return totalItems;
};

export default useTotalItemsInCart;