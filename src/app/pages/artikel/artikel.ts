export class Artikel {
      constructor(
        public autor:string,
        public titel: string, 
        public jahr:Date,
        public erschien:string,
        public hrsg:string,
        public seiten:string,
        public verlag:string,
    ) {}
}