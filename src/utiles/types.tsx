export interface User {
    user: {
        id: string;
        username: string;
        email: string;
        isLogin: boolean
    }
}

export interface Cart {
    icon:string;
    progress:number;
    title:string;
    total:number
}

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    Q: number
}

