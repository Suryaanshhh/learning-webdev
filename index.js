function handleFormSubmit(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var userDetails = {
        username: username,
        email: email,
        phone: phone
    };
    axios.post('https://crudcrud.com/api/bec0667537e4421e8239a7197740253d/appointment', userDetails)
        .then(function (response) {
            console.log( response.data);
        })
        .catch(function (error) {
            console.error( error);
        });
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

  function showUser(userDetails){
    const parent=document.getElementById('listofitems')
    const child=document.createElement('li')
    child.textContent=userDetails.username+'-'+userDetails.email+'-'+userDetails.phone
    const Button =document.createElement('input')
    Button.type="BUTTON"
    Button.value="Delete"
    child.appendChild(Button);
    const Edit =document.createElement('input')
    Edit.type="BUTTON"
    Edit.value="Edit"
    child.appendChild(Edit);
    parent.appendChild(child);
    Button.addEventListener("click",function(event){
      event.preventDefault();
      localStorage.removeItem(userDetails.email);
      parent.removeChild(child);
    })
    Edit.addEventListener("click",function(event){
      event.preventDefault();
      localStorage.removeItem(userDetails.email);
      parent.removeChild(child);
      document.getElementById('username').value=userDetails.username;
      document.getElementById('email').value=userDetails.email;
      document.getElementById('phone').value=userDetails.phone;
    })
  }
