/*======  Garbage Collection: limpia la memoria de los datos no utilizados 
para no sobrecargarla y seguir trabajando sin problemas.  
Si hace el proceso de Mark and Sweep para limpiar estas variables que fueron renombradas, 
Cuando hay un ciclo for las variable siempre se renombrar y las anteriores se quedan hay pero bueno para eso 
esta Garbage collection que limpia estas variables inservibles.
El algoritmo Mark & Sweep hace referencia a cuando un tipo de dato se vuelve inalcanzable para el programa.
Se toma una raíz la cual es el Objeto Global y a medida que el programa avanza, los objetos van creando o borrando 
referencias a sus raíces.
Cuando un objeto se queda con 0 referencias, se dice que el objeto es inalcanzable y es aquí cuando el Garbage Collector 
entra a hacer su trabajo (Liberar el espacio que usaban esas variables u objetos)
Desde 2012 los navegadores usan un Garbage Collector basado en este algoritmo, que ha ido recibiendo mejoras en su 
implementación constantemente.
Puedes ver más información acerca del algoritmo Mark & Sweep y de cómo hace JavaScript para gestionar su memoria en 
éste enlace 😉 https://developer.mozilla.org/es/docs/web/javascript/memory_management
======*/
