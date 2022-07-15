import { useState } from 'react';

const CheckoutForm = ({handleSubmit, products, setProducts}) => {
 const [ error, setError ] = useState(false) ;
    
 const isInvalidValidEmail = evt => {
      if(products.buyer.email === evt.value ) {
          setError(false);
        } else {
          setError(true);
       }
      } 

  return (
       <div>
          <div className="form--container">
              <form className="form--contents" onSubmit={handleSubmit}>
               <label className="form--label">
                 First name:
                   <input
                       className="form--input"
                       required
                       type="text"
                       value={products.firstName}
                       name="firstName"
                       placeholder="First Name"
                       onChange={({target}) =>  {
                           setProducts({...products, buyer: { ...products.buyer, firstName: target.value}})}
                        } />
               </label>
               <label className="form--label">
                 Last name:
                   <input
                       className="form--input"
                       required
                       type="text"
                       value={products.lastName}
                       name="lastName"
                       placeholder="Last Name"
                       onChange={({target}) =>  {
                           setProducts({...products, buyer: { ...products.buyer, lastName: target.value}})}
                        } />
               </label>
               <label className="form--label">
                 Email:
                   <input
                       className="form--input"
                       required
                       type="email"
                       value={products.email}
                       name="email"
                       placeholder="Email"
                       onChange={({target}) =>  {
                           setProducts({...products, buyer: { ...products.buyer, email: target.value}})}
                        } />
               </label>
               <label className="form--label">
                 Email:
                   <input
                       className="form--input"
                       required
                       type="email"
                       value={products.email}
                       name="emailB"
                       placeholder="repeat email"
                       onChange={({target}) => isInvalidValidEmail(target) } />
               </label>
               <label className="form--label">
                   Phone: 
                   <input
                       className="form--input"
                       required
                       type="text"
                       value={products.phone}
                       name="phone"
                       placeholder="Phone"
                       onChange={({target}) =>  {
                           setProducts({...products, buyer: { ...products.buyer, phone: target.value}})}
                        } />
               </label>
               <label className="form--label">
                   Address: 
                   <input
                       className="form--input"
                       required
                       type="text"
                       value={products.address}
                       name="address"
                       placeholder="Address"
                   onChange={({target}) =>  {
                           setProducts({...products, buyer: { ...products.buyer, address: target.value}})}
                        } />
               </label>
                 <input
                     className="form--submit"
                     disabled={error}
                     type="submit"
                     value="Realizar Compra"  />
             </form>
              <div className="error--email"><p>{error === true ? "Email Error" : "" }</p></div>
          </div>
       </div> 
      );
}

export default CheckoutForm;
