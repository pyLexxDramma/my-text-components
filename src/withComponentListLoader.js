// src/withComponentListLoader.js
import React, { useEffect, useState } from 'react';

const withComponentListLoader = (Component) => {
    return function WrappedComponent({ url, ...props }) {
        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            };

            fetchData();
        }, [url]);

        if (!data) {
            return <div>Loading...</div>;
        }

        return <Component {...props} {...data[0]} />;
    };
};

export default withComponentListLoader;
