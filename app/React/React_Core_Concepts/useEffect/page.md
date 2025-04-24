# 4. useEffect

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
