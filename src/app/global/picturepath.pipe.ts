import { Pipe, PipeTransform } from '@angular/core';
import * as global from '../globalConfig';
@Pipe({
  name: 'picturepath'
})
export class PicturepathPipe implements PipeTransform {
  basePath: any = global.s3URL;
  path: any = null;
  transform(value: any, args?: any): any {
    if (args) {
      this.path = this.basePath;
      switch (args) {
        case "users":
          this.path += "userspic/";
          break;
        case "templates":
          this.path += "admin_assets/templates_thumb/";
          break;
        case "certificate":
          this.path += "certificates/";
          break;
        case "cv":
          this.path += "cv/";
          break;
        case "card":
          this.path += "card/";
          break;
        case "cms":
          this.path += "cms_assets/";
          break;
        case "chat":
          this.path += "chat_assets/";
          break;
        case "flag":
          this.path += "admin_assets/flags_thumb/";
          break;
          
      }
      this.path += value;
    }
    return this.path;
  }

}
