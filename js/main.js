
const CambioIntermedio = document.getElementById("trabajos__ofertas");
const CI_i = CambioIntermedio.getElementsByTagName("i");
const CI_s = CambioIntermedio.getElementsByTagName("span");

function   ChangeBasicos() {
   const span_intermedios = ['Lenguaje de marcado para paginas web',
                            'CCS3 Hoja de estilos en cascada',
                            'JavaScript Lenguaje de programación',
                            'Seguridad para todos tus proyectos'];

    const icons_intermedios = ['fab fa-html5','fab fa-css3-alt','fab fa-js','fas fa-user-secret'];

    for(let i=0;i<CI_i.length;i++){ 
            CI_i[i].setAttribute('class',icons_intermedios[i]);
            CI_s[i].innerHTML = span_intermedios[i];
        }
}

function   ChangeIntermedios() {
    const span_intermedios = ['JavaScript Lenguaje de programación',
                            'Python Lenguaje de programación',
                            'Total acceso al repositorio del proyecto',
                            'SHH red cifrada para mayor seguridad'];
    
    const icons_intermedios = ['fab fa-node-js','fab fa-python','fab fa-github','fas fa-shield-alt'];

    for(let i=0;i<CI_i.length;i++){ 
            CI_i[i].setAttribute('class',icons_intermedios[i]);
            CI_s[i].innerHTML = span_intermedios[i];
        }
}

function  ChangeAvanzados() {
    const span_intermedios = ['React es una biblioteca Javascrip',
                            'Diseño 100% Responsive Design',
                            'Base de datos personalizada ',
                            'Servidores 100% dedicados'];

    const icons_intermedios = ['fab fa-react','fas fa-mobile-alt','fas fa-database','fas fa-server'];

    for(let i=0;i<CI_i.length;i++){ 
            CI_i[i].setAttribute('class',icons_intermedios[i]);
            CI_s[i].innerHTML = span_intermedios[i];
        }
}



/*----------------MODAL-------------*/

const modal = document.getElementById("control_modal")

function modalAbrir(){
    modal.style.display = "block"
}
function modalCerrar(){
    modal.style.display = "none";
}

/*----------------Hamb Movil-------------------*/
var HaMov = document.getElementById("hamb_movil")
var S_Mov = document.getElementById("slider_barra_movil")
function cerrar_nav(){
    S_Mov.style.left = "-100%";
    HaMov.style.display = "block";
}
function abrir_nav(){
    HaMov.style.display = "none";
    S_Mov.style.left ="0px";
}

let slider = document.querySelector(".slider__desarrollo")
let sliderIndividual = document.querySelectorAll(".contenido__slider")
let sliderImg = document.querySelectorAll(".contenido__slider img")
let spanSlider = document.querySelector(".texto__desarrollo p span ")
let contador = 0;
let intervalo = 8000;
const slider__imagenes = ['02','03','04','05']
const slider_span = ['Arquitectura y contenido web',
                     'Testing de la paginas en los servidores',
                     'Posicionamiento (seo)',
                     'Marketing online',
                     'Recolección de datos']
/*------------*/


window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    contador++;
    if(contador == 1){
        setTimeout(function(){
            sliderIndividual[contador].style.display = "inherit";
            sliderIndividual[contador-1].style.display = "none";
            spanSlider.innerHTML = slider_span[contador-1]
            sliderImg[contador].setAttribute("src",`image/desarrollo/desarrollo${slider__imagenes[contador-1]}.svg`)
        },6000)
    }
    if(contador == 2){
        setTimeout(function(){    
            sliderIndividual[contador].style.display = "inherit";
            sliderImg[contador].setAttribute("src",`image/desarrollo/desarrollo${slider__imagenes[contador-1]}.svg`)
            spanSlider.innerHTML = slider_span[contador-1]
            slider.style.transition = "transform .12s"
            sliderIndividual[contador-1].style.display = "none";
        },6000)
    }
    if(contador == 3){
        setTimeout(function(){
            sliderIndividual[contador].style.display = "inherit";
            sliderIndividual[contador-1].style.display = "none";
            sliderImg[contador].setAttribute("src",`image/desarrollo/desarrollo${slider__imagenes[contador-1]}.svg`)
            slider.style.transition = "transform .12s";
            spanSlider.innerHTML = slider_span[contador-1]
        },6000)
    }
    if(contador == 4){
        setTimeout(function(){
            sliderIndividual[contador].style.display = "inherit";
            sliderIndividual[contador-1].style.display = "none";
            sliderImg[contador].setAttribute("src",`image/desarrollo/desarrollo${slider__imagenes[contador-1]}.svg`)
            slider.style.transition = "transform .12s";
            spanSlider.innerHTML = slider_span[contador-1]
        },6000)
    }
    if(contador == 5){
        setTimeout(function(){
            spanSlider.innerHTML = slider_span[contador-1];
            sliderIndividual[contador-1].style.display = "none";
            contador = 0;
            sliderIndividual[contador].style.display = "inherit";
            slider.style.transition = "transform .12s";
        },6000)
    }
}

window.onload = function(){
	document.getElementById('Proy_Basico').addEventListener('click',ChangeBasicos,true);
    document.getElementById('Proy_Intermedio').addEventListener('click',ChangeIntermedios,true);
    document.getElementById('Proy_Avanzado').addEventListener('click',ChangeAvanzados,true);
    document.getElementById("btn_slider_movil").addEventListener('click',cerrar_nav,true);
    document.getElementById("btn_abrir_slider").addEventListener('click',abrir_nav,true);
};

window.addEventListener("click",function(e){
    if(e.target === reposo_modal){
        modal.style.display = "none";
    }
});