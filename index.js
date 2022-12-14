
const submit = document.querySelector('form')
const message = document.querySelector('#message')


const addMovie = (e) => {
    e.preventDefault()
    const inputField = document.querySelector('input')
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value

    //Cross Movie
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)
    
    //Delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    // Adding to list
    const list = document.querySelector('ul')
    list.appendChild(movie)
    
}

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = 'Movie Deleted'
}

const crossOffMovie = (e) => {
    e.target.classList.toggle('checked')
    if (e.target.classList.contains('checked')) {
        message.textContent = "Movie Watched"
    } else {
        message.textContent = "Movie added back!"
    }
}

submit.addEventListener('submit', addMovie)
