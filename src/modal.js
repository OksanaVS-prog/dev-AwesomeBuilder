window.addEventListener('load', ()=> {

    const initModalWindow = ()=> {
      const trigger = document.querySelector('#trigger')
      const modal = document.querySelector('.modal')
      const closeWindow = document.querySelector('#close-window')

      trigger.addEventListener('click', ()=> {
        modal.classList.add('show')
      })

      closeWindow.addEventListener('click', ()=> {
        modal.classList.remove('show')
      })
    }

    initModalWindow()
})