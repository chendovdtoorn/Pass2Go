import { Navigation } from 'react-native-navigation';
import App from './src/App';

export default function registerScreens() {
    Navigation.registerComponent('App', () => App);
}