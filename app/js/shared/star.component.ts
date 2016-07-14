import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

declare var require: any;

@Component({
    selector: 'gs-star',
    template: require("./star.component.html"),
    styleUrls: ['bld/shared/star.component.css']
})
export class StarComponent {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    // runs on changes to directive parameters
    ngOnChanges(): void {
        this.starWidth = (this.rating * 86) / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}