const moon = document.getElementById('moon-icon');
  const sun = document.getElementById('sun-icon');
  const userTheme = localStorage.getItem('theme');
//   const systemTheme = window.matchMedia('(prefers-color-scheme:dark)').matches;
//   const display = document.getElementById('display-div');
//   const africa = document.getElementById('africa');
//   const america = document.getElementById('america');
//   const asia = document.getElementById('asia');
//   const europe = document.getElementById('europe');
//   const oceania = document.getElementById('oceania');
//   let output = document.getElementById('output');
//   const sel = document.getElementById('sel');
//   const search = document.getElementById('search');
  const countryDetail = document.getElementById('country-detail');

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




 document.addEventListener("DOMContentLoaded", getCountryDetail);

 async function getCountryDetail (){
    const response = await fetch('https://restcountries.com/v2/name/nigeria');
     const data = await response.json()
     return data;
  }
  getCountryDetail().then(users => {
    // console.log(users);
    
    for(let i=0; i < users.length; i++){  
      // let border= '';
      // for(let j=0; j < users[i].borders; j++){
      //    border = users[i].borders[j];
      // }
      // console.log(border);

     

       countryDetail.innerHTML = ` <div class="w-4/5 bg-whiteLMDM mb-9 rounded-[5px] shadow-md text-left dark:text-whiteLMDM dark:bg-darkBlue" onclick="getName">
       <div class='w-full'>
       <img src=${users[i].flags.svg} alt="" class="rounded-t-[5px] w-full h-full">
       </div>
       <div class="pb-10 pt-7 text-left h-3/5 ml-5 text-sm">
           <h2 class="text-lg font-bold pb-4">${users[i].name}</h2>
           <p class="font-semibold">Native Name: <span class="font-light">${users[i].nativeName}</span></p>
           <p class="font-semibold">Population: <span class="font-light">${users[i].population}</span></p>
           <p class="font-semibold">Region: <span class="font-light">${users[i].region}</span></p>
           <p class="font-semibold">Sub Region: <span class="font-light">${users[i].subregion}</span></p>
           <p class="font-semibold">Capital: <span class="font-light">${users[i].capital}</span></p>

           <div class="mt-5">
           <p class="font-semibold">Top Level Domian: <span class="font-light">${users[i].topLevelDomain}</span></p>
           <p class="font-semibold">Currencies: <span class="font-light">${users[i].currencies[0].name}</span></p>
           <p class="font-semibold">Languages: <span class="font-light">${users[i].languages[0].name}</span></p>
           </div>

           <div class="mt-5">
           <h2 class="text-[16px]  font-semibold">Border Countries:</h2>
           <p class="font-semibold"><span class="font-light">${users[i]['borders']}</span></p>
           </div>
       </div>
    </div> `;
 
 //   display.innerHTML = users.innerHTML;
 
 }
 }); 

 function getName (){
   console.log('click');
 }