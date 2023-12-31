<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Raleway:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body >

    <div class="top">

        <!-- popUpCall -->
        <div id="popUpCall" class="popUpCall">
            <form id="modal" class="modal" action="" >
                <svg id="popUpCallClose" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <line x1="1.70711" y1="1.69865" x2="32.1127" y2="32.1042" stroke="white" stroke-opacity="0.8" stroke-width="2"/>
                    <line x1="1.29289" y1="31.6982" x2="31.6985" y2="1.29258" stroke="white" stroke-opacity="0.8" stroke-width="2"/>
                  </svg>
                <h2 class="modal__title">Закажите<br> обратный звонок</h2>

                <div id="modal__info" class="modal__info">
                    <p>
                        <input type="text" id="userName" class="userName field" placeholder="Введите имя*" minlength="4"/>
                        <!-- <span class="error" aria-live="polite"></span> -->
                    </p>
                    
                    <img src="img/Line.png" alt="">
                    <p>
                        <input type="tel" id="userPhone" class="userPhone field" placeholder="Введите телефон*" minlength="10" />
                        <!-- _req _phone -->
                        <!-- <span class="error" aria-live="polite"></span> -->
                    </p>
                    <img src="img/Line.png" alt="">
                </div>
                
                <div class="modal__button">
                    <div class="modal__button__checkbox">
                        
                        <p>
                            <input type="checkbox" id="approval" class="approval" />
                            <label for="approval">Согласен на сохранение и обработку персональных данных</label>
                        </p>
                        
                    </div>
                
                    <button type="submit" id="popUpThanksStart" class="modal__button__other">
                        Заказать обратный звонок
                        
                        <img src="img/Line 170.png" alt="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke="white" stroke-width="2"/>
                          </svg>
                    </button>
                </div>
                

            </form>
        </div>

        <!-- popUpThanks -->
        <div id="popUpThanks" class="popUpThanks">
            <div id="modal" class="modal">
                <svg id="popUpThanksClose" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <line x1="1.70711" y1="1.69865" x2="32.1127" y2="32.1042" stroke="white" stroke-opacity="0.8" stroke-width="2"/>
                    <line x1="1.29289" y1="31.6982" x2="31.6985" y2="1.29258" stroke="white" stroke-opacity="0.8" stroke-width="2"/>
                </svg>

                <div id="modal__info" class="modal__info">
                    <h2 class="modal__info__title">Спасибо<br> за заявку</h2>
                    <p class="modal__info__text">
                        Я обязательно<br>
                        свяжусь с вами<br>
                        в ближайшее время.
                    </p>

                </div>

                <div class="modal__logo">
                    <img src="img/logo.svg" alt="">
                </div>

                
                

            </div>
        </div>

        <!-- header -->
        <header class="header">
            <div class="header__content container">
                <div class="logo">
                    <a href="index.html">
                        <img src="img/logo.svg" alt="logo">
                    </a>
                </div>
                
                <div class="menu">
                    <a href="#" class="menu__link">Обо мне</a>
                    <a href="#" class="menu__link">Наставничество</a>
                    <a href="#" class="menu__link">Мероприятия</a>
                    <a href="#" class="menu__link">Кейсы</a>
                    <a href="#" class="menu__link">Отзывы</a>
                    <a href="#" class="menu__link">Контакты</a>
                </div>
                
                <div class="phone">
                    <div class="menu__mobile">
                        <img src="img/menu.svg" alt="">
                    </div>
                    <div class="phone__img">
                        <img src="img/Group 1321313978.svg" alt="">
                          
                    </div>
                    <div class="phone__number">8-345-123-34-45</div>
                </div>
            </div>

        </header>

        <!-- offer -->
        <section class="offer">
            <div class="offer__content container">
                <div class="offer__content__img">
                    <img src="img/mentor 2.png" alt="">
                </div>

                <div class="offer__content__center">
                    <h1 class="offer__content__center__title">
                        Создаю условия<br>
                        для вашего успеха

                    </h1>
                    <p class="offer__content__center__text">
                        Когда ваше время и энергия лучше сфокусированы, стремление к новым<br> возможностям становится реальностью,  ваш успех зависит от ваших действий
                    </p>
                    <div class="offer__content__center__button-box">
                        <button id='popUpCallStart1' class="button__white">
                            Записаться на консультацию
                            
                            <img src="img/Line 170.png" alt="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke="#0B3461" stroke-width="2"/>
                              </svg>
                        </button>
                        <button id='popUpCallStart2' class="button__other">
                            Бесплатная консультация
                            
                            <img src="img/Line 170.png" alt="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M21 4.29346V20.952H4.37326M20.9618 21L1 1" stroke="white" stroke-width="2"/>
                              </svg>
                        </button>
                    </div>
                    <div class="offer__content__center__data">
                        <div class="offer__content__center__data-quantity">
                            <h2><?php include('php/sumDate.php');?></h2>
                            <p>техник для<br> достижения целей</p>
                        </div>
                        <div class="offer__content__center__data-precent">
                            <h2><?php include('php/gbp.php');?></h2>
                            <p>увеличение личной<br> продуктивности</p>
                        </div>
                    </div>
                    

                </div>
                
                
            </div>
            
        </section>
    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="scripts/modal.js"></script>
<script src="scripts/formValidate.js"></script>
</body>
</html>