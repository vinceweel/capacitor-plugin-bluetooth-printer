
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginBluetoothPrinter'
    s.version = '0.0.1'
    s.summary = 'A bluetooth printer plugin for capacitor.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/vinceweel/capacitor-plugin-bluetooth-printer.git'
    s.author = 'Vince Weel'
    s.source = { :git => 'https://github.com/vinceweel/capacitor-plugin-bluetooth-printer.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end