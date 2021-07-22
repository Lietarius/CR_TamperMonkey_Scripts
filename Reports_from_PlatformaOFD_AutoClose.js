// ==UserScript==
// @name         Автоматическое скачивание Отчетов из Платформа ОФД (Автозакрытие страницы)
// @version      3
// @author       Шадрин Сергей
// @match        https://lk.platformaofd.ru/web/noauth/cheque/*
// @grant        window.close
// @updateURL https://lietarius.github.io/CR_TamperMonkey_Scripts/Reports_from_PlatformaOFD_AutoClose.js
// @downloadURL https://lietarius.github.io/CR_TamperMonkey_Scripts/Reports_from_PlatformaOFD_AutoClose.js
// ==/UserScript==

(function () {
	'use strict';
	// Скачивание файла
	function download(filename, text) {
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	// Парсер данных
	function ParseData() {
		let TypeReportName, TypeReport;
		TypeReportName = document.getElementsByClassName("check-headline")[0].innerText; // Название отчета

		// Задаем тип отчета в зависимости от названия 
		if (TypeReportName == "ОТЧЁТ О ЗАКРЫТИИ ФИСКАЛЬНОГО НАКОПИТЕЛЯ") { TypeReport = 2 }
		else if (TypeReportName == "ОТЧЕТ ОБ ИЗМЕНЕНИИ ПАРАМЕТРОВ РЕГИСТРАЦИИ") { TypeReport = 1 }
		else if (TypeReportName == "ОТЧЁТ О РЕГИСТРАЦИИ") { TypeReport = 1 }
		else { TypeReportName = "None" }

		// Если название Отчета есть, то запускаем обработку
		if (TypeReportName != "None") {
			let lines = document.querySelector("div.check").querySelectorAll("div.check-row")
			let lines_array = [];
			// Парсим все строки в массив
			for (let i in lines) {
				if (lines.hasOwnProperty(i)) {
					let line = lines[i];
					let name = line.querySelector("div.check-col.check-col-left").innerText;
					let value = line.querySelector("div.check-col.check-col-right").innerText;
					lines_array.push({ name, value });
				}
			}
			// Массив с данными отчета
			let ReportsData = {};
			ReportsData["DateTime"] = lines_array[0].value; // Дата и время
			ReportsData["TypeOfReport"] = TypeReport; // Тип отчета

			// Заполняем массив с данными отчета
			for (let i = lines_array.length - 1; i >= 0; i--) {
				let line = lines_array[i];
				if (line.name === "N ФД") { ReportsData["FD"] = line.value }
				if (line.name === "ФП") { ReportsData["FPD"] = line.value }
				if (line.name === "Регистрационный номер ККТ") { ReportsData["RNM"] = line.value }
				if (line.name === "N ФН") { ReportsData["FN"] = line.value }
			}
			let JsonString = JSON.stringify(ReportsData);
			download("Report.json", JsonString);
		}
	};

	// Запуск парсера
	ParseData();

	// Закрытие страницы
	window.close()
})();