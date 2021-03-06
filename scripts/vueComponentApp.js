const allNavi = [
    {
        item: 'Каталог',
        href: '#'
    },
    {
        item: 'Доставка',
        href: '#'
    },
    {
        item: 'Оплата',
        href: '#'
    },
    {
        item: 'Контакты',
        href: '#'
    },
    {
        item: 'О компании',
        href: '#'
    },
];

const allPaintings = [
    {
        id: 1,
        imgSrc: 'img/paintings/1.jpg',
        imgSrcBig: ['img/paintings/1_1.jpg', 'img/paintings/1_2.jpg', 'img/paintings/1_3.jpg'],
        showBigPaintingItem: 1,
        name: 'Рождение Венеры',
        author: 'Сандро Боттичелли',
        oldPrice: '2 000 000 $',
        newPrice: '1 000 000 $',
        description: 'Описание первого товара.',
        sold: false,
        basket: false,
        preloader: false,
    },
    {
        id: 2,
        imgSrc: 'img/paintings/2.jpg',
        imgSrcBig: ['img/paintings/2_1.jpg', 'img/paintings/2_2.jpg', 'img/paintings/2_3.jpg'],
        showBigPaintingItem: 1,
        name: 'Тайная вечеря',
        author: 'Леонардо да Винчи',
        oldPrice: '',
        newPrice: '3 000 000 $',
        description: 'Описание второго товара.',
        sold: false,
        basket: false,
        preloader: false,
    },
    {
        id: 3,
        imgSrc: 'img/paintings/3.jpg',
        imgSrcBig: ['img/paintings/3_1.jpg', 'img/paintings/3_2.jpg', 'img/paintings/3_3.jpg'],
        showBigPaintingItem: 1,
        name: 'Сотворение Адама',
        author: 'Микеланджело',
        oldPrice: '6 000 000 $',
        newPrice: '5 000 000 $',
        description: 'Описание третьего товара.',
        sold: false,
        basket: true,
        preloader: false,
    },
    {
        id: 4,
        imgSrc: 'img/paintings/4.jpg',
        imgSrcBig: ['img/paintings/4_1.jpg', 'img/paintings/4_2.jpg', 'img/paintings/4_3.jpg'],
        showBigPaintingItem: 1,
        name: 'Урок анатомии',
        author: 'Рембрандт',
        oldPrice: '',
        newPrice: '',
        description: 'Описание четвертого товара.',
        sold: true,
        basket: false,
        preloader: false,
    },
]

const naviitemheader = {
    props: ['naviItem'],
    template: `
            <div class="header__link_container nav_link_container">
                <a class="header__link nav_link" :href="naviItem.href">{{naviItem.item}}</a>
            </div>
            `
};

const naviitemfooter = {
    props: ['naviItem'],
    template: `
            <div class="footer__link_container nav_link_container">
                <a class="footer__link nav_link" :href="naviItem.href">{{naviItem.item}}</a>
            </div>
            `
};

const paintingitemmain = {
    props: ['paintingItem'],
    methods: {
        pushInBasket(paintingItem) {
            paintingItem.preloader = true;
            let timerId = setInterval(() => {
                paintingItem.preloader = false;
                paintingItem.basket = true;
                clearTimeout(timerId);
            }, 2000);
        },
        openBigPainting(paintingItem) {
            this.$parent.showBigPainting = paintingItem;
        }
    },
    template: `
            <div class="painting_item">
                <div class="painting_item__img_container">
                    <img class="painting_item__img" :src='paintingItem.imgSrc' :alt='paintingItem.name' width='280px'>
                </div>
                <div class="painting_item__description">
                    <h2 class="painting_tittle">
                        <span class="painting_tittle__name" v-on:click='openBigPainting(paintingItem)'>«{{paintingItem.name}}»</span>
                        <br>
                        <span class="painting_tittle__author">{{paintingItem.author}}</span>
                    </h2>
                    <div class="painting_item__bottom">
                        <div class="painting_item__price" v-if='!paintingItem.sold'>
                            <h6 class="painting_item__price_old" v-if='paintingItem.oldPrice'>{{paintingItem.oldPrice}}</h6>
                            <h3 class="painting_item__price_new">{{paintingItem.newPrice}}</h3>
                        </div>
                        <div class="painting_item__buy_wrapper" v-if='!paintingItem.sold'>
                            <button class="painting_item__buy" v-if='!paintingItem.basket && !paintingItem.preloader' v-on:click='pushInBasket(paintingItem)'>Купить</button>
                            <button class="painting_item__buy painting_item__buy-preloader" v-if='paintingItem.preloader' disabled>
                                <img class="painting_item__buy_preloader" src="img/badges/preloader.gif">
                            </button>
                            <button class="painting_item__buy painting_item__buy-sold" v-if='paintingItem.basket && !paintingItem.preloader' v-on:click='paintingItem.basket=false'>
                                <svg class="painting_item__check_mark" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d)">
                                    <path d="M16.5315 1.80937L7.63341 11.237L3.34814 7.19237" stroke="#F4F6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d" x="-1.65186" y="0.809357" width="23.1833" height="19.4276" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                                <span>В корзине<span>
                            </button>
                        </div>
                        <h3 class="painting_item__sold" v-if='paintingItem.sold'>Продана на аукционе</h3>
                    </div>
                </div>
                <div class="painting_item__curtain" v-if='paintingItem.sold'></div>
            </div>
            `
};

Vue.component('app', {
    data() {
        return {
            paintings: [],
            paintingsFilter: [],
            navi: [],
            userSearch: '',
            showBigPainting: ''
        }
    },
    methods: {
        pushNavi() {
            this.navi = allNavi;
        },
        pushPaintings() {
            this.paintings = allPaintings;
            this.paintingsFilter = allPaintings;
        },
        filter(){
            const regexp = new RegExp(this.userSearch, 'i');
            this.paintingsFilter = this.paintings.filter(painting => regexp.test(painting.name));
        },
        backBigPainting(showBigPainting) {
            if (showBigPainting.showBigPaintingItem == 1) {
                showBigPainting.showBigPaintingItem = showBigPainting.imgSrcBig.length;
            }
            else {
                showBigPainting.showBigPaintingItem--;
            }
        },
        nextBigPainting(showBigPainting) {
            if (showBigPainting.showBigPaintingItem == showBigPainting.imgSrcBig.length) {
                showBigPainting.showBigPaintingItem = 1;
            }
            else {
                showBigPainting.showBigPaintingItem++;
            }
        },
    },
    mounted() {
        this.pushNavi(),
        this.pushPaintings()
    },
    components: {naviitemheader, naviitemfooter, paintingitemmain},
    template: `
            <div class="app" id="app">
                <header class="header center">
                    <div class="header__nav nav">
                        <naviitemheader v-for='naviItem of navi' :naviItem='naviItem'></naviitemheader>
                    </div>
                    <form class="header__search_form" action="#" @submit.prevent="filter">
                        <input class="header__search_input" type="text" v-model="userSearch" placeholder="Поиск по названию картины">
                        <button class="header__search_btn" type="submit">Найти</button>
                    </form>
                </header>
                <main class="main">
                    <section class="main_section center">
                        <h1 class="page_tittle">Картины эпохи Возрождения</h1>
                        <div class="paintings_list">
                            <paintingitemmain v-for='paintingItem of paintingsFilter' :paintingItem='paintingItem'></paintingitemmain>
                        </div>
                    </section>
                </main>
                <footer class="footer center">
                    <div class="footer__nav nav">
                        <naviitemfooter v-for='naviItem of navi' :naviItem='naviItem'></naviitemfooter>
                    </div>
                    <div class="footer__contacts">
                        <div class="footer__phone">
                            <span class="footer__phone_img_container footer__img_container">
                                <svg class="footer__phone_img" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6861 11.0733L11.5241 8.9061C11.0934 8.47621 10.3803 8.48927 9.93461 8.9361L8.84534 10.0276C8.77652 9.98957 8.70529 9.94987 8.6304 9.90774C7.94254 9.52574 7.00109 9.00217 6.0104 8.00851C5.01678 7.01276 4.49391 6.06772 4.11161 5.37786C4.07127 5.30478 4.03261 5.23431 3.99445 5.16739L4.7255 4.43577L5.08492 4.07509C5.53125 3.62763 5.54356 2.91305 5.11392 2.48192L2.95184 0.314451C2.52219 -0.116083 1.80871 -0.103021 1.36238 0.344444L0.753032 0.95868L0.769684 0.975248C0.565361 1.23655 0.394623 1.53793 0.267564 1.86292C0.150441 2.17228 0.0775199 2.46748 0.0441767 2.76329C-0.241312 5.13542 0.840231 7.30337 3.7754 10.2452C7.8327 14.3114 11.1023 14.0043 11.2434 13.9893C11.5506 13.9525 11.845 13.8789 12.1442 13.7624C12.4657 13.6366 12.7662 13.4657 13.0267 13.2613L13.04 13.2732L13.6573 12.6673C14.1028 12.22 14.1156 11.5051 13.6861 11.0733Z" fill="#555555"/>
                                </svg>
                            </span>
                            <a class="footer__phone_number footer__contacts_description" href="tel:88125555555">+7 (812) 555-55-55</a>
                        </div>
                        <div class="footer__address">
                            <span class="footer__address_img_container footer__img_container">
                                <svg class="footer__address_img" width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.07028 0C2.27451 0 0 2.27451 0 5.07025C0 8.53985 4.5374 13.6334 4.73058 13.8486C4.91204 14.0507 5.22884 14.0503 5.40997 13.8486C5.60315 13.6334 10.1406 8.53985 10.1406 5.07025C10.1405 2.27451 7.86601 0 5.07028 0ZM5.07028 7.62123C3.66366 7.62123 2.51932 6.47687 2.51932 5.07025C2.51932 3.66363 3.66368 2.51929 5.07028 2.51929C6.47687 2.51929 7.6212 3.66366 7.6212 5.07028C7.6212 6.47689 6.47687 7.62123 5.07028 7.62123Z" fill="#555555"/>
                                </svg>
                            </span>
                            <span class="footer__address_text footer__contacts_description">г. Санкт-Петербург, ул. Ефимова, 3</span>
                        </div>
                    </div>
                </footer>
                <div class="big_painting" v-if='showBigPainting'>
                    <button class="big_painting__close" v-on:click='showBigPainting=false'></button>
                    <div class="painting_item painting_item__big">
                        <div class="painting_item__img_container painting_item__img_container__big">
                            <button class="painting_item__img_btn__big painting_item__img_btn__big-back" v-on:click='backBigPainting(showBigPainting)'>&#8656;</button>
                            <img class="painting_item__img painting_item__img__big" :src="showBigPainting.imgSrcBig[showBigPainting.showBigPaintingItem - 1]" alt="big painting">
                            <button class="painting_item__img_btn__big painting_item__img_btn__big-next" v-on:click='nextBigPainting(showBigPainting)'>&#8658;</button>
                        </div>
                        <div class="painting_item__description painting_item__description__big">
                            <h2 class="painting_tittle painting_tittle__big">
                                <span class="painting_tittle__name painting_tittle__name__big">«{{showBigPainting.name}}»</span>
                                <br>
                                <span class="painting_tittle__author">{{showBigPainting.author}}</span>
                            </h2>
                            <div class="painting_item__bottom painting_item__bottom__big">
                                <div class="painting_item__price painting_item__price__big" v-if='!showBigPainting.sold'>
                                    <h6 class="painting_item__price_old painting_item__price_old__big" v-if='showBigPainting.oldPrice'>{{showBigPainting.oldPrice}}</h6>
                                    <h3 class="painting_item__price_new painting_item__price_new__big">{{showBigPainting.newPrice}}</h3>
                                </div>
                                <h3 class="painting_item__sold painting_item__sold__big" v-if='showBigPainting.sold'>Продана на аукционе</h3>
                                <p class="painting_item__paiting_description__big" v-if='showBigPainting.description'>{{showBigPainting.description}}</p>
                            </div>
                        </div>
                        <div class="painting_item__curtain painting_item__curtain__big" v-if='showBigPainting.sold'></div>
                    </div>
                </div>
            </div>
            `
});
