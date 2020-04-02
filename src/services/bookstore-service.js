const data = Array(10).fill({name: "Ilya", age: Math.floor(Math.random() * 100)})

export default class BookstoreService {
    getBooks() {
        return data;
    }
}