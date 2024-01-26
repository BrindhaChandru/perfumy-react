import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
function Products(){
    return(
      <div class="products">
        <div class="box">
        <img src={one}/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src = {two}/>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div class="box">
          <img src={three}/>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    )
  }
  export default Products;