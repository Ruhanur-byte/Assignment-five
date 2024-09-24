// 
document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    const donateAmount = document.getElementById('donate-amount');
    const donateAmountX = parseFloat(donateAmount.value);
    console.log(donateAmount, donateAmountX)
    const addDonation = document.getElementById('add-donation-noakhali');
    const addDonationNoyakhali = parseFloat(addDonation.innerText);
    console.log( addDonation,addDonationNoyakhali)
    const mainBalance = document.getElementById('balance');

    const donateNaoyakhaliTitle = document.getElementById('donate-naoyakhali').innerText;
    const mainBalanceD = parseFloat(mainBalance.innerText);
    console.log(mainBalance, mainBalanceD)
    const totalDonate = donateAmountX + addDonationNoyakhali;
        addDonation.innerText = totalDonate;
    const updateBalance = mainBalanceD - donateAmountX;
       mainBalance.innerText = updateBalance;    
        

    if(isNaN(donateAmountX) || donateAmountX > mainBalanceD || donateAmount <= 0){
        alert('You do not have sufficient balance')
    }
   
  
    else{
        const div = document.createElement('div');
        div.innerHTML = `<div class="p-6 mt-5 border rounded shadow"> <h1 class="font-bold">${donateAmount} taka ${donateNaoyakhaliTitle}</h1>
        <h3>Date : ${date}</h3>
        </div>`
        document.getElementById('history-section').appendChild(div);
    }

    
})

document.getElementById('donate-btn-2').addEventListener('click',function(event){
    event.preventDefault();

    const donateAmount2 = document.getElementById('donate-amount-2');
    const donateAmountX2 = parseFloat(donateAmount2.value);
    console.log(donateAmount2, donateAmountX2)
    const addDonation2 = document.getElementById('add-donation-feni');
    const addDonationFeni = parseFloat(addDonation2.innerText);
    console.log( addDonation2,addDonationFeni)
    const mainBalance = document.getElementById('balance');
    const mainBalanceD = parseFloat(mainBalance.innerText);
    console.log(mainBalance, mainBalanceD)
    const totalDonate = donateAmountX2 + addDonationFeni;
        addDonation2.innerText = totalDonate;
    const updateBalance = mainBalanceD - donateAmountX2;
       mainBalance.innerText = updateBalance;    
        

    if(isNaN(donateAmountX2) || donateAmountX2 > mainBalanceD || donateAmount2 <= 0){
        alert('You do not have sufficient balance')
    }
   
  
    else{
        
    }

    
})

document.getElementById('donate-btn-3').addEventListener('click',function(event){
    event.preventDefault();

    const donateAmount3 = document.getElementById('donate-amount-3');
    const donateAmountX3 = parseFloat(donateAmount3.value);
    console.log(donateAmount3, donateAmountX3)
    const addDonation3 = document.getElementById('add-donation-aid');
    const addDonationAid = parseFloat(addDonation3.innerText);
    console.log( addDonation3,addDonationAid)
    const mainBalance = document.getElementById('balance');
    const mainBalanceD = parseFloat(mainBalance.innerText);
    console.log(mainBalance, mainBalanceD)
    const totalDonate = donateAmountX3 + addDonationAid;
        addDonation3.innerText = totalDonate;
    const updateBalance = mainBalanceD - donateAmountX3;
       mainBalance.innerText = updateBalance;    
        

    if(isNaN(donateAmountX3) || donateAmountX3 > mainBalanceD || donateAmount3 <= 0){
        alert('You do not have sufficient balance')
    }
   
  
    else{
        
    }

    
})
