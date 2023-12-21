function handleFormSubmit(event){
    event.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    var Data = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    }
    const dataTOstring=JSON.stringify(Data);
    localStorage.setItem('Data',dataTOstring);
}
//module.exports=handleFormSubmit;
   
   