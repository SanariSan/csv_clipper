import { useState, useEffect, useRef } from 'react';
import ApiPath from './../ApiPath.js';
import ApiGetReq from '../scripts/ApiGetReq.js';
import ApiPostReq from '../scripts/ApiPostReq.js';
import CustomField from './CustomField.js';
import SettingsContext from './SettingsContext';


const Settings = (props) => {
    const [settings, setSettings] = useState(null);
    const mounted = useRef(true);

    useEffect(() => () => {
        mounted.current = false;
    }, []);

    useEffect(() => {
        if (mounted.current) {
            ApiGetReq(ApiPath.getSettingsUrl)
                .then(res => setTimeout(() => mounted.current ? setSettings(res) : null, 700))
                .catch(console.log)
        }
    }, []);

    const sendSettings = () => {
        if (mounted.current) {
            ApiPostReq(ApiPath.setSettingsUrl, settings)
                .then(res => setTimeout(() => mounted.current && res !== null ? alert('Saved') : alert('Error saving settings'), 700))
                .catch(console.log)
        }
    }

    return (
        <div>

            <button onClick={sendSettings}>Save settings</button>

            <pre>
                {
                    settings !== null ?
                        JSON.stringify(settings, null, '\t') : 'Fetching settings...'
                }
            </pre>

        </div>
    );
};

export default Settings;

// SettingsContext.setContext = () => {

// };
// SettingsContext.setValue = () => {

// };


// {
//     settings !== null ?
//         <SettingsContext.Provider value={settings}>

//             <form>
//                 <p>Сортировка</p>
//                 <CustomField settings={settings} fieldName="sort_sortEnabled" showName="Включено" fieldType="radio" fieldValues={sort.sortEnabled} />
//                 <CustomField settings={settings} fieldName="sort_sortOrder" showName="Порядок" fieldType="radio" fieldValues={sort.sortOrder} />
//                 {/* <CustomField fieldName="sort" showName="Включено" fieldType="textarea" fieldValues={[sort.sortNamePattern]} /> */}
//             </form>

//             {/* <CustomForm settings={settings} /> */}

//         </SettingsContext.Provider > : null
// }