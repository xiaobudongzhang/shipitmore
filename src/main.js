import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Highcharts from 'highcharts'
import VueHighcharts from 'vue-highcharts'
import DrillDown from 'highcharts/modules/drilldown'
import Highcharts3d from 'highcharts/highcharts-3d';
import Exporting from 'highcharts/modules/exporting';
//import jQuery from 'jquery';

import 'semantic-ui/dist/semantic.css';
//import 'highcharts/css/highcharts.css';


//import DatetimePicker from 'bootstrap-datetime-picker';

import 'bootstrap/dist/css/bootstrap.css'
import store from './store';
var VueCookie = require('vue-cookie');
//import xlsx from 'xlsx'
//import tableExport from 'tableexport'
//require('xlsx')
//require('../static/dist/js/FileSaver.js');

//import 'script-loader!../static/dist/js/FileSaver.js';
//import 'script-loader!../static/dist/js/xlsx.core.js';
//import 'script-loader!../static/dist/js/tableexport.js';

///js/bootstrap-datetimepicker.js
require('bootstrap-datetime-picker')
require('bootstrap-datetime-picker/js/locales/bootstrap-datetimepicker.zh-CN.js');



require('../static/dist/css/datetimepicker.css');
require('../static/dist/js/semantic.js');


//require('../static/dist/js/FileSaver.js');
//require.ensure(['../static/dist/js/xlsx.core.js'], function(require) {
//            require('../static/dist/js/xlsx.core.js');
//            handleXlsFile(file, window.XLSX);
//}, 'js-xlsx');
//require('../static/dist/js/xlsx.core.js');
//require('../static/dist/js/tableexport.js');
//require('xlsx')

import App from './App';
import routes from './router_config.js';



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueHighcharts);
Vue.use(VueCookie);
//require('vue-semantic')vue@1.*
//Vue.use(VueSemantic);

//Highcharts pending
DrillDown(Highcharts);
Highcharts3d(Highcharts);
Exporting(Highcharts);


Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  f12: 123,
  mediaPlayPause: 179,
  up: [38, 87]
}


const router = new VueRouter({
  routes// （缩写）相当于 routes: routes
})


const app = new Vue({
  router,
  el: '#app',
  store,
  template: '<App/>',
  components: {App}
});
// router.push('/seller');

