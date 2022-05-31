import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

interface IAppStateProviderProps {
    children: React.ReactNode;
    containers?: any;
}

let oldMapOfInstancesStringified: any;

const AppStateProvider = (props: IAppStateProviderProps) => {
    const [isInitialised, setInitialised] = useState<Boolean>(false);
    const mapOfInstances = useRef<any>({});
    const [updateCount, setUpdateCount] = useState(0);

    const getter = (id: any) => {
        return mapOfInstances.current[id] || {};
    };

    Object.keys(props.containers).forEach(k => {
        mapOfInstances.current[k] = props.containers[k](getter);
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
            {isInitialised && props.children}
        </AppContext.Provider>
    );
};

AppStateProvider.propTypes = {
    children: PropTypes.element.isRequired,
    containers: PropTypes.object.isRequired,
    wrappers: PropTypes.arrayOf(PropTypes.element)
};

export default AppStateProvider;
