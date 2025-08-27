import { DataCaptureContext } from "scandit-react-native-datacapture-core"
import Constants from "expo-constants"

/**
 * Create dataCaptureContext with license key from app.config.js
 */
export const createDataCaptureContext = () => {
  const licenseKey = Constants.expoConfig.extra?.SCANDIT_LICENSE_KEY
  return DataCaptureContext.forLicenseKey(licenseKey)
}
