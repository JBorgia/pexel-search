import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '@models/pexel-response';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(items: Photo[] | null, ...args: string[]): Photo[] | null {
    return items && args[0] ? items.filter(item => item.avg_color.match(new RegExp(args[0], 'i'))) : items;
  }

}
