import { useState } from "react";
import "./App.css";
import ExpenseList from "./ExpenseCalculator/components/ExpenseList";
import ExpenceFilter from "./ExpenseCalculator/components/ExpenceFilter";
import ExpenceForm from "./ExpenseCalculator/components/ExpenceForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expence, setexpence] = useState([
    { id: 1, description: "Demo", amount: 10, category: "utility" },

  ]);
  const visible = selectedCategory
    ? expence.filter((e) => e.category === selectedCategory)
    : expence;
  return (
    <>
      <ExpenceForm
        onSubmit={newexpence =>
          setexpence([...expence, { ...newexpence, id: expence.length + 1 }])
        }
      />
      <div className="mb-3 ">
        <ExpenceFilter
          Selection={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        Expence={visible}
        onDelete={(id) => setexpence(expence.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
