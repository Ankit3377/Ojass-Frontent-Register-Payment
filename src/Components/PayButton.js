import axios from "axios";
import './PayButton.css'

const PayButton = () => {

  const handleRegister = async (e) => {
    const response = await fetch("http://localhost:5000/users/register", {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI4NDA3MDM5N2FlMjQxZTkyY2ZlZDMiLCJ1c2VybmFtZSI6InJhbmppdCIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjgwMzU5NTQzfQ.nTiGUKsGh_euiUhVTeyssZnCfWKI4akJ_LRtl-bm-yI'
      },
    });
    const json =  await response.json();
    if(json.msg === "Payment not completed"){
      axios
      .post(`http://localhost:5000/users/create-checkout-session`,{},{headers: {'Content-Type':'application/json','Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI4NDA3MDM5N2FlMjQxZTkyY2ZlZDMiLCJ1c2VybmFtZSI6InJhbmppdCIsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjgwMzU5NTQzfQ.nTiGUKsGh_euiUhVTeyssZnCfWKI4akJ_LRtl-bm-yI'}})
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
    }
  }

  return (
    <>
      <div id="register-box">
      <button onClick={() => handleRegister()} id="register">Register</button>
      </div>
    </>
  );
};

export default PayButton;