export class Weather {

    id: number;
    name: String;
    temp: number;
    description: String;

    constructor(id: number,name: String,temp: number,description: String){
        this.id = id;
        this.name = name;
        this.temp = temp;
        this.description = description;
    }
}
