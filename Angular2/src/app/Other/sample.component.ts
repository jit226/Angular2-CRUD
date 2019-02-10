import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
  Your name: {{yourname}}
  `
})
export class SampleComponent  implements OnChanges {

@Input() yourname:string;
ngOnChanges(changesValue:SimpleChanges){
  console.log(changesValue);
}

}
