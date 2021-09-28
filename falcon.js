const log = console.log.bind(console)

const e = (selector) => {
    let element = document.querySelector(selector)
    if (element === null) {
        let s = `选择器 ${selector} 写错了`
        alert(s)
        return null
    } else {
        return element
    }
}

const es = (selector) => {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let s = `选择器 ${selector} 写错了`
        alert(s)
        return []
    } else {
        return elements
    }
}

const removeClassAll = (className) => {
    let selector = '.' + className
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        e.classList.remove(className)
    }
}

const bindEvent = (element, eventName, callback) => {
    element.addEventListener(eventName, callback)
}

const bindAll = (selector, eventName, callback) => {
    let elements = es(selector)
    for (let i = 0; i < elements.length; i++) {
        let e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

const find = (element, selector) => {
    let e = element.querySelector(selector)
    if (e === null) {
        let s = `选择器 ${selector} 写错了, 请仔细检查并且复习三种基本的选择器`
        alert(s)
        return null
    } else {
        return e
    }
}

const closestClass = (element, className) => {
    let e = element
    while (e !== null) {
        if (e.classList.contains(className)) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

const closestId = (element, idName) => {
    let e = element

    while (e !== null) {
        if (e.id === idName) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

const closestTag = (element, tagName) => {
    let e = element
    while (e !== null) {
        if (e.tagName.toUpperCase() === tagName.toUpperCase()) {
            return e
        } else {
            e = e.parentElement
        }
    }
    return null
}

const closest = (element, selector) => {
    let c = selector[0]
    if (c === '.') {
        let className = selector.slice(1)
        return closestClass(element, className)
    } else if (c === '#') {
        let idName = selector.slice(1)
        return closestId(element, idName)
    } else {
        let tagName = selector
        return closestTag(element, tagName)
    }
}

