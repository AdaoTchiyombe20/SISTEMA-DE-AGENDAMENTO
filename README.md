# Sistema de Agendamento de Consultas Online

Este projeto é um sistema web para agendamento de consultas online em uma clínica, facilitando o gerenciamento de horários, pacientes e profissionais de saúde.

## Funcionalidades

- Cadastro de pacientes e profissionais
- Agendamento, edição e cancelamento de consultas
- Visualização de agenda por dia, semana ou mês
- Notificações por e-mail para confirmações e lembretes
- Controle de disponibilidade dos profissionais
- Relatórios de consultas realizadas e agendadas

## Tecnologias Utilizadas

- **Backend:** PHP (XAMPP)
- **Frontend:** HTML, CSS, JavaScript
- **Banco de Dados:** MySQL

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Importe o banco de dados (`database.sql`) no MySQL.
3. Configure as credenciais do banco no arquivo `config.php`.
4. Inicie o servidor Apache e MySQL pelo XAMPP.
5. Acesse `http://localhost/sistema de agendamento/` no navegador.

## Estrutura do Projeto

```
/sistema de agendamento
├── index.php
├── config.php
├── /assets
├── /views
├── /controllers
└── /models
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para o branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
