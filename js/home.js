
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location = "./blog.html"
})
document.getElementById('donate-btn-one').addEventListener('click', function () {
    const amount = getInputFieldValueById('input-field-one');
    const balance = getTextFieldValueById('text-input-field');
    const cardBalance = getTextFieldValueById('amount-noakhali');
    if(amount > balance || amount <=0 || isNaN(amount)){
        alert("invalid Input");
        return;
    
    
       
    

    }
    const newamount = balance - amount;
    const NewCardBalance = amount + cardBalance;
    document.getElementById('text-input-field').innerText = newamount;
    document.getElementById('amount-noakhali').innerText = NewCardBalance;
    document.getElementById('input-field-one').value = null;
    const entry = document.createElement('div');
    entry.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
    const NewDate = document.createElement("p");
    const date = new Date();
    
    NewDate.innerText = date;

    entry.innerHTML = `
    <p class = "text-xl "> ${amount} Taka is Donated for flood-2024 at Noakhali, Bangladesh </p>
    <br>
    <p class = "text-gray-400 "> ${date}  </p>
    
    `

    document.getElementById('transaction-container').appendChild(entry);


})




document.getElementById('donate-btn-two').addEventListener('click', function () {
    const amount = getInputFieldValueById('input-field-two');
    const balance = getTextFieldValueById('text-input-field');
    const cardBalance = getTextFieldValueById('amount-feni');
    if(amount > balance || amount <=0 || isNaN(amount)){
        alert("invalid Input");
        return;
    }

    const newamount = balance - amount;
    const NewCardBalance = amount + cardBalance;
    console.log(newamount, NewCardBalance);
    document.getElementById('text-input-field').innerText = newamount;
    document.getElementById('amount-feni').innerText = NewCardBalance;
    document.getElementById('input-field-two').value = null;
    
   
    const entry = document.createElement('div');
    entry.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
    const NewDate = document.createElement("p");
    const date = new Date();
    
    NewDate.innerText = date;
    
    entry.innerHTML = `
    <p class = "text-xl "> ${amount} Taka is Donated for flood-2024 at Feni, Bangladesh </p>
    <br>
    <p class = "text-gray-400 "> ${date}  </p>
    
    
    `

    document.getElementById('transaction-container').appendChild(entry);


})
document.getElementById('donate-btn-three').addEventListener('click', function () {
    const amount = getInputFieldValueById('input-field-three');
    const balance = getTextFieldValueById('text-input-field');
    const cardBalance = getTextFieldValueById('amount-quota');
    if(amount > balance || amount <=0 || isNaN(amount)){
        alert("invalid Input");
        return;
    }
    const newamount = balance - amount;
    const NewCardBalance = amount + cardBalance;
    console.log(newamount, NewCardBalance);
    document.getElementById('text-input-field').innerText = newamount;
    document.getElementById('amount-quota').innerText = NewCardBalance;
    document.getElementById('input-field-three').value = null;
    const entry = document.createElement('div');
    entry.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500'
    const NewDate = document.createElement("p");
    const date = new Date();
    NewDate.innerText = date;

    entry.innerHTML = `
    <p class = "text-xl "> ${amount} Taka is Donated for Quota-Protest Victims, Bangladesh </p>
    <br>
    <p class = "text-gray-400 "> ${date}  </p>
    
    
    `

    document.getElementById('transaction-container').appendChild(entry);

})

