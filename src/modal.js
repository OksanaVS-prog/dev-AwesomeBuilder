window.addEventListener('load', ()=> {

    const initModalWindow = ()=> {
      const modalShowTriggers = document.querySelectorAll('[data-trigger]')
      const modalCloseTriggers = document.querySelectorAll('[data-close-modal]')

      modalShowTriggers.forEach(trigger => {
        trigger.addEventListener('click', ()=> {
          const triggerData = trigger.getAttribute('data-trigger')
          document.getElementById(triggerData).classList.add('show')
      })
      }
    )
    
      modalCloseTriggers.forEach(button => {
        button.addEventListener('click', ()=> {
      //  document.querySelector('.modal.show').classList.remove('show') 
      button.closest('.modal').classList.remove('show')
      })
      })
      
    }

    initModalWindow()
})