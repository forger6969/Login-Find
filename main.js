let usersOb = {
    forger: { password: "admin", name: "Saidazim", surname: "Buriboyev", age: 15, birthday: "26 / 11 / 2010", group: "F2 - 2879", teacher: "Ertan_Emirhan" },
    aziz: { password: "admin", name: "Aziz", surname: "Amangeldiev", age: 15, birthday: "26 / 3 / 2010", group: "F2 - 2879", teacher: "Ertan_Emirhan" }
}

const loginInput = document.getElementById(`login`)
const passwordInput = document.getElementById(`password`)
const findInput = document.getElementById(`find`)
const loginsBtn = document.getElementById(`findBtn`)

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

        findInput.classList.add(`active`)
        loginInput.classList.add(`disable`)
        passwordInput.classList.add(`disable`)

    }

})

