import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class StoreUtilFormattersModule {}

export function formatRating(rating: number) {
  return `${Math.round(rating * 100) / 10} / 10`;
}