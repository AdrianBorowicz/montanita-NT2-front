import {createStore} from 'vuex';


const store=createStore({
    state(){
            return{
            user:null,
            carrito: [
                
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
        },
    },
    actions:{
        setUser({commit}, user){
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

