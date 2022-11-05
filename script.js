  const moon = document.getElementById('moon-icon');
  const sun = document.getElementById('sun-icon');
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('prefers-color-scheme:dark').matches;
  let display = document.getElementById('display-div');
  const africa = document.getElementById('africa');
  const america = document.getElementById('america');
  const asia = document.getElementById('asia');
  const europe = document.getElementById('europe');
  const oceania = document.getElementById('oceania');
  let output = document.getElementById('output');
  const sel = document.getElementById('sel');
  const search = document.getElementById('search');

  const iconToggle = () => {
    moon.classList.toggle('hidden');
   //  sun.classList.toggle('hidden');
  };


 const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
     document.documentElement.classList.add('dark');
     moon.classList.add('hidden');
     return;
    }
    sun.classList.add('hidden')
 };


 const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
 };


 moon.addEventListener('click', () => {
    themeSwitch();
 });


//  sun.addEventListener('click', () => {
//     themeSwitch();
//  });



document.addEventListener("DOMContentLoaded", getCountriies);

async function getCountriies (){
   const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json()
    return data;
 }
 getCountriies().then(users => {
   
   
   for(let i=0; i<users.length; i++){
     
      users.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
      <div class='w-full h-[200px]'>
      <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
      </div>
      <div class="pb-10 pt-7 text-left h-3/5 ml-5">
          <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
          <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
          <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
          <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
      </div>
   </div> `;
//   count = users.innerHTML;
  display.innerHTML = users.innerHTML;
//   output.innerHTML = display.innerHTML;
// console.log(count);
}
   // console.log(users)
}); 

// function getCountriies () {
//    fetch('https://restcountries.com/v3.1/all')
//    .then(res => {
//       if(!res.ok) throw new Error(`Something went wrong. ${res.status} ${res.statusText}`)
//       return res.json()
//     })
//    .then(users => {
//           for(let i=0; i<users.length; i++){
//        let x = display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <div class='w-full h-[200px]'>
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     </div>
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`;
// output.innerHTML = x;

// };
//    })
// };

// console.log(africa);
// console.log(sel.options);

function changeRegion (y) {
console.log(y.value);
   // console.log('clicked');
   fetch(`https://restcountries.com/v3.1/region/${y.value}`)
   .then(res => {
      if(!res.ok) throw new Error(`Something went wrong. ${res.status} ${res.statusText}`)
      return res.json()
    })
   .then(users => {
      for(let i=0; i<users.length; i++){
          users.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
          <div class='w-full h-[200px]'>
          <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
          </div>
          <div class="pb-10 pt-7 text-left h-3/5 ml-5">
              <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
              <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
              <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
              <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
          </div>
       </div> `;
       
      // count = users.innerHTML;
      display.innerHTML = users.innerHTML;
   //   output.innerHTML = display.innerHTML;
   
   
         }
})
.catch(err => {console.error(err)
   display.innerHTML = `<div class="flex flex-col justify- items-center" id="display-div">
   ${err}
   </div>`
})
}


search.addEventListener("keypress", searchCountries);

function searchCountries (y) {
   // console.log(search.value);
      // console.log('clicked');
      fetch(`https://restcountries.com/v3.1/name/${search.value}`)
      .then(res => {
         if(!res.ok) throw new Error(`Something went wrong, please ensure you spell the country correctly. ${res.status}`)
         return res.json()
       })
      .then(users => {
         for(let i=0; i<users.length; i++){
             users.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
             <div class='w-full h-[200px]'>
             <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
             </div>
             <div class="pb-10 pt-7 text-left h-3/5 ml-5">
                 <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
                 <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
                 <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
                 <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
             </div>
          </div> `;
          
         // count = users.innerHTML;
         display.innerHTML = users.innerHTML;
      //   output.innerHTML = display.innerHTML;
      
      
            }
   })
   .catch(err => {console.error(err)
      display.innerHTML = `<div class="flex flex-col justify-center items-center" id="display-div text-center">
      ${err.message}
      </div>`
   })
   }


//  async function getCountriies (){
//    const response = await fetch('https://restcountries.com/v3.1/all');
//     const data = await response.json()
//     return data;
//  }
//  getCountriies().then(users => {
   
   
//     for(let i=0; i<users.length; i++){
//        display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`}
//    // console.log(users)
// });

// africa.addEventListener('click', getAfrica);
// america.addEventListener('click', getAmerica);
// asia.addEventListener('click', getAsia);
// europe.addEventListener('click', getEurope);
// oceania.addEventListener('click', getOceania);

// async function getAfrica (){
//    const response = await fetch(`https://restcountries.com/v3.1/region/${africa.textContent}`);
//     const data = await response.json()
//     return data;
//  }
//  getAfrica().then(users => {
   
   
//     for(let i=0; i<users.length; i++){
//        let input = display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`;
//  display.innerHTML = input;
// }
//    // console.log(users)
// });   


// async function getAmerica (){
//    const response = await fetch(`https://restcountries.com/v3.1/region/${america.textContent}`);
//     const data = await response.json()
//     return data;
//  }
//  getAmerica().then(users => {
   
   
//     for(let i=0; i<users.length; i++){
//        let input = display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`;
// display.innerHTML = input;
// }
//    // console.log(users)
// }); 

// console.log(america.textContent);


// async function getAsia (){
//    const response = await fetch(`https://restcountries.com/v3.1/region/${asia.textContent}`);
//     const data = await response.json()
//     return data;
//  }
//  getAsia().then(users => {
   
   
//     for(let i=0; i<users.length; i++){
//        display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`}
//    // console.log(users)
// }); 


// async function getEurope (){
//    const response = await fetch(`https://restcountries.com/v3.1/region/${europe.textContent}`);
//     const data = await response.json()
//     return data;
//  }
//  getEurope().then(users => {
   
   
//     for(let i=0; i<users.length; i++){
//        display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`}
//    // console.log(users)
// }); 


// async function getOceania (){
//    const response = await fetch(`https://restcountries.com/v3.1/region/${oceania.textContent}`);
//     const data = await response.json()
//     return data;
//  }
//  getOceania().then(users => {
   
   
//     for(let i=0; i<users.length; i++){
//        display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
//     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
//     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
//         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
//         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
//         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
//         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
//     </div>
//  </div>`}
//    // console.log(users)
// }); 


// // async function getRegion (){
// //    const response = await fetch(`https://restcountries.com/v3.1/region/${africa.textContent}`);
// //     const data = await response.json()
// //     return data;
// //  }
// //  getRegion().then(users => {
   
   
// //     for(let i=0; i<users.length; i++){
// //        display.innerHTML += ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
// //     <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-[200px]">
// //     <div class="pb-10 pt-7 text-left h-3/5 ml-5">
// //         <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
// //         <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
// //         <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
// //         <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
// //     </div>
// //  </div>`}
// //    // console.log(users)
// // }); 

// console.log(africa.textContent);


// africa.addEventListener('click', getAfrica);
// (e) => {
//    e.preventDefault();
 
//    fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
//      .then((res) => {
//        if (!res.ok) throw new Error("invalid url");
 
//        return res.json();
//      })
//      .then((data) => {
//        let reply = JSON.stringify(data.result.short_link);
 
//        let output = ` <div class="flex flex-col justify-center items-center pb-12">
//      <div class="bg-white w-4/5 h-40 rounded-lg flex flex-col justify-evenly overflow-hidden text-ellipsis lg:flex-row lg:items-center lg:justify-between lg:h-20">
//      <p class="text-left px-5 text-ellipsis overflow-hidden ">${
//        linkInput.value
//      }</p>
//      <hr class="text-gray-500 lg:hidden">
//      <div class="lg:flex lg:items-center">
//      <p class="text-cyan text-left px-5 shortUrl" id="output-Url">${reply.slice(
//        1,
//        -1
//      )}</p>
//      <div class="px-5">
//      <button class="h-11 rounded-md w-full bg-cyan mt-2 font-bold text-white lg:w-40 lg:mt-0 copy" id='copied' onclick="print()">Copy</button>
//      </div>
//      </div>
//      </div>
//    </div>`;
 
//        linkInput.value = "";
//        userReply.innerHTML += output;
//      })
//      .catch((err) => {
//        userReply.innerHTML += ` <div class="flex flex-col justify-center items-center pb-12">
//    <div class="bg-white w-4/5 h-40 rounded-lg flex flex-col justify-evenly overflow-hidden text-ellipsis lg:flex-row lg:items-center lg:justify-between lg:h-20">
//    <p class="text-left px-5 text-ellipsis overflow-hidden ">${linkInput.value}</p>
//    <hr class="text-gray-500 lg:hidden">
//    <div class="lg:flex lg:items-center">
//    <p class="text-cyan text-left px-5 shortUrl" id="output-Url">${err}</p>
//      </div>
//      </div>
//      </div>`;
//        linkInput.value = "";
//      });
