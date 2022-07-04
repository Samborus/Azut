export class Word {
    id: number | undefined;
    name: string = '';
    meaning: string = '';

    constructor(name: string, meaning: string) {
        this.name = name;
        this.meaning = meaning;
    }
}
