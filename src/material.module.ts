import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatSidenavModule, MatToolbarModule, 
    MatIconModule, MatExpansionModule, MatFormFieldModule, MatDatepickerModule,
    MatInputModule, MatNativeDateModule, MatCardModule, MatSnackBarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatCardModule,
        MatSnackBarModule

    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatCardModule,
        MatSnackBarModule

    ],
    declarations: []
})
export class MaterialModule { }