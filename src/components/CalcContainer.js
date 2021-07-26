import React, { useState } from 'react'
import BillInput from './BillInput'
import TipSelector from './TipSelector'
import { useEffect } from 'react'
import PeopleInput from './PeopleInput'
import Result from './Result'
function CalcContainer() {
    const tips = [5, 10, 15, 25, 50]
    const [tip, setTip] = useState(0)
    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
       
        if (bill && people && tip) {
            const tempTotal = ((bill * tip) / 100) / people
            setTipAmount(parseFloat(tempTotal.toFixed(2)));
            const tempTotalTip = bill / people + tempTotal
            setTotal(tempTotalTip.toFixed(2))
        }
    }, [bill, people, tip, tipAmount]);
    return (
        <div className="bg-cyan-50 p-8 rounded-t-3xl md:w-3/4 md:h-4/6 md:rounded-lg md:justify-evenly md:m-auto md:flex xl:w-2/4 xl:h-3/5 xl:m-auto xl:flex xl:rounded-3xl">
            <section className="md:w-full md:p-1 xl:w-full xl:p-4">
                <div className="md:h full xl:h-full">
                    <BillInput bill={bill} setBill={setBill} />
                    <TipSelector tips={tips} setTip={setTip} tip={tip} />
                    <PeopleInput people={people} setPeople={setPeople} bills={[bill, tip]} />
                </div>

            </section>
            <section className="md:w-full md:p-1 xl:w-full xl:p-4">
                <Result operation={[tipAmount, total, setBill, setPeople, setTotal, setTipAmount, setTip]} />
            </section>

        </div>
    )
}

export default CalcContainer
