import { MainContainer } from "./MainTwo.styled";
export default function MainTwo({styleData, components, productList, handleEditMode, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    // const product = contentData.product;
    console.log(mode);
    return (
        <MainContainer>
            {
                productList.map((items, index) => {
                    if (index === 0){
                        return <>
                            <components.child.category
                                key={`${index}-category-${items.name}`} 
                                data={items}
                                styleData={styleData}
                                handleEditMode={handleEditMode}
                                mode={mode}
                            />
                            <components.child.specialListItems 
                                key={`${index}-list-items-${items.name}`} 
                                data={items}
                                styleData={styleData}
                                handleEditMode={handleEditMode}
                                handleChangePage={handleChangePage}
                                components={components}
                                mode={mode}
                                handleChangeCurrentItems={handleChangeCurrentItems}
                                onEdit={onEdit}
                            />
                        </>
                    } else {
                        return <>
                            <components.child.category
                                key={`${index}-category-${items.name}`} 
                                data={items}
                                styleData={styleData}
                                handleEditMode={handleEditMode}
                                mode={mode}
                            />
                            <components.child.listItems
                                key={`${index}-list-items-${items.name}`} 
                                data={items}
                                styleData={styleData}
                                handleEditMode={handleEditMode}
                                handleChangePage={handleChangePage}
                                components={components}
                                mode={mode}
                                handleChangeCurrentItems={handleChangeCurrentItems}
                                onEdit={onEdit}
                            />
                        </>
                    }
                })
            }
        </MainContainer>
    )
}