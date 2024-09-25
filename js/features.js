document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('history-form').classList.add('hidden');
    document.getElementById('card-form').classList.remove('hidden');
    document.getElementById('history-btn').classList.remove('bg-c-primary','btn');
    document.getElementById('donation-btn').classList.add('bg-c-primary','btn');

    
    
})
document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('card-form').classList.add('hidden');
    document.getElementById('history-form').classList.remove('hidden');
    document.getElementById('transaction-container').classList.remove('hidden')
    document.getElementById('donation-btn').classList.remove('bg-c-primary','btn');
    document.getElementById('history-btn').classList.add('bg-c-primary','btn');
})

    