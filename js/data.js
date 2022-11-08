class Guitarras {
    constructor(marca, nombre, precio, imgSrc, tipo, color, link) {
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
        this.imgSrc = imgSrc
        this.tipo = tipo
        this.color = color
        this.link = link
    }
}

const guitarra1 = new Guitarras(`Greg Bennett`, `Interceptor IC 1`,299990,`https://casamarilla.vtexassets.com/arquivos/ids/217797-800-auto?v=638033930005300000&width=800&height=auto&aspect=true`,`Eléctrica`,`Negro`,`https://www.casamarilla.cl/guitarra-electrica-greg-bennett-interceptor-ic-1/p`);
const guitarra2 = new Guitarras(`Squier`, `Classic Vibe 70' Stratocaster`,599990,`https://casamarilla.vtexassets.com/arquivos/ids/217348-800-auto?v=638033926026930000&width=800&height=auto&aspect=true`,`Eléctrica`,`Negro`,`https://www.casamarilla.cl/guitarra-electrica-squier-classic-vibe-70--stratocaster/p?skuId=1969`);
const guitarra3 = new Guitarras(`Fender`, `Player Stratocaster Arce`,999990,`https://casamarilla.vtexassets.com/arquivos/ids/217276-800-auto?v=638033925403500000&width=800&height=auto&aspect=true`,`Eléctrica`,`Azul`,`https://www.casamarilla.cl/guitarra-electrica-fender-player-stratocaster-arce/p?skuId=1295`);
const guitarra4 = new Guitarras(`Cort`, `CR250-VB Les Paul HH Jatoba`,499990,`https://casamarilla.vtexassets.com/arquivos/ids/215787-800-auto?v=638033913020830000&width=800&height=auto&aspect=true`,`Eléctrica`,`Amarilla`,`https://www.casamarilla.cl/guitarra-electrica-cort-cr250-vb-les-paul-hh-jatoba-/p`);
const guitarra5 = new Guitarras(`Cort`, `CR200 Les Paul BK`,399990,`https://casamarilla.vtexassets.com/arquivos/ids/213728-800-auto?v=638033895831270000&width=800&height=auto&aspect=true`,`Eléctrica`,`Negro`,`https://www.casamarilla.cl/guitarra-electrica-cort-cr200-les-paul-bk/p`);
const guitarra6 = new Guitarras(`Alhambra`, `7FC Concierto`,1449990,`https://casamarilla.vtexassets.com/arquivos/ids/214451-800-auto?v=638033901812400000&width=800&height=auto&aspect=true`,`Acustica`,`Madera`,`https://www.casamarilla.cl/guitarra-clasica-alhambra-7-fc-concierto/p`);
const guitarra7 = new Guitarras(`Palmer`, `PC13 CEQ Standard`,159990,`https://casamarilla.vtexassets.com/arquivos/ids/215461-800-auto?v=638033910091800000&width=800&height=auto&aspect=true`,`Electroacustica`,`Amarilla`, `https://www.casamarilla.cl/guitarra-electroacustica-palmer-pc-13-ceq-standard/p?skuId=581`);
const guitarra8 = new Guitarras(`Palmer`, `PF23 CEQ Marquis`,189990,`https://casamarilla.vtexassets.com/arquivos/ids/217257-800-auto?v=638033925233130000&width=800&height=auto&aspect=true`,`Electroacustica`,`Roja`,`https://www.casamarilla.cl/guitarra-electroacustica-palmer-pf-23-ceq-marquis/p?skuId=589`);

const dataGuitarras = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8] 