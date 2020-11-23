export class Link{
    titulo:string;
    link:string;
    votos:number;

    constructor(titulo:string, link:string, votos?:number){
        this.titulo = titulo;
        this.link = link;
        //con las || decimos que si no le pasa nada le coloca 0
        this.votos = votos || 0;
    }

    voteUp(){
        this.votos ++;
    }
    voteDown(){
        this.votos --;
    }
}