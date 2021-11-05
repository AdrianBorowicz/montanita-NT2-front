import {createStore} from 'vuex';


const store=createStore({
    state(){
            return{
            user: null,
            carrito: [
                {cantidad: 10, idProducto: 1},
                {cantidad: 5, idProducto:2},
                {cantidad: 1, idProducto:3},
            ]
        }
    },
    mutations:{
        SET_USER(state, user){
            state.user=user;
            localStorage.setItem('user', user);
        },
        LOGOUT(state){
            state.user=null;
        }
    },
    actions:{
        login({commit}, user){
            commit('SET_USER', user);
        }
    },
    getters:{
        isLogin: (state)=>{
            return state.user==!null;
        },
        getUser: (state)=>{
            return state.user;
        }
    },
   
});

export default store

