import { useCart } from '../context/Cart';

export const Cart = () => {
    const cart = useCart();

    const total = cart.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return (
        <div className='cart'>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) => (
                    <li key={item.price}>{item.name} - ${item.price}</li>
                ))
            }

            <h5>Total Bill: ${total}</h5>
        </div>
    )
}

