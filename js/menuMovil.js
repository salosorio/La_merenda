

//propiedades

var propMovil = {

    buger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')

}


//metodos

var metMovil = {

    inicio: function(){
        propMovil.buger_menu.addEventListener('click', metMovil.toggleMenu);
    
        for(var i = 0; i < propMovil.elem_menu.length; i++){
            propMovil.elem_menu[i].addEventListener('click', metMovil.ocultarMenu);
        }
        
    },

    toggleMenu: function(){
        if (propMovil.menu_activo == false){

            propMovil.menu_activo = true;
            propMovil.slideMenu.className = propMovil.slideMenu.className + 'active'

        }else{
            propMovil.menu_activo = false;
            propMovil.slideMenu.className = propMovil.slideMenu.className.replace('active', '');
        } 

    }, 
    ocultarMenu: function(){
        propMovil.menu_activo = false;
        propMovil.slideMenu.className = propMovil.slideMenu.className.replace('active', '');
    }


}

metMovil.inicio();
