
interface IGetAddress {
    id: string;
    created_at: string;
    updated_at: string;
    full_name: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    postal_code: string;
    street_address: string;
}  

interface IGetAllAddress  {
    count: number;
    next: string;
    previous: string;
    results: IGetAddress[];
}

interface ICreateCheckout {
    address: string;
    payment: string;
    items : [string];
}



interface ICreatePayment {
    payment_status: string;
    payment_amount: string;
    payment_reference: string;
    payment_method: string;
}

interface IPaymentOption {
    count: number;
    next: string;
    previous: string;
    results: {
        id: string;
        created_at: string;
        updated_at: string;
        payment_method: string;
        payment_description: string;
        payment_image: string;
    }[];
}