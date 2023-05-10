$(document).ready(function () {

    // Слайдер с отзывами
    $('.reviews__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="slider__arrow slider__arrow-next"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4997 46.4167C10.8726 46.4167 0.583008 36.1271 0.583008 23.5C0.583008 10.8729 10.8726 0.583357 23.4997 0.583357C36.1268 0.583357 46.4163 10.8729 46.4163 23.5C46.4163 36.1271 36.1268 46.4167 23.4997 46.4167ZM29.8934 22.2854L21.8038 14.1959C21.4601 13.8521 21.0247 13.6917 20.5893 13.6917C20.1538 13.6917 19.7184 13.8521 19.3747 14.1959C18.7101 14.8604 18.7101 15.9604 19.3747 16.625L26.2497 23.5L19.3747 30.375C18.7101 31.0396 18.7101 32.1396 19.3747 32.8042C20.0393 33.4688 21.1393 33.4688 21.8038 32.8042L29.8934 24.7146C30.5809 24.05 30.5809 22.95 29.8934 22.2854Z" fill="white" fill- opacity="0.99" /></svg></div>',
        prevArrow: '<div class="slider__arrow slider__arrow-prev"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5003 0.583313C36.1274 0.583313 46.417 10.8729 46.417 23.5C46.417 36.1271 36.1274 46.4166 23.5003 46.4166C10.8732 46.4166 0.583657 36.1271 0.583657 23.5C0.583657 10.8729 10.8732 0.583313 23.5003 0.583313ZM17.1066 24.7146L25.1962 32.8041C25.5399 33.1479 25.9753 33.3083 26.4107 33.3083C26.8462 33.3083 27.2816 33.1479 27.6253 32.8041C28.2899 32.1396 28.2899 31.0396 27.6253 30.375L20.7503 23.5L27.6253 16.625C28.2899 15.9604 28.2899 14.8604 27.6253 14.1958C26.9607 13.5312 25.8607 13.5312 25.1962 14.1958L17.1066 22.2854C16.4191 22.95 16.4191 24.05 17.1066 24.7146Z" fill="white"/></svg></div>',
        responsive: [{
                breakpoint: 900,
                settings: {
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
        ]
    });

    // On before slide change
    $(".reviews__items").on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        slick.$slides.each(function () {
            $(this).removeClass('show')
        })
    });

    //развернуть отзыв
    $('.reviews__item-btn').click(function () {
        $(this).parent().toggleClass('show');
    });

    document.querySelector('header .burger').addEventListener('click', function () {
        document.querySelector('.mobile-menu').classList.add('is-active');
        document.querySelector('body').classList.add('mobile');
    })
    document.querySelector('.mobile-menu .burger').addEventListener('click', function () {
        document.querySelector('.mobile-menu').classList.remove('is-active');
        document.querySelector('body').classList.remove('mobile');
    })
    document.querySelectorAll('.mobile-menu__nav li svg, .mobile-menu__nav > li > span').forEach(function (el) {
        el.addEventListener('click', function (e) {
            el.parentElement.classList.toggle('is-active');
        })
    })

    // Слайдер у hall
    $('.hall__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<div class="slider__arrow slider__arrow-next"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4997 46.4167C10.8726 46.4167 0.583008 36.1271 0.583008 23.5C0.583008 10.8729 10.8726 0.583357 23.4997 0.583357C36.1268 0.583357 46.4163 10.8729 46.4163 23.5C46.4163 36.1271 36.1268 46.4167 23.4997 46.4167ZM29.8934 22.2854L21.8038 14.1959C21.4601 13.8521 21.0247 13.6917 20.5893 13.6917C20.1538 13.6917 19.7184 13.8521 19.3747 14.1959C18.7101 14.8604 18.7101 15.9604 19.3747 16.625L26.2497 23.5L19.3747 30.375C18.7101 31.0396 18.7101 32.1396 19.3747 32.8042C20.0393 33.4688 21.1393 33.4688 21.8038 32.8042L29.8934 24.7146C30.5809 24.05 30.5809 22.95 29.8934 22.2854Z" fill="white" fill- opacity="0.99" /></svg></div>',
        prevArrow: '<div class="slider__arrow slider__arrow-prev"><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5003 0.583313C36.1274 0.583313 46.417 10.8729 46.417 23.5C46.417 36.1271 36.1274 46.4166 23.5003 46.4166C10.8732 46.4166 0.583657 36.1271 0.583657 23.5C0.583657 10.8729 10.8732 0.583313 23.5003 0.583313ZM17.1066 24.7146L25.1962 32.8041C25.5399 33.1479 25.9753 33.3083 26.4107 33.3083C26.8462 33.3083 27.2816 33.1479 27.6253 32.8041C28.2899 32.1396 28.2899 31.0396 27.6253 30.375L20.7503 23.5L27.6253 16.625C28.2899 15.9604 28.2899 14.8604 27.6253 14.1958C26.9607 13.5312 25.8607 13.5312 25.1962 14.1958L17.1066 22.2854C16.4191 22.95 16.4191 24.05 17.1066 24.7146Z" fill="white"/></svg></div>',
    });

    $('.more-halls__inner').slick({
        infinite: false,
        slidesToShow: 3,
        appendArrows: '.more-halls__nav',
        nextArrow: '<div class="more-halls__next"><svg width="47" height="47" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.4997 46.4167C10.8726 46.4167 0.583008 36.1271 0.583008 23.5C0.583008 10.8729 10.8726 0.583357 23.4997 0.583357C36.1268 0.583357 46.4163 10.8729 46.4163 23.5C46.4163 36.1271 36.1268 46.4167 23.4997 46.4167ZM29.8934 22.2854L21.8038 14.1959C21.4601 13.8521 21.0247 13.6917 20.5893 13.6917C20.1538 13.6917 19.7184 13.8521 19.3747 14.1959C18.7101 14.8604 18.7101 15.9604 19.3747 16.625L26.2497 23.5L19.3747 30.375C18.7101 31.0396 18.7101 32.1396 19.3747 32.8042C20.0393 33.4688 21.1393 33.4688 21.8038 32.8042L29.8934 24.7146C30.5809 24.05 30.5809 22.95 29.8934 22.2854Z"  fill- opacity="0.99" /></svg></div>',
        prevArrow: '<div class="more-halls__prev"><svg width="47" height="47" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg"><path d="M23.5003 0.583313C36.1274 0.583313 46.417 10.8729 46.417 23.5C46.417 36.1271 36.1274 46.4166 23.5003 46.4166C10.8732 46.4166 0.583657 36.1271 0.583657 23.5C0.583657 10.8729 10.8732 0.583313 23.5003 0.583313ZM17.1066 24.7146L25.1962 32.8041C25.5399 33.1479 25.9753 33.3083 26.4107 33.3083C26.8462 33.3083 27.2816 33.1479 27.6253 32.8041C28.2899 32.1396 28.2899 31.0396 27.6253 30.375L20.7503 23.5L27.6253 16.625C28.2899 15.9604 28.2899 14.8604 27.6253 14.1958C26.9607 13.5312 25.8607 13.5312 25.1962 14.1958L17.1066 22.2854C16.4191 22.95 16.4191 24.05 17.1066 24.7146Z" /></svg></div>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            },
        ],


    });


    /* ====================================================================================
    новое
    ====================================================================================*/

    class afLightbox {
        constructor(opion) {

            this.modal = '';
            if (opion) {
                this.mobileBottom = (opion.mobileInBottom ? opion.mobileInBottom : false)
            }
        }

        init() {
            //this.createTemplate()
        }

        createTemplate() {
            let template = document.createElement('div')
            template.innerHTML = `
                    <div class="af-popup">
                        <div class="af-popup__bg"></div>
                        <div class="af-popup__wrp">
                            <div class="af-popup__container">
                                <div class="af-popup__close">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>
                                </div>
                                <div class="af-popup__content"></div>
                            </div>
                        </div>
                    </div>
                    `

            document.body.append(template)
            this.instanse = template;

            return template;
        }

        open(content, afterShow) {

            let _this = this;
            this.modal = this.createTemplate();



            if (window.innerWidth <= 480 && this.mobileBottom) {
                this.modal.querySelector(".af-popup").classList.add("af-popup--mobile")
            }

            if (window.innerWidth <= 480) {
                document.body.classList.add('page-hidden')
            }

            this.modal.querySelector('.af-popup__content').innerHTML = content
            this.modal.querySelector('.af-popup__close').addEventListener('click', function () {
                _this.close()
            })

            if (afterShow) afterShow(this.modal);

            setTimeout(() => {
                this.modal.querySelector(".af-popup").classList.add("af-popup--visible")
            }, 10)

            this.createEvent();

        }

        changeContent(content) {
            this.modal.querySelector('.af-popup__content').innerHTML = content
        }

        createEvent() {

            let _this = this

            this.instanse.querySelector('.af-popup').addEventListener('click', function () {
                _this.close()
            })
            this.instanse.querySelector('.af-popup__container').addEventListener('click', function (event) {
                event.stopPropagation(true)
            })
        }

        close() {


            if (window.innerWidth <= 480 && document.body.classList.contains('page-hidden')) {
                document.body.classList.remove('page-hidden')
            }

            this.instanse.querySelector('.af-popup').classList.remove('af-popup--visible')

            setTimeout(() => {
                this.instanse.remove()
            }, 300)
        }
    }

    class afSelect {

        constructor(option) {
            this.selector = option.selector;
            this.selectAll = document.querySelectorAll(this.selector)
            this.renderTemplate()
            this.clickEventOut()
        }

        reinit(elem) {
            const _this = this;

            let item = elem.parentNode

            if (item.querySelector('.select-styled')) {
                item.querySelector('.select-styled').remove()
                item.querySelector('.select-list').remove()
            }

            _this.renderOption(item)

        }

        renderOption(item) {

            var _this = this;
            var select = item.querySelector('select')
            var placeholder = select.getAttribute('placeholder')

            const styledSelect = document.createElement('div')
            styledSelect.classList.add('select-styled');
            styledSelect.innerHTML = '<span>' + placeholder + '</span>';

            const styledOptions = document.createElement('ul')
            styledOptions.classList.add('select-options');

            const styledList = document.createElement('div')
            styledList.classList.add('select-list');
            styledList.appendChild(styledOptions)

            item.appendChild(styledSelect)
            item.appendChild(styledList)

            //====

            item.querySelectorAll('select > option').forEach(function (item, index) {

                // create li elem
                const li = document.createElement('li')
                li.innerHTML = item.innerText
                li.setAttribute('rel', item.value)

                //если не задан placeholder, сделать им первый элемент
                if (index == 0 && !placeholder) {
                    styledSelect.innerHTML = '<span>' + item.innerText + '</span>';
                }

                //если есть selected элемент
                if (item.getAttribute('selected')) {
                    if (!placeholder) {
                        styledSelect.innerHTML = '<span>' + item.innerText + '</span>';
                        li.classList.add('active')
                    } else {
                        styledSelect.innerHTML = '<span class="af-selected-placeholder" data-af-placeholder="' + placeholder + '">' + item.innerText + '</span>';
                        li.classList.add('active')
                    }
                }

                styledOptions.appendChild(li)
                _this.clickEventListItem(li)

            })

            //add public methods

            select['afSelect'] = new Object;
            select.afSelect.open = function () {
                _this.openSelect(item)
            }
            select.afSelect.close = function () {
                _this.closeSelect()
            }
            select.afSelect.update = function () {
                _this.reinit(select)
            }


        }

        renderTemplate() {

            const _this = this;
            const istanse = []

            this.selectAll.forEach(function (item, index) {



                if (!item.classList.contains('select-hidden')) {
                    item.classList.add('select-hidden');
                    const wrapper = document.createElement('div');
                    wrapper.classList.add('af-select');
                    wrapper.innerHTML = item.outerHTML;
                    item.parentNode.replaceChild(wrapper, item);

                    //add event 
                    _this.clickEventOpenSelect(wrapper)
                    istanse.push(wrapper)
                }

            })

            istanse.forEach(function (item, index) {
                _this.renderOption(item)
            })


        }

        openSelect(elem) {

            const option = elem.querySelector('.select-options')

            elem.style.maxWidth = (elem.offsetWidth) + 'px'
            elem.querySelector('.select-styled').classList.toggle('active')
            option.classList.toggle('active')
            elem.querySelector('.select-list').classList.toggle('active')
            document.querySelector('body').classList.toggle('af-select-open')

            console.log(option.getBoundingClientRect())
            console.log(document.documentElement.clientHeight)

            if (document.documentElement.clientHeight < option.getBoundingClientRect().bottom) {
                option.classList.add('select-options--top')
            } else {
                option.classList.contains('select-options--top') ? option.classList.remove('select-options--top') : ''
            }

        }

        closeSelect() {

            if (!document.querySelector('.select-styled.active')) return false

            document.querySelector('.select-styled.active').classList.remove('active')
            document.querySelector('.select-options.active').classList.remove('active')
            document.querySelector('.select-list.active').classList.remove('active')
            document.querySelector('body').classList.remove('af-select-open')
        }

        clickEventOut() {
            const _this = this;
            document.addEventListener('click', function () {
                _this.closeSelect()
            })
        }

        clickEventListItem(elem) {

            const parentElem = elem.parentNode.parentNode.parentNode
            const _this = this;
            const placeholder = parentElem.querySelector('select').getAttribute('placeholder')
            const styledSelect = parentElem.querySelector('.select-styled')

            elem.addEventListener('click', function (event) {

                event.stopPropagation()
                event.preventDefault()

                if (parentElem.querySelector('.select-options li.active'))
                    parentElem.querySelector('.select-options li.active').classList.remove('active')

                this.classList.add('active')

                if (placeholder) {
                    styledSelect.innerHTML = '<span class="af-selected-placeholder" data-af-placeholder="' + placeholder + '">' + this.innerHTML + '</span>';
                } else {
                    parentElem.querySelector('.select-styled span').innerHTML = this.innerHTML
                }

                parentElem.querySelector('select').value = this.getAttribute('rel')

                var event = new Event('change');
                parentElem.querySelector('select').dispatchEvent(event);



                _this.closeSelect()
            })
        }

        clickEventOpenSelect(elem) {
            const _this = this;

            function addEventOpen(event) {
                event.stopPropagation()
                event.preventDefault()
                _this.openSelect(this)
            }

            elem.removeEventListener('click', addEventOpen)
            elem.addEventListener('click', addEventOpen)
        }

    }

    /* ==============================================
    select
    ==============================================*/

    const customSelect = new afSelect({
        selector: 'select'
    });

    /* ===================================
    datepicker
    ===================================*/

    if (document.querySelector('[data-input="date"]')) {

        const elem = document.querySelector('[data-input="date"]');

        (function () {
            Datepicker.locales.ru = {
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                today: "Сегодня",
                clear: "Очистить",
                format: "dd.mm.yyyy",
                weekStart: 1,
                monthsTitle: 'Месяцы'
            }
        })();

        function initDatepicker(elem) {
            const dateCurrent = new Date();
            const dateStr = dateCurrent.getDate() + '.' + (dateCurrent.getMonth() + 1) + '.' + dateCurrent.getFullYear();
            const datepicker = new Datepicker(elem, {
                autohide: true,
                language: 'ru',
                format: 'dd.mm.yyyy',
                minDate: dateStr
            });
        }

        initDatepicker(elem);


    }

    /* ==============================================
    details slick slider
    ==============================================*/

    $('[data-slider="slick-gallery"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<div class="gallery-arrow__next" ><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4997 46.4167C10.8726 46.4167 0.583008 36.1271 0.583008 23.5C0.583008 10.8729 10.8726 0.583357 23.4997 0.583357C36.1268 0.583357 46.4163 10.8729 46.4163 23.5C46.4163 36.1271 36.1268 46.4167 23.4997 46.4167ZM29.8934 22.2854L21.8038 14.1959C21.4601 13.8521 21.0247 13.6917 20.5893 13.6917C20.1538 13.6917 19.7184 13.8521 19.3747 14.1959C18.7101 14.8604 18.7101 15.9604 19.3747 16.625L26.2497 23.5L19.3747 30.375C18.7101 31.0396 18.7101 32.1396 19.3747 32.8042C20.0393 33.4688 21.1393 33.4688 21.8038 32.8042L29.8934 24.7146C30.5809 24.05 30.5809 22.95 29.8934 22.2854Z" fill="white" fill- opacity="0.99" /></svg></div>',
        prevArrow: '<div class="gallery-arrow__prev" ><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5003 0.583313C36.1274 0.583313 46.417 10.8729 46.417 23.5C46.417 36.1271 36.1274 46.4166 23.5003 46.4166C10.8732 46.4166 0.583657 36.1271 0.583657 23.5C0.583657 10.8729 10.8732 0.583313 23.5003 0.583313ZM17.1066 24.7146L25.1962 32.8041C25.5399 33.1479 25.9753 33.3083 26.4107 33.3083C26.8462 33.3083 27.2816 33.1479 27.6253 32.8041C28.2899 32.1396 28.2899 31.0396 27.6253 30.375L20.7503 23.5L27.6253 16.625C28.2899 15.9604 28.2899 14.8604 27.6253 14.1958C26.9607 13.5312 25.8607 13.5312 25.1962 14.1958L17.1066 22.2854C16.4191 22.95 16.4191 24.05 17.1066 24.7146Z" fill="white"/></svg></div>',
        responsive: [{
                breakpoint: 900,
                settings: {
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    centerMode: true,
                    centerPadding: '0',

                }
            },
        ]
    });


    /* ===============================================
    popup auth
    ===============================================*/

    function initAuth(items) {
        const authPopup = new afLightbox({
            mobileInBottom: true
        })

        function sendData(instanse) {

            let modal = instanse.modal
            let form = modal.querySelector('[data-login="form"]')

            initMask(instanse.modal)

            form.addEventListener('submit', e => {

                e.preventDefault()
                form.querySelector('.err').innerHTML = ''

                let formData = new FormData(form)
                let xhr = new XMLHttpRequest();

                if (!formData.get('user') || !formData.get('user')) {
                    form.querySelector('.err').innerHTML = '<span>Все поля обязательны для заполнения</span>'
                    return false
                }

                xhr.open('POST', 'handler.php')
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xhr.send(formData)
                xhr.onload = function () {

                    let response = JSON.parse(xhr.response);

                    if (!response.status) {
                        form.querySelector('.err').innerHTML = '<span>' + response.msg + '</span>'
                    } else {


                        const fields = instanse.modal.querySelectorAll('[data-field]')

                        fields.forEach(field => {

                            switch (field.dataset.field) {
                                case 'step1':
                                    field.style.display = 'none';
                                    break;
                                case 'step2':
                                    field.style.display = 'block';
                                    break;
                            }

                        })


                        //instanse.close()

                        if (document.querySelector('.review-create__send .btn')) {
                            document.querySelector('.review-create__send .btn').removeAttribute('disabled')
                            document.querySelector('.review-create__note').remove()
                        }
                    }

                };
            })
        }

        items.forEach(item => {

            item.addEventListener('click', e => {
                authPopup.open('<div class="af-spiner" ></div>', function (instanse) {
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', '_popup-auth.html')
                    xhr.send()
                    xhr.onload = function () {
                        authPopup.changeContent(xhr.response)
                        sendData(authPopup)

                    };
                })
            })

        })
    }

    if (document.querySelectorAll('[data-popup="auth"]')) {
        initAuth(document.querySelectorAll('[data-popup="auth"]'))
    }


    /* ==============================================
    rating
    ==============================================*/

    function initRating(items) {
        items.forEach((item, index) => {
            item.addEventListener('mouseenter', e => {

                items.forEach((label, i) => {
                    if (i <= index) {
                        label.classList.add('is-hover')
                    } else {
                        if (label.classList.contains('is-hover')) {
                            label.classList.remove('is-hover')
                        }
                    }
                })

            })

            item.addEventListener('mouseleave', e => {

                items.forEach((label, i) => {
                    if (label.classList.contains('is-hover')) {
                        label.classList.remove('is-hover')
                    }
                })

            })

            item.addEventListener('click', function (e) {

                items.forEach((label, i) => {
                    label.setAttribute('class', (i <= index ? 'is-active' : ''))
                })

            })



        })
    }

    if (document.querySelector('.select-rating')) {

        /* ================================================
        drop
        ================================================*/

        const filesStorage = {};

        function sendFiles(files, field, container) {

            let extentions = [
                'image/jpeg',
                'image/png',
            ];

            [...files].forEach(file => {

                console.log(file.type)

                if (extentions.includes(file.type)) {


                    if (filesStorage[field] == undefined) {
                        filesStorage[field] = [];
                        filesStorage[field].push(file)
                    } else {
                        filesStorage[field].push(file)
                    }


                } else {
                    alert('Допустимы только файлы изображений JPEG, PNG')
                }

            })

            console.log(filesStorage)

            renderList(filesStorage, container)
        }

        function renderList(filesStorage, container) {

            for (let key in filesStorage) {

                container.querySelector('.review-create__files').innerHTML = ''

                filesStorage[key].forEach(function (file, index) {


                    if (file.type == 'image/jpeg' || file.type == 'image/png') {
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = function (e) {

                            let elem = document.createElement('span')
                            elem.style.backgroundImage = 'url(' + e.target.result + ')'
                            container.querySelector('.review-create__files').append(elem)

                            elem.addEventListener('click', e => {
                                if (confirm('Вы дейсвительно хотите удалить?')) {
                                    elem.remove();
                                    filesStorage[key].splice(index, index)
                                }
                            })

                        }
                    }

                })

            }

        }

        function eventsInputUpload(modal) {

            const input = modal.querySelector('input[type=file]')
            const dropzone = modal.querySelector('.attach-block')

            input.addEventListener('change', function () {
                sendFiles(this.files, input.getAttribute('name'), modal)
            })



            dropzone.addEventListener('drop', function (e) {

                e.preventDefault()
                e.stopPropagation()


                if (dropzone.classList.contains('dragover')) {
                    dropzone.classList.remove('dragover')
                }

                const files = [];

                [...e.dataTransfer.items].forEach(item => {
                    files.push(item.getAsFile())
                })

                sendFiles(files, input.getAttribute('name'), modal)
            })

            dropzone.addEventListener('dragover', function (e) {
                e.preventDefault()
                dropzone.classList.add('dragover')
            })

            dropzone.addEventListener('dragleave', function (e) {
                e.stopPropagation()

                if (dropzone.classList.contains('dragover')) {
                    dropzone.classList.remove('dragover')
                }
            })
        }


        const items = document.querySelectorAll('.select-rating label')

        initRating(items)

        items.forEach((item, index) => {
            item.querySelector('input').addEventListener('click', function (e) {

                const addReviewPopup = new afLightbox({
                    mobileInBottom: true
                })

                addReviewPopup.open('<div class="af-spiner" ></div>', function (instanse) {
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', '_popup-review.html')
                    xhr.send()
                    xhr.onload = function () {
                        addReviewPopup.changeContent(xhr.response)
                        initRating(addReviewPopup.modal.querySelectorAll('.select-rating label'))
                        initAuth(addReviewPopup.modal.querySelectorAll('[data-popup="auth"]'))

                        //check active star

                        let stars = addReviewPopup.modal.querySelectorAll('.select-rating input')
                        stars[index].setAttribute('checked', 'checked')
                        stars[index].dispatchEvent(new Event('click', {
                            'bubbles': true
                        }));

                        //file upload

                        eventsInputUpload(addReviewPopup.modal);

                        //init send form

                        let form = addReviewPopup.modal.querySelector('[data-review="form"]')

                        form.addEventListener('submit', e => {
                            e.preventDefault()

                            let formData = new FormData(form);

                            // send data review
                            let xhr = new XMLHttpRequest();
                            xhr.open('POST', 'handler.php')
                            xhr.send(formData)
                            xhr.onload = function () {

                                addReviewPopup.close()

                                const successPopup = new afLightbox({
                                    mobileInBottom: true
                                })

                                successPopup.open('<div class="af-spiner" ></div>', function (instanse) {
                                    let xhr = new XMLHttpRequest();
                                    xhr.open('GET', '_popup-success.html')
                                    xhr.send()
                                    xhr.onload = function () {
                                        successPopup.changeContent(xhr.response)

                                        if (successPopup.modal.querySelector('.btn')) {
                                            successPopup.modal.querySelector('.btn').addEventListener('click', e => {
                                                successPopup.close()

                                            })
                                        }

                                    }
                                })
                            }

                        })

                    };
                })

            })
        })

    }

    /* ==============================================
    all photo
    ==============================================*/

    if (document.querySelector('.details-gallery__all')) {

        const item = document.querySelector('.details-gallery__all');
        const images = document.querySelectorAll('.details-gallery__slider img')

        const galleryPopup = new afLightbox({
            mobileInBottom: false
        })

        item.addEventListener('click', e => {

            let gallery = document.createElement('div')
            gallery.classList.add('af-gallery')

            images.forEach(img => {

                let itemImages = document.createElement('div')
                itemImages.classList.add('af-gallery__item')
                itemImages.innerHTML = '<img src="' + img.src + '" >'

                gallery.append(itemImages)

            })

            galleryPopup.open(gallery.outerHTML, function (instanse) {})

            $(document).find('.af-gallery').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                nextArrow: '<div class="af-gallery-arrow__next" ><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4997 46.4167C10.8726 46.4167 0.583008 36.1271 0.583008 23.5C0.583008 10.8729 10.8726 0.583357 23.4997 0.583357C36.1268 0.583357 46.4163 10.8729 46.4163 23.5C46.4163 36.1271 36.1268 46.4167 23.4997 46.4167ZM29.8934 22.2854L21.8038 14.1959C21.4601 13.8521 21.0247 13.6917 20.5893 13.6917C20.1538 13.6917 19.7184 13.8521 19.3747 14.1959C18.7101 14.8604 18.7101 15.9604 19.3747 16.625L26.2497 23.5L19.3747 30.375C18.7101 31.0396 18.7101 32.1396 19.3747 32.8042C20.0393 33.4688 21.1393 33.4688 21.8038 32.8042L29.8934 24.7146C30.5809 24.05 30.5809 22.95 29.8934 22.2854Z" fill="white" fill- opacity="0.99" /></svg></div>',
                prevArrow: '<div class="af-gallery-arrow__prev" ><svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5003 0.583313C36.1274 0.583313 46.417 10.8729 46.417 23.5C46.417 36.1271 36.1274 46.4166 23.5003 46.4166C10.8732 46.4166 0.583657 36.1271 0.583657 23.5C0.583657 10.8729 10.8732 0.583313 23.5003 0.583313ZM17.1066 24.7146L25.1962 32.8041C25.5399 33.1479 25.9753 33.3083 26.4107 33.3083C26.8462 33.3083 27.2816 33.1479 27.6253 32.8041C28.2899 32.1396 28.2899 31.0396 27.6253 30.375L20.7503 23.5L27.6253 16.625C28.2899 15.9604 28.2899 14.8604 27.6253 14.1958C26.9607 13.5312 25.8607 13.5312 25.1962 14.1958L17.1066 22.2854C16.4191 22.95 16.4191 24.05 17.1066 24.7146Z" fill="white"/></svg></div>',
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        centerPadding: '20px',
                        arrows: false
                    }
                }, ]
            });

        })
    }


    /* ==============================================
    init mask
    ==============================================*/

    function initMask(container) {
        container.querySelectorAll('input[type="tel"]').forEach(function (el) {
            VMasker(el).maskPattern("+7(999) 999-99-99");
        });

        container.querySelectorAll('[data-input="number"]').forEach(function (el) {
            VMasker(el).maskNumber();
        });
    }

    initMask(document);

    /* ==============================================
    popup online
    ==============================================*/



    class FormOnline {
        constructor() {
            this.buttonsPopupStart = document.querySelectorAll('[data-popup="online"]')
            this.asideForm = document.querySelectorAll('[data-online="form"]')
            this.lightboxs = {}
            this.addEvents()
        }

        initDatepicker(container) {
            (function () {
                Datepicker.locales.ru = {
                    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
                    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                    today: "Сегодня",
                    clear: "Очистить",
                    format: "dd.mm.yyyy",
                    weekStart: 1,
                    monthsTitle: 'Месяцы'
                }
            })();

            function initDateInstanse(elem) {
                const dateCurrent = new Date();
                const dateStr = dateCurrent.getDate() + '.' + (dateCurrent.getMonth() + 1) + '.' + dateCurrent.getFullYear();
                const datepicker = new Datepicker(elem, {
                    autohide: true,
                    language: 'ru',
                    format: 'dd.mm.yyyy',
                    minDate: dateStr
                });
            }

            container.querySelectorAll('[data-input="date"]').forEach(input => {
                initDateInstanse(input)
            })
        }

        initPopupStart() {
            this.lightboxs['onlinePopup'] = new afLightbox({
                mobileInBottom: true
            })

            this.lightboxs['onlinePopup'].open('<div class="af-spiner" ></div>', (instanse) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', '_popup-online.html')
                xhr.send()
                xhr.onload = () => {
                    this.lightboxs['onlinePopup'].changeContent(xhr.response)
                    setTimeout(() => {
                        this.initOnlinePopup(this.lightboxs['onlinePopup'])
                    }, 100)
                };
            })
        }

        initSlickPopup(modal) {

            function changeActiveThumb(index, modal) {
                const items = modal.querySelectorAll('.preview-images__thumb li')
                items.forEach((el, i) => {
                    if (i == index) {
                        el.classList.add('is-active')
                    } else {
                        el.classList.contains('is-active') ? el.classList.remove('is-active') : ''
                    }
                })

            }

            const SLICK = $(modal).find('.vertical-slider');

            SLICK.slick({
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            });

            changeActiveThumb(0, modal);

            SLICK.on('afterChange', function (slick, currentSlideObj) {
                changeActiveThumb(currentSlideObj.currentSlide, modal);
                modal.querySelector('.online-popup__label').innerHTML = currentSlideObj.$slides[currentSlideObj.currentSlide].dataset.title
            })

            //click thumb

            const items = modal.querySelectorAll('.preview-images__thumb li')

            items.forEach((el, i) => {
                el.addEventListener('click', () => {
                    SLICK.slick('slickGoTo', i);
                    changeActiveThumb(i, modal)
                })
            })
        }

        initMask(container) {
            // container.querySelectorAll('input[type="tel"]').forEach(function (el) {
            //     VMasker(el).maskPattern("+9(999) 999-99-99");
            // });

            // container.querySelectorAll('[data-input="number"]').forEach(function (el) {
            //     VMasker(el).maskNumber();
            // });



            /* from global scope */
            initMask(container);
        }

        initOnlinePopup(instanse) {

            const modal = instanse.modal

            // init slider
            this.initSlickPopup(modal);

            // init mask
            this.initMask(modal)

            //init select
            const customSelect = new afSelect({
                selector: '.online-popup select'
            });

            //init datepicker
            initDatepicker(modal.querySelector('[data-input="date"]'));

            //init submit 
            const form = modal.querySelector('form');
            const submitButton = form.querySelector('[type=submit]');

            // send form
            form.addEventListener('submit', e => {
                e.preventDefault()
                this.sendFormOnlineStart(form, submitButton)
            })


        }

        validateFields(formData) {
            const err = [];

            formData.forEach(item => item.length || err.push(item))

            if (err.length) {
                alert('Все поля обязательны для заполнения')
                return false
            }

            return true
        }

        sendFormOnlineStart(form, submitButton) {

            const formData = new FormData(form);


            if (!this.validateFields(formData)) {
                return false
            }

            submitButton.classList.add('btn-loading')

            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'handler.php')
            xhr.send(formData)
            xhr.onload = () => {
                setTimeout(() => {

                    if (this.lightboxs['onlinePopup']) {
                        this.lightboxs['onlinePopup'].close();
                    }

                    submitButton.classList.contains('btn-loading') ? submitButton.classList.remove('btn-loading') : ''

                    this.initOnlinePopup2();
                }, 1000)
            };


        }

        initOnlinePopup2() {

            const onlinePopup2 = new afLightbox({
                mobileInBottom: true
            })

            onlinePopup2.open('<div class="af-spiner" ></div>', (instanse) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', '_popup-online-2.html')
                xhr.send()
                xhr.onload = () => {
                    onlinePopup2.changeContent(xhr.response)

                    setTimeout(() => {
                        this.initSlickPopup(onlinePopup2.modal)
                        this.initMask(onlinePopup2.modal)
                    }, 100)

                    //add submit event
                    const form = onlinePopup2.modal.querySelector('[data-online="getCode"]')
                    const submitButton = form.querySelector('[type=submit]');

                    form.addEventListener('submit', e => {
                        e.preventDefault()

                        const formData = new FormData(form)

                        // if (!this.validateFields(formData)) {
                        //     return false
                        // }

                        let xhr = new XMLHttpRequest();
                        xhr.open('POST', 'handler.php')
                        xhr.send(formData)
                        xhr.onload = () => {

                            setTimeout(() => {
                                let response = JSON.parse(xhr.response);
                                submitButton.classList.contains('btn-loading') ? submitButton.classList.remove('btn-loading') : ''

                                if (response.status) {
                                    const fields = onlinePopup2.modal.querySelectorAll('[data-field]')

                                    fields.forEach(field => {

                                        switch (field.dataset.field) {
                                            case 'step1':
                                                field.style.display = 'none';
                                                break;
                                            case 'step2':
                                                field.style.display = 'block';
                                                break;
                                        }

                                    })
                                }
                            }, 500)
                        }
                    })

                };
            })

        }

        initFormAside(form, e) {

            e.preventDefault()

            const submitButton = form.querySelector('[type=submit]');
            this.sendFormOnlineStart(form, submitButton)
        }


        addEvents() {
            this.buttonsPopupStart.forEach(button => button.addEventListener('click', e => this.initPopupStart()))
            this.asideForm.forEach(form => form.addEventListener('submit', e => this.initFormAside(form, e)))
        }

    }


    const fOnline = new FormOnline();


    /* =======================================
    stycky form
    =======================================*/

    if (document.querySelector('.get-calculate')) {

        var current = false;

        window.addEventListener('scroll', e => {

            if (document.body.clientWidth < 992) {
                return false
            }

            const form = document.querySelector('.get-calculate')
            const DOMRect = form.getBoundingClientRect()
            const pageTop = window.scrollY || window.pageYOffset
            const maxHeight = document.querySelector('.section-details-gallery').offsetHeight

            if (DOMRect.top <= 30 && !current && pageTop < 150) {
                form.classList.add('el-sticky')
                current = pageTop;
            } else {

                form.style.width = form.clientWidth + 'px'

                if (current < pageTop && current) {
                    form.classList.add('el-sticky')
                    //form.style.top = pageTop + 'px'
                    form.style.opacity = (((maxHeight - form.clientHeight - 150) > (pageTop - current) ? 1 : 0))

                } else {
                    if (current > pageTop) {
                        form.classList.contains('el-sticky') ? form.classList.remove('el-sticky') : ''
                    }
                }
            }



        })

    }

    // show/hide button in mobile

    if (document.querySelector('.fixed-form')) {

        window.addEventListener('scroll', e => {

            const pageTop = window.scrollY || window.pageYOffset
            const block = document.querySelector('.fixed-form');
            const height = document.querySelector('.page-details--gallery')

            if (pageTop > height.clientHeight) {
                block.classList.contains('is-hide') ? block.classList.remove('is-hide') : ''
            } else {
                block.classList.add('is-hide')
            }


        })
    }

    // to form online

    if (document.querySelector('[data-to="form-online"]')) {
        document.querySelector('[data-to="form-online"]').addEventListener('click', e => {

            const form = document.querySelector('.get-calculate')

            console.log(form)

            window.scrollTo({
                top: form.offsetTop - 10,
                behavior: 'smooth'
            })
        })
    }





});