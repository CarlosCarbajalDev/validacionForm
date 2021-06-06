        document.getElementById('button').addEventListener('click', validate)
        const errMessages = document.querySelectorAll('#error')

        
        const inputs = document.getElementsByTagName('input');
        const allBorders = document.querySelectorAll('.border-gray-200')

        const allTexts = document.querySelectorAll('.text-gray-500')

        const nameU = document.querySelector('#name')
        const apellP = document.querySelector('#apellP')
        const apellM = document.querySelector('#apellM')
        const sexo = document.querySelector('#sexo')
        const fecha = document.querySelector('#fecha')
        const estado = document.querySelector('#estado')
        const localidad = document.querySelector('#localidad')
        const pais = document.querySelector('#pais')
        const correo1 = document.querySelector('#correo1')
        const correo2 = document.querySelector('#correo2')

        /* Errores */
        const enameU = document.querySelector('#errorN')
        const eapellP = document.querySelector('#errorAP')
        const eapellM = document.querySelector('#errorAM')
        const esexo = document.querySelector('#errorS')
        const efecha = document.querySelector('#errorF')
        const eestado = document.querySelector('#errorE')
        const elocalidad = document.querySelector('#errorL')
        const epais = document.querySelector('#errorP')
        const ecorreo1 = document.querySelector('#errorC1')
        const ecorreo2 = document.querySelector('#errorC2')
        var pasoN = false;



        function validate() {
            var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
            var only1text = /^[a-zA-Z]+$/;
            
            if(regName.test(nameU.value)){
                enameU.classList.add('hidden')
                enameU.classList.remove('mala')
                console.log('Nombre correcto')
            }else{
                enameU.classList.remove('hidden')
                enameU.classList.add('mala')
                console.log('Nombre incorrecto')
            }/* Nombre */



            if(only1text.test(apellP.value)){
                eapellP.classList.remove('mala')
                eapellP.classList.add('hidden')
                console.log('apellP correcto')
            }else{
                eapellP.classList.add('mala')
                eapellP.classList.remove('hidden')
                console.log('apellP incorrecto')
            }/* ApellidoP */



            if(only1text.test(apellM.value)){
                eapellM.classList.remove('mala')
                eapellM.classList.add('hidden')
                console.log('apellM correcto')
            }else{
                eapellM.classList.add('mala')
                eapellM.classList.remove('hidden')
                console.log('apellM incorrecto')
            }/* ApellidoM */




            if(sexo.options[sexo.selectedIndex].value.length > 0){
                esexo.classList.remove('mala')
                esexo.classList.add('hidden')
                console.log('sexo correcto')
            }else{
                esexo.classList.add('mala')
                esexo.classList.remove('hidden')
                console.log('sexo incorrecto')
            }/* sexo */




            if(ValidateDOB()){
                efecha.classList.remove('mala')
                efecha.classList.add('hidden')
                console.log('Mayor de edad')
            }else{
                efecha.classList.add('mala')
                efecha.classList.remove('hidden')
                console.log('Menor de edad')
            }/* Fecha */




            if(estado.options[estado.selectedIndex].value.length > 0){
                eestado.classList.remove('mala')
                eestado.classList.add('hidden')
                console.log('estado correcto')
            }else{
                eestado.classList.add('mala')
                eestado.classList.remove('hidden')
                console.log('estado incorrecto')
            }/* sexo */




            if(only1text.test(localidad.value)){
                elocalidad.classList.remove('mala')
                elocalidad.classList.add('hidden')
                var pasoL = true;
                console.log('localidad correcta')
            }else{
                elocalidad.classList.add('mala')
                elocalidad.classList.remove('hidden')
                console.log('localidad incorrecta')
            }/* Localidad */




            if(pais.options[pais.selectedIndex].value){
                epais.classList.remove('mala')
                epais.classList.add('hidden')
                var pasoP = true;
                console.log('pais correcto')
            }else{
                epais.classList.add('mala')
                epais.classList.remove('hidden')
                console.log('pais incorrecto')
            }/* pais */





            if(confirmEmail()){
                
                var pasoC = true;
                console.log('Email coincide')
            }else{
                console.log('Email no coincide')
            }/* email */


            /* Obtiene todas las buenas */
            var Malas = document.querySelectorAll('.mala')
            /* var errorAyuda = document.querySelector('.mal') */
            console.log(Malas)
            
            if(Malas){
                if(Malas.length === 0){ 
                    window.location.href = "/card/formulario-tarjeta-credito-3d/index.html";
                }
            }
        }


        //Valida fecha
        function ValidateDOB() {
            var dateString = fecha.value;
            var regex = /(((19|20)\d\d)\-(0[1-9]|1[0-2])\-((0|1)[0-9]|2[0-9]|3[0-1]))$/
            //Check whether valid dd/MM/yyyy Date Format.
            if (regex.test(dateString)) {
                var parts = dateString.split("-");
                var dtDOB = new Date(parts[0] + "/" + parts[1] + "/" + parts[2]);
                var dtCurrent = new Date();
                if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                    //Menor de edad
                    console.log('Menor de edad')
                    return false;
                }
    
                if (dtCurrent.getFullYear() - dtDOB.getFullYear() > 18) {
                    //Mayor de edad
                    console.log('Mayor de edad')
                }
                return true;
            } else {
                //Formatio invalido
                console.log("Ingresa un formato con el tipo dd/MM/yyyy");
                return false;
            }
        }

        /* Confirma email */
        function confirmEmail() {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(correo1.value)){
                ecorreo1.classList.remove('mala')
                ecorreo1.classList.add('hidden')
                console.log('Email valido')
                if(correo1.value == correo2.value) {
                    ecorreo2.classList.remove('mala')
                    return true;
                }else{
                    ecorreo2.classList.add('mala')
                    return false;
                }
            }else{
                ecorreo1.classList.add('mala')
                ecorreo1.classList.remove('hidden')
                console.log('Email invalido')
            }
        }
        
        function toggleError() {
            
          // Show error message
          errMessages.forEach((el) => {
            el.classList.toggle('hidden')
          })
        
          // Highlight input and label with red
          
          allBorders.forEach((el) => {
              console.log(el, el.value);
            el.classList.toggle('border-red-600')
          })
          allTexts.forEach((el) => {
            el.classList.toggle('text-red-600')
          })
        }

        console.log(pais.options[pais.selectedIndex].value)

        
        /* if(regName.test(nameU.value) && only1text.test(apellP.value) && only1text.test(apellM.value) && only1text.test(localidad.value) ){ */
                /* Validacion sexo sexo.options[sexo.selectedIndex].value.length > 0 */
                /* Validacion estado estado.options[estado.selectedIndex].value.length > 0 */
                /* console.log(localidad.value.length > 0);
                console.log(ValidateDOB())
                alert('Valid name given.');
            }else{
                alert('Invalid name given.');
            }*/
            /* console.log('-----------------')
            console.log(nameU.value)
            console.log(apellP.value)
            console.log(apellM.value)
            console.log()
            console.log(fecha.value)
            console.log(estado.options[estado.selectedIndex].value)
            console.log(localidad.value)
            console.log(pais.options[pais.selectedIndex].value)
            console.log(correo1.value)
            console.log(correo2.value);  */

