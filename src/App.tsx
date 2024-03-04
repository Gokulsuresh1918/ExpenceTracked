import { useState } from "react";
import "./App.css";
import ExpenseList from "./ExpenseCalculator/components/ExpenseList";
import ExpenceFilter from "./ExpenseCalculator/components/ExpenceFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const [expence, setexpence] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utility" },
    { id: 2, description: "bbb", amount: 10, category: "utility" },
    { id: 3, description: "ccc", amount: 10, category: "utility" },
    { id: 4, description: "ddd", amount: 10, category: "utility" },
  ]);
  const visible = selectedCategory ? expence.filter((e) => e.category === selectedCategory) : expence
  return (
    <>
      <div className="mb-3 ">
        <ExpenceFilter Selection={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        Expence={visible}
        onDelete={(id) => setexpence(expence.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
