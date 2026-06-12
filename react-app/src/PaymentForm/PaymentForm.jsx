import { useState } from "react";

function CardNumberInput({number, onChange,  error}) {
    const borderStyle = error
    ? {border: '2px solid red'}
    : {border: '1px solid #ccc'};
    
    return (
      <input
        style={borderStyle}
        value={number}
        onChange={onChange}
        placeholder="Номер карты"
      />
    );
  }
  
  function ExpiryDateInput({expiry, onChange, error}) {
    const borderStyle = error
    ? {border: '2px solid red'}
    : {border: '1px solid #ccc'};
    return (
      <input
      style={borderStyle}
        value={expiry}
        onChange={onChange}
        placeholder="MM/YY"
      />
    );
  }
  
  function CVCInput({cvc, onChange,error}) {
    const borderStyle = error
    ? {border: '2px solid red'}
    : {border: '1px solid #ccc'};
    return (
      <input
      style={borderStyle}
        value={cvc}
        onChange={onChange}
        placeholder="CVC"
      />
    );
  }


  
  export default function PaymentForm() {
    const [data,setData] = useState('');
    const [errors,setErrors ] = useState({});
    const [dataCard, setDataCard] = useState({
        number: '',
        expiry: '',
        cvc: ''
    })
    function changeDataCard(field, e){
        setDataCard({
            ...dataCard,
            [field]: e.target.value
        })
    }
    function outputInfo(e){
        e.preventDefault();
        const newErrors = {}; // массив для хранения ошибок

        if (!dataCard.number.trim()) {
            newErrors.number = 'Введите номер карты';
        }
        if (!dataCard.expiry.trim()) {
          newErrors.expiry = 'Введите дату истечения';
        }
        if (!dataCard.cvc.trim()) {
          newErrors.cvc = 'Введите CVC-код';
        }
        setErrors(newErrors);
        // Если есть ошибки — показываем все сразу
        if (Object.keys(newErrors).length > 0) {
            setData(Object.values(newErrors).join('; '));
            return;
        }

        console.log('card number: ', dataCard.number);
        console.log('card expiry: ', dataCard.expiry);
        console.log('card cvc: ', dataCard.cvc);
        setData(`card number:  ${dataCard.number},
                card expiry: ${dataCard.expiry},
                card cvc: ${dataCard.cvc}`
        )
      }

    return (
        <>
            <form onSubmit={outputInfo}>
                <CardNumberInput
                    number={dataCard.number}
                    onChange={(e)=>changeDataCard('number',e)}
                    error={errors.number} />
                <ExpiryDateInput 
                    expiry = {dataCard.expiry}
                    onChange={(e)=>changeDataCard('expiry',e)}
                    error={errors.expiry} />
                <CVCInput 
                    cvc={dataCard.cvc}
                    onChange={(e)=>changeDataCard('cvc',e)}
                    error={errors.cvc} />
                <button type="submit"                    
                    >Оплатить</button>
            </form>
            <p>{data}</p>
        </>
      
    );
  }