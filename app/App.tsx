import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, NativeModules } from 'react-native';
import {
  DataCaptureContext,
  Camera,
  CameraSettings,
  DataCaptureView,
  RectangularViewfinder,
  VideoResolution,
} from 'scandit-react-native-datacapture-core';
import {
  BarcodeCapture,
  BarcodeCaptureSettings,
  BarcodeCaptureOverlay,
  Symbology,
  BarcodeCaptureSession,
} from 'scandit-react-native-datacapture-barcode';
import Constants from 'expo-constants';

export default function App() {
  const [context, setContext] = useState<DataCaptureContext | null>(null);
  const [view, setView] = useState<DataCaptureView | null>(null);
  const [barcodeCapture, setBarcodeCapture] = useState<BarcodeCapture | null>(null);
  const [scannedCode, setScannedCode] = useState<string | null>(null);

  useEffect(() => {
    // ✅ ネイティブモジュールの存在確認ログ
    if (NativeModules.ScanditCaptureCore) {
      console.log('✅ ScanditCaptureCore is available');
    } else {
      console.warn('❌ ScanditCaptureCore is undefined');
    }

    const licenseKey = Constants.expoConfig?.extra?.SCANDIT_LICENSE_KEY;
    if (!licenseKey) {
      console.warn('⚠️ SCANDIT_LICENSE_KEY not found');
      return;
    }

    const dataCaptureContext = DataCaptureContext.forLicenseKey(licenseKey);

    const cameraSettings = new CameraSettings();
    cameraSettings.preferredResolution = VideoResolution.FullHD;

    const camera = Camera.default;
    if (camera) {
      dataCaptureContext.setFrameSource(camera);
      camera.applySettings(cameraSettings);
      camera.switchToDesiredState(Camera.State.On);
    }

    const barcodeSettings = new BarcodeCaptureSettings();
    barcodeSettings.enableSymbologies([
      Symbology.EAN13UPCA,
      Symbology.Code128,
      Symbology.QR,
    ]);

    const barcodeCaptureMode = BarcodeCapture.forDataCaptureContext(dataCaptureContext, barcodeSettings);

    barcodeCaptureMode.addListener({
      didScan: (_, session: BarcodeCaptureSession) => {
        const barcode = session.newlyRecognizedBarcodes[0];
        if (barcode?.data) {
          setScannedCode(barcode.data);
        }
      },
    });

    const captureView = DataCaptureView.forContext(dataCaptureContext);
    const overlay = BarcodeCaptureOverlay.withBarcodeCaptureForView(barcodeCaptureMode, captureView);
    overlay.viewfinder = new RectangularViewfinder();

    setContext(dataCaptureContext);
    setView(captureView);
    setBarcodeCapture(barcodeCaptureMode);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', marginTop: 40 }}>📦 アプリは起動しています</Text>
      {view && <View style={styles.viewContainer}>{view}</View>}
      <Text style={styles.resultText}>
        {scannedCode ? `Scanned: ${scannedCode}` : 'Scan a barcode'}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  viewContainer: { flex: 1 },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 16,
  },
});