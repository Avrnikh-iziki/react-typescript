
export const loginUser = async (email: string, password: string) => {
    try {
        const user = {
            user: {
                id: "507f1f77bcf86cd799439011",
                username: "najib",
                email: "avrnikh@gmail.com",
                isLogin: true
            }
        }
        return user
    } catch (err) {
        throw (err)
    }
}
export const register = async (email: string, password: string, username: string) => {
    try {
        const user = {
            user: {
                id: "507f1f77bcf86cd799439011",
                username: "najib",
                email: "avrnikh@gmail.com",
                isLogin: true
            }
        }
        return user
    } catch (err) {
        throw (err)
    }
}
export const getallproducts = async () => {
    try {
        const product = [
            {
                id: "507f1f77bcf86cd799439011",
                name: "product1",
                price: 9.99,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439012",
                name: "product2",
                price: 17.99,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439013",
                name: "product3",
                price: 45,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439014",
                name: "product4",
                price: 199.99,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439015",
                name: "product5",
                price: 9,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439016",
                name: "product6",
                price: 1500,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },

        ]
        return product
    } catch (err) {
        throw (err)
    }
}
export const getOneproduct = async (id: string) => {
    try {
        const product = [
            {
                id: "507f1f77bcf86cd799439011",
                name: "product1",
                price: 9.99,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439012",
                name: "product2",
                price: 17.99,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439013",
                name: "product3",
                price: 45,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439014",
                name: "product4",
                price: 199.99,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439015",
                name: "product5",
                price: 9,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                id: "507f1f77bcf86cd799439016",
                name: "product6",
                price: 1500,
                description: "this is the first  product dat we have here",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },

        ]
        let res = product.find((el) => el.id === id)
        return res
    } catch (err) {
        throw (err)
    }
}
export const Icome = async () => {
    try {
        const data: Array<number> = [12, 45, 47, 58, 58, 95, 55, 66, 44, 75, 26, 23, 23, 52]
        return data
    } catch (err) {
        throw (err)
    }
}
export const Data = async () => {
    try {
        const data: Array<Array<number>> = [
            [45, 32, 85, 26, 14, 32, 56, 85, 95, 24, 23, 75],
            [14, 17, 32, 15, 65, 92, 73, 42, 15, 65, 77, 54],
            [89, 21, 54, 47, 87, 89, 32, 14, 15, 76, 14, 16]
        ];
        return data
    } catch (err) {
        throw (err)
    }
}
export const statics = async () => {
    try {
        const stas = [
            { title: "all users", progress: 10, total: 1254, icon: "/user.png" },
            { title: "all products", total: 215436, progress: 15, icon: "/new-product.png" },
            { title: "Refurend", total: 1254, progress: 33, icon: "/clipboard.png" }
        ]
        return stas
    } catch (err) {
        throw (err)
    }
}