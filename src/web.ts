import { WebPlugin } from '@capacitor/core';
import { BluetoothPrinterPlugin } from './definitions';

export class BluetoothPrinterWeb extends WebPlugin implements BluetoothPrinterPlugin {
  constructor() {
    super({
      name: 'BluetoothPrinter',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const BluetoothPrinter = new BluetoothPrinterWeb();

export { BluetoothPrinter };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BluetoothPrinter);
