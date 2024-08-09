const Card = ({ total, items, removeItems }) => {
    return (
      <div>
        <ol className="list-group list-group-numbered">
          {items.map((item) => (
            <li key={item.name} className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.name}</div>
                {item.price}
              </div>
              <button onClick={() => removeItems(item)} className="badge cardBadge"  disabled={item.stockout} >
                x
              </button>
            </li>
          ))}
        </ol>
        <h5 className="mt-2">Total: $ {total.toFixed(2)}</h5>
      </div>
    );
  };
  
  export default Card;
  