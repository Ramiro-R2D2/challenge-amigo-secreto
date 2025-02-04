# Amigo Secreto Interativo 

Um sistema simples para criar pares de amigos secretos de forma interativa. A cada clique no botão de sorteio, revela um novo par sequencial, mantendo a emoção e a surpresa!

---

## Principais funcionalidades 
- **Adição fácil de amigos**: Insira nomes um por um 
- **Sorteio interativo**: Revela um par por vez com cada clique
- **Ciclo completo**: Todos recebem e são presenteados por alguém
- **Proteção anti-repetição**: Ninguém sorteia a mesma pessoa duas vezes seguidas
- **Reinício automático**: Novo shuffle após completar todos os pares

---

## Como funciona o site?

### 1. Adicionar amigos
- Digite um nome no campo e clique para adicionar à lista
- Nomes duplicados são permitidos (útil para grupos grandes)
- Mínimo de 2 participantes para iniciar o sorteio

### 2. Sortear pares
- Cada clique revela um novo par sequencial
- Ordem aleatória definida no primeiro clique
- Exemplo de sequência:

### 3. Lógica do Sorteio
- Embaralha a lista na primeira execução
- Garante conexão circular (último volta para o primeiro)
- Atualiza a lista visual automaticamente
