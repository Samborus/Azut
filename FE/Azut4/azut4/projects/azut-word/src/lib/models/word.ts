import {Md5} from 'ts-md5/dist/md5';

export class Word {
    id: number | undefined;
    name: string = '';
    meaning: string = '';
    hash: string = '';

    constructor(name: string, meaning: string, hash: string | null = null) {
        this.name = name;
        this.meaning = meaning;
        if (hash) {
            this.hash = hash;
        } else {
            this.hash = Md5.hashStr(name);
        }
    }
}
