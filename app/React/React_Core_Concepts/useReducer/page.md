# 5. useReducer

**useReducer** হলো একটি hook যা complex state management বা multiple state value ব্যবস্থাপনার জন্য ব্যবহার করা হয়। এটি Redux-এর মতো reducer pattern ব্যবহার করে।

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

➡️ এখানে `useReducer` একটি state এবং একটি dispatch function প্রদান করে, যা reducer function ব্যবহার করে state আপডেট করে।
