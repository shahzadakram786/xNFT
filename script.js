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




// section 2 data from here 


const tables_data = [{
    id : 1,
    Image: 'images/',
    collection: 'MutantApeYachtClub',
    floor_name: 4.31,
    floor_nameB: 'ETH', 
    floor_change: '-2.6%',
    Volume:'1,181' ,
    volumneB:'ETH',
    volumne_change: '-12.3%',
    items:'19.5K',
    Owners:'11.6K'
},
{
    id : 2,
    Image: 'images/',
    collection: 'Azuki',
    floor_name: 6.99,
    floor_nameB: 'ETH', 
    floor_change: '+0.1%',
    Volume:'820.2' ,
    volumneB:'ETH',
    volumne_change: '+614%',
    items:'10K',
    Owners:'4.4K'   
},
{
    id : 3,
    Image: 'images/',
    collection: 'Nobody',
    floor_name: 0.605,
    floor_nameB: 'ETH', 
    floor_change: '-7.4%',
    Volume:'645.2' ,
    volumneB:'ETH',
    volumne_change: '-65.9%',
    items:'10K',
    Owners:'4.7K'   
}]


const tBody = document.getElementsByTagName('tbody')

for(let i = 0 ; i < tables_data.length; i++) {
    let tableData = tables_data[i];

    tBody.innerHTML += 
   `
   <tr class="table_div_2">
                              <td>${tableData.id}</td>
                              <td class="td_img_p"><img src="./images/table icons/div.sc-aXZVg.png" alt="" id="T_img1" class="t_imges">
                               <p>MutantApeYachtClub</p> </td>
                              <td>4.31 <br> ETH</td>
                              <td>-2.6%</td>
                              <td>1,181 <br> ETH</td>
                              <td>-12.3%</td>
                              <td>19.5K</td>
                              <td>11.6K</td>
                           </tr>

   `

}

