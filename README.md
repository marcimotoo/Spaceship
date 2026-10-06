# Spaceship

Ein unfertiger Browser-Prototyp mit HTML, CSS und JavaScript zur Verwaltung eines Raumschiffs.

## Starten

Das Repository herunterladen oder klonen und `index.html` in einem aktuellen Browser öffnen. Alternativ über einen lokalen Webserver bereitstellen. Es gibt keinen Installations- oder Build-Schritt und keine Paketabhängigkeiten.

## Funktionen und aktueller Stand

- Über „Play!“ öffnet sich ein Dialog mit dem Raumschiffstatus.
- Die Oberfläche enthält Aktionen für Schaden, Schild und Reparatur-Kits sowie Lebenspunkte und Credits.
- Die Inventarstruktur in `script/hud.js` passt derzeit nicht zu den Zugriffen auf `shipCargo.kit` und `shipCargo.shield`. Deshalb können Inventar- und Schadensaktionen fehlschlagen.
- `script/game.js` enthält bislang nur eine Referenz auf das Spielelement.

## Projektstruktur

- `index.html`: Startseite und Spiel-Dialog
- `script/script.js`: Öffnen des Dialogs
- `script/hud.js`: Statusanzeige und Aktionslogik
- `script/game.js`: Grundlage für weitere Spiellogik
- `styles/`: CSS-Dateien
- `assets/`: Bild- und weitere Ressourcen
