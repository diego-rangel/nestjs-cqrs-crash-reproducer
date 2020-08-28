import { Injectable } from '@nestjs/common';

@Injectable()
export class UowService {
    constructor() {
        //console.warn('UowService constructor');
    }

    count: number = 0;

    getTran(): any {
        this.count += 1;
        return `Opa: ${this.count}`;
    }
}
