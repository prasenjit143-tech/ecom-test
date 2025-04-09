import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <defs>
      <symbol xmlns="http://www.w3.org/2000/svg" id="instagram" viewBox="0 0 15 15">
        <path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="facebook" viewBox="0 0 15 15">
        <path fill="none" stroke="currentColor" d="M7.5 14.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm0 0v-8a2 2 0 0 1 2-2h.5m-5 4h5" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="twitter" viewBox="0 0 15 15">
        <path fill="currentColor" d="m14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334Zm-.498 2.959a.5.5 0 1 0-1 0h1Zm-6.49.082h-.5h.5Zm0 .959h.5h-.5Zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5Zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223Zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474Zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495Zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066Zm0 3.654V4.46h-1v.728h1Zm-6.99-.646V5.5h1v-.959h-1Zm0 .959V6h1v-.5h-1ZM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1Zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1ZM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35Zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446Zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706Zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671Zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989ZM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="pinterest" viewBox="0 0 15 15">
        <path fill="none" stroke="currentColor" d="m4.5 13.5l3-7m-3.236 3a2.989 2.989 0 0 1-.764-2V7A3.5 3.5 0 0 1 7 3.5h1A3.5 3.5 0 0 1 11.5 7v.5a3 3 0 0 1-3 3a2.081 2.081 0 0 1-1.974-1.423L6.5 9m1 5.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="youtube" viewBox="0 0 15 15">
        <path fill="currentColor" d="m1.61 12.738l-.104.489l.105-.489Zm11.78 0l.104.489l-.105-.489Zm0-10.476l.104-.489l-.105.489Zm-11.78 0l.106.489l-.105-.489ZM6.5 5.5l.277-.416A.5.5 0 0 0 6 5.5h.5Zm0 4H6a.5.5 0 0 0 .777.416L6.5 9.5Zm3-2l.277.416a.5.5 0 0 0 0-.832L9.5 7.5ZM0 3.636v7.728h1V3.636H0Zm15 7.728V3.636h-1v7.728h1ZM1.506 13.227c3.951.847 8.037.847 11.988 0l-.21-.978a27.605 27.605 0 0 1-11.568 0l-.21.978ZM13.494 1.773a28.606 28.606 0 0 0-11.988 0l.21.978a27.607 27.607 0 0 1 11.568 0l.21-.978ZM15 3.636c0-.898-.628-1.675-1.506-1.863l-.21.978c.418.09.716.458.716.885h1Zm-1 7.728a.905.905 0 0 1-.716.885l.21.978A1.905 1.905 0 0 0 15 11.364h-1Zm-14 0c0 .898.628 1.675 1.506 1.863l.21-.978A.905.905 0 0 1 1 11.364H0Zm1-7.728c0-.427.298-.796.716-.885l-.21-.978A1.905 1.905 0 0 0 0 3.636h1ZM6 5.5v4h1v-4H6Zm.777 4.416l3-2l-.554-.832l-3 2l.554.832Zm3-2.832l-3-2l-.554.832l3 2l.554-.832Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="dribble" viewBox="0 0 15 15">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.839 1.024c3.346 4.041 5.096 7.922 5.704 12.782M.533 6.82c5.985-.138 9.402-1.083 11.97-4.216M2.7 12.594c3.221-4.902 7.171-5.65 11.755-4.293M14.5 7.5a7 7 0 1 0-14 0a7 7 0 0 0 14 0Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <rect width={20} height={18} x={2} y={4} rx={4} />
          <path d="M8 2v4m8-4v4M2 10h20" />
        </g>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="shopping-bag" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16l.803-10Z" />
          <path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5" />
        </g>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="gift" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <rect width={18} height={14} x={3} y={8} rx={2} />
          <path d="M12 5a3 3 0 1 0-3 3m6 0a3 3 0 1 0-3-3m0 0v17m9-7H3" />
        </g>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-cycle" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path d="M22 12c0 6-4.39 10-9.806 10C7.792 22 4.24 19.665 3 16m-1-4C2 6 6.39 2 11.806 2C16.209 2 19.76 4.335 21 8" />
          <path d="m7 17l-4-1l-1 4M17 7l4 1l1-4" />
        </g>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-left" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17 11H9.41l3.3-3.29a1 1 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L9.41 13H17a1 1 0 0 0 0-2Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="play" viewBox="0 0 24 24">
        <g fill="none" fillRule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path fill="currentColor" d="M5.669 4.76a1.469 1.469 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235Z" />
        </g>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="category" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="check" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="trash" viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="star-outline" viewBox="0 0 15 15">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="star-solid" viewBox="0 0 15 15">
        <path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 24 24">
        <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
        <path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" />
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 15 15">
        <path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
      </symbol>
    </defs>
  </svg>
  <div className="preloader text-white fs-6 text-uppercase overflow-hidden" />
  <div className="search-popup">
    <div className="search-popup-container">
      <form role="search" method="get" className="form-group" action>
        <input type="search" id="search-form" className="form-control border-0 border-bottom" placeholder="Type and press enter" defaultValue name="s" />
        <button type="submit" className="search-submit border-0 position-absolute bg-white" style={{top: 15, right: 15}}><svg className="search" width={24} height={24}>
            <use xlinkHref="#search" />
          </svg></button>
      </form>
      <h5 className="cat-list-title">Browse Categories</h5>
      <ul className="cat-list">
        <li className="cat-list-item">
          <a href="#" title="Jackets">Jackets</a>
        </li>
        <li className="cat-list-item">
          <a href="#" title="T-shirts">T-shirts</a>
        </li>
        <li className="cat-list-item">
          <a href="#" title="Handbags">Handbags</a>
        </li>
        <li className="cat-list-item">
          <a href="#" title="Accessories">Accessories</a>
        </li>
        <li className="cat-list-item">
          <a href="#" title="Cosmetics">Cosmetics</a>
        </li>
        <li className="cat-list-item">
          <a href="#" title="Dresses">Dresses</a>
        </li>
        <li className="cat-list-item">
          <a href="#" title="Jumpsuits">Jumpsuits</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasCart" aria-labelledby="My Cart">
    <div className="offcanvas-header justify-content-center">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <div className="order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Growers cider</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Fresh grapes</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Heinz tomato ketchup</h6>
              <small className="text-body-secondary">Brief description</small>
            </div>
            <span className="text-body-secondary">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>
        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to Checkout</button>
      </div>
    </div>
  </div>
  <nav className="navbar navbar-expand-lg bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center w-100">
        <div className="col-auto">
          <a className="navbar-brand text-white" href="index.html">
            <img src={`${process.env.PUBLIC_URL}/assets/images/main-logo.png`} alt="logo" className="logo-image img-fluid" width={112} height={45} />
          </a>
        </div>
        <div className="col-auto">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 gap-1 gap-md-5 pe-3">
                <li className="nav-item dropdown">
                </li><li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                </li><li className="nav-item">
                  <a className="nav-link" href="#">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-3 col-lg-auto">
          <ul className="list-unstyled d-flex m-0">
            <li className="d-none d-lg-block">
              <a href="index.html" className="text-uppercase mx-3">Wishlist <span className="wishlist-count">(0)</span>
              </a>
            </li>
            <li className="d-none d-lg-block">
              <a href="index.html" className="text-uppercase mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">Cart <span className="cart-count">(0)</span>
              </a>
            </li>
            <li className="d-lg-none">
              <a href="#" className="mx-2">
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <use xlinkHref="#heart" />
                </svg>
              </a>
            </li>
            <li className="d-lg-none">
              <a href="#" className="mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <use xlinkHref="#cart" />
                </svg>
              </a>
            </li>
            <li className="search-box">
              <a href="#search" className="search-button">
                <svg width={24} height={24} viewBox="0 0 24 24">
                  <use xlinkHref="#search" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <section id="billboard" className="bg-light py-5">
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="section-title text-center mt-4" data-aos="fade-up">New Collections</h1>
        <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay={300}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
            repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
            quibusdam ex repellat eaque!</p>
        </div>
      </div>
      <div className="row">
        <div className="swiper main-swiper py-4" data-aos="fade-up" data-aos-delay={600}>
          <div className="swiper-wrapper d-flex border-animation-left">
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-image-6.jpg`} alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-image-1.jpg`} alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-image-2.jpg`} alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-image-3.jpg`} alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-image-4.jpg`} alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Out crop sweater</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/banner-image-5.jpg`} alt="product" className="img-fluid" />
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">Soft leather jackets</a>
                  </h5>
                  <p>Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
            <use xlinkHref="#arrow-left" />
          </svg></div>
        <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
            <use xlinkHref="#arrow-right" />
          </svg></div>
      </div>
    </div>
  </section>
  <section className="features py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={0}>
          <div className="py-5">
            <svg width={38} height={38} viewBox="0 0 24 24">
              <use xlinkHref="#calendar" />
            </svg>
            <h4 className="element-title text-capitalize my-3">Book An Appointment</h4>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
        </div>
        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={300}>
          <div className="py-5">
            <svg width={38} height={38} viewBox="0 0 24 24">
              <use xlinkHref="#shopping-bag" />
            </svg>
            <h4 className="element-title text-capitalize my-3">Pick up in store</h4>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
        </div>
        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={600}>
          <div className="py-5">
            <svg width={38} height={38} viewBox="0 0 24 24">
              <use xlinkHref="#gift" />
            </svg>
            <h4 className="element-title text-capitalize my-3">Special packaging</h4>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
        </div>
        <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={900}>
          <div className="py-5">
            <svg width={38} height={38} viewBox="0 0 24 24">
              <use xlinkHref="#arrow-cycle" />
            </svg>
            <h4 className="element-title text-capitalize my-3">free global returns</h4>
            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="categories overflow-hidden">
    <div className="container">
      <div className="open-up" data-aos="zoom-out">
        <div className="row">
          <div className="col-md-4">
            <div className="cat-item image-zoom-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/cat-item1.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
              </div>
              <div className="category-content">
                <div className="product-button">
                  <a href="index.html" className="btn btn-common text-uppercase">Shop for men</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-item image-zoom-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/cat-item2.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
              </div>
              <div className="category-content">
                <div className="product-button">
                  <a href="index.html" className="btn btn-common text-uppercase">Shop for women</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cat-item image-zoom-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/cat-item3.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
              </div>
              <div className="category-content">
                <div className="product-button">
                  <a href="index.html" className="btn btn-common text-uppercase">Shop accessories</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="new-arrival" className="new-arrival product-carousel py-5 position-relative overflow-hidden">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">Our New Arrivals</h4>
        <a href="index.html" className="btn-link">View All Products</a>
      </div>
      <div className="swiper product-swiper open-up" data-aos="zoom-out">
        <div className="swiper-wrapper d-flex">
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-1.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="element-title text-uppercase fs-5 mt-3">
                    <a href="index.html">Dark florish onepiece</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$95.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-2.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Baggy Shirt</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$55.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-3.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Cotton off-white shirt</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$65.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-4.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Crop sweater</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$50.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-10.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Crop sweater</a>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>$70.00</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
          <use xlinkHref="#arrow-left" />
        </svg></div>
      <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
          <use xlinkHref="#arrow-right" />
        </svg></div>
    </div>
  </section>
  <section className="collection bg-light position-relative py-5">
    <div className="container">
      <div className="row">
        <div className="title-xlarge text-uppercase txt-fx domino">Collection</div>
        <div className="collection-item d-flex flex-wrap my-5">
          <div className="col-md-6 column-container">
            <div className="image-holder">
              <img src={`${process.env.PUBLIC_URL}/assets/images/single-image-2.jpg`} alt="collection" className="product-image img-fluid" />
            </div>
          </div>
          <div className="col-md-6 column-container bg-white">
            <div className="collection-content p-5 m-0 m-md-5">
              <h3 className="element-title text-uppercase">Classic winter collection</h3>
              <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu
                fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam
                nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis
                diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
              <a href="#" className="btn btn-dark text-uppercase mt-3">Shop Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="best-sellers" className="best-sellers product-carousel py-5 position-relative overflow-hidden">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">Best Selling Items</h4>
        <a href="index.html" className="btn-link">View All Products</a>
      </div>
      <div className="swiper product-swiper open-up" data-aos="zoom-out">
        <div className="swiper-wrapper d-flex">
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-4.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Dark florish onepiece</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$95.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-3.jpg`} alt="product" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Baggy Shirt</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$55.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-5.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Cotton off-white shirt</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$65.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-6.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Handmade crop sweater</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$50.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-9.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Dark florish onepiece</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$70.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-10.jpg`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Cotton off-white shirt</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$70.00</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
          <use xlinkHref="#arrow-left" />
        </svg></div>
      <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
          <use xlinkHref="#arrow-right" />
        </svg></div>
    </div>
  </section>
  <section className="video py-5 overflow-hidden">
    <div className="container-fluid">
      <div className="row">
        <div className="video-content open-up" data-aos="zoom-out">
          <div className="video-bg">
            <img src={`${process.env.PUBLIC_URL}/assets/images/video-image.jpg`} alt="video" className="video-image img-fluid" />
          </div>
          <div className="video-player">
            <a className="youtube" href="https://www.youtube.com/embed/pjtsGzQjFM4">
              <svg width={24} height={24} viewBox="0 0 24 24">
                <use xlinkHref="#play" />
              </svg>
              <img src={`${process.env.PUBLIC_URL}/assets/images/text-pattern.png`} alt="pattern" className="text-rotate" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="testimonials py-5 bg-light">
    <div className="section-header text-center mt-5">
      <h3 className="section-title">WE LOVE GOOD COMPLIMENT</h3>
    </div>
    <div className="swiper testimonial-swiper overflow-hidden my-5">
      <div className="swiper-wrapper d-flex">
        <div className="swiper-slide">
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“More than expected crazy soft, flexible and best fitted white simple denim shirt.”</p>
              <div className="review-title text-uppercase">casual way</div>
            </blockquote>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“Best fitted white denim shirt more than expected crazy soft, flexible</p>
              <div className="review-title text-uppercase">uptop</div>
            </blockquote>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“Best fitted white denim shirt more white denim than expected flexible crazy soft.”</p>
              <div className="review-title text-uppercase">Denim craze</div>
            </blockquote>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-item text-center">
            <blockquote>
              <p>“Best fitted white denim shirt more than expected crazy soft, flexible</p>
              <div className="review-title text-uppercase">uptop</div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial-swiper-pagination d-flex justify-content-center mb-5" />
  </section>
  <section id="related-products" className="related-products product-carousel py-5 position-relative overflow-hidden">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">You May Also Like</h4>
        <a href="index.html" className="btn-link">View All Products</a>
      </div>
      <div className="swiper product-swiper open-up" data-aos="zoom-out">
        <div className="swiper-wrapper d-flex">
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-5.jpg`} alt="product" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Dark florish onepiece</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$95.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-6.jpg`} alt="product" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Baggy Shirt</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$55.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-7.jpg`} alt="product" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Cotton off-white shirt</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$65.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-8.jpg`} alt="product" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Handmade crop sweater</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$50.00</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder">
                <a href="index.html">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/product-item-1.jpg`} alt="product" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#heart" />
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="text-uppercase fs-5 mt-3">
                    <a href="index.html">Handmade crop sweater</a>
                  </h5>
                  <a href="index.html" className="text-decoration-none" data-after="Add to cart"><span>$70.00</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
          <use xlinkHref="#arrow-left" />
        </svg></div>
      <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
          <use xlinkHref="#arrow-right" />
        </svg></div>
    </div>
  </section>
  <section className="blog py-5">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">Read Blog Posts</h4>
        <a href="index.html" className="btn-link">View All</a>
      </div>
      <div className="row">
        <div className="col-md-4">
          <article className="post-item">
            <div className="post-image">
              <a href="index.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/post-image1.jpg`} alt="image" className="post-grid-image img-fluid" />
              </a>
            </div>
            <div className="post-content d-flex flex-wrap gap-2 my-3">
              <div className="post-meta text-uppercase fs-6 text-secondary">
                <span className="post-category">Fashion /</span>
                <span className="meta-day"> jul 11, 2022</span>
              </div>
              <h5 className="post-title text-uppercase">
                <a href="index.html">How to look outstanding in pastel</a>
              </h5>
              <p>Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...</p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="post-item">
            <div className="post-image">
              <a href="index.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/post-image2.jpg`} alt="image" className="post-grid-image img-fluid" />
              </a>
            </div>
            <div className="post-content d-flex flex-wrap gap-2 my-3">
              <div className="post-meta text-uppercase fs-6 text-secondary">
                <span className="post-category">Fashion /</span>
                <span className="meta-day"> jul 11, 2022</span>
              </div>
              <h5 className="post-title text-uppercase">
                <a href="index.html">Top 10 fashion trend for summer</a>
              </h5>
              <p>Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...</p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="post-item">
            <div className="post-image">
              <a href="index.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/post-image3.jpg`} alt="image" className="post-grid-image img-fluid" />
              </a>
            </div>
            <div className="post-content d-flex flex-wrap gap-2 my-3">
              <div className="post-meta text-uppercase fs-6 text-secondary">
                <span className="post-category">Fashion /</span>
                <span className="meta-day"> jul 11, 2022</span>
              </div>
              <h5 className="post-title text-uppercase">
                <a href="index.html">Crazy fashion with unique moment</a>
              </h5>
              <p>Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  <section className="logo-bar py-5 my-5">
    <div className="container">
      <div className="row">
        <div className="logo-content d-flex flex-wrap justify-content-between">
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo1.png`} alt="logo" className="logo-image img-fluid" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo2.png`} alt="logo" className="logo-image img-fluid" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo3.png`} alt="logo" className="logo-image img-fluid" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo4.png`} alt="logo" className="logo-image img-fluid" />
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo5.png`} alt="logo" className="logo-image img-fluid" />
        </div>
      </div>
    </div>
  </section>
  <section className="newsletter bg-light" style={{background: 'url(images/pattern-bg.png) no-repeat'}}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 py-5 my-5">
          <div className="subscribe-header text-center pb-3">
            <h3 className="section-title text-uppercase">Sign Up for our newsletter</h3>
          </div>
          <form id="form" className="d-flex flex-wrap gap-2">
            <input type="text" name="email" placeholder="Your Email Addresss" className="form-control form-control-lg" />
            <button className="btn btn-dark btn-lg text-uppercase w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="instagram position-relative">
    <div className="d-flex justify-content-center w-100 position-absolute bottom-0 z-1">
      <a href="https://www.instagram.com/templatesjungle/" className="btn btn-dark px-5">Follow us on Instagram</a>
    </div>
    <div className="row g-0">
      <div className="col-6 col-sm-4 col-md-2">
        <div className="insta-item">
          <a href="https://www.instagram.com/templatesjungle/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/assets/images/insta-item1.jpg`} alt="instagram" className="insta-image img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-md-2">
        <div className="insta-item">
          <a href="https://www.instagram.com/templatesjungle/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/assets/images/insta-item2.jpg`} alt="instagram" className="insta-image img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-md-2">
        <div className="insta-item">
          <a href="https://www.instagram.com/templatesjungle/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/assets/images/insta-item3.jpg`} alt="instagram" className="insta-image img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-md-2">
        <div className="insta-item">
          <a href="https://www.instagram.com/templatesjungle/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/assets/images/insta-item4.jpg`} alt="instagram" className="insta-image img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-md-2">
        <div className="insta-item">
          <a href="https://www.instagram.com/templatesjungle/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/assets/images/insta-item5.jpg`} alt="instagram" className="insta-image img-fluid" />
          </a>
        </div>
      </div>
      <div className="col-6 col-sm-4 col-md-2">
        <div className="insta-item">
          <a href="https://www.instagram.com/templatesjungle/" target="_blank">
            <img src={`${process.env.PUBLIC_URL}/assets/images/insta-item6.jpg`} alt="instagram" className="insta-image img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <footer id="footer" className="mt-5">
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-between py-5">
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-001">
            <div className="footer-intro mb-4">
              <a href="index.html">
                <img src={`${process.env.PUBLIC_URL}/assets/images/main-logo.png`} alt="logo" />
              </a>
            </div>
            <p>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus
              vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
            <div className="social-links">
              <ul className="list-unstyled d-flex flex-wrap gap-3">
                <li>
                  <a href="#" className="text-secondary">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#facebook" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#twitter" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#youtube" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#pinterest" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#instagram" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-002">
            <h5 className="widget-title text-uppercase mb-4">Quick Links</h5>
            <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
              <li className="menu-item">
                <a href="index.html" className="item-anchor">Home</a>
              </li>
              <li className="menu-item">
                <a href="index.html" className="item-anchor">About</a>
              </li>
              <li className="menu-item">
                <a href="blog.html" className="item-anchor">Services</a>
              </li>
              <li className="menu-item">
                <a href="styles.html" className="item-anchor">Single item</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-003">
            <h5 className="widget-title text-uppercase mb-4">Help &amp; Info</h5>
            <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
              <li className="menu-item">
                <a href="#" className="item-anchor">Track Your Order</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Returns + Exchanges</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Shipping + Delivery</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Contact Us</a>
              </li>
              <li className="menu-item">
                <a href="#" className="item-anchor">Find us easy</a>
              </li>
              <li className="menu-item">
                <a href="index.html" className="item-anchor">Faqs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu footer-menu-004 border-animation-left">
            <h5 className="widget-title text-uppercase mb-4">Contact Us</h5>
            <p>Do you have any questions or suggestions? <a href="mailto:contact@yourcompany.com" className="item-anchor">contact@yourcompany.com</a></p>
            <p>Do you need support? Give us a call. <a href="tel:+43 720 11 52 78" className="item-anchor">+43 720 11 52
                78</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-wrap">
            <div className="shipping">
              <span>We ship with:</span>
              <img src={`${process.env.PUBLIC_URL}/assets/images/arct-icon.png`} alt="icon" />
              <img src={`${process.env.PUBLIC_URL}/assets/images/dhl-logo.png`} alt="icon" />
            </div>
            <div className="payment-option">
              <span>Payment Option:</span>
              <img src={`${process.env.PUBLIC_URL}/assets/images/visa-card.png`} alt="card" />
              <img src={`${process.env.PUBLIC_URL}/assets/images/paypal-card.png`} alt="card" />
              <img src={`${process.env.PUBLIC_URL}/assets/images/master-card.png`} alt="card" />
            </div>
          </div>
          <div className="col-md-6 text-end">
            <p>© Copyright 2022 Test. All rights reserved. Design by <a href="#" target="_blank">TemplatesJungle</a> Distribution By <a href="#" target="blank">ThemeWagon</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  );
}

export default App;
