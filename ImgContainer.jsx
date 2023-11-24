import "../style.css";
import { useState } from "react";

// products js dosyasindaki data bilgileridir 

export default function ProductList({ products }) {
    // burada js dosyasi icerisindeki isActive yani hepsi false olanlari almis oldu
    const [activeProduct, setActiveProduct] = useState(products.find(item => item.isActive))

    // Choose Img Row:
    function handleProductSelect(productId) {
        
        // fonskiyon cagrıldıgında item.id === productId esit olanları al 
        // activeProduct item.id gonderilen productId ile esit olanları alan olacak sekilde update edilmis oldu
        const selectedProduct = products.find(item => item.id === productId);
        setActiveProduct(selectedProduct);
    
        // url atamasi alinmis oldu
        const selectedProductImage = selectedProduct.thumbnail;  // url alındı
    
        // headerImage document profile-set class yapisi olan yeri bul dendi ve gidildi
        // profile-set class yapisi list.jsx dosyamda bulunuyor
        // fonksiyon calistiginda  headerImage.src ile selectedProductImage olsun dendi
        // id de ustte secilimini yapmis oldu ve img degisti
        const headerImage = document.querySelector(".profile-set");
        headerImage.src = selectedProductImage;

    }
    
    

    return (
        <>
{/* products ile tum js objectleri alindi */}
{/* product col-sm-3 ile yan yana objectler verildi toplamda 4 adet objectim var js dosyamda */}
            <div className="row">
                {products.map(product => (
                    <div className="col-sm-3" key={product.id}>
                        <div className="card">

                            <img className="card-img-top" src={product.thumbnail} alt={product.imgName} />

                            
                            <div className="card-body" style={{ marginLeft: "2rem" }}>

                                <button
                                    className="btn btn-outline-success ms-5"
                                    onClick={() => handleProductSelect(product.id)}
                                >
                                    Seçiniz {product.id}
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

