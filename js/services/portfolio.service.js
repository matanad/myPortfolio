'use strict'

const GITHUB_URL = 'https://matanad.github.io/'

const gProjects = [
    {
        id: 'todo',
        name: 'TODO App',
        title: 'Online & responsive to-do list app',
        url: `/todo-App/`,
        publishedAt: 1669916185000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: 'pishoto',
        name: 'Pishoto Balloons',
        title: 'Game',
        url: `/Pishoto/`,
        publishedAt: 1669916185000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: 'mineSweeper',
        name: 'Mine Sweeper',
        title: 'Game develop and design',
        url: `/mine-sweeper/`,
        publishedAt: 1669224985000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: 'touchNums',
        name: 'Touch The Nums',
        title: 'Web Game',
        url: `/CodeAcTouchNums/`,
        publishedAt: 1669916185000,
        labels: ["Matrixes", "keyboard events"],
    }
]

function getProjects() {
    return gProjects
}

function getProjById(projId) {
    return gProjects.find(project => project.id === projId)
}

function getProjUrl(proj){
    return GITHUB_URL + proj.url
}

function getDate(proj) {
    const date = new Date(proj.publishedAt)
    const year = date.getFullYear()
    const month = getMonthName(date.getMonth())
    return month + ' ' + year
}

function getMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[month]
}