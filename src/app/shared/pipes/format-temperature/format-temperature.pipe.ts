import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatTemperature'
})
export class FormatTemperaturePipe implements PipeTransform {
    private degreesSymbol = '\u00B0';

    public transform(value: number, scale: string = 'C', decimals: number = 0, label: boolean = true): string {
        let convertedValue: string;

        // Check if value is not a number
        if (isNaN(value)) throw new Error('Input is not a number');

        if (scale === 'F') {
            convertedValue = this.convertKelvinToFahrenheit(value, decimals).toString();
        } else if (scale === 'C') {
            convertedValue = this.convertKelvinToCelsius(value, decimals).toString();
        } else {
            throw new Error('Not a valid scale');
        }

        return label ? this.addDegreesSymbol(convertedValue) : convertedValue;
    }

    private convertKelvinToFahrenheit(value: number, decimals: number): string {
        return Math.fround((value - 273.15) * 9 / 5 + 32).toFixed(decimals);
    }

    private convertKelvinToCelsius(value: number, decimals: number): string {
        return Math.fround(value - 273.15).toFixed(decimals);
    }

    private addDegreesSymbol(value: string): string {
        return value += this.degreesSymbol;
    }
}


