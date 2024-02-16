const data = {
    "count": 123,
    "next": "http://api.example.org/accounts/?offset=400&limit=100",
    "previous": "http://api.example.org/accounts/?offset=200&limit=100",
    "results": [
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "created_at": "2024-02-16T15:08:36.269Z",
        "updated_at": "2024-02-16T15:08:36.269Z",
        "full_name": "string",
        "email": "user@example.com",
        "phone": "string",
        "country": "string",
        "state": "string",
        "city": "string",
        "postal_code": "string",
        "street_address": "string"
      }
    ]
  }

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