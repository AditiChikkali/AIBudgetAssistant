import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState<string | null>(null);

  interface ApiResponse {
    category: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description || amount === "") return;

    try {
      const response = await axios.post<ApiResponse>("http://127.0.0.1:8000/categorize", {
        description,
        amount: Number(amount),
      });
      setCategory(response.data.category);
    } catch (error) {
      console.error("Error categorizing transaction:", error);
      setCategory("Error categorizing. Try again.");
    }
  };

  return (
    <div className="container">
      <h1>AI Budget Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          required
        />
        <button type="submit">Categorize</button>
      </form>
      {category && <p>Predicted Category: <strong>{category}</strong></p>}
    </div>
  );
}
