const Select = (props) => {
    const { fieldName, showName, fieldValues } = props;

    return (
        <div>
            <label htmlFor={fieldName}>{showName}</label>
            <select>
                {
                    fieldValues.map((_, i) => <option key={`${_}_${i}`} value={_}>{_}</option>)
                }
            </select>
        </div>
    );
}

export default Select;