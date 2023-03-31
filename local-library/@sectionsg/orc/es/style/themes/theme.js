import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { createMuiTheme } from '@material-ui/core/styles';
import themeConst from '../constants/theme'; // A custom theme for this app

var theme = createMuiTheme(_objectSpread({}, themeConst));
export default theme;