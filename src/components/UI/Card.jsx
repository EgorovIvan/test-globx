import React from "react";
import './scss/style.scss';
import Modal from "./Modal";

const Card = (user) => {
  
  const [showPopup, setShowPopup] = React.useState(false)
  
  // функция открытия модального окна
  const handleOpen = () => {
    setShowPopup(true)
  }
  
  // функция закрытия модального окна
  const handleClose = () => {
    setShowPopup(false)
  }
  
  return (
    <div>
      
      { showPopup && <Modal item={user} showPopup={showPopup} handleClose={handleClose}/>}
      <div className="card" onClick={handleOpen}>
        
        <div className="card__title">
          {user.name}
        </div>
        
        <div className="card__item">
          <svg className="card__images" width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 1H2C1.44775 1 1 1.44922 1 2V2.5H13V2C13 1.70312 12.8701 1.4375 12.6641 1.25391C12.4873 1.09375 12.2549 1 12 1ZM0 2.5V3.5V18.5V19.5V22C0 23.1055 0.895508 24 2 24H12C12.6602 24 13.2456 23.6797 13.6099 23.1875C13.855 22.8555 14 22.4453 14 22V19.5V18.5V3.5V3V2C14 0.894531 13.1045 0 12 0H2C1.5498 0 1.13428 0.148438 0.799805 0.398438C0.313965 0.761719 0 1.34375 0 2V2.5ZM1 3.5V18.5H13V3.5H1ZM1 22V19.5H13V22C13 22.5508 12.5522 23 12 23H2C1.69092 23 1.41455 22.8594 1.23145 22.6367C1.08691 22.4648 1 22.2422 1 22ZM8 21C8 21.5508 7.55225 22 7 22C6.44775 22 6 21.5508 6 21C6 20.4492 6.44775 20 7 20C7.55225 20 8 20.4492 8 21Z" fill="#432EAB"/>
          </svg>
          {user.phone}
        </div>
        
        <div className="card__item">
          <svg className="card__images" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23 7V17C23 17.5523 22.5523 18 22 18L2 18C1.44772 18 0.999999 17.5523 0.999999 17L1 7C1 6.89068 1.01754 6.78546 1.04996 6.687L10.4171 14.351C11.338 15.1045 12.6624 15.1045 13.5833 14.351L22.9501 6.68727C22.9825 6.78565 23 6.89078 23 7ZM22.1891 6.01786L12.9501 13.5771C12.3975 14.0292 11.6029 14.0292 11.0504 13.5771L1.81123 6.01779C1.87236 6.00611 1.93547 6 2 6L22 6C22.0647 6 22.1279 6.00614 22.1891 6.01786ZM22 5C23.1046 5 24 5.89543 24 7V17C24 18.1046 23.1046 19 22 19L2 19C0.895429 19 0 18.1046 0 17V7C0 5.89543 0.895432 5 2 5H22Z" fill="#432EAB"/>
          </svg>
          {user.email}
        </div>
        
      </div>
    </div>
    
  );
}

export default Card;
