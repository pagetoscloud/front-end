import { createSlice } from "@reduxjs/toolkit"
import bannerHeroMockup from '../../assets/images/double-cheese-burger.png';
import cheeseBurger from '../../assets/images/double-cheese-burger.png';

const templateContentSlice = createSlice({
    name: 'templateContent',
    initialState: {
        header: {
            logo: {type: 'text', text: 'logo'}
        },
        banner: {
            image: bannerHeroMockup,
            title: 'Best Pizza in the Town.',
            paragraph: 'Just try it.'
        },
        product: [
            {
                id: 1,
                name: 'Food',
                listItems: [
                    {id: 1, name: 'Cheese Burger', price: 24000, description: 'Best beef combine with best import cheese.', image: cheeseBurger},
                    {id: 2, name: 'Cheese Burger', price: 24000, description: 'Best beef combine with best import cheese.', image: cheeseBurger},
                    {id: 3, name: 'Cheese Burger', price: 24000, description: 'Best beef combine with best import cheese.', image: cheeseBurger},
                    {id: 4, name: 'Cheese Burger', price: 24000, description: 'Best beef combine with best import cheese.', image: cheeseBurger}
                ]
            },
            {
                id: 2,
                name: 'Drinks',
                listItems: [
                    {id: 1, name: 'Cheese Burger', price: 24000, description: 'Best beef combine with best import cheese.', image: cheeseBurger}
                ]
            },
        ]    
    },
    reducers: {

        initialContent: (state, action) => {
            return state = action.payload.data;
        },
        initialProduct: (state, action) => {
            return {
                ...state,
                product: action.payload.data
            }
        },
        changeBannerText: (state, action) => {
            return {
                ...state,
                banner: {
                    ...state.banner,
                    [action.payload.type]: action.payload.value
                }
            }
        },
        addNewProduct: (state, action) => {
            state.product = state.product.map((items, index) => {
                if (items.name === action.payload.category){
                    return items.listItems.filter(data => data.id !== action.payload.id)
                }
                return items;
            });
        },
        deleteProduct: (state, action) => {
            state.product.map((items, index) => {
                if (items.name === action.payload.category){
                    items.listItems = items.listItems.filter(data => data.id !== action.payload.id);
                }
                return items;
            })
        },
        deleteButton : (state, action) => {
            state.connector.buttonList = state.connector.buttonList.filter(items => items.id !== action.payload);
        },
        addNewButton: (state, action) => {
            const randomId = Math.floor(Math.random() * 123456);
            const newButton = {
                id: randomId,
                name: 'Button',
                type: 'link',
                link: '',
                page: 'page one'
            }
            state.connector.buttonList = [...state.connector.buttonList, newButton];
        },
        addNewCategory: (state, action) => {
            return {
                ...state,
                product: [
                    ...state.product,
                    action.payload.data
                ]
            }
        },
        changeLogoText: (state, action) => {
            return {
                ...state, 
                header: {
                    logo: {type: 'text', text: action.payload}
                }
            }
        },
        changeCategoryName: (state, action) => {
            state.product.map(items => {
                if (items.id === action.payload.id){
                    return items.name = action.payload.data;
                }
                return items;
            })
        },
        changeProductText: (state, action) => {
            state.product.map(items => {
                if (items.name === action.payload.category){
                    items.listItems.map(list => {
                        if (list.id === action.payload.id){
                            return list[action.payload.items] = action.payload.data;
                        }
                        return list;
                    })
                }
                return items;
            })
        },
        changeConnectorText: (state, action) => {
            return {
                ...state,
                connector: {
                    ...state.connector,
                    [action.payload.type]: action.payload.value
                }
            }
        },
        changeButton: (state, action) => {
            state[action.payload.component].buttonList.map(items => {
                if (items.id === action.payload.id){
                    items[action.payload.type] = action.payload.value;
                }
                return items;
            });
        },
        changeImageProduct: (state, action) => {
            state.product.map(items => {
                if (items.name === action.payload.category){
                    items.listItems.map(list => {
                        if (list.id === action.payload.id){
                            return list.image = action.payload.data;
                        }
                        return list;
                    })
                }
                return items;
            })
        },
        changeImage: (state, action) => {
            return {
                ...state,
                [action.payload.component]: {
                    ...state[action.payload.component],
                    image: action.payload.data
                }
            }
        }
    }
});


export default templateContentSlice.reducer;
export const { 
    initialContent, initialProduct, changeConnectorText, changeButton,
    addNewProduct, deleteProduct, addNewButton, addNewCategory, deleteButton,
    changeImage, changeImageProduct, changeLogoText,
    changeProductText, changeCategoryName, changeBannerText
} = templateContentSlice.actions;
