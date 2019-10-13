# Employee Test APP

Vytvořte webovou aplikaci se seznamem zaměstnanců ideálně pomocí Angular 2. Pokud se cítíte jistější s jinými frameworky, použijte Vámi vybraný.

## UseCases:

1. musíme mít k dispozici seznam všech zaměstnanců (třešnička na dortu-> můžeme v něm vyhledávat)
2. můžeme přijmout nového zaměstnace a chceme u něj evidovat tyto položky:

- jméno
- přijmení
- pracovní pozice (výběr z předem definovaného seznamu hodnot z API pomocí GET metody: http://ibillboard.com/api/positions)
- datum narození

3. musíme umožnit změnit jméno zaměstnance
4. zaměstnanec může změnit pozici ve firmě
5. zaměstnanec může firmu opustit

## Tipy:

- UI by mělo být uživatelsky přívětivé a jednoduché na ovládání (pokuste se vžít do role uživatele Vaší aplikace)
- vytvořte unit testy, které zvládnete
- snažte se dodržet čistotu kódu
- při programování myslete na znovu-použitelnost vytvořeného kódu
- myslete na to že někdo bude chtít vaši aplikaci spustit

---

### Spuštení aplikace:

1. git clone https://github.com/Detoxa/mern-test-app.git
2. v adresáři mern-test-app a backend nainstalujeme závislosti příkazem npn install
3. příkazem nodemon server v adresáři backend spustíme server
4. přikazem npm start v adresáři mern-test-app spustíme front-end
