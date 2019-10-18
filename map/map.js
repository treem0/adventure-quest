import loadProfile from '../common/load-profile.js';
import quests from '../data/quest-data.js';
import { getUser } from '../data/api.js';
import createQuestLink from '../map/create-quest-link.js';
import createCompletedQuest from '../map/create-completed-quest.js';
import hasCompletedAllQuests from '../map/has-completed-all-quests.js';
import isDead from '../common/is-dead.js';
import createCompleteQuest from '../map/create-completed-quest.js';


loadProfile();

const user = getUser();

if (isDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; 0 < quests.length; i++) {
    const quest = quests[i];
    let questDisplay = null;

    if (user.completed[quest.id]) {
        questDisplay = createCompleteQuest(quest);
    }
    else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
}