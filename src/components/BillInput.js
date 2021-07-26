import React from 'react'
import { FiDollarSign } from 'react-icons/fi'
function BillInput({ bill, setBill }) {
    return (
        <div className="w-full flex flex-col mb-6 md:mb-2 ad">
            <label className="text-sm mb-1 text-cyan-300 font-semibold" htmlFor="bill" >Bill</label>
            <div className="w-full relative">
                <input
                    value={bill}
                    className="h-10 w-full bg-cyan-100 pr-2 text-right text-cyan-300 text-xl font-bold border-2 border-transparent focus:border-cyan-400 focus:outline-none"
                    type="number"
                    name="bill"
                    placeholder="0"
                    onChange={({ target }) => setBill((target.value))}
                    onFocus={() => setBill('')}
                />
                <span className="absolute top-0 left-0 h-full w-10 flex justify-center items-center text-cyan-200">
                    <FiDollarSign />
                </span>
            </div>

        </div>
    )
}

export default BillInput
