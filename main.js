
function randomwork() {
    let inp = document.getElementById('inp');
    let btn = document.getElementById('btn');

    let arry = ['s', 'd', '3', '8', '#', '&', '$', 'd', 'h'];
    let password = '';
    if (inp.value !== undefined) {
        let result = Math.floor(Math.random() * inp.value)
    }

    for (let i = 0; i < inp.value; i++) {
        let num = Math.floor(Math.random() * arry.length)
        password += arry[num];
    }
    console.log(password);



}