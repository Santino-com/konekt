let buttonNotis = document.getElementById('openNotis');
let buttonClose = document.getElementById('closeNotis');
let notis = document.getElementById('notis');




buttonNotis.addEventListener('click', function() {
    notis.classList.add('open');
});

buttonClose.addEventListener('click', function() {
    notis.classList.remove('open');
});


let buttonEquipos = document.getElementById('equipo');
let buttonCloseEquipo = document.getElementById('closeEquipo');
let equipo = document.getElementById('popupEquipo');

buttonEquipos.addEventListener('click', function() {
    equipo.classList.add('open');
});

buttonCloseEquipo.addEventListener('click', function() {
    equipo.classList.remove('open');
});



let buttonProfile = document.getElementById('buttonProfile');
let buttonCloseProfile = document.getElementById('closeProfileContainer');
let profile = document.getElementById('profileContainer');

buttonProfile.addEventListener('click', function() {
    profile.classList.add('open');
});

buttonCloseProfile.addEventListener('click', function() {
    profile.classList.remove('open');
});
