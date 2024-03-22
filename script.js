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

const tBody = document.querySelector('.tbody')


const tables_data = [{
    id : 1,
    Image: './images/table icons/div.sc-aXZVg.png',
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
    Image: './images/table icons/div.sc-aXZVg (1).png',
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
}
,
{
    id : 4,
    Image: 'images/',
    collection: 'Pudgy Penguins',
    floor_name: 18.5,
    floor_nameB: 'ETH', 
    floor_change: '+8.9%',
    Volume:'563' ,
    volumneB:'ETH',
    volumne_change: '+39.9%',
    items:'8.9K',
    Owners:'4.6K'   
}
,
{
    id : 5,
    Image: 'images/',
    collection: 'Farm Land by Pixels',
    floor_name: 1.2,
    floor_nameB: 'ETH', 
    floor_change: '-36%',
    Volume:'496.6' ,
    volumneB:'ETH',
    volumne_change: '+297.7%',
    items:'5K',
    Owners:'2.1K'   
}
,
{
    id : 6,
    Image: 'images/',
    collection: 'TENJIN',
    floor_name: 0.541,
    floor_nameB: 'ETH', 
    floor_change: '+11.5%',
    Volume:'489.4' ,
    volumneB:'ETH',
    volumne_change: '+126.5%',
    items:'8K',
    Owners:'4.2K'   
},
{
    id : 7,
    Image: 'images/',
    collection: 'DeGods',
    floor_name: 2.999,
    floor_nameB: 'ETH', 
    floor_change: '-5.3%',
    Volume:'437' ,
    volumneB:'ETH',
    volumne_change: '-47.2%',
    items:'9K',
    Owners:'2.8K'   
},
{
    id : 8,
    Image: 'images/',
    collection: 'Pillheads NFT',
    floor_name: 0.145,
    floor_nameB: 'ETH', 
    floor_change: '+107.4%',
    Volume:'220.1' ,
    volumneB:'ETH',
    volumne_change: '+438.7%',
    items:'6.7K',
    Owners:'2K'   
},
{
    id : 9,
    Image: 'images/',
    collection: 'Lil Pudgys',
    floor_name: 1.739,
    floor_nameB: 'ETH', 
    floor_change: '+3%',
    Volume:'201.7' ,
    volumneB:'ETH',
    volumne_change: '-52.5%',
    items:'21.5K',
    Owners:'8K'   
}
,
{
    id : 10,
    Image: 'images/',
    collection: 'Bored Ape Yacht Club',
    floor_name: 24.29,
    floor_nameB: 'ETH', 
    floor_change: '-2.8%',
    Volume:'142.3' ,
    volumneB:'ETH',
    volumne_change: '-7.1%',
    items:'10K',
    Owners:'5.7K'   
},
{
    id : 11,
    Image: 'images/',
    collection: 'BoredApekennelClub',
    floor_name: 1.28,
    floor_nameB: 'ETH', 
    floor_change: '-3%',
    Volume:'122.9' ,
    volumneB:'ETH',
    volumne_change: '+265.1%',
    items:'9.6K',
    Owners:'5.2K'   
}]



for(let i = 0 ; i < tables_data.length; i++) {
    let tableData = tables_data[i];
console.log("rBLE", tableData.id)
    tBody.innerHTML += 
   `
   <tr class="table_div_2">
      <td>${tableData.id}</td>
      <td class="td_img_p"><img src="${tableData.Image}" alt="" id="T_img1" class="t_imges">
       <p>${tableData.collection}</p> </td>
      <td>${tableData.floor_name} <br> ${tableData.floor_nameB}</td>
      <td>${tableData.floor_change}</td>
      <td>${tableData.Volume} <br> ${tableData.volumneB}</td>
      <td>${tableData.volumne_change}</td>
      <td>${tableData.items}</td>
      <td>${tableData.Owners}</td>
    </tr>

   `

}

