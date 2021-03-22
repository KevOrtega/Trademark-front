import Database from "./Database.js"

export const getAllCompanies = () => Database.filter(user => user.company ? true : false).map(user => user.company)

export const getCompany = (title) => {
    const user = Database.filter(user => user.company ? true : false).find(user => user.company.title === title)

    if(user) return user.company
    else return {message: "company not found"}
}

export const updateCompany = (title, props) => {
    const user = Database.find(user => user.company.title === title)

    if(user) {
        const keys = Object.keys(props)
        keys.forEach(key => user.company[key] = props[key])
    }
    else return {message: "company not found"}
}

export const deleteCompany = (title) => {
    const user = Database.find(user => user.company.title === title)

    if(user) {
        user.company = {}
    }
}

export const addUser = (json) => Database.push(json)

export const updateUser = (email, password, img) => {
    const user = Database.find(user => user.email === email && user.password === password)
    user.avatar = img
}

export const getUsers = () => Database

export const getUser = (email, password) => {
    const user = Database.find(user => user.email === email && user.password === password)

    if(user) return user
}
