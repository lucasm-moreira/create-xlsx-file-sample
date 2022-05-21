class User {
    async get() {
        return [
            {
                name: "Lucas",
                lastName: "Moreira",
                age: "27",
                email: "lucas@email.com"
            },
            {
                name: "João",
                lastName: "John",
                age: "17",
                email: "john@email.com"
            },
            {
                name: "Eduarda",
                lastName: "Duda",
                age: "37",
                email: "duda@email.com"
            },
            {
                name: "Rose",
                lastName: "Bello",
                age: "47",
                email: "rose@email.com"
            }
        ];
    }
}

export default new User();