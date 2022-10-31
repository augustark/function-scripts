const observer = new IntersectionObserver(function(entries) {
  const main = document.querySelector('.content')
  const listIndicator = document.querySelector('#list-indicator')

  entries.forEach(entry => {
    let activeIndex = Array.from(main.children).indexOf(entry.target);

    if (entry.isIntersecting) {
      listIndicator.children[activeIndex].classList.add('onView')
    } else {
      listIndicator.children[activeIndex].classList.remove('onView')
    }
  })
}, {threshold: [0.8]}) 

const sections = document.querySelectorAll('section')
sections.forEach((sect) => observer.observe(sect))

const main = document.querySelector('.content')
const listIndicator = document.querySelector('#list-indicator') 
Array.from(listIndicator.children).forEach((list, index) => {
  list.addEventListener('click', function() {
    main.children[index].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest'})
  })
})