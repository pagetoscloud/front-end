import zebraPelari from '../assets/images/Zebra-pelari.png';
import mawarMerahMuda from '../assets/images/Mawar-merah-muda.png';
import matahariPenerang from '../assets/images/Matahari-penerang.jpg';
import merahDelima from '../assets/images/Merah-delima.png';
import kingKebab from '../assets/images/king-kebab.png';
import asianBite from '../assets/images/asian-bite-thumbnail.png';
import greenFood from '../assets/images/greenfood-thumbnail.png';
import meatEat from '../assets/images/MeatEat-thumbnail.png';
import pinkSushi from '../assets/images/pink-sushi-thumbnail.png';
import myCatering from '../assets/images/my-catering-thumbnail.png';
import cakeKey from '../assets/images/cake-key-thumbnail.png';
import chickPoint from '../assets/images/chick-point-thumbnail.png';
import bannerHeroMockup from '../assets/images/double-cheese-burger.png';
import cheeseBurger from '../assets/images/double-cheese-burger.jpg';
import iceCoke from '../assets/images/ice-coke.jpg'
import icePepsi from '../assets/images/ice-pepsi.jpg'
import doubleBeefBacon from '../assets/images/double-beef-bacon.jpg';
import whopper from '../assets/images/whopper-burger.jpg';
import fishBurger from '../assets/images/fish-burger.jpg';
import frenchFries from '../assets/images/french-fries.jpg'
import hotDog from '../assets/images/hot-dog.jpg'
import { componentsData } from './ComponentsData';

export const templateListData = [
    {
        name: 'Zebra Pelari',
        type: 'food',
        image: zebraPelari,
        id: 1,
        components: {
            main: [
                {name: 'header', type: 'one', components: componentsData.header.one},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'one', components: componentsData.main.one },
                {name: 'item details', type: 'one', components: componentsData.itemDetails.one},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.one,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.one},
                ],
                child: {
                        category: 'one',
                        listItems: 'one',
                        items: 'one',
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'PIZZOO'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/pizza-hero-2.png',
                title: 'Best Pizza in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Original Pizz', price: 'Rp 54.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/original-pizz.png'},
                        {id: 2, name: 'Margarita Pizz', price: 'Rp 50.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/margarita-pizz.png'},
                        {id: 3, name: 'Extra Cheese', price: 'Rp 60.000', description: 'Cruncy bacon with special double beef.', image: 'https://storage.googleapis.com/pagetos_template_image/extra-cheese.png'},
                        {id: 4, name: 'Spinach Pizz', price: 'Rp 58.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/spinach-pizza.png'},
                        {id: 5, name: 'Olive Pizz', price: 'Rp 60.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/olive-pizz.png'},
                        {id: 6, name: 'Pepperoni Pizz', price: 'Rp 55.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/pepperoni-pizz.png'}
                    ]
                },
                {
                    id: 2,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: iceCoke},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/orange-juice.png'}
                    ]
                },
            ] ,
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'PIZOO',
                subtitle: 'Jl. Danau Sunter Utara No. 76, Sunter, Jakarta Utara 14350',
                paragraph: 'Best Pizza in The Town.',
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#FFFFFF', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#000000', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 20, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 16, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 20, color: 'white', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 16, color: 'white',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'black', border: 'none', borderRadius: '10px', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}

                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },  
        }
    }, 
    {
        name: 'Mawar Merah Muda',
        type: 'food',
        image: mawarMerahMuda,        
        id: 2,
        screen: {type: 123},
        components: {
            main: [
                {name: 'header', type: 'one', components: componentsData.header.one},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'one', components: componentsData.main.one },
                {name: 'item details', type: 'two', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.one,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.three,
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'two', components: componentsData.itemDetails.two}
    
                ],
                child: {
                        category: "one",
                        listItems: "one",
                        items: "three",
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'Donuts'}
            },
            banner: {
                image:'https://storage.googleapis.com/pagetos_template_image/croissant-hero.png',
                title: 'Promo Spesial Diskon 20%.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Croissant', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Croissant.png'},
                        {id: 2, name: 'Macaron', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image:'https://storage.googleapis.com/pagetos_template_image/Macaron.png'},
                        {id: 3, name: 'Baklava', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: 'https://storage.googleapis.com/pagetos_template_image/Baklava.png'},
                        {id: 4, name: 'Puff Pastry', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Puff%20Pastry.png'},
                        {id: 5, name: 'Danish Pastry', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Danish%20Pastry.png'},
                        {id: 6, name: 'Tart Buah', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Tart%20Buah.png'},
                    ]
                },
                {
                    id: 2,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Americano', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Ice%20Americano.png'},
                        {id: 2, name: 'Espresso', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Espresso.png'},
                        {id: 3, name: 'Ice Coffee', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Ice%20Coffee.png'},
                        {id: 4, name: 'Ice Chocolate', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Ice%20Chocolate.png'},
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'BAKEER',
                subtitle: 'Jl. Kuningan Barat No. 88, Setiabudi, Jakarta Selatan 12950',
                paragraph: "Sweet. Flaky. Fabulous.",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            } 
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: 'linear-gradient(90deg, #E7DEDE, #DFD2D2)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
                    listItems: {
                        display: 'flex',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 20, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 16, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 400, fontFamily: 'Lato, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: 'pink', border: {type: 'solid', size: 2, color: '#FFFFFF'}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 20, color: '#000000', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Lato, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 16, color: 'black',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Lato, serif', opacity: '100%', textAlign: 'left'},
                    image: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))', border: '2px solid white', borderRadius: '20px', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {opacity: 100, filter: {type: 'blur', value: 0}, borderRadius: 100, border: {size: 0, color: "#FFFFFF"}},
                    circle: {type: 'solid', color: '#FFFFFF', border: {size: 1, color: "#FFFFFF"}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#000000',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {opacity: '100%', borderRadius: '100px', filter: 'blur(0)', border: '2px solid white'},
                    circle: {background: 'rgba(255, 255, 255, 0)', border: "2px solid #FFFFFF", opacity: "100%", borderRadius: '100px', filter: {type: 'blur', value: 0}},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'gradient', gradientType: '90deg', color: ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.3)'], border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 30, filter: {type: 'blur', value: 0}, effect: [{name: 'backdropFilter', value: 10, type: 'blur'}]},
                    circle: {type: 'solid', color: '#FFFFFF', border: {type: 'solid',size: 2, color: "#FFFFFF"}, opacity: 100, borderRadius: 100, filter: {type: 'none', value: 0}, effect: []},
                    button: {background: 'rgba(255, 255, 255, 1)', color: '#000000', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3))', borderRadius: '30px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'blur(10px)', boxShadow: 'none'},
                    circle: {background: 'transparent', borderRadius: '100px', border: '2px solid #FFFFFF', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'},
                    // circle: {type: 'solid', color: '#FFFFFF', border: {size: 2, color: "#FFFFFF"}, opacity: 100, borderRadius: 100, filter: {type: 'none', value: 0}, effect: []},
                    button: {background: 'rgba(255, 255, 255, 1)', color: '#000000', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}

                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'gradient', gradientType: '90deg', color: ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.3)'], border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 30, filter: {type: 'blur', value: 0}, effect: [{name: 'backdropFilter', value: 10, type: 'blur'}]},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3))', borderRadius: '30px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'blur(10px)', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },
        }
    },
    {
        name: 'Matahari Penerang',
        type: 'food',
        image: matahariPenerang,
        id: 3,
        screen: {type: 123},
        components: {
            main: [
                {name: 'header', type: 'one', components: componentsData.header.one},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'one', components: componentsData.main.one },
                {name: 'item details', type: 'three', components: componentsData.itemDetails.three},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.two,
                    items: componentsData.items.two,
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'three', components: componentsData.itemDetails.three}
                ],
                child: {
                        category: "two",
                        listItems: "two",
                        items: "two",
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'BurgerQeen.'}
            },
            banner: {
                image: bannerHeroMockup,
                title: 'Best Burger in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Cheese Burger', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: cheeseBurger},
                        {id: 2, name: 'Whopper', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: whopper},
                        {id: 3, name: 'Special Bacon', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: doubleBeefBacon},
                        {id: 4, name: 'Fish Burger', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: fishBurger},
                        {id: 4, name: 'Hot Dog', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: hotDog},
                        {id: 4, name: 'French Fries', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: frenchFries}
                    ]
                },
                {
                    id: 2,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: iceCoke},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: icePepsi}
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'BURGEROUS',
                subtitle: 'Jl. Kuningan Barat No. 88, Setiabudi, Jakarta Selatan 12950',
                paragraph: "Meaty, Juicy, Happy!",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            } 
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#FFFFFF', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
                    listItems: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        // margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
                    listItems: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        // margin: '10px 0'
                    }
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 20, color: '#000000', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 16, color: '#000000', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'gradient', color: ['#FEFFC1', '#FFE665'], border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 20, color: '#000000', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Lato, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 16, color: '#000000',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Lato, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'linear-gradient(105deg, #FEFFC1, #FFE665)', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Lato, serif', opacity: 100, textAlign: 'left'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 400, fontFamily: 'Lato, serif', opacity: 100, textAlign: 'left'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    button: {background: 'rgb(0, 0, 0)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    button: {background: 'rgb(0, 0, 0)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF' , border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 30, filter: {type: 'blur', value: 0}, effect: [{name: 'backdropFilter', value: 10, type: 'blur'}]},
                    button: {background: 'rgba(0, 0, 0, 1)', color: 'white', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: '#FFFFFF', borderRadius: '30px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'blur(10px)', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            } 

        }
    },    {
        name: 'Merah Delima',
        type: 'food',
        image: merahDelima,
        id: 4,
        screen: {type: 123},
        components: {
            main: [
                {name: 'header', type: 'one', components: componentsData.header.one},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'one', components: componentsData.main.one },
                {name: 'item details', type: 'three', components: componentsData.itemDetails.three},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.one,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                ],
                child: {
                        category: "one",
                        listItems: "one",
                        items: "one",
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'BurgerQeen.'}
            },
            banner: {
                image: bannerHeroMockup,
                title: 'Best Burger in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Cheese Burger', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: cheeseBurger},
                        {id: 2, name: 'Whopper', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: whopper},
                        {id: 3, name: 'Special Bacon', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: doubleBeefBacon},
                        {id: 4, name: 'Fish Burger', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: fishBurger},
                        {id: 4, name: 'Hot Dog', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: hotDog},
                        {id: 4, name: 'French Fries', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: frenchFries}
                    ]
                },
                {
                    id: 2,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: iceCoke},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: icePepsi}
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'BURGERQUEEN',
                subtitle: 'Jl. Palmerah Barat No. 15A, Tanah Abang, Jakarta Pusat 10270',
                paragraph: "Tebal, Lezat, Habis Sekejap!",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            } 
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#F4E8DF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#F4E8DF', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
                    listItems: {
                        display: 'flex',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 20, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 16, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 20, color: 'white', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 16, color: 'white',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'red', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '10px', border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    button: {background: 'rgb(0, 0, 0)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    button: {background: 'rgb(0, 0, 0)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },    
        }
    },
    {
        name: 'King Kebab',
        type: 'food',
        image: kingKebab,
        id: 5,
        components: {
            main: [
                {name: 'header', type: 'one', components: componentsData.header.one},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'two', components: componentsData.main.two },
                {name: 'item details', type: 'two', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    specialListItems: componentsData.listItems.three,
                    items: componentsData.items.one,
                    specialItems: componentsData.items.four
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'two', components: componentsData.main.two },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
                ],
                child: {
                        category: 'two',
                        listItems: 'one',
                        items: 'one',
                        specialListItems: 'three',
                        specialItems: 'four'
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'King Kebab.'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/kebab-hero.png',
                title: 'Best Kebab in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular',
                    listItems: [
                        {id: 1, name: 'Cheese Kebab Melt', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: 'https://storage.googleapis.com/pagetos_template_image/Cheese-Kebab-Melt.jpg'},
                        {id: 2, name: 'Turkish Adana', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Turkish-Adana.jpg'},
                        {id: 3, name: 'Falafel Wrap', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Falafel-Wrap.jpg'},
                        {id: 4, name: 'Doner Kebab Box', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Doner-Kebab-Box.jpg'},
                        {id: 5, name: 'Lamb Kofta Kebab', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Lamb-Kofta-Kebab.jpg'},
                        {id: 6, name: 'Kebab Burger', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Kebab-Burger.jpg'}
                    ]
                },
                {
                    id: 2,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Classic Beef Kebab', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Classic-Beef-Kebab.jpg'},
                        {id: 2, name: 'Chicken Shawarma', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Chicken-Shawarma.jpg'},
                        {id: 3, name: 'Cheese Kebab Melt', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: 'https://storage.googleapis.com/pagetos_template_image/Cheese-Kebab-Melt.jpg'},
                        {id: 4, name: 'Turkish Adana', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Turkish-Adana.jpg'},
                        {id: 5, name: 'Falafel Wrap', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Falafel-Wrap.jpg'},
                        {id: 6, name: 'Doner Kebab Box', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Doner-Kebab-Box.jpg'},
                        {id: 7, name: 'Lamb Kofta Kebab', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Lamb-Kofta-Kebab.jpg'},
                        {id: 8, name: 'Kebab Burger', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Kebab-Burger.jpg'}
                    ]
                },
                {
                    id: 3,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: iceCoke},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: icePepsi}
                    ]
                },
            ] ,
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'KING KEBAB',
                subtitle: 'Jl. M.H. Thamrin No.66',
                paragraph: 'Rasakan kelezatan kebab otentik dengan cita rasa istimewa dari Timur Tengah.',
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#FFFFFF', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 20, color: '#DB1020', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 16, color: '#000000', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFD700', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 20, color: '#DB1020', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 16, color: 'black',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFD700', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            specialItems: {
                data: {
                    title: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 11, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 11, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#EDC700', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: '#FFFFFF', border: {size: 2, color: '#EDC700'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#EDC700', color: 'black', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#EDC700', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'rgba(255, 255, 255, 1)', borderRadius: '100px', border: '2px solid #EDC700', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#EDC700', color: 'black', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#EDC700', color: 'black', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#EDC700', color: 'black', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            }  
        }
    }, 
    {
        name: 'Asian Bite',
        type: 'food',
        image: asianBite,
        id: 6,
        components: {
            main: [
                {name: 'header', type: 'one', components: componentsData.header.one},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'one', components: componentsData.main.two },
                {name: 'item details', type: 'two', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.five
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.one},
                ],
                child: {
                        category: 'one',
                        listItems: 'one',
                        items: 'one',
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'Asian Bite'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/asian-bite-hero.png',
                title: 'Best Asian Food in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Bibimbap', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Bibimbap.jpg'},
                        {id: 2, name: 'Beef Bulgogi', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Beef-Bulgogi.jpg'},
                        {id: 3, name: 'Pho Bo', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Pho-Bo.jpg'},
                        {id: 4, name: 'Teriyaki Salmon', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Teriyaki-Salmon.jpg'},
                        {id: 5, name: 'Spicy Tuna Sushi', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spicy-Tuna-Sushi.jpg'},
                        {id: 6, name: 'Chicken Katsu Curry', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Chicken-Katsu-Curry.jpg'},
                    ]
                },
                                {
                    id: 2,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Bibimbap', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Bibimbap.jpg'},
                        {id: 2, name: 'Pho Bo', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Pho-Bo.jpg'},
                        {id: 3, name: 'Pad Thai', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: 'https://storage.googleapis.com/pagetos_template_image/Pad-Thai.jpg'},
                        {id: 4, name: 'Beef Bulgogi', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Beef-Bulgogi.jpg'},
                        {id: 5, name: 'Teriyaki Salmon', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Teriyaki-Salmon.jpg'},
                        {id: 6, name: 'Spicy Tuna Sushi', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spicy-Tuna-Sushi.jpg'},
                        {id: 7, name: 'Chicken Katsu Curry', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Chicken-Katsu-Curry.jpg'},
                        {id: 8, name: 'Thai Green Curry', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Thai-Green-Curry.jpg'},
                    ]
                },
                {
                    id: 3,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: iceCoke},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: icePepsi}
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            specialItems: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    // {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'ASIAN BITE',
                subtitle: 'Jl. Tebet Barat Dalam No. 33, Tebet, Jakarta Selatan 12810',
                paragraph: "Asian Flavors, Global Vibes",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#F6F6F6', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#F6F6F6', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 16, color: '#F2E8C6', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 14, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 16, color: '#F2E8C6', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 14, color: '#FFFFFF',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFFFFF', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: '#FFFFFF', border: {type: 'solid', size: 2, color: '#000000'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#000000', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'rgba(255, 255, 255, 1)', borderRadius: '100%', border: '2px solid #000000', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#000000', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            specialItems: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 20, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#000000', color: 'white', fontSize: 16, fontWeight: 700, border: { size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFFFFF', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#000000', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 100, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },  
        }
    }, 
    {
        name: 'GreenFood',
        type: 'food',
        image: greenFood,
        id: 7,
        components: {
            main: [
                {name: 'header', type: 'two', components: componentsData.header.two},
                {name: 'main', type: 'one', components: componentsData.main.two },
                {name: 'item details', type: 'four', components: componentsData.itemDetails.four},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.four
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.one},
                ],
                child: {
                        category: 'one',
                        listItems: 'one',
                        items: 'one',
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'GreenFood.'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/asian-bite-hero.png',
                title: 'Best Asian Food in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Avocado Toast', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Avocado-Toast.jpg'},
                        {id: 2, name: 'Grilled Chicken', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Grilled-Chicken.jpg'},
                        {id: 3, name: 'Golden Turmeric', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Golden-Turmeric.jpg'},
                        {id: 4, name: 'Salmon Potato', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Salmon-Potato.jpg'},
                        {id: 5, name: 'Spinach-Feta', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spinach-Feta.jpg'},
                    ]
                },
                                {
                    id: 2,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Avocado Toast', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Avocado-Toast.jpg'},
                        {id: 2, name: 'Salmon Potato', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Salmon-Potato.jpg'},
                        {id: 3, name: 'Grilled Chicken', price: 'Rp 24.000', description: 'Cruncy bacon with special double beef.', image: 'https://storage.googleapis.com/pagetos_template_image/Grilled-Chicken.jpg'},
                        {id: 4, name: 'Spinach Feta', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spinach-Feta.jpg'},
                        {id: 5, name: 'Vegetable Wrap', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Vegetable-Wrap.jpg'},
                    ]
                },
                {
                    id: 3,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Golden Turmeric', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Golden-Turmeric.jpg'},
                        {id: 2, name: 'Orange Carrot', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Orange-Carrot.jpg'},
                        {id: 3, name: 'Green Smoothie', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Green-Smoothie.jpg'},
                        {id: 4, name: 'Coconut Lime', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Coconut-Lime.jpg'},
                    ]
                },
            ] ,
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'GREENFOOD',
                subtitle: 'Jl. M.H. Thamrin No.99, Jakarta',
                paragraph: 'GreenFood menyediakan makanan sehat yang segar, alami, dan bergizi.',
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#FFFFFF', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: '#B6F500', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: '#B6F500', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'black', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: '#B6F500', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 16, color: '#F2E8C6', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 14, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 16, color: '#F2E8C6', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 14, color: '#FFFFFF',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            specialItems: {
                data: {
                    title: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 11, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 11, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#B6F500', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: '#FFFFFF', border: {type: 'solid', size: 2, color: '#B6F500'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#B6F500', color: '#000000', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#B6F500', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'rgba(255, 255, 255, 1)', borderRadius: '100%', border: '2px solid #B6F500', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#B6F500', color: '#000000', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#B6F500', color: 'black', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#B6F500', color: 'black', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },  
        }
    }, 
    {
        name: 'MeatEat',
        type: 'food',
        image: meatEat,
        id: 8,
        components: {
            main: [
                {name: 'header', type: 'two', components: componentsData.header.two},
                {name: 'main', type: 'one', components: componentsData.main.two },
                {name: 'item details', type: 'five', components: componentsData.itemDetails.five},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.four
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.one},
                ],
                child: {
                        category: 'one',
                        listItems: 'one',
                        items: 'one',
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'MeatEat.'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/asian-bite-hero.png',
                title: 'Best Asian Food in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Tenderloin Steak', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Tenderloin.jpg'},
                        {id: 2, name: 'T-Bone Steak', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/T-Bone-Steak.jpg'},
                        {id: 3, name: 'BBQ Beef Ribs', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/BBQ-Beef-Ribs.jpg'},
                        {id: 4, name: 'Ribeye Steak', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Ribeye-Steak.jpg'},
                        {id: 5, name: 'Sirloin Steak', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Sirloin-Steak.jpg'},
                        // {id: 5, name: 'Spicy Tuna Sushi', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: ''},
                        // {id: 6, name: 'Chicken Katsu Curry', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: ''},
                    ]
                },
                                {
                    id: 2,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Tenderloin Steak', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Tenderloin.jpg'},
                        {id: 2, name: 'T-Bone Steak', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/T-Bone-Steak.jpg'},
                        {id: 3, name: 'BBQ Beef Ribs', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/BBQ-Beef-Ribs.jpg'},
                        {id: 4, name: 'Ribeye Steak', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Ribeye-Steak.jpg'},
                        {id: 5, name: 'Sirloin Steak', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Sirloin-Steak.jpg'},
                    ]
                },
                {
                    id: 3,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Golden-Turmeric.jpg'},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Orange-Carrot.jpg'},
                        {id: 3, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Green-Smoothie.jpg'},
                        {id: 4, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Coconut-Lime.jpg'},
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'Meat Eat',
                subtitle: 'Jl. Tebet Barat Dalam No. 33, Tebet, Jakarta Selatan 12810',
                paragraph: "The Real Meat Experience",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#FFFFFF', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: 'rgba(255, 255, 255, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: 'rgba(0, 0, 0, 1)', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'rgba(255, 255, 255, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: 'rgba(0, 0, 0, 1)', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 16, color: '#F2E8C6', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 14, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#000000', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 16, color: '#F2E8C6', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 14, color: '#FFFFFF',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#000000', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 20, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '20px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            specialItems: {
                data: {
                    title: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 11, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 11, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: '#FFFFFF', border: {type: 'solid', size: 2, color: '#B6F500'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#000000', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 16, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '0', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'rgba(255, 255, 255, 1)', borderRadius: '100%', border: '2px solid #B6F500', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#000000', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: 'rgba(0, 0, 0, 1)', color: '#FFFFFF', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },  
        }
    }, 
    {
        name: 'Pink Sushi',
        type: 'food',
        image: pinkSushi,
        id: 9,
        components: {
            main: [
                {name: 'header', type: 'two', components: componentsData.header.two},
                {name: 'banner', type: 'one', components: componentsData.banner.one},
                {name: 'main', type: 'one', components: componentsData.main.two },
                {name: 'item details', type: 'five', components: componentsData.itemDetails.five},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.five
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'one', components: componentsData.main.one },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.one},
                ],
                child: {
                        category: 'one',
                        listItems: 'one',
                        items: 'one',
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'Pink Sushi'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/sushi-hero.png',
                title: 'Best Asian Food in The Town.',
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Unagi Nigiri', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Unagi-Nigiri.jpg'},
                        {id: 2, name: 'Rainbow Roll', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Rainbow-Roll.jpg'},
                        {id: 3, name: 'California Roll', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/California-Roll.jpg'},
                        {id: 4, name: 'Ebi Tempura Roll', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Ebi-Tempura-Roll.jpg'},
                        {id: 5, name: 'Tuna Sashimis', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Tuna-Sashimi.jpg'},
                        {id: 6, name: 'Spicy Tuna Roll', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spicy-Tuna-Roll.jpg'},
                    ]
                },
                                {
                    id: 2,
                    name: 'Food',
                    listItems: [
                        {id: 1, name: 'Ebi Tempura Roll', price: 'Rp 24.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Ebi-Tempura-Roll.jpg'},
                        {id: 2, name: 'California Roll', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/California-Roll.jpg'},
                        {id: 3, name: 'Tuna Sashimis', price: 'Rp 24.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Tuna-Sashimi.jpg'},
                        {id: 4, name: 'Spicy Tuna Roll', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spicy-Tuna-Roll.jpg'},
                        {id: 5, name: 'Unagi Nigiri', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Unagi-Nigiri.jpg'},
                        {id: 6, name: 'Rainbow Roll', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Rainbow-Roll.jpg'},
                    ]
                },
                {
                    id: 3,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Golden-Turmeric.jpg'},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Orange-Carrot.jpg'},
                        {id: 3, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Green-Smoothie.jpg'},
                        {id: 4, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Coconut-Lime.jpg'},
                    ]
                },
            ] ,
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'PINK SUSHI',
                subtitle: 'Jl. Batu Tulis No. 9, Gambir, Jakarta Pusat 10120',
                paragraph: "Fresh, Refined, Remarkable",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#FFF6F8', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#FFF6F8', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: 'rgba(0, 0, 0, 0)', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: 'rgba(0, 0, 0, 0)', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 16, color: '#FF5454', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {
                        fontSize: 14, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'left'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: 'transparent', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 16, color: '#FF5454', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'left'
                    },
                    paragraph: {fontSize: 14, color: '#FFFFFF',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'transparent', border: 'none', borderRadius: 10, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#FF5454', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 20, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#FF5454', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '20px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            specialItems: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 20, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#FF5454'}
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFFFFF', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#FF5454'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 18, color: '#FF5454', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: 'none', border: {type: 'solid', size: 2, color: '#CD4553'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#FF5454', color: 'white', fontSize: 16, fontWeight: 700, border: { size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 18, color: '#FF5454', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '0', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'transparent', borderRadius: '100px', border: '2px solid #CD4553', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#FF5454', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#FF5454', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#FF5454', color: 'white', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#FF5454', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#FF5454', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },  
        }
    },
    {
        name: 'My Catering',
        type: 'food',
        image: myCatering,
        id: 10,
        components: {
            main: [
                {name: 'header', type: 'two', components: componentsData.header.two},
                {name: 'banner', type: 'two', components: componentsData.banner.two},
                {name: 'main', type: 'one', components: componentsData.main.one },
                {name: 'item details', type: 'seven', components: componentsData.itemDetails.seven},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.five
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'two', components: componentsData.main.two },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
                ],
                child: {
                        category: 'two',
                        listItems: 'one',
                        items: 'one',
                        specialListItems: 'three',
                        specialItems: 'four'
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'My Catering'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/sushi-hero.png',
                title: "Best Food For\nSpecial Time.",
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Grilled Chicken', price: 'Rp 35.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Grilled-Chicken-Catering.jpg'},
                        {id: 2, name: 'Honey Chicken', price: 'Rp 34.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Honey-Chicken.jpg'},
                        {id: 3, name: 'Chicken Katsu', price: 'Rp 39.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Chicken-Katsu.jpg'},
                        {id: 4, name: 'Mie Goreng Jawa', price: 'Rp 28.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Mie-Goreng-Jawa.jpg'},
                        {id: 5, name: 'Rendang', price: 'Rp 34.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Rendang.jpg'},
                        {id: 6, name: 'Sweet & Sour', price: 'Rp 32.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Sweet-Sour.jpg'},
                    ]
                },
                {
                    id: 2,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Golden-Turmeric.jpg'},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Orange-Carrot.jpg'},
                        {id: 3, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Green-Smoothie.jpg'},
                        {id: 4, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Coconut-Lime.jpg'},
                    ]
                },
            ] ,
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'My Catering',
                subtitle: 'Jl. Batu Tulis No. 9, Gambir, Jakarta Pusat 10120',
                paragraph: "Cita Rasa Istimewa untuk Setiap Acara",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#F7F7F7', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#F7F7F7', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: 'rgba(0, 0, 0, 0)', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: 'rgba(0, 0, 0, 0)', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 24, color: '#45CD79', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'center'
                    },
                    paragraph: {
                        fontSize: 14, color: '#000000', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: 'transparent', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 24, color: '#45CD79', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'center'
                    },
                    paragraph: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'transparent', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#45CD79', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 20, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#45CD79', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '20px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 0)', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 18, color: '#45CD79', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: 'none', border: {type: 'solid', size: 2, color: '#CD4553'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#45CD79', color: 'white', fontSize: 16, fontWeight: 700, border: { size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 18, color: '#45CD79', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'transparent', borderRadius: '100px', border: '2px solid #CD4553', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#45CD79', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#45CD79', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#45CD79', color: 'white', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#45CD79', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#45CD79', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },  
        }
    },
    {
        name: 'Cake Key',
        type: 'food',
        image: cakeKey,
        id: 11,
        components: {
            main: [
                {name: 'header', type: 'two', components: componentsData.header.two},
                {name: 'banner', type: 'two', components: componentsData.banner.two},
                {name: 'main', type: 'two', components: componentsData.main.two },
                {name: 'item details', type: 'four', components: componentsData.itemDetails.four},
                {name: 'connector', type: 'two', components: componentsData.connector.two}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.five
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'two', components: componentsData.main.two },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
                ],
                child: {
                        category: 'two',
                        listItems: 'one',
                        items: 'one',
                        specialListItems: 'three',
                        specialItems: 'four'
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'Cake Key'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/sushi-hero.png',
                title: "Best Cake You\nMust Get.",
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Strawberry Short', price: 'Rp 34.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Strawberry-Short.jpg'},
                        {id: 2, name: 'Classic Cheesecake', price: 'Rp 28.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Classic-Cheesecake.jpg'},
                        {id: 3, name: 'Red Velvet', price: 'Rp 37.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Red-Velvet.jpg'},
                        {id: 4, name: 'Matcha Green Tea', price: 'Rp 28.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Matcha-Green-Tea.jpg'},
                        {id: 5, name: 'Black Forest', price: 'Rp 35.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Black-Forest.jpg'},
                        {id: 6, name: 'Tiramisu Cake', price: 'Rp 27.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Tiramisu-Cake.jpg'},
                    ]
                },
                {
                    id: 3,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Strawberry Short', price: 'Rp 34.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Strawberry-Short.jpg'},
                        {id: 2, name: 'Classic Cheesecake', price: 'Rp 28.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Classic-Cheesecake.jpg'},
                        {id: 3, name: 'Red Velvet', price: 'Rp 37.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Red-Velvet.jpg'},
                        {id: 4, name: 'Matcha Green Tea', price: 'Rp 28.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Matcha-Green-Tea.jpg'},
                        {id: 5, name: 'Black Forest', price: 'Rp 35.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Black-Forest.jpg'},
                        {id: 6, name: 'Tiramisu Cake', price: 'Rp 27.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Tiramisu-Cake.jpg'},
                    ]
                },
                {
                    id: 4,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Ice Coke', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Golden-Turmeric.jpg'},
                        {id: 2, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Orange-Carrot.jpg'},
                        {id: 3, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Green-Smoothie.jpg'},
                        {id: 4, name: 'Ice Pesi', price: 14000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Coconut-Lime.jpg'},
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            specialItems: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    // {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'Cake Key',
                subtitle: 'Jl. H. Nawi No. 17A, Cipete, Jakarta Selatan 12410',
                paragraph: "A Touch of Sweet Luxury",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#F7F7F7', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#F7F7F7', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: 'rgba(0, 0, 0, 0)', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: 'rgba(0, 0, 0, 0)', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 24, color: '#CD4553', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'center'
                    },
                    paragraph: {
                        fontSize: 14, color: '#000000', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: 'transparent', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 24, color: '#CD4553', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'center'
                    },
                    paragraph: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'transparent', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#CD4553', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 20, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#CD4553', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '20px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFFFFF', borderRadius: 20, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            specialItems: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 20, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#CD4553', color: 'white', fontSize: 16, fontWeight: 700, border: { size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 12, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFFFFF', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#CD4553', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 18, color: '#CD4553', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: 'none', border: {type: 'solid', size: 2, color: '#CD4553'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#CD4553', color: 'white', fontSize: 16, fontWeight: 700, border: { size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 18, color: '#CD4553', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '100px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'transparent', borderRadius: '100px', border: '2px solid #CD4553', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#CD4553', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#CD4553', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#CD4553', color: 'white', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#CD4553', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#CD4553', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            }, 
        }
    },
    {
        name: 'Chick Point',
        type: 'food',
        image: chickPoint,
        id: 12,
        components: {
            main: [
                {name: 'header', type: 'two', components: componentsData.header.two},
                {name: 'banner', type: 'two', components: componentsData.banner.two},
                {name: 'main', type: 'one', components: componentsData.main.one },
                {name: 'item details', type: 'six', components: componentsData.itemDetails.six},
                {name: 'connector', type: 'two', components: componentsData.connector.two}
            ],
            child: {
                    category: componentsData.category.two,
                    listItems: componentsData.listItems.one,
                    items: componentsData.items.one,
                    specialListItems: componentsData.listItems.three,
                    specialItems: componentsData.items.five
            },
            data: {
                main: [
                    {name: 'header', type: 'one', components: componentsData.header.one},
                    {name: 'banner', type: 'one', components: componentsData.banner.one},
                    {name: 'main', type: 'two', components: componentsData.main.two },
                    {name: 'item details', type: 'one', components: componentsData.itemDetails.two},
                {name: 'connector', type: 'one', components: componentsData.connector.one}
                ],
                child: {
                        category: 'two',
                        listItems: 'one',
                        items: 'one',
                        specialListItems: 'three',
                        specialItems: 'four'
                },
            }
        },
        content: {
            header: {
                logo: {type: 'text', text: 'Chick Point'}
            },
            banner: {
                image: 'https://storage.googleapis.com/pagetos_template_image/sushi-hero.png',
                title: "Special Chicken\nJust For You.",
                paragraph: 'Just try it.'
            },
            product: [
                {
                    id: 1,
                    name: 'Popular Menu',
                    listItems: [
                        {id: 1, name: 'Original Crispy', price: 'Rp 24.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Original-Crispy.jpg'},
                        {id: 2, name: 'Spicy Crispy', price: 'Rp 28.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Spicy-Crispy.jpg'},
                        {id: 3, name: 'Chicken Tenders', price: 'Rp 28.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Chicken-Tenders.jpg'},
                        {id: 4, name: 'Cheesy Chicken', price: 'Rp 21.000', description: 'Best beef combine with best import cheese.', image: 'https://storage.googleapis.com/pagetos_template_image/Cheesy-Chicken.jpg'},
                        {id: 5, name: 'Spicy Burger', price: 'Rp 30.000', description: 'Fresh vegetable combine with juicy mean.', image: 'https://storage.googleapis.com/pagetos_template_image/Spicy-Burger.jpg'},
                        {id: 6, name: 'Chicken Burger', price: 'Rp 31.000', description: 'Fresh fish with cruncy vegetable', image: 'https://storage.googleapis.com/pagetos_template_image/Chicken-Burger.jpg'},
                    ]
                },
                {
                    id: 2,
                    name: 'Drinks',
                    listItems: [
                        {id: 1, name: 'Iced Lemonade', price: 18000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Ice-lemonade.jpg'},
                        {id: 2, name: 'Ice Lemon Tea', price: 19000, description: 'Best drinks for any food.', image: 'https://storage.googleapis.com/pagetos_template_image/Iced-Lemon-Tea.jpg'},
                    ]
                },
            ],
            itemDetails: {
                buttonList: [
                    {id: 1, type: 'change page', name: 'Add', page: 'page three', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'back', name: 'Back', page: 'page one', link: 'https://mail.google.com/mail/u/0/#inbox'},
                ]
            },
            connector: {
                title: 'CHICK POINT',
                subtitle: 'Jl. Melati Raya No. 12, Kebayoran Baru, Jakarta Selatan 12140',
                paragraph: "Ayam Goreng, Rasa Gak Kaleng-Kaleng",
                buttonList: [
                    {id: 1, type: 'link', name: 'Email', page: '', link: 'https://mail.google.com/mail/u/0/#inbox'},
                    {id: 2, type: 'link', name: 'whatsapp', page: '', link: 'https://api.whatsapp.com/send?phone=6281234567890&text=Hello%20Burgerous'},
                    {id: 3, type: 'link', name: 'tokopedia', page: '',link: 'https://www.tokopedia.com/'},
                ]
            }
        },
        style: {
            screen: {
                data: {
                    background: {type: 'solid', color: '#F7F7F7', border: {size: 0, color: '#FFFFFF'}, opacity: 100, borderRadius: 10, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    background: {background: '#F7F7F7', borderRadius: 0, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            main: {
                data: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                },
                style: {
                    category: {display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
                    listItems: {
                        display: 'grid',
                        gridTemplateColumns: '45% 45%',
                        columnGap: '10%',
                        rowGap: '30px',
                        margin: '10px 0'
                    }
                }
            },
            header: {
                data: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    background: {type: 'solid', color: 'rgba(0, 0, 0, 0)', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 20, color: 'rgba(0, 0, 0, 1)', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    background: {background: 'rgba(0, 0, 0, 0)', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            banner: {
                data: {
                    title: {
                        fontSize: 24, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100,
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'center'
                    },
                    paragraph: {
                        fontSize: 14, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'
                    },
                    paragraphTwo: {fontSize: 16, color: '#FFFFFF', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    paragraphThree: {fontSize: 16, color: 'white', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', textAlign: 'left'},
                    image: {borderRadius: 0, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#C41230', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 0, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {
                        fontSize: 24, color: '#FFFFFF', textDecoration: 'none', 
                        fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%',
                        lineHeight: 'auto', letterSpacing: 'normal', textAlign: 'center'
                    },
                    paragraph: {fontSize: 14, color: '#FFFFFF',  textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: 0, opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#C41230', border: 'none', borderRadius: 0, opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            product: {
                data: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 14, color: '#C41230', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 100, opacity: 20, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#000000", type: 'none'}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 14, color: '#000000', textDecoration: 'none', fontWeight: 700, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#7D7D7D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    category: {fontSize: 14, color: '#000000',  textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 14, color: '#C41230', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '20px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: '#FFFFFF', borderRadius: 20, border: 'none', opacity: "100%", filter: 'none', backdropFilter: 'none', boxShadow: 'none'}
                }
            },
            itemDetails: {
                data: {
                    title: {fontSize: 18, color: '#C41230', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    image: {borderRadius: 10, opacity: 100, filter: {type: 'blur', value: 0}},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    circle: {type: 'solid', color: 'none', border: {type: 'solid', size: 2, color: '#CD4553'}, opacity: 100, borderRadius: 100, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#C41230', color: 'white', fontSize: 16, fontWeight: 700, border: { size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                },
                style: {
                    title: {fontSize: 18, color: '#C41230', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    paragraph: {fontSize: 12, color: '#C0C0C0',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    price: {fontSize: 18, color: '#000000', textDecoration: 'none', fontWeight: 600, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    image: {borderRadius: '10px', opacity: '100%', filter: 'blur(0)'},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: '20px', border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    circle: {background: 'transparent', borderRadius: '100px', border: '2px solid #CD4553', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#C41230', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []},
                }
            },
            connector: {
                data: {
                    title: {fontSize: 20, color: '#C41230', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: 100, textAlign: 'center', lineHeight: 1.5},
                    background: {type: 'solid', color: '#FFFFFF', border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []},
                    button: {background: '#C41230', color: 'white', fontSize: 16, fontWeight: 700, border: {size: 0, color: "#FFFFFF"}, opacity: 100, borderRadius: 20, filter: {type: 'blur', value: 0}, effect: []}
                },
                style: {
                    title: {fontSize: 20, color: '#C41230', textDecoration: 'none', fontWeight: 800, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center'},
                    subtitle: {fontSize: 16, color: '#1E1E1E', textDecoration: 'none', fontWeight: 500, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    paragraph: {fontSize: 14, color: '#4D4D4D',  textDecoration: 'none', fontWeight: 400, fontFamily: 'Roboto, serif', opacity: '100%', textAlign: 'center', lineHeight: 1.5},
                    background: {background: 'rgba(255, 255, 255, 1)', borderRadius: 20, border: 'none', opacity: "100%", filter: 'blur(0px)', backdropFilter: 'none', boxShadow: 'none'},
                    button: {background: '#C41230', color: 'white', fontSize: 16, fontWeight: 700, border: 'none', opacity: 100, borderRadius: 20, filter: 'none', effect: []}
                }
            },
        }
    },
];