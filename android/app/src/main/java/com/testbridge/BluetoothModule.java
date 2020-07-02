package com.testbridge;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Intent;
import android.bluetooth.BluetoothAdapter;
import android.app.NotificationManager;
import android.app.PendingIntent;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import android.app.Activity;

import androidx.core.app.NotificationCompat;
import android.app.NotificationChannel;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class BluetoothModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private final BluetoothAdapter bAdapter;

    BluetoothModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        bAdapter = BluetoothAdapter.getDefaultAdapter();

        // For sending Events

    }

    // FOR SENDING EVENTS

    private void sendEvent(ReactContext reactContext, String eventName, WritableMap params) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @Override
    public String getName() {
        return "BluetoothModule";
    }

    @ReactMethod
    public void turnOn() {

        final Activity activity = getCurrentActivity();

        Intent eintent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
        activity.startActivityForResult(eintent, 1);
        // Intent intent = new Intent();

        // startActivityForResult(new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE),
        // 1);
        WritableMap params = Arguments.createMap();

        params.putString("bluetooth", "turnOn");
        this.sendEvent(reactContext, "EventReminder", params);

    }

    @ReactMethod
    public void turnOff() {
        bAdapter.disable();

        final Activity activity = getCurrentActivity();

        /*
         * ntent intent = new Intent(activity, AlertDetails.class);
         * intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK |
         * Intent.FLAG_ACTIVITY_CLEAR_TASK); PendingIntent pendingIntent =
         * PendingIntent.getActivity(activity, 0, intent, 0);
         */

        /*
         * NotificationChannel channel = new NotificationChannel("dslkd", "dslkd",
         * NotificationManager.IMPORTANCE_DEFAULT);
         * 
         * NotificationManager notificationManager =
         * activity.getSystemService(NotificationManager.class);
         * notificationManager.createNotificationChannel(channel);
         */

        NotificationCompat.Builder mBuilder = new NotificationCompat.Builder(getReactApplicationContext())
                .setSmallIcon(17301513).setContentTitle("Tutlane Send New Message")
                .setContentText("Hi, Welcome to tutlane tutorial site").setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setAutoCancel(true);

        int mNotificationId = 001;
        NotificationManager notificationManager = (NotificationManager) activity
                .getSystemService(getReactApplicationContext().NOTIFICATION_SERVICE);
        // It will display the notification in notification bar
        notificationManager.notify(45, mBuilder.build());

        WritableMap params = Arguments.createMap();
        params.putString("bluetooth", "turnOff");
        this.sendEvent(reactContext, "EventReminder", params);

    }

}