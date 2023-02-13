//////felles//////

//hente main (for alle sections)

const mainElement = document.querySelector('main')

//////home//////

function initHome() {  /*denne funksjonen rundt denne sektionen for 
                        å ikke få trøbbel med class navn og lignende 
                        i andre seksjoner av html. gjør det enklere 
                        å jobbe med.*/
//hente sectionHome 
    const sectionHome = document.querySelector('.sectionHome')
    //hente input
    const homeNewTask = document.querySelector('.homeNewTask')
    //hente button add task
    const homeButtonAdd = document.querySelector('#homeButtonAdd')
    //hent button Delete all!
    const homeButtonDelete = document.querySelector('#homeButtonDelete')
    //hent liste for doTasks
    const ulHomeDoTasks = document.querySelector('.homeDoTasks')
    //hente liste for doneTasks
    const ulHomeDoneTasks = document.querySelector('.homeDoneTasks')



    //function for å add tasks til to do list

    homeButtonAdd.addEventListener('click', addTask) 

    window.addEventListener('keyup', (add) => {
        if(add.key ==='Enter') {
            addTask()
        }
    })

    function addTask() {
        const liElement = document.createElement('li')
        const liButton = document.createElement('button')

    

        if(homeNewTask.value !=='') {
            liElement.textContent = homeNewTask.value;

            liButton.textContent = 'V'
            liButton.classList.add('buttonHomeDone', 'buttonHome')

            ulHomeDoTasks.appendChild(liElement)
            
            liElement.appendChild(liButton)
            homeNewTask.value = '';   //gjør at input blir tom etter man har trykket add task eller enter.
        
        }

        
        
        //function for å flyte en li fra ulhomeDoTasks til ulHomeDoneTasks

        liButton.addEventListener('click', moveTask) 

        function moveTask() {

            liElement.classList.add('done')  /* denne classen putter jeg 
            inn her for at 'deleteAll' functionen(knappen) skal finne de elementene 
            den skal slette.*/
            
            liElement.removeChild(liButton) //fjerner knappen for jeg vil ikke ha den i done listen.
            ulHomeDoTasks.removeChild(liElement) //denne fjerner liElement fra todo listen
            ulHomeDoneTasks.appendChild(liElement)  //denne legger inn liElementet, som vi fjernet fra todo listen, inn i done listen.
            
        }

        //function for å slette li items fra ulHomeDoneTasks

        /* const homeButtonDelete = document.getElementById('homeButtonDelete') */

        homeButtonDelete.addEventListener('click', deleteAll)

        function deleteAll() {
            const liElement = document.querySelector('.done')

            ulHomeDoneTasks.innerHTML = ''; 
                /* gikk for innerHTML fordi 
                ulHomeDoneTasks.removeChild(liElement)
                ga en feilmelding når man bruker denne 
                funskjonen mer enn en gang.
                */

                //kanskje man kan lage en if statment for å unngå feilmelding?
        }
    }

}

initHome()
//kilder som har hjulpet meg til å se løsninger:
//forelesningsnotater
//https://youtu.be/-pRg_daFjfk



/* localStorage.removeItem('keyName')

localStorage.clear('keyName') */


////////Work/////////////







//////////Private////////




