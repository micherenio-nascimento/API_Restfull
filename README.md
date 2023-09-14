# API
    API é uma aplicação cliente-servidor que permite a interoperabilidade entre sistemas 

## REST (Boas práticas[TEORIA])
- Rest é um padrão, um __conceito ARQUITETURAL__ e um conjunto de boa práticas.
    - Outros padrões são:
      
    ![api_architecture_styles](/img/api_architecture_styles.png)
        
## RESTFULL (Implementação de REST numa API [PRÁTICA])
    Uma API para ser conciderada RESTfull precisa ter a Maturidade de Richardson

### Maturidade de Richardson:
#### Os 4 pilares/níveis:
- Nível 0: Fazer uso do protocolo HTTP para __*comunicação*__.

    ![http](/img/http.png)
- Nível 1: __Uri bem difinidos__ e mapeados(Produto, Cliente, estoque e etc...)

- Nível 2: Uso do HTTP com o uso correto dos seus verbos (POST, GET, PUT, DEL) e o uso dos retornos(status code) 200, 500, 404.

- Nível 3: Uso de HATEOAS(Guias(links) dentro da api para mostrar as relações dos recursos)
