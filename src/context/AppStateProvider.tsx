import React, { useEffect, useState, useRef, ReactChild, ReactChildren } from "react";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

let oldMapOfInstancesStringified: any;

const AppStateProvider = ({ children, containers = {} }: any) => {
    const [isInitialised, setInitialised] = useState<Boolean>(false);
    const mapOfInstances = useRef<any>({});
    const [updateCount, setUpdateCount] = useState(0);

    const getter = (id: any) => {
        return mapOfInstances.current[id] || {};
    };

    Object.keys(containers).forEach(k => {
        mapOfInstances.current[k] = containers[k](getter);
    });

    useEffect(() => {
        setInitialised(true);
    }, []);

    const mapOfInstancesSF = JSON.stringify(mapOfInstances.current);

    if (mapOfInstancesSF !== oldMapOfInstancesStringified) {
        setUpdateCount(updateCount + 1);
    }

    oldMapOfInstancesStringified = JSON.stringify(mapOfInstances.current);

    return (
        <AppContext.Provider value={[mapOfInstances.current]}>
            {isInitialised && children}
        </AppContext.Provider>
    );
};

AppStateProvider.propTypes = {
    children: PropTypes.element.isRequired,
    containers: PropTypes.object.isRequired,
    wrappers: PropTypes.arrayOf(PropTypes.element)
};

export default AppStateProvider;
