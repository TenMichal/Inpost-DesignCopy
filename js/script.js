document.querySelectorAll('.delivery .method').forEach(method => {
    method.addEventListener('click', () => {
        document.querySelectorAll('.method').forEach(m => {
            m.classList.remove('active')
        })
        method.classList.add('active')
    })
})

document.querySelectorAll('.size .part').forEach(size => {
    size.addEventListener('click', () => {
        document.querySelectorAll('.size .part').forEach(s => {
            s.classList.remove('active')
        })
        size.classList.add('active')
    })
})