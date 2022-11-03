// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme') 

  const moon = document.getElementById('moon-icon');
  const sun = document.getElementById('sun-icon');

  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('prefers-color-scheme:dark').matches;

  const iconToggle = () => {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
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

 sun.addEventListener('click', () => {
    themeSwitch();
 });
