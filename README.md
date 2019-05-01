#Para rodar a aplicação basta seguir os seguites passos:#

1. No terminal com linux/macos 'yarn', com windows se yarn não funcionar, use 'npm install'
2. No terminal com linux/macos 'yarn dockerinit', com windows se yarn não funcionar, use 'npm dockerinit'. Este comando irá iniciar o docker
3. No terminal execute o seguinte comando 'npx sequelize db:create' e em seguida 'npx sequelize db:migrate'


Obs: O passo 1 irá baixar todos os pacotes de dependência do projeto.
O passo 2 irá iniciarlizar o banco de dados postgres com o docker, lembrando que o mesmo já deve estar instalado.
Já o passo 3 irá criar a base de dados no banco dentro do docker.
