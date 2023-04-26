import { Utils, Device } from '@nativescript/core'
export class android_ios{
  static content: any
  static os: any
  static android:any
  set_android(){
    if (global.android && Device.sdkVersion >= '21') {
      const bm = Utils.android
        .getApplicationContext()
        .getSystemService(android_ios.android.content.Context.BATTERY_SERVICE)
      const batLevel = bm.getIntProperty(android_ios.android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY)
    }

  }
}

