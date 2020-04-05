import { WebPlugin } from '@capacitor/core';
import { BluetoothPrinterPlugin } from './definitions';
export declare class BluetoothPrinterWeb extends WebPlugin implements BluetoothPrinterPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const BluetoothPrinter: BluetoothPrinterWeb;
export { BluetoothPrinter };
