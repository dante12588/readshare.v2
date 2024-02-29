# ReadShare - Aplikacja do dzielenia się książkami

# API Endpoints

## Użytkownicy

### Zwracanie danych użytkownika
- URL: `/users/:userid`
- Metoda: GET
- Opis: Zwraca dane użytkownika na podstawie podanego `userid`.

### Aktualizacja hasła użytkownika
- URL: `/users/:userid`
- Metoda: PUT
- Dane wejściowe: `password`
- Opis: Aktualizuje hasło użytkownika o podanym `userid`.

### Usuwanie użytkownika
- URL: `/users/:userid`
- Metoda: DELETE
- Opis: Usuwa użytkownika o podanym `userid`.

## Książki

### Dodawanie książki
- URL: `/books/add`
- Metoda: POST
- Dane wejściowe: `title`, `author`, `description`
- Opis: Dodaje nową książkę do systemu.

### Pobieranie wszystkich książek
- URL: `/books/all`
- Metoda: GET
- Opis: Zwraca listę wszystkich książek.

### Pobieranie książki po ID
- URL: `/books/:id`
- Metoda: GET
- Opis: Zwraca szczegóły książki na podstawie `id`.

### Aktualizacja książki
- URL: `/books/:id`
- Metoda: PUT
- Dane wejściowe: Dane do aktualizacji.
- Opis: Aktualizuje dane książki.

### Usuwanie książki
- URL: `/books/:id`
- Metoda: DELETE
- Opis: Usuwa książkę z systemu.

## Wiadomości

### Wysyłanie wiadomości
- URL: `/messages/send`
- Metoda: POST
- Dane wejściowe: `senderId`, `receiverId`, `content`
- Opis: Wysyła nową wiadomość od nadawcy do odbiorcy.

### Pobieranie wiadomości między użytkownikami
- URL: `/messages/:senderId/:receiverId`
- Metoda: GET
- Opis: Zwraca wszystkie wiadomości między dwoma użytkownikami.

## Żądania wymiany książek

### Dodawanie żądania wymiany książek
- URL: `/book-requests/add`
- Metoda: POST
- Dane wejściowe: `requesterId`, `requestedUserId`, `requesterBookId`, `requestedBookId`
- Opis: Dodaje nowe żądanie wymiany książek.

### Pobieranie wszystkich żądań wymiany książek
- URL: `/book-requests/all`
- Metoda: GET
- Opis: Zwraca wszystkie żądania wymiany książek.

### Aktualizacja żądania wymiany książek
- URL: `/book-requests/update`
- Metoda: PUT
- Dane wejściowe: `id`, `status`
- Opis: Aktualizuje status żądania wymiany książek.

## Wymiany książek

### Rozpoczynanie wymiany książek
- URL: `/book-exchanges/start`
- Metoda: POST
- Dane wejściowe: `bookRequestId`
- Opis: Rozpoczyna proces wymiany książek na podstawie żądania.

### Pobieranie wymiany książek po ID
- URL: `/book-exchanges/:exchangeid`
- Metoda: GET
- Opis: Zwraca szczegóły wymiany książek na podstawie `exchangeid`.

### Zakończenie wymiany książek
- URL: `/book-exchanges/:exchangeid/complete`
- Metoda: PUT
- Opis: Oznacza wymianę książek jako zakończoną.

### Aktualizacja wymiany książek
- URL: `/book-exchanges/:exchangeid/update`
- Metoda: PUT
- Dane wejściowe: Dane do aktualizacji.
- Opis: Aktualizuje dane wymiany książek.