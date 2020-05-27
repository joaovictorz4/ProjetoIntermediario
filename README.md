---------------------------------------------------------------------------------------

## Endpoints

### Node

#### Descrição
Retorna informações sobre os nodes (locais do jogo)

#### URI Padrão
> http://localhost:3000/node

#### Atributos
| campo          | tipo   | descrição  |
| --             | --     | --         |
| _id            | String | Identificador único do recurso |
| nome           | String | nome do local  |
| regiao         | String | região do node    |
| custo          | String | custo de pontos de contribuição pelo node |
| gerenteDeBase  | String | nome do gerente da base  |
| date           | date   | ultima atualização   |

#### Métodos

| Método | URI          | descrição |
| --     | -- | --      |
| GET    | `/node`      | Retorna todos os nodes |
| GET    | `/node/<id>` | Retorna um nodes de acordo com seu `id` |
| POST   | `/node`      | Insere um novo node |
| PUT    | `/node/<id>` | Atualiza o node de acordo com seu `id` |
| DELETE | `/node/<id>` | Deleta o node de acordo com seu `id` |

#### Filtros

| atributo          | descrição |
| --                | --                                    |
| `?limit=<numero>` | Limita a quantidade de dados de uma requisição |
---------------------------------------------------------------------------------------

## Endpoints

### Mob

#### Descrição
Retorna informações sobre os mobs ( monstros)

#### URI Padrão
> http://localhost:3000/mob

#### Atributos
| campo          | tipo   | descrição  |
| --             | --     | --         |
| _id            | String | Identificador único do recurso |
| nome           | String | nome do mob  |
| nivel          | Number | nivel do mob    |
| defesa         | Number | pontos de defesa |
| evasao         | Number | evasão  |
| hp             | Number | quantidade de vida  |
| descricao      | String | descricao do mob  |

#### Métodos

| Método | URI         | descrição |
| --     | -- | --     |
| GET    | `/mob`      | Retorna todos os mobs |
| GET    | `/mob/<id>` | Retorna um mob de acordo com seu `id` |
| POST   | `/mob`      | Insere um novo mob |
| PUT    | `/mob/<id>` | Atualiza o mob de acordo com seu `id` |
| DELETE | `/mob/<id>` | Deleta o mob de acordo com seu `id` |

#### Filtros

| atributo          | descrição |
| --                | --                                    |
| `?limit=<numero>` | Limita a quantidade de dados de uma requisição |
---------------------------------------------------------------------------------------

## Endpoints

### LifeSkill

#### Descrição
Retorna informações sobre as lifeskill ( habilidades de vida)

#### URI Padrão
> http://localhost:3000/lifeskill

#### Atributos
| campo          | tipo   | descrição  |
| --             | --     | --         |
| _id            | String | Identificador único do recurso |
| nome           | String | nome da lifeskill  |
| descricao      | String | ultima da lifeskill   |

#### Métodos

| Método | URI         | descrição |
| --     | -- | --     |
| GET    | `/lifeskill`      | Retorna todos as lifeskill |
| GET    | `/lifeskill/<id>` | Retorna uma lifeskill de acordo com seu `id` |
| POST   | `/lifeskill`      | Insere uma nova lifeskill|
| PUT    | `/lifeskill/<id>` | Atualiza a lifeskill de acordo com seu `id` |
| DELETE | `/lifeskill/<id>` | Deleta a lifeskill de acordo com seu `id` |

#### Filtros

| atributo          | descrição |
| --                | --                                    |
| `?limit=<numero>` | Limita a quantidade de dados de uma requisição |

---------------------------------------------------------------------------------------

## Endpoints

### Item

#### Descrição
Retorna informações sobre os items 

#### URI Padrão
> http://localhost:3000/item

#### Atributos
| campo          | tipo   | descrição  |
| --             | --     | --         |
| _id            | String | Identificador único do recurso |
| nome           | String | nome do item |
| preco          | Number | preco de compra do item    |
| peso           | Number | peso do item, exemplo : 9.00LT  |
| descricao      | String | descricao do item  |

#### Métodos

| Método | URI         | descrição |
| --     | -- | --     |
| GET    | `/item`      | Retorna todos os items |
| GET    | `/item/<id>` | Retorna um item de acordo com seu `id` |
| POST   | `/item`      | Insere um novo item |
| PUT    | `/item/<id>` | Atualiza o item de acordo com seu `id` |
| DELETE | `/item/<id>` | Deleta o item de acordo com seu `id` |

#### Filtros

| atributo          | descrição |
| --                | --                                    |
| `?limit=<numero>` | Limita a quantidade de dados de uma requisição |

---------------------------------------------------------------------------------------

## Endpoints

### Classe

#### Descrição
Retorna informações sobre as classes do jogo

#### URI Padrão
> http://localhost:3000/classe

#### Atributos
| campo          | tipo   | descrição  |
| --             | --     | --         |
| _id            | String | Identificador único do recurso |
| nome           | String | nome do personagem |
| nivel          | Number | nivel do personagem   |

#### Métodos

| Método | URI         | descrição |
| --     | -- | --     |
| GET    | `/classe`      | Retorna todas as classes |
| GET    | `/classe/<id>` | Retorna uma classe de acordo com seu `id` |
| POST   | `/classe`      | Insere uma classe |
| PUT    | `/classe/<id>` | Atualiza uma classe de acordo com seu `id` |
| DELETE | `/classe/<id>` | Deleta uma classe de acordo com seu `id` |

#### Filtros

| atributo          | descrição |
| --                | --                                    |
| `?limit=<numero>` | Limita a quantidade de dados de uma requisição |




