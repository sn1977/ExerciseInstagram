let accountOwner = 'Sascha';
let posts = [
    {
        'imgAuthor': '/img/beard-gbce1ab4f6_640.jpg',
        'author': 'Mr. Beard',
        'location': 'Barcelona',
        'img': 'img/sagrada-familia-gb8a850bdd_640.jpg',
        'iconHeard': 'svg/heart-regular.svg',
        'iconBubble': 'svg/instagram-comment-13416.svg',
        'iconMessage': 'svg/send-4008.svg',
        'iconBookmark': 'svg/bookmark-regular.svg',
        'likes': 587,
        'commentAuthor': 'Sascha',
        'comment': ['Muss man gesehen haben!'],
    },
    {
        'imgAuthor': 'img/woman-g61df0fcab_640.jpg',
        'author': 'Mrs. Gold',
        'location': 'Paris',
        'img': 'img/eiffel-tower-g6a31b2986_640.jpg',
        'iconHeard': 'svg/heart-regular.svg',
        'iconBubble': 'svg/instagram-comment-13416.svg',
        'iconMessage': 'svg/send-4008.svg',
        'iconBookmark': 'svg/bookmark-regular.svg',
        'likes': 587,
        'commentAuthor': 'Olivia',
        'comment': ['Unglaublich imposant!'],
    },
    {
        'imgAuthor': 'img/girl-g664521361_640.jpg',
        'author': 'Mrs. Black',
        'location': 'London',
        'img': 'img/london-g8eb026b24_640.jpg',
        'iconHeard': 'svg/heart-regular.svg',
        'iconBubble': 'svg/instagram-comment-13416.svg',
        'iconMessage': 'svg/send-4008.svg',
        'iconBookmark': 'svg/bookmark-regular.svg',
        'likes': 587,
        'commentAuthor': 'Luna',
        'comment': ['Wunderschön 🤩'],
    },
    {
        'imgAuthor': 'img/lion-g428157c17_640.jpg',
        'author': 'Lion',
        'location': 'Afrika',
        'img': 'img/elephant-gfe03d1813_640.jpg',
        'iconHeard': 'svg/heart-regular.svg',
        'iconBubble': 'svg/instagram-comment-13416.svg',
        'iconMessage': 'svg/send-4008.svg',
        'iconBookmark': 'svg/bookmark-regular.svg',
        'likes': 587,
        'commentAuthor': 'Mila',
        'comment': ['Beängstigend 😳'],
    },
    {
        'imgAuthor': 'img/human-geb6f61feb_640.jpg',
        'author': 'Mr. Beard II',
        'location': 'Budapest',
        'img': 'img/building-g1000efaf0_640.jpg',
        'iconHeard': 'svg/heart-regular.svg',
        'iconBubble': 'svg/instagram-comment-13416.svg',
        'iconMessage': 'svg/send-4008.svg',
        'iconBookmark': 'svg/bookmark-regular.svg',
        'likes': 587,
        'commentAuthor': 'Urs',
        'comment': [],
    }
];

function show() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        content.innerHTML += `
            <div class="postBox">
                <div class="boxHeader" >
                    <div class="boxPostOwners" ><img alt="#" class="postOwners " src="${post['imgAuthor']}"></div> 
                    <div class="authorAndLocation">
                        <span class="author">${post['author']}</span>
                        <span>${post['location']}</span>
                    </div>
                </div>
                   <div>
                     <img src="${post['img']}"
                </div>
                <div class="postIcons" >
                    <div>
                        <img src="${post['iconHeard']}" class="svgSize" onclick="addLike(${i})" id="heartImg${i}" >        
                        <img src="${post['iconBubble']}" class="svgSize" > 
                        <img src="${post['iconMessage']}" class="svgSize" >         
                    </div>
                    <div>
                        <img src="${post['iconBookmark']}" class="svgSize bookmarkIcon" >               
                    </div>
                </div>
                <div>
                    <span><b id="likes${i}">Gefällt &nbsp ${post['likes']} &nbsp Mal</b></span>       
                </div>
                <div class="comments" id="newComments${i}">
                    <span><b>${post['commentAuthor']}</b> ${post['comment'][0]} </span>     
                </div>
                <div class="commentField" id="newComment${i}">
                    <input type="text" placeholder="Kommentar hinzufügen" id="inputs${i}"" >
                    <button onclick="sendPost(${i})" id="button${i}">Posten</button>
                </div>
            </div>
       `;

        let newComments = document.getElementById(`newComments${i}`);

        for (let j = 1; j < post['comment'].length; j++) {
            const newComment = post['comment'][j];

            newComments.innerHTML += `
            <div><b>${accountOwner} </b>${newComment}</div>`;
        }

    }
}

function sendPost(i) {
    let input = document.getElementById(`inputs${i}`);
    posts[i]['comment'].push(input.value);
    document.getElementById('content').innerHTML = '';
    show();
    input.value = '';
}

function addLike(i) {
    let like = document.getElementById(`heartImg${i}`);
    let blackHeart = './svg/heart-regular.svg';
    let redHeart = './svg/heart-solid.svg';
    let likes = document.getElementById(`likes${i}`);
    if (like.getAttribute('src')=== blackHeart) {
        like.setAttribute('src', redHeart);
        likes.innerHTML = `Gefällt &nbsp ${posts[i]['likes']+1} &nbsp Mal`;
    } else {
        like.src = blackHeart;
        likes.innerHTML = `Gefällt &nbsp ${posts[i]['likes']-1} &nbsp Mal`;
    }
}

