function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 100,
        gold: 5,
        completed: {}
    };
    return user;
}

export const makeNewUser = (formData) => ({
    name: formData.get('name'),
    class: formData.get('class'),
    hp: 100,
    gold: 5,
    completed: {}
});

export default makeUser;