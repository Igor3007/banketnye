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

                        alert('login success!')

                        //window.reload()

                        instanse.close()

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
                'application/illustrator',
                'application/postscript',
                'application/pdf',
                'application/x-photoshop',
                'image/vnd.adobe.photoshop',
                'image/tiff',
                'application/cdr',
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
                    alert('Допустимы только файлы изображений JPEG, PNG, EPS, AI, CDR, PSD, PDF, TIFF')
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




});