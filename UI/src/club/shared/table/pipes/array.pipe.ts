import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cleanArray' })
export class CleanArrayPipe implements PipeTransform {
    transform(value: Array<string | number>, separator: string = ', '): string {
        return value?.join(separator) ?? '';
    }
}
