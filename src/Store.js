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
        setUser(state, user){
            state.user=user;
        },
        logout(state){
            state.user=null;
        }
    },
    actions:{
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

