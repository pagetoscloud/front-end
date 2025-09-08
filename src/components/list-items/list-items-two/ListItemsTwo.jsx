import ListItemsTwoEdit from "./edit/ListItemsTwoEdit"
import ListItemsTwoPreview from "./preview/ListItemsTwoPreview"


export default function ListItemsTwo({data, handleEditMode, styleData, components, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    return (
        <>
            {
                mode === 'edit' ?
                <ListItemsTwoEdit>
                    {
                        data.listItems.map((list, index) => {
                            return <components.child.items
                                key={`${index}-child-items`}
                                styleData={styleData}
                                data={list}
                                items={data}
                                handleEditMode={handleEditMode}
                                mode={mode}
                                onEdit={onEdit}
                            />
                        })
                    }
                </ListItemsTwoEdit> :
                <ListItemsTwoPreview>
                    {
                        data.listItems.map(list => {
                            return <components.child.items
                            handleChangePage={handleChangePage}
                            handleChangeCurrentItems={handleChangeCurrentItems}
                            styleData={styleData}
                            data={list}
                            items={data}
                            />
                        })

                    }
                </ListItemsTwoPreview>
            }
        </>
    )
}