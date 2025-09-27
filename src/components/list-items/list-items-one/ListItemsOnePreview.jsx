import { ListItemsWrapper } from "./ListItemsOnePreview.styled";


export default function ListItemsOnePreview({handleChangePage, styleData,  data, components, handleChangeCurrentItems}){
    return (
        <ListItemsWrapper>
            {
                data.listItems.map(list => {
                    return <components.child.items
                            handleChangeCurrentItems={handleChangeCurrentItems}
                            handleChangePage={handleChangePage}
                            styleData={styleData}
                            data={list}
                            items={data}

                    />
                })
            }
        </ListItemsWrapper>
    )
}