Site web : -  
Préprod : -  

# Installer le projet
## Prérequis
- PHP 8.0
- Composer 2

## Installer les dépendances
Installer la base de données :  
`make install_db`  

Installer les autres dépendances :  
`make install`

## Testerle projet
- `make cs`
- `make csfix`
- `make stan`  
ou tout simplement `make test` pour lancer les commandes précédentes

## Commandes utiles
- `make help`
- `make migrate`
- `make rollback`
- `make fresh` 
