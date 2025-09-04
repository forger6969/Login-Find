let usersOb = {
    forger: { password: "admin", name: "Saidazim", surname: "Buriboyev", age: 15, birthday: "26 / 11 / 2010", group: "F2 - 2879", teacher: "Ertan_Emirhan" },
    aziz: { password: "admin", name: "Aziz", surname: "Amangeldiev", age: 15, birthday: "26 / 3 / 2010", group: "F2 - 2879", teacher: "Ertan_Emirhan" },
    ahmad: { password: "admin", name: "Ahmad", surname: "Qahramonov", age: 15, birthday: "13 / 5 / 2010", group: "F2 - 2879", teacher: "Ertan_Emirhan" },
    voris: { password: "admin", name: "Vorisjon", surname: "Boboyev", age: 15, birthday: "16 / 8 / 2008", group: "F2 - 2879", teacher: "Ertan_Emirhan" },
    sardor: { password: "admin", name: "Sardor", surname: "Atxamov", age: 15, birthday: "20 / 1 / 2011", group: "F2 - 2879", teacher: "Ertan_Emirhan" },
}

const loginInput = document.getElementById(`login`)
const passwordInput = document.getElementById(`password`)
const findInput = document.getElementById(`find`)
const loginsBtn = document.getElementById(`loginBtn`)
const loginWrapp = document.getElementById(`logins-input`)
const findWrapp = document.getElementById(`find-input`)
const exitBtn = document.getElementById(`exitBtn`)
const findBtn = document.getElementById(`findBtn`)
const findList = document.getElementById(`findList`)
const findListp = document.querySelector(`.findP`)

const loginBox = document.getElementById(`login-box`)

const warning = document.getElementById(`warning`)


loginsBtn.addEventListener(`click`, () => {

    const loginInputValue = loginInput.value.trim();
    const passwordInputValue = passwordInput.value.trim();

    let userCheckLogin = usersOb[loginInputValue]

    if (loginInputValue === `` && passwordInputValue === ``) {

        warning.textContent = `Заполните все поля!`
        warning.classList.add(`active`)
        document.body.classList.add(`shake`)
        loginInput.classList.add(`none`)
        passwordInput.classList.add(`none`)

        setTimeout(() => {
            warning.classList.remove(`active`)
            document.body.classList.remove(`shake`)
            loginInput.classList.remove(`none`)
            passwordInput.classList.remove(`none`)
        }, 2000)

    } else if (!userCheckLogin) {
        warning.textContent = `Пользователь  -- ${loginInputValue} --  не найден`
        warning.classList.add(`active`)
        loginInput.classList.add(`none`)
        document.body.classList.add(`shake`)

        loginInput.value = ``

        setTimeout(() => {
            warning.classList.remove(`active`)
            document.body.classList.remove(`shake`)
            loginInput.classList.remove(`none`)

        }, 2000);

    } else if (passwordInputValue !== userCheckLogin.password) {

        warning.textContent = `Неверный пароль!`
        warning.classList.add(`active`)
        passwordInput.classList.add(`none`)
        document.body.classList.add(`shake`)
        passwordInput.value = ``

        setTimeout(() => {
            warning.classList.remove(`active`)
            document.body.classList.remove(`shake`)
            passwordInput.classList.remove(`none`)


        }, 2000)

    } else if (userCheckLogin && passwordInputValue === userCheckLogin.password) {

        loginWrapp.classList.remove(`active`)
        loginWrapp.classList.add(`none`)


        findWrapp.classList.remove(`none`)
        findWrapp.classList.add(`active`)

    }

})

exitBtn.addEventListener(`click`, () => {

    loginWrapp.classList.remove(`none`)
    loginWrapp.classList.add(`active`)



    findWrapp.classList.remove(`active`)
    findWrapp.classList.add(`none`)

    findBtn.classList.remove(`none`)
    findBtn.classList.add(`active`)

    findInput.classList.remove(`none`)

    findListp.classList.remove(`active`)

    loginInput.value = ''
    passwordInput.value = ''
    findInput.value = ''

})

findBtn.addEventListener(`click`, () => {

    const findInputValue = findInput.value.trim();

    const findUser = usersOb[findInputValue]


    console.log(findUser)

    if (findUser) {

        exitBtn.classList.add(`active`)
        exitBtn.classList.remove(`none`)

        findBtn.classList.remove(`active`)
        findBtn.classList.add(`none`)

        findInput.classList.add(`none`)

        findListp.textContent = `Имя:${findUser.name}\nФамилия:${findUser.surname}\nДень рождения:${findUser.birthday}\nВозраст:${findUser.age}\nГруппа:${findUser.group}\nУчитель:${findUser.teacher}`

        findListp.classList.add(`active`)

    }

})