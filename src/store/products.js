import axios from 'axios';
import $ from 'jquery'

export default {
    strict: true,
    namespaced: true,
    state: {
        products: [], //商品資料(有分頁)
        allproducts: [],//商品全部資料(無分頁)
        categories: [],
        pagination: {},
    },
    mutations: {
        LOADING(state, status) {
            state.isLoading = status;
        },
        ICONLOADING(state, status) {
            state.status.loadingItem = status;
        },
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PAGINATION(state, payload) {
            state.pagination = payload
        },
        CATEGORIES(state, payload) {
            const categories = new Set();
            payload.forEach((item) => {
                categories.add(item.category);
            });
            state.categories = Array.from(categories);
        },
        ALLPRODUCTS(state, payload) {
            state.allproducts = payload
        }
    },
    actions: {
        getProducts(context, page = 1) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
            // vm.isLoading = true; //開啟全畫面loading效果
            context.commit('LOADING', true, { root: true });
            axios.get(api).then((response) => {
                console.log(response.data)
                // vm.isLoading = false; //關閉全畫面loading效果
                context.commit('LOADING', false, { root: true });
                // vm.products = response.data.products
                // vm.pagination = response.data.pagination
                context.commit('PRODUCTS', response.data.products);
                context.commit('PAGINATION', response.data.pagination);
            })
        },
        getAllProducts(context) {
            const allapi = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
            axios.get(allapi).then((response) => {
                context.commit('CATEGORIES', response.data.products);
                context.commit('ALLPRODUCTS', response.data.products);
            })
        }

    },
    getters: {
        products: state => state.products,
        allproducts: state => state.allproducts,
        pagination: state => state.pagination,
        categories(state) {
            return state.categories;
        },

    }
}
