import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usernameModifier',
})
export class UsernameModifierPipe implements PipeTransform {
  transform(inputText: string, currentUsername: string): string {
    return `${inputText} (${currentUsername})`;
  }
}
