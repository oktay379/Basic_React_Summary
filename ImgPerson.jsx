import React from "react";
import { useState } from "react"
import "../style.css";

export default function({ products }) {

    // product icerisinden find ile item false olanlar alındı hepsi false'dir
    const [activeProduct, setActiveProduct] = useState(products.find(item => item.isActive))


    function handleProfile(productId) {
        // fonskiyon cagrıldıgında item.id === productId esit olanları al 
        // activeProduct item.id gonderilen productId ile esit olanları alan olacak sekilde update edilmis oldu
        const selectedProfile = products.find(item => item.id === productId);
        setActiveProduct(selectedProfile);


        // url atamasi alinmis oldu
        const selectedProfileImage = selectedProfile.personImg;

        
        // profileImage document pp class yapisi olan yeri bul dendi ve gidildi
        // pp class yapisi ProfileCard.jsx dosyamda bulunuyor
        // fonksiyon calistiginda  profileImage.src ile selectedProductImage olsun dendi
        // id de ustte secilimini yapmis oldu ve img degisti
        const profileImage = document.querySelector(".pp");
        profileImage.src = selectedProfileImage;

    }

    return (
    <>
        <div className="row">
            {products.map(product => (
                <div className="col-sm-3" key={product.id}>
                    <div className="card">

                        <img className="card-img-top" src={product.personImg} alt={product.imgName} />

                        
                        <div className="card-body" style={{ marginLeft: "1rem" }}>

                        <button
                            className="btn btn-outline-success ms-5"
                            onClick={() => handleProfile(product.id)}
                        >
                            Seçiniz {product.id}
                        </button>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}