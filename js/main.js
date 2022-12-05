'use strict'

$(document).ready(init)

function init() {
    renderPortProjects()
    setListeners()
}

function setListeners() {
    $('.portfolio-link').click(onOpenModal)
    $('#contact button').click(onSubmit)
}

function renderPortProjects() {
    console.log('render render');
    const projects = getProjects()
    var strHtml = projects.map(project =>
        `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <div class="portfolio-link" data-proj-id="${project.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="todo app">
          </div>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>
        `
    )
    $('#portfolio .projects-container').append(strHtml)
}

function renderPortfolioModal(elPortfolio) {
    console.log(elPortfolio.dataset.projId)
    const projId = elPortfolio.dataset.projId
    const proj = getProjById(projId)
    $('#portfolioModal1 h2').text(proj.name)
    $('#portfolioModal1 p.item-intro').text(proj.title)
    $('#portfolioModal1 img').attr('src', `img/portfolio/${proj.id}.png`)
    $('#modal-description').text(proj.title)

    $('#portfolioModal1 .list-inline').html(`
        <li>Date: ${getDate(proj)}</li>
        <li>Client: Threads</li>
        <li>Category: Illustration</li>
        `
    )

    $('#portfolioModal1 a').attr('href', getProjUrl(proj))
}

function onOpenModal() {
    renderPortfolioModal(this)
    $('#portfolioModal1').modal("toggle")
}

function onSubmit(ev) {
    // ev.preventDefault()
    const email = $('#email').val()
    const subject = $('#subject').val()
    const txt = $('#txt').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${txt}`,
        '_blank')
    // closing the canvas
    // openCanvas()


}