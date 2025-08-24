/**
 * @format
 */
import { registerRootComponent } from 'expo';
import App from './app/App'; // ← default export に変更してある前提！

// ログ出力だけならここで OK
import Constants from 'expo-constants';
console.log('Scandit License Key:', Constants.expoConfig.extra?.SCANDIT_LICENSE_KEY);

// Expo Dev Client は 'main' を探す
registerRootComponent(App);
