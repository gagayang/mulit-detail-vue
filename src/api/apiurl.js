/**
 * Created by admin on 2017/10/18.
 * 接口环境定义
 */
let baseUrl = '';
let appBaseUrl = '';
let noTarget = ''; // 订单：不走代理的接口调用
let pdfServe = '' //pdf预览服务,研发测试预生产pdf都是previewpdf-t,线上是previewpdf
let onlineUrl = '' //pdf下载的url

if (process.env.PATH_TYPE === 'exploitation') {
	//研发环境
	baseUrl = 'http://m-dev.boxuegu.com/portalApi';
	appBaseUrl = 'http://m-dev.boxuegu.com/portalApp';
	noTarget = 'https://app-d1.boxuegu.com';
	pdfServe = 'https://previewpdf-t.boxuegu.com/web/viewer.html?file=';
	onlineUrl = 'https://online-dev.boxuegu.com'
} else if (process.env.PATH_TYPE === 'test') {
	//测试环境
	baseUrl = 'https://m-test.boxuegu.com/portalApi';
	appBaseUrl = 'https://m-test.boxuegu.com/portalApp';
	noTarget = 'https://proxy.boxuegu.com/portal-api-test';
	pdfServe = 'https://previewpdf-t.boxuegu.com/web/viewer.html?file=';
	onlineUrl = 'https://online-test.boxuegu.com'
	
}  else if (process.env.PATH_TYPE === 'test2') {
	//测试环境2
	baseUrl = 'https://m-test2.boxuegu.com/portalApi';
	appBaseUrl = 'https://m-test2.boxuegu.com/portalApp';
	noTarget = 'https://proxy.boxuegu.com/portal-api-test1';
	pdfServe = 'https://previewpdf-t.boxuegu.com/web/viewer.html?file=';
	onlineUrl = 'https://online-test2.boxuegu.com'
	
}else if (process.env.PATH_TYPE === 'ysc') {
	//预生产环境
	baseUrl = 'https://m-uat.boxuegu.com/portalApi';
	appBaseUrl = 'https://m-uat.boxuegu.com/portalApp';
	//noTarget = 'http://172.16.1.35:8258';
	noTarget = 'https://proxy.boxuegu.com/portal-api-pred';
	pdfServe = 'https://previewpdf-t.boxuegu.com/web/viewer.html?file=';
	onlineUrl = 'https://portal-ysc.boxuegu.com'
} else if (process.env.PATH_TYPE === 'online') {
	//生产环境  线上
	baseUrl = 'https://m.boxuegu.com/portalApi';
	appBaseUrl = 'https://m.boxuegu.com/portalApp';
	noTarget = 'https://app.boxuegu.com';
	pdfServe = 'https://previewpdf.boxuegu.com/web/viewer.html?file=';
	onlineUrl = 'https://www.boxuegu.com'
} else {
	//本地环境
	baseUrl = 'http://online-mw.boxuegu.com/portalApi';
	appBaseUrl = 'http://online-mw.boxuegu.com/portalApp';
	noTarget = 'https://app-d.boxuegu.com';
	pdfServe = 'https://previewpdf-t.boxuegu.com/web/viewer.html?file=';
	onlineUrl = 'https://online-dev.boxuegu.com'
}

// console.log(process.env.PATH_TYPE)
// console.log(baseUrl)
// console.log(appBaseUrl)

let apiBaseUrl = baseUrl;
export { apiBaseUrl, appBaseUrl, noTarget, pdfServe, onlineUrl };

