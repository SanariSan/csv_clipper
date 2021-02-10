import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomField = ({ fieldName, showName, fieldType, fieldValues }) => {
    return (
        <div>
            {
                () => {
                    if (fieldType === "select") {
                        return (
                            <div>
                                <label htmlFor={fieldName}>{showName}</label>
                                <Field name={fieldName} as={fieldType} >
                                    {
                                        () => {
                                            if (fieldValues && fieldValues.length !== 0) {
                                                return fieldValues.map(_ => <option value={_}>{_}</option>)
                                            }
                                        }
                                    }
                                </Field>
                            </div>)
                    }
                    else if (fieldType === "radio") {
                        if (fieldValues && fieldValues.length !== 0) {
                            return fieldValues.map(_ => (
                                <label>
                                    {showName}
                                    <Field name={fieldName} type={fieldType} value={_} />
                                </label>
                            ))
                        }
                    }
                    else if (fieldType === "textarea") {
                        return <Field name={fieldName} as={fieldType} />
                    }
                }
            }
        </div>
    )
}

export default CustomField;