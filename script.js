const image = document.querySelector('#myImage');
const header = document.querySelector('h1')
const text = document.querySelector('h2');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');

buttonOne.addEventListener('click', answerYes);
buttonTwo.addEventListener('click', answerNo);

function answerYes() {
    image.setAttribute(
    'src',
    'images/socmedia.png'
    );
    text.innerHTML = `What's your favorite social-media app?`;
    buttonOne.innerHTML = 'Instagram';
    buttonTwo.innerHTML = 'Facebook';

    buttonOne.addEventListener('click', answerInstagram);
    buttonTwo.addEventListener('click', answerFacebook);
}

function answerNo() {
    image.setAttribute('src', 'images/sad.png');
    text.innerHTML = 'Are you sure?';
    buttonOne.innerHTML = `Yes, I'm sure`;
    buttonTwo.innerHTML = 'No!';

    buttonOne.addEventListener('click', answerSure);
    buttonTwo.addEventListener('click', answerYes);
}

function answerInstagram() {
    image.setAttribute('src', 'images/romantic.png');
    text.innerHTML = `Are you a romantic person?`;
    buttonOne.style = 'display: block';
    buttonTwo.style = 'display: block';
    buttonOne.innerHTML = 'Yes';
    buttonTwo.innerHTML = 'No';

    buttonOne.addEventListener('click', answerRomantic);
    buttonTwo.addEventListener('click', answerNotRomantic);
}

function answerFacebook() {
    image.setAttribute('src', 'images/extra-introvert2.jpg');
    text.innerHTML = `Are you more of an extrovert or introvert?`;
    buttonOne.innerHTML = 'Extrovert';
    buttonTwo.innerHTML = 'Introvert';

    buttonOne.addEventListener('click', answerExtrovert);
    buttonTwo.addEventListener('click', answerRomantic);
}

function answerExtrovert(){
    image.setAttribute('src', 'images/seasons.png');
    text.innerHTML = `What's your favorite season?`;
    buttonOne.style = 'display: block';
    buttonTwo.style = 'display: block';
    buttonOne.innerHTML = 'Summer';
    buttonTwo.innerHTML = 'Winter';

    buttonOne.addEventListener('click', answerSummer);
    buttonTwo.addEventListener('click', answerWinter);
}

function answerSummer(){
    image.setAttribute('src', 'images/travel.png');
    text.innerHTML = `If you could visit any of the following cities, <br> where would you go?`;
    buttonOne.innerHTML = 'Paris';
    buttonTwo.innerHTML = 'New York';

    buttonOne.addEventListener('click', answerParis);
    buttonTwo.addEventListener('click', answerNewYork);
}

function answerWinter(){
    image.setAttribute('src', 'images/twins.png');
    text.innerHTML = `You show up at a party and someone is wearing <br> the same outfit as you. What do you do?`;
    buttonOne.innerHTML = 'Go home and change';
    buttonOne.style.fontSize = '18px';
    buttonOne.style.lineHeight = '1.2';
    buttonTwo.innerHTML = 'Become friends with them';
    buttonTwo.style.fontSize = '17px';
    buttonTwo.style.lineHeight = '1.2';

    buttonOne.addEventListener('click', goHome);
    buttonTwo.addEventListener('click', becomeFriends);
}

function answerRomantic() {
    image.setAttribute('src', 'images/creative.png');
    text.innerHTML = `Do you consider yourself a creative person?`;
    buttonOne.innerHTML = 'Yes';
    buttonTwo.innerHTML = 'No';

    buttonOne.addEventListener('click', answerCreative);
    buttonTwo.addEventListener('click', answerNotCreative);
}

function answerNotRomantic() {
    image.setAttribute('src', 'images/day-off2.png');
    text.innerHTML = `What do you prefer to do on your day off?`;
    buttonOne.innerHTML = 'Read a book';
    buttonOne.style.fontSize = '18px';
    buttonTwo.innerHTML = 'Hang out with friends';
    buttonTwo.style.fontSize = '18px';
    buttonTwo.style.lineHeight = '1.1';

    buttonOne.addEventListener('click', answerReadBook);
    buttonTwo.addEventListener('click', answerHangOut);
}

function answerHangOut() {
    image.setAttribute('src', 'images/shopping.png');
    text.innerHTML = `When you shop for clothes, <br> which factor is most important to you?`;
    buttonOne.innerHTML = 'Comfort';
    buttonTwo.innerHTML = 'Uniqueness';

    buttonOne.addEventListener('click', answerComfort);
    buttonTwo.addEventListener('click', answerUniqueness);
}

function goHome(){
    image.setAttribute('src', 'images/plumeria2.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are PLUMERIA.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function becomeFriends() {
    image.setAttribute('src', 'images/lisianthus.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are EUSTOMA.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerParis(){
    image.setAttribute('src', 'images/gardenia2.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are GARDENIA.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerNewYork(){
    image.setAttribute('src', 'images/amaryllis.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are AMARYLLIS.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerReadBook() {
    image.setAttribute('src', 'images/magnolia.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are MAGNOLIA.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerComfort(){
    image.setAttribute('src', 'images/columbine3.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are COLUMBINE.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerUniqueness(){
    image.setAttribute('src', 'images/passiflora3.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are PASSIFLORA.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerCreative() {
    image.setAttribute('src', 'images/bird-of-paradise.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are BIRD OF PARADISE.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerNotCreative(){
    image.setAttribute('src', 'images/camellia.jpg');
    header.textContent = 'CONGRATULATIONS!!!';
    text.textContent = 'You are CAMELLIA.';

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}

function answerSure() {
    image.setAttribute('src','images/cactus3.jpg')
    header.textContent="CONGRATULATIONS!!!"
    text.textContent = "You are CACTUS."

    buttonOne.style = 'display: none';
    buttonTwo.style = 'display: none';
}