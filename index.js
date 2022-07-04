window.addEventListener('DOMContentLoaded', () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const postInput = document.createElement('input')
      postInput.type
        console.log(data)
      data.forEach((el, idx) => {
        const titleUser = document.createElement('p')
        titleUser.textContent = el.title
        document.body.prepend(titleUser)
        const buttonDelete = document.createElement('button')
        buttonDelete.textContent = 'DELETE'
        titleUser.append(buttonDelete)
        const input = document.createElement('input')
        input.type = 'checkbox'
        titleUser.prepend(input)

        input.addEventListener('change', () => {
          patchTitle(idx);
        })

        buttonDelete.addEventListener('click', () => {
          deleteTitle(el.id, titleUser)
        })

    })

    async function deleteTitle(id, node) {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, 
      {method: 'DELETE'})
      node.remove()
    }

    async function patchTitle(id, node) {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
        {method: 'PATCH',
        headers: {
        "Content-type": "application/json"},
        })

        
        data.completed = !data.completed
        console.log(data.completed)
      } 
      patchTitle(3)
    
})





















  })