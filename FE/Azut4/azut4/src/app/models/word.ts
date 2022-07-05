import {Md5} from 'ts-md5/dist/md5';

export class Word {
    id: number | undefined;
    name: string = '';
    meaning: string = '';
    hash: string = '';

    constructor(name: string, meaning: string) {
        this.name = name;
        this.meaning = meaning;
        this.hash = Md5.hashStr(name);
    }
}
