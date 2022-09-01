
import React from 'react';

export default React.createContext({
    userData: {},
    projects: [],
    login: (loginBody, mainPageProps) => { },
    createProject: (projectBody) => {},
    supportProject: (supportBody) => {}
});