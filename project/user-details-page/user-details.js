// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
console.log(url);

let id = url.searchParams.get('id');
console.log(id);


let [mainDiv] = document.getElementsByClassName('mainDiv');
console.log(mainDiv);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {

        for (let key in value) {

            if (typeof value[key] !== 'object') {

                let keyDiv = document.createElement('div');
                keyDiv.classList.add('keyDiv');
                mainDiv.appendChild(keyDiv);
                keyDiv.classList.add('keyDiv');
                keyDiv.innerText = `${key} - ${value[key]}`;

            }else {

                let headDiv = document.createElement('div');
                headDiv.classList.add('headDiv');
                mainDiv.appendChild(headDiv);
                headDiv.innerText = key;

                for (let key2 in value[key]) {

                    if (typeof value[key][key2] !== 'object') {

                        let keyDiv2 = document.createElement('div');
                        headDiv.appendChild(keyDiv2)
                        keyDiv2.innerText = `${key2} - ${value[key][key2]}`;

                    }else {

                        let headDiv2 = document.createElement('div');
                        headDiv2.classList.add('headDiv2')
                        headDiv.appendChild(headDiv2);
                        headDiv2.innerText = key2

                        for (let key3 in value[key][key2]) {

                            let keyDiv3 = document.createElement('div');
                            headDiv2.appendChild(keyDiv3);
                            keyDiv3.innerText = `${key3} - ${value[key][key2][key3]}`;
                        }
                    }
                }
            }
        }
    });


function getPosts() {

    let [postsDiv] = document.getElementsByClassName('postsDiv');

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(value => {

            for (let post of value) {

                let postDiv = document.createElement('div');
                postsDiv.appendChild(postDiv);
                postDiv.innerText = `${post.title}`
                postDiv.classList.add('postDiv');

                let idd = post.id;

                let a = document.createElement('a');
                postDiv.appendChild(a);
                a.innerText = 'post details';
                a.href = `../post-details-page/post-details.html?id=${idd}`;
                a.classList.add('aPostDetails')
            }
        });
}







