# Pizzería Pérez 
> Un e-commerce usando React 

Éste  proyecto se ha  creado con [Create React App](https://github.com/facebook/create-react-app).

## Instalación 

```shell
git clone https://github.com/diegoperezm/pizzeriaperez.git; 
cd pizzeriaperez;
npm install;
npm start;
```

##  Scripts

### `npm start`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador. 

### `npm run build`

Construye la aplicación para producción (carpeta `build`).

## Navegación

- `/` 

   Todos los productos de la pizzería.
 
- `/category/ofertas`
- `/category/pizzas`
- `/category/adicionales`
- `/category/bebidas`
- `/category/postres`

   Todos los productos de la categoría correspondiente.
    
- `/item/productId` 

   Los detalles del producto elegido.

## Links

- Clickear el brand dirige a `/` 
- Clickear 'Ver Detalle' dirige  a `/item/productId`  
- Clickear en una  categoría del navbar dirige  a `/category/categoryId` 

## Rutas y componentes


- `/`

  Monta componente `ItemListContainer` 

- `/category/:categoryId` 

  Monta componente `ItemListContainer` 

- `/item/:productId` 

  Monta componente `ItemDetailContainer`
 
# Navegación Ejemplo 


![navegacion](https://res.cloudinary.com/dibkfoic9/image/upload/v1654808466/navegacion.gif)




## Licencia

"El código de este proyecto tiene una licencia MIT"
