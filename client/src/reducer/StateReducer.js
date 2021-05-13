export const initialState = {
  createProjectForm_assignees: [],
  allProjects: [],
  projectDetails: {},
  allTickets: [],
};

const StateReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      // Get all users into create project form when manager is creating a project
      case "GET_ALL_ASSIGNEES":
        return {
          ...state,
          createProjectForm_assignees: action.assignees,
        };
      // Display all projects in database when dashboard page is mounted
      case "GET_ALL_PROJECTS":
        return {
          ...state,
          allProjects: action.allProjects,
        };
      // Get a project's details from database when its 'Details' link is clicked in the projects table
      case "GET_A_PROJECT_DETAILS":
        return {
          ...state,
          projectDetails: action.projectDetails,
        };
      case "GET_ALL_TICKETS":
        return {
          ...state,
          allTickets: action.allTickets,
        };
      case "GET_A_TICKET_DETAILS":
        return {
          ...state,
          ticketDetails: action.ticketDetails,
        };
      default:
        return state;
    }
}

export default StateReducer;