export const initialState = {
  createProjectForm_assignees: [],
  allProjects: [],
//   allTickets: [],
};

const StateReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        // When manager is creating project
        case "GET_ALL_ASSIGNEES":
            return {
              ...state,
              createProjectForm_assignees: action.assignees,
            };
        // When dashboard page is mounted
        case "GET_ALL_PROJECTS":
            return {
              ...state,
              allProjects: action.allProjects,
            }
        default:
            return state;
    }
}

export default StateReducer;