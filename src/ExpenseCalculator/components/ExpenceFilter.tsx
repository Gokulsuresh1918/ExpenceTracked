import { useState } from "react";

interface props {
    Selection: (category: string) => void;
}

const ExpenceFilter = ({ Selection }: props) => {
    return (
        <select
            onChange={(event) => Selection(event.target.value)}
            className="p-2 border rounded-md"
        >
            <option value="" className="text-gray-500">All Category</option>
            <option value="Grocery" className="text-green-500">Grocery</option>
            <option value="utility" className="text-blue-500">utility</option>
            <option value="Entertainment" className="text-purple-500">Entertainment</option>
        </select>
    );
};

export default ExpenceFilter;
