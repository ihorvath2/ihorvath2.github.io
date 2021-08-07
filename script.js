// Gallery app - Green Fox MyFirstApp Coding Camp
let keptomb = [kep0, kep1, kep2, kep3, kep4, kep5, kep6, kep7, kep8, kep9, kep10, kep11]
let aktualiskep = 0;
let kepbetoltes = (kepAZ) => {
   $('#keptarolo').attr('src', './images/' + keptomb[kepAZ].file);
   $('#kepcim').text(keptomb[kepAZ].cim);
   $('#kepleiras').text(keptomb[kepAZ].leiras);
   $('.thumbn').css('border-color','#eeeeee');
   $('#indexkontener').find('.thumbn').eq(kepAZ).css('border-color', 'yellow');
}
$('#balragomb').click(() => {
   if (aktualiskep>0) {
      aktualiskep--;
   } else if (aktualiskep==0) {
      aktualiskep = keptomb.length;
   } else {}   
   kepbetoltes(aktualiskep);
})
$('#jobbragomb').click(() => {
   if (aktualiskep<keptomb.length) {
      aktualiskep++;
   } else if (aktualiskep==keptomb.length) {
      aktualiskep = 0;
   } else {}   
   kepbetoltes(aktualiskep);  
})
keptomb.forEach((item, index) => {
   $('#indexkontener').append(`<div class="thumbdiv"> <img class="thumbn" data-index="${index}" src="./thumbn/`+ item.file +`"> <div class="thumbcim">` + item.cim + `</div> </div>`);
   $('.thumbn').click((event) => {
      let idxclicked = $(event.target).attr('data-index');
      let numindex = parseInt(idxclicked);
      kepbetoltes(numindex);
   });
});
kepbetoltes(aktualiskep);
