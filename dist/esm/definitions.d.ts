declare module "@capacitor/core" {
    interface PluginRegistry {
        BluetoothPrinter: BluetoothPrinterPlugin;
    }
}
export interface BluetoothPrinterPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
