const icon = document.getElementById('icon');
const passinput = document.getElementById('new');

icon.addEventListener('click',iconfun); 
function iconfun()
{
    if(passinput.type == 'password')
    {
            passinput.type = 'text';
            icon.classList.remove('bx', 'bxs-show');
            icon.classList.add('bx', 'bxs-low-vision');
    }
    else
    {
        passinput.type = 'password';
        icon.classList.remove('bx', 'bxs-low-vision');
        icon.classList.add('bx', 'bxs-show');
    }
}