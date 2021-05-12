import React, { useEffect } from 'react';
import { useStateValue } from "../../provider/StateProvider";

const ProjectsByStatus = () => {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        fetch("./api/projects") 
            .then((data) => {
                return data.json();
            }, (err) => {
                console.log(err);
            })
            .then((parsedData) => {
                console.log(parsedData);
                dispatch({
                  type: "GET_ALL_PROJECTS",
                  allProjects: parsedData,
                });
            }, (err) => {
                console.log(err);
            })
    }, []);

    return (
      <div>
        <h1>ProjectsByStatus</h1>
      </div>
    );
}

export default ProjectsByStatus
