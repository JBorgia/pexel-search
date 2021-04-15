import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url2Title'
})
export class Url2TitlePipe implements PipeTransform {

  transform(url: string): string {
    const matches = url.match(/(?:https:\/\/www.pexels.com\/photo\/([A-z\-]*)-\d*\/)/);
    if(!matches || !matches.length){return url;}
    return (matches as string[])[1].split('-').join(' ');
  }

}
