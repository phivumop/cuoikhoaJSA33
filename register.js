let usernameinput = document.querySelector('#username');
let passwordinput = document.querySelector('#pass');
let submitbutton = document.querySelector('#submitbtn');
const userdata = {
    usernames: [] ,
    passwords: []
}
submitbutton.addEventListener('click', (e) => {
    e.preventDefault();

    if (usernameinput.value.trim() == '' || passwordinput.value.trim() == '')
    {
        alert('vui lòng điền thông tin vào chỗ trống')
        return;
    }
    else if ( userdata.usernames.indexOf(usernameinput.value) !== -1 ) {
        return;
    }
    else {
        userdata.usernames.push(usernameinput.value)
        userdata.passwords.push(passwordinput.value)
        localStorage.setItem("userdata", JSON.stringify(userdata));
        window.location.href="./sign-in.html"
    }
})