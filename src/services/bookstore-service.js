export default class BookstoreService {
    getBooks() {
        return [
            {
                id:1 , 
                title: 'Js Patterns',
                author: 'Stoyan Stefanov'
            },
            {
                id:2 , 
                title: 'CSS3 Complete Guide',
                author: 'David McFarland'
            },
        ];
    }
}