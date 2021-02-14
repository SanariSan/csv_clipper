import { createContext } from 'react';

const SettingsContext = createContext({
    settings: null,
    setContext: () => { },
    setValue: () => { }
});

export default SettingsContext;