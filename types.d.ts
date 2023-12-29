
type brand  = {
    value : string,
    label : string,
    id: string,
}
type category  = {
    value : string,
    label : string,
    id: string,
}

type product = {
    id : string,
    title : string,
    description : string,
    price : number,
    discountPercentage : number,
    rating : number,
    stock : number,
    brand : brand,
    category : string,
    thumbnail : string,
    images : string[],
    highlights : string[],
    colors : any[],
    sizes : any[],
    deleted : boolean,
}

type user = {
    name : string,
    email : string,
    password : string,
    role : string,
}

type cart = {
    product : product,
    user : user,
    quantity : number,
    sizes : any[],
    color : any[],
}

type order = {
    id : string,
    user : user,
    selectedAddress : any,
    totalItems : number,
    totalPrice : number,
    paymentMethod : string,
    orderStatus : string,
    paymentStatus : string,
    createdAt : string,
    updatedAt : string,
}

