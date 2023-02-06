/******************** 
DOM ELEMENTS*/ 
let sub_el = document.getElementById('subtotal')
let desconto_el = document.getElementById('desconto')
let total_el = document.getElementById('total')
let imagem_el = document.getElementById('imagem')
let nome_text = document.getElementById('nome')
let qt = document.getElementById('quantidade')


/******************** 
DADOS*/ 
let total = localStorage.getItem('total')
let subtotal = localStorage.getItem('subtotal')
let desconto = localStorage.getItem('desconto')
let nome = localStorage.getItem('nome')


const c = (el)=>document.querySelector(el);
let modalQt = 1;

function loadInfo(){
    update()
}

function update(){
    
    let s = localStorage.getItem('subtotal')
    let d = localStorage.getItem('desconto')
    let t = localStorage.getItem('total')

    
    sub_el.innerHTML = `R$ ${parseFloat(localStorage.getItem('subtotal')).toFixed(2)}`
    desconto_el.innerHTML = `R$ ${parseFloat(localStorage.getItem('desconto')).toFixed(2)}`
    total_el.innerHTML = `R$ ${parseFloat(localStorage.getItem('total')).toFixed(2)}`
    nome_text.innerHTML = nome
    imagem.src = localStorage.getItem('img')

}

c('.modelsInfo--qtmenos').addEventListener('click', ()=>{

    if(modalQt > 1) {
        modalQt--;
        localStorage.setItem('subtotal', subtotal * modalQt)
        localStorage.setItem('desconto', localStorage.getItem('subtotal') * 0.1)
        localStorage.setItem('total', localStorage.getItem('subtotal') - localStorage.getItem('desconto'))
        qt.innerHTML = modalQt;
    }
    
    console.log(modalQt)
    /*
        desconto = subtotal * 0.1;
        total = subtotal - desconto;*/ 
    update()

});

c('.modelsInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    localStorage.setItem('subtotal', subtotal * modalQt)
    localStorage.setItem('desconto', localStorage.getItem('subtotal') * 0.1)
    localStorage.setItem('total', localStorage.getItem('subtotal') - localStorage.getItem('desconto'))
    qt.innerHTML = modalQt

    console.log(modalQt)
    update()

});

c('.cart--finalizar').addEventListener('click', ()=>{
    localStorage.setItem('total', 0)
    localStorage.setItem('subtotal',0)
    localStorage.setItem('desconto', 0)
})