const form = document.querySelector('form');
const emailError = document.querySelector('#email-error');
const emailInput = document.querySelector('#email');
const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const container = document.querySelector('.container');
const successMsg = document.querySelector('.successMsg');
const dismissBtn = document.querySelector('#dismiss');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formData = new FormData(e.target);
    data = Object.fromEntries(formData);
    if(data.email.length == 0 || !pattern.test(data.email))
    {
        emailError.textContent = "Valid email required";
        emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "hsl(4, 84%, 93%)";
        emailInput.placeholder = "ash#loremcompany.com";
        emailInput.style.color = "hsl(4, 100%, 67%)";
        emailInput.classList.add('redPlaceholder');
        console.log("error");

    }
    else{
        console.log("everything is okay");
        emailError.textContent = "";
        emailInput.style.border = "1px solid var(--Grey)";
        emailInput.style.backgroundColor = "white";
        emailInput.style.color = "black";
        container.classList.add('success');
        successMsg.classList.add('successMsgActive');
    }
}
)

dismissBtn.addEventListener('click', ()=>{
    container.classList.remove('success');
    successMsg.classList.remove('successMsgActive');
    form.reset();
})
