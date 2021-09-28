// 点击播放下一张图
const nextIndex = (slide, offset) => {
    let numberOfImgs = parseInt(slide.dataset.imgs, 10)
    let activeIndex = parseInt(slide.dataset.active, 10)
    let i = (activeIndex + offset + numberOfImgs) % numberOfImgs
    return i
}

const bindEventSlide = () => {
    let selector = '.slide-button'
    bindAll(selector, 'click', (event) => {
        let self = event.target
        let slide = self.closest('.slide')
        let offset = Number(self.dataset.offset)
        let index = nextIndex(slide, offset)
        showAtIndex(slide, index)
    })
}

const showAtIndex = (slide, index) => {
    slide.dataset.active = index
    let nextSelector = '#id-image-' + String(index)
    let className = 'slide-image-active'
    removeClassAll(className)
    let img = e(nextSelector)
    img.classList.add(className)

    removeClassAll('dot-active')
    let dotSelector = `#id-dot-${index}`
    let dot = e(dotSelector)
    dot.classList.add('dot-active')
}

const bindEventDot = () => {
    let selector = '.slide-dot'
    bindAll(selector, 'mouseover', (event) => {
        let self = event.target
        let index = Number(self.dataset.index)
        let slide = self.closest('.slide')
        showAtIndex(slide, index)
    })
}

// 自动播放下一张图
const bindEventTimer = () => {
    let slide = e('.slide')
    slide.addEventListener('mouseover', (event) => {
        let clock = Number(slide.dataset.clock)
        clearInterval(clock)
    })
    slide.addEventListener('mouseout', () => {
        autoPlay()
    })
}

const playNextImage = () => {
    let slide = e('.slide')
    let index = nextIndex(slide, 1)
    showAtIndex(slide, index)
}

const autoPlay = () => {
    let slide = e('.slide')
    let interval = 2000
    let clockId = setInterval(() => {
        playNextImage()
    }, interval)
    slide.dataset.clock = clockId
}

const bindEvents = () => {
    bindEventSlide()
    bindEventDot()
    bindEventTimer()
}

const __main = () => {
    bindEvents()
    autoPlay()
}

__main()
