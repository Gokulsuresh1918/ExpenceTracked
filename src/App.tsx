
import { useState } from 'react'
import './App.css'
import ExpenseList from './ExpenseCalculator/components/ExpenseList'

function App() {
  const [expence,setexpence] = useState([
  { id: 1, description: 'aaa', amount: 10, category:"utility"},
  { id: 2, description: 'bbb', amount: 10, category:"utility"},
  { id: 3, description: 'ccc', amount: 10, category:"utility"},
  { id: 4, description: 'ddd', amount: 10, category:"utility"},
])
  return (
    <>
      <ExpenseList Expence={expence} onDelete={(id) =>setexpence(expence.filter((e)=>e.id!=id))
      } />
    </>
  )
}

export default App
