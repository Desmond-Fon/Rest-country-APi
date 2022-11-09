  const moon = document.getElementById('moon-icon');
  const sun = document.getElementById('sun-icon');
  const userTheme = localStorage.getItem('theme');
//   const systemTheme = window.matchMedia('(prefers-color-scheme:dark)').matches;
  const display = document.getElementById('display-div');
//   const africa = document.getElementById('africa');
//   const america = document.getElementById('america');
//   const asia = document.getElementById('asia');
//   const europe = document.getElementById('europe');
//   const oceania = document.getElementById('oceania');
  let output = document.getElementById('output');
  const sel = document.getElementById('sel');
  const search = document.getElementById('search');
  const countryDetail = document.getElementById('country-detail');
  const hello = document.querySelectorAll('.hello');

  const iconToggle = () => {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
  };


 const themeCheck = () => {
    if (userTheme === 'dark') {
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


 sun.addEventListener('click', () => {
    themeSwitch();
 });

 themeCheck();



document.addEventListener("DOMContentLoaded", getCountriies);

async function getCountriies (){
   const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json()
    return data;
 }
 getCountriies().then(users => {
   // console.log(users);
   
   for(let i=0; i < users.length; i++){
     
      users.innerHTML += `<div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue hello">
 
      <div class='w-full'>
      <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-full">
      </div>
      <div class="pb-10 pt-7 text-left h-3/5 ml-5">
          <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
          <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
          <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
          <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
      </div>

   </div>`;

  display.innerHTML = users.innerHTML;

}
}); 

hello.forEach(box => {
   box.addEventListener('click', function handleClick(event) {
     console.log('box clicked', event);
 
    
   });
 });



function changeRegion (y) {

   fetch(`https://restcountries.com/v3.1/region/${y.value}`)
   .then(res => {
      if(!res.ok) throw new Error(`Something went wrong. ${res.status} ${res.statusText}`)
      return res.json()
    })
   .then(users => {
      for(let i=0; i<users.length; i++){
         
          users.innerHTML += `<div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue" onclick="getNames">
          <a href="country.html">
          <div class='w-full'>
          <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-full">
          </div>
          <div class="pb-10 pt-7 text-left h-3/5 ml-5">
              <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
              <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
              <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
              <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
          </div>
          </a>
       </div> `;
       
      display.innerHTML = users.innerHTML;
      // console.log(users[i].name.common);
         }
})
.catch(err => {console.error(err)
   display.innerHTML = `<div class="flex flex-col justify- items-center" id="display-div">
   ${err}
   </div>`
})
};



function getNames (){
   console.log(clicked);
}



search.addEventListener("keypress", searchCountries);

function searchCountries (y) {
let userSearch = search.value.toLowerCase();
      fetch(`https://restcountries.com/v3.1/name/${userSearch}`)
      .then(res => {
         if(!res.ok) throw new Error(`Something went wrong, please ensure you spell the country correctly. ${res.status}`)
         return res.json()
       })
      .then(users => {
         for(let i=0; i<users.length; i++){
             users.innerHTML += `<div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue">
             <a href="country.html">
             <div class='w-full'>
             <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-full">
             </div>
             <div class="pb-10 pt-7 text-left h-3/5 ml-5">
                 <h2 class="text-lg font-bold pb-4">${users[i].name.common}</h2>
                 <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
                 <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
                 <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>
             </div>
             </a>
          </div> `;
          

         display.innerHTML = users.innerHTML;

            }
   })
   .catch(err => {console.error(err)
      display.innerHTML = `<div class="flex flex-col justify-center items-center" id="display-div text-center">
      ${err.message}
      </div>`
   })
   };

   function getName () {
      console.log('clicked');
   }




   