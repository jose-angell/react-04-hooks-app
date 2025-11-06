
export const CounterStep = () => {
const 

  return (
    <div>
        

        <p className="font-medium mb-2">Cambiar Paso (Step):</p>
                <input
                    type="number"
                    value={tempStep}
                    onChange={(e) => setTempStep(Number(e.target.value))}
                    className="border p-2 w-20 text-center mr-3"
                    min="1"
                />
    </div>
  )
}
