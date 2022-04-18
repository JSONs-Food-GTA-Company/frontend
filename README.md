# GloboTech Academy 

## Como executar o projeto

- Após clonar o repositório:
  - ``cd frontend``
  - ``npm install``
 
 Caso dê erro, rode com ``npm install --force``
 
### Rodando localmente:
- Para rodar o projeto localmente sem o Docker, bastar executar ``npm start``

### Com Docker
- Para executar com o Docker, siga os passos: 
  - ``npm run build``
  - ``docker build -t jsons-food-front .``        
  - ``docker run -i -t -d -p 3000:3000 jsons-food-front``
 
E o projeto estará sendo executado na porta 3000
Para verificar acesse em seu navegador: 
- ``http://localhost:3000``
