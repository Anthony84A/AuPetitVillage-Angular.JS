import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  private products = [
    {id: 1,
      name: 'Astérix et Idéfix', 
      price: 19,
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_asterix_idefix.jpg'},

    {id: 2, 
      name: 'Astérix et Obélix', 
      price: 39, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_asterix_obelix.jpg'},

    {id: 3, 
      name: 'Astérix frappe un romain', 
      price: 15,
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_asterix_romains.jpg'},

    {id: 4, 
      name: 'Astérix', 
      price: 30, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_asterix.jpg'},

    {id: 5, 
      name: 'Idéfix', 
      price: 20, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_idefix.jpg'},

    {id: 6, 
      name: 'Astérix et Obélix', 
      price: 35,
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_obelix_idefix.jpg'},

    {id: 7, 
      name: 'Obélix et Idéfix', 
      price: 28,
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_obelix_menhir.jpg'},

    {id: 8, 
      name: 'Obélix et son menhir', 
      price: 25, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_trio_asterix.jpg'},

    {id: 9, 
      name: 'Obélix et son tonneau', 
      price: 23,
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_obelix.jpg'},

    {id: 10, 
      name: 'Panoramix', 
      price: 18, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_panoramix.jpg'},

    {id: 11, 
      name: 'Vercingétorix', 
      price: 13, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_vercingetorix.jpg'},

    {id: 12, 
      name: 'Les villageois', 
      price: 10, 
      description: "Cette figurine inspirée de l'univers d'Astérix représente avec fidélité l'un des célèbres personnages du village gaulois. Détails soignés et couleurs vives évoquent parfaitement l'esprit de la bande dessinée, capturant le charme et l'humour de l'œuvre de Goscinny et Uderzo. Un incontournable pour les collectionneurs et fans d'Astérix !",
      imageUrl: './assets/img/produits/fig_villageois.jpg'},

  ];

  getProducts() {
    return this.products;
  }


  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
  
}
