import Select from './formFields/Select';
import Radio from './formFields/Radio';
import SettingsContext from './SettingsContext';


const CustomField = (props) => {
    const { sort, clip, headers } = props.settings;
    const { fieldType, fieldName, showName, fieldValues } = props;

    if (fieldType === "select") {
        return <Select fieldName={fieldName} showName={showName} fieldValues={fieldValues} />
    }
    else if (fieldType === "radio") {
        return <Radio fieldName={fieldName} showName={showName} fieldValues={fieldValues} />
    }
    // else if (fieldType === "textarea") {
    //     return <input name={fieldName} type="textarea" value={fieldValues[0]} />
    // }

}

export default CustomField;