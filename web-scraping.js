// Execute esse script no console do navegador na página: https://pt.wikipedia.org/wiki/Software_como_servi%C3%A7o

var lis = document.getElementsByClassName("sidebar-toc-list-item sidebar-toc-level-1 sidebar-toc-list-item-expanded");
              
const arraySubs = [];

for(let i = 0; i < lis.length; i++) {
    var div = lis[i].getElementsByClassName("sidebar-toc-text");
    var nome = div[0].textContent.replace(/[0-9]/g,'');
    arraySubs.push(nome);
}
              
    //Saida da String
for(let i = 0; i < arraySubs.length; i++) {
    console.log(arraySubs[i]);
}       