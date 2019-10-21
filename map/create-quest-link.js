function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    link.href = '../quest/?id' + quest.id;

    link.style.top = quest.id.top;
    link.style.left = quest.id.left;
    link.textContent = quest.id.title;

    return link;
}

export default createQuestLink;