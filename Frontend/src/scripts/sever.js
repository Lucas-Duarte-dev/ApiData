
async function get()  {
    try {
        const response =  await fetch("http://localhost:3333/");

        const data = await response.json();

        show(data)
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

function show(users) {
    let information = '';
    
    for(let user of users) {
        information += `<li>${user.userId == 2 && user.title}</li>`
    }

    document.querySelector('main').innerHTML = information;
}

get()