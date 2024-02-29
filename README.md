# ReadShare - Aplikacja do dzielenia się książkami

# API
----------
## Zarządzanie Użytkownikami
### Rejestracja Nowego Użytkownika
- **URL**: `/users/register`
- **Metoda**: `POST`
- **Dane Wejściowe**:
  - `username`: String (wymagane)
  - `email`: String (wymagane)
  - `password`: String (wymagane)
- **Odpowiedź Sukcesu**: Przekierowanie do `/login` z komunikatem sukcesu
- **Odpowiedź Błędu**: Przekierowanie do `/register` z komunikatem(-ami) błędu
- **Opis**: Rejestruje nowego użytkownika z użyciem nazwy użytkownika, adresu email i hasła.

### Logowanie Użytkownika
- **URL**: `/users/login`
- **Metoda**: `POST`
- **Dane Wejściowe**:
  - `username`: String (wymagane)
  - `password`: String (wymagane)
- **Odpowiedź Sukcesu**: Przekierowanie na stronę główną `/` z komunikatem sukcesu
- **Odpowiedź Błędu**: Przekierowanie do `/login` z komunikatem(-ami) błędu
- **Opis**: Uwierzytelnia użytkownika na podstawie nazwy użytkownika i hasła.

### Pobieranie Użytkownika po ID
- **URL**: `/users/:userid`
- **Metoda**: `GET`
- **Parametry URL**: `userid` (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z danymi użytkownika w formacie JSON
- **Odpowiedź Błędu**: `500 Internal Server Error` z komunikatem błędu
- **Opis**: Pobiera informacje o użytkowniku na podstawie ID użytkownika.

### Aktualizacja Hasła Użytkownika po ID
- **URL**: `/users/:userid`
- **Metoda**: `PUT`
- **Parametry URL**: `userid` (wymagane)
- **Dane Wejściowe**:
  - `password`: String (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z komunikatem sukcesu
- **Odpowiedź Błędu**: `500 Internal Server Error` z komunikatem błędu
- **Opis**: Aktualizuje hasło dla użytkownika zidentyfikowanego przez ID użytkownika.

### Usuwanie Użytkownika po ID
- **URL**: `/users/:userid`
- **Metoda**: `DELETE`
- **Parametry URL**: `userid` (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z komunikatem sukcesu
- **Odpowiedź Błędu**: `500 Internal Server Error` z komunikatem błędu
- **Opis**: Usuwa użytkownika na podstawie ID użytkownika.

----------
## Zarządzanie Książkami
### Dodawanie Książki
- **URL**: `/books/add`
- **Metoda**: `POST`
- **Dane Wejściowe**:
  - `title`: String (wymagane)
  - `author`: String (wymagane)
  - `description`: String (wymagane)
  - `userId`: String (opcjonalne, domyślnie 2)
  - `isOwnedByOwner`: Integer (opcjonalne, domyślnie 1)
- **Odpowiedź Sukcesu**: `201 Created` z komunikatem o dodaniu książki
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Dodaje nową książkę do systemu.

### Pobieranie Wszystkich Książek
- **URL**: `/books/all`
- **Metoda**: `GET`
- **Odpowiedź Sukcesu**: `200 OK` z listą wszystkich książek
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Pobiera listę wszystkich książek dostępnych w systemie.

### Pobieranie Książki po ID
- **URL**: `/books/:id`
- **Metoda**: `GET`
- **Parametry URL**: `id` (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z danymi książki
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Pobiera szczegółowe informacje o książce na podstawie jej ID.

### Aktualizacja Książki
- **URL**: `/books/:id`
- **Metoda**: `PUT`
- **Parametry URL**: `id` (wymagane)
- **Dane Wejściowe**: dowolne dane dotyczące książki
- **Odpowiedź Sukcesu**: `204 No Content` z komunikatem o aktualizacji książki
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Aktualizuje dane książki na podstawie jej ID.

### Usuwanie Książki
- **URL**: `/books/:id`
- **Metoda**: `DELETE`
- **Parametry URL**: `id` (wymagane)
- **Odpowiedź Sukcesu**: `204 No Content` z komunikatem o usunięciu książki
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Usuwa książkę z systemu na podstawie jej ID.

----------
## Zarządzanie Wiadomościami
### Wysyłanie Wiadomości
- **URL**: `/messages/send`
- **Metoda**: `POST`
- **Dane Wejściowe**:
  - `senderId`: String (wymagane)
  - `receiverId`: String (wymagane)
  - `content`: String (wymagane)
- **Odpowiedź Sukcesu**: `201 Created` z danymi wysłanej wiadomości
- **Odpowiedź Błędu**: `500 Internal Server Error` z komunikatem błędu
- **Opis**: Pozwala użytkownikowi na wysłanie wiadomości do innego użytkownika.

### Pobieranie Wiadomości
- **URL**: `/messages/:senderId/:receiverId`
- **Metoda**: `GET`
- **Parametry URL**:
  - `senderId`: String (wymagane)
  - `receiverId`: String (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z listą wiadomości
- **Odpowiedź Błędu**: `500 Internal Server Error` z komunikatem błędu
- **Opis**: Pobiera wszystkie wiadomości wymienione między dwoma użytkownikami.

----------
## Zarządzanie Wymianą Książek
### Rozpoczęcie Wymiany Książek
- **URL**: `/book-exchanges/start`
- **Metoda**: `POST`
- **Dane Wejściowe**:
  - `bookRequestId`: String (wymagane)
- **Odpowiedź Sukcesu**: `201 Created` z komunikatem o rozpoczęciu wymiany
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Inicjuje proces wymiany książek na podstawie żądania wymiany książki.

### Pobieranie Informacji o Wymianie Książek
- **URL**: `/book-exchanges/:exchangeid`
- **Metoda**: `GET`
- **Parametry URL**: `exchangeid` (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z danymi wymiany
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Pobiera szczegółowe informacje o konkretnej wymianie książek.

### Zakończenie Wymiany Książek
- **URL**: `/book-exchanges/:exchangeid/complete`
- **Metoda**: `PUT`
- **Parametry URL**: `exchangeid` (wymagane)
- **Odpowiedź Sukcesu**: `200 OK` z komunikatem o zakończeniu wymiany
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Oznacza wymianę książek jako zakończoną.

### Aktualizacja Wymiany Książek
- **URL**: `/book-exchanges/:exchangeid/update`
- **Metoda**: `PUT`
- **Parametry URL**: `exchangeid` (wymagane)
- **Dane Wejściowe**: dowolne dane dotyczące wymiany
- **Odpowiedź Sukcesu**: `200 OK` z komunikatem o aktualizacji wymiany
- **Odpowiedź Błędu**: `400 Bad Request` z komunikatem błędu
- **Opis**: Aktualizuje dane dotyczące określonej wymiany książek.