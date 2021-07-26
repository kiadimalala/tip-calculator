import React, { useState, useEffect } from 'react'
import { FiUser } from 'react-icons/fi'
function PeopleInput({ people, setPeople, bills }) {
    const [isError, setIsError] = useState(false);
    const [bill, tip] = bills
    useEffect(() => {
        if (bill && tip && people === 0) {
            setIsError(true)
        } else {
            setIsError(false)
        }
    }, [bill, people, tip]);
    return (
        <div className="w-full flex flex-col my-6 md:my-2">
            <span className="flex justify-evenly">
                <label className="w-full text-sm mb-1 text-cyan-300 font-semibold" htmlFor="bill" >Number of poeple</label>
                {isError && <label className="w-full flex justify-end items-center text-xs mb-1 text-red font-semibold" htmlFor="bill" >Can't be zero</label>}
            </span>

            <div className="w-full relative">
                <input
                    className={!isError ? "h-10 w-full bg-cyan-100 pr-2 text-right text-cyan-400 text-xl font-bold border-2 border-transparent focus:border-cyan-400 focus:outline-none" : "h-10 w-full bg-cyan-100 pr-2 text-right text-cyan-400 text-xl font-bold border-2 border-red focus:border-cyan-400 focus:outline-none"}
                    type="number"
                    name="bill"
                    value={people}
                    onChange={({ target }) => setPeople(target.value)}
                    onFocus={() => setPeople('')}
                    placeholder="0"
                />

                <span className="absolute top-0 left-0 h-full w-10 flex justify-center items-center text-cyan-200">
                    <FiUser />
                </span>
            </div>
        </div>
    )
}

export default PeopleInput
