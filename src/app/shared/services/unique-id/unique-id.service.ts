import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {

  public generateUniqueIdWithPrefix(prefiix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prefiix}-${uniqueId}`;
  }

  private generateUniqueId(): string {
    return uuid.v1();
  }
}
