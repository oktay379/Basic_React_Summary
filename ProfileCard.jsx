import "../style.css";

// task bilgisi selected task dan gelecektir 
// add buton calistiginda card yapisinda gozukecektir

export default function ProfileCard ({ task }) {
// Gonderilen props degeri {task} olarak yazildi islev gerceklesti
    return (
        <>
            <div className="row">
                <div className="col-sm-2">
                    <img 
                    className='pp profile-img my-2 mx-2' 
                    src="https://i.pinimg.com/564x/c7/e5/3b/c7e53b9868b5e924b4f7bb19993ce2d7.jpg"
                    alt="" 
                    />
                </div>
                <div className="col-sm-8">
                    <h4>Main Task For Your Profile:</h4>
                    <p className='card-text'> <strong> Görev: </strong> {task}</p>      
                </div>
            </div>
        </>
    )
}