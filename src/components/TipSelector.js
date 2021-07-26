import React, { useRef, useState } from 'react'

function TipSelector({ tips, setTip, tip }) {
    const [customTip, setCustomTip] = useState('')
    const handleCustomTip = (e) => {
        if (e.key === 'Enter' && customTip) {
            setTip(parseInt(customTip))
            setCustomTip('')
        }
    }
    return (
        <div className="w-full">
            <div className="">
                <h1 className="text-sm mb-2 text-cyan-300 font-semibold">Select Tip %</h1>
                <div className="w-full grid grid-cols-2 gap-4 xl:grid-cols-3">
                    {
                        tips.map((item, index) =>
                            <button
                                key={index}
                                className={tip !== item ? "w-full h-10 flex justify-center items-center bg-cyan-400 text-cyan-50 rounded-lg text-xl font-semibold" : "w-full h-10 flex justify-center items-center rounded-lg text-xl font-semibold text-cyan-400 bg-cyan"}
                                htmlFor="first"
                                onClick={({ target }) => setTip(item)}>
                                {item}%
                            </button>)
                    }

                    <input
                        className="w-full h-10 bg-cyan-100 rounded-lg text-xl font-semibold text-center uppercase focus:outline-none"
                        type="number"
                        placeholder="custom"
                        value={customTip}
                        onChange={({ target }) => setCustomTip(target.value)}
                        onKeyDown={(e) => handleCustomTip(e)}
                    />



                </div>
            </div>
        </div >
    )
}

export default TipSelector
