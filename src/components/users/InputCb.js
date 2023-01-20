import { Button, Input } from 'antd';
import React from 'react';

const InputCb = ({setCbNumbers, setCbDate, setCbCrypto}) => {

    return (
        <div>
            
            <form>
            <h6> Numero de carte </h6>
                <Input 
                    type='number' 
                    placeholder='numero card'
                    onChange={(e) => setCbNumbers(e.target.value)}
                />
                <h6> Date d'expiration </h6>
                <Input 
                    type='date' 
                    placeholder="date d'expiration"
                    onChange={(e) => setCbDate(e.target.value)}
                />
                <h6> Cryptogramme </h6>
                <Input 
                    type='number' 
                    placeholder="cryptogramme"
                    onChange={(e) => setCbCrypto(e.target.value)}   

                />
                <Button>Valider</Button>
            </form>
        </div>
    );
};

export default InputCb;