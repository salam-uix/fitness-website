import React from 'react';
import { useParams } from 'react-router';

const EnrollCourse = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>Course details: {serviceId}</h1>
        </div>
    );
};

export default EnrollCourse;