const initState = {
    teachersList: [
        { id: 1, name: "Talita Cypriano", email: "talita@gmail.com" },
        { id: 2, name: "André Leme", email: "andre@gmail.com" },
        { id: 3, name: "Emílio Rodrigues", email: "emilio@gmail.com" },
        { id: 4, name: "Outro Professor", email: "contato@gmail.com" },
        { id: 5, name: "Outra Professora", email: "contato@gmail.com" },
        { id: 6, name: "Outra Professora", email: "contato@gmail.com" },
    ],
};

const allTeachesReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default allTeachesReducer;
