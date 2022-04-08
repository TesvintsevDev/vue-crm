const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Пользователь с таким email не зарегистрирован',
    INVALID_PASSWORD: 'Пароль неверный',
    auth: 'Пожалуйста войдите в систему'
}

export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}