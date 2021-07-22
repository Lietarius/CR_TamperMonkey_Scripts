// ==UserScript==
// @name         Кнопки для ЛК ФНС
// @version      14
// @author       Шадрин Сергей
// @match        https://lkul.nalog.ru/kkt/
// @match        https://lkul.nalog.ru/kkt/index
// @match        https://lkul.nalog.ru/kkt/index/index
// @grant        none
// @updateURL http://cs-ws174197:82/TamperMonkey_Scripts/Buttons_LK_FNS.js
// @downloadURL http://cs-ws174197:82/TamperMonkey_Scripts/Buttons_LK_FNS.js
// ==/UserScript==


(function () {
	'use strict';

	// Токен сессии в ЛК ФНС
	var SessionToken = token.token;

	// Формирование кнопок для отрисовки
	function AddMenuToSite() {

		let CoreNode = document.getElementById("extJsElement");
		let MyDiv = document.createElement("div");

		// Первая строка
		let MyDiv_TR = document.createElement("tr");
		let MyDiv_TD_InfoDownload = document.createElement("td");
		let MyDiv_TD_Spc1 = document.createElement("td");
		let MyDiv_TD_KR = document.createElement("td");
		let MyDiv_TD_Spc2 = document.createElement("td");
		let MyDiv_TD_All = document.createElement("td");
		let MyDiv_TD_Spc3 = document.createElement("td");
		let MyDiv_TD_Info = document.createElement("td");
		let MyDiv_TD_Spc4 = document.createElement("td");
		let MyDiv_TD_XML = document.createElement("td");

		// Вторая строка
		let MyDiv_TR2 = document.createElement("tr");
		let MyDiv_TD2_Spc0 = document.createElement("td");
		let MyDiv_TD2_Spc1 = document.createElement("td");
		let MyDiv_TD2_KR_ALL = document.createElement("td");
		let MyDiv_TD2_TableToCSV = document.createElement("td");
		let MyDiv_TD2_XML_ALL = document.createElement("td");
		let MyDiv_TD2_Spc3 = document.createElement("td");
		let MyDiv_TD2_CheckBox = document.createElement("td");
		let MyDiv_TD2_XML_by_KKTList = document.createElement("td");
		let MyDiv_TD2_Spc5 = document.createElement("td");


		let Div_file_input = document.createElement("input")
		let Div_KKTList_Content = document.createElement("div")

		MyDiv.id = "MyCustomDiv";
		MyDiv.setAttribute("style", "margin: auto; height: 70px; width: 960px; padding-top: 10px;");

		CoreNode.insertBefore(MyDiv, CoreNode.childNodes[0]);

		// Вставка первой строки в таблицу
		MyDiv_TR.appendChild(MyDiv_TD_InfoDownload);
		MyDiv_TR.appendChild(MyDiv_TD_Spc1);
		MyDiv_TR.appendChild(MyDiv_TD_KR);
		MyDiv_TR.appendChild(MyDiv_TD_Spc2);
		MyDiv_TR.appendChild(MyDiv_TD_All);
		MyDiv_TR.appendChild(MyDiv_TD_Spc3);
		MyDiv_TR.appendChild(MyDiv_TD_Info);
		MyDiv_TR.appendChild(MyDiv_TD_Spc4);
		MyDiv_TR.appendChild(MyDiv_TD_XML);

		MyDiv.appendChild(MyDiv_TR);

		// Установка атрибутов и задание размеров для первой строки
		MyDiv_TR.setAttribute("style", "width: auto; height: 25px;");
		MyDiv_TD_InfoDownload.setAttribute("style", "width: 240px; height: inherit;");
		MyDiv_TD_InfoDownload.setAttribute("id", "InfoDownloadCell");
		MyDiv_TD_Spc1.setAttribute("style", "width: 10px; height: inherit;");
		MyDiv_TD_KR.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD_KR.setAttribute("id", "InfoKRCell");
		MyDiv_TD_Spc2.setAttribute("style", "width: 50px; height: inherit;");
		MyDiv_TD_All.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD_Spc3.setAttribute("style", "width: 50px; height: inherit;");
		MyDiv_TD_Info.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD_Spc4.setAttribute("style", "width: 10px; height: inherit;");
		MyDiv_TD_XML.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD_XML.setAttribute("id", "InfoXMLCell");

		// Вставка второй строки в таблицу
		MyDiv_TR2.appendChild(MyDiv_TD2_CheckBox);
		MyDiv_TR2.appendChild(MyDiv_TD2_Spc0);
		MyDiv_TR2.appendChild(MyDiv_TD2_KR_ALL);
		MyDiv_TR2.appendChild(MyDiv_TD2_Spc1);
		MyDiv_TR2.appendChild(MyDiv_TD2_TableToCSV);
		MyDiv_TR2.appendChild(MyDiv_TD2_Spc3);
		MyDiv_TR2.appendChild(MyDiv_TD2_XML_by_KKTList);

		MyDiv_TR2.appendChild(MyDiv_TD2_Spc5);
		MyDiv_TR2.appendChild(MyDiv_TD2_XML_ALL);

		MyDiv.appendChild(MyDiv_TR2);

		// Установка атрибутов и задание размеров для второй строки
		MyDiv_TR2.setAttribute("style", "width: auto; height: 25px;");
		MyDiv_TD2_CheckBox.setAttribute("style", "width: 240px; height: inherit;");
		MyDiv_TD2_CheckBox.setAttribute("id", "InfoCheckBoxAll");
		MyDiv_TD2_Spc0.setAttribute("style", "width: 10px; height: inherit;");
		MyDiv_TD2_KR_ALL.setAttribute("style", "width: 150px; height: inherit; padding-top: 10px");
		MyDiv_TD2_KR_ALL.setAttribute("id", "InfoKRAllCell");
		MyDiv_TD2_Spc1.setAttribute("style", "width: 50px; height: inherit;");
		MyDiv_TD2_TableToCSV.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD2_Spc3.setAttribute("style", "width: 50px; height: inherit;");
		MyDiv_TD2_XML_by_KKTList.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD2_XML_by_KKTList.setAttribute("id", "InfoXML_by_KKTList");
		MyDiv_TD2_Spc5.setAttribute("style", "width: 10px; height: inherit;");
		MyDiv_TD2_XML_ALL.setAttribute("style", "width: 150px; height: inherit;");
		MyDiv_TD2_XML_ALL.setAttribute("id", "InfoXMLAllCell");

		// Отрисовка кнопок и чекбоксов
		MyDiv_TD_KR.innerHTML = '<input id="MyCB_KR" type="button" value="Выгрузить КР" style="width: inherit; height: inherit;">';
		MyDiv_TD_All.innerHTML = '<input id="MyCB_AllDownload" type="button" value="Выгрузить Всё" style="width: inherit; height: inherit;">';
		MyDiv_TD_Info.innerHTML = '<input id="MyCB_GetClientData" type="button" value="Выгрузить ИНФО" style="width: inherit; height: inherit;">';
		MyDiv_TD_XML.innerHTML = '<input id="MyCB_GetXML" type="button" value="Выгрузить XML" style="width: inherit; height: inherit;">';
		MyDiv_TD2_KR_ALL.innerHTML = '<input id="MyCB_KRAll" type="button" value="КР по ВСЕМ ККТ" disabled= "true" style="width: inherit; height: inherit;">';
		MyDiv_TD2_XML_ALL.innerHTML = '<input id="MyCB_GetXMLAll" type="button" value="XML по ВСЕМ ККТ" disabled="true" style="width: inherit; height: inherit;">';
		MyDiv_TD2_XML_by_KKTList.innerHTML = '<input id="MyCB_XML_by_KKTList" type="button" value="XML по списку ККТ" disabled="true" style="width: inherit; height: inherit;" onclick="document.getElementById(\'MyDiv_file-input\').click()">';
		MyDiv_TD2_TableToCSV.innerHTML = '<input id="MyCB_TableToCSV" type="button" value="Всю таблицу в csv" disabled="true" style="width: inherit; height: inherit;">';
		MyDiv_TD2_CheckBox.innerHTML = '<label>Включить кнопки по ВСЕМ ККТ? </label><input id="MyCB_InfoCheckBoxAll" type="checkbox" style="width: 18px; height: 18px; vertical-align: middle;">';

		// Добавление блока для работы со списком файлов
		Div_file_input.id = 'MyDiv_file-input'
		Div_file_input.type = 'file'
		Div_file_input.name = 'FileDialog'
		Div_file_input.style = 'display: none;'
		Div_file_input.accept = 'text/plain'

		Div_KKTList_Content.id = 'MyDiv_KKTList_Content'
		Div_KKTList_Content.style = 'display: none;'

		MyDiv.appendChild(Div_file_input)
		MyDiv.appendChild(Div_KKTList_Content)

		// Указание событий на кнопки
		document.getElementById("MyCB_KR").onclick = Exec_KR;
		document.getElementById("MyCB_AllDownload").onclick = Exec_All;
		document.getElementById("MyCB_GetClientData").onclick = Exec_Info;
		document.getElementById("MyCB_GetXML").onclick = Exec_Xml;
		document.getElementById("MyCB_InfoCheckBoxAll").addEventListener('change', (event) => { ChangeCheckBox() })
		document.getElementById("MyCB_GetXMLAll").onclick = Exec_Xml_All;
		document.getElementById("MyCB_KRAll").onclick = Exec_KR_All;
		document.getElementById("MyCB_TableToCSV").onclick = Exec_TableGrid_to_CSV;

		// Обработка событий по файловому списку касс
		document.querySelector("#MyDiv_file-input").addEventListener('change', function () {

			// Выбранные файлы
			let all_files = this.files;
			if (all_files.length == 0) {
				alert('Ошибка : Не выбран файл');
				return;
			}

			// Выбираем первый файл из списка
			let file = all_files[0];

			// Нужный тип файла
			let allowed_types = ['text/plain'];
			if (allowed_types.indexOf(file.type) == -1) {
				alert('Ошибка : Неверный тип файла');
				return;
			}

			// Размер файла максимум 2 Мб
			let max_size_allowed = 2 * 1024 * 1024
			if (file.size > max_size_allowed) {
				alert('Ошибка : Размер файла превышает 2Мб');
				return;
			}

			let reader = new FileReader();

			// Чтение файла
			reader.addEventListener('loadstart', function () {
			});

			// Файл прочитан успешно
			reader.addEventListener('load', function (e) {
				let text = e.target.result;
				document.querySelector("#MyDiv_KKTList_Content").innerHTML = text; // Содержимое файла на страницу
			});

			// Не удалось прочитать файл
			reader.addEventListener('error', function () {
				alert('Ошибка : Не удалось прочитать файл');
			});

			// Читаем файл как текст
			reader.readAsText(file);

			// Даем возможность для повторного выбора файла
			this.value = null;

		})
		// Событие на изменение данных по списку ККТ (структура HTML)
		document.querySelector("#MyDiv_KKTList_Content").addEventListener('DOMSubtreeModified', function () { setTimeout(CheckInnerHTML_KKTList_Content, 100) })
	};

	// Проверка состояния Чек Бокса
	function ChangeCheckBox() {

		let Chbx = document.getElementById("MyCB_InfoCheckBoxAll")

		// Если чекбокс установлен, то включаем кнопки
		if (Chbx.checked == true) {
			document.getElementById("MyCB_KRAll").removeAttribute("disabled");
			document.getElementById("MyCB_GetXMLAll").removeAttribute("disabled")
			document.getElementById("MyCB_TableToCSV").removeAttribute("disabled")
			document.getElementById("MyCB_XML_by_KKTList").removeAttribute("disabled")
		}
		// Иначе, выключаем
		else {
			document.getElementById("MyCB_KRAll").setAttribute("disabled", "true");
			document.getElementById("MyCB_GetXMLAll").setAttribute("disabled", "true")
			document.getElementById("MyCB_TableToCSV").setAttribute("disabled", "true")
			document.getElementById("MyCB_XML_by_KKTList").setAttribute("disabled", "true")
		}

	}

	// Выключение кнопок
	function disableButtons() {
		document.getElementById("MyCB_KR").setAttribute("disabled", "true");
		document.getElementById("MyCB_AllDownload").setAttribute("disabled", "true");
		document.getElementById("MyCB_GetClientData").setAttribute("disabled", "true");
		document.getElementById("MyCB_GetXML").setAttribute("disabled", "true");
		document.getElementById("MyCB_KRAll").setAttribute("disabled", "true");
		document.getElementById("MyCB_GetXMLAll").setAttribute("disabled", "true");
		document.getElementById("MyCB_TableToCSV").setAttribute("disabled", "true");
		document.getElementById("MyCB_XML_by_KKTList").setAttribute("disabled", "true");
		document.getElementById("MyCB_InfoCheckBoxAll").setAttribute("disabled", "true");
		document.getElementById("MyCB_InfoCheckBoxAll").checked = false

	}

	// Включение кнопок
	function enableButtons() {
		document.getElementById("MyCB_KR").removeAttribute("disabled");
		document.getElementById("MyCB_AllDownload").removeAttribute("disabled");
		document.getElementById("MyCB_GetClientData").removeAttribute("disabled");
		document.getElementById("MyCB_GetXML").removeAttribute("disabled");
		document.getElementById("MyCB_InfoCheckBoxAll").removeAttribute("disabled")
		document.getElementById("MyCB_InfoCheckBoxAll").checked = false

	}

	// Скачивание файла с явным указанием ссылки и во что полученный файл переименовать
	async function downloadFile(url, filename) {
		return fetch(url).then(function (t) {
			return t.blob().then((b) => {
				let a = document.createElement("a");
				a.href = URL.createObjectURL(b);
				a.setAttribute("download", filename);
				a.click();
				a.remove();
			});
		});
	};

	// Скачивание json c явным указанием названия файл и содержимого json
	function downloadJson(filename, text) {
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.click();
		element.remove();
	};

	// Кнопка "Выгрузить ИНФО"
	function Exec_Info() {
		downloadJson("Client.json", JSON.stringify(ClientInfo()));
	}

	// Кнопка "Всю таблицу в csv"
	async function Exec_TableGrid_to_CSV() {
		CellInfo.innerText = 'Ожидаем получения таблицы...';
		disableButtons(); // Выключаем кнопки
		ClearInfoCell(); // Очищаем инфо ячейку
		let KKT_Array = await GetKKTArrayFromLoadgrid(true) // Ожидаем загрузки таблицы с фильтром по КПП

		// Если массив с кассами не пустой, то запускаем обработку
		if (KKT_Array != false) {
			CellInfo.innerText = 'Форматируем csv-файл...';
			let CSV = '';
			// Добавляем заголовок в CSV файл
			let row = "";
			row += '"' + "КПП" + '",';
			row += '"' + "Дата регистрации в НО" + '",';
			row += '"' + "Код НО" + '",';
			row += '"' + "Адрес места установки" + '",';
			row += '"' + "ОФД" + '",';
			row += '"' + "РН ККТ" + '",';
			row += '"' + "UN" + '",';
			row += '"' + "Модель" + '",';
			row += '"' + "Срок окончания действия ФН" + '",';
			row += '"' + "Заводской номер" + '",';
			row += '"' + "Состояние" + '",';
			row += '"' + "Требуются документы ФН?" + '",';
			row += '"' + "ККТ правопредшественника" + '"';
			CSV += row + '\r\n';

			// Добавление строк в CSV файл
			for (let i = 0; i < KKT_Array.length; i++) {
				let row = "";
				for (let index in KKT_Array[i]) {
					row += '"' + KKT_Array[i][index] + '",';
				}
				row.slice(0, row.length - 1);
				CSV += row + '\r\n';
			}

			// Указание названия csv-файла  "ИНН" + "Название Юр лица" + ".csv"
			let filename;
			let ClientName = (ClientInfo()).fullname.replace(/&quot;/g, '"')
			let INN = (ClientInfo()).inn
			filename = INN + ' _ ' + ClientName + '.csv'
			filename = filename.replace(/[/\\?%*:|"<>]/g, '');

			CellInfo.innerText = 'Скачиваем csv-файл...';
			// Скачиваем csv-файл

			let blob = new Blob([CSV], { type: 'text/csv' });
			let csvUrl = URL.createObjectURL(blob);
			await downloadFile(csvUrl, filename); // Ожидаем скачивание файла

			ClearInfoCell(); // Очищаем инфо ячейку
		};
		enableButtons(); // Включаем обратно кнопки
	}

	// Кнопка "Выгрузить КР"
	async function Exec_KR() {
		let KKT_Array = await GetKKTArrayFromHTMLTable(); // Ожидаем обработки видимой таблицы

		// Если массив с кассами не пустой, то запускаем обработку
		if (KKT_Array != false) {
			let ProgressCell = document.getElementById("InfoKRCell");
			let Button = document.getElementById("MyCB_KR");
			let URL_Array = [];
			let INN = ClientInfo().inn; // ИНН

			// Формируем массив со ссылками и названиями файлов
			KKT_Array.map(a => {
				URL_Array.push({
					URL: `https://lkul.nalog.ru/kkt/index/getPdfCard?token=${SessionToken}&zn=${a.un}`,
					FileName: `Карточка регистрации ККТ _ ${INN} _ ${a.kpp} _ ${a.model.replace(/[/\\?%*:|"<>]/g, ' ')} _ ${a.kkt}.pdf`
				})
			});
			await ProcessDownloadFiles(ProgressCell, Button, URL_Array) // Ожидаем скачку всех файлов
		};
	}

	// Кнопка "КР по ВСЕМ ККТ"
	async function Exec_KR_All() {
		CellInfo.innerText = 'Ожидаем получения таблицы...';
		disableButtons(); // Выключаем кнопки
		let KKT_Array = await GetKKTArrayFromLoadgrid(true) // Ожидаем получение таблицы с фильтром по КПП
		ClearInfoCell(); // Очищаем инфо ячейку

		// Если массив с кассами не пустой, то запускаем обработку
		if (KKT_Array != false) {
			let ProgressCell = document.getElementById("InfoKRAllCell");
			let Button = document.getElementById("MyCB_KRAll");
			let URL_Array = [];
			let INN = ClientInfo().inn; // ИНН

			// Формируем массив со ссылками и названиями файлов
			KKT_Array.map(a => {
				URL_Array.push({
					URL: `https://lkul.nalog.ru/kkt/index/getPdfCard?token=${SessionToken}&zn=${a.un}`,
					FileName: `Карточка регистрации ККТ _ ${INN} _ ${a.kpp} _ ${a.model.replace(/[/\\?%*:|"<>]/g, ' ')} _ ${a.kkt}.pdf`
				})
			});
			await ProcessDownloadFiles(ProgressCell, Button, URL_Array) // Ожидаем скачку всех файлов
		};
		enableButtons(); // Включаем кнопки
	}

	// Кнопка "Выгрузить XML"
	async function Exec_Xml() {
		let KKT_Array = await GetKKTArrayFromHTMLTable(); // Ожидаем обработки видимой таблицы

		// Если массив с кассами не пустой, то запускаем обработку
		if (KKT_Array != false) {
			let ProgressCell = document.getElementById("InfoXMLCell");
			let Button = document.getElementById("MyCB_GetXML");
			let URL_Array = []

			// Формируем массив со ссылками и названиями файлов
			KKT_Array.map(a => {
				URL_Array.push({
					URL: `https://lkul.nalog.ru/kkt/index/getAsXML?token=${SessionToken}&unique=${a.un}&rnm=${a.rnm}&need142=0`,
					FileName: `kkt_details_${a.kpp}_${a.kkt}_${a.rnm}.xml`
				})
			});

			await ProcessDownloadFiles(ProgressCell, Button, URL_Array) // Ожидаем скачку всех файлов
		}
	}

	// Кнопка "XML по ВСЕМ ККТ"
	async function Exec_Xml_All() {
		CellInfo.innerText = 'Ожидаем получения таблицы...';
		disableButtons(); // Выключаем кнопки
		let KKT_Array = await GetKKTArrayFromLoadgrid(true) // Ожидаем получение таблицы с фильтром по КПП
		ClearInfoCell(); // Очищаем инфо ячейку

		// Если массив с кассами не пустой, то запускаем обработку
		if (KKT_Array != false) {
			let ProgressCell = document.getElementById("InfoXMLAllCell");
			let Button = document.getElementById("MyCB_GetXMLAll");
			let URL_Array = [];

			// Формируем массив со ссылками и названиями файлов
			KKT_Array.map(a => {
				URL_Array.push({
					URL: `https://lkul.nalog.ru/kkt/index/getAsXML?token=${SessionToken}&unique=${a.un}&rnm=${a.rnm}&need142=0`,
					FileName: `kkt_details_${a.kpp}_${a.kkt}_${a.rnm}.xml`
				})
			});

			await ProcessDownloadFiles(ProgressCell, Button, URL_Array) // Ожидаем скачку всех файлов
		}
		enableButtons(); // Включаем кнопки
	}

	// Проверка, что есть хоть что-то в загружаемом пользователем файле со списом касс
	function CheckInnerHTML_KKTList_Content() {
		if (document.querySelector("#MyDiv_KKTList_Content").innerHTML.length != 0) { Exec_XML_by_KKTList() }
	}

	// Кнопка "XML по списку ККТ"
	async function Exec_XML_by_KKTList() {
		let KKT_List = document.querySelector("#MyDiv_KKTList_Content").innerHTML.split('\n').filter(v => v)

		// Если в списке есть кассы, то запускаем обработку
		if (KKT_List.length > 0) {
			CellInfo.innerText = 'Ожидаем получения таблицы...';
			disableButtons(); // Выключаем кнопки
			let KKT_Array = await GetKKTArrayFromLoadgrid(KKT_List) // Ожидаем получение таблицы с фильтром по переданным кассам
			ClearInfoCell(); // Очищаем инфо ячейку

			// Если массив с кассами не пустой, то запускаем обработку
			if (KKT_Array != false) {
				let ProgressCell = document.getElementById("InfoXML_by_KKTList");
				let Button = document.getElementById("MyCB_XML_by_KKTList");
				let URL_Array = [];
				// Формируем массив со ссылками и названиями файлов
				KKT_Array.map(a => {
					URL_Array.push({
						URL: `https://lkul.nalog.ru/kkt/index/getAsXML?token=${SessionToken}&unique=${a.un}&rnm=${a.rnm}&need142=0`,
						FileName: `kkt_details_${a.kpp}_${a.kkt}_${a.rnm}.xml`
					})
				});
				await ProcessDownloadFiles(ProgressCell, Button, URL_Array) // Ожидаем скачку всех файлов
			}
		}
		// Очистка списка касс из файлового импорта
		document.querySelector("#MyDiv_KKTList_Content").innerHTML = ''
		enableButtons(); // Включение кнопок
	}

	// Загрузка файлов по списку
	async function ProcessDownloadFiles(ProgressCell, Button, URL_Array) {
		CreateProgressBar(ProgressCell, Button, URL_Array.length) // Создание прогресс бара
		TextInfoCell(0, URL_Array.length); // Добавление текста в инфо ячейку
		let i = 1;

		// Пробегаемся по массиву со ссылками и скачиваем файлы
		for (const URL_Array_Line of URL_Array) {
			await downloadFile(URL_Array_Line.URL, URL_Array_Line.FileName); // Ожидание скачивания файла
			ChangeProgressBar(i); // Изменение прогресс бара
			TextInfoCell(i, URL_Array.length) // Изменение значения в инфо ячейке
			if (i === URL_Array.length) {
				window.setTimeout(ClearInfoCell, 5000); // Очищение инфо ячейки через 5 секунд
				RemoveProgressBar(ProgressCell, Button) // Удаление прогресс бара
			};
			i++;
		}
	}

	// Окно с запросом КПП
	async function GetKPP() {
		let KppString, Solution;
		KppString = prompt('Введите КПП через запятую. (При пустом значении будет запрошены все кассы)')

		// Если введенное значение не null
		if (KppString != null) {
			if (KppString === '') { Solution = "All Data" } // Если КПП не указано, то запрашиваем все
			else {
				let KppArray = [];
				KppString.split(',').forEach(function (item) { KppArray.push(item.trim()) }); // Разбиваем список в массив
				Solution = KppArray
			}
		}
		// Иначе значение null (при нажатии на кнопку 'Отмена')
		else { Solution = "Cancel" }
		return Solution
	}

	// Отображение Прогресс бара, сокрытие кнопки
	function CreateProgressBar(ProgressCell, Button, Length) {
		disableButtons(); // Выключаем кнопки
		let ProgressBar = document.createElement("progress");
		ProgressBar.setAttribute("id", "ProgressBarId")
		ProgressBar.setAttribute("style", "width: 100%; height: 15px");
		ProgressBar.setAttribute("max", Length);
		ProgressBar.setAttribute("value", 0);
		Button.style.display = 'none'
		ProgressCell.appendChild(ProgressBar);
	}

	// Изменение значения Прогресс бара
	function ChangeProgressBar(Value) {
		let ProgressBar = document.getElementById("ProgressBarId");
		ProgressBar.setAttribute("value", Value)
	}

	// Удаление Прогресс бара, показ кнопки
	function RemoveProgressBar(ProgressCell, Button) {
		let ProgressBar = document.getElementById("ProgressBarId");
		ProgressCell.removeChild(ProgressBar);
		Button.style.display = ''
		ProgressBar.remove();
		enableButtons(); // Включаем кнопки
	}

	// Изменение информационного поля
	function TextInfoCell(Counter, MaxLength) {
		let Text = ("Загружено файлов " + Counter + " из " + MaxLength)
		CellInfo.innerText = Text;
	}

	// Кнопка "Выгрузить Всё"
	function Exec_All() {
		Exec_Info();
		Exec_Xml();
	}

	// Очистка информационного поля
	function ClearInfoCell() {
		CellInfo.innerText = '';
	};

	// Формирование данных по клиенту (парсинг шапки)
	function ClientInfo() {
		let ClientData = [];
		ClientData = ({
			fullname: organization.info.fullname, // Название организации
			inn: organization.info.inn, // ИНН
			name: adminInfo.name, // Имя
			surname: adminInfo.surname, // Фамилия
			midname: adminInfo.midname, // Отчетство
		});
		return ClientData;
	};

	// Получение массива со списком касс (и ее свойств) с отображаемого содержимого таблицы
	async function GetKKTArrayFromHTMLTable() {
		let tableRows = $("table.x-grid-table  tr.x-grid-row");
		let KKT_Array = [];
		let CheckState;
		tableRows.map((a, b) => {
			CheckState = $(b).find(".x-grid-cell-gridcolumn-1108").text() // Проверка, что дата окончания ФН не пустая. Статус игнорируется.
			if (CheckState != String.fromCharCode(160)) { // Проверка, что дата окончания ФН не пустая. Статус игнорируется.
				KKT_Array.push({
					kpp: $(b).find(".x-grid-cell-gridcolumn-1101").text(), // КПП
					reg_date: $(b).find(".x-grid-cell-gridcolumn-1102").text(), // Дата регистрации ККТ в НО
					kod_no: $(b).find(".x-grid-cell-gridcolumn-1103").text(), // Код НО
					address: $(b).find(".x-grid-cell-gridcolumn-1104").text(), // Адрес места установки
					ofd: $(b).find(".x-grid-cell-gridcolumn-1105").text(), // Название ОФД
					rnm: $(b).find(".x-grid-cell-gridcolumn-1106").text().replace(/ /g, ''), // Регистрационный номер (убираем пробелы)
					un: $(b).find(".x-grid-cell-gridcolumn-1106 span").attr("un"), // Уникальный номер ККТ в БД ЛК ФНС
					model: $(b).find(".x-grid-cell-gridcolumn-1107").text(), // Название модели ККТ
					fn_end_date: $(b).find(".x-grid-cell-gridcolumn-1108").text(), // Дата остановки ФН
					kkt: $(b).find(".x-grid-cell-gridcolumn-1109").text(), // Заводской номер ККТ
					kkt_state: $(b).find(".x-grid-cell-gridcolumn-1110")[0].innerText.split("\n")[0], // Статус ККТ
					fn_docs_needs: $(b).find(".x-grid-cell-gridcolumn-1110")[0].innerText.split("\n")[1], // Требуются ли документы ФН
				})
			};
		});
		// Если массив с кассами не пустой, то возвращаем массив, иначе значение false
		if (KKT_Array.length != 0) { return KKT_Array } else { return false }
	}

	// Получения массива со списком касс (и ее свойств) по всей таблице касс (не отображается)
	async function GetKKTArrayFromLoadgrid(e) {
		let IfStatement, CanContinue, KppArray
		let KKT_Array = [];
		let url = 'https://lkul.nalog.ru/kkt/index/loadgrid' // Ссылка, где заправшивать всю таблицы с ККТ (JSON-формат)

		// Если фильтруемся по КПП
		if (e === true) {
			KppArray = await GetKPP() // Диалог указания КПП
			// Формирование условия для отбора данных из таблицы
			if (KppArray === "Cancel") { CanContinue = false } // Если в диалоге нажали на кнопку "Отмена", то не продолжаем
			else if (KppArray === "All Data") {
				IfStatement = 'a.limitDateFp != valueIsNull' // Все кассы с датами остановки ФН
				CanContinue = true // Можем продолжать
			}
			else {
				IfStatement = 'a.limitDateFp != valueIsNull && KppArray.includes(a.kpp)';  // Все кассы с датами остановки ФН и фильтром по КПП
				CanContinue = true // Можем продолжать
			}
		}
		// Иначе фильтруемся по списку ККТ
		else {
			IfStatement = 'a.limitDateFp != valueIsNull && e.includes(a.serial)' // Кассы по списку с датами остановки ФН
			CanContinue = true // Можем продолжать
		}
		// Если можно продолжать, то запрашиваем таблицу
		if (CanContinue) {
			obj = await (await fetch(url).).json(); // Ожидаем загрузки таблицы (очень объемная, зависит от кол-ва ККТ)
			obj.root.map((a) => {
				// Полученную таблицу фильтруем по вышезаданным условиям
				if (eval(IfStatement)) {
					// Отфильтрованные значения добавляем в массив с кассами
					KKT_Array.push({
						kpp: a.kpp, // КПП
						reg_date: a.dateReg, // Дата регистрации ККТ в НО
						kod_no: a.noCode, // Код НО
						address: a.address, // Адрес места установки
						ofd: a.ofdName, // Название ОФД
						rnm: (a.rnm).replace(/ /g, ''), // Регистрационный номер (убираем пробелы)
						un: a.uniqNumber, // Уникальный номер ККТ в БД ЛК ФНС
						model: a.model, // Название модели ККТ
						fn_end_date: a.limitDateFp, // Дата остановки ФН
						kkt: a.serial, // Заводской номер ККТ
						kkt_state: a.status, // Статус ККТ
						fn_docs_needs: a.dolgfn, // Требуются ли документы ФН
					})
				}
			})
		}
		// Если массив с кассами не пустой, то возвращаем массив, иначе значение false
		if (KKT_Array.length != 0) { return KKT_Array } else { return false }
	}

	// Отрисовка менюшек и кнопок
	AddMenuToSite();

	// Ячейка для информирования
	var CellInfo = document.getElementById("InfoDownloadCell");

})();