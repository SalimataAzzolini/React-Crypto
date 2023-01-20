import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  deposit,
  retire,
  vide,
  changeName,
  deviceChange,
} from "../../_features/wallet/WalletSlice";
import CardWallet from "./CardWallet";
import InputCb from "./InputCb";
import { Divider } from "antd";

const WalletComponent = () => {
  //*********************CONSTANTES****************************//

  const dispatch = useDispatch();

  const [newBalance, setNewBalance] = useState("");
  const [newNom, setNewNom] = useState("");

  const [cbNumbers, setCbNumbers] = useState("");
  const [cbDate, setCbDate] = useState("");
  const [cbCrypto, setCbCrypto] = useState("");

  //*********************METHODES****************************//

  //Recuperer la balance
  const handleChangeBalance = (e) => {
    setNewBalance(e.target.value);
  };

  //Changement de non
  const handleChangeNom = (e) => {
    setNewNom(e.target.value);
  };

  const { balance, nom, device, adresse } = useSelector(
    (state) => state.wallet
  );
  console.log(adresse);

  return (
    <div>
      <div>
        <h3> Un crypto</h3>
        <p>Nom : {nom}</p>
        <p> Somme : {balance}</p>
        <p> Devise : {device}</p>
        <p> Adresse : {adresse}</p>
      </div>

      <br/>


        <Divider> CARTE BLEU</Divider>
        <div>
        <p> Numero carte : {cbNumbers}</p>
        <p> Date d'expiration : {cbDate}</p>
        <p> cryptogramme : {cbCrypto}</p>

        <InputCb 
         cbNumbers={cbNumbers}
         setCbNumbers={setCbNumbers}
         cbDate={cbDate}
         setCbDate={setCbDate}
         cbCrypto={cbCrypto}
         setCbCrypto={setCbCrypto}/>
      </div>

      <CardWallet/>
    </div>
  );
};

export default WalletComponent;
