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
        name: 'Рождение Венеры',
        author: 'Сандро Боттичелли',
        oldPrice: '2 000 000 $',
        newPrice: '1 000 000 $',
        sold: false,
        basket: false,
    },
    {
        id: 2,
        imgSrc: 'img/paintings/2.jpg',
        name: 'Тайная вечеря',
        author: 'Леонардо да Винчи',
        oldPrice: '',
        newPrice: '3 000 000 $',
        sold: false,
        basket: false,
    },
    {
        id: 3,
        imgSrc: 'img/paintings/3.jpg',
        name: 'Сотворение Адама',
        author: 'Микеланджело',
        oldPrice: '6 000 000 $',
        newPrice: '5 000 000 $',
        sold: false,
        basket: true,
    },
    {
        id: 4,
        imgSrc: 'img/paintings/4.jpg',
        name: 'Урок анатомии',
        author: 'Рембрандт',
        oldPrice: '',
        newPrice: '',
        sold: true,
        basket: false,
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
    template: `
            <div class="painting_item">
                <div class="painting_item__img_container">
                    <img class="painting_item__img" :src='paintingItem.imgSrc' :alt='paintingItem.name' width='280px'>
                </div>
                <div class="painting_item__description">
                    <h2 class="painting_tittle">
                        <span class="painting_tittle__name">«{{paintingItem.name}}»</span>
                        <br>
                        <span class="painting_tittle__author">{{paintingItem.author}}</span>
                    </h2>
                    <div class="painting_item__bottom">
                        <div class="painting_item__price" v-if='!paintingItem.sold'>
                            <h6 class="painting_item__price_old" v-if='paintingItem.oldPrice'>{{paintingItem.oldPrice}}</h6>
                            <h3 class="painting_item__price_new">{{paintingItem.newPrice}}</h3>
                        </div>
                        <div class="painting_item__buy_wrapper" v-if='!paintingItem.sold'>
                            <button class="painting_item__buy" v-if='!paintingItem.basket' v-on:click='paintingItem.basket=true'>Купить</button>
                            <button class="painting_item__buy painting_item__buy-sold" v-if='paintingItem.basket' v-on:click='paintingItem.basket=false'>
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

const app = {
    data() {
        return {
            paintings: [],
            paintingsFilter: [],
            navi: [],
            userSearch: ''
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
            </div>
            `
};
