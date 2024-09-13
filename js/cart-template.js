const cartTemplate = `
  <div class="cart-panel" id="cartPanel">
            <div class="header-basket">
              <span>Мій кошик</span>
              <button
                type="button"
                onclick="closeCart()"
                style="font-size: 30px"
              >
                ×
              </button>
            </div>
            <div class="cart-product-main" id="cart-product">
            </div>
            <p class="price-cart-product" id="price-cart-product">
              Усього: <strong>300грн</strong>
            </p>
            <hr class="separator" />
            <div class="extra-header">
          <span>Разом дешевше</span>
        </div>
        <div class="extra-container">
          <div class="extra-img">
            <img
              src="https://thegadget.ua/images/products/541c7fd5f19411ea6d10de28d788c096237b3b5fedfa8bc4118aed4cbf01504d@1080w.webp"
              alt="img"
            />
          </div>
          <div class="extra-product-info">
            <p class="exta-header-text">
              Захисне Скло MaiKai 3D Amazing Full Glass для iPhone X/XS/11 Pro
            </p>
            <div class="main-extra-section">
              <div class="left-section">
                <p class="old-price">649грн</p>
                <p class="red-price">549грн</p>
                <div class="extra-colors-svg">
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_548_283)">
                      <path
                        d="M39.4756 19.5C39.4756 30.2696 30.7451 39 19.9756 39C9.20603 39 0.475586 30.2696 0.475586 19.5C0.475586 8.73045 9.20603 0 19.9756 0C30.7451 0 39.4756 8.73045 39.4756 19.5Z"
                        fill="#00FFE0"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_548_283"
                        x="0.475586"
                        y="0"
                        width="39"
                        height="43"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_548_283"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_548_282)">
                      <path
                        d="M39.4756 19.5C39.4756 30.2696 30.7451 39 19.9756 39C9.20603 39 0.475586 30.2696 0.475586 19.5C0.475586 8.73045 9.20603 0 19.9756 0C30.7451 0 39.4756 8.73045 39.4756 19.5Z"
                        fill="#B0ADC2"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_548_282"
                        x="0.475586"
                        y="0"
                        width="39"
                        height="43"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_548_282"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_548_286)">
                      <path
                        d="M39.4756 19.5C39.4756 30.2696 30.7451 39 19.9756 39C9.20603 39 0.475586 30.2696 0.475586 19.5C0.475586 8.73045 9.20603 0 19.9756 0C30.7451 0 39.4756 8.73045 39.4756 19.5Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_548_286"
                        x="0.475586"
                        y="0"
                        width="39"
                        height="43"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_548_286"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="right-section">
                <button type="button" class="add-button">Додати</button>
              </div>
            </div>
          </div>
        </div>
        <div class="extra-container">
          <div class="extra-img">
            <img
              src="https://thegadget.ua/images/products/9c1a3407a5d9632d99e4bdfbcf011cbed861905618aefc8528de7a9ff1a7eeac.webp"
              alt="img"
            />
          </div>
          <div class="extra-product-info">
            <p class="exta-header-text">
              МЗП Baseus GaN5S Fast Charger 20W (1 Type-C) (чорний)
            </p>
            <div class="main-extra-section">
              <div class="left-section">
                <p class="old-price">649грн</p>
                <p class="red-price">349грн</p>
                <div class="extra-colors-svg">
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_548_283)">
                      <path
                        d="M39.4756 19.5C39.4756 30.2696 30.7451 39 19.9756 39C9.20603 39 0.475586 30.2696 0.475586 19.5C0.475586 8.73045 9.20603 0 19.9756 0C30.7451 0 39.4756 8.73045 39.4756 19.5Z"
                        fill="#00FFE0"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_548_283"
                        x="0.475586"
                        y="0"
                        width="39"
                        height="43"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_548_283"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_548_282)">
                      <path
                        d="M39.4756 19.5C39.4756 30.2696 30.7451 39 19.9756 39C9.20603 39 0.475586 30.2696 0.475586 19.5C0.475586 8.73045 9.20603 0 19.9756 0C30.7451 0 39.4756 8.73045 39.4756 19.5Z"
                        fill="#B0ADC2"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_548_282"
                        x="0.475586"
                        y="0"
                        width="39"
                        height="43"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_548_282"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    width="40"
                    height="39"
                    viewBox="0 0 40 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_548_286)">
                      <path
                        d="M39.4756 19.5C39.4756 30.2696 30.7451 39 19.9756 39C9.20603 39 0.475586 30.2696 0.475586 19.5C0.475586 8.73045 9.20603 0 19.9756 0C30.7451 0 39.4756 8.73045 39.4756 19.5Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_548_286"
                        x="0.475586"
                        y="0"
                        width="39"
                        height="43"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_548_286"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="right-section">
                <button type="button" class="add-button">Додати</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="formalize">Оформити замовлення</button>
          </div>
 

`;

export default cartTemplate;
