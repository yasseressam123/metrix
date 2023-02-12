// export interface Subordinate {
//   ID?:Number,
//   name?:String,
//   responsibleName?:String,
//   responsibleImage?:String,
//   subordinates?:Number
// }
export class Subordinate{
  ID?:Number;
  name?:String;
  responsibleName?:String;
  responsibleImage?:String;
  subordinates?:Number;

  constructor(name?:String, responsibleName?:String, responsibleImage?:String, subordinates?:Number){
    this.name = name || '';
    this.responsibleImage = responsibleImage || '';
    this.responsibleName = responsibleName || '';
    this.subordinates = subordinates || 0;
  }
}