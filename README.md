# BJJ Tournament Results

## About
IBJJF competition data in feature rich display

## Current Goals

Show competition results at lower belt level by schools. Ideally to give insight to the hobbyist/entry level bjj competitor as to what schools generate repeatable results.

## Getting Started

1. Clone the repo with git
2. install dependencies 
    ```sh
    $ yarn install
    ```
3. build the next bundle
    ```sh
    $ yarn build
    ```
4. start the developement server at http://localhost:3000
    ```sh
    $ yarn dev
    ```

## Web Scraper

Code for ruby web scraper can be found in `/webscraper/scraper.rb`. Webapp reads data as static json file during build and gets picked up from `public/results.json`. Any results generated from webscraper should end up there to be read by the application


### **TODO**

[ ] Testing

[ ] Concurrency

### Example output

```
 #<AthleteResult:0x00007fe251079c30 @weight_class="Light-Feather", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="José Tiago da Silva Barros", @school="PSLPB Cicero Costha">, #<AthleteResult:0x00007fe250958938 @weight_class="Feather", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Matheus Gabriel Pinheiro Barros", @school="CheckMat">, #<AthleteResult:0x00007fe25109b5b0 @weight_class="Feather", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Marcio Andre da Costa Barbosa Junior", @school="Nova União">, #<AthleteResult:0x00007fe2520615a8 @weight_class="Feather", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Isaac Doederlein", @school="Alliance">, #<AthleteResult:0x00007fe2509b40a8 @weight_class="Feather", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Osvaldo Augusto Honorio Moizinho", @school="Ares BJJ">, #<AthleteResult:0x00007fe2509d4448 @weight_class="Light", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Lucas Alves Lepri", @school="Alliance">, #<AthleteResult:0x00007fe2509ee348 @weight_class="Light", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Lucas Sette C. Valente Tobias", @school="Gracie Barra">, #<AthleteResult:0x00007fe250a07208 @weight_class="Light", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Renato Forasieppi Alves Canuto", @school="CheckMat">, #<AthleteResult:0x00007fe250a271c0 @weight_class="Light", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Rodrigo Lamounier de Freitas", @school="Rodrigo Freitas Brazilian Jiu-Jitsu">, #<AthleteResult:0x00007fe252866960 @weight_class="Middle", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Gabriel Arges de Sousa", @school="Gracie Barra">, #<AthleteResult:0x00007fe252065d10 @weight_class="Middle", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Isaque Bahiense Braz", @school="Alliance">, #<AthleteResult:0x00007fe24f908f38 @weight_class="Middle", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Jaime Soares Canuto", @school="GF Team">, #<AthleteResult:0x00007fe25002c4b8 @weight_class="Middle", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Marcos Vinícius da Silva Tinoco", @school="Alliance">, #<AthleteResult:0x00007fe252839cf8 @weight_class="Medium-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Felipe Carsalade Araujo Pena", @school="Gracie Barra">, #<AthleteResult:0x00007fe252840508 @weight_class="Medium-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Gustavo Espindola Batista", @school="Atos Jiu-Jitsu">, #<AthleteResult:0x00007fe252826dd8 @weight_class="Medium-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Matheus Oliveira Diniz", @school="Alliance">, #<AthleteResult:0x00007fe25284d280 @weight_class="Medium-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Renato Guimaraes Cardoso", @school="Alliance">, #<AthleteResult:0x00007fe252876e78 @weight_class="Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Leandro Lo Pereira do Nascimento", @school="Ns Brotherhood">, #<AthleteResult:0x00007fe25287d7c8 @weight_class="Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Dimitrius Soares Souza", @school="Alliance">, #<AthleteResult:0x00007fe2528843e8 @weight_class="Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Fernando Andrade dos Reis", @school="Alliance International">, #<AthleteResult:0x00007fe252895c10 @weight_class="Super-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Nicholas de Barcellos Meregali", @school="Alliance">, #<AthleteResult:0x00007fe25289c2e0 @weight_class="Super-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Mahamed Aly Santos da Silva", @school="Team Lloyd Irvin">, #<AthleteResult:0x00007fe2528ae828 @weight_class="Super-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Guilherme Augusto Soares Santos", @school="Alliance">, #<AthleteResult:0x00007fe2528b53a8 @weight_class="Super-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Luiz Fernando de Azevedo Panza", @school="CheckMat">, #<AthleteResult:0x00007fe2528be778 @weight_class="Ultra-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Marcus Vinícius Oliveira de Almeida", @school="CheckMat">, #<AthleteResult:0x00007fe252855188 @weight_class="Ultra-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Ricardo Ferreira Evangelista", @school="GF Team">, #<AthleteResult:0x00007fe2528cfc08 @weight_class="Ultra-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Felipe Augusto Farias Bezerra", @school="CheckMat">, #<AthleteResult:0x00007fe2528d6120 @weight_class="Ultra-Heavy", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Max dos Santos Gimenis", @school="GF Team">, #<AthleteResult:0x00007fe2528e7d58 @weight_class="Open Class", @belt_color="Black", @age="Adult", @gender="Male", @rank="1", @nombre="Marcus Vinícius Oliveira de Almeida", @school="CheckMat">, #<AthleteResult:0x00007fe2528ee7c0 @weight_class="Open Class", @belt_color="Black", @age="Adult", @gender="Male", @rank="2", @nombre="Leandro Lo Pereira do Nascimento", @school="Ns Brotherhood">, #<AthleteResult:0x00007fe2528f4d50 @weight_class="Open Class", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Fellipe Andrew Leandro Silva", @school="Zenith BJJ">, #<AthleteResult:0x00007fe252907400 @weight_class="Open Class", @belt_color="Black", @age="Adult", @gender="Male", @rank="3", @nombre="Keenan Kai-James Cornelius", @school="BJJ Globetrotters USA">, #<AthleteResult:0x00007fe25290cf18 @weight_class="Rooster", @belt_color="Black", @age="Adult", @gender="Female", @rank="1", @nombre="Mayssa Caldas Pereira Bastos", @school="GF Team">, #<AthleteResult:0x00007fe25291f7f8 @weight_class="Rooster", @belt_color="Black", @age="Adult", @gender="Female", @rank="2", @nombre="Rikako Yuasa", @school="Paraestra Shinagawa">, #<AthleteResult:0x00007fe252926350 @weight_class="Rooster", @belt_color="Black", @age="Adult", @gender="Female", @rank="3", @nombre="Serena Gabrielli", @school="Flow">, #<AthleteResult:0x00007fe25292c890 @weight_class="Rooster", @belt_color="Black", @age="Adult", @gender="Female", @rank="3", @nombre="Thamires Diógenes de Aquino", @school="GF Team">, #<AthleteResult:0x00007fe25293e4f0 @weight_class="Light-Feather", @belt_color="Black", @age="Adult", @gender="Female", @rank="1", @nombre="Tammi Alana Musumeci", @school="Brasa CTA">, #<AthleteResult:0x00007fe252944eb8 @weight_class="Light-Feather", @belt_color="Black", @age="Adult", @gender="Female", @rank="2", @nombre="Amanda Monteiro Canuto", @school="GF Team">
 ```