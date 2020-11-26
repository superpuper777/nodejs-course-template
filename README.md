# Caesar-CLI

Утилита для шифровки и дешифровки текста по средствам [шифра Цезаря](https://en.wikipedia.org/wiki/Caesar_cipher).

## Версия node

v14.13.0

## Установка

`git clone https://github.com/shazzzam/caesar-cli && cd caesar-cli && npm i`

## Использование

Запуск - `node caesar`, доступные опции:

- **-s, --shift** - целое число. Сдвиг ключа Цезаря. Обязательный параметр
- **-a, --action** - действие шифровка/разшифровка. Может принимать значения **encode/decode**. Обязательный Параметр
- **-i, --input** - файл входных данных. Строка содержащая путь к файлу с текстом для шифрования. Если данный параметр не задан, то данные беруться из входного потока stdin
- **-o, --output** - файл выходных данных. Строка содержащая путь к файлу для записи результата работы. Если данный параметр не задан, то данные выводятся в выходной поток stdout

Для завершения работы приложения в режиме работы с stdin необходимо нажать **ctrl + c**

### Примеры использования

```
node caesar -s 5 -a decode
ABcd -input
VWxy -output

I like it
D gdfz do

node caesar -s 16 -a encode

My name is Alena
Co dqcu yi Qbudq
```

```
node caesar --shift 10 --action encode --input input.txt --output output.txt

input.txt >
adveabqaafafAFGWGW

output.txt >
cfxgcdscchchCHIYIY
```

```
node caesar --shift 43 -a encode -o output.txt
Game over! #$""""1234

output.txt >
Xrdv fmvi! #$""""1234

```
