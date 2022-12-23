// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);

let id = url.searchParams.get('id');

let [mainDiv] = document.getElementsByClassName('mainDiv');

console.log(mainDiv);

fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(value => value.json())
    .then(value => {


        for (let key in value) {

            let keyDiv = document.createElement('div');
            keyDiv.classList.add('keyDiv');
            mainDiv.appendChild(keyDiv);
            keyDiv.innerText = `${key} - ${value[key]}`;

        }
    });

let [comentsDiv] = document.getElementsByClassName('comentsDiv');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(value => value.json())
    .then(value => {

        for (let coment of value) {

            console.log(coment);

            let comentDiv = document.createElement('div');
            comentsDiv.appendChild(comentDiv);
            comentDiv.classList.add('comentDiv');
            comentDiv.innerText = `${coment.body}`;

        }
    });