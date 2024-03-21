let num = document.querySelector("#First_num")
 



const first_numbers = [{
number: '10k' ,
title: 'Artwork'
},
{
    number: '32k',
    title: 'Auction'
},
{
    number: '42k',
    title: 'Artist'
}];

// this is for the first number and there titles on section 1


for (let i = 0; i < first_numbers.length; i++) {
let fistData = first_numbers[i];

    console.log("thies +> ",fistData.number)
    console.log("thies +> ",fistData.title)

    num.innerHTML +=  
    `
    <div class="for-num">
    <span class="spanNum-btn">
     <h2>${fistData.number}</h2>
     <p>${fistData.title}</p>
    </span>
    
    ${i !== first_numbers.length - 1 ? '<div class="line" id="one-line"></div>' : ''} 
</div>`


    

}
