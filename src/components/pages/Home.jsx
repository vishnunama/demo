import React from 'react'
import bannerimg from "../Assets/gradients/banner-gradient.png"
import bannerimg1 from "../Assets/shapes/element-moon1.png"
import bannerimg2 from "../Assets/shapes/element-moon2.png"
import searchicon from "../Assets/icons/search.svg"
import bannerin from "../Assets/thumbs/mainimg.png"
import dots from "../Assets/shapes/dots.png"
import element2 from "../Assets/shapes/element2.png"
// import searchicon from "../Assets/icons/search.svg"





function Home() {
  return (
    <>
    <section className="hero section-bg z-index-1">
    <img src={bannerimg} alt className="bg--gradient white-version" />
    <img src={bannerimg1} alt className="element one" />
    <img src={bannerimg2} alt className="element two" />
    <div className="container container-two">
      <div className="row align-items-center gy-sm-5 gy-4">
        <div className="col-lg-6">
          <div style={{marginTop:"50px"}} className="hero-inner position-relative pe-lg-5">
            <div>
              <h1 className="hero-inner__title">10+ Game Development products</h1>
              <p className="hero-inner__desc font-18">Explore the best premium themes and plugins available for sale. Our unique collection is hand-curated by experts. Find and buy the perfect premium theme  today.</p>
              <div className="position-relative">
              
            
              </div>
              {/* Tech List Start */}
             <div className="product-category-list">
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="WordPress">
    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp" alt className="white-version" />
    <img src="assets/images/thumbs/tech-icon-white1.png" alt className="dark-version" />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Laravel">
    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--javascript-runtime-backend-node-js-logo-coding-lang-pack-logos-icons-7578002.png" alt />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="PHP">
    <img src="https://cdn3d.iconscout.com/3d/free/preview/free-mysql-3d-icon-download-in-png-blend-fbx-gltf-file-formats--database-relational-sql-coding-lang-pack-logos-icons-7578013.png?f=webp&h=700" alt className="white-version" />
    <img src="assets/images/thumbs/tech-icon-white3.png" alt className="dark-version" />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="HTML">
    <img src="https://www.svgrepo.com/show/452088/php.svg" alt />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Sketch">
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3032182.png?f=webp" alt />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Figma">
    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png?f=webp" alt />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bootstrap">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_gGIbVg6gu2BMPvoLU59vJTys8BfmAI7qQ&s" alt />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tailwind">
    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-android-2-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-brand-logos-pack-icons-4695714.png?f=webp" alt />
  </div>
  <div className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="React">
    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-css-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css3-html5-cascading-style-sheets-coding-lang-pack-logos-icons-7578024.png?f=webp" alt />
  </div>
</div>

              {/* Tech List End */}
            </div>            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-thumb">
            <img src={bannerin} alt />
            <img src={dots} alt className="dotted-img white-version" />
            <img src="assets/images/shapes/dots-white.png" alt className="dotted-img dark-version" />
            <img src={element2} alt className="element two end-0" />
            <div className="statistics animation bg-main text-center">
              <h5 className="statistics__amount text-white">50k</h5>
              <span className="statistics__text text-white font-14">Customers</span>
            </div>
            <div className="statistics style-two bg-white text-center">
              <h5 className="statistics__amount statistics__amount-two text-heading">22k</h5>
              <span className="statistics__text text-heading font-14">Themes &amp; Plugins</span>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </section>

  
    
    </>
  
  )
}

export default Home