import { useState } from "preact/hooks";

export default function List() {
  const [groceryList, setGroceryList] = useState<string[]>([""]);
  const [input, setInput] = useState<any>("");

  function addToList(item: any) {
    setGroceryList((prev: any) => [...prev, item]);
    setInput("");
  }

  function removeFromList(item: any) {
    setGroceryList((prev: any) =>
      prev.filter((ingredient: any) => ingredient != item),
    );
  }

  return (
    <div>
      <ul>
        {groceryList.map((list, key) => (
          <li key={key}>
            <button onClick={() => removeFromList(list)}>remove</button>
            {list}
          </li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      ></input>
      <button onClick={() => addToList(input)}>Add</button>
    </div>
  );
}
