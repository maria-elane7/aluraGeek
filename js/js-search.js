const searchInput = document.getElementById("search-input");

searchInput.addEventListener('input',(event) => {
    const value = formatString(event.target.value);

    const noResults = document.getElementById("no-results");

    let hasResults = false;

    const produtos = document.querySelectorAll(".secao .produtos");

    produtos.forEach(itens => {
        if(formatString(itens.textContent).indexOf(value) !== -1){
            itens.style.display = 'flex';

            hasResults = true;
        }else{
            itens.style.display = 'none';
        }
    })

    if(hasResults){
        noResults.style.display = 'none';
    }else{
        noResults.style.display = 'block';
    }
});

function formatString(value){
   return value
   .toLowerCase()
   .trim()
   .normalize('NFD')
   .replace(/[\u0300-\u036f]/g, '');
   
}