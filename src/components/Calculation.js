function Calculation({
    onFirstNumberChange,
    onSecondNumberChange,
    onOperationChange,
}) {  
    return(
        <p>
            <input type="number" onChange={onFirstNumberChange}/>
            <select onChange={onOperationChange}>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="divide">/</option>
                <option value="multiply">*</option>
            </select>
            <input type="number" onChange={onSecondNumberChange}/>
        </p>
        
    );
}

export default Calculation;