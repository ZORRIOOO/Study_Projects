document.addEventListener('DOMContentLoaded', function() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add("col-md-4");
            element.innerHTML = `
                <div class="main_item">
                    <img src="${this.src}" alt="${this.alt}">
                    <h2 class="main_item-title">${this.title}</h2>
                    <div class="menu_item-descr">${this.descr}</div>
                    <div class="menu_item-price">
                        <div class="menu_item-total"><span>${this.price}</span> руб.</div>
                        <button class="menu_item-button"><i class="fas fa-shopping-cart menu_item-icon"></i></button>
                    </div>
                </div>
                `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/boots.png",
        "boots",
        'Ботинки женские',
        'Модные ботинки из натурального нубука. Согреют ваши ноги во время зимних морозов.',
        5000,
        ".main .container .row"
    ).render();
    
    new MenuCard(
        "img/boots.png",
        "boots",
        'Ботинки женские',
        'Модные ботинки из натурального нубука. Согреют ваши ноги во время зимних морозов.',
        5000,
        ".main .container .row"
    ).render();

    new MenuCard(
        "img/boots.png",
        "boots",
        'Ботинки женские',
        'Модные ботинки из натурального нубука. Согреют ваши ноги во время зимних морозов.',
        5000,
        ".main .container .row"
    ).render();
});
