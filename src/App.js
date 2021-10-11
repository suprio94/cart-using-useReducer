import "./styles.css";
import { useReducer } from "react";

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
    quantity: 0
  },

  {
    id: 2,
    name: "laal chhadi",
    price: 500,
    quantity: 0
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
    quantity: 0
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
    quantity: 0
  }
];

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREASE":
        return {
          itemsInCart: state.itemsInCart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      case "DECREASE":
        return {
          itemsInCart: state.itemsInCart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        };
      case "REMOVE":
        return {
          itemsInCart: state.itemsInCart.filter(
            (item) => item.id !== action.payload.id
          )
        };
      default:
        return { state };
    }
  }

  function ProductListing() {
    return (
      <div>
        <h1>Products</h1>
        {state.itemsInCart.map((item) => (
          <div
            style={{
              border: "1px solid black",
              margin: "0.5rem",
              padding: "0.5rem",
              backgroundColor: "#F3F4F6",
              maxWidth: "80%",
              borderRadius: "0.4rem",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              fontSize: "1rem"
            }}
          >
            <li key={item.id}> {item.name} </li>
            <p>Rs. {item.price}</p>
            <p>Quantity - {item.quantity}</p>
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: item })}
            >
              +
            </button>
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: item })}
            >
              -
            </button>
            <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }

  const [state, dispatch] = useReducer(reducer, { itemsInCart });

  return (
    <div className="App">
      <ProductListing />
    </div>
  );
}
