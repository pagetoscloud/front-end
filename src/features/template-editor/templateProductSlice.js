import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Function to generate random IDs
function generateRandomId() {
  return Math.floor(Math.random() * 1_000_000_000);
}

// 1️⃣ First function — Change IDs in the original data
function changeIdsInOriginalData(data) {
  return data.map(category => {
    const newCategoryId = generateRandomId();

    const newListItems = category.listItems.map(item => ({
      ...item,
      id: generateRandomId()
    }));

    return {
      ...category,
      id: newCategoryId,
      listItems: newListItems
    };
  });
}

// 2️⃣ Second function — Convert changed data into flat structure
function convertToFlatStructure(changedData) {
  const categories = [];
  const products = [];

  changedData.forEach(category => {
    categories.push({
      id: category.id,
      name: category.name
    });

    category.listItems.forEach(item => {
      products.push({
        id: item.id,
        category_id: category.id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image
      });
    });
  });

  return { categories, products };
}


// Fetch products grouped by category for a page
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (web_id) => {
    const res = await axios(`http://localhost:5001/personal-area/product-list/${web_id}`);
    return res.data.product; // Expecting backend returns { product: [ ... ] }
  }
);

// Add a new product to a category
export const saveProductEdit = createAsyncThunk(
  'product/saveProductEdit',
  async (web_id, { getState, rejectWithValue }) => {
    console.log(web_id);
    const state = getState().product; // <-- access your slice state
    const { changed } = state.product;
    try {
        const res = await axios.post('http://localhost:5001/personal-area/product-list/edit', {changed, web_id});
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Server error');
    }
  }
);

export const saveProductNew = createAsyncThunk(
  'product/saveProductNew',
  async (_, { getState, rejectWithValue }) => {
    const state = getState().product; // <-- access your slice state
    const { changed } = state.product;
    try {
        const res = await axios.post('http://localhost:5001/personal-area/product-list/edit', {changed});
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Server error');
    }
  }
);


const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {
        list: [],
        changed: {
            categories: [],
            products: []
        },
        deleted: {
            categories: [],
            products: []
        }
    },
    loading: false,
    error: null
  },
  reducers: {
        initialDataLocally : (state, action) => {
            const list = changeIdsInOriginalData(action.payload);
            const changed =  convertToFlatStructure(list);
            console.log(list, changed);
            state.product = {...state.product, list, changed};
        },
        clearProductList : (state, action) => {
            state.product = {
                list: [],
                changed: {
                    categories: [],
                    products: []
                },
                deleted: {
                    categories: [],
                    products: []
                }
            }
        },
        addNewProduct: (state, action) => {
            const randomId = Math.floor(Math.random() * 123456);
            const newProduct = {
                id: randomId,
                name: action.payload.data.name,
                price: action.payload.data.price,
                image: action.payload.data.image,
                description: action.payload.data.description,
                category_id: action.payload.category.id
            }
            state.product.changed.products = [...state.product.changed.products, newProduct]
            state.product.list.map(items => {
                if (items.name === action.payload.category.name){
                    console.log('found category');
                    const updateProduct = [...items.listItems, newProduct];
                    return items.listItems = updateProduct;
                }
                return items;
            });
        },
        deleteProduct: (state, action) => {
            state.product.list.map(items => {
                if (items.name === action.payload.category){
                    console.log('found category');
                    const updateProduct = items.listItems.filter(list => list.id !== action.payload.id);
                    const deletedProduct = items.listItems.filter(list => list.id === action.payload.id);
                    if (deletedProduct.length > 0){
                        state.product.deleted.products.push(deletedProduct[0]);
                    }
                    return items.listItems = updateProduct;
                }
                return items;
            });
        },
        editCategory: (state, action) => {
            console.log('edit category', action.payload.id);
            const storeUpdateInChanged = ((data) => {
              if (state.product.changed.categories.length === 0){
                  state.product.changed.categories.push(data);
              } else {
                let update = 0;
                state.product.changed.categories.map((product, index) => {
                  if (product.id === action.payload.id){
                    update++;
                    return product.name = action.payload.data;
                  }
                  if (update === 0 && state.product.changed.categories.length -1 === index){
                      state.product.changed.categories.push(data);
                  }
                  return product;
                });
              }
            });
            state.product.list.map(items => {
                if (items.id === action.payload.id){
                    storeUpdateInChanged(({id: action.payload.id, data: action.payload.data}))
                    return items.name = action.payload.data;
                }
                return items;
            })
        },
        editProduct: (state, action) => {
            const storeUpdateInChanged = ((data) => {
              console.log(data);
              if (state.product.changed.products.length === 0){
                  console.log('push data');
                  state.product.changed.products.push(data);
              } else {
                let update = 0;
                state.product.changed.products.map((product, index) => {
                  if (product.id === action.payload.id){
                    update++;
                    return product[action.payload.items] = action.payload.data;
                  }
                  if (update === 0 && state.product.changed.products.length -1 === index){
                      console.log('add new', update);
                      state.product.changed.products.push(data);
                  }
                  return product;
                });
              }
            });
            state.product.list.map(items => {
                if (items.name === action.payload.category){
                    items.listItems.map(list => {
                        if (list.id === action.payload.id){
                            const update = {...list, [action.payload.items]:action.payload.data};
                            storeUpdateInChanged(update);
                            return list[action.payload.items] = action.payload.data;
                        }
                        return list;
                    })
                }
                return items;
            });
        },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch products
      .addCase(saveProductEdit.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveProductEdit.fulfilled, (state) => {
        state.loading = false;
        // state.product.list = action.payload;
      })
      .addCase(saveProductEdit.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export default productSlice.reducer;
export const { 
  addNewProduct, clearProductList, deleteProduct,
  editProduct, editCategory,
  initialDataLocally
} = productSlice.actions;