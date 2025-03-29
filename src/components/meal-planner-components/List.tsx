import { useState } from "preact/hooks";

export default function List() {
  if (!localStorage.getItem("grocery-list)")) {
    localStorage.setItem("grocery-list", JSON.stringify([]));
  }
  const [groceryList, setGroceryList] = useState<string[]>([""]);
  const [input, setInput] = useState<any>("");

  function addToList(item: any) {
    try {
      let groceryList: string | null = JSON.parse(
        localStorage.getItem("grocery-list"),
      );
      console.log(groceryList);
      groceryList.append(item);
      localStorage.setItem("grocery-list", JSON.stringify(groceryList));
    } catch (err) {
      console.log(err);
    }
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
      <div class="border-2 rounded-lg border-black">
        <input
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
        ></input>
        <button onClick={() => addToList(input)}>Add</button>
      </div>
      <ul>
        {groceryList.map((list, key) => (
          <li key={key}>
            <button onClick={() => removeFromList(list)}>remove</button>
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
}
