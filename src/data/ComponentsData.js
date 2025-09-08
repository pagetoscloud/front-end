import { 
        BannerOne, ScreenOne, 
        HeaderOne, ItemsOne, 
        MainOne, CategoryOne,
        CategoryTwo,
        ItemsTwo, ItemsThree, ItemsFour,
        ListItemsOne,
        ListItemsTwo,
        ItemDetailsOne,
        ItemDetailsTwo,
        ItemDetailsFour,
        ItemDetailsThree,
        ItemDetailsFive,
        ConnectorOne,
        MainTwo,
        ListItemsThree,
        HeaderTwo,
        ItemsFive,
        BannerTwo,
        ItemDetailsSix,
        ItemDetailsSeven,
        ConnectorTwo,
} from "../components";

export const componentsData = {
    screen: {
        one: ScreenOne
    },
    header: {
        one: HeaderOne,
        two: HeaderTwo
    },
    banner: {
        one: BannerOne,
        two: BannerTwo
    },
    main: {
        one: MainOne,
        two: MainTwo
    },
    listItems: {
        one: ListItemsOne,
        two: ListItemsTwo,
        three: ListItemsThree
    },
    items: {
        one: ItemsOne,
        two: ItemsTwo,
        three: ItemsThree,
        four: ItemsFour,
        five: ItemsFive
    },
    itemDetails: {
        one: ItemDetailsOne,
        two: ItemDetailsTwo,
        three: ItemDetailsThree,
        four: ItemDetailsFour,
        five: ItemDetailsFive,
        six: ItemDetailsSix,
        seven: ItemDetailsSeven
    },
    category: {
        one: CategoryOne,
        two: CategoryTwo,
    },
    connector: {
        one: ConnectorOne,
        two: ConnectorTwo
    }
}

export const componentsDataArray = {
    screen: [
        {type: 'one', components: componentsData.screen.one}
    ],
    header: [
        {type: 'one', components: HeaderOne}
    ],
    banner: [
        {type: 'one', components: BannerOne}
    ],
    main: [
        {type: 'one', components: MainOne}
    ],
    items: [
        {type: 'one', components: ItemsOne}
    ],
    category: [
        {type: 'one', components: CategoryOne}
    ]
}