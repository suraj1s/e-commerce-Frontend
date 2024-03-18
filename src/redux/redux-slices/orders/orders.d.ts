interface ProductDetail {
    id: string;
    title: string;
    price: number;
    discount: number;
    thumbnail: string;
}

interface CheckoutItem {
    id: string;
    product: ProductDetail;
    quantity: number;
}

interface OrderDetail {
    id: string;
    checkout_items: CheckoutItem[];
    address: string;
    payment: string;
}

interface OrderData {
    count: number;
    next: null | string;
    previous: null | string;
    results: {
        id: string;
        order_status: string;
        order_detail: OrderDetail;
    }[];
}
