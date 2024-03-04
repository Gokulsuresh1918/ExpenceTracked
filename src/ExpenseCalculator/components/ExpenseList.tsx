
interface Expence {
    id: number,
    description: string,
    amount: number,
    category: string
}
interface props {
    Expence: Expence[],
    onDelete: (id: number) => void;
}

const ExpenseList = ({ Expence, onDelete }: props) => {
    if (Expence.length === 0) return null
    return (
        <table className="min-w-full border border-collapse border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b">Description</th>
                    <th className="py-2 px-4 border-b">Amount</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b"></th>
                </tr>
            </thead>
            <tbody>
                {Expence.map((expense) => (
                    <tr key={expense.id} className="border-b">
                        <td className="py-2 px-4">{expense.description}</td>
                        <td className="py-2 px-4">{expense.amount}</td>
                        <td className="py-2 px-4">{expense.category}</td>
                        <td className="py-2 px-4">
                            <button
                                onClick={() => onDelete(expense.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className="bg-gray-200">
                    <td className="py-2 px-4">Total</td>
                    <td className="py-2 px-4">
                        {Expence.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}
                    </td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                </tr>
            </tfoot>
        </table>
    );

}

export default ExpenseList