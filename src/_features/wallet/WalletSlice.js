import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: { 
    nom: 'Addresse Bitcoin 1',
    adresse: 'mi1NCx5JifmQVGPSpMNufvA5s4YZN1XBDG',
    balance: 200,
    device: '€',
 
  /*   operationsHistory: [],
    historyBalance: [],
    overdraft: -200, */
 
    },
  reducers: {
    // dépot d'argent
    deposit: (state, action) => {
      state.balance += parseInt(action.payload);
    },

       // retire 
    retire: (state, action) => {
        state.balance -= action.payload;

      },


    // ajout device 
    deviceChange : (state, action) => {
        state.device = action.payload;
      },

      // ajout nom
      changeName : (state, action) => {
        state.nom = action.payload;
      },

  },
});

// Export des actions
export const { deposit, retire, vide, changeName, deviceChange } = walletSlice.actions;
// Export du reducer
export default walletSlice.reducer;