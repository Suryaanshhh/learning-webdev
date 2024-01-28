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
    axios.post('https://crudcrud.com/api/2682ca6218454a8fb4e8211b9c4029f7/appointment', userDetails)
        .then(function (response) {
            showUser( response.data);
        })
        .catch(function (error) {
            console.error( error);
        });
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/2682ca6218454a8fb4e8211b9c4029f7/appointment')
  .then((response)=>{console.log(response)
           for(var i=0;i<response.data.length;i++){
            showUser(response.data[i]);
           }
  })
  .catch((err)=>{console.log(err)});

  //const localStorageObj=localStorage;
 // const localStorageKeys=Object.keys(localStorageObj)
  //for(var i=0;i<localStorageKeys.length;i++){
  //  const key=localStorageKeys[i];
   // const userDetailsString=localStorageObj[key];
  //  const userDetailsObj=JSON.parse(userDetailsString);
   // showUser(userDetailsObj);
 // }
})
  function showUser(userDetails){
    
    const parent=document.getElementById('listofitems')
    const child=document.createElement('li')
    child.textContent=userDetails.username+'-'+userDetails._id+'-'+userDetails.phone
    const Button =document.createElement('input')
    Button.type="BUTTON"
    Button.value="Delete"
    child.appendChild(Button);
    const Edit =document.createElement('input')
    Edit.type="BUTTON"
    Edit.value="Edit"
    child.appendChild(Edit);
    parent.appendChild(child);

    Button.addEventListener("click",function removeUser(userId){
    
     userId.preventDefault();

      axios.delete(`https://crudcrud.com/api/2682ca6218454a8fb4e8211b9c4029f7/appointment/${userDetails._id}`)
     .then((response)=>{ console.log(response)
      removeUser(userId)})
      .catch((err)=>{console.log(err)});
    
      //localStorage.removeItem(userDetails.email);
      //parent.removeChild(child);
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
