import { useState, useEffect } from 'react';

const Radio = (props) => {
    const { fieldName, showName, fieldValues } = props;
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(fieldValues.find(_ => _.active));
    }, [fieldValues])

    const rbChanged = (evt) => {
        const newValue = evt.target.value;
        setSelected(() => fieldValues.filter(_ => _.value === newValue));
    }

    return (
        <div>
            <label>{showName}</label>
            {
                fieldValues.map((_, i) => (
                    <div key={`${_.value}_${i}`}>
                        <input
                            type='radio'
                            name={fieldName}
                            value={_.value}
                            checked={selected.active === _.active}
                            onChange={rbChanged}
                        />
                        <label>{`${_.value}`}</label>
                    </div>
                ))
            }
        </div>
    );
}

export default Radio;