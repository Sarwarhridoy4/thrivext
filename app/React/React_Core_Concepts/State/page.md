# 3. State

**State** হলো একটি Component-এর নিজস্ব তথ্য যা পরিবর্তিত হতে পারে এবং সেই পরিবর্তনের উপর ভিত্তি করে Component রেন্ডার হয়।

React-এ `useState` হুক ব্যবহার করে state তৈরি করা হয়।

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

➡️ এখানে `count` হলো state, এবং `setCount` হলো সেটিকে আপডেট করার function।

## **4. useEffect**

**useEffect** হুকটি Component রেন্ডার হওয়ার পর বা নির্দিষ্ট state বা prop পরিবর্তিত হলে কোনো কাজ করতে ব্যবহৃত হয়।

এটি মূলত **side effects** পরিচালনার জন্য ব্যবহৃত হয় (যেমন API call, event listener, timer)।

```jsx
import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []); // খালি array মানে একবারই চলবে return user ? <p>{user.name}</p> : <p>Loading...</p>;
}
```
