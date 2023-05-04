<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="/css/style.min.css">
    <link rel="stylesheet" href="/css/css.css">
    <link rel="stylesheet" href="/css/details.css">


    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://banketnye-zaly.moscow/js/vanilla-masker.min.js"></script>


    <script src="/js/datepicker-full.min.js"></script>
    <script src="/js/details.js"></script>

</head>

<body>

    <header class="header">
        <div class="container">
            <nav class="menu">
                <picture class="logo" style="cursor:pointer;">
                    <source srcset="https://banketnye-zaly.moscow/img/logo.webp" type="image/webp">
                    <img src="https://banketnye-zaly.moscow/img/logo.jpg" onclick="window.location.href='https://banketnye-zaly.moscow'" width="250" height="40">
                </picture>

                <ul class="dropdown">
                    <li>
                        <button class="dropbtn">
                            <span>Типы</span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6199 5.72083L7.81655 9.52416C7.36738 9.97333 6.63238 9.97333 6.18322 9.52416L2.37988 5.72083" stroke="#3B71FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="dropdown-content">
                            <div>
                                <a href="restoran">В ресторанах</a>

                                <a href="loft">Лофты</a>

                                <a href="oteli">Отели</a>

                                <a href="podmoskovie">В Подмосковье</a>

                                <a href="kottedj">Коттеджи</a>

                            </div>
                        </div>
                    </li>
                    <li>
                        <button class="dropbtn">
                            <span>Вместимость</span>
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6199 5.72083L7.81655 9.52416C7.36738 9.97333 6.63238 9.97333 6.18322 9.52416L2.37988 5.72083" stroke="#3B71FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <div class="dropdown-content">
                            <div>
                                <a href="bolshie">Большие</a>

                                <a href="malenkie">Маленькие</a>

                                <a href="10-chelovek">На 10 человек</a>

                                <a href="15-chelovek">На 15 человек</a>

                                <a href="20-chelovek">На 20 человек</a>

                                <a href="25-chelovek">На 25 человек</a>

                                <a href="30-chelovek">На 30 человек</a>

                                <a href="50-chelovek">На 50 человек</a>

                                <a href="100-chelovek">На 100 человек</a>

                                <a href="200-chelovek">На 200 человек</a>

                                <a href="300-chelovek">На 300 человек</a>

                            </div>
                        </div>
                    </li>
                    <li class="dropbtn"><a href="/metro">Метро</a></li>
                    <li class="dropbtn"><a href="/map">На карте</a></li>
                    <li class="dropbtn"><a href="#" data-popup="auth">Войти</a></li>
                </ul>

                <div class="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <div class="mobile-menu">
        <div class="mobile-menu__header">
            <div class="burger open">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <ul class="mobile-menu__nav">
            <li>
                <span>Типы</span>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6199 5.72083L7.81655 9.52416C7.36738 9.97333 6.63238 9.97333 6.18322 9.52416L2.37988 5.72083" stroke="#3B71FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <div class="submenu">
                    <a href="restoran">В ресторанах</a>
                    <a href="loft">Лофты</a>
                    <a href="oteli">Отели</a>
                    <a href="podmoskovie">В Подмосковье</a>
                    <a href="kottedj">Коттеджи</a>
                </div>
            </li>
            <li>
                <span>Вместимость</span>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6199 5.72083L7.81655 9.52416C7.36738 9.97333 6.63238 9.97333 6.18322 9.52416L2.37988 5.72083" stroke="#3B71FE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <div class="submenu">
                    <a href="bolshie">Большие</a>
                    <a href="malenkie">Маленькие</a>
                    <a href="10-chelovek">На 10 человек</a>
                    <a href="15-chelovek">На 15 человек</a>
                    <a href="20-chelovek">На 20 человек</a>
                    <a href="25-chelovek">На 25 человек</a>
                    <a href="30-chelovek">На 30 человек</a>
                    <a href="50-chelovek">На 50 человек</a>
                    <a href="100-chelovek">На 100 человек</a>
                    <a href="200-chelovek">На 200 человек</a>
                    <a href="300-chelovek">На 300 человек</a>
                </div>
            </li>
            <li>
                <a href="/metro">Метро</a>

            </li>
            <li>
                <a href="/map">На карте</a>

            </li>

            <li><a href="#" data-popup="auth">Войти</a></li>
        </ul>
        <div class="mobile-menu__footer">

        </div>
    </div>

    <main class="main-gray">

        <section class="section-details-gallery">
            <div class="container">

                <div class="page-details page-details--gallery">
                    <div class="page-details__content">
                        <div class="details-gallery">
                            <div class="details-gallery__image">
                                <div class="details-gallery__slider" data-slider="slick-gallery">
                                    <div class="details-gallery__item">
                                        <picture>
                                            <source type="image/webp">
                                            <img src="https://banketnye-zaly.moscow/storage/4dMkxMraro_1627937172.jpg" alt="">
                                        </picture>
                                    </div>
                                    <div class="details-gallery__item">
                                        <picture>
                                            <source type="image/webp">
                                            <img src="https://banketnye-zaly.moscow/storage/4dMkxMraro_1627937172.jpg" alt="">
                                        </picture>
                                    </div>
                                </div>

                                <div class="details-gallery__all">
                                    <span class="">Все 25 фото</span>
                                </div>
                            </div>

                        </div>

                        <div class="details-back">
                            <a href="http://"> Назад к списку залов </a>
                        </div>

                        <div class="details-main">
                            <div class="details-main__title">
                                <h1>Ресторан «Золотой фазан»</h1>
                            </div>
                            <div class="details-main__subtitle"> Парк-отель Орловский</div>
                        </div>

                    </div>

                    <div class="page-details__form">
                        <div class="get-calculate">
                            <div class="get-calculate__head">
                                <div class="get-calculate__h2">Еда и напитки от</div>
                                <div class="get-calculate__cost">
                                    <span>99 000 ₽</span> на <span>40 чел.</span>
                                </div>
                                <div class="get-calculate__person">
                                    (2 500 руб/чел)
                                </div>
                            </div>
                            <div class="get-calculate__main">
                                <div class="get-calculate__h3 emoji-stars">Получить онлайн доступ</div>

                                <div class="get-calculate__feature">
                                    <ul>
                                        <li>Реальный расчет стоимости</li>
                                        <li>Свободные даты</li>
                                        <li>Банкетное меню и дополнительные услуги</li>
                                    </ul>
                                </div>

                                <div class="get-calculate__form">
                                    <form action="" data-online="form">
                                        <div class="form">

                                            <div class="form__item">
                                                <div class="form__subitem">
                                                    <div class="input-label">
                                                        <label>Дата мероприятия</label>
                                                        <input type="text" name="date" data-input="date" readonly="true" placeholder="28.04.2022">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form__item">
                                                <div class="form__subitem">
                                                    <div class="input-label">
                                                        <label>Количество гостей</label>
                                                        <input type="text" data-input="number" name="user" placeholder="Например, 25">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form__item">
                                                <div class="form__subitem">
                                                    <div class="input-label">
                                                        <label>Тип мероприятия</label>
                                                        <select name="type">
                                                            <option value="1">Свадьба</option>
                                                            <option value="2">Новый год</option>
                                                            <option value="3">День рождения</option>
                                                            <option value="4">Юбилей</option>
                                                            <option value="5">Другие праздники</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form__item">
                                                <div class="form__subitem">
                                                    <button class="btn" type="submit">Получить доступ</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="page-details page-details--bottom">
                    <div class="page-details__content">

                        <div class="details-main">
                            <div class="details-main__prop">
                                <div class="details-main__address">
                                    <div class="prop-item">
                                        <div class="prop-item__icon">
                                            <span class="ic_24 ic_pin"></span>
                                        </div>
                                        <div class="prop-item__main">
                                            <div class="prop-item__label">Адрес:</div>
                                            <div class="prop-item__value">Россия, Московская область, Ленинский
                                                городской округ,
                                                деревня Дальние Прудищи, Орловский проезд, 12</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="details-main__all">
                                    <div class="details-main__list">
                                        <div class="details-main__item">

                                            <div class="prop-item">
                                                <div class="prop-item__icon">
                                                    <span class="ic_24 ic_guest"></span>
                                                </div>
                                                <div class="prop-item__main">
                                                    <div class="prop-item__label">Гости:</div>
                                                    <div class="prop-item__value">От 2 до 1000 человек</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="details-main__item">

                                            <div class="prop-item">
                                                <div class="prop-item__icon">
                                                    <span class="ic_24 ic_home"></span>
                                                </div>
                                                <div class="prop-item__main">
                                                    <div class="prop-item__label">Тип помещения:</div>
                                                    <div class="prop-item__value"> Банкетный зал</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="details-main__item">

                                            <div class="prop-item">
                                                <div class="prop-item__icon">
                                                    <span class="ic_24 ic_parking"></span>
                                                </div>
                                                <div class="prop-item__main">
                                                    <div class="prop-item__label">Парковочных мест:</div>
                                                    <div class="prop-item__value">40 </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="details-main__avantages">
                                    <div class="prop-item">
                                        <div class="prop-item__icon">
                                            <span class="ic_24 ic_features"></span>
                                        </div>
                                        <div class="prop-item__main">
                                            <div class="prop-item__label">Особенности:</div>
                                            <div class="prop-item__value">
                                                <ul>
                                                    <li>Караоке</li>
                                                    <li>Живая музыка</li>
                                                    <li>Без арендной платы</li>
                                                    <li>Можно со своей едой</li>
                                                    <li>Можно со своим алкоголем</li>
                                                    <li>Детская комната</li>
                                                    <li>Панорамный вид</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </div>
                            <div class="details-main__desc">
                                «Золотой фазан» — это полноценный ресторан на природе. Он подойдет и любителям
                                спокойной
                                атмосферы, и приверженцам активного отдыха в любое время года. Банкетная площадка
                                «Золотой
                                фазан» — это отдельная бухта общей площадью 1500 м кв, предназначенная для
                                проведения
                                мероприятий. Всесезонный белоснежный шатер с видом на гладь озера Людовна дарит
                                гостям уют и
                                душевный комфорт, но во всем своем великолепии он предстает именно зимой:
                                заснеженный
                                русский пейзаж, березовая роща, деревянный частокол и ледяное зеркало озера — всё
                                это
                                создает уникальную атмосферу загадочной русской души.
                            </div>
                        </div>

                        <div class="details-map">
                            <div class="details-map__title">Ресторан на карте</div>
                            <div class="details-map__container">
                                <div id="map"></div>
                            </div>
                        </div>

                        <script>
                            function loadMap() {
                                var script = document.createElement('script');
                                script.src =
                                    "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=ee01361a-bfe3-4317-9569-703553c8f8d8&load=Map,Placemark";
                                script.onload = function() {

                                    ! function(e, t) {
                                        "object" == typeof exports && "object" == typeof module ? module.exports =
                                            t() : "function" == typeof define && define.amd ? define([], t) :
                                            "object" == typeof exports ? exports.ymapsTouchScroll = t() : e
                                            .ymapsTouchScroll = t()
                                    }(window, function() {
                                        return function(e) {
                                            var t = {};

                                            function n(o) {
                                                if (t[o]) return t[o].exports;
                                                var r = t[o] = {
                                                    i: o,
                                                    l: !1,
                                                    exports: {}
                                                };
                                                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r
                                                    .exports
                                            }
                                            return n.m = e, n.c = t, n.d = function(e, t, o) {
                                                n.o(e, t) || Object.defineProperty(e, t, {
                                                    enumerable: !0,
                                                    get: o
                                                })
                                            }, n.r = function(e) {
                                                "undefined" != typeof Symbol && Symbol.toStringTag &&
                                                    Object.defineProperty(e, Symbol.toStringTag, {
                                                        value: "Module"
                                                    }), Object.defineProperty(e, "__esModule", {
                                                        value: !0
                                                    })
                                            }, n.t = function(e, t) {
                                                if (1 & t && (e = n(e)), 8 & t) return e;
                                                if (4 & t && "object" == typeof e && e && e.__esModule)
                                                    return e;
                                                var o = Object.create(null);
                                                if (n.r(o), Object.defineProperty(o, "default", {
                                                        enumerable: !0,
                                                        value: e
                                                    }), 2 & t && "string" != typeof e)
                                                    for (var r in e) n.d(o, r, function(t) {
                                                        return e[t]
                                                    }.bind(null, r));
                                                return o
                                            }, n.n = function(e) {
                                                var t = e && e.__esModule ? function() {
                                                    return e.default
                                                } : function() {
                                                    return e
                                                };
                                                return n.d(t, "a", t), t
                                            }, n.o = function(e, t) {
                                                return Object.prototype.hasOwnProperty.call(e, t)
                                            }, n.p = "", n(n.s = 0)
                                        }([function(e, t, n) {
                                            "use strict";

                                            function o(e) {
                                                return (o = "function" == typeof Symbol &&
                                                    "symbol" == typeof Symbol.iterator ?
                                                    function(e) {
                                                        return typeof e
                                                    } : function(e) {
                                                        return e && "function" ==
                                                            typeof Symbol && e.constructor ===
                                                            Symbol && e !== Symbol.prototype ?
                                                            "symbol" : typeof e
                                                    })(e)
                                            }
                                            n.r(t);
                                            t.default = function(e) {
                                                var t = arguments.length > 1 && void 0 !==
                                                    arguments[1] ? arguments[1] : {},
                                                    n = t.preventScroll,
                                                    r = void 0 === n || n,
                                                    u = t.preventTouch,
                                                    i = void 0 === u || u,
                                                    c = t.textScroll,
                                                    f = void 0 === c ?
                                                    "Чтобы изменить масштаб, прокручивайте карту, удерживая клавишу Ctrl" :
                                                    c,
                                                    d = t.textTouch,
                                                    a = void 0 === d ?
                                                    "Чтобы переместить карту проведите по ней двумя пальцами" :
                                                    d;
                                                if ("undefined" != typeof window && "object" ===
                                                    o(e) && (r || i) && "string" == typeof f &&
                                                    "string" == typeof a) {
                                                    var l = /Mobi/i.test(navigator.userAgent) ||
                                                        /Android/i.test(navigator.userAgent),
                                                        s = e.panes.get("events"),
                                                        p = s.getElement(),
                                                        y = l ? a : f,
                                                        b = {
                                                            alignItems: "center",
                                                            boxSizing: "border-box",
                                                            color: "#fff",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            padding: "40px",
                                                            textAlign: "center",
                                                            transition: "background .2s",
                                                            touchAction: "auto"
                                                        };
                                                    Object.keys(b).forEach(function(e) {
                                                        p.style[e] = b[e]
                                                    });
                                                    var v = function(e) {
                                                        p.style.background =
                                                            "rgba(0, 0, 0, ".concat(e ?
                                                                ".6" : "0", ")"), p
                                                            .textContent = e ? y : ""
                                                    };
                                                    if (i && l && (e.behaviors.disable("drag"),
                                                            ymaps.domEvent.manager.add(p,
                                                                "touchmove",
                                                                function(e) {
                                                                    v(1 === e.get("touches")
                                                                        .length)
                                                                }), ymaps.domEvent.manager.add(
                                                                p, "touchend",
                                                                function() {
                                                                    v(!1)
                                                                })), r && !l) {
                                                        var m = function(t) {
                                                                t ? e.behaviors.enable(
                                                                        "scrollZoom") : e
                                                                    .behaviors.disable(
                                                                        "scrollZoom")
                                                            },
                                                            g = !1,
                                                            x = !1;
                                                        m(!1), s.events.add("wheel",
                                                            function() {
                                                                g && (m(x), v(!x))
                                                            }), s.events.add("mousedown",
                                                            function() {
                                                                v(!1)
                                                            }), s.events.add("mouseenter",
                                                            function() {
                                                                g = !0
                                                            }), s.events.add("mouseleave",
                                                            function() {
                                                                g = !1, v(!1)
                                                            }), document.addEventListener(
                                                            "keydown",
                                                            function(e) {
                                                                (x = e.ctrlKey) && v(!1)
                                                            }), document.addEventListener(
                                                            "keyup",
                                                            function() {
                                                                x = !1
                                                            })
                                                    }
                                                }
                                            }
                                        }]).default
                                    });

                                    ymaps.ready(init);

                                    function init() {
                                        var myMap = new ymaps.Map("map", {
                                                center: ['55.754535', '37.626670'],
                                                zoom: 11
                                            }),

                                            myPlacemark1 = new ymaps.Placemark(['55.754535', '37.626670'], {
                                                // Свойства.
                                                // Содержимое хинта.
                                            })
                                        myMap.geoObjects.add(myPlacemark1)

                                        ymapsTouchScroll(myMap);

                                    }
                                }
                                document.body.appendChild(script);
                                document.removeEventListener('scroll', loadMap);
                            }
                            document.addEventListener('scroll', loadMap);
                        </script>

                        <div class="details-review">
                            <div class="details-review__title">Отзывы</div>
                            <div class="details-review__badge">
                                <div class="review-badge">
                                    <div class="review-badge__common">
                                        <div class="review-badge__grade">4.8</div>
                                        <div class="review-badge__stars">
                                            <div>
                                                <ul class="static-rating">
                                                    <li><span class="ic_star"></span></li>
                                                    <li><span class="ic_star"></span></li>
                                                    <li><span class="ic_star"></span></li>
                                                    <li><span class="ic_star"></span></li>
                                                    <li><span class="ic_star"></span></li>
                                                </ul>
                                            </div>
                                            <div>451 оценок</div>
                                        </div>
                                    </div>
                                    <div class="review-badge__add">
                                        <div class="review-badge__text">Уже были здесь? Оцените и напишите отзыв:</div>
                                        <div class="review-badge__stars">
                                            <div class="select-rating">
                                                <label class=""><input type="radio" value="1" name="rating">
                                                    <span class="ic_star"></span>
                                                </label>
                                                <label class=""><input type="radio" value="2" name="rating">
                                                    <span class="ic_star"></span>
                                                </label>
                                                <label class=""><input type="radio" value="3" name="rating">
                                                    <span class="ic_star"></span>
                                                </label>
                                                <label class=""><input type="radio" value="4" name="rating">
                                                    <span class="ic_star"></span>
                                                </label>
                                                <label class=""><input type="radio" value="5" name="rating">
                                                    <span class="ic_star"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="details-review__slider">

                                <div class="reviews">
                                    <div class="reviews__wrapper">
                                        <div class="reviews__items">

                                            <div class="reviews__item">
                                                <div class="reviews__item-avatar">
                                                    <img loading="lazy" src="https://banketnye-zaly.moscow/storage/xM6QBR6YUz_1627935759.jpg" alt="">
                                                </div>
                                                <p class="reviews__item-name">Животворева Людмила</p>
                                                <p class="reviews__item-message">Замечательные выходные 24-26.07.2020 г!
                                                    Я,
                                                    солистка
                                                    казачьего ансамбля "ВАР", выступала несколько раз в парке-отеле
                                                    "Орловский"
                                                    и
                                                    приехала сюда отдыхать с мужем. Мы в восторге от этого чудесного
                                                    места! Нас
                                                    встретили очень приветливо на ресепшене, все рассказали и выдали
                                                    карты от
                                                    номера.
                                                    Заселились мы в чудесный 2х местный номер, в котором было все, что
                                                    нужно:
                                                    белые
                                                    халаты, полотенца, тапочки, фен, мини-бар. Вкусно кормили, меню
                                                    разнообразное. И
                                                    даже попали на коктейльную вечеринку с очень вкусным шашлыко,
                                                    который
                                                    готовили
                                                    на
                                                    наших глазах. Плавали в бассейне с джакузи, очень понравился хамам и
                                                    сауна.
                                                    Так
                                                    как
                                                    мы любим петь, м удовольствием посетили караоке. Аппаратура неплохая
                                                    да и
                                                    компания
                                                    нам попалась очень веселая</p>
                                                <button class="reviews__item-btn">Читать дальше <span class="ic_24 ic_arrow"></span></button>

                                                <div class="stars reviews__stars">

                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>

                                                </div>
                                            </div>

                                            <div class="reviews__item">
                                                <div class="reviews__item-avatar">
                                                    <img loading="lazy" src="https://banketnye-zaly.moscow/storage/xM6QBR6YUz_1627935759.jpg" alt="">
                                                </div>
                                                <p class="reviews__item-name">Животворева Людмила</p>
                                                <p class="reviews__item-message">Замечательные выходные 24-26.07.2020 г!
                                                    Я,
                                                    солистка
                                                    казачьего ансамбля "ВАР", выступала несколько раз в парке-отеле
                                                    "Орловский"
                                                    и
                                                    приехала сюда отдыхать с мужем. Мы в восторге от этого чудесного
                                                    места! Нас
                                                    встретили очень приветливо на ресепшене, все рассказали и выдали
                                                    карты от
                                                    номера.
                                                    Заселились мы в чудесный 2х местный номер, в котором было все, что
                                                    нужно:
                                                    белые
                                                    халаты, полотенца, тапочки, фен, мини-бар. Вкусно кормили, меню
                                                    разнообразное. И
                                                    даже попали на коктейльную вечеринку с очень вкусным шашлыко,
                                                    который
                                                    готовили
                                                    на
                                                    наших глазах. Плавали в бассейне с джакузи, очень понравился хамам и
                                                    сауна.
                                                    Так
                                                    как
                                                    мы любим петь, м удовольствием посетили караоке. Аппаратура неплохая
                                                    да и
                                                    компания
                                                    нам попалась очень веселая</p>
                                                <button class="reviews__item-btn">Читать дальше <span class="ic_24 ic_arrow"></span></button>
                                                <div class="stars reviews__stars">

                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>
                                                    <svg class="svg star reviews__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE" />
                                                    </svg>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="page-details__form">




                    </div>
                </div>



            </div>
        </section>

        <section class="more-halls more-hall--white">
            <div class="container">
                <h2 class="more-halls__title about__block-title">Похожие банкетные залы</h2>
                <div class="more-halls__inner ">
                    <? foreach ([1, 1, 1] as $item) : ?>

                        <div class="hall__wrapper" data-roomid=" ">
                            <div class="hall">
                                <div class="hall__capacity">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50033 1.66666C5.31699 1.66666 3.54199 3.44166 3.54199 5.62499C3.54199 7.76666 5.21699 9.49999 7.40033 9.57499C7.46699 9.56666 7.53366 9.56666 7.58366 9.57499C7.60033 9.57499 7.60866 9.57499 7.62533 9.57499C7.63366 9.57499 7.63366 9.57499 7.64199 9.57499C9.77533 9.49999 11.4503 7.76666 11.4587 5.62499C11.4587 3.44166 9.68366 1.66666 7.50033 1.66666Z" fill="#292D32"></path>
                                        <path d="M11.7338 11.7917C9.40879 10.2417 5.61712 10.2417 3.27546 11.7917C2.21712 12.5 1.63379 13.4583 1.63379 14.4833C1.63379 15.5083 2.21712 16.4583 3.26712 17.1583C4.43379 17.9417 5.96712 18.3333 7.50045 18.3333C9.03379 18.3333 10.5671 17.9417 11.7338 17.1583C12.7838 16.45 13.3671 15.5 13.3671 14.4667C13.3588 13.4417 12.7838 12.4917 11.7338 11.7917Z" fill="#292D32"></path>
                                        <path d="M16.6588 6.11668C16.7921 7.73335 15.6421 9.15001 14.0505 9.34168C14.0421 9.34168 14.0421 9.34168 14.0338 9.34168H14.0088C13.9588 9.34168 13.9088 9.34168 13.8671 9.35834C13.0588 9.40001 12.3171 9.14168 11.7588 8.66668C12.6171 7.90001 13.1088 6.75001 13.0088 5.50001C12.9505 4.82501 12.7171 4.20835 12.3671 3.68335C12.6838 3.52501 13.0505 3.42501 13.4255 3.39168C15.0588 3.25001 16.5171 4.46668 16.6588 6.11668Z" fill="#292D32"></path>
                                        <path d="M18.3249 13.825C18.2582 14.6333 17.7415 15.3333 16.8749 15.8083C16.0415 16.2666 14.9915 16.4833 13.9499 16.4583C14.5499 15.9166 14.8999 15.2416 14.9665 14.525C15.0499 13.4916 14.5582 12.5 13.5749 11.7083C13.0165 11.2667 12.3665 10.9167 11.6582 10.6583C13.4999 10.125 15.8165 10.4833 17.2415 11.6333C18.0082 12.25 18.3999 13.025 18.3249 13.825Z" fill="#292D32"></path>
                                    </svg>
                                    <span>5</span> человек
                                </div>
                                <div class="hall__slider">

                                    <div class="hall__slider-img" style="cursor: pointer;">
                                        <picture>
                                            <img loading="lazy" src="https://api.bbanket.com/public/uploads/room/WLIPhyyXgR_1653505838.jpg" alt="">
                                        </picture>
                                    </div>


                                </div>

                                <div class="hall__content">
                                    <div class="hall__grid">

                                        <div class="hall__header-tags tags-one-string">

                                        </div>


                                        <div class="hall__header-price1">
                                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.8893 14.1906C11.8537 13.55 12.5862 12.616 12.9784 11.5267C13.3707 10.4375 13.4018 9.25085 13.0673 8.14252C12.7327 7.03418 12.0502 6.063 11.1208 5.37271C10.1913 4.68242 9.06436 4.30969 7.90663 4.30969C6.7489 4.30969 5.62193 4.68242 4.6925 5.37271C3.76307 6.063 3.08057 7.03418 2.74601 8.14252C2.41144 9.25085 2.44259 10.4375 2.83484 11.5267C3.2271 12.616 3.95961 13.55 4.92397 14.1906C3.28002 14.797 1.85917 15.8887 0.849781 17.3211C0.773999 17.4287 0.729237 17.5551 0.720379 17.6864C0.711521 17.8178 0.738907 17.9491 0.799549 18.0659C0.860192 18.1827 0.951761 18.2807 1.06427 18.3491C1.17677 18.4174 1.30589 18.4536 1.43754 18.4536L14.3754 18.4531C14.5071 18.4531 14.6362 18.4169 14.7487 18.3485C14.8612 18.2802 14.9528 18.1822 15.0134 18.0654C15.074 17.9485 15.1014 17.8172 15.0925 17.6859C15.0836 17.5545 15.0389 17.4282 14.9631 17.3205C13.9537 15.8885 12.533 14.797 10.8893 14.1906Z" fill="#3B71FE"></path>
                                                <path d="M22.287 17.3205C21.2776 15.8885 19.8569 14.797 18.2131 14.1906C19.2819 13.4792 20.0616 12.4097 20.412 11.1746C20.7624 9.93949 20.6606 8.61987 20.1247 7.4532C19.5888 6.28652 18.6542 5.3494 17.4889 4.81047C16.3237 4.27153 15.0043 4.16617 13.7683 4.51334C13.6561 4.5449 13.5532 4.60327 13.4686 4.68343C13.384 4.76359 13.3201 4.86313 13.2825 4.97347C13.2449 5.08381 13.2348 5.20163 13.2528 5.31678C13.2709 5.43193 13.3168 5.54096 13.3864 5.63445C14.1989 6.72587 14.666 8.03558 14.7275 9.39483C14.789 10.7541 14.4421 12.1006 13.7314 13.261C13.6376 13.414 13.6044 13.5966 13.6384 13.7728C13.6724 13.9491 13.7711 14.1063 13.9152 14.2134C14.1877 14.4162 14.4499 14.6325 14.7007 14.8616C14.7137 14.8757 14.7268 14.8897 14.741 14.9029C15.7004 15.7898 16.4779 16.855 17.0302 18.0389C17.088 18.1629 17.1801 18.2677 17.2954 18.3412C17.4108 18.4146 17.5447 18.4536 17.6815 18.4536L21.6994 18.4531C21.831 18.4531 21.9601 18.4169 22.0726 18.3485C22.1851 18.2802 22.2766 18.1822 22.3373 18.0654C22.3979 17.9485 22.4253 17.8172 22.4164 17.6859C22.4075 17.5546 22.3627 17.4282 22.2869 17.3205L22.287 17.3205Z" fill="#3B71FE"></path>
                                            </svg>
                                            <p>цена на <span>5</span> чел</p>
                                        </div>

                                        <h3 class="hall__title"> Ресторан «Золотой фазан» </h3>

                                        <div class="hall__price-wrapper ">
                                            <div class="hall__price-discount list-loading"></div>
                                            <div class="hall__price list-loading"></div>
                                            <div class="hall__food-info list-loading"></div>
                                        </div>

                                        <h4 class="hall__subtitle">Парк-отель Орловский</h4>

                                        <div class="hall__food">
                                            <div class="hall__food-category hall__food-item1">
                                                <div class="hall__food-item hall__food-item--1"></div>
                                                <div class="hall__food-item hall__food-item--2"></div>
                                                <div class="hall__food-item hall__food-item--3"></div>
                                            </div>
                                            <div class="hall__food-text"></div>
                                        </div>
                                    </div>

                                    <div class="hall__footer">
                                        <div class="hall__location">
                                            <div class="hall__map">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.1829 7.04165C16.3079 3.19165 12.9496 1.45831 9.99959 1.45831C9.99959 1.45831 9.99959 1.45831 9.99126 1.45831C7.04959 1.45831 3.68292 3.18331 2.80792 7.03331C1.83292 11.3333 4.46626 14.975 6.84959 17.2666C7.73292 18.1166 8.86626 18.5416 9.99959 18.5416C11.1329 18.5416 12.2663 18.1166 13.1413 17.2666C15.5246 14.975 18.1579 11.3416 17.1829 7.04165ZM9.99959 11.2166C8.54959 11.2166 7.37459 10.0416 7.37459 8.59165C7.37459 7.14165 8.54959 5.96665 9.99959 5.96665C11.4496 5.96665 12.6246 7.14165 12.6246 8.59165C12.6246 10.0416 11.4496 11.2166 9.99959 11.2166Z" fill="#C4C7CB"></path>
                                                </svg>
                                                <p>Россия, Московская область, Ленинский городской округ, деревня Дальние Прудищи, </p>
                                            </div>


                                        </div>
                                        <div class="hall__stars-wrapper">
                                            <div class="stars hall__stars">
                                                <svg class="svg star hall__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE"></path>
                                                </svg><svg class="svg star hall__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE"></path>
                                                </svg><svg class="svg star hall__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE"></path>
                                                </svg><svg class="svg star hall__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE"></path>
                                                </svg><svg class="svg star hall__star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.11428 0.689943C9.48869 -0.024433 10.5113 -0.0244343 10.8857 0.689942L13.1194 4.95169C13.2642 5.22804 13.5297 5.42095 13.8373 5.4733L18.5807 6.28066C19.3758 6.416 19.6918 7.38856 19.1281 7.9654L15.7652 11.4067C15.5471 11.6298 15.4457 11.942 15.4909 12.2506L16.1889 17.0114C16.3059 17.8094 15.4786 18.4105 14.7558 18.0526L10.4437 15.9177C10.1641 15.7792 9.8359 15.7792 9.5563 15.9177L5.24425 18.0526C4.52144 18.4105 3.69413 17.8094 3.81112 17.0114L4.50906 12.2507C4.55432 11.942 4.4529 11.6298 4.23484 11.4067L0.871907 7.96541C0.308195 7.38856 0.624199 6.416 1.41931 6.28066L6.16271 5.4733C6.47029 5.42095 6.7358 5.22804 6.88064 4.95169L9.11428 0.689943Z" fill="#3B71FE"></path>
                                                </svg>
                                            </div>
                                            <div class="hall__star-number">5</div>
                                        </div>
                                    </div>
                                    <div class="hall__btns">
                                        <button class="hall__btn hall__btn1 btn btn2" data-popup="online">Узнать свободную дату</button>
                                        <button class="hall__btn hall__btn2 btn" data-popup="online">Расчет стоимости</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <? endforeach; ?>
                </div>
            </div>
        </section>

    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <ul class="footer__list">
                    <li class="footer__list-item" style="list-style: none;">
                        <a href="https://banketnye-zaly.moscow/contact" class="link" style="font-size: 16px; position: relative;">Контакты</a>
                    </li>
                </ul>

                <small class="footer__copy">Все права защищены © 2022</small>
            </div>
        </div>
    </footer>

    <div class="fixed-form is-hide">
        <div class="fixed-form__info">
            <h6 class="fixed-form__title"><span>99 000 ₽</span> на <span>40 чел.</span></h6>
        </div>
        <button class="fixed-form__btn btn emoji-stars" data-to="form-online">Подробнее</button>
    </div>



</body>

</html>