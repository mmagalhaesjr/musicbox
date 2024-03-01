import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }){
 
  const [homeComponent, setHomeComponent] = useState('');

  return (
    <HomeContext.Provider value={{ homeComponent, setHomeComponent }}>
      {children}
    </HomeContext.Provider>
  );
}


HomeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};


