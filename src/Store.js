import { createStore } from 'vuex';
//import ProductServices from "./services/ProductServices"

const store = createStore({
    state() {
        return {
            user: null,
            productos: [],
            carrito: {}
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            localStorage.setItem('user', user);
        },
        LOGOUT(state) {
            state.user = null;
        },
        SETPRODUCTO(state, payload) {
            state.productos = payload
            console.log(state.productos)
        },
        SETCARRITO(state, payload) {
            state.carrito[payload._id] = payload
        },
        VACIARCARRITO(state) {
            state.carrito = {}
        },
        AUMENTAR(state, payload) {
            state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
        },
        DISMINUIR(state, payload) {
            state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1
            if (state.carrito[payload].cantidad === 0) {
                delete state.carrito[payload]
            }
        }

    },
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        },
        agregarAlCarrito({ commit, state }, producto) {
            if(Object.prototype.hasOwnProperty.call({'producto._id': false},producto._id)){
                producto.cantidad = state.carrito[producto.id].cantidad + 1;
            }else{
                producto.cantidad = 1;
            }
            commit('SETCARRITO', producto)
        },


    },
    getters: {
        isLogin: (state) => {
            return state.user == !null;
        },
        getUser: (state) => {
            return state.user;
        },
        totalCantidad(state) {
            return Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
        },
        totalPrecio(state) {
            return Object.values(state.carrito).reduce((acc, { cantidad, precio }) => acc + (cantidad * precio), 0)
        }
    },
});

export default store

