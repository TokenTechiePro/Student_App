﻿export class Score {
    
    public id: number;
    public questions: number;
    public correct: number;

    constructor(data) {
        Object.assign(this, data);
    }
    
}