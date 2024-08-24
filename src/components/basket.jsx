import { BasketItem } from './BasketItem'

export const Basket = ({ cart, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className="col-md-5">
            <h3>items</h3>
            <table className="table table-dark table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Subtotal</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <BasketItem
                            key={item.id}
                            item={item}
                            onIncrease={() => onIncrease(item.id)}
                            onDecrease={() => onDecrease(item.id)}
                            onRemove={() => onRemove(item.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
