const products = [
    {
        id: '1',
        category: 'pizzas',
        title: 'Pizza Margarita',
        description: 'pizza con tomate, mozzarella, albahaca fresca.',
        price: '$4.99',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/320px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
    },
    {
        id: '2',
        category: 'pizzas',
        title: 'Pizza Marinera',
        description: 'Pizza con tomate, ajo, orégano y aceite de oliva',
        price: '$3.59',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pizza_marinara.jpg/320px-Pizza_marinara.jpg',
    },
    {
        id: '3',
        category: 'pizzas',
        title: 'Pizza Hawaiana',
        description: 'Pizza con queso, tomate, jamón y piña.',
        price: '$3.59',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Pizza_Hawaii_02.jpg/257px-Pizza_Hawaii_02.jpg',
    },
    {
        id: '4',
        category: 'pizzas',
        title: 'Pizza  mexicana',
        description: 'Pizza con tomate, aguacate, jalapeños y queso.',
        price: '$6.95',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mexicana_Pizza_-_L%27Olivo_AUD17_large.jpg/320px-Mexicana_Pizza_-_L%27Olivo_AUD17_large.jpg',
    },
    {
        id: '5',
        category: 'ofertas',
        title: 'Pizza  al tegamino',
        description: 'Pizza con queso y albahaca fresca.',
        price: '$1.95',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/La_Voil%C3%A0%40Pizza_al_tegamino%40Scugnizzo%40Turin.jpg/320px-La_Voil%C3%A0%40Pizza_al_tegamino%40Scugnizzo%40Turin.jpg'
    },

    {
        id: '6',
        category: 'bebidas',
        title: 'Jugo de Naranja',
        description: 'Jugo de naranja.',
        price: '$2.00',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Oranges_and_orange_juice.jpg/157px-Oranges_and_orange_juice.jpg'
    },
    {
        id: '7',
        category: 'bebidas',
        title: 'Jugo de Tomate',
        description: 'Jugo de tomate.',
        price: '$2.50',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tomato_Juice.jpg/320px-Tomato_Juice.jpg'
    },
    {
        id: '8',
        category: 'postres',
        title: 'Helado',
        description: 'Helado de chocolate.',
        price: '$5.00',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/180px-Ice_Cream_dessert_02.jpg'
    },
    {
        id: '9',
        category: 'postres',
        title: 'Flan',
        description: 'Flan.',
        price: '$3.00',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cremecaramel.jpg/320px-Cremecaramel.jpg'
    },

    {
        id: '10',
        category: 'adicionales',
        title: 'Queso parmesano',
        description: 'Queso parmesano.',
        price: '$1.00',
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Insegna_per_caseificio_-_Musei_del_cibo_-_Parmigiano_-_069.tif/lossy-page1-206px-Insegna_per_caseificio_-_Musei_del_cibo_-_Parmigiano_-_069.tif.jpg'
    },
];


export const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
}

export const getProductsByCategory = categoryId => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId ))
        }, 500); 
    });
}

export const getProductById = productId => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId ))
        }, 500); 
    });
}
