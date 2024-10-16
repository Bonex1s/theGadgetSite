const headerTemplate = `
 <div class="promotions">
        <div class="prom-block">
          Знижка 100 грн на перше замовлення! Гарячі новинки та акції.
        </div>
        <button type="button" id="close-promotion">&times;</button>
      </div>
      <div class="header-panel">
        <a href="../index.html">
          <img class="logo" src="../assets/Logo 5.png" alt="LOGO" />
        </a>
        <nav class="menu_list">
          <a class="menu-text" id="menu-text-case">
            Чохли
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M18.5355 0.168281L20.294 1.94967L10.2297 11.8849L0.294466 1.82056L2.07586 0.0620206L10.2526 8.34498L18.5355 0.168281Z"
                fill="black"
              />
            </svg>
          </a>
          <a class="menu-text" id="menu-text-glass">
            Скло
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M18.5355 0.168281L20.294 1.94967L10.2297 11.8849L0.294466 1.82056L2.07586 0.0620206L10.2526 8.34498L18.5355 0.168281Z"
                fill="black"
              />
            </svg>
          </a>
          <a class="menu-text" id="menu-text-phone">
            Телефони
            <svg
              width="21";
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M18.5355 0.168281L20.294 1.94967L10.2297 11.8849L0.294466 1.82056L2.07586 0.0620206L10.2526 8.34498L18.5355 0.168281Z"
                fill="black"
              />
            </svg>
          </a>
          <a class="menu-text" id="menu-text-charger">
            Зарядний пристрій
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M18.5355 0.168281L20.294 1.94967L10.2297 11.8849L0.294466 1.82056L2.07586 0.0620206L10.2526 8.34498L18.5355 0.168281Z"
                fill="black"
              />
            </svg>
          </a>
          <a class="menu-text" id="menu-text-gadget">
            Гаджети
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M18.5355 0.168281L20.294 1.94967L10.2297 11.8849L0.294466 1.82056L2.07586 0.0620206L10.2526 8.34498L18.5355 0.168281Z"
                fill="black"
              />
            </svg>
          </a>
          <a class="menu-text" id="menu-text-other">
            Ще
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M18.5355 0.168281L20.294 1.94967L10.2297 11.8849L0.294466 1.82056L2.07586 0.0620206L10.2526 8.34498L18.5355 0.168281Z"
                fill="black"
              />
            </svg>
          </a>
        </nav>

        <div class="search-container">
          <input type="text" class="search-input" placeholder="Пошук..." />
        </div>
              <div class="login-container">
          <div class="image-section">
            <div class="image-overlay">
              <img src="../assets/registrationimg.jpeg" alt="" />
              <div class="text-front">
                <h1>Увійти в систему для продовження</h1>
                
              </div>
            </div>
          </div>
          <div class="form-section">
            <h3>Вхід</h3>
            <form class="login-form" id="login-form">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email"
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
                required
              />
              <button type="button" class="recovery">Забули пароль?</button>
              <button class="main-button" type="submit">Увійти</button>
            </form>
            <button type="button" class="registration">
              Не має аккаунту? <br />
              <span>Зареєструватися</span>
            </button>
          </div>
        </div>

        <ul class="svg-list">
          <li class="svg-icon" id="search-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.875 26.875L37.625 37.625M17.9167 30.4583C10.9901 30.4583 5.375 24.8432 5.375 17.9167C5.375 10.9901 10.9901 5.375 17.9167 5.375C24.8432 5.375 30.4583 10.9901 30.4583 17.9167C30.4583 24.8432 24.8432 30.4583 17.9167 30.4583Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li class="svg-icon">
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.7525 11.1751C37.5235 13.9462 37.6296 18.4052 34.9935 21.3049L21.7847 35.8334L8.57769 21.3049C5.94157 18.4051 6.04773 13.9461 8.8188 11.175C11.9129 8.08098 17.0086 8.36371 19.742 11.7805L21.7856 14.3341L23.8275 11.7802C26.561 8.36342 31.6584 8.08108 34.7525 11.1751Z"
                stroke="#080000"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li class="svg-icon" id="login">
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.213 37.625C34.213 30.6984 28.5979 25.0833 21.6713 25.0833C14.7447 25.0833 9.12964 30.6984 9.12964 37.625M21.6713 19.7083C17.7133 19.7083 14.5046 16.4997 14.5046 12.5417C14.5046 8.58363 17.7133 5.375 21.6713 5.375C25.6293 5.375 28.838 8.58363 28.838 12.5417C28.838 16.4997 25.6293 19.7083 21.6713 19.7083Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          

          <li class="svg-icon" onclick="openCart()">
            <svg
              width="30"
              height="30"
              viewBox="0 0 44 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.0299 30.4583C29.0508 30.4583 27.4465 32.0626 27.4465 34.0417C27.4465 36.0207 29.0508 37.625 31.0299 37.625C33.0089 37.625 34.6132 36.0207 34.6132 34.0417C34.6132 32.0626 33.0089 30.4583 31.0299 30.4583ZM31.0299 30.4583H17.2232C16.3971 30.4583 15.9833 30.4583 15.6432 30.3114C15.3432 30.1817 15.0829 29.973 14.8933 29.7068C14.6807 29.4084 14.5952 29.0094 14.426 28.2197L10.0163 7.64083C9.84312 6.83276 9.75538 6.42918 9.54036 6.12736C9.35073 5.86117 9.09049 5.65166 8.79048 5.522C8.45031 5.375 8.03882 5.375 7.21241 5.375H5.94653M11.3215 10.75H34.3861C35.6792 10.75 36.3252 10.75 36.7592 11.0194C37.1394 11.2554 37.4177 11.6254 37.5391 12.0561C37.6776 12.5478 37.4996 13.1687 37.1412 14.4112L34.6604 23.0112C34.4461 23.7541 34.3389 24.1249 34.1215 24.4005C33.9296 24.6438 33.6765 24.8343 33.3896 24.9512C33.0654 25.0833 32.6802 25.0833 31.9115 25.0833H14.422M14.9049 37.625C12.9258 37.625 11.3215 36.0207 11.3215 34.0417C11.3215 32.0626 12.9258 30.4583 14.9049 30.4583C16.8839 30.4583 18.4882 32.0626 18.4882 34.0417C18.4882 36.0207 16.8839 37.625 14.9049 37.625Z"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li class="svg-icon">
            <div class="menu-toggle" id="menu-toggle">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <div class="logiout">Вийти з аккаунту?</div>
      <div class="toggle-section" id="toggle-section">
        <div class="toggle-container">
          <a href="../pages/productList.html" data-product="Чохли"> Чохли</a>
          <div>Скло</div>
          <div>Телефон</div>
          <div>Зарядний пристрій</div>
          <div>Гаджети</div>
          <div>Ще</div>
        </div>
      </div>
      <div class="item-preview-menu" id="item-preview-menu">
        <div class="preview-list one" id="preview-list">
          <div><strong>iPhone</strong></div>
          <a href="../pages/productList.html" data-product="iPhone 15 Pro Max"
            >iPhone 15 Pro Max</a
          >
          <a href="../pages/productList.html" data-product="iPhone 15 Pro"
            >iPhone 15 Pro</a
          >
          <a href="../pages/productList.html" data-product="iPhone 15 Plus"
            >iPhone 15 Plus</a
          >
          <a href="../pages/productList.html" data-product="iPhone 15"
            >iPhone 15</a
          >
          <a href="../pages/productList.html" data-product="iPhone 14 Pro Max"
            >iPhone 14 Pro Max</a
          >
          <a href="../pages/productList.html" data-product="iPhone 14 Pro"
            >iPhone 14 Pro</a
          >
          <a href="../pages/productList.html" data-product="iPhone 14"
            >iPhone 14</a
          >
          <a href="../pages/productList.html" data-product="iPhone 14 Plus"
            >iPhone 14 Plus</a
          >
          <a href="../pages/productList.html" data-product="iPhone 14/13"
            >iPhone 14/13</a
          >

          <a href="../pages/productList.html" data-product="iPhone 13 Pro Max"
            >iPhone 13 Pro Max</a
          >
          <a href="../pages/productList.html" data-product="iPhone 13 Pro"
            >iPhone 13 Pro</a
          >
        </div>
        <div class="preview-list two">
          <a><strong>Samsung</strong></a>
          <a>Samsung S24 Ultra</a>
          <a>Samsung S24 Plus</a>
          <a>Samsung S24</a>
          <a>Samsung 23 Ulra</a>
          <a>Samsung 23 Plus</a>
          <a>Samsung 23 </a>
        </div>
        <div class="preview-list three">
          <a> <strong>iPad </strong> </a>
          <a>iPad Pro 12.9 2022</a>
          <a>iPad Pro 11 2022</a>
          <a>iPad Air 2022</a>
          <a>iPad 2022</a>
        </div>
        <div class="preview-list four">
          <a><strong>Xiaomi</strong> </a>
          <a>iPad Pro 12.9 2022</a>
          <a>iPad Pro 11 2022</a>
          <a>iPad Air 2022</a>
          <a>iPad 2022</a>
        </div>
      </div>
      <div class="item-preview-menu" id="item-preview-menu-2">
        <div class="preview-list one" id="preview-list-2">
          <div>Скло для iPhone</div>
          <div>Скло для iPhone 15 Pro max</div>
          <div>Скло для iPhone 15 Pro</div>
          <div>Скло для iPhone 15 Plus</div>
          <div>Скло для iPhone 15</div>
          <div>Скло для iPhone 14 Pro Max</div>
          <div>Скло для iPhone 14 Pro</div>
          <div>Скло для iPhone 14</div>
          <div>Скло для iPhone 14 Plus</div>
          <div>Скло для iPhone 14/13</div>
          <div>Скло для iPhone 13 Pro Max</div>
          <div>Скло для iPhone 13 Pro</div>
        </div>
        <div class="preview-list two">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list three">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list four">
          <div>Xiaomi</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
      </div>
      <div class="item-preview-menu" id="item-preview-menu-3">
        <div class="preview-list one" id="preview-list-2">
          <div>Скло для iPhone</div>
          <div>Скло для iPhone 15 Pro max</div>
          <div>Скло для iPhone 15 Pro</div>
          <div>Скло для iPhone 15 Plus</div>
          <div>Скло для iPhone 15</div>
          <div>Скло для iPhone 14 Pro Max</div>
          <div>Скло для iPhone 14 Pro</div>
          <div>Скло для iPhone 14</div>
          <div>Скло для iPhone 14 Plus</div>
          <div>Скло для iPhone 14/13</div>
          <div>Скло для iPhone 13 Pro Max</div>
          <div>Скло для iPhone 13 Pro</div>
        </div>
        <div class="preview-list two">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list three">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list four">
          <div>Xiaomi</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
      </div>
      <div class="item-preview-menu" id="item-preview-menu-4">
        <div class="preview-list one" id="preview-list-2">
          <div>Скло для iPhone</div>
          <div>Скло для iPhone 15 Pro max</div>
          <div>Скло для iPhone 15 Pro</div>
          <div>Скло для iPhone 15 Plus</div>
          <div>Скло для iPhone 15</div>
          <div>Скло для iPhone 14 Pro Max</div>
          <div>Скло для iPhone 14 Pro</div>
          <div>Скло для iPhone 14</div>
          <div>Скло для iPhone 14 Plus</div>
          <div>Скло для iPhone 14/13</div>
          <div>Скло для iPhone 13 Pro Max</div>
          <div>Скло для iPhone 13 Pro</div>
        </div>
        <div class="preview-list two">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list three">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list four">
          <div>Xiaomi</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
      </div>
      <div class="item-preview-menu" id="item-preview-menu-5">
        <div class="preview-list one" id="preview-list-2">
          <div>Скло для iPhone</div>
          <div>Скло для iPhone 15 Pro max</div>
          <div>Скло для iPhone 15 Pro</div>
          <div>Скло для iPhone 15 Plus</div>
          <div>Скло для iPhone 15</div>
          <div>Скло для iPhone 14 Pro Max</div>
          <div>Скло для iPhone 14 Pro</div>
          <div>Скло для iPhone 14</div>
          <div>Скло для iPhone 14 Plus</div>
          <div>Скло для iPhone 14/13</div>
          <div>Скло для iPhone 13 Pro Max</div>
          <div>Скло для iPhone 13 Pro</div>
        </div>
        <div class="preview-list two">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list three">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list four">
          <div>Xiaomi</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
      </div>
      <div class="item-preview-menu" id="item-preview-menu-6">
        <div class="preview-list one" id="preview-list-2">
          <div>Скло для iPhone</div>
          <div>Скло для iPhone 15 Pro max</div>
          <div>Скло для iPhone 15 Pro</div>
          <div>Скло для iPhone 15 Plus</div>
          <div>Скло для iPhone 15</div>
          <div>Скло для iPhone 14 Pro Max</div>
          <div>Скло для iPhone 14 Pro</div>
          <div>Скло для iPhone 14</div>
          <div>Скло для iPhone 14 Plus</div>
          <div>Скло для iPhone 14/13</div>
          <div>Скло для iPhone 13 Pro Max</div>
          <div>Скло для iPhone 13 Pro</div>
        </div>
        <div class="preview-list two">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list three">
          <div>iPad</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
        <div class="preview-list four">
          <div>Xiaomi</div>
          <div>iPad Pro 12.9 2022</div>
          <div>iPad Pro 11 2022</div>
          <div>iPad Air 2022</div>
          <div>iPad 2022</div>
        </div>
      </div>
     
     

`;
export default headerTemplate;
