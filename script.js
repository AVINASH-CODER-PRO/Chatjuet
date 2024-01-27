const icon = document.getElementById('icon');
const passinput = document.getElementById('new');

icon.addEventListener('click',iconfun); 
function iconfun()
{
    if(passinput.type == 'password')
    {
            passinput.type = 'text';
            icon.classList.remove('bx', 'bxs-lock-alt');
            icon.classList.add('bx', 'bxs-lock-open-alt');
    }
    else
    {
        passinput.type = 'password';
        icon.classList.remove('bx', 'bxs-lock-open-alt');
        icon.classList.add('bx', 'bxs-lock-alt');
    }
}