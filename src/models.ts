class Books {
    id: number;
    name: string;
    genre?: number;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class BooksGenre {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export { Books, BooksGenre };
