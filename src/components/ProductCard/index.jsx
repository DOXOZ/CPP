import "./index.css"

export function ProductCard(props) {
    const { image, title, price, category } = props.data;

    return (
        <div className="ProductCard">
            <img width="200px" src={image} alt={title} />
            <div className="ProductCard-category">{category}</div>
            <h4>{title}</h4>
            <div className="ProductCard-pricebutton">
            <div className="ProductCard-price">${price}</div>
            <button onClick={() => props.addToCart(props.data)} className="ProductCard-button">Add to cart</button>
            </div>
        </div>
    );
}

