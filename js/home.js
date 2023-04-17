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

        this.selectAll.forEach(function (item, index) {



            if (!item.classList.contains('select-hidden')) {
                item.classList.add('select-hidden');
                const wrapper = document.createElement('div');
                wrapper.classList.add('af-select');
                wrapper.innerHTML = item.outerHTML;
                item.parentNode.replaceChild(wrapper, item);

                //add event 
                _this.clickEventOpenSelect(wrapper)
            }

        })

        document.querySelectorAll('.af-select').forEach(function (item, index) {
            _this.renderOption(item)

        })


    }

    openSelect(elem) {
        elem.style.maxWidth = (elem.offsetWidth) + 'px'
        elem.querySelector('.select-styled').classList.toggle('active')
        elem.querySelector('.select-options').classList.toggle('active')
        elem.querySelector('.select-list').classList.toggle('active')
        document.querySelector('body').classList.toggle('af-select-open')
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

document.addEventListener('DOMContentLoaded', function (event) {

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


        const dateCurrent = new Date();
        const dateStr = dateCurrent.getDate() + '.' + (dateCurrent.getMonth() + 1) + '.' + dateCurrent.getFullYear();
        const datepicker = new Datepicker(elem, {
            autohide: true,
            language: 'ru',
            format: 'dd.mm.yyyy',
            minDate: dateStr
        });


    }

    /* ======================================= 
    only number
    ======================================= */

    if (document.querySelector('[data-input="number"]')) {

        let inputs = document.querySelectorAll('[data-input="number"]');

        inputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.keyCode != 43 && e.keyCode < 48 || e.keyCode > 57) {
                    e.preventDefault();
                }
                e.target.value = e.target.value.replace(/[^\+\d]/g, '');
            })

            input.addEventListener('change', function (e) {
                e.target.value = e.target.value.replace(/[^\+\d]/g, '');
            })
        })
    }

});