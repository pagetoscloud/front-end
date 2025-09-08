import { MainContainer } from "./MainOne.styled";
export default function MainOne({styleData, components, productList, handleEditMode, mode, handleChangePage, handleChangeCurrentItems, onEdit}){
    // console.log(productList);
    // const product = contentData.product;
    return (
        <MainContainer>
            {
                productList.map((items, index) => {
                    return <>
                        <components.child.category
                            // key={`category-${items.name}`} 
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
                })
            }
        </MainContainer>
    )
}