export default ({name, value}) => {
    let regEx

    if(name === 'name' || name === 'lastname') regEx = /^[a-zA-Z0-9_-]{3,16}$/ // 3-16 letters
    else if(name === 'email') regEx = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    else regEx = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/ // Password should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long

    if(regEx.test(value)) return true
    else return false
}