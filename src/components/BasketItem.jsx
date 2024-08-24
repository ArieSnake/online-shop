export const BasketItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    const { name, price, count } = item
    return (
        <tr>
            <td>{name}</td>
            <td>{price} USD</td>
            <td>{count}</td>
            <td>{price * count} USD</td>
            <td>
                <button onClick={onIncrease} className="btn btn-success plus">+</button>
                <button onClick={onDecrease} className="btn btn-warning minus">-</button>
                <button onClick={onRemove} className="btn btn-danger remove">Remove</button>
            </td>
        </tr>
    )
}
