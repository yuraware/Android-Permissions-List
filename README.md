### List of permissions for requesting at run time (introduced in Android 6.0 - API level 23)

#### [Android reference](https://developer.android.com/training/permissions/requesting.html)

telephony/java/android/telephony/TelephonyManager.java

public void enableLocationUpdates()
[CONTROL_LOCATION_UPDATES](https://developer.android.com/reference/android/Manifest.permission.html#CONTROL_LOCATION_UPDATES)

public void enableLocationUpdates(int subId)
CONTROL_LOCATION_UPDATES

public void disableLocationUpdates()
CONTROL_LOCATION_UPDATES

public List<CellInfo> getAllCellInfo()
ACCESS_COARSE_LOCATION


core/java/android/bluetooth/BluetoothA2dp.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.a2dp.profile.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_PLAYING_STATE_CHANGED = "android.bluetooth.a2dp.profile.action.PLAYING_STATE_CHANGED"; 
BLUETOOTH

public boolean connect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean disconnect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean setPriority(BluetoothDevice device, int priority)
BLUETOOTH_ADMIN

public int getPriority(BluetoothDevice device)
BLUETOOTH

public boolean isA2dpPlaying(BluetoothDevice device)
BLUETOOTH


core/java/android/bluetooth/BluetoothA2dpSink.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.a2dp-sink.profile.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_PLAYING_STATE_CHANGED = "android.bluetooth.a2dp-sink.profile.action.PLAYING_STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_AUDIO_CONFIG_CHANGED = "android.bluetooth.a2dp-sink.profile.action.AUDIO_CONFIG_CHANGED"; 
BLUETOOTH

public boolean connect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean disconnect(BluetoothDevice device)
BLUETOOTH_ADMIN

public BluetoothAudioConfig getAudioConfig(BluetoothDevice device)
BLUETOOTH

public boolean setPriority(BluetoothDevice device, int priority)
BLUETOOTH_ADMIN

public int getPriority(BluetoothDevice device)
BLUETOOTH

public boolean isA2dpPlaying(BluetoothDevice device)
BLUETOOTH


core/java/android/bluetooth/BluetoothAdapter.java

public static final String ACTION_STATE_CHANGED = "android.bluetooth.adapter.action.STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_REQUEST_DISCOVERABLE = "android.bluetooth.adapter.action.REQUEST_DISCOVERABLE"; 
BLUETOOTH

public static final String ACTION_REQUEST_ENABLE = "android.bluetooth.adapter.action.REQUEST_ENABLE"; 
BLUETOOTH

public static final String ACTION_SCAN_MODE_CHANGED = "android.bluetooth.adapter.action.SCAN_MODE_CHANGED"; 
BLUETOOTH

public static final String ACTION_DISCOVERY_STARTED = "android.bluetooth.adapter.action.DISCOVERY_STARTED"; 
BLUETOOTH

public static final String ACTION_LOCAL_NAME_CHANGED = "android.bluetooth.adapter.action.LOCAL_NAME_CHANGED"; 
BLUETOOTH

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.adapter.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH

public boolean isEnabled()
BLUETOOTH

public int getState()
BLUETOOTH

public int getLeState()
BLUETOOTH

public boolean enable()
BLUETOOTH_ADMIN

public boolean disable()
BLUETOOTH_ADMIN

public boolean disable(boolean persist)
BLUETOOTH_ADMIN

public String getAddress()
BLUETOOTH

public String getName()
BLUETOOTH

public boolean configHciSnoopLog(boolean enable)
BLUETOOTH_ADMIN

public boolean factoryReset()
BLUETOOTH_PRIVILEGED

public ParcelUuid[] getUuids()
BLUETOOTH

public boolean setName(String name)
BLUETOOTH_ADMIN

public int getScanMode()
BLUETOOTH

public boolean setScanMode(@ScanMode int mode, int duration)
WRITE_SECURE_SETTINGS

public boolean startDiscovery()
BLUETOOTH_ADMIN

public boolean cancelDiscovery()
BLUETOOTH_ADMIN

public boolean isDiscovering()
BLUETOOTH

public Set<BluetoothDevice> getBondedDevices()
BLUETOOTH

public int getProfileConnectionState(int profile)
BLUETOOTH

public BluetoothServerSocket listenUsingRfcommOn(int channel) throws IOException
BLUETOOTH_ADMIN

public BluetoothServerSocket listenUsingRfcommOn(int channel, boolean mitm, boolean min16DigitPin) throws IOException
BLUETOOTH_ADMIN

public BluetoothServerSocket listenUsingRfcommWithServiceRecord(String name, UUID uuid) throws IOException
BLUETOOTH

public BluetoothServerSocket listenUsingInsecureRfcommWithServiceRecord(String name, UUID uuid) throws IOException
BLUETOOTH

public BluetoothServerSocket listenUsingEncryptedRfcommWithServiceRecord( String name, UUID uuid) throws IOException
BLUETOOTH

public Pair<byte[], byte[]> readOutOfBandData()
BLUETOOTH

public boolean changeApplicationBluetoothState(boolean on, BluetoothStateChangeCallback callback)
BLUETOOTH

public boolean startLeScan(LeScanCallback callback)
BLUETOOTH_ADMIN

public boolean startLeScan(final UUID[] serviceUuids, final LeScanCallback callback)
BLUETOOTH_ADMIN

public void stopLeScan(LeScanCallback callback)
BLUETOOTH_ADMIN


core/java/android/bluetooth/BluetoothAvrcpController.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.avrcp-controller.profile.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH


core/java/android/bluetooth/BluetoothDevice.java

public static final String ACTION_FOUND = "android.bluetooth.device.action.FOUND"; 
BLUETOOTH
ACCESS_COARSE_LOCATION

public static final String ACTION_DISAPPEARED = "android.bluetooth.device.action.DISAPPEARED"; 
BLUETOOTH

public static final String ACTION_CLASS_CHANGED = "android.bluetooth.device.action.CLASS_CHANGED"; 
BLUETOOTH

public static final String ACTION_ACL_CONNECTED = "android.bluetooth.device.action.ACL_CONNECTED"; 
BLUETOOTH

public static final String ACTION_ACL_DISCONNECT_REQUESTED = "android.bluetooth.device.action.ACL_DISCONNECT_REQUESTED"; 
BLUETOOTH

public static final String ACTION_ACL_DISCONNECTED = "android.bluetooth.device.action.ACL_DISCONNECTED"; 
BLUETOOTH

public static final String ACTION_NAME_CHANGED = "android.bluetooth.device.action.NAME_CHANGED"; 
BLUETOOTH

public static final String ACTION_ALIAS_CHANGED = "android.bluetooth.device.action.ALIAS_CHANGED"; 
BLUETOOTH

public static final String ACTION_BOND_STATE_CHANGED = "android.bluetooth.device.action.BOND_STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_UUID = "android.bluetooth.device.action.UUID"; 
BLUETOOTH

public static final String ACTION_NAME_FAILED = "android.bluetooth.device.action.NAME_FAILED"; 
BLUETOOTH

public String getName()
BLUETOOTH

public int getType()
BLUETOOTH

public boolean createBond()
BLUETOOTH_ADMIN

public boolean createBond(int transport)
BLUETOOTH_ADMIN

public boolean createBondOutOfBand(int transport, OobData oobData)
BLUETOOTH_ADMIN

public boolean setDeviceOutOfBandData(byte[] hash, byte[] randomizer)
BLUETOOTH_ADMIN

public boolean cancelBondProcess()
BLUETOOTH_ADMIN

public boolean removeBond()
BLUETOOTH_ADMIN

public int getBondState()
BLUETOOTH

public boolean isConnected()
BLUETOOTH

public boolean isEncrypted()
BLUETOOTH

public BluetoothClass getBluetoothClass()
BLUETOOTH

public ParcelUuid[] getUuids()
BLUETOOTH

public boolean fetchUuidsWithSdp()
BLUETOOTH

public boolean sdpSearch(ParcelUuid uuid)
BLUETOOTH

public boolean setPin(byte[] pin)
BLUETOOTH_ADMIN

public boolean setPairingConfirmation(boolean confirm)
BLUETOOTH_ADMIN

public boolean setPhonebookAccessPermission(int value)
BLUETOOTH_PRIVILEGED

public boolean setMessageAccessPermission(int value)
BLUETOOTH_PRIVILEGED

public boolean setSimAccessPermission(int value)
BLUETOOTH_PRIVILEGED

public BluetoothSocket createRfcommSocket(int channel) throws IOException
BLUETOOTH

public BluetoothSocket createL2capSocket(int channel) throws IOException
BLUETOOTH

public BluetoothSocket createRfcommSocketToServiceRecord(UUID uuid) throws IOException
BLUETOOTH

public BluetoothSocket createInsecureRfcommSocketToServiceRecord(UUID uuid) throws IOException
BLUETOOTH

public BluetoothSocket createInsecureRfcommSocket(int port) throws IOException
BLUETOOTH_ADMIN

public BluetoothSocket createScoSocket() throws IOException
BLUETOOTH_ADMIN


core/java/android/bluetooth/BluetoothGatt.java

public void disconnect()
BLUETOOTH

public boolean discoverServices()
BLUETOOTH

public List<BluetoothGattService> getServices()
BLUETOOTH

public BluetoothGattService getService(UUID uuid)
BLUETOOTH

public boolean readCharacteristic(BluetoothGattCharacteristic characteristic)
BLUETOOTH

public boolean writeCharacteristic(BluetoothGattCharacteristic characteristic)
BLUETOOTH

public boolean readDescriptor(BluetoothGattDescriptor descriptor)
BLUETOOTH

public boolean writeDescriptor(BluetoothGattDescriptor descriptor)
BLUETOOTH

public boolean beginReliableWrite()
BLUETOOTH

public boolean executeReliableWrite()
BLUETOOTH

public void abortReliableWrite()
BLUETOOTH

public boolean setCharacteristicNotification(BluetoothGattCharacteristic characteristic, boolean enable)
BLUETOOTH

public boolean readRemoteRssi()
BLUETOOTH

public boolean requestMtu(int mtu)
BLUETOOTH


core/java/android/bluetooth/BluetoothGattCharacteristic.java

public BluetoothGattCharacteristic(UUID uuid, int properties, int permissions)
BLUETOOTH

public boolean addDescriptor(BluetoothGattDescriptor descriptor)
BLUETOOTH


core/java/android/bluetooth/BluetoothGattDescriptor.java

public BluetoothGattDescriptor(UUID uuid, int permissions)
BLUETOOTH

public BluetoothGattDescriptor(UUID uuid, int instance, int permissions)
BLUETOOTH

public int getInstanceId()
BLUETOOTH


core/java/android/bluetooth/BluetoothGattServer.java

public boolean connect(BluetoothDevice device, boolean autoConnect)
BLUETOOTH

public void cancelConnection(BluetoothDevice device)
BLUETOOTH

public boolean sendResponse(BluetoothDevice device, int requestId, int status, int offset, byte[] value)
BLUETOOTH

public boolean notifyCharacteristicChanged(BluetoothDevice device, BluetoothGattCharacteristic characteristic, boolean confirm)
BLUETOOTH

public boolean addService(BluetoothGattService service)
BLUETOOTH

public boolean removeService(BluetoothGattService service)
BLUETOOTH

public void clearServices()
BLUETOOTH

public List<BluetoothGattService> getServices()
BLUETOOTH

public BluetoothGattService getService(UUID uuid)
BLUETOOTH


core/java/android/bluetooth/BluetoothGattService.java

public BluetoothGattService(UUID uuid, int serviceType)
BLUETOOTH

public boolean addService(BluetoothGattService service)
BLUETOOTH

public boolean addCharacteristic(BluetoothGattCharacteristic characteristic)
BLUETOOTH


core/java/android/bluetooth/BluetoothHeadset.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.headset.profile.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_AUDIO_STATE_CHANGED = "android.bluetooth.headset.profile.action.AUDIO_STATE_CHANGED"; 
BLUETOOTH

public static final String ACTION_VENDOR_SPECIFIC_HEADSET_EVENT = "android.bluetooth.headset.action.VENDOR_SPECIFIC_HEADSET_EVENT"; 
BLUETOOTH

public boolean connect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean disconnect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean setPriority(BluetoothDevice device, int priority)
BLUETOOTH_ADMIN

public int getPriority(BluetoothDevice device)
BLUETOOTH

public boolean startVoiceRecognition(BluetoothDevice device)
BLUETOOTH

public boolean stopVoiceRecognition(BluetoothDevice device)
BLUETOOTH

public boolean isAudioConnected(BluetoothDevice device)
BLUETOOTH

public boolean isAudioOn()
BLUETOOTH

public boolean sendVendorSpecificResultCode(BluetoothDevice device, String command, String arg)
BLUETOOTH


core/java/android/bluetooth/BluetoothHealth.java

public boolean registerSinkAppConfiguration(String name, int dataType, BluetoothHealthCallback callback)
BLUETOOTH

public boolean registerAppConfiguration(String name, int dataType, int role, int channelType, BluetoothHealthCallback callback)
BLUETOOTH

public boolean unregisterAppConfiguration(BluetoothHealthAppConfiguration config)
BLUETOOTH

public boolean connectChannelToSource(BluetoothDevice device, BluetoothHealthAppConfiguration config)
BLUETOOTH

public boolean connectChannelToSink(BluetoothDevice device, BluetoothHealthAppConfiguration config, int channelType)
BLUETOOTH

public boolean disconnectChannel(BluetoothDevice device, BluetoothHealthAppConfiguration config, int channelId)
BLUETOOTH

public ParcelFileDescriptor getMainChannelFd(BluetoothDevice device, BluetoothHealthAppConfiguration config)
BLUETOOTH

public int getConnectionState(BluetoothDevice device)
BLUETOOTH

public List<BluetoothDevice> getConnectedDevices()
BLUETOOTH

public List<BluetoothDevice> getDevicesMatchingConnectionStates(int[] states)
BLUETOOTH


core/java/android/bluetooth/BluetoothInputDevice.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.input.profile.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH

public boolean connect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean disconnect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean setPriority(BluetoothDevice device, int priority)
BLUETOOTH_ADMIN

public int getPriority(BluetoothDevice device)
BLUETOOTH

public boolean virtualUnplug(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean getProtocolMode(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean setProtocolMode(BluetoothDevice device, int protocolMode)
BLUETOOTH_ADMIN

public boolean getReport(BluetoothDevice device, byte reportType, byte reportId, int bufferSize)
BLUETOOTH_ADMIN

public boolean setReport(BluetoothDevice device, byte reportType, String report)
BLUETOOTH_ADMIN

public boolean sendData(BluetoothDevice device, String report)
BLUETOOTH_ADMIN


core/java/android/bluetooth/BluetoothManager.java

public int getConnectionState(BluetoothDevice device, int profile)
BLUETOOTH

public List<BluetoothDevice> getConnectedDevices(int profile)
BLUETOOTH

public List<BluetoothDevice> getDevicesMatchingConnectionStates(int profile, int[] states)
BLUETOOTH


core/java/android/bluetooth/BluetoothPan.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.pan.profile.action.CONNECTION_STATE_CHANGED"; 
BLUETOOTH

public boolean connect(BluetoothDevice device)
BLUETOOTH_ADMIN

public boolean disconnect(BluetoothDevice device)
BLUETOOTH_ADMIN


core/java/android/bluetooth/BluetoothProfile.java

public List<BluetoothDevice> getConnectedDevices(); 
BLUETOOTH

public int getConnectionState(BluetoothDevice device); 
BLUETOOTH


core/java/android/bluetooth/BluetoothSap.java

public static final String ACTION_CONNECTION_STATE_CHANGED = "android.bluetooth.sap.profile.action.CONNECTION_STATE_CHANGED"; private IBluetoothSap mService; private final Context mContext; private ServiceListener mServiceListener; private BluetoothAdapter mAdapter; 
BLUETOOTH


core/java/android/nfc/tech/Ndef.java

public boolean isWritable()
NFC


core/java/android/net/VpnService.java

public static void prepareAndAuthorize(Context context)
CONTROL_VPN


core/java/android/hardware/hdmi/HdmiControlManager.java

public static final String ACTION_OSD_MESSAGE = "android.hardware.hdmi.action.OSD_MESSAGE"; 
HDMI_CEC

