var btn = document.querySelector('.new');

var modal = document.querySelector(".modal");

var span = document.getElementsByClassName("close")[0];

var toDate = document.getElementById("todate");

var btnSubmit = document.querySelector('.wide');

var d = new Date();

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var today = `${d.getDate()} ${month[d.getMonth()]}, ${d.getFullYear()}`;

toDate.textContent = today;

btn.addEventListener('click', function () {
    modal.style.display = "block";
});

span.addEventListener('click', function () {
    modal.style.display = "none";
})
btnSubmit.addEventListener('click', function () {
    // var title = document.getElementById('title').value;
    // console.log(title);
    // var tags = document.getELementBy

    modal.style.display = 'none';
    var title = document.getElementById('title').value;

    if(title === ''){
        alert("Task can't be added Please enter any title for the new Task");
        return;
    }

    var tags = document.getElementsByName('tags');


    var newCard = document.createElement('div');
    newCard.classList.add('item-card');
    var cardTime = document.createElement('div');
    cardTime.classList.add('time');
    var timeIcon = document.createElement('i');
    timeIcon.classList.add('fa-clock');
    timeIcon.classList.add('far');
    var cardDate = document.createElement('p');
    cardDate.appendChild(document.createTextNode(today));
    cardTime.appendChild(timeIcon);
    cardTime.appendChild(cardDate);
    newCard.appendChild(cardTime);

    var cardTitle = document.createElement('p');
    cardTitle.appendChild(document.createTextNode(title));
    newCard.appendChild(cardTitle);

    var cardTags = document.createElement('div');
    for (let i = 0; i < tags.length; i++) {

        if (tags[i].checked) {
            var cardTag = document.createElement('button');
            cardTag.classList.add('task');
            if (tags[i].value === 'design') {
                cardTag.appendChild(document.createTextNode('Design'));
                cardTag.classList.add('design');
                cardTags.appendChild(cardTag);
                cardTags.innerHTML += ' ';
                newCard.appendChild(cardTags);
            } else if (tags[i].value === 'research') {
                cardTag.appendChild(document.createTextNode('Research'));
                cardTag.classList.add('research');
                cardTags.appendChild(cardTag);
                cardTags.innerHTML += ' ';
                newCard.appendChild(cardTags);
            } else if (tags[i].value === 'illustration') {
                cardTag.appendChild(document.createTextNode('Illustration'));
                cardTag.classList.add('illustration');
                cardTags.appendChild(cardTag);
                cardTags.innerHTML += ' ';
                newCard.appendChild(cardTags);
            } else {
                cardTag.appendChild(document.createTextNode('Brand'));
                cardTag.classList.add('brand');
                cardTags.appendChild(cardTag);
                cardTags.innerHTML += ' ';
                newCard.appendChild(cardTags);
            }


        }
    }
    var cardSeparator = document.createElement('div');
    cardSeparator.classList.add('separator');
    newCard.appendChild(cardSeparator);

    var cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    var cardPerson = document.createElement('div');
    cardPerson.classList.add('person');
    var btnPerson = document.createElement('button');
    btnPerson.classList.add('per');
    btnPerson.classList.add('new-person');
    var btnIcon = document.createElement('i');
    btnIcon.classList.add('fas', 'fa-plus');
    btnPerson.appendChild(btnIcon);
    cardPerson.appendChild(btnPerson);
    cardFooter.appendChild(cardPerson);
    var cardStatus = document.createElement('div');
    cardStatus.classList.add('status');
    var statusComment = document.createElement('div');
    var statusLink = document.createElement('div');
    var commentIcon = document.createElement('i');
    commentIcon.classList.add('fa-fw');
    commentIcon.classList.add('far');
    commentIcon.classList.add('fa-comment');
    var linkIcon = document.createElement('i');
    linkIcon.classList.add('fa-fw');
    linkIcon.classList.add('fas');
    linkIcon.classList.add('fa-link');
    var comments = 0;
    var links = 0;
    var commentSpan = document.createElement('span');
    commentSpan.textContent = comments;
    var linkSpan = document.createElement('span');
    linkSpan.textContent = links;

    statusComment.appendChild(commentIcon);
    statusComment.appendChild(commentSpan);
    statusLink.appendChild(linkIcon);
    statusLink.appendChild(linkSpan);
    cardStatus.appendChild(statusComment);
    cardStatus.appendChild(statusLink);
    cardFooter.appendChild(cardStatus);
    newCard.appendChild(cardFooter);
    var element = document.querySelector('#backlog');
    var child = document.querySelector('#backlog .item-card');
    element.insertBefore(newCard, child);

    document.getElementById('title').value = '';

    var tagReset = document.getElementsByName('tags');
    for (let i = 0; i < tagReset.length; i++) {
        tagReset[i].checked = false;
    }

});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
window.addEventListener('scroll', function (event) {
        modal.style.display = 'none';
});