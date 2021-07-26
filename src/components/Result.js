import React from 'react'

function Result({ operation }) {
    const [tipAmount, total, setBill, setPeople, setTotal, setTipAmount, setTip] = operation
    const handleReset = (e) => {
        e.preventDefault()
        setBill(0)
        setPeople(0)
        setTotal(0)
        setTipAmount(0)
        setTip(0)
    }
    return (
        <div className="w-full bg-cyan-400 rounded-lg flex flex-col p-4 md:h-full xl:h-full">
            <div className="flex justify-evenly md:h-1/5 xl:h-1/5">
                <span className="my-2 w-full flex-col justify-center">
                    <h1 className="text-sm font-semibold text-cyan-50">Tip amount</h1>
                    <h2 className="text-xs text-cyan-200">/ person</h2>
                </span>
                <span className="w-full flex items-center justify-end">
                    <h1 className="text-2xl font-semibold text-cyan md:text-3xl xl:text-4xl">${tipAmount}</h1>
                </span>
            </div>
            <div className="flex justify-evenly md:h-1/5 xl:h-1/5">
                <span className="my-2 w-full flex-col justify-center">
                    <h1 className="text-sm font-semibold text-cyan-50">Total</h1>
                    <h2 className="text-xs text-cyan-200">/ person</h2>
                </span>
                <span className="w-full flex items-center justify-end">
                    <h1 className="text-2xl font-semibold text-cyan md:text-3xl xl:text-4xl">${total}</h1>
                </span>
            </div>
            <div className="md:h-4/5 md:flex md:items-end xl:h-4/5 xl:flex xl:items-end">
                <button className="w-full h-10 bg-cyan text-cyan-400 text-xl mt-2 font-bold "
                    onClick={(e) => handleReset(e)}
                >RESET</button>
            </div>

        </div >
    )
}

export default Result
