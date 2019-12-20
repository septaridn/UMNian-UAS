export class News {
    constructor(
        public id: string,
        public name: string,
        public title: string,
        public content: string,
        public img: string,
        public status: number
    ) {}
}