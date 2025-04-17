




const CartContents = () => {

    const cartItem = [
        {
            productId : 1 ,
            name : "laptop" ,
            screen : 15/6 ,
            color : "black" ,
            quantity : 1 ,
            price : 1500 ,
            image : "https://picsum.photos/200?random=1"
        },
        {
            productId : 2 ,
            name : "mobile" ,
            screen : 6 ,
            color : "gold" ,
            quantity : 3 ,
            price : 2100 ,
            image : "https://picsum.photos/200?random=1"
        },
        {
            productId : 3 ,
            name : "monitor" ,
            screen : 21 ,
            color : "silver" ,
            quantity : 2 ,
            price : 1900 ,
            image : "https://picsum.photos/200?random=1"
        },
    ]

  return (
    <div>
        {
            cartItem.map(item => (
                <div key={item.productId} className=""></div>
            ))
        }
    </div>
  )
}

export default CartContents