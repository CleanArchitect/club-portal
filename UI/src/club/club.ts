import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Guid } from 'guid-typescript';
import { IKnwuWedstrijd } from './knwu/wedstrijd/aanmelden/aanmelden';
import { CleanResizeDirective, CleanTableColumn, CleanTableColumnDate, CleanTableColumnText, CleanTableModule, ICleanResizeEvent, ICleanTableConfig } from './shared/table';

@Component({
    selector: 'club-portal',
    imports: [RouterModule, MatIconModule, MatToolbarModule, CleanResizeDirective, MatButtonModule, CleanTableModule],
    templateUrl: './club.html',
    styleUrl: './club.scss'
})
export class ClubComponent {
    data: IKnwuWedstrijd[] = [
        { id: Guid.create(), datum: new Date(), naam: 'Wedstrijd 1', categorieen: [] },
        { id: Guid.create(), datum: new Date(), naam: 'Wedstrijd 2', categorieen: [] },
        { id: Guid.create(), datum: new Date(), naam: 'Wedstrijd 3', categorieen: [] },
        { id: Guid.create(), datum: new Date(), naam: 'Wedstrijd 4', categorieen: [] },
    ];

    columns: CleanTableColumn<IKnwuWedstrijd>[] = [
        new CleanTableColumnText(wedstrijd => wedstrijd.id.toString(), 'ID', { click: (wedstrijd) => console.log(wedstrijd), sortable: false }),
        new CleanTableColumnText(wedstrijd => wedstrijd.naam, 'Naam', { width: '50%' }),
        new CleanTableColumnDate(wedstrijd => wedstrijd.datum, 'Datum'),
        // new CleanTableColumnArray(_ => ['henk', 'piet', 'jan', 'kees'], 'Array', 'chips'),
        // new CleanTableColumnBoolean(_ => true, 'Boolean', 'icon', { icons: { trueValue: 'room', falseValue: 'passkey', nullValue: 'settings' } }),
        // new CleanTableColumnNumber(_ => 3.5, 'Number', 'rating')
    ];

    event: ICleanResizeEvent = {} as ICleanResizeEvent;

    config: ICleanTableConfig = {
        enableSettings: true,
        enableColumnMove: true,
        enableColumnResize: true,
        enableExport: true,
        enableFilter: true,
        enableFullscreen: true,
        actions: {
            delete: (wedstrijd: IKnwuWedstrijd) => console.log(wedstrijd)
        },
        pagination: { pageSize: 2, showFirstLastButtons: true, pageSizeOptions: [2, 4] }
    };
}
