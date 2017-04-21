/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
jQuery(function($){
	$.datepicker.regional['tr-TR'] = {
		closeText: 'Tamam',
		prevText: 'Önce',
		nextText: 'Sonra',
		currentText: 'Bugün',
		monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
		'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
		monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
		'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
		dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
		dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çarş', 'Pşb', 'Cum', 'Cmt'],
		dayNamesMin: ['Pz','Pt','Sa','Çş','Pş','Cu','Ct'],
		weekHeader: 'Ha',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['tr-TR']);
});
