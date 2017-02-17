var database = {
	"schueler": {
		"rowInformation": [
			"Vorname", "Nachname", "Mail"
		],
		"data": [
			[
				"Frederik", "Hutfleß", "frederik@hutfless.net"
			],
			[
				"Niklas", "Fanslau", "nik.fanslau@gmail.de"
			]
		]
	},
	"lehrer": {
		"rowInformation": [
			"Vorname", "Nachname", "Mail", "Abkürzung"
		],
		"data": [
			[
				"Ralf", "Zieße", "ziesse@gymnasium-lechenich.de", "ZIE"
			],
			[
				"Peter", "Bastgen", "bastgen@gymnasium-lechenich,de", "BAS"
			]
		]
	},
	"fächer": {
		"rowInformation": [
			"Abkürzung", "Name"
		],
		"data": [
			[
				"PH", "Physik"
			],
			[
				"M", "Mathe"
			],
			[
				"SP", "Sport"
			]
		]
	},
	"kurse": {
		"rowInformation": [
			"FachID", "LehrerID", "GK", "Nummer"
		],
		"data": [
			[
				0, 1, true, 2
			],
			[
				1, 1, false, 5
			],
			[
				2, 0, true, 1
			]
		]
	},
	"blöcke": {
		"rowInformation": [
			"AWoche", "Wochentag", "Block"
		],
		"data": [
			[
				true, 2, 1
			],
			[
				true, 2, 2
			],
			[
				true, 2, 3
			],
			[
				true, 2, 4
			],
			[
				true, 2, 5
			]
		]
	},
	"räume": {
		"rowInformation": [
			"Trakt", "Nummer"
		],
		"data": [
			[
				"A", "104"
			],
			[
				"D", "009"
			],
			[
				"ZH", "3"
			]
		]
	},
	"kursblöcke": {
		"rowInformation": [
			"KursID", "BlockID", "RaumID"
		],
		"data": [
			[
				0, 2, 1
			],
			[
				0, 3, 1
			],
			[
				1, 2, 0
			],
			[
				2, 4, 2
			]
		]
	},
	"schuelerkurse": {
		"rowInformation": [
			"SchuelerID", "KursID"
		],
		"data": [
			[
				0, 0
			],
			[
				0, 1
			],
			[
				1, 0
			],
			[
				1, 2
			]
		]
	},
	"vertretung": {
		"rowInformation": [
			"KursID", "RaumID", "datestamp"
		],
		"data": [
			[
				0, 1, 17022017
			]
		]
	},
	"aufgaben": {
		"rowInformation": [
			"VertretungID", "URL", "data-type"
		],
		"data": [
			[0, "bastgen.de/aufgabe.gpg", "image/jpg"]
		]
	},
	"rollen": {
		"rowInformation": [
			"Name"
		],
		"data": [
			[
				"schueler"
			],
			[
				"lehrer"
			],
			[
				"admin"
			]
		]
	},
	"nutzer": {
		"rowInformation": [
			"isSchueler", "SLID", "passwort", "RollenID"
		],
		"data": [
			[
				true, 0, "freds passwort", 2
			],
			[
				true, 1, "niks passwort", 0
			],
			[
				false, 0, "ziesses passwort", 1
			],
			[
				false, 1, "herr bastgens ultrasicheres passwort ¹³¼½¬{[]]{µſđŋ↓ø}", 1
			]
		]
	},
	"fachfach": {
		"rowInformation": [
			"FachID1", "FachID2", "distance"
		],
		"data": [
			[
				0, 1, 1
			],
			[
				0, 2, 4
			],
			[
				1, 2, 3
			]
		]
	}
}

function get_all(db_name) {
	return database[db_name].data;
}

function get_vertretung() {
	var i, d = get_all("vertretung");
	for (i = 0; i < d.length; ++i) {
		document.write("Kurs: " + get_all("kurse")[d[i][0]].splice(2).join("").replace("true", "GK").replace("false", "LK") +
			"<br/>Lehrer: " + get_all("lehrer")[get_all("kurse")[d[i][0]][1]][3] +
			"<br/>Fach: " + get_all("fächer")[get_all("kurse")[d[i][0]][0]][1] +
			"<br/>Raum: " + (get_all("räume")[d[i][1]].join("")));
	}
}
