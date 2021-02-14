import CustomField from './CustomField';

const CustomForm = (props) => {
    const { sort, clip, headers } = props.settings;

    return (
        <form>
            <p>Сортировка</p>
            <CustomField fieldName="sort_sortEnabled" showName="Включено" fieldType="radio" fieldValues={sort.sortEnabled} />
            <CustomField fieldName="sort_sortOrder" showName="Порядок" fieldType="radio" fieldValues={sort.sortOrder} />
            {/* <CustomField fieldName="sort" showName="Включено" fieldType="textarea" fieldValues={[sort.sortNamePattern]} /> */}


            {/* <CustomField fieldName="clip" showName="ShowIt" fieldType="select" fieldValues={['asc', 'desc']} /> */}
        </form>
    );
}

export default CustomForm;