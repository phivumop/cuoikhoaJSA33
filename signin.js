let userNlogin = document.querySelector('#userNlogin');
let passwordlogin = document.querySelector('#passlogin');
let loginbutton = document.querySelector('#loginbtn');
const userdata = {
    usernames: [] ,
    passwords: []
}
loginbutton.addEventListener('click', (e) => {

    let userdata = localStorage.getItem("userdata");
    let parseddata = JSON.parse(userdata);
    let password = '';
    let username = '';

    if (userNlogin.value.trim() == '' || passwordlogin.value.trim() == '')
    {
        alert('vui lòng điền thông tin vào chỗ trống')
        return;
    }

    else {
        let usernamearraylength = parseddata.usernames.length;
        for (let i = 0; i < usernamearraylength; i++) {
            username = parseddata.usernames[i];
            if (username = userNlogin.value.trim()) {
                if (passwordlogin.value.trim() == parseddata.passwords[i]) {
                    window.location.href="./index.html"
                    return;
                }
            }
        }
    }
    alert('Đăng nhập thất bại')
    })
   

