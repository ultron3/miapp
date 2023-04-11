import { Utils, Device } from '@nativescript/core'

if (global.isAndroid && Device.sdkVersion >= '21') {
  const bm = Utils.android
    .getApplicationContext()
    .getSystemService(android.content.Context.BATTERY_SERVICE)
  const batLevel = bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY)
}
