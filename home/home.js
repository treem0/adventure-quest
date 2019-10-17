import { saveUser } from '../data/api.js';
import makeUser from '../home/make-user.js';

const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userFormData = new FormData(userSignUp);

    const player = makeUser(userFormData);

    saveUser(player);
    
    window.location = 'map';
});