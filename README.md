### List of permissions for requesting at run time (introduced in Android 6.0 - API level 23)

#### [Android reference](https://developer.android.com/training/permissions/requesting.html)

telephony/java/android/telephony/TelephonyManager.java

public void enableLocationUpdates()
[CONTROL_LOCATION_UPDATES](https://developer.android.com/reference/android/Manifest.permission.html#CONTROL_LOCATION_UPDATES)

public void enableLocationUpdates(int subId)
[CONTROL_LOCATION_UPDATES](https://developer.android.com/reference/android/Manifest.permission.html#CONTROL_LOCATION_UPDATES)

public void disableLocationUpdates()
[CONTROL_LOCATION_UPDATES](https://developer.android.com/reference/android/Manifest.permission.html#CONTROL_LOCATION_UPDATES)

public List<CellInfo> getAllCellInfo()
[ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)


core/java/android/bluetooth/BluetoothA2dp.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.a2dp.profile.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_PLAYING_STATE_CHANGED = "android.bluetooth.a2dp.profile.action.PLAYING_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disconnect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setPriority(BluetoothDevice device, int priority)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public int getPriority(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isA2dpPlaying(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothA2dpSink.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.a2dp-sink.profile.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_PLAYING_STATE_CHANGED = "android.bluetooth.a2dp-sink.profile.action.PLAYING_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_AUDIO_CONFIG_CHANGED = "android.bluetooth.a2dp-sink.profile.action.AUDIO_CONFIG_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disconnect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public BluetoothAudioConfig getAudioConfig(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean setPriority(BluetoothDevice device, int priority)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public int getPriority(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isA2dpPlaying(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothAdapter.java

public static final String ACTION_STATE_CHANGED = "android.bluetooth.adapter.action.STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_REQUEST_DISCOVERABLE = "android.bluetooth.adapter.action.REQUEST_DISCOVERABLE"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_REQUEST_ENABLE = "android.bluetooth.adapter.action.REQUEST_ENABLE"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_SCAN_MODE_CHANGED = "android.bluetooth.adapter.action.SCAN_MODE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_DISCOVERY_STARTED = "android.bluetooth.adapter.action.DISCOVERY_STARTED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_LOCAL_NAME_CHANGED = "android.bluetooth.adapter.action.LOCAL_NAME_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.adapter.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isEnabled()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getState()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getLeState()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean enable()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disable()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disable(boolean persist)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public String getAddress()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public String getName()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean configHciSnoopLog(boolean enable)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean factoryReset()
[BLUETOOTH_PRIVILEGED](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_PRIVILEGED)

public ParcelUuid[] getUuids()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean setName(String name)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public int getScanMode()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean setScanMode(@ScanMode int mode, int duration)
WRITE_SECURE_SETTINGS

public boolean startDiscovery()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean cancelDiscovery()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean isDiscovering()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public Set<BluetoothDevice> getBondedDevices()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getProfileConnectionState(int profile)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothServerSocket listenUsingRfcommOn(int channel) throws IOException
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public BluetoothServerSocket listenUsingRfcommOn(int channel, boolean mitm, boolean min16DigitPin) throws IOException
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public BluetoothServerSocket listenUsingRfcommWithServiceRecord(String name, UUID uuid) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothServerSocket listenUsingInsecureRfcommWithServiceRecord(String name, UUID uuid) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothServerSocket listenUsingEncryptedRfcommWithServiceRecord( String name, UUID uuid) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public Pair<byte[], byte[]> readOutOfBandData()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean changeApplicationBluetoothState(boolean on, BluetoothStateChangeCallback callback)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean startLeScan(LeScanCallback callback)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean startLeScan(final UUID[] serviceUuids, final LeScanCallback callback)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public void stopLeScan(LeScanCallback callback)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)


core/java/android/bluetooth/BluetoothAvrcpController.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.avrcp-controller.profile.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothDevice.java

public static final String ACTION_FOUND = "android.bluetooth.device.action.FOUND"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)
[ACCESS_COARSE_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_COARSE_LOCATION)

public static final String ACTION_DISAPPEARED = "android.bluetooth.device.action.DISAPPEARED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_CLASS_CHANGED = "android.bluetooth.device.action.CLASS_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_ACL_CONNECTED = "android.bluetooth.device.action.ACL_CONNECTED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_ACL_DISCONNECT_REQUESTED = "android.bluetooth.device.action.ACL_DISCONNECT_REQUESTED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_ACL_DISCONNECTED = "android.bluetooth.device.action.ACL_DISCONNECTED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_NAME_CHANGED = "android.bluetooth.device.action.NAME_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_ALIAS_CHANGED = "android.bluetooth.device.action.ALIAS_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_BOND_STATE_CHANGED = "android.bluetooth.device.action.BOND_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_UUID = "android.bluetooth.device.action.UUID"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_NAME_FAILED = "android.bluetooth.device.action.NAME_FAILED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public String getName()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getType()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean createBond()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean createBond(int transport)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean createBondOutOfBand(int transport, OobData oobData)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setDeviceOutOfBandData(byte[] hash, byte[] randomizer)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean cancelBondProcess()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean removeBond()
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public int getBondState()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isConnected()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isEncrypted()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothClass getBluetoothClass()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public ParcelUuid[] getUuids()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean fetchUuidsWithSdp()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean sdpSearch(ParcelUuid uuid)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean setPin(byte[] pin)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setPairingConfirmation(boolean confirm)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setPhonebookAccessPermission(int value)
[BLUETOOTH_PRIVILEGED](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_PRIVILEGED)

public boolean setMessageAccessPermission(int value)
[BLUETOOTH_PRIVILEGED](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_PRIVILEGED)

public boolean setSimAccessPermission(int value)
[BLUETOOTH_PRIVILEGED](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_PRIVILEGED)

public BluetoothSocket createRfcommSocket(int channel) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothSocket createL2capSocket(int channel) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothSocket createRfcommSocketToServiceRecord(UUID uuid) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothSocket createInsecureRfcommSocketToServiceRecord(UUID uuid) throws IOException
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothSocket createInsecureRfcommSocket(int port) throws IOException
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public BluetoothSocket createScoSocket() throws IOException
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)


core/java/android/bluetooth/BluetoothGatt.java

public void disconnect()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean discoverServices()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public List<BluetoothGattService> getServices()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothGattService getService(UUID uuid)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean readCharacteristic(BluetoothGattCharacteristic characteristic)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean writeCharacteristic(BluetoothGattCharacteristic characteristic)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean readDescriptor(BluetoothGattDescriptor descriptor)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean writeDescriptor(BluetoothGattDescriptor descriptor)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean beginReliableWrite()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean executeReliableWrite()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public void abortReliableWrite()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean setCharacteristicNotification(BluetoothGattCharacteristic characteristic, boolean enable)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean readRemoteRssi()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean requestMtu(int mtu)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothGattCharacteristic.java

public BluetoothGattCharacteristic(UUID uuid, int properties, int permissions)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean addDescriptor(BluetoothGattDescriptor descriptor)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothGattDescriptor.java

public BluetoothGattDescriptor(UUID uuid, int permissions)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothGattDescriptor(UUID uuid, int instance, int permissions)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getInstanceId()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothGattServer.java

public boolean connect(BluetoothDevice device, boolean autoConnect)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public void cancelConnection(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean sendResponse(BluetoothDevice device, int requestId, int status, int offset, byte[] value)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean notifyCharacteristicChanged(BluetoothDevice device, BluetoothGattCharacteristic characteristic, boolean confirm)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean addService(BluetoothGattService service)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean removeService(BluetoothGattService service)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public void clearServices()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public List<BluetoothGattService> getServices()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public BluetoothGattService getService(UUID uuid)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothGattService.java

public BluetoothGattService(UUID uuid, int serviceType)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean addService(BluetoothGattService service)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean addCharacteristic(BluetoothGattCharacteristic characteristic)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothHeadset.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.headset.profile.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_AUDIO_STATE_CHANGED = "android.bluetooth.headset.profile.action.AUDIO_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public static final String ACTION_VENDOR_SPECIFIC_HEADSET_EVENT = "android.bluetooth.headset.action.VENDOR_SPECIFIC_HEADSET_EVENT"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disconnect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setPriority(BluetoothDevice device, int priority)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public int getPriority(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean startVoiceRecognition(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean stopVoiceRecognition(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isAudioConnected(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean isAudioOn()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean sendVendorSpecificResultCode(BluetoothDevice device, String command, String arg)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothHealth.java

public boolean registerSinkAppConfiguration(String name, int dataType, BluetoothHealthCallback callback)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean registerAppConfiguration(String name, int dataType, int role, int channelType, BluetoothHealthCallback callback)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean unregisterAppConfiguration(BluetoothHealthAppConfiguration config)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connectChannelToSource(BluetoothDevice device, BluetoothHealthAppConfiguration config)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connectChannelToSink(BluetoothDevice device, BluetoothHealthAppConfiguration config, int channelType)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean disconnectChannel(BluetoothDevice device, BluetoothHealthAppConfiguration config, int channelId)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public ParcelFileDescriptor getMainChannelFd(BluetoothDevice device, BluetoothHealthAppConfiguration config)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getConnectionState(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public List<BluetoothDevice> getConnectedDevices()
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public List<BluetoothDevice> getDevicesMatchingConnectionStates(int[] states)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothInputDevice.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.input.profile.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disconnect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setPriority(BluetoothDevice device, int priority)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public int getPriority(BluetoothDevice device)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean virtualUnplug(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean getProtocolMode(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setProtocolMode(BluetoothDevice device, int protocolMode)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean getReport(BluetoothDevice device, byte reportType, byte reportId, int bufferSize)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean setReport(BluetoothDevice device, byte reportType, String report)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean sendData(BluetoothDevice device, String report)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)


core/java/android/bluetooth/BluetoothManager.java

public int getConnectionState(BluetoothDevice device, int profile)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public List<BluetoothDevice> getConnectedDevices(int profile)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public List<BluetoothDevice> getDevicesMatchingConnectionStates(int profile, int[] states)
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothPan.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.pan.profile.action.CONNECTION_STATE_CHANGED"; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public boolean connect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)

public boolean disconnect(BluetoothDevice device)
[BLUETOOTH_ADMIN](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH_ADMIN)


core/java/android/bluetooth/BluetoothProfile.java

public List<BluetoothDevice> getConnectedDevices(); 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)

public int getConnectionState(BluetoothDevice device); 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/bluetooth/BluetoothSap.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.sap.profile.action.CONNECTION_STATE_CHANGED"; private IBluetoothSap mService; private final Context mContext; private ServiceListener mServiceListener; private BluetoothAdapter mAdapter; 
[BLUETOOTH](https://developer.android.com/reference/android/Manifest.permission.html#BLUETOOTH)


core/java/android/nfc/tech/Ndef.java

public boolean isWritable()
[NFC](https://developer.android.com/reference/android/Manifest.permission.html#NFC)


core/java/android/net/VpnService.java

public static void prepareAndAuthorize(Context context)
[CONTROL_VPN](https://developer.android.com/reference/android/Manifest.permission.html#CONTROL_VPN)


core/java/android/hardware/hdmi/HdmiControlManager.java

public static final String ACTION_OSD_MESSAGE = "android.hardware.hdmi.action.OSD_MESSAGE"; 
[HDMI_CEC](https://developer.android.com/reference/android/Manifest.permission.html#HDMI_CEC)


