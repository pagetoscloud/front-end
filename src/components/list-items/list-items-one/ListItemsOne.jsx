import ListItemsOneEdit from "./edit/ListItemsOneEdit"
import ListItemsOnePreview from "./preview/ListItemsOnePreview"

export default function ListItemsOne({data, handleEditMode, handleChangeProductText, styleData, components, mode, handleChangePage, handleChangeCurrentItems, containerRef, handleActiveBox, onEdit}){
    return (
        <>
            {
                mode === 'edit' ?
                <ListItemsOneEdit>
                    {
                        data.listItems.map((list, index) => {
                            return <components.child.items
                                key={`${index}-child-items`}
                                styleData={styleData}
                                data={list}
                                items={data}
                                handleEditMode={handleEditMode}
                                handleChangeProductText={handleChangeProductText}
                                mode={mode}
                                onEdit={onEdit}
                            />
                        })
                    }
                </ListItemsOneEdit> :
                <ListItemsOnePreview
                    handleChangePage={handleChangePage}
                    styleData={styleData}
                    components={components}
                    handleChangeCurrentItems={handleChangeCurrentItems}
                    data={data}
                />
            }
        </>
    )
}