# ReadShare - Aplikacja do dzielenia się książkami

# API

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
