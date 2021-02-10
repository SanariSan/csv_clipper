import { useState, useEffect } from 'react';
import CustomField from './CustomField';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomForm = (props) => {
    return (
        <div>
            <Formik>
                <Form>
                    <CustomField fieldName="clip" showName="ShowIt" fieldType="radio" fieldValues={[true, false]} />
                </Form>
            </Formik>
        </div>
    );
}

export default CustomForm;