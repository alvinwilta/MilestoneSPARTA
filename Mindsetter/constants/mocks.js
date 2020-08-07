const categories = [
    {
        id: 1,
        name: 'Plants',
        tags: ['Products', 'inspirations', 'shops'],
        count: 147,
        image: require ('../assets/favicon.png')
    },
    {
        id: 2,
        name: 'Plants',
        tags: ['Products', 'inspirations', 'shops'],
        count: 147,
        image: require ('../assets/icon.png')
    },
];

const products = [
    {
        id: 1,
        name: '',
        description: '',
        tags: ['Interior','27m','Ideas'],
        gallery: [
            require('../assets/favicon.png'),
            require('../assets/favicon.png'),
            require('../assets/favicon.png'),
            //show 3, the rest just +3
            require('../assets/favicon.png'),
            require('../assets/favicon.png'),
            require('../assets/favicon.png'),
        ]
    }
];

const explore = [
    //image scroll horizontal
    require('../assets/splash.png'),
    require('../assets/splash.png'),
];
const profile = {
    username: 'react-ui',
    location: 'Indonesia',
    email: 'me@gmail.com',
    avatar: require('../assets/favicon.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};

export {
    categories,
    explore,
    products,
    profile,
}