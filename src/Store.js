import { createStore } from 'vuex';
//import ProductServices from "./services/ProductServices"

const store = createStore({
    state() {
        return {
            user: {},
            productos: [],
            carrito: {},
            product: {}
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        LOGOUT(state) {
            state.user = null;
            localStorage.setItem("user", null)
        },
        SETPRODUCTO(state, payload) {
            state.productos = payload
            //console.log(state.productos)
        },
        SETCARRITO(state, payload) {
            state.carrito[payload._id] = payload
        },
        VACIARCARRITO(state) {
            state.carrito = {}
        },
        AUMENTAR(state, payload) {
            state.carrito[payload].cantidad += 1
        },
        DISMINUIR(state, payload) {
            state.carrito[payload].cantidad -= 1
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
            if(state.carrito[producto._id]!=null){
                producto.cantidad = state.carrito[producto._id].cantidad + 1;
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
            return Object.values(state.carrito).reduce((acc, { cantidad, price }) => acc + (cantidad * price), 0)
        }
    },
});

export default store

