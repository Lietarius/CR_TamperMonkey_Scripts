// ==UserScript==
// @name         Автоматическое скачивание Отчетов из Такскома
// @version      8
// @author       Шадрин Сергей
// @match        https://lk-ofd.taxcom.ru/
// @match        https://lk-ofd.taxcom.ru/%23
// @grant        none
// @updateURL http://cs-ws174197:82/TamperMonkey_Scripts/Reports_from_Taxcom.js
// @downloadURL http://cs-ws174197:82/TamperMonkey_Scripts/Reports_from_Taxcom.js
// ==/UserScript==

(function () {
	'use strict';

	// Скачивание файла
	// filename: Название файла
	// text: Текст в формате JSON
	function download(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	// Парсер данных открытого отчета
	// 1 - Отчет о регистрации или Отчет о перерегистрации
	// 2 - Отчет о закрытии архива ФН
	function ParseData(TypeReport) {

		// Все данные отчета в массив
		let lines = document.querySelector("table.receipt-footer").querySelectorAll("table.receipt-row-2")
		let lines_array = [];
		for (let i in lines) {
			if (lines.hasOwnProperty(i)) {
				let line = lines[i];
				let left = line.querySelector("td.receipt-col1")
				let right = line.querySelector("td.receipt-col2")
				lines_array.push({
					left: left == null ? "" : left.innerText.trim(),
					right: right == null ? "" : right.innerText.trim(),
				});
			}
		}

		// Дату обрабатываем отдельно
		let lineDateTime = document.querySelector("table.receipt-header2").querySelector("td.receipt-col2").innerText;

		// Формируем массив в данными Отчёта
		var ReportsData = {};
		for (let i = lines_array.length - 1; i >= 0; i--) {
			let line = lines_array[i];
			if (line.left == "№ ФД:") { ReportsData.FD = line.right }
			if (line.left == "ФП") { ReportsData.FPD = line.right }
			if (line.left == "№ ФН:") { ReportsData.FN = line.right }
			if (line.left == "№ ККТ:") { ReportsData.RNM = (line.right).replace(" ", "") }
		}
		ReportsData.DateTime = lineDateTime.trim(); // Добавляем дату
		ReportsData.TypeOfReport = TypeReport // Добавляем тип Отчёта

		let JsonString = JSON.stringify(ReportsData); // Преобразование массива в текст
		download("Report.json", JsonString); // Скачиваем отчет
	}

	// Парсер заголовка документа
	function ParseHeader() {
		var Header = document.querySelectorAll("span.receipt-subtitle") // Весь заголовок в массив
		// Построчная обработка заголовка
		Header.forEach(h => {
			let ReportName = h.innerText.trim();
			switch (ReportName) {
				case 'Отчет о закрытии фискального накопителя': ParseData(2); break;
				case 'Отчет об изменении параметров регистрации': ParseData(1); break;
				case 'Отчет о регистрации': ParseData(1); break;
			}
		})
	}

	// Конфигруция обсервера
	var observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			try {
				// Если добавляется документ (Отчет, чек и т.п), то запускается Парсер заголовка
				if (mutation.type === 'childList' && mutation.addedNodes[0].className === 'receipt') { ParseHeader(); }
			} catch (e) { }
		});
	});
	var config = { attributes: true, childList: true, characterData: true }
	
	// Функция старта обсервера
	function StartObserver() {
		try {
			var target = document.querySelector("div.modal-dialog__content") // Мониторим элемент, куда добавляется чек
			observer.observe(target, config);
		} catch (e) {
			setTimeout(StartObserver, 100)
		};
	}

	StartObserver(); // Запуск обсервера

})();