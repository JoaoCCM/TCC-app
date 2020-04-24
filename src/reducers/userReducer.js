const initState = {
    userInfo: {
        name: "Arthur Oliveira",
        email: "arthur_oliveira@gmail.com",
        course: "ADS",
    },
    favorProfs: [
        { id: 1, name: "Talita Cypriano", email: "talita@gmail.com" },
        { id: 2, name: "André Leme", email: "andre@gmail.com" },
        { id: 3, name: "Emílio Rodrigues", email: "emilio@gmail.com" },
    ],
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_PROF":
            return {
                ...state,
                favorProfs: state.favorProfs.filter(
                    (prof) => prof.id !== action.id
                ),
            };
        case "CHANGE_ORDER":
            return {
                ...state,
                favorProfs: action.newState,
            };

        default:
            return state;
    }

    return state;
};

export default userReducer;
